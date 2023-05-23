//
// BACKEND
//

import { z } from "zod";

export interface VideoMetadata {
  // Here, only assume common aspect ratios - 16:9, 18:9, 9:16 (for youtube shorts, tiktok, instagram reels)
  width: number; // width in pixels
  height: number; // height in pixels
  color: {
    accentColor: string; // hex code
    gradientStartColor?: string; // hex code for the starting color of the gradient
    gradientEndColor?: string; // hex code for the ending color of the gradient
  };
  topic: string; // topic of the video
  description: string; // simple description to put below the youtube video, mentioning the contents of the video
  title: string; // short incentivizing title for youtube video (somewhat clickbaity)
  durationInSeconds: number; // desired duration of the video in seconds
  style: "fun" | "professional" | "normal"; // "professional" is corporate sounding, "fun" is fancy and informal, "normal" is default.

  // ! OMIT GRAPHIC FOR NOW...

  graphic?: {
    // Can there be a relevant graph or chart?
    topic: string; // What should the graph/chart represent?
    type:
      | "line-graph"
      | "histogram"
      | "curve-graph"
      | "bar-graph"
      | "pie-chart";
  };
  table?: {
    // Can a relevant table be displayed?
    label: string; // Short label of what the table represents
  };
}
// description: string; // explain to the video producer how this video should be, what content should be included, excluding graphics, charts, tables.
//   speakingTone?: "friendly" | "cheerful" | "hopeful"; // "friendly" is default, "cheerful" is for presenting good constructive knowledge, "hopeful" is when the topic might not be received properly.
// required: boolean;
// required: boolean;

export type PresentationTitles = {
  presentationTitles: string[];
};

export type PresentationTalkingPoints = {
  presentationTalkingPoints: string[];
};

// Probably filter these because they may contain <ul>/<ol>/<li> elements
export type ContentAsBulletPoints = {
  bulletPoints: string[];
};

export type Theme = {
  id: string;
  gradient: string;
  label: string;
};

//
// COMMON
//

export type InitialVideoServerRequest = {
  videoId: string;
  userId: string;
};

export type InitialVideoServerResponse = {
  isSuccess: boolean;
  error: string | null;
  message: string;
  videoId: string;
  userId: string;
};

export type PromptType = "new" | "revise";
export type VoiceGender = "female" | "male";
export type VideoStyle = "fun" | "professional" | "normal";

export interface Customer {
  redFlags: number;
  userId: string;
  // email: string; // dont do email because why? We can fetch email from Clerk instead, without being charged for API calls from DB.
  credits: number;
  initialFreeCredits: number;
  isBanned: boolean;
  videosCreated: VideoCreated[];
}

export const videoStatusCode = z.enum([
  "INITIALIZED", // Waiting to be picked up by backend server.
  "IN_PROGRESS", // Backend server is working on it - Do not touch.
  "SUCCESS", // Video was created successfully - Do not proceed.
  "FAILED", // Video creation failed - Allowed to be restarted. (check `message` or `error` field for more details)
  "FLAGGED", // Flagged by OpenAI - Do not proceed.
  "HALTED", // Halted in the middle for some other reason - Do not proceed. (check `message` or `error` field for more details)
  "DELETED", // Video was deleted for any reason - Do not proceed.
]);

export const videoCreated = z.object({
  videoId: z.string().max(128),
});

export type VideoCreated = z.infer<typeof videoCreated>;

export type VideoStatusCode = z.infer<typeof videoStatusCode>;

export type FinalVideoDataFromServer = {
  // Required for Initializing the video
  status: VideoStatusCode;
  error?: string;
  message: string;
  uniqueId: string;
  userId: Customer["userId"];
  creditType: "free" | "paid";
  prompt: string;
  referenceData: string;

  // Required for making the video
  // Done by the server
  metadata: VideoMetadata;
  data: ActualVideoContents;

  isPublic: boolean;
  createdAt: string;
  render: {
    status:
      | "DELETED"
      | "PENDING"
      | "INITIALIZED"
      | "IN_PROGRESS"
      | "HALTED"
      | "FAILED"
      | "SUCCESS";

    url: string;

    error: string;

    msg: string;
  };

  /**
   * * Use zod for this instead.
   */
  // isValid: boolean; // is the data valid? does it make sense? does the number of talking points and titles match?
};

export type TokenInDB = {
  token: string;
  owner: string;
  credits: number;
};

export type VideoSection = {
  talkingPoint: string;
  title: string;
  images?: CustomImageDataFromBing[];
  voiceAudio: { urls: [string, string]; durations: [number, number] }; // Max 2 audios allowed.
  music?: { urls: [string]; durations: [number] }; // Max 1 music allowed.
  bulletPoint?: string; // Not decided this yet...
  // variants: string[]; // example ["male-high", "female-sweet", "male heavy", "female-kind" ]
};

export type VideoIntro = {
  // videoHost?: { name: string };
  talkingPoint: string;
  voiceAudio: { urls: [string, string]; durations: [number, number] }; // Max 2 audios allowed.
  music?: { urls: [string]; durations: [number] }; // Max 1 music allowed.
  images?: CustomImageDataFromBing[];
};

export type VideoOutro = {
  // videoHost?: { name: string };
  talkingPoint: string;
  voiceAudio: { urls: [string, string]; durations: [number, number] }; // Max 2 audios allowed.
  music?: { urls: [string]; durations: [number] }; // Max 1 music allowed.
  // images?: CustomImageDataFromBing[];
};

export type VideoTable = {
  table: string;
  isPresent: boolean;
  summary: string;
  voiceAudio: { urls: [string, string]; durations: [number, number] }; // Max 2 audios allowed.
  music?: { urls: [string]; durations: [number] }; // Max 1 music allowed.
};

export type ActualVideoContents = {
  videoSections: VideoSection[];
  intro: VideoIntro;
  outro: VideoOutro;
  table: VideoTable;
  chart?: object[]; // Forget for now... Not planned this yet...
};

export type CustomImageDataFromBing = {
  name: string;
  contentUrl: string;
  hostPageUrl: string;
  hostPageDisplayUrl: string;
  encodingFormat: string;
  contentSize: string;
  width: number;
  height: number;
  accentColor: string;
  imageId: string;
};

//
// FRONTEND
//

export type VideoChaptersInFrames = {
  intro: number;
  videoSections: number[];
  table?: number;
  outro: number;
};
export interface VideoSectionToPass extends VideoSection {
  index: number;
  gender: string;
  sequenceDurationInFrames?: number;
  // allData: SampleData;
}

export interface PlayerPresentationProps {
  videoData: FinalVideoDataFromServer;
  videoMetadata: PresentationMetadata;
}

export interface PresentationMetadata {
  allAudioDurations: number[];
  totalDurationInFrames: number;
  totalDurationInSeconds: number;
  speakingVoiceGender: VoiceGender;
  videoStyle: VideoStyle;
  playerSize: {
    height: number;
    width: number;
    name: "16:9" | "9:16";
  };
  allData: FinalVideoDataFromServer;
  channelLogoURL?: string;
}

export type FirstTabValue =
  | "prompt"
  | "examples"
  | "chapters"
  | "more-settings"
  | "history";
export type SecondTabValue = "player" | "prompt";
