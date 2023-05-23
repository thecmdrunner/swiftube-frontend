import type {
  FinalVideoDataFromServer,
  InitialVideoServerRequest,
  InitialVideoServerResponse,
  VideoChaptersInFrames,
  VoiceGender,
} from "~/lib/interfaces";
import * as crypto from "crypto";
import {
  BACKEND_API_URL,
  audioPaddingInSeconds,
  chaptersIntros,
  fallbackAudioDurationInSeconds,
  fps,
  greetsAudios,
} from "~/lib/constants";
import { env } from "~/env.mjs";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

const secretKey = env.NEXT_PUBLIC_ENCRYPTION_SECRET;

export const sendReqToServer = async (
  data: InitialVideoServerRequest
): Promise<InitialVideoServerResponse> => {
  // console.log(`🚀 Utils send request to server:`, data);

  try {
    const res = await axios.post(BACKEND_API_URL + `/main/getdata`, {
      userId: data.userId,
      videoId: data.videoId,
    } as InitialVideoServerRequest);

    const response = res.data as InitialVideoServerResponse;

    if (!response.isSuccess) throw response.error;

    return {
      isSuccess: true,
      error: null,
      message: response.message,
      videoId: data.videoId,
      userId: data.userId,
    };
  } catch (err) {
    return {
      isSuccess: false,
      error: err as string,
      message: "An error occurred while asking server for response.",
      videoId: data.videoId,
      userId: data.userId,
    };
  }
};

export const getSectionDurationInSeconds = (
  voiceAudio: { urls: [string, string]; durations: [number, number] },
  gender: VoiceGender
) => {
  const durationToProcess =
    voiceAudio?.durations[gender === "male" ? 0 : 1] ??
    fallbackAudioDurationInSeconds;

  const paddedAudioDuration = durationToProcess + audioPaddingInSeconds;

  return Math.round(paddedAudioDuration);
};

export const getSectionDurationInFrames = (
  voiceAudio: { urls: [string, string]; durations: [number, number] },
  gender: VoiceGender
) => getSectionDurationInSeconds(voiceAudio, gender) * fps;

export const getTotalVideoDurationInSeconds = (
  videoData: FinalVideoDataFromServer,
  gender: VoiceGender,
  currentTime: number | string | Date
) => {
  // get intro duration
  let totalDurationInSeconds = 0;

  // Getting all parts of the intro and adding up their their durations.
  // * Make this into a separate function, and call it here.
  const introGreetDuration = getSectionDurationInSeconds(
    greetsAudios[getTimeOfTheDay(currentTime)],
    gender
  );

  const introChaptersDuration = getSectionDurationInSeconds(
    { urls: chaptersIntros.audioURLs, durations: chaptersIntros.durations },
    gender
  );

  const introDurationInSeconds = getSectionDurationInSeconds(
    videoData.data.intro.voiceAudio,
    gender
  );

  const totalIntroDurationInSeconds =
    introGreetDuration + introChaptersDuration + introDurationInSeconds;

  totalDurationInSeconds = totalDurationInSeconds + totalIntroDurationInSeconds;

  // Add all sections duration
  videoData.data.videoSections.forEach((section) => {
    totalDurationInSeconds =
      totalDurationInSeconds +
      getSectionDurationInSeconds(section.voiceAudio, gender);
  });

  // Add outro duration
  const outroDuration = getSectionDurationInSeconds(
    videoData.data.outro.voiceAudio,
    gender
  );
  totalDurationInSeconds = totalDurationInSeconds + outroDuration;

  // Add table duration if it exists
  if (videoData.data.table) {
    const tableDuration = getSectionDurationInSeconds(
      videoData.data.table.voiceAudio,
      gender
    );
    totalDurationInSeconds = totalDurationInSeconds + tableDuration;
  }

  // console.log(
  //   `Total duration: (with intro and outro) ${totalDurationInSeconds} seconds`
  // );

  return totalDurationInSeconds;
};

export const getAllChapterDurationsInFrames = (
  videoData: FinalVideoDataFromServer,
  gender: VoiceGender,
  currentTime: number | string | Date
): VideoChaptersInFrames => {
  // ! This function should return chapters as frames, not in seconds.

  // Getting all parts of the intro and adding up their their durations.
  // * Make this into a separate function, and call it here.
  const introGreetDuration = getSectionDurationInFrames(
    greetsAudios[getTimeOfTheDay(currentTime)],
    gender
  );

  const introChaptersDuration = getSectionDurationInFrames(
    { urls: chaptersIntros.audioURLs, durations: chaptersIntros.durations },
    gender
  );

  const introDurationInFrames = getSectionDurationInFrames(
    videoData.data.intro.voiceAudio,
    gender
  );

  const totalIntroDurationInFrames =
    introGreetDuration + introChaptersDuration + introDurationInFrames;

  /** This value is absolute, and does NOT take zero-th frame into account.
   * * If you seek to this frame, you will land on the first frame of the next chapter, instead of the last frame of your selected chapter.
   */
  let framesSoFar = totalIntroDurationInFrames;

  const videoSections = [totalIntroDurationInFrames];

  // Get the chapters for 2nd section onwards
  videoData.data.videoSections.forEach((section) => {
    framesSoFar =
      framesSoFar + getSectionDurationInFrames(section.voiceAudio, gender);

    return videoSections.push(framesSoFar);
  });

  // TODO: GET OUTRO????
  // TODO: GET CHART????

  let tableDurationInFrames = 0;

  const isTablePresent =
    (videoData.data.table.isPresent &&
      !!videoData.data.table.voiceAudio.urls[0]) ??
    false;

  if (isTablePresent) {
    tableDurationInFrames = getSectionDurationInFrames(
      videoData.data.table.voiceAudio,
      gender
    );
  }

  /**
   * ! TODO: PUT PROPER OUTRO DATA
   */
  // const outroDuration =
  //   framesSoFar +
  //   getSectionVideoInFrames(videoData.data.intro.voiceAudio, gender);
  // const outroDuration =

  const lastVideoSection = videoSections[videoSections.length - 1]!;

  return {
    intro: 0,
    videoSections,
    table: isTablePresent ? lastVideoSection : undefined,
    outro: isTablePresent
      ? lastVideoSection + tableDurationInFrames
      : lastVideoSection,
  };
};

export function getTimeOfTheDay(
  date: Date | number | string = Date.now() // this needs Date.now() from the client's browser. The default value is computed on the server.
): "morning" | "afternoon" | "evening" {
  // const currentTime = new Date(Date.now()) // Date.now() not necessary?
  const currentTime = new Date(date);

  const currentHour = currentTime.getHours();

  if (currentHour >= 0 && currentHour < 12) return "morning";
  else if (currentHour >= 12 && currentHour < 17) return "afternoon";
  else return "evening";
}

export function getRelativeVideoChapter(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? 0 : ""}${remainingSeconds}`;
}

export const getAudioDurations = (
  { data }: FinalVideoDataFromServer,
  selectedGender: VoiceGender
) => {
  // Push whichever is selected (based on gender)

  const audioGender = selectedGender === "male" ? 0 : 1;

  // Push intro duration
  const introDuration = Math.round(
    getDurationWithPadding(data.intro.voiceAudio.durations[audioGender])
  );
  const durations: number[] = [introDuration];

  // Push rest of durations for each video sections
  data.videoSections.forEach((videoSection) => {
    const audioDurationToPush = Math.round(
      getDurationWithPadding(videoSection.voiceAudio.durations[audioGender])
    );
    durations.push(audioDurationToPush);
  });

  return durations;
};

export function adjustColor(hex: string, brightness: number) {
  // Parse the hex code into its individual RGB components
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);

  // Adjust the brightness of the color by reducing the RGB values
  red = Math.max(0, Math.min(255, Math.round(red * brightness)));
  green = Math.max(0, Math.min(255, Math.round(green * brightness)));
  blue = Math.max(0, Math.min(255, Math.round(blue * brightness)));

  // Convert the adjusted RGB values back to a hex code
  const adjustedHex =
    "#" +
    red.toString(16).padStart(2, "0") +
    green.toString(16).padStart(2, "0") +
    blue.toString(16).padStart(2, "0");

  return adjustedHex;
}

// Example usage
// var originalColor = "#F5F5F5";
// var adjustedColor = adjustColor(originalColor, 0.8); // Reduce brightness by 20%
// console.log("Original color: " + originalColor); // Output: Original color: #F5F5F5
// console.log("Adjusted color: " + adjustedColor); // Output: Adjusted color: #BFBFBF

// Generate ID for video in DB

export function generateDeterministicVideoId(seed: string) {
  // Uses SHA256 algorithm
  const hash = crypto.createHash("sha256");
  hash.update(seed.toString());
  return hash.digest("hex");
}

export function generateUniquePresentationId(str: string) {
  const randomString = crypto.randomBytes(8).toString("hex");
  const hash = crypto.createHash("sha1");
  hash.update(str + randomString);
  const uniqueId = hash.digest("hex").slice(0, 10);
  return uniqueId;
}

export function encryptString(plaintext: string) {
  const key = crypto
    .createHash("sha256")
    .update(secretKey)
    .digest("base64")
    .slice(0, 32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(plaintext);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return `${iv.toString("hex")}:${encrypted.toString("hex")}`;
}

export function decryptString(ciphertext: string) {
  const [ivHex, encryptedHex] = ciphertext.split(":");
  const key = crypto
    .createHash("sha256")
    .update(secretKey)
    .digest("base64")
    .slice(0, 32);
  const iv = Buffer.from(ivHex as string, "hex");
  const encrypted = Buffer.from(encryptedHex as string, "hex");
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(encrypted);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

export function getAspectRatio(data: {
  width: number;
  height: number;
}): string {
  const { width, height } = data;

  const gcd = function (a: number, b: number): number {
    return b == 0 ? a : gcd(b, a % b);
  };
  const ratio = gcd(width, height);
  return `${width / ratio}:${height / ratio}`;
}

export const md5 = (contents: string) =>
  crypto.createHash("md5").update(contents).digest("hex");

export function getDurationWithPadding(dur: number) {
  return dur + audioPaddingInSeconds ?? 700;
}

export async function validateToken(
  token: string
): Promise<TokenValidityResponse> {
  const res = await fetch(`/api/db/validatetoken`, {
    body: JSON.stringify({ token }),
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    method: "POST",
  });

  const tokenData = (await res.json()) as TokenValidityResponse;

  return tokenData;
}

export async function checkModeration(
  message: string
): Promise<ModerationResponse> {
  const res = await fetch(`/api/moderations`, {
    body: JSON.stringify({ message }),
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    method: "POST",
  });

  const moderationData = (await res.json()) as ModerationResponse;

  return moderationData;
}

export async function validateTokenAndPrompt({
  token,
  message,
}: {
  token: string;
  message: string;
}): Promise<{
  tokenData: TokenValidityResponse;
  moderationData: ModerationResponse;
}> {
  const [moderationData, tokenData] = await Promise.all([
    checkModeration(message),
    validateToken(token),
  ]);

  return { tokenData, moderationData };
}

type TokenValidityResponse = {
  credits: string;
  token: string;
  owner: string;
  error?: string;
};

type ModerationResponse = {
  isFlagged?: boolean;
};

export function cn(...inputs: ClassValue[]) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument
  return twMerge(clsx(inputs));
}
