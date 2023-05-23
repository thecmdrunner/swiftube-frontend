import { env } from "~/env.mjs";
import type {
  VoiceGender,
  VideoMetadata,
  Theme,
  FinalVideoDataFromServer,
} from "./interfaces";
import { type getTimeOfTheDay } from "~/utils";

// COMMON

export const samplePrompts = [
  {
    title: "Types of Wood",
    prompt: `the different types of wood, including their distinct features, applications, and benefits.`,
    referenceData: `Wood is a versatile and popular material that is used for many purposes. There are many different types of wood, each with its own distinct features, applications, and benefits. One common type of wood is pine. Pine is a softwood that is light in color and has a straight grain. It is a common choice for construction, as it is relatively inexpensive and easy to work with. Pine is also a popular choice for furniture, particularly in rustic or country-style decor. It can be stained or painted to match any color scheme and can be used to create a variety of different pieces, including bookshelves, tables, and beds.\n\nAnother popular type of wood is oak. Oak is a hardwood that is known for its strength and durability. It has a coarse texture and a distinctive grain pattern that makes it a popular choice for furniture and flooring. Oak is also a popular choice for construction, particularly in areas where high-strength wood is required, such as in bridges or boats. Oak can be stained or finished to highlight its natural beauty, and it is also resistant to moisture, making it a good choice for outdoor furniture or decking.`,
  },
  {
    title: "Types of Metal Alloys",
    prompt:
      "the various metal alloys, including their distinct features, applications, and advantages.",
    referenceData: `Common types of metal alloys:

Steel: Steel is an alloy primarily composed of iron and carbon. It offers exceptional strength, durability, and versatility. Steel finds applications in construction, automotive manufacturing, appliances, and various industrial sectors.\n
Aluminum alloys: Aluminum alloys are lightweight and possess excellent corrosion resistance. They are widely used in the aerospace industry, automotive components, packaging materials, and structural applications where weight reduction is crucial.\n
Titanium alloys: Titanium alloys are known for their exceptional strength-to-weight ratio, corrosion resistance, and biocompatibility. They are extensively utilized in aerospace engineering, medical implants, sports equipment, and chemical processing industries.\n
Copper alloys: Copper alloys, such as bronze and brass, offer high electrical conductivity, thermal conductivity, and excellent formability. They are employed in electrical wiring, plumbing fixtures, musical instruments, and decorative applications.`,
  },
  {
    title: "Popular video games",
    prompt: `the most popular best-selling video games of all time, on all the major gaming platforms.`,
    referenceData: `The most popular video games of all time include:\n1. Minecraft - PC, Playstation, Xbox, Mobile (over 238,000,000 sales)\n2. Pokemon - Nintendo, Mobile\n3. Grand Theft Auto - PC, Playstation, Xbox, Mobile`,
  },
];

export const DEMO_MODE = false;

export const speakingVoiceGender: VoiceGender = "female";
export const fallbackAudioDurationInSeconds = 5;
export const fps = 60;
export const audioPaddingInSeconds = 0.5;

export const defaultOptions: VideoMetadata = {
  topic: "",
  title: "",
  description: "",
  width: 1920,
  height: 1080,
  color: {
    accentColor: "#D20013", // dark-red-ish
  },
  durationInSeconds: 120,
  style: "normal",
};

// Frontend

export const CHANNEL_LOGOS = {
  monkey_astronaut: "/channel-logos/monkey-astronaut.webp",
  digital_artist: "/channel-logos/digital-artist.png",
};

export const bgMusic = {
  intro:
    "https://uploadthing.com/f/70bfea49-cb13-4c08-a7ee-7026458e09ab_bg-music-intro.mp3",
  videoSections:
    "https://uploadthing.com/f/f30cba1d-9734-4e2f-8f68-0e23ffe8bb25_bg-music-videosection.mp3",
  outro:
    "https://uploadthing.com/f/eb5e942f-6686-4250-87ec-33441af4579b_bg-music-outro.mp3",
};

export const greetsAudios: {
  [key in ReturnType<
    typeof getTimeOfTheDay
  >]: FinalVideoDataFromServer["data"]["videoSections"][number]["voiceAudio"];
} = {
  morning: {
    urls: [
      "/audios/male-greet-morning.mp3",
      "/audios/female-greet-morning.mp3",
    ],
    durations: [5.75, 6.54],
  },
  afternoon: {
    urls: [
      "/audios/male-greet-afternoon.mp3",
      "/audios/female-greet-afternoon.mp3",
    ],
    durations: [5.96, 6.7],
  },
  evening: {
    urls: [
      "/audios/male-greet-evening.mp3",
      "/audios/female-greet-evening.mp3",
    ],
    durations: [5.75, 6.54],
  },
};
export const greetsVideos: {
  [key in ReturnType<typeof getTimeOfTheDay>]: { urls: [string, string] };
} = {
  morning: {
    urls: [
      "https://ik.imagekit.io/x5c4mnnim/male-greet-morning.mp4?updatedAt=1684674357006",
      "https://ik.imagekit.io/x5c4mnnim/female-greet-morning.mp4?updatedAt=1684674357075",
      // "https://res.cloudinary.com/dlh61ubew/video/upload/c_limit,h_600,w_600/v1684491165/aishortz/common/lers0iasjr1n2b00ck9d.mp4",
      // "https://res.cloudinary.com/dlh61ubew/video/upload/c_limit,h_600,w_600/v1684491164/aishortz/common/paelzbhxoqf7s4ouoydz.mp4",
    ],
    // durations: [5.75, 6.54],
  },
  afternoon: {
    urls: [
      "https://ik.imagekit.io/x5c4mnnim/male-greet-afternoon.mp4?updatedAt=1684674357069",
      "https://ik.imagekit.io/x5c4mnnim/female-greet-afternoon.mp4?updatedAt=1684674357210",
      // "https://res.cloudinary.com/dlh61ubew/video/upload/c_limit,h_600,w_600/v1684491165/aishortz/common/dfx6qs6fqanfeaibg4gw.mp4",
      // "https://res.cloudinary.com/dlh61ubew/video/upload/c_limit,h_600,w_600/v1684491164/aishortz/common/tf3szs7dp17vto4fg4bo.mp4",
    ],
    // durations: [5.96, 6.7],
  },
  evening: {
    urls: [
      "https://ik.imagekit.io/x5c4mnnim/male-greet-evening.mp4?updatedAt=1684674357134",
      "https://ik.imagekit.io/x5c4mnnim/female-greet-evening.mp4?updatedAt=1684674357601",
      // "http://res.cloudinary.com/dlh61ubew/video/upload/c_limit,h_600,w_600/v1684491165/aishortz/common/ogh1wq2wngvwkfkkrywu.mp4",
      // "https://res.cloudinary.com/dlh61ubew/video/upload/c_limit,h_600,w_600/v1684491164/aishortz/common/f4wc47iztztfwehrmeyd",
      // "/videos/male-greet-evening.mp4",
      // "/videos/female-greet-evening.mp4",
    ],
    // durations: [5.75, 6.54],
  },
};

export const chaptersIntros: {
  videoURLs: [string, string];
  audioURLs: [string, string];
  durations: [number, number];
} = {
  audioURLs: [
    "/audios/male-chapters-info.mp3",
    "/audios/female-chapters-info.mp3",
  ],
  // videoURLs: ["/videos/male-chapters.mp4", "/videos/female-chapters.mp4"],
  videoURLs: [
    "https://ik.imagekit.io/x5c4mnnim/male-chapters.mp4?updatedAt=1684674357404",
    "https://ik.imagekit.io/x5c4mnnim/female-chapters.mp4?updatedAt=1684674357480",
    // "https://res.cloudinary.com/dlh61ubew/video/upload/c_limit,h_600,w_600/v1684491164/aishortz/common/z2bguojaibqytrmlssft.mp4",
    // "https://res.cloudinary.com/dlh61ubew/video/upload/c_limit,h_600,w_600/v1684491164/aishortz/common/zztkqbm0rhhlx715rje2.mp4",
  ],
  durations: [13.46, 14.3],
};

export const URLS = {
  signIn: "/sign-in",
  signUp: "/sign-up",

  render: env.NEXT_PUBLIC_RENDER_BACKEND_URL,
  railway: env.NEXT_PUBLIC_RAILWAY_BACKEND_URL,

  server: env.NEXT_PUBLIC_SERVER_BACKEND_URL,
  localhost: "http://localhost:5000",
};

export const BACKEND_API_URL = URLS.railway;

export const WakeUpFromColdStartURL = BACKEND_API_URL;

export const Themes: { [key: string]: Theme } = {
  blue: {
    gradient: "from-blue-600 to-cyan-500",
    label: "Ocean Blue",
    id: "blue",
  },

  gray: {
    id: "gray",
    gradient: "from-gray-800 to-slate-600",
    label: "Matte Gray",
  },

  green: {
    gradient: "from-green-600 to-green-500",
    label: "Sophisticated Green",
    id: "green",
  },

  red: {
    gradient: "from-red-500 to-rose-400",
    label: "Industrial Red",
    id: "red",
  },
};

export const sampleUserPrompts: {
  new: string;
  revise: string;
  responses: FinalVideoDataFromServer[];
}[] = [
  {
    new: "Please create a video that showcases the advantages of plant-based eating, such as improved health, reduced environmental impact, and ethical considerations for animals. Highlight the scientific research that supports these benefits, and include quotes and anecdotes from experts and everyday individuals who have experienced the positive effects of this lifestyle. Show the challenges people may face when transitioning to a plant-based diet, such as difficulty finding affordable and tasty options, and provide practical tips and resources to overcome them. Create the video in a vertical format optimized for Youtube shorts, with colorful graphics and a green color theme to emphasize the plant-based focus.",
    revise: "",
    responses: [],
  },
];
