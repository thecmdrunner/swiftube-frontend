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

export const URLs = {
  // Public
  home: "/",
  about: "/about",
  explore: "/explore",
  pricing: "/pricing",
  signIn: "/sign-in",
  signUp: "/sign-up",

  // Private
  create: "/create",

  // Backends
  render: env.NEXT_PUBLIC_RENDER_BACKEND_URL,
  railway: env.NEXT_PUBLIC_RAILWAY_BACKEND_URL,
  server: env.NEXT_PUBLIC_SERVER_BACKEND_URL,
  localhost: "http://localhost:5000",
};

export const BACKEND_API_URL = URLs.railway;

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

const explorableVideoIds = [
  "0043682cc929d23fd280e74a9294ed738cb40c824e545fc9ac5f01507d41b6df",
  "0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd",
  "0a3b38a8a9a89dcf7c5fd9e311781fe2176e3ccf0b22d8a59b7f25379338cd80",
  "0b8a313f5e7294f63662224ef7ba241dfc9a1290f880fb9c75b1165a330d439b",
  "11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63",
  "143e7363f4a104278403610883a980353d9cd5be51eacb3597f66e358ae72c54",
  "1981546a88b713b210b5b883e1a3f7724577442fc69147e32d0a9c365e1f6e3c",
  "2580cde4eb959bfa5c0038f850c7a95f614e3267be5181cb44e2fb95b125e790",
  "2821306fc3432787306ac9b7b4f988503467e75c201a5d55e4c0689348ab2eae",
  "2ac70831f96241e315a14af6a2ddd772cc4b7fd746eaf81c5035c495d3f34a17",
  "2b843274620913664f4e2d59b651cacbe0b043a6f574c0cbe12b9984dab9e483",
  "373c140032e4c7233cba6d5113c3b8883cebb8570cd663a3066c8b624182fc3a",
  "33829ef7ed50bb8ee51827afe8c442d0f84df0dd3f45db57865c1c0c6de469ce",
  "5781f5b454a2d654f6b051531d64cb7b5a9b9a07899685925566a226a23b2a89",
  "7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf",
  "86d4a26747d616384082c78d10132e1f4d7aede31aef800896c4bf2a8307f06b",
  "7979d67626f690234ace087f56950f56422fd6fea91d0431018da71b59c04d6d",
  "8d78612c9d098ce565369041899be9e19de0636ca9c51608f5906c20ccfc48f5",
  "c3e3ed3802959a7daf2fbd79633900547e92f58e1fa1e7360f2704437260cca8",
  "a0daa6f2dcdf07ae6b2b26b2eb7167ffe5d176ae12d7a4ae554d2624beb95d46",
  "cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8",
  "e6aa6d494b6bcaf040c90b992bf7af0fa222629d1cf1019c6426675e624df07e",
  "eece16a8c10adffc22d3f5c4a0a1f17a9bbe0e24202cbd619a8bf8ba74de0ea2",
  "f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606",
  "f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef",
  "fe3c5e5d8f8c9076f0745fbbb00416772d9058e61172c67efb16ffbfbb4e26c0",
];


// Get `CompletedVideos` from the tRPC query.
// export const explorablVideos = CompletedVideos.filter(video => explorableVideoIds.includes(video.uniqueId));


export const explorableVideos = [
  {
    uniqueId:
      "0043682cc929d23fd280e74a9294ed738cb40c824e545fc9ac5f01507d41b6df",
    isPublic: false,
    data: {
      outro: {
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685203550/aishortz/0043682cc929d23fd280e74a9294ed738cb40c824e545fc9ac5f01507d41b6df/en-US-Standard-D-2054c0100084e13e6539446cc9124d56.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685203550/aishortz/0043682cc929d23fd280e74a9294ed738cb40c824e545fc9ac5f01507d41b6df/en-US-Standard-F-2054c0100084e13e6539446cc9124d56.wav",
          ],
          durations: [17.595875, 18.660833],
        },
        talkingPoint:
          "Thanks for joining us on this wild ride through New York City with our flying penguin friend! If you enjoyed this video, make sure to like and share it with your friends. And don't forget to subscribe to our channel for more exciting content! Check out our recommended videos for similar adventures. Thanks for watching!",
      },
      videoSections: [
        {
          talkingPoint:
            "Welcome to our video where we will be taking you on a wild ride through New York City with a penguin who has a special talent - flying!",
          title: "A Wild Ride Through New York City with a Flying Penguin",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685203545/aishortz/0043682cc929d23fd280e74a9294ed738cb40c824e545fc9ac5f01507d41b6df/en-US-Standard-D-1b297dceb29a680c6e5fbd734eaecb8d.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685203545/aishortz/0043682cc929d23fd280e74a9294ed738cb40c824e545fc9ac5f01507d41b6df/en-US-Standard-F-1b297dceb29a680c6e5fbd734eaecb8d.wav",
            ],
            durations: [10.300042, 10.790875],
          },
          images: [
            {
              contentUrl:
                "https://i1.wp.com/s-media-cache-ak0.pinimg.com/originals/a4/84/d9/a484d9dd9dba52c93679afc641fa85a1.jpg?resize=1024%2C683&ssl=1",
              width: 1024,
              hostPageDisplayUrl:
                "worldofuniversal.com/blog/race-new-york-ride-system-explained",
              height: 683,
              name: "Race Through New York Ride System Explained | World Of Universal",
              hostPageUrl:
                "http://worldofuniversal.com/blog/race-new-york-ride-system-explained/",
              imageId: "336D68188486DEE5C70F6C386478492DA0DDF219",
              accentColor: "#236EA8",
              encodingFormat: "jpeg",
              contentSize: "96883 B",
            },
            {
              name: "_DSC9767 | FlyingPenguin. | Flickr",
              imageId: "3108D10576990C0FC4F970623B2574DE58F91535",
              contentUrl:
                "https://live.staticflickr.com/7693/16657072844_a3f8d61979.jpg",
              contentSize: "68768 B",
              encodingFormat: "jpeg",
              height: 333,
              width: 499,
              accentColor: "#B63815",
              hostPageDisplayUrl:
                "https://www.flickr.com/photos/flyingpenguinonline/16657072844",
              hostPageUrl:
                "https://www.flickr.com/photos/flyingpenguinonline/16657072844",
            },
            {
              accentColor: "#634D2F",
              width: 499,
              hostPageUrl:
                "https://www.flickr.com/photos/flyingpenguinonline/49201619003/in/album-72157712155056458/",
              contentSize: "58707 B",
              contentUrl:
                "https://live.staticflickr.com/65535/49201619003_8856645216.jpg",
              encodingFormat: "jpeg",
              name: "_DSC9403 | FlyingPenguin. | Flickr",
              height: 333,
              hostPageDisplayUrl:
                "https://www.flickr.com/photos/flyingpenguinonline/49201619003/in/album-72157712155056458",
              imageId: "68EAA5D7CC388C16B92C74D9ED95066B2BF1F8AA",
            },
          ],
        },
        {
          images: [
            {
              width: 800,
              height: 600,
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://fashionmula.blogspot.com/2013/05/central-park-zoo-penguins.html",
              hostPageDisplayUrl:
                "https://fashionmula.blogspot.com/2013/05/central-park-zoo-penguins.html",
              contentSize: "40494 B",
              accentColor: "#4E6E6F",
              contentUrl:
                "https://lh4.googleusercontent.com/proxy/vQ16hnV4LPs6MwRn0BF40Q63IhYq8Jc2XvGNVd03W9t1BsEQDBTqyw9Rp6b-MxWThSXRSjuMaBLqFdo67A=s0-d",
              imageId: "E9889F7FEE80D97B959329C58B9892763BF2DB19",
              name: "Fashion Pure: central park zoo penguins",
            },
            {
              contentUrl:
                "https://api.getepic.com/utils/resize.jpg?jpg_quality=100&url=https:%2F%2Fcdn.getepic.com%2Fdrm%2F6%2F49236%2Fcover_large%402x.png&width=1200",
              width: 792,
              imageId: "1D65FB4847B52F3B3B722245190DE9B8AFA97D63",
              contentSize: "177115 B",
              name: "The Penguin Friend Children's Book by Altan With Illustrations by Altan | Discover Children's ...",
              accentColor: "#C5BF06",
              hostPageUrl:
                "https://www.getepic.com/book/54701198/the-penguin-friend",
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://www.getepic.com/book/54701198/the-penguin-friend",
              height: 1000,
            },
            {
              height: 1264,
              hostPageUrl:
                "https://feniyunitaw.blogspot.com/2021/04/driving-directions-to-penguin-park.html",
              name: "Driving Directions To Penguin Park Kansas City : Scan your spot club account or reservation code ...",
              imageId: "79EDA58FB20F159CA281CB7A8B2A1793E10256B0",
              encodingFormat: "jpeg",
              width: 2349,
              hostPageDisplayUrl:
                "https://feniyunitaw.blogspot.com/2021/04/driving-directions-to-penguin-park.html",
              contentUrl:
                "https://kcparks.org/wp-content/uploads/2013/03/Penguin.jpg",
              accentColor: "#7F9833",
              contentSize: "541745 B",
            },
          ],
          talkingPoint:
            "Our journey begins in Central Park, where we spot our penguin friend waddling around, looking for some adventure.",
          voiceAudio: {
            durations: [9.751917, 10.157042],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685203545/aishortz/0043682cc929d23fd280e74a9294ed738cb40c824e545fc9ac5f01507d41b6df/en-US-Standard-D-738b4aeaf3b24d5d574578f46c4cd267.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685203545/aishortz/0043682cc929d23fd280e74a9294ed738cb40c824e545fc9ac5f01507d41b6df/en-US-Standard-F-738b4aeaf3b24d5d574578f46c4cd267.wav",
            ],
          },
          title: "Central Park: Where We Meet Our Penguin Friend",
        },
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685203545/aishortz/0043682cc929d23fd280e74a9294ed738cb40c824e545fc9ac5f01507d41b6df/en-US-Standard-D-ea0ccd4bf5831c974b87ce62430cf29d.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685203545/aishortz/0043682cc929d23fd280e74a9294ed738cb40c824e545fc9ac5f01507d41b6df/en-US-Standard-F-ea0ccd4bf5831c974b87ce62430cf29d.wav",
            ],
            durations: [11.051708, 11.595375],
          },
          talkingPoint:
            "Suddenly, the penguin flaps its wings and takes off into the sky, soaring high above the city streets and dodging between skyscrapers.",
          title: "Watch in Amazement as the Penguin Takes Flight!",
          images: [
            {
              contentUrl:
                "https://i.ytimg.com/vi/5VmWe3LyUDM/maxresdefault.jpg",
              width: 1280,
              imageId: "1AC6429FE5CD35331DD357B84F34BEEA8EAE4FDE",
              name: "Change yards to meters - General Discussion - World of Warcraft Forums",
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://eu.forums.blizzard.com/en/wow/t/change-yards-to-meters/202159?page=2",
              contentSize: "82848 B",
              hostPageUrl:
                "https://eu.forums.blizzard.com/en/wow/t/change-yards-to-meters/202159?page=2",
              accentColor: "#0289C9",
              height: 720,
            },
            {
              contentUrl:
                "https://i.ytimg.com/vi/mAOJHtqvs1s/maxresdefault.jpg",
              contentSize: "105464 B",
              hostPageUrl: "https://www.youtube.com/watch?v=mAOJHtqvs1s",
              encodingFormat: "jpeg",
              name: "Take Flight (A Penguin Animated Short) - YouTube",
              width: 1280,
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=mAOJHtqvs1s",
              height: 720,
              accentColor: "#B91224",
              imageId: "98EB860A2918F9894781F8085E968AA480EE763B",
            },
            {
              hostPageUrl: "https://www.taptap.io/app/11357",
              contentSize: "137947 B",
              name: "Flight Penguin - Android Download | TapTap",
              contentUrl:
                "https://img.tapimg.com/market/images/ae868b2493e2fad506078c0db4fa4f19.jpg",
              height: 2048,
              accentColor: "#4B1AB1",
              width: 1536,
              hostPageDisplayUrl: "https://www.taptap.io/app/11357",
              encodingFormat: "jpeg",
              imageId: "D53924FF3E6922547C34E6770B0E41B448ADF756",
            },
          ],
        },
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685203545/aishortz/0043682cc929d23fd280e74a9294ed738cb40c824e545fc9ac5f01507d41b6df/en-US-Standard-D-eddbece9c38c60227eff2eb88a06af6a.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685203545/aishortz/0043682cc929d23fd280e74a9294ed738cb40c824e545fc9ac5f01507d41b6df/en-US-Standard-F-eddbece9c38c60227eff2eb88a06af6a.wav",
            ],
            durations: [11.907, 12.761333],
          },
          title: "Landing on Top of the Chrysler Building: A Breathtaking View",
          talkingPoint:
            "As we watch in amazement, the penguin lands on top of the iconic Chrysler Building, taking in the breathtaking views of the city that never sleeps.",
          images: [
            {
              height: 1067,
              encodingFormat: "jpeg",
              imageId: "1B66CEBEA7FA4257356FEB7ED1F9A347E4F8B9C3",
              contentUrl: "http://i.imgur.com/TPESI9g.jpg",
              contentSize: "400973 B",
              name: "A man on top of the Chrysler Building with a view of NYC : photoshopbattles",
              hostPageDisplayUrl:
                "https://www.reddit.com/r/photoshopbattles/comments/1fjfh6/a_man_on_top_of_the_chrysler...",
              width: 1600,
              hostPageUrl:
                "https://www.reddit.com/r/photoshopbattles/comments/1fjfh6/a_man_on_top_of_the_chrysler_building_with_a_view/",
              accentColor: "#846E47",
            },
            {
              imageId: "812509BF0476E07A2C6E9C1D95C3441C3EDA5E1A",
              contentUrl:
                "https://i.pinimg.com/originals/17/d8/3e/17d83e94970562bda826848826abdaed.jpg",
              accentColor: "#134963",
              name: "Pin on WTC",
              hostPageUrl: "https://www.pinterest.com/pin/420523683952470229/",
              encodingFormat: "jpeg",
              width: 411,
              contentSize: "33544 B",
              height: 600,
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/420523683952470229",
            },
            {
              encodingFormat: "jpeg",
              imageId: "AC6E9CFD89EDB8C1908698B296A0907CD9740C0F",
              height: 600,
              width: 900,
              accentColor: "#121F31",
              contentSize: "196936 B",
              hostPageDisplayUrl:
                "https://www.richarddavisphotography.com/black-and-white-photography/daily-photo...",
              name: "Chrysler Building | Richard Davis Photography",
              hostPageUrl:
                "https://www.richarddavisphotography.com/black-and-white-photography/daily-photo-chrysler-building/attachment/rknd_120706_2329/",
              contentUrl:
                "https://www.richarddavisphotography.com/wp-content/uploads/2012/07/Chrysler-Building.jpg",
            },
          ],
        },
        {
          title: "The Penguin's Incredible Flying Abilities: Leaving Us in Awe",
          talkingPoint:
            "With its mission accomplished, the penguin takes off once again, leaving us in awe of its incredible flying abilities.",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685203545/aishortz/0043682cc929d23fd280e74a9294ed738cb40c824e545fc9ac5f01507d41b6df/en-US-Standard-D-112f8a7bd72e2765d1f1d91527f3f82e.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685203545/aishortz/0043682cc929d23fd280e74a9294ed738cb40c824e545fc9ac5f01507d41b6df/en-US-Standard-F-112f8a7bd72e2765d1f1d91527f3f82e.wav",
            ],
            durations: [10.831917, 11.345625],
          },
          images: [
            {
              accentColor: "#C16C0A",
              name: "Flight Penguin: Taking the Pain out of Flight Search",
              encodingFormat: "png",
              contentUrl:
                "https://flightpenguin.com/lib_xWJUzTxEzxatESDQ/kq9fnmlc8vhtbea2.png?w=1200&h=630&fit=crop",
              height: 414,
              contentSize: "9745 B",
              hostPageUrl: "https://flightpenguin.com/",
              imageId: "182DBBCB124B29C6B21E316D1518E43106CEBDC1",
              hostPageDisplayUrl: "https://flightpenguin.com",
              width: 416,
            },
            {
              contentSize: "88292 B",
              height: 960,
              imageId: "7D2A8F070B901842BD47037BDC784F22641AE3CE",
              hostPageDisplayUrl: "gavin.delint.ca/2016/01/flying-penguin",
              name: "Flying Penguin",
              hostPageUrl: "http://gavin.delint.ca/2016/01/flying-penguin/",
              accentColor: "#C78904",
              width: 768,
              contentUrl:
                "http://gavin.delint.ca/wp-content/uploads/2016/01/Flying-Penguin-1600-768x960.jpg",
              encodingFormat: "jpeg",
            },
            {
              hostPageDisplayUrl:
                "https://www.flickr.com/photos/flyingpenguin/3696678997",
              imageId: "AB80EE7FC8217B29AB92CD4FC605D4182A108933",
              encodingFormat: "jpeg",
              width: 499,
              height: 332,
              contentSize: "29624 B",
              accentColor: "#6D3C2F",
              contentUrl:
                "https://live.staticflickr.com/2456/3696678997_1967784ed1.jpg",
              name: "DSC_7807 | Flying Penguin | Flickr",
              hostPageUrl:
                "https://www.flickr.com/photos/flyingpenguin/3696678997",
            },
          ],
        },
      ],
      intro: {
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685203547/aishortz/0043682cc929d23fd280e74a9294ed738cb40c824e545fc9ac5f01507d41b6df/en-US-Standard-D-d5b14d2022791cb741b50d34bb0beb07.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685203547/aishortz/0043682cc929d23fd280e74a9294ed738cb40c824e545fc9ac5f01507d41b6df/en-US-Standard-F-d5b14d2022791cb741b50d34bb0beb07.wav",
          ],
          durations: [7.148708, 7.474083],
        },
        images: [
          {
            width: 1072,
            contentUrl:
              "https://th-thumbnailer.cdn-si-edu.com/QZfCSze1YRPDDp5M68s5arZGZVc=/fit-in/1072x0/https://tf-cmsv2-photocontest-smithsonianmag-prod-approved.s3.amazonaws.com/ea22e815-2a46-414a-a091-c9accda61ebb.jpg",
            hostPageUrl:
              "https://photocontest.smithsonianmag.com/photocontest/detail/penguins-flight/",
            encodingFormat: "jpeg",
            contentSize: "76730 B",
            height: 716,
            accentColor: "#467885",
            imageId: "EAF2F0E17CD9D93FF502AF15F935F76AC491D7A4",
            name: "Penguin's Flight | Smithsonian Photo Contest | Smithsonian Magazine",
            hostPageDisplayUrl:
              "https://photocontest.smithsonianmag.com/photocontest/detail/penguins-flight",
          },
          {
            name: "Flying Penguin - Worth1000 Contests",
            width: 1023,
            contentUrl:
              "http://worth1000.s3.amazonaws.com/submissions/784500/784774_b90c_1024x2000.jpg",
            height: 703,
            hostPageUrl:
              "http://www.worth1000.com/entries/76950/flying-penguin",
            contentSize: "83494 B",
            encodingFormat: "jpeg",
            imageId: "49232538EB3F87DFB227E5E6DD113BFA49B78C68",
            accentColor: "#2A60A1",
            hostPageDisplayUrl:
              "www.worth1000.com/entries/76950/flying-penguin",
          },
          {
            width: 1024,
            encodingFormat: "jpeg",
            height: 705,
            imageId: "320B52910005FA7D9F49C4752728158BC172F32D",
            contentSize: "181045 B",
            name: "Internotes - Penguins can fly",
            hostPageDisplayUrl:
              "internotes.tumblr.com/post/95094586/penguins-can-fly",
            contentUrl:
              "http://farm1.static.flickr.com/168/377531735_3cfb5bed14_o.jpg",
            accentColor: "#4A6481",
            hostPageUrl:
              "http://internotes.tumblr.com/post/95094586/penguins-can-fly",
          },
        ],
        talkingPoint:
          "Welcome to our video where we will be taking you on a wild ride through New York City with a penguin who has a special talent - flying!",
      },
      table: {
        voiceAudio: {
          urls: ["", ""],
          durations: [0, 0],
        },
        summary: "",
        table: "",
        isPresent: false,
      },
    },
    error: "",
    status: "SUCCESS",
    message: "Video created successfully!",
    render: {
      url: "",
      error: "",
      msg: "Render not initiated yet.",
      status: "PENDING",
    },
    creditType: "free",
    prompt: "Make a video about A penguin flying through new york",
    metadata: {
      width: 1920,
      description:
        "Create a video about a penguin soaring across different landmarks in New York. The video should start with the penguin jumping off a building and slowly gliding through the skyline. Capture the penguin's journey across the Statue of Liberty, Central Park, Times Square and the Empire State Building. Use animations and sound effects to make the video fun and engaging.",
      title: "Watch a Penguin glide through New York City",
      topic: "Penguin flying through New York",
      durationInSeconds: 120,
      color: {
        gradientEndColor: "#6ed1ff",
        gradientStartColor: "#001eff",
        accentColor: "#6ed1ff",
      },
      height: 1080,
      style: "fun",
    },
    createdAt: "Sat May 27 2023",
    referenceData:
      "The penguin starts off in central park, and then takes off into the sky, landing on top of the Chrysler building",
    userId: "user_2QNoZyJBAunqTAU6EzTYULxPfxO",
  },
  {
    uniqueId:
      "0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd",
    isPublic: false,
    error: "",
    prompt: "Make a video about Content Optimizer",
    data: {
      intro: {
        images: [
          {
            contentUrl:
              "https://i.pinimg.com/originals/61/8c/e7/618ce7228de651d57b9bb82ea7904e8f.png",
            contentSize: "92442 B",
            encodingFormat: "png",
            hostPageDisplayUrl:
              "https://www.pinterest.com/pin/574842339935766315",
            height: 1102,
            hostPageUrl: "https://www.pinterest.com/pin/574842339935766315/",
            name: "Content Optimization: How to Optimize your Content for Maximum Results | Optimization, Ebook ...",
            imageId: "2309120714F620B275D866232A76DBCB7477E18D",
            accentColor: "#02BBC9",
            width: 735,
          },
          {
            accentColor: "#2B69A0",
            contentUrl:
              "https://www.brafton.com/wp-content/uploads/2019/05/content-optimization-strategy-FEATURE.png",
            height: 1239,
            encodingFormat: "png",
            hostPageDisplayUrl:
              "https://www.brafton.com.au/blog/seo/how-to-create-a-foolproof-content-optimization...",
            contentSize: "143450 B",
            width: 760,
            name: "How to create a foolproof content optimization strategy for 2019 | Brafton",
            imageId: "E8F40BC78D7E771AC881626715ED1EB24299FF04",
            hostPageUrl:
              "https://www.brafton.com.au/blog/seo/how-to-create-a-foolproof-content-optimization-strategy-for-2019/",
          },
          {
            name: "The Undeniable Importance of Content Optimization in the Field of Online Marketing",
            encodingFormat: "jpeg",
            accentColor: "#C28C09",
            width: 709,
            hostPageUrl:
              "https://www.4seohelp.com/the-undeniable-importance-of-content-optimization-in-the-field-of-online-marketing/",
            height: 369,
            imageId: "FB0AA6107BA886C0242430EEEBBC89A00F99D9CF",
            contentUrl:
              "https://www.4seohelp.com/wp-content/uploads/2018/12/Content-Optimization.jpg",
            hostPageDisplayUrl:
              "https://www.4seohelp.com/the-undeniable-importance-of-content-optimization-in-the-field...",
            contentSize: "30062 B",
          },
        ],
        talkingPoint:
          "In this video, we will explore 10 simple tricks to boost your blog traffic. We will cover techniques such as keyword research, on-page optimization, link building, and content promotion to help you optimize your blog content for SEO and attract more visitors to your website.",
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684950989/aishortz/0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd/en-US-Standard-D-e6f6f7ac0cba5858515197455ff09e81.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684950989/aishortz/0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd/en-US-Standard-F-e6f6f7ac0cba5858515197455ff09e81.wav",
          ],
          durations: [16.270542, 17.240042],
        },
      },
      videoSections: [
        {
          images: [
            {
              name: "6 Best Email Marketing Software for Small Businesses in 2022",
              hostPageUrl:
                "https://fitsmallbusiness.com/best-email-marketing-software/",
              accentColor: "#10914B",
              height: 376,
              imageId: "C0973426D320B39E96C30D9BE98758C94A920EEC",
              encodingFormat: "jpeg",
              contentSize: "70138 B",
              contentUrl:
                "https://fitsmallbusiness.com/wp-content/uploads/2021/12/Screenshot_Mailchimp_content_optimizer_tools.jpg",
              width: 840,
              hostPageDisplayUrl:
                "https://fitsmallbusiness.com/best-email-marketing-software",
            },
            {
              contentUrl:
                "https://d1yei2z3i6k35z.cloudfront.net/161/6284eaf0563a0_Mailchimp_content_optimizer.png",
              contentSize: "24711 B",
              hostPageUrl: "https://systeme.io/es/blog/moosend-vs-mailchimp",
              encodingFormat: "png",
              accentColor: "#028A45",
              imageId: "7E6D822038FDAD97227A3231815EC1D704627AF0",
              hostPageDisplayUrl:
                "https://systeme.io/es/blog/moosend-vs-mailchimp",
              height: 401,
              width: 750,
              name: "Moosend vs. Mailchimp: la batalla por ser la mejor plataforma de email marketing",
            },
            {
              contentSize: "73475 B",
              accentColor: "#188134",
              contentUrl:
                "https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/9e2d5380-8e07-43ef-b53c-da6b1b7f4053.png?fit=crop&w=600&h=450&fill=blur&auto=format&q=50",
              hostPageDisplayUrl:
                "https://www.capterra.co.uk/software/110228/mailchimp",
              height: 450,
              imageId: "4FAE28B1805D084CB856D6315F104A24DE62584B",
              width: 600,
              encodingFormat: "png",
              hostPageUrl:
                "https://www.capterra.co.uk/software/110228/mailchimp",
              name: "Mailchimp Pricing, Cost & Reviews - Capterra UK 2023",
            },
          ],
          title:
            "Mailchimp's Content Optimizer tool for better email marketing content",
          talkingPoint:
            "Mailchimp's Content Optimizer is a helpful tool to guide you in creating and designing your marketing content. It provides analysis based on industry best practices to help you send better emails.",
          voiceAudio: {
            durations: [16.20475, 16.366667],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684950982/aishortz/0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd/en-US-Standard-D-a17cd814d22ec18a36f16425421a1ea2.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684950982/aishortz/0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd/en-US-Standard-F-a17cd814d22ec18a36f16425421a1ea2.wav",
            ],
          },
        },
        {
          voiceAudio: {
            durations: [15.052, 15.109792],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684950982/aishortz/0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd/en-US-Standard-D-873d7ed3a8ca5b78ba290b08a685f83a.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684950982/aishortz/0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd/en-US-Standard-F-873d7ed3a8ca5b78ba290b08a685f83a.wav",
            ],
          },
          talkingPoint:
            "Accessing the Content Optimizer requires a Standard Marketing plan or higher. Make sure you're familiar with the different types of data that an email report can contain before using it.",
          images: [
            {
              accentColor: "#A87723",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/666814288563024148",
              width: 800,
              hostPageUrl: "https://www.pinterest.com/pin/666814288563024148/",
              imageId: "87606E76E3AA9053F95AE6C10DE09D2BF0A292D6",
              height: 866,
              contentSize: "435852 B",
              name: "Marketing Planning Process | Marketing process, Business marketing plan, Marketing plan",
              contentUrl:
                "https://i.pinimg.com/originals/ff/42/93/ff4293d5a1308c6a2ecde1b8bfba525b.png",
              encodingFormat: "png",
            },
            {
              hostPageUrl:
                "http://www.digitalleadershipinstitute.in/content-optimization-rules/",
              contentUrl:
                "http://digitalleadershipinstitute.in/wp-content/uploads/2018/06/Content-Optimization-Rules-01-e1529918455299.png",
              accentColor: "#C53D06",
              name: "Content Optimization Rules Ed Tech marketers can't afford to break",
              height: 300,
              imageId: "BC46D4B557A93247250E127D553F34A6EDAAE802",
              width: 800,
              contentSize: "187062 B",
              hostPageDisplayUrl:
                "www.digitalleadershipinstitute.in/content-optimization-rules",
              encodingFormat: "png",
            },
            {
              imageId: "2309120714F620B275D866232A76DBCB7477E18D",
              contentUrl:
                "https://i.pinimg.com/originals/61/8c/e7/618ce7228de651d57b9bb82ea7904e8f.png",
              width: 735,
              encodingFormat: "png",
              hostPageUrl: "https://www.pinterest.com/pin/574842339935766315/",
              contentSize: "92442 B",
              accentColor: "#02BBC9",
              height: 1102,
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/574842339935766315",
              name: "Content Optimization: How to Optimize your Content for Maximum Results | Optimization, Ebook ...",
            },
          ],
          title:
            "Accessing Content Optimizer requires Standard Marketing plan or higher",
        },
        {
          title:
            "Content Optimizer is available for English language content only",
          talkingPoint:
            "Content Optimizer is only available for English language content and supported in accounts that have opted in to Mailchimp's data analytics projects.",
          voiceAudio: {
            durations: [12.969083, 12.832833],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684950982/aishortz/0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd/en-US-Standard-D-a2055ab77763c98294325ada89dc9014.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684950982/aishortz/0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd/en-US-Standard-F-a2055ab77763c98294325ada89dc9014.wav",
            ],
          },
          images: [
            {
              encodingFormat: "png",
              width: 1120,
              height: 805,
              name: "SimilarContent Review (2022): Top Features & Pricing - begindot",
              hostPageUrl:
                "https://www.begindot.com/review/similarcontent-review/",
              contentSize: "44398 B",
              contentUrl:
                "https://www.begindot.com/wp-content/uploads/2020/05/Content-Optimizer.png",
              accentColor: "#C75404",
              hostPageDisplayUrl:
                "https://www.begindot.com/review/similarcontent-review",
              imageId: "5EA7C8227DCADBE2D7E3D55596B38EC387599AC5",
            },
            {
              contentUrl:
                "https://cdn.cognitiveseo.com/blog/wp-content/uploads/2019/09/content-optimizer-keyword-tool-from-cognitiveseo-768x404.jpg",
              encodingFormat: "jpeg",
              name: "The Improved Content Optimizer & Keyword Tool. More Features. Smarter. Simply Better – TYoung ...",
              height: 404,
              accentColor: "#003851",
              width: 768,
              imageId: "852630DBFD999D8CC02B6BBA776CBCEAA95014C1",
              contentSize: "33370 B",
              hostPageUrl:
                "https://tyoungsystems.com/the-improved-content-optimizer-keyword-tool-more-features-smarter-simply-better/",
              hostPageDisplayUrl:
                "https://tyoungsystems.com/the-improved-content-optimizer-keyword-tool-more-features...",
            },
            {
              width: 1280,
              height: 720,
              encodingFormat: "jpeg",
              contentUrl:
                "https://i.ytimg.com/vi/nCkKIeus_QA/maxresdefault.jpg",
              accentColor: "#C10A0B",
              contentSize: "134900 B",
              imageId: "9EF7544F43C34921D0865AED86E8AB38E7A33C5E",
              name: "Content Optimizer - Similar Content Tutorial - YouTube",
              hostPageUrl: "https://www.youtube.com/watch?v=nCkKIeus_QA",
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=nCkKIeus_QA",
            },
          ],
        },
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684950982/aishortz/0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd/en-US-Standard-D-143f2a7857dffb709ce15a25f31b80b5.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684950982/aishortz/0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd/en-US-Standard-F-143f2a7857dffb709ce15a25f31b80b5.wav",
            ],
            durations: [18.571583, 18.831542],
          },
          images: [
            {
              width: 640,
              contentSize: "44932 B",
              name: "Top Tips for Your Email Marketing Strategy Including Infographic",
              accentColor: "#0283C9",
              hostPageDisplayUrl:
                "https://www.pixelproductionsinc.com/top-tips-email-marketing-strategy",
              hostPageUrl:
                "https://www.pixelproductionsinc.com/top-tips-email-marketing-strategy/",
              imageId: "2B1B17DAA3CD968C423F54F5F8795CDF15C420BA",
              encodingFormat: "jpeg",
              contentUrl:
                "https://www.pixelproductionsinc.com/wp-content/uploads/2017/04/Tips-for-Your-Email-Marketing-Strategy.jpg",
              height: 558,
            },
            {
              width: 709,
              contentSize: "30062 B",
              name: "The Undeniable Importance of Content Optimization in the Field of Online Marketing",
              imageId: "FB0AA6107BA886C0242430EEEBBC89A00F99D9CF",
              contentUrl:
                "https://www.4seohelp.com/wp-content/uploads/2018/12/Content-Optimization.jpg",
              hostPageDisplayUrl:
                "https://www.4seohelp.com/the-undeniable-importance-of-content-optimization-in-the-field...",
              height: 369,
              encodingFormat: "jpeg",
              accentColor: "#C28C09",
              hostPageUrl:
                "https://www.4seohelp.com/the-undeniable-importance-of-content-optimization-in-the-field-of-online-marketing/",
            },
            {
              width: 800,
              name: "On-Page Optimization : Strategies To Rank Better In 2020",
              hostPageDisplayUrl:
                "https://www.milesweb.com/blog/online-marketing/on-page-optimization-strategies-to-rank...",
              contentSize: "93205 B",
              encodingFormat: "png",
              height: 445,
              hostPageUrl:
                "https://www.milesweb.com/blog/online-marketing/on-page-optimization-strategies-to-rank-better-in-2020/",
              contentUrl:
                "https://www.milesweb.com/blog/wp-content/uploads/2020/02/On-Page-Optimization-Guide-%E2%80%93-6-Latest-Strategies-That-Will-You-To-Rank-Better-In-2020.png",
              accentColor: "#C8034C",
              imageId: "10B2D69AA71D77CAAA58A397237F851DAD40187A",
            },
          ],
          title:
            "Inline suggestions provided by Content Optimizer for better email campaigns",
          talkingPoint:
            "When creating an email campaign in the new builder, Content Optimizer provides inline suggestions based on marketing best practices. It also provides comparisons of best performing campaigns to help you improve your content.",
        },
        {
          title:
            "Content Optimizer checks for spam trigger words to improve deliverability",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684950982/aishortz/0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd/en-US-Standard-D-5ece67d688d1c484eea186d93cee7031.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684950982/aishortz/0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd/en-US-Standard-F-5ece67d688d1c484eea186d93cee7031.wav",
            ],
            durations: [15.124875, 15.039583],
          },
          images: [
            {
              height: 1143,
              encodingFormat: "png",
              hostPageUrl:
                "https://www.engagebay.com/blog/here-is-your-to-do-list-of-9-tasks-for-high-email-deliverability/?ref=quuu",
              width: 1080,
              contentUrl:
                "https://www.engagebay.com/blog/wp-content/uploads/2019/05/spam-trigger-words-1080x1143.png",
              accentColor: "#C29309",
              imageId: "411B93D3597680B94D72A1B295AC2B3D934D8CD4",
              hostPageDisplayUrl:
                "https://www.engagebay.com/blog/here-is-your-to-do-list-of-9-tasks-for-high-email...",
              contentSize: "94314 B",
              name: "Here Is Your To-Do List of 9 Tasks for High Email Deliverability",
            },
            {
              accentColor: "#BA5611",
              encodingFormat: "png",
              imageId: "F3C9B9542BEAB3F9ED4AC99A7E15C03DCA39B552",
              hostPageUrl: "https://www.pinterest.com/pin/226798531217842879/",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/226798531217842879",
              width: 800,
              height: 2250,
              contentUrl:
                "https://i.pinimg.com/originals/63/07/39/6307392c5f52fd89634e8311bcbc92eb.png",
              contentSize: "538998 B",
              name: "10 Email Spam Triggers to Avoid in 2017 | Marketing software, Marketing automation, Digital ...",
            },
            {
              contentSize: "20408 B",
              name: "7 Email Marketing Design Tips for 2016 - Right On Interactive",
              contentUrl:
                "https://www.rightoninteractive.com/wp-content/uploads/2015/01/Spam-Words2.png",
              height: 225,
              imageId: "BF4B6567A943B3FFF280D7F2A53F7637A5E949A3",
              accentColor: "#272729",
              encodingFormat: "png",
              width: 536,
              hostPageDisplayUrl:
                "https://www.rightoninteractive.com/email-marketing/7-email-marketing-design-tips",
              hostPageUrl:
                "https://www.rightoninteractive.com/email-marketing/7-email-marketing-design-tips/",
            },
          ],
          talkingPoint:
            "In addition to analyzing subject lines and email content, Content Optimizer also checks for spam trigger words and gives suggestions for improving your email's deliverability.",
        },
      ],
      table: {
        isPresent: true,
        summary:
          "This table presents a summary of keyword rankings for three different topics - SEO, digital marketing, and social media marketing. The ranking data is not specific to any search engine or geographical location. The data can be helpful for understanding the popularity and competition level for different search terms within the broad topics. It can assist in developing a keyword strategy and identifying opportunities for improvement. However, it should be noted that the actual rankings can vary widely based on multiple factors such as search engine algorithm updates, user behavior, and location settings. Hence, regular monitoring and analysis are necessary to maintain a successful keyword ranking.",
        table:
          "| Keyword | Ranking |\n| --- | --- |\n| SEO | 1 |\n| Digital Marketing | 3 |\n| Social Media Marketing | 2 |",
        voiceAudio: {
          durations: [42.148, 43.730458],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684950980/aishortz/0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd/en-US-Standard-D-cd1dfbf78235d4fd66926bc520f4657c.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684950980/aishortz/0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd/en-US-Standard-F-cd1dfbf78235d4fd66926bc520f4657c.wav",
          ],
        },
      },
      outro: {
        talkingPoint:
          "Thanks for watching! Be sure to check out our recommended videos on similar topics. Don't forget to like and share this video, and subscribe to our channel for more content. See you in the next video!",
        voiceAudio: {
          durations: [11.474708, 12.331708],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684950987/aishortz/0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd/en-US-Standard-D-22231f92db92c30609a5e788a4bf1f14.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684950987/aishortz/0159b225ec64ad625683563fee8357b75429304d7b5e28909862ca894e4621cd/en-US-Standard-F-22231f92db92c30609a5e788a4bf1f14.wav",
          ],
        },
      },
    },
    metadata: {
      topic: "Content Optimization for Blogs",
      style: "professional",
      color: {
        gradientStartColor: "#FF5733",
        gradientEndColor: "#FFFFFF",
        accentColor: "#FF5733",
      },
      durationInSeconds: 300,
      height: 1080,
      description:
        "The video should be informative and explain how to optimize blog content for SEO. It should cover techniques like keyword research, on-page optimization, link building, and content promotion. Please exclude graphics, charts, and tables.",
      title: "10 Simple Tricks to Boost Your Blog Traffic",
      table: {
        label: "Keyword Rankings",
      },
      width: 1920,
    },
    render: {
      url: "",
      msg: "Render not initiated yet.",
      error: "",
      status: "PENDING",
    },
    createdAt: "Wed May 24 2023",
    status: "SUCCESS",
    userId: "user_2QFYZOzgzjD43XQy0TQOI3Pw1vz",
    message: "Video created successfully!",
    referenceData:
      "About the Content Optimizer\n Copy Article URL\nWhen you send email campaigns to your audience, Mailchimp can help you decide how to create and design your marketing content. Mailchimp's Content Optimizer gives additional guidance with analysis based on industry best practices. Access this feature in the new email builder or your email campaign reports before sending your next email.\n\nIn this article, we'll go over how to view the Content Optimizer and what it can do to help you send better emails.\n\nBefore you start\nAccess to the Content Optimizer's detailed report requires a Standard Marketing plan or higher. To find out what features are included in each plan, check out our pricing page.\nMake sure you're familiar with the different types of data that an email report can contain. To learn more, check out About Email Campaign Reports.\nContent Optimizer is only supported in accounts that have opted in to our data analytics projects.\nAt this time, Content Optimizer will only analyze English language content.\nHow it works\nWhen you create an email campaign in the new builder, we'll provide inline suggestions based on marketing best practices. You’ll also get comparisons of best performin",
    creditType: "free",
  },
  {
    referenceData: "Explore dc universe super heroes",
    userId: "user_2QV3FOswT06bNpwkCqdL2tdZURz",
    status: "SUCCESS",
    uniqueId:
      "0a3b38a8a9a89dcf7c5fd9e311781fe2176e3ccf0b22d8a59b7f25379338cd80",
    creditType: "free",
    createdAt: "Tue May 30 2023",
    isPublic: false,
    prompt: "Make a video about DC Universe",
    data: {
      outro: {
        talkingPoint:
          "Thanks for diving into the DC Universe with us! Don't forget to like and share this video, and consider subscribing to our channel for more content like this. Check out our recommended videos for more exciting adventures in the world of superheroes and villains. Stay tuned for more high-quality content from us. Thanks for watching!",
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685424936/aishortz/0a3b38a8a9a89dcf7c5fd9e311781fe2176e3ccf0b22d8a59b7f25379338cd80/en-US-Standard-D-0199492829a939f110b035129a292604.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685424936/aishortz/0a3b38a8a9a89dcf7c5fd9e311781fe2176e3ccf0b22d8a59b7f25379338cd80/en-US-Standard-F-0199492829a939f110b035129a292604.wav",
          ],
          durations: [19.171833, 19.823125],
        },
      },
      intro: {
        voiceAudio: {
          durations: [18.046833, 18.549375],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685424936/aishortz/0a3b38a8a9a89dcf7c5fd9e311781fe2176e3ccf0b22d8a59b7f25379338cd80/en-US-Standard-D-3fbc52eec4bb21c7a88edf98f14b7e35.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685424936/aishortz/0a3b38a8a9a89dcf7c5fd9e311781fe2176e3ccf0b22d8a59b7f25379338cd80/en-US-Standard-F-3fbc52eec4bb21c7a88edf98f14b7e35.wav",
          ],
        },
        images: [
          {
            accentColor: "#AB6320",
            contentSize: "580359 B",
            hostPageDisplayUrl: "https://www.dailydot.com/bazaar/dc-universe",
            width: 2550,
            name: "Save $200 on the ‘DC Universe 10th Anniversary Collection’ Blu-ray set",
            imageId: "A330C5E9C7C3EA617C60E947620E53FF67C83670",
            height: 1275,
            contentUrl:
              "https://www.dailydot.com/wp-content/uploads/2018/07/batmanmain.jpg",
            encodingFormat: "jpeg",
            hostPageUrl: "https://www.dailydot.com/bazaar/dc-universe/",
          },
          {
            hostPageDisplayUrl:
              "https://aminoapps.com/c/comics/page/blog/what-is-the-future-of-the-dc-universe/Jvid...",
            imageId: "5039F4D588A9DE7947D34773F8B6B162ED6B2872",
            height: 1166,
            encodingFormat: "jpeg",
            hostPageUrl:
              "https://aminoapps.com/c/comics/page/blog/what-is-the-future-of-the-dc-universe/Jvid_uwPxPV6lqQg1PaRXGlWmGaqEV",
            contentUrl:
              "http://pm1.narvii.com/7522/3379941924cd859d63c9d79aeb1419261c3b77a7r1-2048-1166v2_uhq.jpg",
            width: 2048,
            name: "What is The Future of the DC Universe? | Comics Amino",
            accentColor: "#077EC5",
            contentSize: "490834 B",
          },
          {
            accentColor: "#A82723",
            hostPageDisplayUrl:
              "https://www.wccbcharlotte.com/2018/07/19/dc-universe-sets-pricing-plan-for-digital...",
            hostPageUrl:
              "https://www.wccbcharlotte.com/2018/07/19/dc-universe-sets-pricing-plan-for-digital-subscription/",
            contentSize: "327343 B",
            encodingFormat: "jpeg",
            width: 1024,
            name: "DC Universe Sets Pricing Plan For Digital Subscription - WCCB Charlotte's CW",
            imageId: "A30C7C7246F2F0384FCD4091D2939B4D165158B7",
            height: 772,
            contentUrl:
              "https://wpcdn.us-east-1.vip.tn-cloud.net/www.wccbcharlotte.com/content/uploads/2018/07/DCVol2Marquee_57466713405381.60938022-1024x772.jpg",
          },
        ],
        talkingPoint:
          "In this video, we will explore the rich history and iconic characters of the DC Universe. From Superman to Batman to Wonder Woman, we'll delve into the world of DC and discover what makes it so compelling. Get ready for an action-packed adventure as we unleash the power of the DC Universe!",
      },
      table: {
        isPresent: false,
        summary: "",
        voiceAudio: {
          durations: [0, 0],
          urls: ["", ""],
        },
        table: "",
      },
      videoSections: [
        {
          title: "Exploring the Superheroes of the DC Universe",
          voiceAudio: {
            durations: [17.651333, 18.108292],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685424932/aishortz/0a3b38a8a9a89dcf7c5fd9e311781fe2176e3ccf0b22d8a59b7f25379338cd80/en-US-Standard-D-a0e7864973df21d29e75b5f5c08cbb98.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685424931/aishortz/0a3b38a8a9a89dcf7c5fd9e311781fe2176e3ccf0b22d8a59b7f25379338cd80/en-US-Standard-F-a0e7864973df21d29e75b5f5c08cbb98.wav",
            ],
          },
          images: [
            {
              height: 1024,
              name: "The JSA | Dc comics artwork, Comic book superheroes, Dc comics heroes",
              width: 768,
              hostPageUrl: "https://www.pinterest.com/pin/572590540113161576/",
              accentColor: "#B1881A",
              encodingFormat: "jpeg",
              contentUrl:
                "https://i.pinimg.com/originals/2e/b9/2e/2eb92e7849c146c075442b1fbc8858d0.jpg",
              contentSize: "253997 B",
              imageId: "0AB3F03A15C1519D42E1F17A0492A688131FDCB7",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/572590540113161576",
            },
            {
              contentSize: "265252 B",
              imageId: "4525A069BA41F3700897D1DEF931E86746FDD3E4",
              hostPageUrl: "https://www.pinterest.com/pin/593771532099698075/",
              encodingFormat: "jpeg",
              width: 735,
              accentColor: "#1681B5",
              height: 1116,
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/593771532099698075",
              name: "Comics and Other Cool Stuff",
              contentUrl:
                "https://i.pinimg.com/736x/5d/ee/73/5dee73068e96a60adcb0a77a59bd889c.jpg",
            },
            {
              imageId: "1FB521897D5101194BE60D9DCE779935B611EA5A",
              width: 718,
              name: "pencils and Inks by Mike S. Miller colors by me old print commission, here is a video of how i ...",
              encodingFormat: "jpeg",
              height: 1112,
              accentColor: "#9F642C",
              contentSize: "235617 B",
              hostPageUrl: "https://www.pinterest.com/pin/62346776077413825/",
              contentUrl:
                "https://i.pinimg.com/736x/cc/10/1f/cc101fa15352cfecab1c26c6426ab57a.jpg",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/62346776077413825",
            },
          ],
          talkingPoint:
            "Let's dive into the DC Universe and explore the vast array of superheroes that inhabit this fictional world. From the iconic Superman to the brooding Batman, DC has given us some of the most beloved characters in pop culture history.",
        },
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685424932/aishortz/0a3b38a8a9a89dcf7c5fd9e311781fe2176e3ccf0b22d8a59b7f25379338cd80/en-US-Standard-D-44e9887e0d454859ff8b4d8a9705889e.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685424932/aishortz/0a3b38a8a9a89dcf7c5fd9e311781fe2176e3ccf0b22d8a59b7f25379338cd80/en-US-Standard-F-44e9887e0d454859ff8b4d8a9705889e.wav",
            ],
            durations: [20.083875, 21.125292],
          },
          title: "Diversity in the DC Universe: Heroes for Everyone",
          talkingPoint:
            "One of the most interesting aspects of the DC Universe is the sheer diversity of its characters. From the Green Lantern Corps, which draws its members from all across the universe, to the Birds of Prey, a team of female heroes who fight crime in Gotham City, there's a hero for everyone.",
          images: [
            {
              width: 700,
              accentColor: "#AA6A21",
              encodingFormat: "jpeg",
              imageId: "A18A6E3A50BD5F7EE6B276CF763CEE3DAB89CA47",
              hostPageDisplayUrl:
                "dccomicsmovie.com/10-things-dc-entertainment-does-well",
              contentSize: "59131 B",
              contentUrl:
                "https://i1.wp.com/dccomicsmovie.com/wp-content/uploads/2015/06/DIVERSITY.jpg?resize=700%2C200",
              hostPageUrl:
                "http://dccomicsmovie.com/10-things-dc-entertainment-does-well/",
              height: 200,
              name: "10 Things DC Entertainment Does Well – DC Comics Movie",
            },
            {
              contentSize: "338052 B",
              hostPageUrl:
                "https://allstarcomics.com.au/products/dc-super-heroes-diversity-is-superpower-board-book",
              hostPageDisplayUrl:
                "https://allstarcomics.com.au/products/dc-super-heroes-diversity-is-superpower-board-book",
              contentUrl:
                "https://cdn.shopify.com/s/files/1/0275/3033/0221/products/STL183430_1600x.jpg?v=1625540865",
              accentColor: "#BBB010",
              width: 1600,
              imageId: "4675722CDF059200D388D16A5CBE61E6724E70EA",
              encodingFormat: "jpeg",
              name: "DC SUPER HEROES DIVERSITY IS SUPERPOWER BOARD BOOK – All Star Comics",
              height: 1301,
            },
            {
              contentSize: "115556 B",
              height: 984,
              contentUrl:
                "https://i.pinimg.com/originals/0b/0c/f3/0b0cf3ec31ec150a6997e5f3dd1cd8b4.jpg",
              encodingFormat: "jpeg",
              accentColor: "#AC491F",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/793548396814500961",
              width: 640,
              name: "The DC Multiverse (With images) | Superhero facts, Marvel dc comics, Dc comics art",
              imageId: "979206FD4F53A0A57F660C2324A7841CB6F1002F",
              hostPageUrl: "https://www.pinterest.com/pin/793548396814500961/",
            },
          ],
        },
        {
          talkingPoint:
            "Of course, we can't talk about the DC Universe without mentioning the Justice League. This team of superheroes, made up of some of the most powerful characters in the DC Universe, has saved the world countless times from threats both terrestrial and extraterrestrial.",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685424932/aishortz/0a3b38a8a9a89dcf7c5fd9e311781fe2176e3ccf0b22d8a59b7f25379338cd80/en-US-Standard-D-ca9f967c514ea0b1dc1aeba5cf8378c0.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685424931/aishortz/0a3b38a8a9a89dcf7c5fd9e311781fe2176e3ccf0b22d8a59b7f25379338cd80/en-US-Standard-F-ca9f967c514ea0b1dc1aeba5cf8378c0.wav",
            ],
            durations: [18.530417, 19.402417],
          },
          images: [
            {
              hostPageUrl:
                "http://es.dcextendeduniverse.wikia.com/wiki/Justice_League",
              accentColor: "#AE281D",
              contentSize: "2317671 B",
              imageId: "F9DB6712BF6A4127042FFCAC77491F714EB859BD",
              name: "Justice League | DC Extended Universe Wiki | FANDOM powered by Wikia",
              width: 810,
              encodingFormat: "png",
              hostPageDisplayUrl:
                "es.dcextendeduniverse.wikia.com/wiki/Justice_League",
              contentUrl:
                "https://vignette.wikia.nocookie.net/dcextendeduniverse/images/c/cc/Justice_League_-_P%C3%B3ster_con_Superman.png/revision/latest?cb=20171126062918&path-prefix=es",
              height: 1200,
            },
            {
              hostPageDisplayUrl:
                "https://www.pinterest.com.mx/pin/418694096610374120",
              contentSize: "184192 B",
              accentColor: "#BB2510",
              encodingFormat: "jpeg",
              height: 1000,
              hostPageUrl:
                "https://www.pinterest.com.mx/pin/418694096610374120/",
              imageId: "EAFF62484A4A9428BB0F0C258F2B7E5AA21551F8",
              contentUrl:
                "https://i.pinimg.com/736x/d9/61/7f/d9617f2774827e5f18f27f47a6ebeeba.jpg",
              name: "DC Comics JLA Secret Origins Fine Art Lithograph by Alex Ross | Sideshow Collectibles | Alex ...",
              width: 698,
            },
            {
              width: 1280,
              accentColor: "#B39018",
              encodingFormat: "jpeg",
              imageId: "456CA39CBFA2D972EB98A9713F966F4371E7A423",
              contentSize: "724600 B",
              height: 1968,
              hostPageUrl:
                "http://www.nerdly.co.uk/2018/12/11/justice-league-vol-1-the-totality-review-dc-comics/",
              contentUrl:
                "http://www.nerdly.co.uk/wp-content/uploads/2018/12/justice-league-v1-cover.jpg",
              name: "Nerdly » ‘Justice League Vol.1: The Totality’ Review (DC Comics)",
              hostPageDisplayUrl:
                "www.nerdly.co.uk/2018/12/11/justice-league-vol-1-the-totality-review-dc-comics",
            },
          ],
          title: "The Iconic Justice League of the DC Universe",
        },
        {
          images: [
            {
              hostPageDisplayUrl:
                "https://www.cbr.com/the-10-most-useless-dc-villains-ranked/amp",
              imageId: "C910A8CD7DD109D2BFB421BC31B7B9D4A4F69DFA",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://www.cbr.com/the-10-most-useless-dc-villains-ranked/amp/",
              accentColor: "#134361",
              height: 900,
              contentSize: "354094 B",
              contentUrl:
                "https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/01/DC-Villains-Header-Image-Cropped.jpg",
              name: "The 10 Most Useless DC Villains, Ranked | CBR",
              width: 1710,
            },
            {
              accentColor: "#A86F23",
              hostPageUrl:
                "https://screenrant.com/dc-comics-villains-want-done-right-dceu/",
              encodingFormat: "jpeg",
              name: "10 Iconic DC Comics Villains We Want To See Done Right In The DCEU",
              width: 1780,
              height: 910,
              imageId: "62F352ECD75C9B4972C6F3FEF632C29BCB2ABFE6",
              contentSize: "371631 B",
              contentUrl:
                "https://static0.srcdn.com/wordpress/wp-content/uploads/2019/06/DC-Comics-villains.jpg",
              hostPageDisplayUrl:
                "https://screenrant.com/dc-comics-villains-want-done-right-dceu",
            },
            {
              contentSize: "150760 B",
              hostPageUrl:
                "https://www.pinterest.com/pin/heroes-are-defined-by-their-villains-evil-is-relative-dc-villains-are-as-complex-as-deep-and-as-compelling-as-any-of--320248223499354690/",
              width: 1080,
              contentUrl:
                "https://i.pinimg.com/originals/e4/c0/cd/e4c0cdf44b2c73d731056861a286e350.jpg",
              height: 1227,
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/heroes-are-defined-by-their-villains-evil-is-relative-dc...",
              name: 'HEROES ARE DEFINED BY THEIR VILLAINS "Evil is relative - DC villains are as complex, as deep and ...',
              encodingFormat: "jpeg",
              accentColor: "#184A60",
              imageId: "5E7A83B72EDA5634B6BE316349F6B232EFDD6FF8",
            },
          ],
          talkingPoint:
            "But it's not just the heroes that make the DC Universe so compelling. The villains are just as iconic, from the Joker to Lex Luthor to Darkseid. These villains are more than just foils for our heroes - they're complex characters in their own right, with their own motivations and backstories.",
          voiceAudio: {
            durations: [21.27375, 22.149417],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685424931/aishortz/0a3b38a8a9a89dcf7c5fd9e311781fe2176e3ccf0b22d8a59b7f25379338cd80/en-US-Standard-D-b7b191d64b45cce6a464e3a7d1c9c00d.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685424932/aishortz/0a3b38a8a9a89dcf7c5fd9e311781fe2176e3ccf0b22d8a59b7f25379338cd80/en-US-Standard-F-b7b191d64b45cce6a464e3a7d1c9c00d.wav",
            ],
          },
          title: "Complex Villains: The Antagonists of the DC Universe",
        },
        {
          voiceAudio: {
            durations: [24.692667, 25.643375],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685424932/aishortz/0a3b38a8a9a89dcf7c5fd9e311781fe2176e3ccf0b22d8a59b7f25379338cd80/en-US-Standard-D-164d26970a1140aa1064ff14d5a6a803.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685424932/aishortz/0a3b38a8a9a89dcf7c5fd9e311781fe2176e3ccf0b22d8a59b7f25379338cd80/en-US-Standard-F-164d26970a1140aa1064ff14d5a6a803.wav",
            ],
          },
          talkingPoint:
            "Finally, one of the most exciting things about the DC Universe is its potential for crossover events. When heroes from different parts of the DC Universe come together, it's always a thrilling ride. Whether it's the Crisis on Infinite Earths or the recent Dark Nights: Metal, these events bring together characters and storylines in unexpected and exciting ways.",
          title: "Exciting Crossover Events in the DC Universe",
          images: [
            {
              contentSize: "78635 B",
              imageId: "763F66B40C43076B4C968C40FBE84ACFBE058876",
              encodingFormat: "jpeg",
              height: 399,
              hostPageUrl:
                "https://comicbook.com/blog/2014/09/03/10-greatest-dc-crossover-events-of-all-time/",
              name: "10 Greatest DC Crossover Events Of All Time",
              width: 655,
              contentUrl:
                "http://media.comicbook.com/uploads1/2014/09/dc-crossover-events-107880.jpg",
              hostPageDisplayUrl:
                "https://comicbook.com/blog/2014/09/03/10-greatest-dc-crossover-events-of-all-time",
              accentColor: "#137EB8",
            },
            {
              contentUrl:
                "https://attackongeek.com/wp-content/uploads/2018/11/arrowverse-elseworlds-crossover-1539243739602_1280w.jpg",
              imageId: "BE44EB569DA99FBAB08CA2562F6053175F136F0E",
              height: 720,
              name: "DC's 2018 Crossover Event: Elseworlds - AttackOnGeek",
              accentColor: "#39776A",
              hostPageDisplayUrl:
                "https://attackongeek.com/dc-crossover-elseworlds",
              contentSize: "183291 B",
              hostPageUrl: "https://attackongeek.com/dc-crossover-elseworlds/",
              width: 1280,
              encodingFormat: "jpeg",
            },
            {
              imageId: "AB68E2CA4EFBF55AA4F2CBB97B8217486DEF69E0",
              width: 1500,
              height: 2306,
              accentColor: "#0795BA",
              hostPageDisplayUrl:
                "comicbook.com/blog/2014/09/03/10-greatest-dc-crossover-events-of-all-time",
              contentSize: "664886 B",
              encodingFormat: "jpeg",
              hostPageUrl:
                "http://comicbook.com/blog/2014/09/03/10-greatest-dc-crossover-events-of-all-time/",
              name: "10 Greatest DC Crossover Events Of All Time",
              contentUrl:
                "http://media.comicbook.com/uploads1/2014/09/dc-one-million-cover-106076.jpg",
            },
          ],
        },
      ],
    },
    message: "Video created successfully!",
    render: {
      error: "",
      url: "",
      msg: "Render not initiated yet.",
      status: "PENDING",
    },
    error: "",
    metadata: {
      description:
        "The video should cover the history of the DC Universe and its iconic characters, including Batman, Superman, and Wonder Woman. It should also discuss the various adaptations, such as the films and TV shows. Please make it visually appealing with lots of exciting action scenes.",
      color: {
        gradientEndColor: "#0000FF",
        accentColor: "#FFFF00",
        gradientStartColor: "#FF0000",
      },
      title: "Unleashing the Power of DC Universe - Must Watch!",
      height: 1080,
      style: "fun",
      width: 1920,
      durationInSeconds: 300,
      topic: "DC Universe",
    },
  },
  {
    prompt: "Make a video about Exit music festival in Novi Sad, Serbia. ",
    createdAt: "Wed May 24 2023",
    render: {
      status: "PENDING",
      error: "",
      url: "",
      msg: "Render not initiated yet.",
    },
    referenceData:
      "From 12th to 18th of July 2023. Top performers: The Prodigy, Ellie Goulding, David Guetta. Happening at Petrovaradin Fortress in Novi Sad. 23rd festival.",
    creditType: "free",
    userId: "user_2QEnHsOL7qYI50piI5ov7mIL2Wf",
    data: {
      intro: {
        talkingPoint:
          "Welcome to the 23rd edition of the Exit Music Festival, happening at the stunning Petrovaradin Fortress in Novi Sad! Get ready to experience some of the biggest names in the music industry as we explore the festival's perfect blend of music, art, and culture.",
        voiceAudio: {
          durations: [15.562875, 16.103333],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927791/aishortz/0b8a313f5e7294f63662224ef7ba241dfc9a1290f880fb9c75b1165a330d439b/en-US-Standard-D-7d8a054f327ebc900231c2d2f88237b5.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927791/aishortz/0b8a313f5e7294f63662224ef7ba241dfc9a1290f880fb9c75b1165a330d439b/en-US-Standard-F-7d8a054f327ebc900231c2d2f88237b5.wav",
          ],
        },
        images: [
          {
            width: 738,
            contentUrl:
              "https://www.hlimg.com/images/events/738X538/r_1541228131e.jpg",
            contentSize: "85232 B",
            accentColor: "#913695",
            hostPageDisplayUrl:
              "https://www.hellotravel.com/events/exit-festival",
            imageId: "F6E7E6219868576DB28CA9452C09ED39D56CA383",
            encodingFormat: "jpeg",
            hostPageUrl: "https://www.hellotravel.com/events/exit-festival",
            name: "EXIT Festival 2019 in Serbia, photos, Dance, Music when is EXIT Festival 2019 - HelloTravel",
            height: 454,
          },
          {
            height: 2496,
            contentUrl:
              "https://lonelyplanetimages.imgix.net/a/g/hi/t/320f1fe06feb6f436e363b0ae32c3e37-exit-festival.jpg",
            hostPageUrl:
              "https://www.lonelyplanet.com/serbia/novi-sad/events/exit-festival/a/poi-fes/1251775/360687",
            hostPageDisplayUrl:
              "https://www.lonelyplanet.com/serbia/novi-sad/events/exit-festival/a/poi-fes/1251775/360687",
            accentColor: "#BB8210",
            imageId: "79AA379ED1BEE12852257FC20091060F41718458",
            width: 3744,
            contentSize: "1908245 B",
            name: "EXIT Festival | Novi Sad, Serbia Events - Lonely Planet",
            encodingFormat: "jpeg",
          },
          {
            name: "A visit at the Exit Festival in Novi Sad, Serbia",
            accentColor: "#B1601A",
            encodingFormat: "jpeg",
            imageId: "357D5877BD699A116E9616B72A11092A5AA2A6B2",
            hostPageUrl:
              "https://www.traveltelling.net/en/biketour-2015-eurovelo-post-13/",
            hostPageDisplayUrl:
              "https://www.traveltelling.net/en/biketour-2015-eurovelo-post-13",
            height: 684,
            width: 1024,
            contentSize: "185133 B",
            contentUrl:
              "https://i1.wp.com/www.traveltelling.net/wp-content/uploads/2015/07/IMG_6818.jpg?fit=1024%2C684&ssl=1",
          },
        ],
      },
      outro: {
        voiceAudio: {
          durations: [12.7075, 13.59325],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927789/aishortz/0b8a313f5e7294f63662224ef7ba241dfc9a1290f880fb9c75b1165a330d439b/en-US-Standard-D-5aa124a243a2e9dffb8b6cb6f75af7e7.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927789/aishortz/0b8a313f5e7294f63662224ef7ba241dfc9a1290f880fb9c75b1165a330d439b/en-US-Standard-F-5aa124a243a2e9dffb8b6cb6f75af7e7.wav",
          ],
        },
        talkingPoint:
          "Thank you for watching this video about the Exit Music Festival! Don't forget to check out our recommended videos for more exciting content, like, share and subscribe to our channel for similar videos. See you in the next one!",
      },
      videoSections: [
        {
          images: [
            {
              contentUrl:
                "https://www.musicfestivalwizard.com/wp-content/uploads/2020/08/Vito-Valentinetti-EXIT-2018-238.jpg",
              encodingFormat: "jpeg",
              accentColor: "#276FA4",
              imageId: "37567FCD44C17861F2C5EACEC92486AA31EEE741",
              contentSize: "1322218 B",
              height: 900,
              name: "EXIT Festival 2023 - Music Festival Wizard",
              width: 1600,
              hostPageUrl:
                "https://www.musicfestivalwizard.com/festivals/exit-festival-2023/",
              hostPageDisplayUrl:
                "https://www.musicfestivalwizard.com/festivals/exit-festival-2023",
            },
            {
              name: "Primele nume confirmate la EXIT Festival : VIRGIN RADIO ROMANIA",
              hostPageUrl:
                "https://virginradio.ro/primele-nume-confirmate-la-exit-festival/",
              accentColor: "#A42731",
              height: 1068,
              contentUrl:
                "https://virginradio.ro/wp-content/uploads/2018/01/exit-festival.jpg",
              contentSize: "236246 B",
              width: 1600,
              encodingFormat: "jpeg",
              imageId: "A22F70F916A1CAFAF6060D3693CE150FACB03D62",
              hostPageDisplayUrl:
                "https://virginradio.ro/primele-nume-confirmate-la-exit-festival",
            },
            {
              contentSize: "143252 B",
              accentColor: "#B63215",
              name: "EXIT Festival 2023 - Tickets & Accommodation - Festival Travel",
              hostPageDisplayUrl:
                "https://en.festival.travel/festivals/exit-festival-2",
              width: 1200,
              height: 800,
              contentUrl:
                "https://cdn.festival.travel/files/gt_1/2022-09-16/exit-festival-2022-album-2.jpg",
              imageId: "4722D1C9B3991ED54DAE63F3165A6C82FCF21A93",
              hostPageUrl:
                "https://en.festival.travel/festivals/exit-festival-2/",
              encodingFormat: "jpeg",
            },
          ],
          talkingPoint:
            "Welcome to the 23rd edition of the Exit Music Festival happening from 12th to 18th of July 2023 at the stunning Petrovaradin Fortress in Novi Sad!",
          voiceAudio: {
            durations: [13.089917, 13.183083],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927783/aishortz/0b8a313f5e7294f63662224ef7ba241dfc9a1290f880fb9c75b1165a330d439b/en-US-Standard-D-1a91cbf12fd84fb75b633a8f78956541.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927783/aishortz/0b8a313f5e7294f63662224ef7ba241dfc9a1290f880fb9c75b1165a330d439b/en-US-Standard-F-1a91cbf12fd84fb75b633a8f78956541.wav",
            ],
          },
          title: "Welcome to Exit Music Festival 2023",
        },
        {
          images: [
            {
              encodingFormat: "jpeg",
              contentSize: "603717 B",
              width: 2048,
              hostPageUrl: "https://wikiedm.com/exit-festival-2021-primeras/",
              height: 1365,
              contentUrl:
                "https://wikiedm.com/wp-content/uploads/2020/07/EXIT-Festival-Dance-Arena-2048x1365.jpeg",
              hostPageDisplayUrl:
                "https://wikiedm.com/exit-festival-2021-primeras",
              name: "EXIT Festival 2021 anuncia primeras confirmaciones - WikiEDM",
              accentColor: "#BE730D",
              imageId: "1024295B8E033C9911059AE0B81D8DB5F90B826D",
            },
            {
              imageId: "3EE15FBDF2F760FAEFA62ED33F94DB32DDB7BDD2",
              hostPageDisplayUrl:
                "https://www.irinabaragoi.ro/exit-festival-entered-a-new-era-with-its-new-maximum-of...",
              accentColor: "#BD4909",
              name: "EXIT Festival entered a new era with its new maximum of 215,000 visitors!",
              contentSize: "3939836 B",
              contentUrl:
                "https://www.irinabaragoi.ro/wp-content/uploads/2018/06/Hardwell-Main-Stage-@-EXIT-Fesival-2017-_-Marko-Obradovi%C4%87.jpg",
              width: 5449,
              hostPageUrl:
                "https://www.irinabaragoi.ro/exit-festival-entered-a-new-era-with-its-new-maximum-of-215000-visitors/",
              encodingFormat: "jpeg",
              height: 3594,
            },
            {
              hostPageUrl:
                "https://edmli.com/2018/04/25/exit-festival-has-locked-down-global-stars-for-its-2018-edition/",
              height: 971,
              encodingFormat: "jpeg",
              contentSize: "576462 B",
              accentColor: "#0892BD",
              hostPageDisplayUrl:
                "https://edmli.com/2018/04/25/exit-festival-has-locked-down-global-stars-for-its-2018...",
              imageId: "3C4A2BA1D559A1D79DC1EAEBB577154FF11E6BD9",
              name: "EXIT Festival Has Locked Down Global Stars For Its 2018 Edition EDMLI",
              width: 1445,
              contentUrl:
                "https://edmli.com/wp-content/uploads/2018/04/EAW_Exit1-min.jpg",
            },
          ],
          talkingPoint:
            "Get ready to experience some of the biggest names in the music industry including The Prodigy, Ellie Goulding, and David Guetta. These top performers will leave you spellbound with their electrifying performances.",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927783/aishortz/0b8a313f5e7294f63662224ef7ba241dfc9a1290f880fb9c75b1165a330d439b/en-US-Standard-D-acb8cf3ba116e15d1f0171b3f48514ef.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927783/aishortz/0b8a313f5e7294f63662224ef7ba241dfc9a1290f880fb9c75b1165a330d439b/en-US-Standard-F-acb8cf3ba116e15d1f0171b3f48514ef.wav",
            ],
            durations: [14.225917, 14.946458],
          },
          title: "Top Performers at Exit Music Festival",
        },
        {
          images: [
            {
              encodingFormat: "jpeg",
              width: 1445,
              hostPageUrl:
                "https://edmli.com/2018/04/25/exit-festival-has-locked-down-global-stars-for-its-2018-edition/",
              imageId: "3C4A2BA1D559A1D79DC1EAEBB577154FF11E6BD9",
              accentColor: "#0892BD",
              contentUrl:
                "https://edmli.com/wp-content/uploads/2018/04/EAW_Exit1-min.jpg",
              name: "EXIT Festival Has Locked Down Global Stars For Its 2018 Edition EDMLI",
              contentSize: "576462 B",
              hostPageDisplayUrl:
                "https://edmli.com/2018/04/25/exit-festival-has-locked-down-global-stars-for-its-2018...",
              height: 971,
            },
            {
              contentSize: "913311 B",
              contentUrl:
                "https://www.ibizabynight.net/wp-content/uploads/2020/07/exit-festival.jpeg",
              name: "EXIT Festival unveils first acts for 2021 with David Guetta, DJ Snake, Tyga, Eric Prydz, Four ...",
              width: 3200,
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://www.ibizabynight.net/2020/07/31/exit-festival-unveils-first-acts-for-2021-with...",
              accentColor: "#BF730C",
              height: 2133,
              imageId: "5EEE292671C7A5220386CA0493E481E7CF675146",
              hostPageUrl:
                "https://www.ibizabynight.net/2020/07/31/exit-festival-unveils-first-acts-for-2021-with-david-guetta-dj-snake-tyga-eric-prydz-four-tet-boris-brejcha-sepultura-metronomy-and-more/",
            },
            {
              imageId: "EE579EB029553E9FA91CDD177E87FB8E17B47F29",
              hostPageUrl:
                "https://www.nme.com/news/music/exit-festival-adds-20-more-artists-to-their-2021-line-up-2935003",
              contentSize: "295940 B",
              accentColor: "#B0591B",
              contentUrl:
                "https://www.nme.com/wp-content/uploads/2021/05/Dance-Arena-Sunrise-1-1392x884.jpg",
              encodingFormat: "jpeg",
              name: "EXIT Festival adds 20 more artists to their 2021 line-up",
              width: 1392,
              height: 884,
              hostPageDisplayUrl:
                "https://www.nme.com/news/music/exit-festival-adds-20-more-artists-to-their-2021-line-up...",
            },
          ],
          talkingPoint:
            "The festival offers a perfect blend of music, art, and culture. You can witness some of the most incredible art installations, exhibitions, and performances throughout the festival.",
          voiceAudio: {
            durations: [14.42375, 15.544458],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927783/aishortz/0b8a313f5e7294f63662224ef7ba241dfc9a1290f880fb9c75b1165a330d439b/en-US-Standard-D-bdea38163c4509ab89a383555c290385.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927783/aishortz/0b8a313f5e7294f63662224ef7ba241dfc9a1290f880fb9c75b1165a330d439b/en-US-Standard-F-bdea38163c4509ab89a383555c290385.wav",
            ],
          },
          title: "Art, Culture, and Installations at Exit Music Festival",
        },
        {
          voiceAudio: {
            durations: [15.487667, 16.546958],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927783/aishortz/0b8a313f5e7294f63662224ef7ba241dfc9a1290f880fb9c75b1165a330d439b/en-US-Standard-D-7da3adba1373bc49bab5da20fb8737be.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927783/aishortz/0b8a313f5e7294f63662224ef7ba241dfc9a1290f880fb9c75b1165a330d439b/en-US-Standard-F-7da3adba1373bc49bab5da20fb8737be.wav",
            ],
          },
          title: "Activities and Entertainment at Exit Music Festival",
          images: [
            {
              contentSize: "603717 B",
              name: "EXIT Festival 2021 anuncia primeras confirmaciones - WikiEDM",
              accentColor: "#BE730D",
              hostPageDisplayUrl:
                "https://wikiedm.com/exit-festival-2021-primeras",
              encodingFormat: "jpeg",
              width: 2048,
              imageId: "1024295B8E033C9911059AE0B81D8DB5F90B826D",
              hostPageUrl: "https://wikiedm.com/exit-festival-2021-primeras/",
              contentUrl:
                "https://wikiedm.com/wp-content/uploads/2020/07/EXIT-Festival-Dance-Arena-2048x1365.jpeg",
              height: 1365,
            },
            {
              name: "EXIT Festival Has Locked Down Global Stars For Its 2018 Edition EDMLI",
              encodingFormat: "jpeg",
              contentSize: "576462 B",
              height: 971,
              accentColor: "#0892BD",
              width: 1445,
              contentUrl:
                "https://edmli.com/wp-content/uploads/2018/04/EAW_Exit1-min.jpg",
              imageId: "3C4A2BA1D559A1D79DC1EAEBB577154FF11E6BD9",
              hostPageUrl:
                "https://edmli.com/2018/04/25/exit-festival-has-locked-down-global-stars-for-its-2018-edition/",
              hostPageDisplayUrl:
                "https://edmli.com/2018/04/25/exit-festival-has-locked-down-global-stars-for-its-2018...",
            },
            {
              contentUrl:
                "https://www.youredm.com/wp-content/uploads/2020/06/102415429_10158487322678698_3470261150383928700_o.jpg",
              contentSize: "979270 B",
              encodingFormat: "jpeg",
              width: 2048,
              hostPageDisplayUrl:
                "https://www.youredm.com/2021/07/19/exit-festival-no-mass-spread-covid-19",
              imageId: "C8225DEE07AD87D3F82A60CD4006A1B97A0D6B47",
              accentColor: "#1787B4",
              hostPageUrl:
                "https://www.youredm.com/2021/07/19/exit-festival-no-mass-spread-covid-19/",
              height: 1367,
              name: "EXIT Festival Results in No Mass Spread of COVID-19, Dutch Festival Linked To 1,000 New Cases ...",
            },
          ],
          talkingPoint:
            "Apart from the music, there are plenty of other activities to keep you entertained, including camping, sports, and workshops. You can also indulge in some of the most delicious food and drinks from around the world.",
        },
        {
          voiceAudio: {
            durations: [14.920708, 15.784167],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927783/aishortz/0b8a313f5e7294f63662224ef7ba241dfc9a1290f880fb9c75b1165a330d439b/en-US-Standard-D-08eab9645215f466f03884b888b1dbeb.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927783/aishortz/0b8a313f5e7294f63662224ef7ba241dfc9a1290f880fb9c75b1165a330d439b/en-US-Standard-F-08eab9645215f466f03884b888b1dbeb.wav",
            ],
          },
          title: "Experience the Magic of Exit Music Festival",
          images: [
            {
              height: 971,
              hostPageUrl:
                "https://edmli.com/2018/04/25/exit-festival-has-locked-down-global-stars-for-its-2018-edition/",
              contentSize: "576462 B",
              imageId: "3C4A2BA1D559A1D79DC1EAEBB577154FF11E6BD9",
              accentColor: "#0892BD",
              encodingFormat: "jpeg",
              name: "EXIT Festival Has Locked Down Global Stars For Its 2018 Edition EDMLI",
              width: 1445,
              contentUrl:
                "https://edmli.com/wp-content/uploads/2018/04/EAW_Exit1-min.jpg",
              hostPageDisplayUrl:
                "https://edmli.com/2018/04/25/exit-festival-has-locked-down-global-stars-for-its-2018...",
            },
            {
              contentSize: "913311 B",
              encodingFormat: "jpeg",
              contentUrl:
                "https://www.ibizabynight.net/wp-content/uploads/2020/07/exit-festival.jpeg",
              imageId: "5EEE292671C7A5220386CA0493E481E7CF675146",
              height: 2133,
              width: 3200,
              hostPageDisplayUrl:
                "https://www.ibizabynight.net/2020/07/31/exit-festival-unveils-first-acts-for-2021-with...",
              accentColor: "#BF730C",
              name: "EXIT Festival unveils first acts for 2021 with David Guetta, DJ Snake, Tyga, Eric Prydz, Four ...",
              hostPageUrl:
                "https://www.ibizabynight.net/2020/07/31/exit-festival-unveils-first-acts-for-2021-with-david-guetta-dj-snake-tyga-eric-prydz-four-tet-boris-brejcha-sepultura-metronomy-and-more/",
            },
            {
              contentSize: "979270 B",
              encodingFormat: "jpeg",
              height: 1367,
              hostPageDisplayUrl:
                "https://www.youredm.com/2021/07/19/exit-festival-no-mass-spread-covid-19",
              accentColor: "#1787B4",
              hostPageUrl:
                "https://www.youredm.com/2021/07/19/exit-festival-no-mass-spread-covid-19/",
              width: 2048,
              contentUrl:
                "https://www.youredm.com/wp-content/uploads/2020/06/102415429_10158487322678698_3470261150383928700_o.jpg",
              imageId: "C8225DEE07AD87D3F82A60CD4006A1B97A0D6B47",
              name: "EXIT Festival Results in No Mass Spread of COVID-19, Dutch Festival Linked To 1,000 New Cases ...",
            },
          ],
          talkingPoint:
            "Exit Music Festival is not just about music, it's an experience that you'll cherish for a lifetime. So, pack your bags and get ready to witness the magic of one of the biggest music festivals in the world!",
        },
      ],
      table: {
        summary: "",
        voiceAudio: {
          urls: ["", ""],
          durations: [0, 0],
        },
        table: "",
        isPresent: false,
      },
    },
    uniqueId:
      "0b8a313f5e7294f63662224ef7ba241dfc9a1290f880fb9c75b1165a330d439b",
    status: "SUCCESS",
    metadata: {
      title:
        "You Won't Believe What Went Down at Exit Music Festival in Novi Sad, Serbia!",
      color: {
        accentColor: "#ff5722",
      },
      topic: "Exit Music Festival in Novi Sad, Serbia",
      description:
        "The video should cover the experience of attending Exit Music Festival in Novi Sad, Serbia. Capture the vibe of the festival and the diverse range of artists performing. It should also include footage of the picturesque city of Novi Sad and the surrounding area. Do not include charts or tables but include footage of the festival's atmosphere, crowd, and performers. The editing should be fast-paced and energetic.",
      height: 1080,
      style: "fun",
      durationInSeconds: 1800,
      width: 1920,
    },
    message: "Video created successfully!",
    isPublic: false,
    error: "",
  },
  {
    prompt:
      "Make a video about the different types of wood, including their distinct features, applications, and benefits.",
    status: "SUCCESS",
    uniqueId:
      "11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63",
    userId: "user_2QPsfElc6egDq2o6C87SMbVPmvA",
    creditType: "free",
    data: {
      intro: {
        talkingPoint:
          "In this video, we will explore the different types of wood, their distinct features, applications, and benefits. We'll take a look at popular wood types like pine, oak, cherry and mahogany and discuss their uses in construction, furniture, and decorative items. Get ready to discover the ultimate guide to types of wood - you won't believe what we found!",
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266769/aishortz/11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63/en-US-Standard-D-8bb5e770b2a2ab55b0598dccf73a0251.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266770/aishortz/11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63/en-US-Standard-F-8bb5e770b2a2ab55b0598dccf73a0251.wav",
          ],
          durations: [20.594833, 22.275708],
        },
        images: [
          {
            hostPageDisplayUrl: "https://fixmyhouse.com/different-types-wood",
            accentColor: "#A6A325",
            imageId: "E2D14E72B76641340991F60D127C70D4FF81E8FC",
            encodingFormat: "png",
            contentSize: "63548 B",
            height: 1024,
            contentUrl:
              "https://fixmyhouse.com/wp-content/uploads/2016/08/woodinfographics.png",
            width: 353,
            name: "The Different Types of Wood and Their Uses (Infographic) – Fix My House",
            hostPageUrl: "https://fixmyhouse.com/different-types-wood/",
          },
          {
            imageId: "35FAABC705ECB671F86E8C6B571268BF77369438",
            name: "20 best Wood Types & Uses images on Pinterest | Nature, Wood slices and Bricolage",
            contentSize: "99215 B",
            height: 801,
            encodingFormat: "jpeg",
            width: 560,
            hostPageDisplayUrl:
              "https://www.pinterest.com/taylorrho/wood-types-uses",
            hostPageUrl: "https://www.pinterest.com/taylorrho/wood-types-uses/",
            accentColor: "#6A4425",
            contentUrl:
              "https://i.pinimg.com/736x/06/e0/18/06e018090566506e51743341e30bd2b4--camping-outdoors-camping-ideas.jpg",
          },
          {
            hostPageUrl: "https://www.pinterest.com/pin/335377503504425797/",
            encodingFormat: "png",
            contentUrl:
              "https://i.pinimg.com/originals/dc/37/cc/dc37ccf75051f373541e397597cd4cde.png",
            imageId: "4522DCF56968225643FF0B345BF0D1C22673CCE0",
            hostPageDisplayUrl:
              "https://www.pinterest.com/pin/335377503504425797",
            height: 3000,
            width: 2000,
            accentColor: "#A47027",
            contentSize: "1320691 B",
            name: "The Timbers We Work With.... By James Amato | Wooden garden furniture, Wooden garden swing ...",
          },
        ],
      },
      table: {
        summary:
          "The table compares the durability and cost of three types of wood - Oak, Pine, and Mahogany. Oak is the most durable type of wood and is also quite expensive. Pine, on the other hand, has moderate durability and a low cost. Mahogany is the most expensive type of wood, but also has high durability, making it a good option for people who want a long-lasting material. Ultimately, the choice of wood depends on the individual's budget and requirements for the project they are working on.",
        voiceAudio: {
          durations: [29.829292, 30.722208],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266764/aishortz/11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63/en-US-Standard-D-91ec12316a06c857ad59dc79b2411ea4.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266763/aishortz/11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63/en-US-Standard-F-91ec12316a06c857ad59dc79b2411ea4.wav",
          ],
        },
        table:
          "| Type of Wood | Durability | Cost |\n| --- | --- | --- |\n| Oak | High | High |\n| Pine | Medium | Low |\n| Mahogany | High | Very High |",
        isPresent: true,
      },
      outro: {
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266768/aishortz/11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63/en-US-Standard-D-5497bfeb61771a1b0560d7bdff0161f6.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266767/aishortz/11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63/en-US-Standard-F-5497bfeb61771a1b0560d7bdff0161f6.wav",
          ],
          durations: [13.992875, 14.90775],
        },
        talkingPoint:
          "Thank you for learning about the different types of wood. If you enjoyed this video, please like and share it, and consider subscribing to our channel for more great content. Be sure to check out our recommended videos on similar topics. Thanks for watching!",
      },
      videoSections: [
        {
          voiceAudio: {
            durations: [12.263458, 12.848917],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266765/aishortz/11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63/en-US-Standard-D-6633b4138ea6ddd874c720fb233ed06d.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266765/aishortz/11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63/en-US-Standard-F-6633b4138ea6ddd874c720fb233ed06d.wav",
            ],
          },
          title: "Versatility of Wood",
          images: [
            {
              name: "CRAFTWAND's Teo Tudorica on the versatility of wood, sustainable sourcing and the company's ...",
              accentColor: "#311A0A",
              contentSize: "363640 B",
              height: 961,
              hostPageDisplayUrl:
                "https://www.buildingcentre.co.uk/news/articles/craftwands-teo-tudorica-on-the...",
              imageId: "A0005D8C71A29142A0FE7E0C0F1D3EA8CDC9A499",
              encodingFormat: "jpeg",
              contentUrl:
                "https://www.buildingcentre.co.uk/media/w1440/featured/versatility-of-wood1.jpg",
              hostPageUrl:
                "https://www.buildingcentre.co.uk/news/articles/craftwands-teo-tudorica-on-the-versatility-of-wood-sustainable-sourcing-and-the-companys-bright-future",
              width: 1440,
            },
            {
              width: 628,
              encodingFormat: "jpeg",
              imageId: "A0005D8C71A29142A0FE4CA2779AE246539BD15B",
              height: 942,
              contentSize: "126436 B",
              contentUrl:
                "https://www.buildingcentre.co.uk/media/w628/versatility-of-wood5.jpg",
              accentColor: "#A56326",
              name: "CRAFTWAND's Teo Tudorica on the versatility of wood, sustainable sourcing and the company's ...",
              hostPageDisplayUrl:
                "https://www.buildingcentre.co.uk/news/articles/craftwands-teo-tudorica-on-the...",
              hostPageUrl:
                "https://www.buildingcentre.co.uk/news/articles/craftwands-teo-tudorica-on-the-versatility-of-wood-sustainable-sourcing-and-the-companys-bright-future",
            },
            {
              imageId: "0E3668A15A86A7E47685E26855E33E7FAEDF887D",
              width: 710,
              encodingFormat: "jpeg",
              height: 399,
              accentColor: "#3C1704",
              hostPageUrl:
                "https://mini-ielts.com/1468/view-solution/reading/wood-a-valuable-resource-in-new-zealands-economy-",
              contentUrl:
                "https://resources.stuff.co.nz/content/dam/images/4/y/r/o/r/y/image.related.StuffLandscapeSixteenByNine.710x400.4yrumt.png/1617762442665.jpg?format=pjpg&optimize=medium",
              contentSize: "35542 B",
              hostPageDisplayUrl:
                "https://mini-ielts.com/1468/view-solution/reading/wood-a-valuable-resource-in-new...",
              name: "Answers for Wood: a valuable resource in New Zealand’s economy - IELTS reading practice test",
            },
          ],
          talkingPoint:
            "Wood is a versatile and popular material that is used for many purposes. There are many different types of wood, each with its own distinct features, applications, and benefits.",
        },
        {
          images: [
            {
              hostPageUrl:
                "http://www.lowes.com/pd_63448-99899-63448_0__?productId=3624468",
              encodingFormat: "jpeg",
              contentUrl:
                "http://images.lowes.com/product/converted/400000/400000634487.jpg",
              hostPageDisplayUrl:
                "www.lowes.com/pd_63448-99899-63448_0__?productId=3624468",
              imageId: "0BF1B5237435E668D261744AE7C6F52466ACF31E",
              name: "Shop Kiln-Dried Southern Yellow Pine Softwood Board (Common: 10-in; Actual: 0.75-in x 9.5-in) at ...",
              accentColor: "#BC9C0F",
              width: 900,
              contentSize: "206452 B",
              height: 900,
            },
            {
              imageId: "5F07C8114B2FF9079353F166FFE7FD598EE7CD6E",
              accentColor: "#B77714",
              width: 900,
              hostPageDisplayUrl:
                "https://www.lowes.com/pd/Top-Choice-Kiln-Dried-Ponderosa-Pine-Softwood-Board-Common-12...",
              encodingFormat: "jpeg",
              height: 900,
              contentUrl:
                "https://mobileimages.lowes.com/product/converted/094561/094561348770.jpg",
              hostPageUrl:
                "https://www.lowes.com/pd/Top-Choice-Kiln-Dried-Ponderosa-Pine-Softwood-Board-Common-12-in-x-6-ft-Actual-0-75-in-x-11-25-in-x-6-ft/4621544",
              name: "Top Choice Kiln-Dried Ponderosa Pine Softwood Board (Common: 12-in x 6-ft; Actual: 0.75-in x 11. ...",
              contentSize: "69392 B",
            },
            {
              accentColor: "#966835",
              contentSize: "67216 B",
              hostPageUrl:
                "https://www.homedepot.com/b/Lumber-Composites-Boards-Planks-Panels-Appearance-Boards-Planks-Softwood-Boards-Common-Boards/Pine/1x12/N-5yc1vZ1z18gp1Z1z18u9yZ1z1a6ed?storeSelection=",
              encodingFormat: "jpeg",
              height: 1000,
              width: 1000,
              contentUrl:
                "https://images.homedepot-static.com/productImages/4e46669b-0128-420a-aa8a-29e49d60fa3e/svn/common-boards-ww011204hdbd-64_400.jpg",
              name: "1x12 - Pine - Common Boards - Softwood Boards - The Home Depot",
              imageId: "943023C93CF40B68E9B6F663DEF21DE5D184646B",
              hostPageDisplayUrl:
                "https://www.homedepot.com/b/Lumber-Composites-Boards-Planks-Panels-Appearance-Boards...",
            },
          ],
          voiceAudio: {
            durations: [29.456458, 30.378292],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266766/aishortz/11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63/en-US-Standard-D-5a4b59443d9d0060d9fef4cebe4b6b21.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266766/aishortz/11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63/en-US-Standard-F-5a4b59443d9d0060d9fef4cebe4b6b21.wav",
            ],
          },
          talkingPoint:
            "One common type of wood is pine. Pine is a softwood that is light in color and has a straight grain. It is a common choice for construction, as it is relatively inexpensive and easy to work with. Pine is also a popular choice for furniture, particularly in rustic or country-style decor. It can be stained or painted to match any color scheme and can be used to create a variety of different pieces, including bookshelves, tables, and beds.",
          title: "Pine: A Common Softwood",
        },
        {
          title: "Oak: A Strong and Durable Hardwood",
          voiceAudio: {
            durations: [32.554375, 33.299625],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266766/aishortz/11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63/en-US-Standard-D-3ae54910dc3cf5a8efa51b516d0a1176.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266766/aishortz/11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63/en-US-Standard-F-3ae54910dc3cf5a8efa51b516d0a1176.wav",
            ],
          },
          talkingPoint:
            "Another popular type of wood is oak. Oak is a hardwood that is known for its strength and durability. It has a coarse texture and a distinctive grain pattern that makes it a popular choice for furniture and flooring. Oak is also a popular choice for construction, particularly in areas where high-strength wood is required, such as in bridges or boats. Oak can be stained or finished to highlight its natural beauty, and it is also resistant to moisture, making it a good choice for outdoor furniture or decking.",
          images: [
            {
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://www.dreamstime.com/oak-wood-durable-strong-dense-hard-heavy-beautiful...",
              height: 533,
              contentUrl:
                "https://thumbs.dreamstime.com/b/oak-wood-durable-strong-dense-hard-heavy-beautiful-background-excellent-building-ornamental-material-127422806.jpg",
              accentColor: "#90783B",
              hostPageUrl:
                "https://www.dreamstime.com/oak-wood-durable-strong-dense-hard-heavy-beautiful-background-excellent-building-ornamental-material-image127422806",
              width: 800,
              imageId: "616EC6135EB40E47FB572DC2B3E0F7D763D78EAD",
              name: "Oak Wood Is Durable, Strong, Dense, Hard And Heavy. Stock Photo - Image of cheerful, colorful ...",
              contentSize: "108125 B",
            },
            {
              height: 2500,
              hostPageDisplayUrl:
                "https://www.flooranddecor.com/solid-hardwood-wood/gunstock-select-oak-high-gloss-solid...",
              encodingFormat: "jpeg",
              contentSize: "882098 B",
              accentColor: "#4C270C",
              hostPageUrl:
                "https://www.flooranddecor.com/solid-hardwood-wood/gunstock-select-oak-high-gloss-solid-hardwood-100467166.html?rrec=true",
              name: "Gunstock Select Oak High Gloss Solid Hardwood - 3/4in. x 2 1/4in. - 100467166 | Floor and Decor",
              width: 2500,
              contentUrl:
                "https://i8.amplience.net/i/flooranddecor/100467117_natural-select-oak-solid-hardwood_display??$parade230$fmt=jpg&fmt.jpeg.interlaced=true&qlt=70",
              imageId: "D7C2665B9EAD237A75A1F16DAE9FD12728AA00F9",
            },
            {
              accentColor: "#956336",
              imageId: "CF89B5DE0503C1F11AF14BC231A9C5961E71020B",
              contentUrl:
                "https://images.homedepot-static.com/productImages/99494b0f-e226-4730-b23a-ff7943c671ed/svn/revolutionary-rustics-hardwood-samples-br-259979-64_1000.jpg",
              name: "Revolutionary Rustics Take Home Sample - Oak Classic Natural Solid Hardwood Flooring - 5 in. x 7 ...",
              hostPageUrl:
                "https://www.homedepot.com/p/Revolutionary-Rustics-Take-Home-Sample-Oak-Classic-Natural-Solid-Hardwood-Flooring-5-in-x-7-in-BR-259979/307594515",
              width: 1000,
              height: 1000,
              hostPageDisplayUrl:
                "https://www.homedepot.com/p/Revolutionary-Rustics-Take-Home-Sample-Oak-Classic-Natural...",
              contentSize: "274720 B",
              encodingFormat: "jpeg",
            },
          ],
        },
        {
          voiceAudio: {
            durations: [21.924583, 22.482417],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266765/aishortz/11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63/en-US-Standard-D-2e7ecf66b66a70f356e4838d284bbc1e.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266765/aishortz/11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63/en-US-Standard-F-2e7ecf66b66a70f356e4838d284bbc1e.wav",
            ],
          },
          title: "Cherry: Rich and Smooth Hardwood",
          images: [
            {
              hostPageUrl:
                "https://www.flooranddecor.com/engineered-hardwood-wood/natural-brazilian-cherry-smooth-engineered-hardwood-941300226.html",
              width: 2500,
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://www.flooranddecor.com/engineered-hardwood-wood/natural-brazilian-cherry-smooth...",
              contentUrl:
                "https://i1b.adis.ws/i/flooranddecor/100498237_brazilian-cherry-smooth-tongue-and-groove-engineered-hardwood_main?$parade230$?fmt=jpg&fmt.jpeg.interlaced=true&qlt=85",
              contentSize: "1010933 B",
              accentColor: "#511406",
              imageId: "05E3500C9D1BDA5080FADE881C13D705A6DD2132",
              name: "Natural Brazilian Cherry Smooth Engineered Hardwood - 3/8in. x 4 3/4in. - 941300226 | Floor and ...",
              height: 2500,
            },
            {
              accentColor: "#511D14",
              imageId: "05E3500C9D1BDA5080FA76243577BDFD7EB641A5",
              hostPageUrl:
                "https://www.flooranddecor.com/engineered-hardwood-wood/natural-brazilian-cherry-smooth-engineered-hardwood-941300226.html",
              encodingFormat: "jpeg",
              height: 2500,
              width: 2500,
              hostPageDisplayUrl:
                "https://www.flooranddecor.com/engineered-hardwood-wood/natural-brazilian-cherry-smooth...",
              contentSize: "633985 B",
              contentUrl:
                "https://i1a.adis.ws/i/flooranddecor/100503473_brazilian-cherry-smooth-water-resistant-engineered-hardwood_main?$parade230$?fmt=jpg&fmt.jpeg.interlaced=true&qlt=85",
              name: "Natural Brazilian Cherry Smooth Engineered Hardwood - 3/8in. x 4 3/4in. - 941300226 | Floor and ...",
            },
            {
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://modernhomeconcepts.com/products/brazilian-cherry-natural-5-engineered-hardwood-flooring/",
              width: 1080,
              imageId: "9B183DB2D59B5534CB51BA3565C6AEB6A2F9421D",
              height: 1080,
              contentUrl:
                "http://modernhomeconcepts.com/wp-content/uploads/2018/08/PBC5N-Brazilian-Cherry-Natural-straight-03.02-color-corrected.jpg",
              name: "Brazilian Cherry Natural 5” Engineered Hardwood Flooring | Modern Home Concepts",
              hostPageDisplayUrl:
                "https://modernhomeconcepts.com/products/brazilian-cherry-natural-5-engineered-hardwood...",
              contentSize: "369998 B",
              accentColor: "#521B0C",
            },
          ],
          talkingPoint:
            "Cherry is another popular hardwood that is known for its rich, warm color and smooth grain. It is a popular choice for furniture and cabinetry, as it is easy to work with and can be carved and shaped into intricate designs. Cherry is also a popular choice for decorative items, such as picture frames and cutting boards.",
        },
        {
          talkingPoint:
            "Mahogany is a hardwood that is prized for its deep, rich color and fine grain. It is a popular choice for high-end furniture and musical instruments, such as guitars and pianos. Mahogany is also used in boat building, as it is highly resistant to water damage. It can be stained or finished to highlight its natural beauty, and it is also resistant to rot and decay.",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266766/aishortz/11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63/en-US-Standard-D-2ab9f5b124cd4a70d79d922247bc0019.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266765/aishortz/11d2a4cfa8a32be2618e5650fdc6ec9192d6da9dbeda5467d735964263c4fd63/en-US-Standard-F-2ab9f5b124cd4a70d79d922247bc0019.wav",
            ],
            durations: [25.406417, 26.207583],
          },
          images: [
            {
              name: "impact 0925v - deep mahogany Resilient Vinyl Flooring: Vinyl Plank & LVT | Vinyl wood flooring ...",
              height: 1104,
              contentUrl:
                "https://i.pinimg.com/736x/ea/d5/4f/ead54fbe886d72a482f312f536e13a50.jpg",
              accentColor: "#5C3B26",
              contentSize: "98890 B",
              hostPageUrl: "https://www.pinterest.com/pin/530298924881275358/",
              imageId: "85612A9B35BB3B85836869E55456DAEA642E8B85",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/530298924881275358",
              encodingFormat: "jpeg",
              width: 736,
            },
            {
              accentColor: "#664733",
              hostPageDisplayUrl:
                "https://floorfashioncentre.com/flooring/luxury-vinyl/products/shaw-floors-resilient...",
              width: 1333,
              height: 1000,
              encodingFormat: "jpeg",
              contentUrl:
                "https://mm-media-res.cloudinary.com/image/fetch/h_1000,w_1600,c_limit/https://mmllc-images.s3.amazonaws.com/shaw/2031v_00703_room.jpg",
              imageId: "5FD05B520302865C5E5ACA8A6341CE5ED7EE7D15",
              contentSize: "225458 B",
              hostPageUrl:
                "https://floorfashioncentre.com/flooring/luxury-vinyl/products/shaw-floors-resilient-residential-impact-plus-deep-mahogany-00703_2031v/",
              name: "Shaw Floors Resilient Residential Impact Plus Deep Mahogany 00703_2031V Shop Luxury Vinyl - The ...",
            },
            {
              encodingFormat: "png",
              hostPageUrl:
                "https://floorsfree.com/shop/luxury-vinyl-plank/0925v-impact/deep-mahogany/",
              height: 811,
              name: "DEEP MAHOGANY | Floors Free | Denver | Colorado | Carpet, Hardwood, Laminate, Luxury Vinyl Plank ...",
              hostPageDisplayUrl:
                "https://floorsfree.com/shop/luxury-vinyl-plank/0925v-impact/deep-mahogany",
              accentColor: "#5C3B27",
              contentUrl:
                "https://floorsfree.com/wp-content/uploads/2020/03/0925V_00703-1-2-768x811.png",
              width: 768,
              contentSize: "620691 B",
              imageId: "F221641A6D365A73D0D0FA43A8E808299044304E",
            },
          ],
          title: "Mahogany: Deep and Resilient Hardwood",
        },
      ],
    },
    error: "",
    isPublic: false,
    metadata: {
      style: "professional",
      height: 1080,
      width: 1920,
      color: {
        accentColor: "#654321",
      },
      description:
        "This video should explain the different types of wood, their characteristics, and what applications they are best suited for. It should also go into detail about the benefits of using them for different purposes. The content should be informative and easy to follow, and any technical terms should be explained clearly. Graphs and charts may be included to illustrate certain points.",
      title:
        "The Ultimate Guide to Types of Wood - You Won't Believe What We Found!",
      durationInSeconds: 300,
      topic: "Types of Wood: Features, Applications, and Benefits",
      table: {
        label: "Comparison of Types of Wood",
      },
    },
    message: "Video created successfully!",
    referenceData:
      "Wood is a versatile and popular material that is used for many purposes. There are many different types of wood, each with its own distinct features, applications, and benefits. One common type of wood is pine. Pine is a softwood that is light in color and has a straight grain. It is a common choice for construction, as it is relatively inexpensive and easy to work with. Pine is also a popular choice for furniture, particularly in rustic or country-style decor. It can be stained or painted to match any color scheme and can be used to create a variety of different pieces, including bookshelves, tables, and beds.\n\nAnother popular type of wood is oak. Oak is a hardwood that is known for its strength and durability. It has a coarse texture and a distinctive grain pattern that makes it a popular choice for furniture and flooring. Oak is also a popular choice for construction, particularly in areas where high-strength wood is required, such as in bridges or boats. Oak can be stained or finished to highlight its natural beauty, and it is also resistant to moisture, making it a good choice for outdoor furniture or decking.",
    createdAt: "Sun May 28 2023",
    render: {
      error: "",
      url: "",
      status: "PENDING",
      msg: "Render not initiated yet.",
    },
  },
  {
    createdAt: "Sun May 28 2023",
    uniqueId:
      "143e7363f4a104278403610883a980353d9cd5be51eacb3597f66e358ae72c54",
    error: "",
    isPublic: false,
    data: {
      table: {
        voiceAudio: {
          urls: ["", ""],
          durations: [0, 0],
        },
        table: "",
        summary: "",
        isPresent: false,
      },
      outro: {
        talkingPoint:
          "Thanks for watching! If you enjoyed learning about how to make loquat jam, check out our other videos on delicious fruit recipes. Don't forget to like and share this video, and consider subscribing to our channel for more content like this.",
        voiceAudio: {
          durations: [13.6215, 14.266208],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266156/aishortz/143e7363f4a104278403610883a980353d9cd5be51eacb3597f66e358ae72c54/en-US-Standard-D-7e39af0fd29c101175f517a8a1ba8cee.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266156/aishortz/143e7363f4a104278403610883a980353d9cd5be51eacb3597f66e358ae72c54/en-US-Standard-F-7e39af0fd29c101175f517a8a1ba8cee.wav",
          ],
        },
      },
      intro: {
        talkingPoint:
          "In this video, we will explore the fascinating world of Loquat - a unique fruit native to China that has a sweet and tangy flavor. You'll learn how to make a delectable loquat jar, discover its nutritional benefits, and find out how to use it in different recipes like pies, jams, and smoothies. So, fasten your seat belts and join us on this exciting journey of exploring this exotic fruit!",
        images: [
          {
            hostPageUrl: "https://www.britannica.com/plant/loquat",
            name: "loquat | Definition, Fruit, History, Cultivation, Nutrition, & Facts | Britannica",
            imageId: "504668FF271F20EF64CC31962ABB94C1D0C34EB9",
            accentColor: "#AA7721",
            width: 1586,
            height: 1074,
            encodingFormat: "jpeg",
            hostPageDisplayUrl: "https://www.britannica.com/plant/loquat",
            contentSize: "218968 B",
            contentUrl:
              "https://cdn.britannica.com/93/10193-050-6EA4B6C4/Loquat.jpg",
          },
          {
            encodingFormat: "jpeg",
            contentSize: "631715 B",
            imageId: "038A6458E38F8017C47CBCD71455A811806019BB",
            accentColor: "#794421",
            hostPageDisplayUrl:
              "https://www.ocweekly.com/a-history-of-loquats-in-orange-county-and-how-so-many-ended-up...",
            contentUrl:
              "https://ocweekly.com/wp-content/uploads/2018/06/7314565_loquatblemish.jpg",
            name: "A History of Loquats in Orange County, and How So Many Ended Up in Santa Ana – OC Weekly",
            height: 2595,
            width: 2754,
            hostPageUrl:
              "https://www.ocweekly.com/a-history-of-loquats-in-orange-county-and-how-so-many-ended-up-in-santa-ana-7314541/",
          },
          {
            imageId: "07275003F7EBC557A6ABD3F4E06CEED4F4E672D0",
            hostPageUrl:
              "https://www.gardeningknowhow.com/edible/fruits/loquat/growing-loquat-fruit.htm",
            contentSize: "257912 B",
            width: 1536,
            height: 1152,
            hostPageDisplayUrl:
              "https://www.gardeningknowhow.com/edible/fruits/loquat/growing-loquat-fruit.htm",
            name: "Loquat Tree Information - Growing And Caring For A Loquat Tree",
            contentUrl:
              "https://www.gardeningknowhow.com/wp-content/uploads/2012/05/loquat-1536x1152.jpg",
            encodingFormat: "jpeg",
            accentColor: "#C29909",
          },
        ],
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266159/aishortz/143e7363f4a104278403610883a980353d9cd5be51eacb3597f66e358ae72c54/en-US-Standard-D-9c64776ca451cf16807cd1f986577022.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266159/aishortz/143e7363f4a104278403610883a980353d9cd5be51eacb3597f66e358ae72c54/en-US-Standard-F-9c64776ca451cf16807cd1f986577022.wav",
          ],
          durations: [23.925667, 25.073083],
        },
      },
      videoSections: [
        {
          voiceAudio: {
            durations: [8.765625, 8.932875],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266153/aishortz/143e7363f4a104278403610883a980353d9cd5be51eacb3597f66e358ae72c54/en-US-Standard-D-e4c2e05635496ebeb81a2c7d5d93d381.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266153/aishortz/143e7363f4a104278403610883a980353d9cd5be51eacb3597f66e358ae72c54/en-US-Standard-F-e4c2e05635496ebeb81a2c7d5d93d381.wav",
            ],
          },
          talkingPoint:
            "Loquat is a unique fruit that is native to China and has a sweet and tangy flavor.",
          images: [
            {
              height: 770,
              name: "Loquat: A Rare Multi-Beneficial Fruit - Women Fitness",
              accentColor: "#B74406",
              contentSize: "60905 B",
              hostPageUrl:
                "https://www.womenfitness.net/loquat-a-rare-multi-beneficial-fruit/",
              hostPageDisplayUrl:
                "https://www.womenfitness.net/loquat-a-rare-multi-beneficial-fruit",
              width: 1200,
              contentUrl:
                "https://www.womenfitness.net/wp/wp-content/uploads/2019/10/nispero-japones1.jpg",
              encodingFormat: "jpeg",
              imageId: "AAD9F2CA69E53365135E4C3CF57F1F233FD759C4",
            },
            {
              hostPageDisplayUrl:
                "https://www.womenfitness.net/loquat-a-rare-multi-beneficial-fruit",
              name: "Loquat: A Rare Multi-Beneficial Fruit - Women Fitness",
              encodingFormat: "jpeg",
              accentColor: "#AE5E1D",
              contentSize: "72531 B",
              hostPageUrl:
                "https://www.womenfitness.net/loquat-a-rare-multi-beneficial-fruit/",
              imageId: "AAD9F2CA69E53365135EC5D3CFFB23160769CA08",
              width: 1000,
              height: 666,
              contentUrl:
                "https://www.womenfitness.net/wp/wp-content/uploads/2019/10/eriobotrya-japonica-loquat-fruit-plant-tasty-tropical-fruit-1-original-imaf6md2yvhrufkz1-1000x666.jpeg",
            },
            {
              contentUrl:
                "https://www.virtuoart.com/public/uploads/preview/loquat-chinese-plum-fruit-twig-108933-4256x2848-131573567160w9eqjht7pz.jpg",
              hostPageUrl:
                "https://www.virtuoart.com/photo/5233/loquat-chinese-plum-fruit-twig",
              name: "loquat chinese plum fruit twig - Photo #5233 - Free 3D Models | Free stock photos | Desktop ...",
              encodingFormat: "jpeg",
              width: 1280,
              hostPageDisplayUrl:
                "https://www.virtuoart.com/photo/5233/loquat-chinese-plum-fruit-twig",
              height: 857,
              contentSize: "170098 B",
              imageId: "29BD048797B729477620982F1356D15D91B1A714",
              accentColor: "#B87E13",
            },
          ],
          title: "Introduction to Loquat - a Unique Chinese Fruit",
        },
        {
          talkingPoint:
            "One of the best ways to preserve loquat is by making a loquat jar. Start by washing and cutting the fruit into small pieces.",
          title: "Preserving Loquat: How to Make a Loquat Jar",
          images: [
            {
              height: 1102,
              contentUrl:
                "https://i.pinimg.com/originals/97/46/d4/9746d4db6824337665cd47122791e0fa.png",
              contentSize: "324683 B",
              imageId: "40531EC1D801C76D9DD8ABC5ED41E381967E169B",
              width: 735,
              accentColor: "#B14600",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/606156431087017989",
              name: "This loquat jam recipe is a beautiful way to preserve a hard to find fruit for year long ...",
              encodingFormat: "png",
              hostPageUrl: "https://www.pinterest.com/pin/606156431087017989/",
            },
            {
              name: "How to make loquat jam with vanilla - Pook's Pantry Recipe Blog",
              encodingFormat: "jpeg",
              contentUrl:
                "https://www.pookspantry.com/wp-content/uploads/2020/04/loquat-vanilla-jam.jpg",
              hostPageUrl:
                "https://www.pookspantry.com/how-to-make-loquat-jam-with-vanilla/",
              width: 600,
              accentColor: "#AC641F",
              hostPageDisplayUrl:
                "https://www.pookspantry.com/how-to-make-loquat-jam-with-vanilla",
              imageId: "C7EBE370E6F11E6109392DC53BE122CA8E468397",
              contentSize: "65760 B",
              height: 900,
            },
            {
              contentSize: "63700 B",
              encodingFormat: "jpeg",
              accentColor: "#B36618",
              hostPageUrl: "https://www.pinterest.com/pin/123426846025906340/",
              name: "How to make loquat jam with vanilla | Recipe | Loquat jam, Jam, Loquat recipes",
              contentUrl:
                "https://i.pinimg.com/originals/11/8d/ee/118deea5e342cfb405c60800ad167fce.jpg",
              width: 600,
              imageId: "7815C86503BB3AB517249D4E8A7B38EA68A35F75",
              height: 900,
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/123426846025906340",
            },
          ],
          voiceAudio: {
            durations: [11.009, 11.295042],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266152/aishortz/143e7363f4a104278403610883a980353d9cd5be51eacb3597f66e358ae72c54/en-US-Standard-D-bff65655930921a4c38f63f500cdf630.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266153/aishortz/143e7363f4a104278403610883a980353d9cd5be51eacb3597f66e358ae72c54/en-US-Standard-F-bff65655930921a4c38f63f500cdf630.wav",
            ],
          },
        },
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266153/aishortz/143e7363f4a104278403610883a980353d9cd5be51eacb3597f66e358ae72c54/en-US-Standard-D-98cdc61d3f388ec5f991f62099511404.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266153/aishortz/143e7363f4a104278403610883a980353d9cd5be51eacb3597f66e358ae72c54/en-US-Standard-F-98cdc61d3f388ec5f991f62099511404.wav",
            ],
            durations: [12.003708, 12.357917],
          },
          title: "Making Loquat Jam: The Recipe",
          images: [
            {
              encodingFormat: "jpeg",
              accentColor: "#C59106",
              name: "Small Batch Loquat Jam Recipe - Happy Foods Tube",
              contentUrl:
                "https://www.happyfoodstube.com/wp-content/uploads/2021/05/loquat-jam-11-720x1080.jpg",
              imageId: "0E3F2A0BE86497D7EC64DC8B70E6D6079980F050",
              width: 720,
              hostPageUrl: "https://www.happyfoodstube.com/loquat-jam/",
              hostPageDisplayUrl: "https://www.happyfoodstube.com/loquat-jam",
              height: 1080,
              contentSize: "141016 B",
            },
            {
              name: "How to make loquat jam with vanilla - Pook's Pantry Recipe Blog",
              accentColor: "#AC641F",
              contentSize: "65760 B",
              height: 900,
              imageId: "C7EBE370E6F11E6109392DC53BE122CA8E468397",
              encodingFormat: "jpeg",
              width: 600,
              hostPageUrl:
                "https://www.pookspantry.com/how-to-make-loquat-jam-with-vanilla/",
              contentUrl:
                "https://www.pookspantry.com/wp-content/uploads/2020/04/loquat-vanilla-jam.jpg",
              hostPageDisplayUrl:
                "https://www.pookspantry.com/how-to-make-loquat-jam-with-vanilla",
            },
            {
              name: "Make this loquat jam with either small or large batches of loquats to preserve their flavor all ...",
              hostPageUrl:
                "https://www.pinterest.com.au/pin/536280268133248747/",
              accentColor: "#B64801",
              encodingFormat: "png",
              height: 1600,
              imageId: "816EA48E2CF9AD51690535BBF19D61FF9487FA2D",
              hostPageDisplayUrl:
                "https://www.pinterest.com.au/pin/536280268133248747",
              width: 800,
              contentUrl:
                "https://i.pinimg.com/originals/b2/51/e7/b251e7423f93190e6fec4b0f8b436dcd.png",
              contentSize: "1198760 B",
            },
          ],
          talkingPoint:
            "Add sugar and water to a pot and bring it to a boil. Once the sugar has dissolved, add the loquat pieces and let it simmer for about 20 minutes.",
        },
        {
          images: [
            {
              hostPageUrl: "https://www.pinterest.com/pin/606156431087017989/",
              imageId: "40531EC1D801C76D9DD8ABC5ED41E381967E169B",
              contentUrl:
                "https://i.pinimg.com/originals/97/46/d4/9746d4db6824337665cd47122791e0fa.png",
              name: "This loquat jam recipe is a beautiful way to preserve a hard to find fruit for year long ...",
              height: 1102,
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/606156431087017989",
              encodingFormat: "png",
              accentColor: "#B14600",
              contentSize: "324683 B",
              width: 735,
            },
            {
              contentUrl:
                "https://www.pookspantry.com/wp-content/uploads/2020/04/loquat-vanilla-jam.jpg",
              hostPageDisplayUrl:
                "https://www.pookspantry.com/how-to-make-loquat-jam-with-vanilla",
              name: "How to make loquat jam with vanilla - Pook's Pantry Recipe Blog",
              width: 600,
              encodingFormat: "jpeg",
              imageId: "C7EBE370E6F11E6109392DC53BE122CA8E468397",
              height: 900,
              accentColor: "#AC641F",
              contentSize: "65760 B",
              hostPageUrl:
                "https://www.pookspantry.com/how-to-make-loquat-jam-with-vanilla/",
            },
            {
              hostPageDisplayUrl:
                "https://www.pinterest.com.au/pin/536280268133248747",
              accentColor: "#B64801",
              encodingFormat: "png",
              contentUrl:
                "https://i.pinimg.com/originals/b2/51/e7/b251e7423f93190e6fec4b0f8b436dcd.png",
              contentSize: "1198760 B",
              height: 1600,
              name: "Make this loquat jam with either small or large batches of loquats to preserve their flavor all ...",
              hostPageUrl:
                "https://www.pinterest.com.au/pin/536280268133248747/",
              width: 800,
              imageId: "816EA48E2CF9AD51690535BBF19D61FF9487FA2D",
            },
          ],
          title: "Storing Loquat Jam: Best Practices",
          talkingPoint:
            "Let the mixture cool down before transferring it to a jar. Store the jar in a cool and dry place for a few weeks before enjoying the delicious loquat jam.",
          voiceAudio: {
            durations: [12.256, 12.507125],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266153/aishortz/143e7363f4a104278403610883a980353d9cd5be51eacb3597f66e358ae72c54/en-US-Standard-D-e7d17dd885328b420e998951b6dffe7a.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266153/aishortz/143e7363f4a104278403610883a980353d9cd5be51eacb3597f66e358ae72c54/en-US-Standard-F-e7d17dd885328b420e998951b6dffe7a.wav",
            ],
          },
        },
        {
          images: [
            {
              encodingFormat: "jpeg",
              contentSize: "46441 B",
              accentColor: "#B14E02",
              hostPageUrl:
                "https://www.organicfacts.net/health-benefits/fruit/loquat.html",
              width: 700,
              height: 525,
              imageId: "2160D7E5479348865F677883DAB6B2ADAF7BB4FE",
              hostPageDisplayUrl:
                "https://www.organicfacts.net/health-benefits/fruit/loquat.html",
              contentUrl:
                "https://www.organicfacts.net/wp-content/uploads/loquatinfographic.jpg",
              name: "Loquat: Benefits, Side Effects, & How to Eat | Organic Facts",
            },
            {
              name: "Top 5 Health Benefits Of Loquat | Health, Healthy life, Health benefits",
              contentSize: "46306 B",
              height: 612,
              imageId: "E01582D469AD3B37BCF270B02C41314CFD9073CF",
              encodingFormat: "jpeg",
              width: 612,
              accentColor: "#C78004",
              hostPageDisplayUrl:
                "https://www.pinterest.ca/pin/323203710740980109",
              hostPageUrl: "https://www.pinterest.ca/pin/323203710740980109/",
              contentUrl:
                "https://i.pinimg.com/originals/44/2c/6f/442c6f00c2265dec882349ce240d5635.jpg",
            },
            {
              hostPageDisplayUrl:
                "www.irishfilmnyc.com/2020/05/fruit-loquat-benefits.html",
              name: "Fruit Loquat Benefits - health benefits",
              width: 1100,
              contentSize: "654437 B",
              hostPageUrl:
                "http://www.irishfilmnyc.com/2020/05/fruit-loquat-benefits.html",
              encodingFormat: "jpeg",
              accentColor: "#BB101C",
              height: 1400,
              imageId: "F773DF8091563077DEE72297FA024D1A9D1DDBED",
              contentUrl:
                "https://www.curebuzz.com/media/2102577385Health-Benefits-of-Loquat-f.jpg",
            },
          ],
          talkingPoint:
            "Loquat is not only delicious but also packed with nutrients such as Vitamin A, potassium, and fiber. It can be eaten raw or used in various recipes like pies, jams, and smoothies.",
          title: "Nutrients and Culinary Uses of Loquat",
          voiceAudio: {
            durations: [15.180375, 15.908792],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266152/aishortz/143e7363f4a104278403610883a980353d9cd5be51eacb3597f66e358ae72c54/en-US-Standard-D-a63dd4cd702e2e6c30b04ee0265a44bc.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685266153/aishortz/143e7363f4a104278403610883a980353d9cd5be51eacb3597f66e358ae72c54/en-US-Standard-F-a63dd4cd702e2e6c30b04ee0265a44bc.wav",
            ],
          },
        },
      ],
    },
    message: "Video created successfully!",
    userId: "user_2QPrSHuBAPVZ1fcgxtUy8LFGUHO",
    referenceData: "how to make loquat jar",
    render: {
      url: "",
      msg: "Render not initiated yet.",
      error: "",
      status: "PENDING",
    },
    metadata: {
      durationInSeconds: 180,
      style: "fun",
      description:
        "Create a video that explains all about loquat - its origin, different varieties, nutritional benefits, and how to grow them. Illustrate all this with beautiful loquat imagery and explanatory clips.",
      height: 1080,
      width: 1920,
      title: "Loquat: The Exotic Fruit You Need to Try!",
      color: {
        accentColor: "#FFA500",
      },
      topic: "Loquat",
    },
    creditType: "free",
    status: "SUCCESS",
    prompt: "Make a video about loquat",
  },
  {
    createdAt: "Tue May 30 2023",
    uniqueId:
      "1981546a88b713b210b5b883e1a3f7724577442fc69147e32d0a9c365e1f6e3c",
    referenceData:
      "Clerk.com is more than a “sign-in box”. Integrate complete user management UIs and APIs,\n",
    status: "SUCCESS",
    message: "Video created successfully!",
    metadata: {
      title: "Secure your users with Clerk Authentication",
      topic: "Clerk Authentication and User Management",
      description:
        "The video should explain the benefits of using Clerk for user authentication and management. It should include step-by-step instructions on how to set up a Clerk account and integrate it into a web or mobile app. The video should also highlight Clerk's key features such as passwordless authentication, multi-factor authentication, and user roles and permissions. Visuals like animations and screencasts would be helpful in explaining these concepts.",
      color: {
        gradientEndColor: "#008000",
        accentColor: "#008080",
        gradientStartColor: "#00ff00",
      },
      height: 1080,
      width: 1920,
      style: "professional",
      durationInSeconds: 180,
    },
    render: {
      status: "PENDING",
      error: "",
      url: "",
      msg: "Render not initiated yet.",
    },
    creditType: "free",
    data: {
      intro: {
        talkingPoint:
          "In this video, we will explore how Clerk Authentication can help you secure your users. We will provide step-by-step instructions on how to set up a Clerk account and integrate it into your application, while highlighting its key features like passwordless authentication and user roles and permissions. By the end of this video, you will see how easy it is to manage user authentication with Clerk.",
        images: [
          {
            width: 1270,
            accentColor: "#AE1D26",
            hostPageDisplayUrl: "https://www.producthunt.com/posts/clerk-2",
            imageId: "9D7F595027C55E6F5104808D9CF0DF9736327A4C",
            name: "Clerk - Authentication and user management for React and Nextjs | Product Hunt",
            height: 760,
            encodingFormat: "jpeg",
            hostPageUrl: "https://www.producthunt.com/posts/clerk-2",
            contentUrl:
              "https://ph-files.imgix.net/99431c1a-65b8-4e33-823b-7fbe1337e174.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip",
            contentSize: "29101 B",
          },
          {
            contentUrl:
              "https://ph-files.imgix.net/acd49704-a74d-4550-bce1-f2a38f9ba18f.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip",
            height: 760,
            contentSize: "44033 B",
            hostPageUrl: "https://www.producthunt.com/posts/clerk-2",
            width: 1270,
            encodingFormat: "jpeg",
            imageId: "9D7F595027C55E6F51041D15228E025F75D375EF",
            name: "Clerk - Authentication and user management for React and Nextjs | Product Hunt",
            accentColor: "#1638B5",
            hostPageDisplayUrl: "https://www.producthunt.com/posts/clerk-2",
          },
          {
            accentColor: "#1034BB",
            encodingFormat: "jpeg",
            height: 760,
            name: "Clerk - Authentication and user management for React and Nextjs | Product Hunt",
            hostPageUrl: "https://www.producthunt.com/posts/clerk-2",
            contentSize: "50469 B",
            width: 1270,
            hostPageDisplayUrl: "https://www.producthunt.com/posts/clerk-2",
            contentUrl:
              "https://ph-files.imgix.net/cce4f1d7-b565-4a26-aeca-08f1b5c7a5f8.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip",
            imageId: "9D7F595027C55E6F51049A5413012E01932DC880",
          },
        ],
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685461026/aishortz/1981546a88b713b210b5b883e1a3f7724577442fc69147e32d0a9c365e1f6e3c/en-US-Standard-D-9c94bb0cae561e8aabd753acefd66750.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685461026/aishortz/1981546a88b713b210b5b883e1a3f7724577442fc69147e32d0a9c365e1f6e3c/en-US-Standard-F-9c94bb0cae561e8aabd753acefd66750.wav",
          ],
          durations: [22.753792, 23.524083],
        },
      },
      table: {
        summary: "",
        voiceAudio: {
          urls: ["", ""],
          durations: [0, 0],
        },
        isPresent: false,
        table: "",
      },
      outro: {
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685461022/aishortz/1981546a88b713b210b5b883e1a3f7724577442fc69147e32d0a9c365e1f6e3c/en-US-Standard-D-f0d735464f289fdbd7d0a9823f0ddfe5.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685461022/aishortz/1981546a88b713b210b5b883e1a3f7724577442fc69147e32d0a9c365e1f6e3c/en-US-Standard-F-f0d735464f289fdbd7d0a9823f0ddfe5.wav",
          ],
          durations: [12.620292, 13.303833],
        },
        talkingPoint:
          "Thanks for watching! If you found this video helpful, make sure to check out our recommended videos on similar topics. Don't forget to like and share this video and consider subscribing to our channel for more great content!",
      },
      videoSections: [
        {
          voiceAudio: {
            durations: [16.400458, 16.89825],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685461020/aishortz/1981546a88b713b210b5b883e1a3f7724577442fc69147e32d0a9c365e1f6e3c/en-US-Standard-D-3af855155dcbe9a231c41e972540e1f8.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685461020/aishortz/1981546a88b713b210b5b883e1a3f7724577442fc69147e32d0a9c365e1f6e3c/en-US-Standard-F-3af855155dcbe9a231c41e972540e1f8.wav",
            ],
          },
          talkingPoint:
            "Clerk.com offers more than just a simple sign-in box. With Clerk, you can integrate complete user management UIs and APIs, allowing you to easily manage user authentication and authorization in your application.",
          images: [
            {
              hostPageDisplayUrl: "https://clerk.dev",
              contentUrl:
                "https://clerk.dev/_next/image?url=%2Fimages%2Fhome%2Fnew-hero.png&w=3840&q=75",
              accentColor: "#2800CC",
              name: "Clerk | Authentication and User Management",
              height: 1614,
              width: 2695,
              encodingFormat: "png",
              hostPageUrl: "https://clerk.dev/",
              imageId: "A9544A9586FBFCA57FE754ECAF3A7189245F829C",
              contentSize: "1240814 B",
            },
            {
              accentColor: "#4E5F7D",
              imageId: "A83016F1110AE509CF4C6DCCC7EFE0FF0A306413",
              encodingFormat: "jpeg",
              height: 787,
              contentSize: "75383 B",
              name: "What does a Customer Service Supervisor do? (with pictures)",
              width: 1000,
              hostPageUrl:
                "https://www.wise-geek.com/what-does-a-customer-service-supervisor-do.htm",
              hostPageDisplayUrl:
                "https://www.wise-geek.com/what-does-a-customer-service-supervisor-do.htm",
              contentUrl:
                "https://images.wisegeek.com/woman-with-long-dark-hair-at-computer-looking-at-report-on-desk.jpg",
            },
            {
              height: 536,
              accentColor: "#67463A",
              imageId: "7F825D2DB55DF75A53BAAE24669E6F694D90C003",
              encodingFormat: "jpeg",
              contentUrl:
                "https://images.practicaladultinsights.com/woman-with-paperwork-at-computer.jpg",
              name: "What Does a Technical Clerk Do? (with pictures)",
              hostPageDisplayUrl:
                "https://www.practicaladultinsights.com/what-does-a-technical-clerk-do.htm",
              contentSize: "52615 B",
              hostPageUrl:
                "https://www.practicaladultinsights.com/what-does-a-technical-clerk-do.htm",
              width: 1000,
            },
          ],
          title: "Complete User Management with Clerk",
        },
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685461020/aishortz/1981546a88b713b210b5b883e1a3f7724577442fc69147e32d0a9c365e1f6e3c/en-US-Standard-D-e5f054e9861ff074ba33e04ac0360486.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685461020/aishortz/1981546a88b713b210b5b883e1a3f7724577442fc69147e32d0a9c365e1f6e3c/en-US-Standard-F-e5f054e9861ff074ba33e04ac0360486.wav",
            ],
            durations: [12.957417, 13.471583],
          },
          images: [
            {
              contentUrl:
                "https://readybytes.in/media/pages/blog/secure-yet-simple-authentication-system-for-mobile-applications/606fccca51-1633955512/blog_image.png",
              width: 800,
              encodingFormat: "png",
              contentSize: "47365 B",
              hostPageUrl:
                "https://readybytes.in/blog/secure-yet-simple-authentication-system-for-mobile-applications",
              accentColor: "#BB1010",
              hostPageDisplayUrl:
                "https://readybytes.in/blog/secure-yet-simple-authentication-system-for-mobile-applications",
              height: 399,
              imageId: "8697C18ABC0514443AE21283B6E55F81933F76FC",
              name: "Secure Yet Simple Authentication System for Mobile Applicat",
            },
            {
              contentSize: "50469 B",
              hostPageUrl: "https://www.producthunt.com/posts/clerk-2",
              imageId: "9D7F595027C55E6F51049A5413012E01932DC880",
              hostPageDisplayUrl: "https://www.producthunt.com/posts/clerk-2",
              height: 760,
              contentUrl:
                "https://ph-files.imgix.net/cce4f1d7-b565-4a26-aeca-08f1b5c7a5f8.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip",
              name: "Clerk - Authentication and user management for React and Nextjs | Product Hunt",
              accentColor: "#1034BB",
              width: 1270,
              encodingFormat: "jpeg",
            },
            {
              name: "Clerk - Authentication and user management for React and Nextjs | Product Hunt",
              contentSize: "41397 B",
              encodingFormat: "jpeg",
              height: 760,
              contentUrl:
                "https://ph-files.imgix.net/7afb85e1-6c8a-4ff7-9876-0b1c5adda896.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip",
              hostPageUrl: "https://www.producthunt.com/posts/clerk-2",
              accentColor: "#1A3BB1",
              width: 1270,
              imageId: "9D7F595027C55E6F5104AC6FF7E58F5EFD04A955",
              hostPageDisplayUrl: "https://www.producthunt.com/posts/clerk-2",
            },
          ],
          talkingPoint:
            "Clerk provides a secure and easy-to-use authentication system that allows you to add login, registration, and password reset functionality to your application in minutes.",
          title: "Secure and Easy Authentication with Clerk",
        },
        {
          voiceAudio: {
            durations: [13.111792, 13.40775],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685461020/aishortz/1981546a88b713b210b5b883e1a3f7724577442fc69147e32d0a9c365e1f6e3c/en-US-Standard-D-421f46802a422dd4864d41d8df94924f.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685461020/aishortz/1981546a88b713b210b5b883e1a3f7724577442fc69147e32d0a9c365e1f6e3c/en-US-Standard-F-421f46802a422dd4864d41d8df94924f.wav",
            ],
          },
          title: "Manage User Roles and Permissions with Clerk",
          talkingPoint:
            "With Clerk's user management system, you can easily manage user roles and permissions, allowing you to control access to specific parts of your application based on a user's role.",
          images: [
            {
              contentUrl:
                "https://tw-desk-files.teamwork.com/i/333406/attachment-inline/212088.20160628134115033.212088.20160628134115033Ghg7n.png",
              hostPageDisplayUrl:
                "docs.ordereasy.co.za/system-and-user-settings/user-permissions",
              width: 1561,
              accentColor: "#00A5A5",
              imageId: "B4055403E0F624579131BE3AA05D6CA88092E85B",
              contentSize: "86384 B",
              hostPageUrl:
                "http://docs.ordereasy.co.za/system-and-user-settings/user-permissions",
              name: "User Permission - Order Easy",
              encodingFormat: "png",
              height: 885,
            },
            {
              contentUrl:
                "https://resources.mestrelab.com/wp-content/uploads/2018/10/Users-Table.png",
              accentColor: "#213343",
              width: 3508,
              contentSize: "228946 B",
              height: 2480,
              hostPageUrl:
                "http://resources.mestrelab.com/user-roles-and-permissions-in-mbook/",
              encodingFormat: "png",
              hostPageDisplayUrl:
                "resources.mestrelab.com/user-roles-and-permissions-in-mbook",
              name: "User roles and permissions in Mbook - Mestrelab Resources",
              imageId: "3A9B40C962760CCACDB4092F7C77E8C9096BCADD",
            },
            {
              hostPageUrl:
                "https://help.zolasuite.com/portal/en/kb/articles/what-are-the-different-permission-levels-associated-to-each-role",
              contentSize: "67675 B",
              imageId: "62ACFDE059FA3D074090491A2E7AD0F4A316C3F8",
              name: "What are the different permission levels associated to each role?",
              height: 405,
              accentColor: "#B92812",
              contentUrl:
                "https://desk.zoho.com/DocsDisplay?zgId=48481606&mode=inline&blockId=56vf0ba50cf2e3d6b48069254acdca387126f",
              encodingFormat: "jpeg",
              width: 474,
              hostPageDisplayUrl:
                "https://help.zolasuite.com/portal/en/kb/articles/what-are-the-different-permission...",
            },
          ],
        },
        {
          images: [
            {
              hostPageUrl:
                "https://www.nathanwatkinsdesign.com/clerk-app-ui-design.html",
              hostPageDisplayUrl:
                "https://www.nathanwatkinsdesign.com/clerk-app-ui-design.html",
              height: 2757,
              encodingFormat: "jpeg",
              width: 900,
              contentSize: "826947 B",
              contentUrl:
                "https://www.nathanwatkinsdesign.com/portfolio/clerk_presentation.jpg",
              imageId: "DAD257B2A97157663A40B7ACB86DEA5034644CE6",
              name: "Clerk Mobile App UI Design | Nathan Watkins | Graphic Design, Branding, Web, and Illustration ...",
              accentColor: "#389094",
            },
            {
              contentSize: "466890 B",
              width: 2800,
              height: 2100,
              contentUrl:
                "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/382a63102767529.5f3e002531864.jpg",
              name: "Vendor Shops E-commerce App ui design on Behance",
              accentColor: "#2688A5",
              hostPageUrl:
                "https://www.behance.net/gallery/102767529/Vendor-Shops-E-commerce-App-ui-design",
              encodingFormat: "jpeg",
              imageId: "E7479AEEE3AF91588E2E0C355893DA682DCF0210",
              hostPageDisplayUrl:
                "https://www.behance.net/gallery/102767529/Vendor-Shops-E-commerce-App-ui-design",
            },
            {
              encodingFormat: "jpeg",
              width: 1600,
              imageId: "E63FB62B5FEABAE80E2AA883538D65713CDE84ED",
              name: "UI Design Tools",
              hostPageDisplayUrl: "https://kush01.hashnode.dev/ui-design-tools",
              contentSize: "86720 B",
              hostPageUrl: "https://kush01.hashnode.dev/ui-design-tools",
              height: 840,
              accentColor: "#C1500A",
              contentUrl:
                "https://cdn.hashnode.com/res/hashnode/image/upload/v1623764023003/qDF1JnlqB.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress",
            },
          ],
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685461020/aishortz/1981546a88b713b210b5b883e1a3f7724577442fc69147e32d0a9c365e1f6e3c/en-US-Standard-D-5d8358c60aa05a67088be071c1e62572.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685461020/aishortz/1981546a88b713b210b5b883e1a3f7724577442fc69147e32d0a9c365e1f6e3c/en-US-Standard-F-5d8358c60aa05a67088be071c1e62572.wav",
            ],
            durations: [11.104167, 11.408625],
          },
          title: "Customizable UI with Clerk",
          talkingPoint:
            "Clerk also offers a customizable UI that allows you to match the look and feel of your application, so your users will feel like they are still within your app.",
        },
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685461020/aishortz/1981546a88b713b210b5b883e1a3f7724577442fc69147e32d0a9c365e1f6e3c/en-US-Standard-D-894854ae204b6a5f5fdfa363bff62e6a.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685461020/aishortz/1981546a88b713b210b5b883e1a3f7724577442fc69147e32d0a9c365e1f6e3c/en-US-Standard-F-894854ae204b6a5f5fdfa363bff62e6a.wav",
            ],
            durations: [15.049042, 15.532875],
          },
          images: [
            {
              height: 628,
              hostPageUrl:
                "https://erpsolutions.oodles.io/blog/odoo-third-party-integrations/",
              accentColor: "#C08C0B",
              name: "Key Odoo Third-party Integrations Using APIs | Odoo Integration Services",
              hostPageDisplayUrl:
                "https://erpsolutions.oodles.io/blog/odoo-third-party-integrations",
              contentSize: "92717 B",
              imageId: "3E3BE5087067CC3810024EACD449142822F8F40B",
              contentUrl:
                "https://d2lh0ou6tvj4oq.cloudfront.net/wp-content/uploads/2019/12/Increasing-the-Functionality-of-Odoo-with-Third-party-Integrations.jpg",
              width: 1200,
              encodingFormat: "jpeg",
            },
            {
              name: "third party integration - Mydynamica (Pvt) Ltd.",
              contentUrl:
                "https://mydynamica.com/client/v2/images/service/third-party-api-integration.jpg",
              hostPageUrl:
                "https://mydynamica.com/service/third-party-integration",
              width: 1036,
              contentSize: "200746 B",
              height: 1000,
              imageId: "FC8A0974E2A76ED646D48207BB20217E246AB624",
              encodingFormat: "jpeg",
              accentColor: "#0495C7",
              hostPageDisplayUrl:
                "https://mydynamica.com/service/third-party-integration",
            },
            {
              imageId: "D3CD06BCABC7337B7AE8B82802C88CA9A8058EB2",
              contentSize: "527560 B",
              contentUrl:
                "https://stellarplatforms.com/wp-content/uploads/2017/02/third-party-integrations-featured-768x480.png",
              name: "Third Party Integrations On Your Website with WordPress Plugins",
              height: 480,
              accentColor: "#0C1E38",
              encodingFormat: "png",
              hostPageDisplayUrl:
                "https://stellarplatforms.com/third-party-integrations",
              width: 768,
              hostPageUrl:
                "https://stellarplatforms.com/third-party-integrations/",
            },
          ],
          talkingPoint:
            "Finally, Clerk's user management system allows you to easily integrate with third-party services like Stripe and Twilio, making it easy to add payment processing and SMS messaging to your application.",
          title: "Integrations with Third-Party Services through Clerk",
        },
      ],
    },
    userId: "user_2QWEENSlHNJ23kCvdAdimxJogpp",
    isPublic: false,
    prompt: "Make a video about Clerk authentication and user management",
    error: "",
  },
  {
    createdAt: "Tue May 23 2023",
    userId: "user_2QCpdpj8kc8UAgjhYuL1nwrIJRm",
    render: {
      status: "PENDING",
      url: "",
      error: "",
      msg: "Render not initiated yet.",
    },
    prompt:
      "Make a video about Some popular video games released in the past year",
    message: "Video created successfully!",
    error: "",
    metadata: {
      durationInSeconds: 300,
      style: "fun",
      height: 1080,
      topic: "Popular Video Games of the Past Year",
      description:
        "The video should showcase the most popular video games that were released in the past year. Please include gameplays, reviews, and comments from industry leaders and gamers. Also, please mention the platforms on which these games are available.",
      color: {
        gradientStartColor: "#FFC300",
        accentColor: "#FF5733",
        gradientEndColor: "#FF5733",
      },
      title: "Top 10 Popular Video Games of the Past Year!",
      width: 1920,
    },
    referenceData: "Just the video games released in the past year",
    data: {
      intro: {
        talkingPoint:
          "In this video, we will explore the top 10 popular video games that were released in the past year. We will showcase gameplay, reviews, and comments from industry leaders and gamers, and also mention the platforms on which these games are available.",
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684867638/aishortz/2580cde4eb959bfa5c0038f850c7a95f614e3267be5181cb44e2fb95b125e790/en-US-Standard-D-9da8957abea0b1f19eccd4771ad76ea8.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684867637/aishortz/2580cde4eb959bfa5c0038f850c7a95f614e3267be5181cb44e2fb95b125e790/en-US-Standard-F-9da8957abea0b1f19eccd4771ad76ea8.wav",
          ],
          durations: [14.087708, 14.837],
        },
        images: [
          {
            imageId: "F30F1220036FCC10CC0676611C622D4175FDFF13",
            hostPageDisplayUrl:
              "https://inso.sacred-heart-online.org/online/free-online-games-for-couples",
            accentColor: "#C99F02",
            name: "Free Online Games For Couples",
            contentSize: "159523 B",
            hostPageUrl:
              "https://inso.sacred-heart-online.org/online/free-online-games-for-couples/",
            encodingFormat: "jpeg",
            height: 720,
            contentUrl:
              "https://www.watchmojo.com/uploads/thumbs720/VG-RP-Top10-Years-in-Gaming-History-480p30.jpg",
            width: 1280,
          },
          {
            accentColor: "#81213D",
            hostPageDisplayUrl: "https://www.youtube.com/watch?v=50ZshDpHNDA",
            contentSize: "211979 B",
            imageId: "4D356C8CF99E3E6FCE71104A19D16DADF60C3D5F",
            height: 720,
            hostPageUrl: "https://www.youtube.com/watch?v=50ZshDpHNDA",
            name: "9 of the Best Games of the Past 9 Years - YouTube",
            encodingFormat: "jpeg",
            contentUrl: "https://i.ytimg.com/vi/50ZshDpHNDA/maxresdefault.jpg",
            width: 1280,
          },
          {
            imageId: "B2458D9B19B58EFFA3F230D9B7BE0DB2664CA3C2",
            encodingFormat: "jpeg",
            hostPageUrl:
              "https://www.reddit.com/r/FavoriteMedia/comments/nd1hpi/my_favorite_video_games_of_the_past_two_console/",
            name: "My favorite video games of the past two console generations : FavoriteMedia",
            accentColor: "#A76624",
            contentUrl: "https://i.redd.it/x8x8sjcozaz61.jpg",
            hostPageDisplayUrl:
              "https://www.reddit.com/r/FavoriteMedia/comments/nd1hpi/my_favorite_video_games_of_the...",
            contentSize: "1240548 B",
            height: 3438,
            width: 3438,
          },
        ],
      },
      table: {
        table: "",
        summary: "",
        voiceAudio: {
          durations: [0, 0],
          urls: ["", ""],
        },
        isPresent: false,
      },
      videoSections: [
        {
          talkingPoint:
            "First up, we have Cyberpunk 2077, the highly anticipated open-world RPG game that was released in December 2020. Despite the initial bugs and glitches, the game has received positive reviews for its immersive storyline and stunning graphics.",
          title: "Cyberpunk 2077: An Immersive Open-World RPG Game",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684867633/aishortz/2580cde4eb959bfa5c0038f850c7a95f614e3267be5181cb44e2fb95b125e790/en-US-Standard-D-3c6722416b9996734c9bf42361cac007.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684867633/aishortz/2580cde4eb959bfa5c0038f850c7a95f614e3267be5181cb44e2fb95b125e790/en-US-Standard-F-3c6722416b9996734c9bf42361cac007.wav",
            ],
            durations: [21.36075, 22.014083],
          },
          images: [
            {
              hostPageUrl:
                "https://www.onmsft.com/feature/cyberpunk-2077-reviews-round-up-a-great-open-world-rpg-that-still-lacks-some-polish",
              accentColor: "#977A34",
              contentUrl:
                "https://www.onmsft.com/wp-content/uploads/2020/10/cyberpunk-2077.jpg",
              width: 1024,
              contentSize: "153798 B",
              name: "Cyberpunk 2077 reviews round-up: A great open-world RPG that still lacks some polish - OnMSFT.com",
              hostPageDisplayUrl:
                "https://www.onmsft.com/feature/cyberpunk-2077-reviews-round-up-a-great-open-world-rpg...",
              height: 768,
              imageId: "F1752B9226162680B5AC39D0BAC4830713A7BBCE",
              encodingFormat: "jpeg",
            },
            {
              width: 695,
              encodingFormat: "jpeg",
              name: "Cyberpunk 2077 - CD Projekt Red on Creating an Immersive Open World RPG - AusGamers.com",
              imageId: "E3408BE402F706D84BE2750FDEFB12924E837A9D",
              hostPageUrl: "https://www.ausgamers.com/features/read/3621825",
              height: 390,
              hostPageDisplayUrl:
                "https://www.ausgamers.com/features/read/3621825",
              contentSize: "217588 B",
              contentUrl:
                "https://www.ausgamers.com/gameres/5698/images/695/EFzEO-UUYAElhJF-2060x1159.jpg",
              accentColor: "#947937",
            },
            {
              contentSize: "278785 B",
              hostPageUrl:
                "https://vgamerz.com/cd-projekt-red-is-being-sued-by-its-own-investors-for-misrepresenting-cyberpunk-2077/cyberpunk-2077-gameplay-open-world/",
              accentColor: "#C59406",
              encodingFormat: "jpeg",
              imageId: "EDDEE4C955CB2A23868E23DEC9D2FDE59CBF39AC",
              height: 700,
              contentUrl:
                "https://vgamerz.com/wp-content/uploads/2020/12/Cyberpunk-2077-gameplay-open-world.jpg",
              hostPageDisplayUrl:
                "https://vgamerz.com/cd-projekt-red-is-being-sued-by-its-own-investors-for...",
              name: "Cyberpunk 2077 gameplay open world - Vgamerz",
              width: 1200,
            },
          ],
        },
        {
          talkingPoint:
            "Next, we have Valheim, a survival game that was released in February 2021. The game takes place in a Viking-inspired world where players must gather resources and build their own shelter. With its unique gameplay and beautiful visuals, Valheim quickly became a fan favorite.",
          images: [
            {
              contentUrl:
                "https://www.gamingonlinux.com/uploads/articles/article_media/6442148051533643464gol1.jpg",
              width: 1920,
              hostPageDisplayUrl:
                "https://www.gamingonlinux.com/articles/valheim-an-interesting-survival-game-inspired-by...",
              hostPageUrl:
                "https://www.gamingonlinux.com/articles/valheim-an-interesting-survival-game-inspired-by-norse-mythology-and-viking-culture-currently-free.12300/",
              encodingFormat: "jpeg",
              name: "Valheim, an interesting survival game inspired by norse mythology and viking culture, currently ...",
              contentSize: "474764 B",
              height: 1013,
              imageId: "1639F6F61615673A8488D9CE3473940D04ADE5BF",
              accentColor: "#2A6EA1",
            },
            {
              contentUrl:
                "https://img.itch.zone/aW1nLzEyOTY3MDkucG5n/original/eM%2BiRU.png",
              width: 1920,
              contentSize: "2097928 B",
              hostPageDisplayUrl:
                "https://itch.io/t/241968/valheim-viking-survival-exploration-game-alpha-released",
              hostPageUrl:
                "https://itch.io/t/241968/valheim-viking-survival-exploration-game-alpha-released",
              height: 1013,
              imageId: "C984529A14ED767D8793AC84BEF868B5AED3404B",
              accentColor: "#2849A3",
              encodingFormat: "png",
              name: "Valheim - Viking survival & exploration game (ALPHA) RELEASED! - Release Announcements - itch.io",
            },
            {
              hostPageDisplayUrl:
                "https://motrilschool.blogspot.com/2021/03/valheim-valheim-das-survival-spiel-mit.html",
              width: 1280,
              hostPageUrl:
                "https://motrilschool.blogspot.com/2021/03/valheim-valheim-das-survival-spiel-mit.html",
              imageId: "5E933A62FDBEC8F381C5D5795010F47812A50716",
              encodingFormat: "jpeg",
              contentUrl:
                "https://i.ytimg.com/vi/_IV0g629fM8/maxresdefault.jpg",
              name: 'Valheim / "Valheim": Das Survival-Spiel mit Wikingern kommt - Brain AFK : Published by coffee ...',
              height: 720,
              contentSize: "148159 B",
              accentColor: "#9E672D",
            },
          ],
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684867633/aishortz/2580cde4eb959bfa5c0038f850c7a95f614e3267be5181cb44e2fb95b125e790/en-US-Standard-D-9464e7c764c6204f446b4e0532de1520.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684867633/aishortz/2580cde4eb959bfa5c0038f850c7a95f614e3267be5181cb44e2fb95b125e790/en-US-Standard-F-9464e7c764c6204f446b4e0532de1520.wav",
            ],
            durations: [20.786708, 21.70625],
          },
          title: "Valheim: A Viking-Inspired Survival Game",
        },
        {
          voiceAudio: {
            durations: [17.568917, 18.139708],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684867633/aishortz/2580cde4eb959bfa5c0038f850c7a95f614e3267be5181cb44e2fb95b125e790/en-US-Standard-D-8703579ef416c47299306a1054bbc8ce.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684867633/aishortz/2580cde4eb959bfa5c0038f850c7a95f614e3267be5181cb44e2fb95b125e790/en-US-Standard-F-8703579ef416c47299306a1054bbc8ce.wav",
            ],
          },
          images: [
            {
              encodingFormat: "jpeg",
              accentColor: "#887C44",
              imageId: "D3E86D73DF1979BF62C23BF51DE6D6D8C28D4F7A",
              contentUrl:
                "https://cdn-cf.gamivo.com/image_original.jpg?f=344418&n=50f00b20-aff1-11eb-9098-39c6a778941f.jpg&h=0c7e904f86a11602da0889b8649ca37d",
              hostPageDisplayUrl:
                "https://www.gamivo.com/product/resident-evil-village-re-viii-xbox-uk",
              name: "Buy Resident Evil Village - RE VIII UK - Xbox live CD KEY cheap",
              contentSize: "46146 B",
              width: 570,
              height: 399,
              hostPageUrl:
                "https://www.gamivo.com/product/resident-evil-village-re-viii-xbox-uk",
            },
            {
              height: 192,
              contentSize: "25455 B",
              imageId: "7F6873156FC5416ACCB4D10586F2C77FACDD00A3",
              hostPageDisplayUrl:
                "https://goldsnakelanguages.blogspot.com/2021/02/download-resident-evil-village-8-pc.html",
              contentUrl:
                "https://1.bp.blogspot.com/-myPxyTYD1GY/YBsiWNagoLI/AAAAAAAAECM/a5upfl2OBf4DiOwnUi0xyoSS515_y32zQCLcBGAsYHQ/w1200-h630-p-k-no-nu/header_586x192.jpg",
              hostPageUrl:
                "https://goldsnakelanguages.blogspot.com/2021/02/download-resident-evil-village-8-pc.html",
              encodingFormat: "jpeg",
              name: "DOWNLOAD RESIDENT EVIL VILLAGE 8 PC LINK TORRENT FREE ~ goldProgênie",
              accentColor: "#8A7F41",
              width: 586,
            },
            {
              encodingFormat: "jpeg",
              name: "Resident Evil 8 Village Wiki & Strategy Guide",
              imageId: "7EB03A98577796CD1AD16D7F602F75C2D670F42E",
              height: 720,
              width: 1280,
              contentUrl:
                "https://www.powerpyx.com/wp-content/uploads/resident-evil-8-village-wallpaper.jpg",
              accentColor: "#8C7F3F",
              contentSize: "57666 B",
              hostPageUrl:
                "https://www.powerpyx.com/resident-evil-8-village-wiki-strategy-guide/",
              hostPageDisplayUrl:
                "https://www.powerpyx.com/resident-evil-8-village-wiki-strategy-guide",
            },
          ],
          title:
            "Resident Evil Village: The Eighth Installment In The Franchise",
          talkingPoint:
            "Another popular game from the past year is Resident Evil Village, the eighth installment in the Resident Evil franchise. Released in May 2021, the game has been praised for its horror elements and engaging storyline.",
        },
        {
          title: "It Takes Two: A Heartwarming Co-op Platformer Game",
          voiceAudio: {
            durations: [22.99175, 23.737083],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684867633/aishortz/2580cde4eb959bfa5c0038f850c7a95f614e3267be5181cb44e2fb95b125e790/en-US-Standard-D-d14933778e7a81362871149e6a4b796f.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684867633/aishortz/2580cde4eb959bfa5c0038f850c7a95f614e3267be5181cb44e2fb95b125e790/en-US-Standard-F-d14933778e7a81362871149e6a4b796f.wav",
            ],
          },
          talkingPoint:
            "We can't forget about It Takes Two, a co-op platformer game that was released in March 2021. The game follows the story of a couple turned into dolls and their journey to fix their relationship. With its creative gameplay and heartwarming story, It Takes Two has won multiple awards and has become a must-play for gamers.",
          images: [
            {
              encodingFormat: "jpeg",
              height: 700,
              width: 1400,
              hostPageDisplayUrl:
                "https://gamerant.com/it-takes-two-co-op-gameplay-trailer",
              contentSize: "217836 B",
              contentUrl:
                "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/03/it20takes20two.jpg",
              imageId: "ABDB6AFD9957CF780DB1E05C45FB9193C2B95BA1",
              accentColor: "#C68605",
              hostPageUrl:
                "https://gamerant.com/it-takes-two-co-op-gameplay-trailer/",
              name: "It Takes Two Trailer Highlights Co-Op Gameplay",
            },
            {
              hostPageUrl:
                "https://www.inverse.com/gaming/it-takes-two-game-review/amp",
              height: 630,
              encodingFormat: "jpeg",
              name: "'It Takes Two' review: The most innovative co-op platformer of the last decade",
              contentSize: "165255 B",
              hostPageDisplayUrl:
                "https://www.inverse.com/gaming/it-takes-two-game-review/amp",
              width: 1200,
              contentUrl:
                "https://imgix.bustle.com/uploads/image/2021/3/26/2bc46fde-d0f5-4b3a-a76a-7c434055960e-copy-of-itt_screenshot_1920x1080_gi_shot01b-25798260358964a08a3665998192.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
              accentColor: "#4E5E1C",
              imageId: "C8647ADDB79E665F780694F3F84838407F139466",
            },
            {
              encodingFormat: "jpeg",
              width: 1454,
              imageId: "800EFC281FC7C9EB228C9F8221A705C12FBCEEDE",
              contentUrl:
                "https://twinfinite.net/wp-content/uploads/2020/12/it-takes-two.jpg",
              accentColor: "#A65225",
              hostPageDisplayUrl:
                "https://twinfinite.net/2020/12/co-op-platformer-it-takes-two-releases-march-2021",
              hostPageUrl:
                "https://twinfinite.net/2020/12/co-op-platformer-it-takes-two-releases-march-2021/",
              name: "Co-Op Platformer It Takes Two Releases March 2021",
              contentSize: "107803 B",
              height: 818,
            },
          ],
        },
        {
          title:
            "Ratchet & Clank: Rift Apart - An Action-Packed Dimension-Hopping Game",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684867633/aishortz/2580cde4eb959bfa5c0038f850c7a95f614e3267be5181cb44e2fb95b125e790/en-US-Standard-D-2090145d65233939c362a325568d220f.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684867633/aishortz/2580cde4eb959bfa5c0038f850c7a95f614e3267be5181cb44e2fb95b125e790/en-US-Standard-F-2090145d65233939c362a325568d220f.wav",
            ],
            durations: [26.595167, 27.73225],
          },
          talkingPoint:
            "Last but not least, we have Ratchet & Clank: Rift Apart, a PlayStation 5 exclusive game that was released in June 2021. The game features stunning visuals and fast-paced gameplay as players travel through different dimensions with Ratchet and Clank. With its positive reviews and high ratings, Rift Apart is definitely a game worth checking out.",
          images: [
            {
              width: 1030,
              contentSize: "218019 B",
              imageId: "8715CA197821D8FD729EE72A1FFD17ADB92C8490",
              name: "Ratchet & Clank: Rift Apart Showcases Rivet, Dimension Hopping, and its Own Cyberpunk City ...",
              accentColor: "#901CAF",
              height: 579,
              hostPageDisplayUrl:
                "https://laptrinhx.com/ratchet-clank-rift-apart-showcases-rivet-dimension-hopping-and...",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://laptrinhx.com/ratchet-clank-rift-apart-showcases-rivet-dimension-hopping-and-its-own-cyberpunk-city-1126407953/",
              contentUrl:
                "https://cdn.wccftech.com/wp-content/uploads/2021/02/WCCFratchetandclankriftapart4-1030x579.jpg",
            },
            {
              contentUrl:
                "http://destructoid.com/ul/601837-Ratchet-and-Clank-Rift-Apart.jpg",
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://mundogamer.community/articles/ratchet-clank-rift-apart-shows-off-seven-minutes...",
              contentSize: "209342 B",
              width: 1685,
              imageId: "E1B7720004A9C229AD30FB25CF43817A07D621BF",
              name: "Ratchet & Clank: Rift Apart shows off seven minutes of dimension-hopping gameplay | Mundo Gamer ...",
              hostPageUrl:
                "https://mundogamer.community/articles/ratchet-clank-rift-apart-shows-off-seven-minutes-of-dimension-hopping-gameplay",
              accentColor: "#4D5D2A",
              height: 762,
            },
            {
              encodingFormat: "jpeg",
              contentUrl:
                "https://gamermission.net/wp-content/uploads/2021/08/ratchet-and-clank-rift-apart-screenshot-06-ps5-en-15jun20-1536x864.jpg",
              imageId: "545F1633E071E032534DCFD3DFF891BCA56EA078",
              height: 864,
              contentSize: "124942 B",
              name: "Ratchet & Clank: Rift Apart – Gamer Mission",
              hostPageUrl:
                "https://gamermission.net/es/producto/ratchet-clank-rift-apart/",
              hostPageDisplayUrl:
                "https://gamermission.net/es/producto/ratchet-clank-rift-apart",
              width: 1536,
              accentColor: "#68715A",
            },
          ],
        },
      ],
      outro: {
        talkingPoint:
          "Thanks for tuning in to our list of the top video games from the past year! If you haven't already, be sure to check out one of these amazing titles and let us know what you think in the comments below. Don't forget to like and share the video and consider subscribing to our channel for more content like this. Thanks for watching!",
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684867640/aishortz/2580cde4eb959bfa5c0038f850c7a95f614e3267be5181cb44e2fb95b125e790/en-US-Standard-D-39806fb09ff628d75f162789ca30e8fb.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684867640/aishortz/2580cde4eb959bfa5c0038f850c7a95f614e3267be5181cb44e2fb95b125e790/en-US-Standard-F-39806fb09ff628d75f162789ca30e8fb.wav",
          ],
          durations: [17.744958, 18.351583],
        },
      },
    },
    creditType: "free",
    status: "SUCCESS",
    uniqueId:
      "2580cde4eb959bfa5c0038f850c7a95f614e3267be5181cb44e2fb95b125e790",
    isPublic: true,
  },
  {
    creditType: "free",
    isPublic: false,
    data: {
      intro: {
        images: [
          {
            name: "Fortnite Floss Emote - Pro Game Guides",
            hostPageDisplayUrl:
              "https://progameguides.com/fortnite-cosmetic/floss",
            height: 760,
            hostPageUrl: "https://progameguides.com/fortnite-cosmetic/floss/",
            width: 928,
            encodingFormat: "jpeg",
            imageId: "8CF964B445D2CE4EDC98D3B1E6074F0DAFDC177D",
            contentUrl:
              "https://progameguides.com/wp-content/uploads/2018/05/fortnite-emote-floss.jpg",
            accentColor: "#13457D",
            contentSize: "171976 B",
          },
          {
            height: 750,
            hostPageDisplayUrl: "https://fortniteskins.net/emotes/floss",
            encodingFormat: "png",
            accentColor: "#0A8FBE",
            contentSize: "195916 B",
            contentUrl:
              "https://fortniteskins.net/wp-content/uploads/2018/04/floss-emote.png",
            width: 750,
            hostPageUrl: "https://fortniteskins.net/emotes/floss/",
            name: "Floss Dance | Emotes - Fortnite Skins",
            imageId: "7A534A7C91E52A97C247E8DA848769E87CD81CE0",
          },
          {
            height: 737,
            width: 900,
            imageId: "1165397F436F5E2580E4E10FD98F8DFE5F38F381",
            contentSize: "43897 B",
            hostPageDisplayUrl:
              "https://progameguides.com/fortnite-cosmetic/windmill-floss",
            contentUrl:
              "https://progameguides.com/wp-content/uploads/2019/08/fortnite-emote-windmill-floss-900x737.jpg",
            hostPageUrl:
              "https://progameguides.com/fortnite-cosmetic/windmill-floss/",
            encodingFormat: "jpeg",
            accentColor: "#13457D",
            name: "Fortnite Windmill Floss Emote - Pro Game Guides",
          },
        ],
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685287249/aishortz/2821306fc3432787306ac9b7b4f988503467e75c201a5d55e4c0689348ab2eae/en-US-Standard-D-4f0a9d4a1aab0f496ea3b78e5115514c.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685287249/aishortz/2821306fc3432787306ac9b7b4f988503467e75c201a5d55e4c0689348ab2eae/en-US-Standard-F-4f0a9d4a1aab0f496ea3b78e5115514c.wav",
          ],
          durations: [16.805458, 17.461542],
        },
        talkingPoint:
          "In this video, we will take a look at how to floss in Fortnite. We'll showcase different Fortnite characters performing the floss emote dance move and teach you how to perform it in-game. So, let's get ready to dance and have some fun with the popular and iconic floss emote in Fortnite!",
      },
      table: {
        summary: "",
        isPresent: false,
        table: "",
        voiceAudio: {
          durations: [0, 0],
          urls: ["", ""],
        },
      },
      videoSections: [
        {
          voiceAudio: {
            durations: [18.943333, 19.59875],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685287246/aishortz/2821306fc3432787306ac9b7b4f988503467e75c201a5d55e4c0689348ab2eae/en-US-Standard-D-8e87cf81658311506df571788c53e8ac.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685287246/aishortz/2821306fc3432787306ac9b7b4f988503467e75c201a5d55e4c0689348ab2eae/en-US-Standard-F-8e87cf81658311506df571788c53e8ac.wav",
            ],
          },
          talkingPoint:
            "Fortnite, the popular game created by Epicgames, has become a global sensation. One of the most iconic features of the game is the emotes players can use to express themselves in-game. The floss emote is one of the most well-known and beloved emotes in the game.",
          title: "The Floss Emote: A Beloved Feature of Fortnite",
          images: [
            {
              name: "Fortnite Floss Emote - Pro Game Guides",
              contentUrl:
                "https://progameguides.com/wp-content/uploads/2018/05/fortnite-emote-floss.jpg?fit=900%2C737",
              height: 737,
              hostPageUrl: "https://progameguides.com/fortnite-cosmetic/floss/",
              accentColor: "#13457D",
              encodingFormat: "jpeg",
              contentSize: "160567 B",
              width: 900,
              hostPageDisplayUrl:
                "https://progameguides.com/fortnite-cosmetic/floss",
              imageId: "8CF964B445D2CE4EDC989D8AB07A70F15FF80933",
            },
            {
              contentUrl:
                "https://fortniteskins.net/wp-content/uploads/2018/04/floss-emote.png",
              width: 750,
              name: "Floss Dance | Emotes - Fortnite Skins",
              hostPageDisplayUrl: "https://fortniteskins.net/emotes/floss",
              accentColor: "#0A8FBE",
              hostPageUrl: "https://fortniteskins.net/emotes/floss/",
              imageId: "7A534A7C91E52A97C247E8DA848769E87CD81CE0",
              height: 750,
              encodingFormat: "png",
              contentSize: "195916 B",
            },
            {
              encodingFormat: "jpeg",
              name: "Fortnite Windmill Floss Emote - Pro Game Guides",
              width: 900,
              contentSize: "43897 B",
              hostPageUrl:
                "https://progameguides.com/fortnite-cosmetic/windmill-floss/",
              height: 737,
              accentColor: "#13457D",
              contentUrl:
                "https://progameguides.com/wp-content/uploads/2019/08/fortnite-emote-windmill-floss-900x737.jpg",
              imageId: "1165397F436F5E2580E4E10FD98F8DFE5F38F381",
              hostPageDisplayUrl:
                "https://progameguides.com/fortnite-cosmetic/windmill-floss",
            },
          ],
        },
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685287246/aishortz/2821306fc3432787306ac9b7b4f988503467e75c201a5d55e4c0689348ab2eae/en-US-Standard-D-97c3a8511149806ea24923679ff45643.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685287246/aishortz/2821306fc3432787306ac9b7b4f988503467e75c201a5d55e4c0689348ab2eae/en-US-Standard-F-97c3a8511149806ea24923679ff45643.wav",
            ],
            durations: [15.705667, 15.930042],
          },
          title: "The History of the Floss Emote in Fortnite",
          talkingPoint:
            "The floss emote was first introduced in Fortnite in 2017 and quickly became a fan favorite. The dance move is based on a popular dance move from the early 2000s and has since become a cultural phenomenon.",
          images: [
            {
              height: 737,
              width: 900,
              contentUrl:
                "https://progameguides.com/wp-content/uploads/2018/05/fortnite-emote-floss.jpg?fit=900%2C737",
              hostPageUrl: "https://progameguides.com/fortnite-cosmetic/floss/",
              name: "Fortnite Floss Emote - Pro Game Guides",
              contentSize: "160567 B",
              accentColor: "#13457D",
              imageId: "8CF964B445D2CE4EDC989D8AB07A70F15FF80933",
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://progameguides.com/fortnite-cosmetic/floss",
            },
            {
              contentSize: "43897 B",
              height: 737,
              name: "Fortnite Windmill Floss Emote - Pro Game Guides",
              accentColor: "#13457D",
              contentUrl:
                "https://progameguides.com/wp-content/uploads/2019/08/fortnite-emote-windmill-floss-900x737.jpg",
              encodingFormat: "jpeg",
              imageId: "1165397F436F5E2580E4E10FD98F8DFE5F38F381",
              hostPageUrl:
                "https://progameguides.com/fortnite-cosmetic/windmill-floss/",
              width: 900,
              hostPageDisplayUrl:
                "https://progameguides.com/fortnite-cosmetic/windmill-floss",
            },
            {
              name: "Floss Dance | Emotes - Fortnite Skins",
              imageId: "7A534A7C91E52A97C247E8DA848769E87CD81CE0",
              height: 750,
              width: 750,
              contentUrl:
                "https://fortniteskins.net/wp-content/uploads/2018/04/floss-emote.png",
              contentSize: "195916 B",
              hostPageUrl: "https://fortniteskins.net/emotes/floss/",
              hostPageDisplayUrl: "https://fortniteskins.net/emotes/floss",
              encodingFormat: "png",
              accentColor: "#0A8FBE",
            },
          ],
        },
        {
          voiceAudio: {
            durations: [16.328, 17.207458],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685287246/aishortz/2821306fc3432787306ac9b7b4f988503467e75c201a5d55e4c0689348ab2eae/en-US-Standard-D-d8cd5481e623e6918d1205e1ba13ab01.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685287246/aishortz/2821306fc3432787306ac9b7b4f988503467e75c201a5d55e4c0689348ab2eae/en-US-Standard-F-d8cd5481e623e6918d1205e1ba13ab01.wav",
            ],
          },
          title: "The Cultural Impact of the Floss Emote",
          images: [
            {
              contentSize: "160567 B",
              hostPageUrl: "https://progameguides.com/fortnite-cosmetic/floss/",
              accentColor: "#13457D",
              encodingFormat: "jpeg",
              contentUrl:
                "https://progameguides.com/wp-content/uploads/2018/05/fortnite-emote-floss.jpg?fit=900%2C737",
              hostPageDisplayUrl:
                "https://progameguides.com/fortnite-cosmetic/floss",
              height: 737,
              imageId: "8CF964B445D2CE4EDC989D8AB07A70F15FF80933",
              name: "Fortnite Floss Emote - Pro Game Guides",
              width: 900,
            },
            {
              hostPageDisplayUrl: "https://fortniteskins.net/emotes/floss",
              contentUrl:
                "https://fortniteskins.net/wp-content/uploads/2018/04/floss-emote.png",
              imageId: "7A534A7C91E52A97C247E8DA848769E87CD81CE0",
              contentSize: "195916 B",
              hostPageUrl: "https://fortniteskins.net/emotes/floss/",
              accentColor: "#0A8FBE",
              height: 750,
              name: "Floss Dance | Emotes - Fortnite Skins",
              encodingFormat: "png",
              width: 750,
            },
            {
              imageId: "1165397F436F5E2580E4E10FD98F8DFE5F38F381",
              contentUrl:
                "https://progameguides.com/wp-content/uploads/2019/08/fortnite-emote-windmill-floss-900x737.jpg",
              name: "Fortnite Windmill Floss Emote - Pro Game Guides",
              contentSize: "43897 B",
              hostPageUrl:
                "https://progameguides.com/fortnite-cosmetic/windmill-floss/",
              encodingFormat: "jpeg",
              accentColor: "#13457D",
              width: 900,
              hostPageDisplayUrl:
                "https://progameguides.com/fortnite-cosmetic/windmill-floss",
              height: 737,
            },
          ],
          talkingPoint:
            "The floss emote has been used by players all over the world as a way to celebrate victories, taunt opponents, or just have fun with friends. It's become so popular that it's even been featured in movies, TV shows, and commercials.",
        },
        {
          title: "Controversies Surrounding the Floss Emote in Fortnite",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685287246/aishortz/2821306fc3432787306ac9b7b4f988503467e75c201a5d55e4c0689348ab2eae/en-US-Standard-D-97e464446ca1f35ac19df369b38109d4.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685287246/aishortz/2821306fc3432787306ac9b7b4f988503467e75c201a5d55e4c0689348ab2eae/en-US-Standard-F-97e464446ca1f35ac19df369b38109d4.wav",
            ],
            durations: [21.161, 21.078333],
          },
          images: [
            {
              encodingFormat: "jpeg",
              hostPageUrl: "https://progameguides.com/fortnite-cosmetic/floss/",
              accentColor: "#13457D",
              height: 760,
              contentUrl:
                "https://progameguides.com/wp-content/uploads/2018/05/fortnite-emote-floss.jpg",
              width: 928,
              imageId: "8CF964B445D2CE4EDC98D3B1E6074F0DAFDC177D",
              name: "Fortnite Floss Emote - Pro Game Guides",
              hostPageDisplayUrl:
                "https://progameguides.com/fortnite-cosmetic/floss",
              contentSize: "171976 B",
            },
            {
              height: 750,
              contentUrl:
                "https://fortniteskins.net/wp-content/uploads/2018/04/floss-emote.png",
              hostPageUrl: "https://fortniteskins.net/emotes/floss/",
              contentSize: "195916 B",
              imageId: "7A534A7C91E52A97C247E8DA848769E87CD81CE0",
              name: "Floss Dance | Emotes - Fortnite Skins",
              hostPageDisplayUrl: "https://fortniteskins.net/emotes/floss",
              accentColor: "#0A8FBE",
              width: 750,
              encodingFormat: "png",
            },
            {
              imageId: "1165397F436F5E2580E4E10FD98F8DFE5F38F381",
              name: "Fortnite Windmill Floss Emote - Pro Game Guides",
              accentColor: "#13457D",
              hostPageDisplayUrl:
                "https://progameguides.com/fortnite-cosmetic/windmill-floss",
              contentUrl:
                "https://progameguides.com/wp-content/uploads/2019/08/fortnite-emote-windmill-floss-900x737.jpg",
              height: 737,
              width: 900,
              hostPageUrl:
                "https://progameguides.com/fortnite-cosmetic/windmill-floss/",
              contentSize: "43897 B",
              encodingFormat: "jpeg",
            },
          ],
          talkingPoint:
            "The popularity of the floss emote has led to a number of controversies over the years. Some people have accused Fortnite of appropriating the dance move without giving proper credit to its creators. Others have criticized the game for profiting off of the emote without compensating the original creator.",
        },
        {
          talkingPoint:
            "Despite the controversies, there's no denying that the floss emote has become an iconic part of Fortnite culture. It's a symbol of the game's fun and lighthearted spirit, and it's sure to be a beloved feature of Fortnite for years to come.",
          title: "The Iconic Status of the Floss Emote in Fortnite Culture",
          images: [
            {
              hostPageUrl:
                "https://fortniteremerez.blogspot.com/2022/06/the-12-rarest-dances-and-emotes-in.html",
              accentColor: "#13457D",
              name: "The 12 rarest dances and emotes in Fortnite",
              contentSize: "65661 B",
              encodingFormat: "jpeg",
              height: 737,
              imageId: "FD3F7136015B4C6CB9738371FA1F5BE895D553B3",
              hostPageDisplayUrl:
                "https://fortniteremerez.blogspot.com/2022/06/the-12-rarest-dances-and-emotes-in.html",
              width: 900,
              contentUrl:
                "https://cdn1.dotesports.com/wp-content/uploads/2020/10/23102423/the-original-floss.jpg",
            },
            {
              accentColor: "#0A8FBE",
              height: 750,
              name: "Floss Dance | Emotes - Fortnite Skins",
              width: 750,
              contentUrl:
                "https://fortniteskins.net/wp-content/uploads/2018/04/floss-emote.png",
              encodingFormat: "png",
              imageId: "7A534A7C91E52A97C247E8DA848769E87CD81CE0",
              contentSize: "195916 B",
              hostPageDisplayUrl: "https://fortniteskins.net/emotes/floss",
              hostPageUrl: "https://fortniteskins.net/emotes/floss/",
            },
            {
              contentUrl:
                "https://progameguides.com/wp-content/uploads/2019/08/fortnite-emote-windmill-floss-900x737.jpg",
              hostPageDisplayUrl:
                "https://progameguides.com/fortnite-cosmetic/windmill-floss",
              width: 900,
              name: "Fortnite Windmill Floss Emote - Pro Game Guides",
              hostPageUrl:
                "https://progameguides.com/fortnite-cosmetic/windmill-floss/",
              accentColor: "#13457D",
              imageId: "1165397F436F5E2580E4E10FD98F8DFE5F38F381",
              contentSize: "43897 B",
              height: 737,
              encodingFormat: "jpeg",
            },
          ],
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685287246/aishortz/2821306fc3432787306ac9b7b4f988503467e75c201a5d55e4c0689348ab2eae/en-US-Standard-D-a3c68df8527b4db23eadf2bcec467345.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685287246/aishortz/2821306fc3432787306ac9b7b4f988503467e75c201a5d55e4c0689348ab2eae/en-US-Standard-F-a3c68df8527b4db23eadf2bcec467345.wav",
            ],
            durations: [17.412708, 17.750708],
          },
        },
      ],
      outro: {
        talkingPoint:
          "Thanks for watching! If you enjoyed learning about the floss emote in Fortnite, check out our other videos on popular game trends. Don't forget to like and share this video, and consider subscribing to our channel for more great content!",
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685287249/aishortz/2821306fc3432787306ac9b7b4f988503467e75c201a5d55e4c0689348ab2eae/en-US-Standard-D-8a2c61c5cc05c09ed59eab31829d6e73.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685287249/aishortz/2821306fc3432787306ac9b7b4f988503467e75c201a5d55e4c0689348ab2eae/en-US-Standard-F-8a2c61c5cc05c09ed59eab31829d6e73.wav",
          ],
          durations: [13.441667, 14.219667],
        },
      },
    },
    uniqueId:
      "2821306fc3432787306ac9b7b4f988503467e75c201a5d55e4c0689348ab2eae",
    prompt: "Make a video about Fortnite floss emote",
    userId: "user_2QQY8nhXbdtrzdaOS3Ppc71J6Mn",
    metadata: {
      color: {
        gradientStartColor: "#ff0000",
        gradientEndColor: "#000000",
        accentColor: "#ff0000",
      },
      description:
        "Create a video that showcases the Fortnite floss emote dance move. This video should contain different Fortnite characters performing the floss emote, and it should show how to perform the dance move in the game. Use a catchy background music that suits the Fortnite floss emote.",
      title: "Learn How to Floss in Fortnite",
      durationInSeconds: 60,
      topic: "Fortnite Floss Emote",
      style: "fun",
      height: 1080,
      width: 1920,
    },
    status: "SUCCESS",
    error: "",
    referenceData:
      "The game fortnite, created by Epicgames. The floss is one of the emotes used by players worldwide.",
    message: "Video created successfully!",
    render: {
      error: "",
      status: "PENDING",
      msg: "Render not initiated yet.",
      url: "",
    },
    createdAt: "Sun May 28 2023",
  },
  {
    creditType: "free",
    prompt:
      "Make a video about the most popular best-selling video games of all time, on all the major gaming platforms.",
    uniqueId:
      "2ac70831f96241e315a14af6a2ddd772cc4b7fd746eaf81c5035c495d3f34a17",
    isPublic: true,
    message: "Video created successfully!",
    referenceData:
      "The most popular video games of all time include:\n1. Minecraft - PC, Playstation, Xbox, Mobile (over 238,000,000 sales)\n2. Pokemon - Nintendo, Mobile\n3. Grand Theft Auto - PC, Playstation, Xbox, Mobile",
    createdAt: "Sat May 20 2023",
    data: {
      videoSections: [
        {
          talkingPoint:
            "The most popular video games of all time include Minecraft, which has sold over 238,000,000 copies on PC, Playstation, Xbox, and Mobile platforms. It's an open-world game that allows players to build and explore to their heart's content.",
          images: [
            {
              imageId: "C94FE07EEAD73B7333FB6FBBBC893A199B37ECF1",
              encodingFormat: "jpeg",
              contentSize: "223489 B",
              height: 758,
              contentUrl:
                "https://static.planetminecraft.com/files/resource_media/screenshot/1514/2015-04-02_1635318791071_lrg.jpg",
              hostPageUrl:
                "https://www.planetminecraft.com/project/adventure-open-world-rpg-18/",
              name: "[Adventure] Open World RPG [1.8] +Showcase Trailer Minecraft Map",
              hostPageDisplayUrl:
                "https://www.planetminecraft.com/project/adventure-open-world-rpg-18",
              width: 1280,
              accentColor: "#3E5B8D",
            },
            {
              accentColor: "#AB8220",
              contentUrl:
                "https://logicsimplified.com/newgames/wp-content/uploads/2020/04/10.-Minecraft.jpg",
              width: 1000,
              imageId: "113006E7C9CF5953CC98046D48E1664B3DA0BFD3",
              hostPageDisplayUrl:
                "https://logicsimplified.com/newgames/list-of-top-10-selling-video-games-along-with-game...",
              contentSize: "294826 B",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://logicsimplified.com/newgames/list-of-top-10-selling-video-games-along-with-game-studios/",
              height: 500,
              name: "List of Top 10 selling video games along with game studios",
            },
            {
              width: 800,
              hostPageUrl:
                "https://www.sportskeeda.com/esports/5-best-open-world-games-like-minecraft",
              height: 450,
              imageId: "41BFD17E49E5614ED8CE56D13EF83415D4181020",
              contentSize: "54073 B",
              accentColor: "#465E85",
              encodingFormat: "jpeg",
              name: "5 best open-world games like Minecraft",
              hostPageDisplayUrl:
                "https://www.sportskeeda.com/esports/5-best-open-world-games-like-minecraft",
              contentUrl:
                "https://staticg.sportskeeda.com/editor/2020/08/f9398-15986275130910-800.jpg",
            },
          ],
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684582940/aishortz%252F2ac70831f96241e315a14af6a2ddd772cc4b7fd746eaf81c5035c495d3f34a17/en-US-Standard-D-e9d148a3e9bd4d03500fbecbbd965d09.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684582940/aishortz%252F2ac70831f96241e315a14af6a2ddd772cc4b7fd746eaf81c5035c495d3f34a17/en-US-Standard-F-e9d148a3e9bd4d03500fbecbbd965d09.wav",
            ],
            durations: [18.883542, 19.848875],
          },
          title: "Minecraft: The Best-Selling Open-World Game",
        },
        {
          talkingPoint:
            "Pokemon is another incredibly popular game, available on Nintendo and Mobile platforms. With over 350 million copies sold, it's one of the most successful franchises in gaming history. Players can collect and battle their favorite Pokemon in a world full of adventure.",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684582940/aishortz%252F2ac70831f96241e315a14af6a2ddd772cc4b7fd746eaf81c5035c495d3f34a17/en-US-Standard-D-e8f0c30c7bd7732cc9726fcb9911e3e7.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684582940/aishortz%252F2ac70831f96241e315a14af6a2ddd772cc4b7fd746eaf81c5035c495d3f34a17/en-US-Standard-F-e8f0c30c7bd7732cc9726fcb9911e3e7.wav",
            ],
            durations: [20.461333, 20.728208],
          },
          title: "Pokemon: A World Full of Adventure",
          images: [
            {
              encodingFormat: "gif",
              accentColor: "#038BC8",
              height: 2294,
              hostPageDisplayUrl:
                "mail.vgboxart.com/viewfullsize/41687/Pokemon: World Adventure",
              imageId: "7D06FAF00BA2DDB1504CA45D08D0F8B47AE308A5",
              name: "Viewing full size Pokemon: World Adventure box cover",
              hostPageUrl:
                "http://mail.vgboxart.com/viewfullsize/41687/Pokemon:%20World%20Adventure/",
              contentUrl:
                "http://mail.vgboxart.com/boxes/Wii/41687-pokemon-world-adventure-full.gif?t=1297188563",
              width: 3700,
              contentSize: "2882937 B",
            },
            {
              contentSize: "608397 B",
              hostPageUrl:
                "http://www.simonandschuster.com/books/Pokemon-Adventures-Vol-14/Hidenori-Kusaka/Pokemon/9781421535487",
              height: 2250,
              width: 1498,
              hostPageDisplayUrl:
                "www.simonandschuster.com/books/Pokemon-Adventures-Vol-14/Hidenori-Kusaka/Pokemon...",
              accentColor: "#C69F05",
              name: "Pokémon Adventures, Vol. 14 | Book by Hidenori Kusaka | Official ...",
              imageId: "81D2DDFFABE3B7873405C637DA2DF052D7E9BD36",
              encodingFormat: "jpeg",
              contentUrl:
                "http://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421535487/pokemon-adventures-vol-14-9781421535487_hr.jpg",
            },
            {
              hostPageUrl:
                "http://www.simonandschuster.com/books/Pokemon-Adventures-Vol-24/Hidenori-Kusaka/Pokemon/9781421535586",
              accentColor: "#C6A105",
              hostPageDisplayUrl:
                "www.simonandschuster.com/books/Pokemon-Adventures-Vol-24/Hidenori-Kusaka/Pokemon...",
              contentSize: "364771 B",
              imageId: "A08D69E8E8C93EDA579DB06AC05056A69A8297A9",
              width: 1400,
              height: 2100,
              contentUrl:
                "http://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421535586/pokemon-adventures-vol-24-9781421535586_hr.jpg",
              encodingFormat: "jpeg",
              name: "Pokémon Adventures, Vol. 24 | Book by Hidenori Kusaka, Mato | Official ...",
            },
          ],
        },
        {
          images: [
            {
              imageId: "D9BC2516E3DB2530DBC2F7CAFC7042BEFFC39ECF",
              encodingFormat: "jpeg",
              width: 1280,
              contentUrl:
                "https://i.ytimg.com/vi/NbJf0nNl0Xo/maxresdefault.jpg",
              height: 720,
              contentSize: "75852 B",
              hostPageUrl: "https://www.youtube.com/watch?v=NbJf0nNl0Xo",
              accentColor: "#C70405",
              name: "Grand Theft Auto V criminal mastermind challenge attempt #1 pacific ...",
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=NbJf0nNl0Xo",
            },
            {
              height: 1173,
              contentSize: "740502 B",
              hostPageDisplayUrl:
                "https://triviapw.com.br/produto/grand-theft-auto-v-criminal-enterprise-starter-pack",
              contentUrl:
                "https://triviapw.com.br/wp-content/uploads/2019/12/Grand-Theft-Auto-V-Criminal-Enterprise-Starter-Pack.png",
              width: 824,
              accentColor: "#C30D08",
              imageId: "9A4EBDAB2DFFBF1F292F4F9E6A1C0D4BE613C850",
              name: "Comprar Grand Theft Auto V - Criminal Enterprise Starter Pack - Entrega ...",
              encodingFormat: "png",
              hostPageUrl:
                "https://triviapw.com.br/produto/grand-theft-auto-v-criminal-enterprise-starter-pack/",
            },
            {
              contentUrl:
                "https://image.migros.ch/fm-xl/9814e6ae38d67baac6f8adb4d4360b040260c825/pc-grand-theft-auto-v-criminal-enterprise-starter-pack-downl.jpg",
              accentColor: "#B51716",
              name: "PC - Grand Theft Auto V - Criminal Enterprise Starter Pack Download ...",
              hostPageDisplayUrl:
                "https://www.melectronics.ch/de/p/785300133695/pc-grand-theft-auto-v-criminal-enterprise...",
              hostPageUrl:
                "https://www.melectronics.ch/de/p/785300133695/pc-grand-theft-auto-v-criminal-enterprise-starter-pack",
              encodingFormat: "jpeg",
              contentSize: "67446 B",
              height: 720,
              width: 572,
              imageId: "DB1AFCA114279279B348C5A1D77C382618191FD0",
            },
          ],
          voiceAudio: {
            durations: [22.123167, 22.425125],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684582940/aishortz%252F2ac70831f96241e315a14af6a2ddd772cc4b7fd746eaf81c5035c495d3f34a17/en-US-Standard-D-c5ecfb98ac505f58d1a939ebc9e534c0.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684582940/aishortz%252F2ac70831f96241e315a14af6a2ddd772cc4b7fd746eaf81c5035c495d3f34a17/en-US-Standard-F-c5ecfb98ac505f58d1a939ebc9e534c0.wav",
            ],
          },
          talkingPoint:
            "Grand Theft Auto is a controversial but highly successful game series that has sold over 345 million copies on PC, Playstation, Xbox, and Mobile platforms. It's an open-world game that allows players to engage in criminal activity and explore the world in their own way.",
          title: "Grand Theft Auto: Engage in Criminal Activity Your Way",
        },
        {
          title: "Call of Duty: The Popular First-Person Shooter",
          images: [
            {
              contentSize: "632339 B",
              hostPageUrl:
                "http://realitypod.com/2010/12/top-10-first-person-shooter-games-for-pc/3/",
              height: 1200,
              accentColor: "#855F46",
              width: 1920,
              encodingFormat: "jpeg",
              contentUrl:
                "http://realitypod.com/wp-content/uploads/2010/12/2-Call-of-Duty.jpg",
              name: "Top 10 First Person Shooter Games for PC | REALITYPOD - Part 3",
              hostPageDisplayUrl:
                "realitypod.com/2010/12/top-10-first-person-shooter-games-for-pc/3",
              imageId: "8E802AD6260F005C790487A9EA8B2C264D497D94",
            },
            {
              contentUrl:
                "http://mobilemodegaming.com/wp-content/uploads/2019/12/Call-of-Duty-Mobile-1.jpg",
              accentColor: "#C0B40B",
              imageId: "E930A184248B875C998A882E860874BB531FF470",
              hostPageDisplayUrl:
                "https://mobilemodegaming.com/2019/12/01/call-of-duty-mobile-game-review-the-best-first...",
              height: 720,
              name: "Call of Duty: Mobile Game Review – The Best First-Person Shooter Out ...",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://mobilemodegaming.com/2019/12/01/call-of-duty-mobile-game-review-the-best-first-person-shooter-out-there/",
              contentSize: "77072 B",
              width: 1280,
            },
            {
              name: "Seven of the best first-person shooter games for PC",
              contentSize: "38643 B",
              hostPageUrl:
                "http://windowsreport.com/best-first-person-shooter-games/",
              contentUrl:
                "http://cdn.windowsreport.com/wp-content/uploads/2017/03/first-person-shooter2.jpg",
              hostPageDisplayUrl:
                "windowsreport.com/best-first-person-shooter-games",
              encodingFormat: "jpeg",
              accentColor: "#8F513C",
              imageId: "F48FE158BF86962AC0BCBF23B0F7872679EAA0CF",
              width: 924,
              height: 551,
            },
          ],
          voiceAudio: {
            durations: [21.856583, 22.6105],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684582940/aishortz%252F2ac70831f96241e315a14af6a2ddd772cc4b7fd746eaf81c5035c495d3f34a17/en-US-Standard-D-ad54560b1fd28529a6f1e77f8d8d1de2.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684582940/aishortz%252F2ac70831f96241e315a14af6a2ddd772cc4b7fd746eaf81c5035c495d3f34a17/en-US-Standard-F-ad54560b1fd28529a6f1e77f8d8d1de2.wav",
            ],
          },
          talkingPoint:
            "Call of Duty is a first-person shooter game that has sold over 300 million copies on PC, Playstation, Xbox, and Mobile platforms. The franchise has been around since 2003 and has become a staple of the gaming community. Players can engage in both single player and multiplayer modes.",
        },
        {
          title: "Tetris: The Addictive Classic Puzzle Game",
          talkingPoint:
            "Finally, we have Tetris, a classic puzzle game that has sold over 495 million copies on various platforms since its release in 1984. It's a simple but addictive game that has stood the test of time and remains popular to this day.",
          images: [
            {
              accentColor: "#BCA10F",
              width: 1440,
              encodingFormat: "jpeg",
              height: 2560,
              imageId: "65C41039D4D7638F1ECE22F30C4FF70C76F9F9E2",
              contentUrl:
                "https://image.winudf.com/v2/image/Y29tLm9zLnRldHJpc2ZyZWUuaG90Z2FtZS5mcmVlcHV6emxlZ2FtZV9zY3JlZW5zaG90c182XzhmOTM1NzA4/screen-6.jpg?fakeurl=1&type=.jpg",
              name: "Tetris / Tetris pre smartfóny končí, Electronic Arts hry odstaví v ...",
              contentSize: "274797 B",
              hostPageDisplayUrl:
                "https://valentinacuevas123.blogspot.com/2021/04/tetris-tetris-pre-smartfony-konci.html",
              hostPageUrl:
                "https://valentinacuevas123.blogspot.com/2021/04/tetris-tetris-pre-smartfony-konci.html",
            },
            {
              imageId: "8A473648A1F441D9B3814E18DCCAB808D6AF3FEC",
              encodingFormat: "jpeg",
              contentSize: "235248 B",
              contentUrl:
                "https://image.winudf.com/v2/image/Y29tLnBlbmNpbHBpZy5icmlja2NsYXNzaWNfc2NyZWVuc2hvdHNfMV80ZmFiZGVkMA/screen-1.jpg?fakeurl=1&type=.jpg",
              hostPageUrl:
                "https://apkpure.com/tetris-brick-classic-puzzle/com.pencilpig.brickclassic",
              hostPageDisplayUrl:
                "https://apkpure.com/tetris-brick-classic-puzzle/com.pencilpig.brickclassic",
              width: 1440,
              height: 2560,
              name: "Tetris Brick Classic Puzzle APK for Android Download",
              accentColor: "#06A5C5",
            },
            {
              width: 1440,
              hostPageDisplayUrl:
                "https://apkpure.com/tetris-brick-classic-puzzle/com.pencilpig.brickclassic",
              contentSize: "235915 B",
              imageId: "8A473648A1F441D9B381AA91057F77F64A632D74",
              contentUrl:
                "https://image.winudf.com/v2/image/Y29tLnBlbmNpbHBpZy5icmlja2NsYXNzaWNfc2NyZWVuc2hvdHNfM19mZDVjMjcwNQ/screen-3.jpg?fakeurl=1&type=.jpg",
              height: 2560,
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://apkpure.com/tetris-brick-classic-puzzle/com.pencilpig.brickclassic",
              name: "Tetris Brick Classic Puzzle APK for Android Download",
              accentColor: "#07AAC4",
            },
          ],
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684582940/aishortz%252F2ac70831f96241e315a14af6a2ddd772cc4b7fd746eaf81c5035c495d3f34a17/en-US-Standard-D-cfa16d74fbc429cbcc39f17bb8db64ec.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684582940/aishortz%252F2ac70831f96241e315a14af6a2ddd772cc4b7fd746eaf81c5035c495d3f34a17/en-US-Standard-F-cfa16d74fbc429cbcc39f17bb8db64ec.wav",
            ],
            durations: [18.41125, 18.793333],
          },
        },
      ],
      intro: {
        talkingPoint:
          "In this video, we will take a look at the top 10 best-selling video games of all time. We will explore some of the most popular games across all major gaming platforms, including a few surprising entries that you wouldn't expect to be on the list.",
        voiceAudio: {
          durations: [14.120333, 14.516958],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684582940/aishortz%252F2ac70831f96241e315a14af6a2ddd772cc4b7fd746eaf81c5035c495d3f34a17/en-US-Standard-D-baccf19c3d8d4b16f1ef78acf552a5f2.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684582940/aishortz%252F2ac70831f96241e315a14af6a2ddd772cc4b7fd746eaf81c5035c495d3f34a17/en-US-Standard-F-baccf19c3d8d4b16f1ef78acf552a5f2.wav",
          ],
        },
        images: [
          {
            width: 2246,
            name: "Top 50 Best-Selling Video Games of All Time [OC] : dataisbeautiful",
            contentUrl:
              "https://preview.redd.it/jqg3bus7dhs01.png?auto=webp&s=b72736ce26057734715fd078617e8b8d7889b448",
            accentColor: "#B23219",
            contentSize: "203681 B",
            hostPageUrl:
              "https://www.reddit.com/r/dataisbeautiful/comments/8cx08l/top_50_bestselling_video_games_of_all_time_oc/",
            hostPageDisplayUrl:
              "https://www.reddit.com/r/dataisbeautiful/comments/8cx08l/top_50_bestselling_video_games...",
            height: 1236,
            imageId: "9ED0689FF58863528CD5B644A59F3240C09C75F5",
            encodingFormat: "png",
          },
          {
            hostPageUrl:
              "https://nerdist.com/article/top-selling-video-game-all-time/",
            encodingFormat: "animatedgif",
            height: 507,
            width: 900,
            contentUrl:
              "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2019/11/13072510/Video-Game-Data-GIF-11062019.gif",
            name: "Charting the Top Selling Video Games for the Past 30 Years - Nerdist",
            accentColor: "#BC8D0F",
            hostPageDisplayUrl:
              "https://nerdist.com/article/top-selling-video-game-all-time",
            imageId: "9A2DFE272CCC424ABD11731269CFF55F51E97AE0",
            contentSize: "1969237 B",
          },
          {
            name: "Best-selling video games || Most Sold Video Games of All Time 2010-2019 ...",
            height: 720,
            hostPageDisplayUrl: "https://www.youtube.com/watch?v=HzTiM2MKj18",
            accentColor: "#C22609",
            encodingFormat: "jpeg",
            hostPageUrl: "https://www.youtube.com/watch?v=HzTiM2MKj18",
            contentSize: "99197 B",
            imageId: "EC9ADB07C67C59F9A057437F0386955D6ED049BE",
            contentUrl: "https://i.ytimg.com/vi/HzTiM2MKj18/maxresdefault.jpg",
            width: 1280,
          },
        ],
      },
      outro: {
        talkingPoint:
          "Thanks for watching our video on the most popular video games of all time! If you enjoyed this video, make sure to like, share, and consider subscribing to our channel for more content like this. Also, check out our recommended videos on similar gaming topics. See you in the next one!",
        voiceAudio: {
          durations: [17.036375, 18.201583],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684582941/aishortz%252F2ac70831f96241e315a14af6a2ddd772cc4b7fd746eaf81c5035c495d3f34a17/en-US-Standard-D-b22878784b24062eb99fad4df935c955.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684582942/aishortz%252F2ac70831f96241e315a14af6a2ddd772cc4b7fd746eaf81c5035c495d3f34a17/en-US-Standard-F-b22878784b24062eb99fad4df935c955.wav",
          ],
        },
      },
      table: {
        isPresent: false,
        table: "",
        voiceAudio: {
          urls: ["", ""],
          durations: [0, 0],
        },
        summary: "",
      },
    },
    status: "SUCCESS",
    error: "",
    render: {
      msg: "Render not initiated yet.",
      status: "PENDING",
      url: "",
      error: "",
    },
    userId: "user_2PVfFQqUrxzacDd8kComuQF7thw",
    metadata: {
      durationInSeconds: 120,
      style: "fun",
      height: 1080,
      color: {
        accentColor: "#D20013",
      },
      topic:
        "Most Popular Best-Selling Video Games on all Major Gaming Platforms",
      title: "Top 10 Best-Selling Video Games of All Time",
      width: 1920,
      description:
        "Check out our compilation of the top 10 best-selling video games across all major gaming platforms of all time. May include a few surprises!",
    },
  },
  {
    createdAt: "Sat May 27 2023",
    userId: "user_2QNRRoupLc7RrE6sOqmS8Dv1wgy",
    metadata: {
      topic: "The Best Minecraft Version",
      description:
        "This video will explore different Minecraft versions and highlight the features of the one that is considered the best. We will provide information on gameplay, mods, and other factors that make a version stand out. We will also talk about the player community, their preferences, and how they influence which version is considered the best as well as provide reasons why it's the best.",
      durationInSeconds: 300,
      height: 1080,
      title: "You won't believe which Minecraft version is the best!",
      color: {
        accentColor: "#4B0082",
      },
      width: 1920,
      style: "fun",
    },
    prompt: "Make a video about The best minecraft version",
    error: "",
    status: "SUCCESS",
    uniqueId:
      "2b843274620913664f4e2d59b651cacbe0b043a6f574c0cbe12b9984dab9e483",
    creditType: "free",
    message: "Video created successfully!",
    referenceData:
      'What are the best minecraft versions?\n\n1\nMinecraft 1.8\n\nIt has a lot of pros, like:\nA lot of servers use it, so you have to change of version less\nIt fixes a lot of bugs, and it is very stable!\nHas cool features\n\nBest version overall. If license allowed I would fork and improve from it.\n\nThis is the version I use the most and can user mods without lag.\n\nPlenty of content but not too modern.\n\n2\nMinecraft 1.5.2\nGood version to start playing minecraft from.\n\nA good update to first start minecraft in.\n\nThe first version that I played.\n\nBest version I have ever played yet.\nthis feels like real Minecraft\n\n0\n3\nMinecraft Beta 1.8 "Adventure Update"\nJust as god intended. Pure perfection.\n\n4\nMinecraft 1.7.2 "The Update That Changed The World"\nThis is the original version I played. Beautiful world generation and a simplistic gameplay style were the defining features I loved. The only updates I\'ve liked since then were 1.13, 1.14, and 1.16. My favorite version by far!\n\nA BUNCH of biomes were added as well as amplified option for world generation. Basically a lot of the worlds you have has changed in this update.\n\n1.7.x I have to agree is one of the best set of versions with 1.7.10 having so ma',
    data: {
      table: {
        isPresent: false,
        summary: "",
        table: "",
        voiceAudio: {
          durations: [0, 0],
          urls: ["", ""],
        },
      },
      intro: {
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685192153/aishortz/2b843274620913664f4e2d59b651cacbe0b043a6f574c0cbe12b9984dab9e483/en-US-Standard-D-d0b32f989877d996bc3f8cca1e0edbe1.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685192153/aishortz/2b843274620913664f4e2d59b651cacbe0b043a6f574c0cbe12b9984dab9e483/en-US-Standard-F-d0b32f989877d996bc3f8cca1e0edbe1.wav",
          ],
          durations: [15.947875, 16.770917],
        },
        images: [
          {
            contentSize: "171774 B",
            accentColor: "#034DC8",
            name: "The Best Version of Minecraft Ever! - YouTube",
            encodingFormat: "jpeg",
            height: 720,
            hostPageUrl: "https://www.youtube.com/watch?v=uR6tDu3dLfg",
            hostPageDisplayUrl: "https://www.youtube.com/watch?v=uR6tDu3dLfg",
            imageId: "76A9CEAFD61E20D75EFB2E38A6804F555EA7756F",
            width: 1280,
            contentUrl: "https://i.ytimg.com/vi/uR6tDu3dLfg/maxresdefault.jpg",
          },
          {
            name: "de_dust2 - The best version Minecraft Map",
            encodingFormat: "jpeg",
            height: 960,
            contentSize: "145180 B",
            imageId: "ADD57EDF88A8FC12A13C5568BA1216432F119080",
            contentUrl:
              "https://static.planetminecraft.com/files/resource_media/screenshot/1528/99134110_lrg.jpg",
            hostPageUrl:
              "https://www.planetminecraft.com/project/de_dust2---the-best-version/",
            accentColor: "#C9B502",
            width: 1200,
            hostPageDisplayUrl:
              "https://www.planetminecraft.com/project/de_dust2---the-best-version",
          },
          {
            height: 720,
            name: "Which Minecraft version is best?",
            hostPageDisplayUrl:
              "https://accf.swganh.org/technology/which-minecraft-version-is-best-93095",
            hostPageUrl:
              "https://accf.swganh.org/technology/which-minecraft-version-is-best-93095/",
            accentColor: "#0658C5",
            contentSize: "78518 B",
            encodingFormat: "jpeg",
            imageId: "770A2DD7F73F1DC436EDCD93F612B005478D9AA3",
            contentUrl: "https://i.ytimg.com/vi/s_nyIYeKGiM/maxresdefault.jpg",
            width: 1280,
          },
        ],
        talkingPoint:
          "In this video, we will explore different Minecraft versions and highlight the features of the one considered the best. We'll cover gameplay, mods, and other factors that make it stand out. We'll also talk about the community's preferences and provide reasons why it's the best.",
      },
      outro: {
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685192153/aishortz/2b843274620913664f4e2d59b651cacbe0b043a6f574c0cbe12b9984dab9e483/en-US-Standard-D-eaed20e969ddb381c6cd33472bf3a111.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685192153/aishortz/2b843274620913664f4e2d59b651cacbe0b043a6f574c0cbe12b9984dab9e483/en-US-Standard-F-eaed20e969ddb381c6cd33472bf3a111.wav",
          ],
          durations: [14.454458, 15.608458],
        },
        talkingPoint:
          "Thanks for watching! If you enjoyed this video, make sure to like and share it, and don't forget to subscribe for more Minecraft content. If you want to see similar videos, check out our recommendations for the best Minecraft versions to play. Happy crafting!",
      },
      videoSections: [
        {
          title: "Minecraft 1.8: Pros, Stability, and Cool Features",
          talkingPoint:
            "Minecraft 1.8 has a lot of pros, like being used by a lot of servers, fixing bugs and being very stable, and having cool features. It's the best version overall.",
          voiceAudio: {
            durations: [15.652375, 16.704667],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685192149/aishortz/2b843274620913664f4e2d59b651cacbe0b043a6f574c0cbe12b9984dab9e483/en-US-Standard-D-637f706db34bab526f9d87978f31165e.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685192149/aishortz/2b843274620913664f4e2d59b651cacbe0b043a6f574c0cbe12b9984dab9e483/en-US-Standard-F-637f706db34bab526f9d87978f31165e.wav",
            ],
          },
          images: [
            {
              width: 900,
              accentColor: "#C3B908",
              encodingFormat: "jpeg",
              name: "pro minecraft - YouTube",
              imageId: "73147A9B597511C11E3EC1243978F90FE668A91A",
              hostPageUrl:
                "https://www.youtube.com/channel/UCyEqlWOs37h9Qe1NIn_-Xxw",
              height: 900,
              contentSize: "86838 B",
              contentUrl:
                "https://yt3.ggpht.com/a/AATXAJz77bAf7rBcB-ynj4AP0xiWBsDHvppCNcBj8XKY=s900-c-k-c0xffffffff-no-rj-mo",
              hostPageDisplayUrl:
                "https://www.youtube.com/channel/UCyEqlWOs37h9Qe1NIn_-Xxw",
            },
            {
              encodingFormat: "jpeg",
              hostPageUrl: "https://www.youtube.com/watch?v=VhW7vudAhNo",
              width: 1280,
              name: "Minecraft Tips and Tricks most pros use - YouTube",
              contentSize: "181090 B",
              contentUrl:
                "https://i.ytimg.com/vi/VhW7vudAhNo/maxresdefault.jpg",
              accentColor: "#B31818",
              height: 720,
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=VhW7vudAhNo",
              imageId: "D676DF4766B0AAF2B82DF4931A8645B7FD429FFF",
            },
            {
              contentSize: "66429 B",
              accentColor: "#29A281",
              contentUrl:
                "https://img.youtube.com/vi/p1_W4NbHXN4/sddefault.jpg",
              width: 640,
              hostPageUrl:
                "https://www.mokokil.com/2021/05/01/minecraft-bedrock-vs-java-edition-5-major-gameplay-differences-you-should-know-in-2021-sportskeeda/",
              height: 480,
              hostPageDisplayUrl:
                "https://www.mokokil.com/2021/05/01/minecraft-bedrock-vs-java-edition-5-major-gameplay...",
              imageId: "E0978A70B2360BC944C2B9529ABE575A19D5C694",
              encodingFormat: "jpeg",
              name: "Minecraft Bedrock vs Java Edition: 5 major gameplay differences you should know in 2021 ...",
            },
          ],
        },
        {
          voiceAudio: {
            durations: [14.559458, 15.119083],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685192149/aishortz/2b843274620913664f4e2d59b651cacbe0b043a6f574c0cbe12b9984dab9e483/en-US-Standard-D-edacc6740ccf2538621ca24a7972f563.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685192150/aishortz/2b843274620913664f4e2d59b651cacbe0b043a6f574c0cbe12b9984dab9e483/en-US-Standard-F-edacc6740ccf2538621ca24a7972f563.wav",
            ],
          },
          talkingPoint:
            "Minecraft 1.5.2 is a good version to start playing Minecraft from, and the first version many people played. It feels like real Minecraft.",
          images: [
            {
              hostPageDisplayUrl:
                "https://10minecraft.ru/tekstur-paki-minecraft/ver152/page/9",
              height: 706,
              width: 1366,
              hostPageUrl:
                "https://10minecraft.ru/tekstur-paki-minecraft/ver152/page/9/",
              imageId: "041ED818A4EDFDDB9B320F4FA0200EC153E422E2",
              name: "Скачать текстуры для Майнкрафт 1.5.2 - текстур-паки Minecraft 1.5.2 - Страница 9",
              contentUrl:
                "https://10minecraft.ru/uploads/posts/2014-03/1393867595_ngpt5za.png",
              accentColor: "#0249C9",
              encodingFormat: "png",
              contentSize: "528691 B",
            },
            {
              name: "Скачать текстуры для Майнкрафт 1.5.2 - текстур-паки Minecraft 1.5.2 - Страница 4",
              width: 1284,
              accentColor: "#AE731D",
              contentSize: "588306 B",
              height: 720,
              imageId: "9519FFAEA762FC8A4DE0067F5E3D27A940334674",
              contentUrl:
                "https://10minecraft.ru/uploads/posts/2014-10/1414014955_1.jpg",
              hostPageDisplayUrl:
                "https://10minecraft.ru/tekstur-paki-minecraft/ver152/page/4",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://10minecraft.ru/tekstur-paki-minecraft/ver152/page/4/",
            },
            {
              encodingFormat: "jpeg",
              contentUrl: "http://minecraft15.my1.ru/_ld/8/04455724.jpg",
              hostPageUrl:
                "http://communicationsleading.weebly.com/blog/archives/11-2017",
              name: "Blog Archives - communicationsleading",
              contentSize: "54314 B",
              width: 870,
              height: 518,
              accentColor: "#988C33",
              imageId: "EB2DC46BAC13A7CE737B795FE45CA4B6FC2AEBE1",
              hostPageDisplayUrl:
                "communicationsleading.weebly.com/blog/archives/11-2017",
            },
          ],
          title: "Minecraft 1.5.2: Classic and Perfect for Beginners",
        },
        {
          voiceAudio: {
            durations: [12.435625, 12.661458],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685192149/aishortz/2b843274620913664f4e2d59b651cacbe0b043a6f574c0cbe12b9984dab9e483/en-US-Standard-D-c78d8b4c3e95cb6fe54c8d792f76dde6.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685192149/aishortz/2b843274620913664f4e2d59b651cacbe0b043a6f574c0cbe12b9984dab9e483/en-US-Standard-F-c78d8b4c3e95cb6fe54c8d792f76dde6.wav",
            ],
          },
          talkingPoint:
            "Minecraft Beta 1.8 'Adventure Update' is a classic and considered pure perfection by many players.",
          title: "Minecraft Beta 1.8 'Adventure Update': A Classic Perfection",
          images: [
            {
              accentColor: "#086360",
              imageId: "E297923197F50DFB55A70DFF1DB49AFE66DD2E13",
              name: "Beta 1.8 - The Adventure Update | Minecraft Wiki | Fandom",
              contentSize: "25824 B",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://minecraft-archive.fandom.com/wiki/Beta_1.8_-_The_Adventure_Update",
              contentUrl:
                "https://static.wikia.nocookie.net/minecraft/images/5/5b/Adventure_Update.png/revision/latest?cb=20200308174951",
              hostPageDisplayUrl:
                "https://minecraft-archive.fandom.com/wiki/Beta_1.8_-_The_Adventure_Update",
              width: 474,
              height: 324,
            },
            {
              hostPageUrl:
                "https://www.gamestar.de/artikel/minecraft,2560709.html",
              name: "Minecraft - Adventure-Update 1.8 frühestens am 12. September",
              contentUrl:
                "https://images.cgames.de/images/gamestar/226/minecraft-adventure-update-169_2249250.jpg",
              height: 360,
              width: 640,
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://www.gamestar.de/artikel/minecraft,2560709.html",
              imageId: "78F79C17E05A353CDA5DCB751F109E4927D7370A",
              accentColor: "#1159BA",
              contentSize: "46593 B",
            },
            {
              accentColor: "#086461",
              contentUrl:
                "https://i.ytimg.com/vi/eFgEF24eqLY/maxresdefault.jpg",
              name: "Minecraft Beta 1.8 / Adventure Update Leaked Information - YouTube",
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=eFgEF24eqLY",
              hostPageUrl: "https://www.youtube.com/watch?v=eFgEF24eqLY",
              imageId: "1E9908867F9C701CEAC114D77E424C125DC2A095",
              contentSize: "86299 B",
              encodingFormat: "jpeg",
              height: 720,
              width: 1280,
            },
          ],
        },
        {
          title:
            "Minecraft 1.7.2 'The Update That Changed The World': Fan Favorite",
          voiceAudio: {
            durations: [15.510958, 15.999542],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685192149/aishortz/2b843274620913664f4e2d59b651cacbe0b043a6f574c0cbe12b9984dab9e483/en-US-Standard-D-609f56bd48941435779ea616914686d8.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685192149/aishortz/2b843274620913664f4e2d59b651cacbe0b043a6f574c0cbe12b9984dab9e483/en-US-Standard-F-609f56bd48941435779ea616914686d8.wav",
            ],
          },
          images: [
            {
              height: 366,
              hostPageDisplayUrl:
                "https://www.neoseeker.com/news/24025-minecrafts-172-update-that-changed-the-world...",
              contentSize: "419371 B",
              width: 650,
              encodingFormat: "jpeg",
              name: 'Minecraft\'s 1.7.2 "Update that Changed the World" releases tomorrow, reworked world generation ...',
              hostPageUrl:
                "https://www.neoseeker.com/news/24025-minecrafts-172-update-that-changed-the-world-releases-tomorrow-reworked-world-generation/",
              contentUrl: "https://cdn.staticneo.com/n/5/minecraft171.jpg",
              accentColor: "#AE4018",
              imageId: "44A31F45A85423B97A4DB1E7F30453D804DF1534",
            },
            {
              accentColor: "#A27729",
              imageId: "00992AEBB7CBC9AB2568571189CF428EAFF4F250",
              name: "Minecraft: New 1.7.2 features (The Update that Changed the World!) - Blog Chơi Game",
              hostPageUrl:
                "https://blogchoigame.net/%E2%9C%94-minecraft-new-1-7-2-features-the-update-that-changed-the-world",
              hostPageDisplayUrl:
                "https://blogchoigame.net/✔-minecraft-new-1-7-2-features-the-update-that-changed-the...",
              width: 480,
              height: 360,
              contentUrl: "https://i.ytimg.com/vi/WCnsDWsh3To/hqdefault.jpg",
              contentSize: "25880 B",
              encodingFormat: "jpeg",
            },
            {
              contentSize: "138563 B",
              height: 720,
              encodingFormat: "jpeg",
              contentUrl: "http://i.ytimg.com/vi/hiEhA-gumo0/maxresdefault.jpg",
              hostPageDisplayUrl: "youtube.com/watch?v=hieha-gumo0",
              width: 1280,
              hostPageUrl: "http://youtube.com/watch?v=hieha-gumo0",
              accentColor: "#B5AD16",
              imageId: "59DE98699BB2429FEE0CEB825C526ACB2209387D",
              name: "Minecraft 1.7.5 [FR] Résumé des nouveautés/ajouts (The Update that Changed the World 1.7) - YouTube",
            },
          ],
          talkingPoint:
            "Minecraft 1.7.2 'The Update That Changed The World' has beautiful world generation and a simplistic gameplay style. It's a fan favorite.",
        },
        {
          title:
            "Minecraft 1.16.5: Must-Play With Latest Features and Bug Fixes",
          talkingPoint:
            "Minecraft 1.16.5 is the most up-to-date version with the latest features and bug fixes, making it a must-play version. It's currently used by most servers and content creators.",
          voiceAudio: {
            durations: [18.22475, 18.651333],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685192149/aishortz/2b843274620913664f4e2d59b651cacbe0b043a6f574c0cbe12b9984dab9e483/en-US-Standard-D-f1ec350a9342f63c4981ac3a01164f6e.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685192150/aishortz/2b843274620913664f4e2d59b651cacbe0b043a6f574c0cbe12b9984dab9e483/en-US-Standard-F-f1ec350a9342f63c4981ac3a01164f6e.wav",
            ],
          },
          images: [
            {
              contentSize: "161177 B",
              imageId: "11176F8D0EFFEE8711ED1F2F938EC6A078AFD697",
              accentColor: "#C50A06",
              hostPageUrl: "https://www.youtube.com/watch?v=jbi6UE8r-0c",
              contentUrl:
                "https://i.ytimg.com/vi/jbi6UE8r-0c/maxresdefault.jpg",
              width: 1280,
              height: 720,
              name: "New 1.16 Bedrock Edition Betas, 30+ Bugs FIXED, Parity, And New Features! Minecraft Nether ...",
              encodingFormat: "jpeg",
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=jbi6UE8r-0c",
            },
            {
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=sv4CUP1_QL4",
              accentColor: "#C94602",
              name: "1.16.1 OUT NOW - Bug Fixes & Secret Feature - YouTube",
              encodingFormat: "jpeg",
              height: 720,
              imageId: "AE4D2834A5D8B01926FA875E0D323EAD0284FAED",
              contentSize: "140166 B",
              contentUrl:
                "https://i.ytimg.com/vi/sv4CUP1_QL4/maxresdefault.jpg",
              hostPageUrl: "https://www.youtube.com/watch?v=sv4CUP1_QL4",
              width: 1280,
            },
            {
              contentUrl:
                "https://www.minecrafts.us/images/posts/tA4IMC8s0S.png",
              width: 720,
              hostPageUrl:
                "https://www.minecrafts.us/play-minecraft-as-mutant-zombie-bug-fixes/I6aHvsfCl.html",
              imageId: "1831BC2936A11CAE5A63B1C5ED0F8351C1AB3111",
              contentSize: "209784 B",
              name: "Play Minecraft As Mutant Zombie?! (Bug Fixes) - MCPE Addons/MCPE Mods & Addons | minecrafts.us",
              encodingFormat: "png",
              height: 340,
              hostPageDisplayUrl:
                "https://www.minecrafts.us/play-minecraft-as-mutant-zombie-bug-fixes/I6aHvsfCl.html",
              accentColor: "#C70504",
            },
          ],
        },
      ],
    },
    isPublic: false,
    render: {
      status: "PENDING",
      url: "",
      error: "",
      msg: "Render not initiated yet.",
    },
  },
  {
    createdAt: "Fri May 26 2023",
    status: "SUCCESS",
    uniqueId:
      "33829ef7ed50bb8ee51827afe8c442d0f84df0dd3f45db57865c1c0c6de469ce",
    metadata: {
      durationInSeconds: 180,
      topic: "Cybersecurity Awareness Training for Nonprofit Organizations",
      style: "professional",
      width: 1920,
      title:
        "Protect Your Nonprofit from Cyber Attacks! Learn Cybersecurity Essentials Now",
      description:
        "This video aims to increase cybersecurity awareness in nonprofit organizations and educate staff and volunteers about potential cyber threats they may encounter. The video should cover best practices for password management, phishing attacks, and data security.",
      height: 1080,
      color: {
        accentColor: "#008000",
      },
    },
    data: {
      outro: {
        talkingPoint:
          "Thank you for watching our video on nonprofit cybersecurity policies. We hope you found it informative and helpful. Be sure to check out our recommended videos on similar topics, and don't forget to like, share, and subscribe to our channel for more quality content. Thanks for watching!",
        voiceAudio: {
          durations: [16.499125, 17.444583],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685135292/aishortz/33829ef7ed50bb8ee51827afe8c442d0f84df0dd3f45db57865c1c0c6de469ce/en-US-Standard-D-ba963f5a4054ad31de5c6398d1e6f996.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685135292/aishortz/33829ef7ed50bb8ee51827afe8c442d0f84df0dd3f45db57865c1c0c6de469ce/en-US-Standard-F-ba963f5a4054ad31de5c6398d1e6f996.wav",
          ],
        },
      },
      table: {
        isPresent: false,
        voiceAudio: {
          urls: ["", ""],
          durations: [0, 0],
        },
        summary: "",
        table: "",
      },
      videoSections: [
        {
          images: [
            {
              contentUrl: "https://docular.net/previews/docx/5506-007.png",
              encodingFormat: "png",
              contentSize: "114216 B",
              hostPageDisplayUrl:
                "https://tutore.org/data-handling-policy-template.html",
              accentColor: "#444444",
              name: "Data Handling Policy Template | TUTORE.ORG - Master of Documents",
              height: 3368,
              hostPageUrl:
                "https://tutore.org/data-handling-policy-template.html",
              width: 2380,
              imageId: "3D0DD606476F806FEB39E71582BDE6B3759F2D0D",
            },
            {
              encodingFormat: "jpeg",
              accentColor: "#0A0A0A",
              height: 1115,
              hostPageDisplayUrl:
                "https://www.template.net/business/policy/policy-template-sample",
              name: "62+ Policy Template Samples - Free PDF, Word Format Download",
              width: 788,
              imageId: "CCD879CEF6269E47E48F299204C2E40B668E9533",
              contentUrl:
                "https://images.template.net/wp-content/uploads/2017/10/Data-Quality-Policy-11-788x1115.jpg",
              hostPageUrl:
                "https://www.template.net/business/policy/policy-template-sample/",
              contentSize: "103850 B",
            },
            {
              name: "Policies And Procedures Manual Templates | 7+ Word & PDF | Human resources career, Policies ...",
              contentUrl:
                "https://i.pinimg.com/736x/71/cb/10/71cb10a9cf34615a03219e728ae735b1.jpg",
              accentColor: "#333299",
              encodingFormat: "jpeg",
              width: 464,
              imageId: "1147FA25D1D9D98346F4D3A728B42404D23A8878",
              height: 594,
              hostPageDisplayUrl:
                "https://www.pinterest.co.uk/pin/589056826245194779",
              contentSize: "39206 B",
              hostPageUrl:
                "https://www.pinterest.co.uk/pin/589056826245194779/",
            },
          ],
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685135289/aishortz/33829ef7ed50bb8ee51827afe8c442d0f84df0dd3f45db57865c1c0c6de469ce/en-US-Standard-D-85f7c63f5c6b586703c801ec8220f247.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685135288/aishortz/33829ef7ed50bb8ee51827afe8c442d0f84df0dd3f45db57865c1c0c6de469ce/en-US-Standard-F-85f7c63f5c6b586703c801ec8220f247.wav",
            ],
            durations: [23.118208, 23.985583],
          },
          title: "Clear data handling policy",
          talkingPoint:
            "First things first, let's talk about data handling policy. Nonprofit organizations may collect sensitive data such as donor information, financial records, and personal information of beneficiaries. It's important to have a clear policy in place that outlines who has access to this data, how it's stored, and how it's disposed of when it's no longer needed.",
        },
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685135289/aishortz/33829ef7ed50bb8ee51827afe8c442d0f84df0dd3f45db57865c1c0c6de469ce/en-US-Standard-D-8e832f98a175c20889063d5c7f1a5640.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685135289/aishortz/33829ef7ed50bb8ee51827afe8c442d0f84df0dd3f45db57865c1c0c6de469ce/en-US-Standard-F-8e832f98a175c20889063d5c7f1a5640.wav",
            ],
            durations: [19.339708, 20.107542],
          },
          talkingPoint:
            "Next up, let's discuss password policy. Passwords are the first line of defense against cyber attacks. Nonprofit organizations should implement a strong password policy that requires employees to use complex passwords, change them regularly, and not reuse them across different accounts.",
          images: [
            {
              width: 642,
              hostPageUrl:
                "https://unhackery.com/anti-hacking-the-implementation-of-strong-password-policy/",
              accentColor: "#CCA900",
              hostPageDisplayUrl:
                "https://unhackery.com/anti-hacking-the-implementation-of-strong-password-policy",
              imageId: "FA7D5CA13D8A91D46B55E4B6225D1A45F544C5A2",
              name: "Anti-Hacking: The Implementation of Strong Password Policy | Unhackery",
              contentSize: "93579 B",
              encodingFormat: "jpeg",
              contentUrl:
                "https://unhackery.com/wp-content/uploads/2021/01/Strong_password_policy.jpg",
              height: 372,
            },
            {
              accentColor: "#C77604",
              imageId: "A7BA87C24FA802C0BEF968948E467A63A667F7FA",
              contentUrl:
                "https://blog.pcisecuritystandards.org/hs-fs/hubfs/2018_Blog/Strong-Passwords-Blog.png?width=2400&name=Strong-Passwords-Blog.png",
              hostPageUrl:
                "https://blog.pcisecuritystandards.org/infographic-strong-passwords",
              hostPageDisplayUrl:
                "https://blog.pcisecuritystandards.org/infographic-strong-passwords",
              height: 444,
              width: 800,
              contentSize: "25959 B",
              encodingFormat: "png",
              name: "Infographic: Strong Passwords",
            },
            {
              height: 628,
              contentUrl:
                "https://www.wattlecorp.com/wp-content/uploads/2020/07/creating-a-strongpasswordpolicy.jpg",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://www.wattlecorp.com/creating-a-strong-password-policy/",
              contentSize: "61718 B",
              imageId: "2453E1506F49909A0349F0926C04F41D1E2BAC9D",
              accentColor: "#BD730E",
              name: "How to Create Strong Passwords | Create Secure Passwords | Wattlecorp",
              width: 942,
              hostPageDisplayUrl:
                "https://www.wattlecorp.com/creating-a-strong-password-policy",
            },
          ],
          title: "Strong password policy",
        },
        {
          images: [
            {
              accentColor: "#1F1DAE",
              name: "Acceptable Use Policies",
              height: 792,
              contentUrl:
                "https://sites.google.com/site/acceptableusepolicies/_/rsrc/1343244252946/home/acceptable_use_policy_copy.jpg",
              imageId: "702EBEF9718E71643FA2C459FF23681C72EC102C",
              hostPageDisplayUrl:
                "https://sites.google.com/site/acceptableusepolicies",
              encodingFormat: "jpeg",
              contentSize: "113004 B",
              hostPageUrl:
                "https://sites.google.com/site/acceptableusepolicies/",
              width: 612,
            },
            {
              contentSize: "156750 B",
              contentUrl:
                "https://www.formsbirds.com/formimg/acceptable-use-policy-template/2037/sample-acceptable-usage-policy-d1.png",
              accentColor: "#464646",
              hostPageUrl:
                "https://www.formsbirds.com/acceptable-use-policy-template",
              hostPageDisplayUrl:
                "https://www.formsbirds.com/acceptable-use-policy-template",
              height: 1024,
              width: 768,
              name: "Acceptable Use Policy Template - 2 Free Templates in PDF, Word, Excel Download",
              imageId: "F31CF295010B7159338AC8F2B669EFEA3DAA98DE",
              encodingFormat: "png",
            },
            {
              name: "Acceptable Use Policy Template - 2 Free Templates in PDF, Word, Excel Download",
              hostPageUrl:
                "https://www.formsbirds.com/acceptable-use-policy-template",
              hostPageDisplayUrl:
                "https://www.formsbirds.com/acceptable-use-policy-template",
              encodingFormat: "png",
              contentSize: "242430 B",
              height: 1024,
              imageId: "F31CF295010B7159338A5B7B185C82A54BBDD6D2",
              contentUrl:
                "https://www.formsbirds.com/formimg/acceptable-use-policy-template/2039/internet-acceptable-use-policy-d1.png",
              width: 768,
              accentColor: "#884343",
            },
          ],
          talkingPoint:
            "Another important policy to have is an acceptable use policy. This policy should outline what is and isn't allowed when it comes to using technology at work. For example, does your organization allow employees to use their personal devices for work purposes? If so, you'll need to have a Bring Your Own Device (BYOD) policy in place to ensure that these devices are secure.",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685135289/aishortz/33829ef7ed50bb8ee51827afe8c442d0f84df0dd3f45db57865c1c0c6de469ce/en-US-Standard-D-bf4a05718eb28d21165f73e1f04d55b7.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685135289/aishortz/33829ef7ed50bb8ee51827afe8c442d0f84df0dd3f45db57865c1c0c6de469ce/en-US-Standard-F-bf4a05718eb28d21165f73e1f04d55b7.wav",
            ],
            durations: [24.494583, 25.072083],
          },
          title: "Acceptable use policy",
        },
        {
          title: "Data and privacy policy",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685135288/aishortz/33829ef7ed50bb8ee51827afe8c442d0f84df0dd3f45db57865c1c0c6de469ce/en-US-Standard-D-0a3cfa3482671043b3f123673e138e3b.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685135289/aishortz/33829ef7ed50bb8ee51827afe8c442d0f84df0dd3f45db57865c1c0c6de469ce/en-US-Standard-F-0a3cfa3482671043b3f123673e138e3b.wav",
            ],
            durations: [25.258708, 25.88275],
          },
          images: [
            {
              width: 826,
              contentUrl:
                "https://images.examples.com/wp-content/uploads/2017/10/14-data-protection-and-privacy-policy.png",
              hostPageDisplayUrl:
                "https://www.examples.com/business/privacy-policy-examples.html",
              height: 1169,
              accentColor: "#0DA5B3",
              imageId: "450613CE519BB719AB9CD46ACD3014D0AF258320",
              contentSize: "158861 B",
              hostPageUrl:
                "https://www.examples.com/business/privacy-policy-examples.html",
              name: "FREE 18+ Privacy Policy Examples in PDF | Google Docs | Pages | Word | Examples",
              encodingFormat: "png",
            },
            {
              contentUrl:
                "https://betanews.com/wp-content/uploads/2016/04/privacy_policy_table.jpg",
              accentColor: "#CB4400",
              hostPageUrl:
                "https://betanews.com/2016/05/06/eu-gdpr-data-privacy/",
              name: "EU GDPR: Get your data privacy act together",
              width: 640,
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://betanews.com/2016/05/06/eu-gdpr-data-privacy",
              imageId: "B4A8B206C10EF1D2CAD40CB1EEFD61FF52998A53",
              height: 499,
              contentSize: "106052 B",
            },
            {
              hostPageUrl:
                "http://depositphotos.com/stock-photos/data-privacy.html",
              contentSize: "64515 B",
              hostPageDisplayUrl:
                "depositphotos.com/stock-photos/data-privacy.html",
              imageId: "73B608C54018C67E03F526EAEA70E044DA95A02E",
              accentColor: "#002C50",
              width: 600,
              contentUrl:
                "http://st2.depositphotos.com/1004032/7539/i/450/depositphotos_75397971-stock-photo-privacy-policy-in-word-tag.jpg",
              encodingFormat: "jpeg",
              name: "Data privacy Stock Photos, Royalty Free Data privacy Images | Depositphotos®",
              height: 465,
            },
          ],
          talkingPoint:
            "Last but not least, let's talk about data and privacy policy. Nonprofit organizations have a responsibility to protect the data and privacy of their donors and beneficiaries. This means having clear policies in place that outline how data is collected, stored, and used. It's also important to have a plan in place for responding to data breaches and other security incidents.",
        },
        {
          talkingPoint:
            "In conclusion, cybersecurity awareness training is crucial for nonprofit organizations to protect sensitive data, prevent cyber attacks, and maintain the trust of their donors and beneficiaries. By implementing strong policies and training employees on best practices, organizations can ensure that their data remains secure.",
          images: [
            {
              height: 2027,
              encodingFormat: "png",
              name: "The Importance Of Security Awareness Training For | www.informationsecuritysummit.org",
              accentColor: "#1E8E00",
              contentSize: "2569767 B",
              width: 3078,
              imageId: "0247EF2A36D728F2B57A72FEBEE8C7AF275DFAE2",
              contentUrl:
                "https://www.newitpartners.com/files/2017/08/Security-Awareness-Training.png",
              hostPageDisplayUrl:
                "https://www.ilfiordicappero.com/custom/foster-partners-holdings-limited/the-importance...",
              hostPageUrl:
                "https://www.ilfiordicappero.com/custom/foster-partners-holdings-limited/the-importance-of-security-awareness-training-for.php",
            },
            {
              imageId: "3E7435F770412ED0BD61F9702A311EC9F68C58D3",
              hostPageUrl:
                "https://dcencompass.com.au/blog/cyber-security-awareness-training/",
              contentSize: "209674 B",
              accentColor: "#BD4C0E",
              encodingFormat: "jpeg",
              contentUrl:
                "https://dcencompass.com.au/wp-content/uploads/2019/11/Infographic-cyber-security-awareness.jpg",
              hostPageDisplayUrl:
                "https://dcencompass.com.au/blog/cyber-security-awareness-training",
              height: 355,
              name: "Cyber Security Awareness Training insights | DC Encompass",
              width: 474,
            },
            {
              hostPageDisplayUrl:
                "https://www.metacompliance.com/resources/cyber-security-awareness-month",
              encodingFormat: "png",
              name: "Cyber Security Awareness Month - MetaCompliance",
              contentUrl:
                "https://www.metacompliance.com/wp-content/uploads/2020/07/Why-is-Security-Awareness-Training-Important-HIGH-RES-2048x1024.png",
              accentColor: "#BD930E",
              imageId: "599F1BC9904B1F65F02F41802DD10840B1A47177",
              hostPageUrl:
                "https://www.metacompliance.com/resources/cyber-security-awareness-month",
              contentSize: "73417 B",
              height: 1024,
              width: 2048,
            },
          ],
          voiceAudio: {
            durations: [22.85775, 23.355542],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685135289/aishortz/33829ef7ed50bb8ee51827afe8c442d0f84df0dd3f45db57865c1c0c6de469ce/en-US-Standard-D-192d7801a7cadb33bc504517da2e69eb.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685135289/aishortz/33829ef7ed50bb8ee51827afe8c442d0f84df0dd3f45db57865c1c0c6de469ce/en-US-Standard-F-192d7801a7cadb33bc504517da2e69eb.wav",
            ],
          },
          title: "Importance of cybersecurity awareness training",
        },
      ],
      intro: {
        talkingPoint:
          "In this video, we will take a look at essential cybersecurity practices that nonprofit organizations should implement to protect their sensitive data from cyber attacks. We'll cover topics such as data handling policy, password policy, acceptable use policy, data and privacy policy, and how to respond to security incidents.",
        images: [
          {
            height: 4350,
            accentColor: "#1777B4",
            encodingFormat: "jpeg",
            name: "Cybersecurity Awareness Training helps develop competencies and methods to fend off security ...",
            hostPageDisplayUrl:
              "https://www.pinterest.com/pin/116812184064848619",
            contentUrl:
              "https://i.pinimg.com/originals/05/46/cc/0546cca0a3986c7f1cae982c29c62001.jpg",
            width: 4152,
            imageId: "832EFE2B66F1B28F6A6BA8FC854FFF69586792A4",
            hostPageUrl: "https://www.pinterest.com/pin/116812184064848619/",
            contentSize: "1156787 B",
          },
          {
            contentUrl:
              "https://dcencompass.com.au/wp-content/uploads/2019/11/Infographic-cyber-security-awareness.jpg",
            hostPageUrl:
              "https://dcencompass.com.au/blog/cyber-security-awareness-training/",
            width: 474,
            height: 355,
            hostPageDisplayUrl:
              "https://dcencompass.com.au/blog/cyber-security-awareness-training",
            accentColor: "#BD4C0E",
            imageId: "3E7435F770412ED0BD61F9702A311EC9F68C58D3",
            contentSize: "209674 B",
            name: "Cyber Security Awareness Training insights | DC Encompass",
            encodingFormat: "jpeg",
          },
          {
            hostPageUrl:
              "http://www.anonymistic.com/security-awareness-training/",
            contentUrl:
              "https://www.anonymistic.com/wp-content/uploads/2021/01/cyber-security-awareness-training.jpg",
            width: 1024,
            imageId: "148998EE8802703072EC010494DEC9089425113A",
            height: 512,
            contentSize: "63399 B",
            hostPageDisplayUrl:
              "www.anonymistic.com/security-awareness-training",
            encodingFormat: "jpeg",
            name: "Why Is Security Awareness Training Important? - Anonymistic",
            accentColor: "#031628",
          },
        ],
        voiceAudio: {
          durations: [19.894417, 20.87775],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685135292/aishortz/33829ef7ed50bb8ee51827afe8c442d0f84df0dd3f45db57865c1c0c6de469ce/en-US-Standard-D-ba29ce94d3d343b9baf26d26c1ac8ff4.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685135292/aishortz/33829ef7ed50bb8ee51827afe8c442d0f84df0dd3f45db57865c1c0c6de469ce/en-US-Standard-F-ba29ce94d3d343b9baf26d26c1ac8ff4.wav",
          ],
        },
      },
    },
    error: "",
    message: "Video created successfully!",
    render: {
      error: "",
      url: "",
      msg: "Render not initiated yet.",
      status: "PENDING",
    },
    referenceData:
      "\t• Data Handling Policy\n\t• Password Policy\n\t• Acceptable Use Policy\n\t\t○ Bring Your Own Device (BYOD) policy\nData and Privacy Policy",
    isPublic: false,
    userId: "user_2QLa70LbyWTGC1KkBPrW3Ynizpj",
    prompt:
      "Make a video about Cybersecurity awareness training for nonprofit organization\n",
    creditType: "free",
  },
  {
    render: {
      status: "PENDING",
      msg: "Render not initiated yet.",
      url: "",
      error: "",
    },
    prompt: "Make a video about programmer monk",
    metadata: {
      topic: "Programmer Monk",
      durationInSeconds: 300,
      color: {
        accentColor: "#8BC34A",
      },
      description:
        "The video should be an exciting biography of the Programmer Monk, featuring his life story, achievements and the impact that he has made on the tech industry. The video should also include some of his famous quotes and speeches. Please exclude charts, tables or graphics from the video.",
      height: 1080,
      width: 1920,
      style: "professional",
      title:
        "The Untold Story of the Programmer Monk - You Won't Believe What He Did!",
    },
    creditType: "free",
    status: "SUCCESS",
    error: "",
    userId: "user_2R70Syb8xPIrtVZhpCQnLYq0bp0",
    uniqueId:
      "373c140032e4c7233cba6d5113c3b8883cebb8570cd663a3066c8b624182fc3a",
    createdAt: "Mon Jun 12 2023",
    referenceData: "sleepy monk coding on tibetan montains.",
    message: "Video created successfully!",
    data: {
      table: {
        voiceAudio: {
          durations: [0, 0],
          urls: ["", ""],
        },
        summary: "",
        isPresent: false,
        table: "",
      },
      outro: {
        talkingPoint:
          "Thanks for joining our video about the Programmer Monk! We hope you've been inspired by his story and motivated to become a better programmer. If you enjoyed this video, please like, share and subscribe to our channel for more inspiring tech content. Don't forget to watch our recommended videos for more fascinating tech stories. Thanks for watching.",
        voiceAudio: {
          durations: [19.942125, 20.884333],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1686585945/aishortz/373c140032e4c7233cba6d5113c3b8883cebb8570cd663a3066c8b624182fc3a/en-US-Standard-D-c4d6d67af83c0d516df29457dd779226.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1686585945/aishortz/373c140032e4c7233cba6d5113c3b8883cebb8570cd663a3066c8b624182fc3a/en-US-Standard-F-c4d6d67af83c0d516df29457dd779226.wav",
          ],
        },
      },
      videoSections: [
        {
          images: [
            {
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://www.dvdsreleasedates.com/movies/5018/Monk-TV-Series-2002-2009.html",
              name: "Monk DVD Release Date",
              width: 1100,
              contentSize: "198816 B",
              height: 1500,
              hostPageUrl:
                "https://www.dvdsreleasedates.com/movies/5018/Monk-TV-Series-2002-2009.html",
              imageId: "A27811778EF61B65D24F3B98B10B8246A610AF72",
              contentUrl:
                "https://www.dvdsreleasedates.com/covers/monk-the-complete-series-dvd-cover-05.jpg",
              accentColor: "#BA1121",
            },
            {
              name: "Monk Complete Series DVD Set - DVD, HD DVD & Blu-ray",
              height: 1049,
              encodingFormat: "jpeg",
              contentSize: "143386 B",
              hostPageUrl:
                "https://www.bonanza.com/listings/Monk-Complete-Series-DVD-Set/303062069",
              imageId: "34EAD3BB659C328EBE4D4E5E11F7BFC90AF36C90",
              hostPageDisplayUrl:
                "https://www.bonanza.com/listings/Monk-Complete-Series-DVD-Set/303062069",
              width: 1500,
              contentUrl:
                "https://images.bonanzastatic.com/afu/images/2572/2600/35/monk.jpg",
              accentColor: "#B11C1A",
            },
            {
              encodingFormat: "jpeg",
              name: "Monk (TV Series 2002-2009) — The Movie Database (TMDb)",
              imageId: "BD1D59A1E61E455C1FC435234F6803EB456E331F",
              hostPageUrl: "https://www.themoviedb.org/tv/1695-monk",
              accentColor: "#3B6A90",
              hostPageDisplayUrl: "https://www.themoviedb.org/tv/1695-monk",
              width: 500,
              contentUrl:
                "https://image.tmdb.org/t/p/w500/y6cIi3pbf7zJOboCohOnrKBpnlF.jpg",
              contentSize: "26290 B",
              height: 735,
            },
          ],
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686585943/aishortz/373c140032e4c7233cba6d5113c3b8883cebb8570cd663a3066c8b624182fc3a/en-US-Standard-D-7ab0b2f1331e73eae33b295620af5039.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686585943/aishortz/373c140032e4c7233cba6d5113c3b8883cebb8570cd663a3066c8b624182fc3a/en-US-Standard-F-7ab0b2f1331e73eae33b295620af5039.wav",
            ],
            durations: [13.007542, 13.413667],
          },
          title: "The Legend of the Programmer Monk",
          talkingPoint:
            "Have you ever heard of the Programmer Monk? He's a legendary figure in the tech world who is said to live in the mountains of Tibet. It's said that he can code for days on end without food or sleep!",
        },
        {
          images: [
            {
              name: "Code Monk - Be a better programmer",
              accentColor: "#C06C0B",
              encodingFormat: "png",
              imageId: "0C3DB6FA934FA840773EA4483063AFA7D0F24016",
              hostPageUrl: "https://www.hackerearth.com/practice/codemonk/",
              hostPageDisplayUrl:
                "https://www.hackerearth.com/practice/codemonk",
              contentSize: "93900 B",
              height: 315,
              contentUrl:
                "https://static-fastly.hackerearth.com/static/problems/images/codemonk/codemonk_og_image.png",
              width: 600,
            },
            {
              accentColor: "#0583C6",
              hostPageDisplayUrl:
                "https://techposts.org/10-best-android-apps-learn-programming-2017",
              encodingFormat: "jpeg",
              imageId: "C413FAC8C1FEAEBE43356993B5C0E7E04DCCD622",
              contentUrl:
                "https://techposts.org/wp-content/uploads/2017/04/Code-Monk.jpg",
              name: "10 Best Android Apps to Learn Programming in 2017",
              hostPageUrl:
                "https://techposts.org/10-best-android-apps-learn-programming-2017/",
              height: 250,
              width: 512,
              contentSize: "18223 B",
            },
            {
              accentColor: "#0081CB",
              name: "Code Monk for Android - APK Download",
              height: 2560,
              width: 1440,
              contentUrl:
                "https://image.winudf.com/v2/image/Y29tLmhhY2tlcmVhcnRoLmNvZGVtb25rX3NjcmVlbl8wX3QzNGRrbW12/screen-0.jpg?fakeurl=1&type=.jpg",
              imageId: "80FA83C94DB2AC9BCFFDB53703190D524272A4B8",
              hostPageUrl:
                "https://apkpure.com/code-monk/com.hackerearth.codemonk",
              contentSize: "88690 B",
              hostPageDisplayUrl:
                "https://apkpure.com/code-monk/com.hackerearth.codemonk",
              encodingFormat: "jpeg",
            },
          ],
          title: "Incredible Coding Skills of the Programmer Monk",
          talkingPoint:
            "The Programmer Monk is known for his incredible coding skills and his ability to solve even the most complex programming problems. He's said to have a deep understanding of programming languages and can write code in multiple languages with ease.",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686585943/aishortz/373c140032e4c7233cba6d5113c3b8883cebb8570cd663a3066c8b624182fc3a/en-US-Standard-D-4f326492d2dc428e24eb72f75f6c47d0.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686585943/aishortz/373c140032e4c7233cba6d5113c3b8883cebb8570cd663a3066c8b624182fc3a/en-US-Standard-F-4f326492d2dc428e24eb72f75f6c47d0.wav",
            ],
            durations: [16.554458, 16.821958],
          },
        },
        {
          images: [
            {
              encodingFormat: "jpeg",
              height: 855,
              width: 626,
              contentUrl:
                "https://aboutmeditation.com/wp-content/uploads/2015/04/Meditating-monk.jpg",
              hostPageUrl: "https://aboutmeditation.com/temp-store/",
              contentSize: "155182 B",
              name: "Meditation 101: A Beginners Guide With The Tips, Benefits, & Techniques You Need To Know - About ...",
              hostPageDisplayUrl: "https://aboutmeditation.com/temp-store",
              imageId: "CA235D4DDC3792859EA5E572398C593DC89B1234",
              accentColor: "#9A6D31",
            },
            {
              height: 2160,
              name: "Monk Wallpapers - Top Free Monk Backgrounds - WallpaperAccess",
              imageId: "4D603DC424A6C89DB0703ADDE13114BC6C0EB11D",
              encodingFormat: "jpeg",
              accentColor: "#995C32",
              width: 3840,
              contentSize: "101191 B",
              hostPageUrl: "https://wallpaperaccess.com/monk",
              hostPageDisplayUrl: "https://wallpaperaccess.com/monk",
              contentUrl: "https://wallpaperaccess.com/full/2199090.jpg",
            },
            {
              imageId: "F843C63DD3B99010CC60D4FCEA50951408612FE8",
              hostPageDisplayUrl:
                "https://blog.mindvalley.com/how-to-practice-buddhism",
              hostPageUrl:
                "https://blog.mindvalley.com/how-to-practice-buddhism/",
              contentSize: "61746 B",
              contentUrl:
                "https://blog.mindvalley.com/wp-content/uploads/2019/01/rsz_shutterstock_530315335.jpg",
              accentColor: "#704618",
              width: 672,
              encodingFormat: "jpeg",
              height: 449,
              name: "How To Practice Buddhism - A Guide For The Beginner Buddhist",
            },
          ],
          talkingPoint:
            "Many people believe that the Programmer Monk's secret to success lies in his ability to focus and meditate. By clearing his mind and focusing on the task at hand, he's able to write code faster and more efficiently than anyone else.",
          title: "Meditative Focus of the Programmer Monk",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686585943/aishortz/373c140032e4c7233cba6d5113c3b8883cebb8570cd663a3066c8b624182fc3a/en-US-Standard-D-b5dfc8fde25a9d9a7585f3600437da3b.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686585943/aishortz/373c140032e4c7233cba6d5113c3b8883cebb8570cd663a3066c8b624182fc3a/en-US-Standard-F-b5dfc8fde25a9d9a7585f3600437da3b.wav",
            ],
            durations: [16.157083, 16.519583],
          },
        },
        {
          images: [
            {
              name: "Mentoring Program | New Faculty Resources | Teaching & Professional Development | Morgan ...",
              encodingFormat: "jpeg",
              imageId: "4372D9B8628525E6879F4D3711EF48948BEEA0CC",
              accentColor: "#898042",
              width: 575,
              hostPageDisplayUrl:
                "https://www.wpi.edu/academics/faculty/morgan-teaching-learning-center/professional...",
              height: 380,
              hostPageUrl:
                "https://www.wpi.edu/academics/faculty/morgan-teaching-learning-center/professional-development/new-faculty/mentoring-program",
              contentUrl:
                "https://www.wpi.edu/sites/default/files/2016/08/26/faculty-mentor-computer-teach-575x380-SMALL.jpg",
              contentSize: "62931 B",
            },
            {
              accentColor: "#294870",
              width: 2000,
              encodingFormat: "jpeg",
              contentSize: "597996 B",
              hostPageDisplayUrl:
                "https://www.philasd.org/teachingandlearning/become-a-mentor",
              height: 1333,
              hostPageUrl:
                "https://www.philasd.org/teachingandlearning/become-a-mentor/",
              name: "Become a Mentor – Teaching & Learning",
              imageId: "DC211FC4DA550A66B416686B94AB08CD652A04C4",
              contentUrl:
                "https://www.philasd.org/teachingandlearning/wp-content/uploads/sites/148/2017/09/DSC05906.jpg",
            },
            {
              imageId: "0EDBC7D990966DDAB8412BC26B86CFF6FABBF507",
              contentSize: "224367 B",
              encodingFormat: "png",
              width: 1024,
              hostPageDisplayUrl:
                "https://topteachingtasks.com/beginning-teachers-working-with-a-mentor-teacher",
              hostPageUrl:
                "https://topteachingtasks.com/beginning-teachers-working-with-a-mentor-teacher/",
              name: "Beginning Teachers: Working With a Mentor Teacher - Top Teaching Tasks",
              accentColor: "#447C88",
              contentUrl:
                "https://topteachingtasks.com/wp-content/uploads/2020/09/Working-with-a-mentor-teacher-2-1024x682.png",
              height: 682,
            },
          ],
          title: "Teacher and Mentor: The Programmer Monk",
          talkingPoint:
            "Despite his reputation as a recluse, the Programmer Monk is said to be a generous teacher and mentor to those who seek his guidance. Many aspiring programmers have made the pilgrimage to his mountain home to learn from him.",
          voiceAudio: {
            durations: [15.655417, 16.056708],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686585943/aishortz/373c140032e4c7233cba6d5113c3b8883cebb8570cd663a3066c8b624182fc3a/en-US-Standard-D-c6ab3a29c80977f4d3e88338b1751f75.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686585943/aishortz/373c140032e4c7233cba6d5113c3b8883cebb8570cd663a3066c8b624182fc3a/en-US-Standard-F-c6ab3a29c80977f4d3e88338b1751f75.wav",
            ],
          },
        },
        {
          images: [
            {
              name: "Monk Complete Series DVD Set - DVD, HD DVD & Blu-ray",
              contentUrl:
                "https://images.bonanzastatic.com/afu/images/2572/2600/35/monk.jpg",
              contentSize: "143386 B",
              hostPageUrl:
                "https://www.bonanza.com/listings/Monk-Complete-Series-DVD-Set/303062069",
              height: 1049,
              accentColor: "#B11C1A",
              imageId: "34EAD3BB659C328EBE4D4E5E11F7BFC90AF36C90",
              width: 1500,
              hostPageDisplayUrl:
                "https://www.bonanza.com/listings/Monk-Complete-Series-DVD-Set/303062069",
              encodingFormat: "jpeg",
            },
            {
              hostPageDisplayUrl:
                "https://www.dvdsreleasedates.com/movies/5018/Monk-TV-Series-2002-2009.html",
              encodingFormat: "jpeg",
              name: "Monk DVD Release Date",
              imageId: "A27811778EF61B65D24F3B98B10B8246A610AF72",
              height: 1500,
              contentUrl:
                "https://www.dvdsreleasedates.com/covers/monk-the-complete-series-dvd-cover-05.jpg",
              hostPageUrl:
                "https://www.dvdsreleasedates.com/movies/5018/Monk-TV-Series-2002-2009.html",
              width: 1100,
              accentColor: "#BA1121",
              contentSize: "198816 B",
            },
            {
              hostPageDisplayUrl: "https://www.themoviedb.org/tv/1695-monk",
              contentUrl:
                "https://image.tmdb.org/t/p/w500/y6cIi3pbf7zJOboCohOnrKBpnlF.jpg",
              accentColor: "#3B6A90",
              width: 500,
              name: "Monk (TV Series 2002-2009) — The Movie Database (TMDb)",
              height: 735,
              hostPageUrl: "https://www.themoviedb.org/tv/1695-monk",
              contentSize: "26290 B",
              imageId: "BD1D59A1E61E455C1FC435234F6803EB456E331F",
              encodingFormat: "jpeg",
            },
          ],
          talkingPoint:
            "While some people may view the Programmer Monk as a mythical figure, others believe that he is a real person who has simply chosen to live a life of solitude and meditation. Either way, his legend lives on in the tech world, inspiring programmers everywhere to strive for excellence.",
          title: "The Legacy of the Programmer Monk",
          voiceAudio: {
            durations: [18.298333, 18.946083],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686585943/aishortz/373c140032e4c7233cba6d5113c3b8883cebb8570cd663a3066c8b624182fc3a/en-US-Standard-D-55fa4a9a3773f57fd110654282e39591.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686585943/aishortz/373c140032e4c7233cba6d5113c3b8883cebb8570cd663a3066c8b624182fc3a/en-US-Standard-F-55fa4a9a3773f57fd110654282e39591.wav",
            ],
          },
        },
      ],
      intro: {
        images: [
          {
            encodingFormat: "jpeg",
            width: 1200,
            imageId: "B0E395D09BDC0173C051F4FF55181EDEC46E5078",
            contentUrl:
              "https://bloximages.newyork1.vip.townnews.com/nny360.com/content/tncms/assets/v3/editorial/9/77/977ad0ae-4db8-5d40-9fe3-4ef91fc81e44/5eba25fc01846.image.jpg?resize=1200%2C800",
            hostPageUrl:
              "https://www.nny360.com/top_stories/computer-programmer-on-furlough-harnesses-his-skills-for-the-greater-good/article_43b2c445-7e91-542d-a0cf-70b2f25cfe39.html",
            hostPageDisplayUrl:
              "https://www.nny360.com/top_stories/computer-programmer-on-furlough-harnesses-his-skills...",
            name: "Computer programmer on furlough harnesses his skills for the greater good | Lewis County ...",
            contentSize: "79243 B",
            accentColor: "#975C34",
            height: 800,
          },
          {
            accentColor: "#644629",
            name: "Programmer: What Is It? and How to Become One? | Ziprecruiter",
            imageId: "EC8FCC262DA4C0A9A3DE12F9BEECF77A4CAAFE6D",
            contentSize: "204472 B",
            width: 724,
            hostPageDisplayUrl:
              "https://www.ziprecruiter.com/Career/Programmer/What-Is-How-to-Become",
            contentUrl:
              "https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/1143979354RemoteMainframeDeveloper.jpg",
            hostPageUrl:
              "https://www.ziprecruiter.com/Career/Programmer/What-Is-How-to-Become",
            encodingFormat: "jpeg",
            height: 483,
          },
          {
            contentSize: "1385 B",
            encodingFormat: "png",
            hostPageDisplayUrl: "https://www.hackerearth.com/practice/codemonk",
            height: 90,
            contentUrl:
              "https://media-fastly.hackerearth.com/media/codemonk/codemonk-sorting/images/c550cc36-9-2.png",
            hostPageUrl: "https://www.hackerearth.com/practice/codemonk/",
            accentColor: "#CCB200",
            name: "Code Monk - Be a better programmer",
            width: 90,
            imageId: "0C3DB6FA934FA840773E6C8DDA371B50F2F77AE2",
          },
        ],
        talkingPoint:
          "In this video, we will explore the untold story of the Programmer Monk - a legendary figure in the tech world who has captivated many with his incredible coding skills and the impact he has made on the industry. Join us as we uncover the truth behind this mythical persona and reveal some of his famous quotes and speeches.",
        voiceAudio: {
          durations: [18.741583, 19.007625],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1686585945/aishortz/373c140032e4c7233cba6d5113c3b8883cebb8570cd663a3066c8b624182fc3a/en-US-Standard-D-94d54881feef44f2e0eace5183e3c0bf.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1686585945/aishortz/373c140032e4c7233cba6d5113c3b8883cebb8570cd663a3066c8b624182fc3a/en-US-Standard-F-94d54881feef44f2e0eace5183e3c0bf.wav",
          ],
        },
      },
    },
    isPublic: false,
  },
  {
    isPublic: false,
    uniqueId:
      "5781f5b454a2d654f6b051531d64cb7b5a9b9a07899685925566a226a23b2a89",
    render: {
      url: "",
      msg: "Render not initiated yet.",
      status: "PENDING",
      error: "",
    },
    status: "SUCCESS",
    referenceData:
      "The video should display a bunch of sasuke edit from anime Naruto and Naruto Shippuden.",
    creditType: "free",
    createdAt: "Tue May 30 2023",
    error: "",
    data: {
      outro: {
        talkingPoint:
          "Thanks for watching! If you enjoyed these amazing Uchiha Sasuke edits, consider checking out our recommended videos for more great content. Don't forget to like and share this video, and subscribe to our channel for more exciting videos like this one.",
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685421253/aishortz/5781f5b454a2d654f6b051531d64cb7b5a9b9a07899685925566a226a23b2a89/en-US-Standard-D-3f8efb4108930caa3c845997d1565336.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685421253/aishortz/5781f5b454a2d654f6b051531d64cb7b5a9b9a07899685925566a226a23b2a89/en-US-Standard-F-3f8efb4108930caa3c845997d1565336.wav",
          ],
          durations: [14.593208, 15.323583],
        },
      },
      table: {
        isPresent: false,
        table: "",
        voiceAudio: {
          durations: [0, 0],
          urls: ["", ""],
        },
        summary: "",
      },
      videoSections: [
        {
          images: [
            {
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=ouNot7P7V80",
              width: 1280,
              contentUrl:
                "https://i.ytimg.com/vi/ouNot7P7V80/maxresdefault.jpg",
              height: 720,
              encodingFormat: "jpeg",
              imageId: "5AA9137996B84C192BC867E9D5BA255423769EFC",
              contentSize: "126343 B",
              name: "Sasuke Uchiha edit - YouTube",
              accentColor: "#126792",
              hostPageUrl: "https://www.youtube.com/watch?v=ouNot7P7V80",
            },
            {
              contentUrl:
                "https://i.pinimg.com/originals/76/d3/74/76d374548b531525f9977c81b6a7d18c.jpg",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/756534437388753468",
              contentSize: "271442 B",
              width: 1237,
              accentColor: "#8B4044",
              imageId: "80E5C60A615A1EBF17607E673F97CDCDBDAFCF9A",
              name: "Pic Sasuke Uchiha Edit - Instagram Vargz7 | Sasuke shippuden, Sasuke uchiha shippuden, Sasuke ...",
              encodingFormat: "jpeg",
              hostPageUrl: "https://www.pinterest.com/pin/756534437388753468/",
              height: 1240,
            },
            {
              accentColor: "#8F533C",
              contentSize: "81240 B",
              imageId: "818B4227346E40CD6CC1CC296594B6DB5B370144",
              hostPageUrl: "https://www.youtube.com/watch?v=iNJY-5RXuC8",
              height: 720,
              width: 1280,
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=iNJY-5RXuC8",
              encodingFormat: "jpeg",
              contentUrl:
                "https://i.ytimg.com/vi/iNJY-5RXuC8/maxresdefault.jpg",
              name: "13 minutes of the best uchiha sasuke edits - YouTube",
            },
          ],
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685421250/aishortz/5781f5b454a2d654f6b051531d64cb7b5a9b9a07899685925566a226a23b2a89/en-US-Standard-D-d301273e93b20fa25a9f1d10600c8b17.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685421249/aishortz/5781f5b454a2d654f6b051531d64cb7b5a9b9a07899685925566a226a23b2a89/en-US-Standard-F-d301273e93b20fa25a9f1d10600c8b17.wav",
            ],
            durations: [11.599708, 11.882083],
          },
          title: "Showcasing Amazing Uchiha Sasuke Edits",
          talkingPoint:
            "In this video, we're going to showcase some of the most amazing Uchiha Sasuke edits from the Naruto and Naruto Shippuden anime series.",
        },
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685421249/aishortz/5781f5b454a2d654f6b051531d64cb7b5a9b9a07899685925566a226a23b2a89/en-US-Standard-D-4e615bab0ec67ce1ae78d66ba7cb6c47.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685421250/aishortz/5781f5b454a2d654f6b051531d64cb7b5a9b9a07899685925566a226a23b2a89/en-US-Standard-F-4e615bab0ec67ce1ae78d66ba7cb6c47.wav",
            ],
            durations: [11.386167, 11.548708],
          },
          talkingPoint:
            "We've handpicked the best edits out there that highlight Sasuke's incredible skills and character development throughout the series.",
          images: [
            {
              hostPageUrl: "https://www.youtube.com/watch?v=v7mAyr7jCKk",
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=v7mAyr7jCKk",
              contentSize: "54505 B",
              accentColor: "#913A48",
              contentUrl:
                "https://i.ytimg.com/vi/v7mAyr7jCKk/maxresdefault.jpg",
              height: 720,
              encodingFormat: "jpeg",
              name: "Sasuke edit ️😈 - YouTube",
              imageId: "954BB653A8FEF7524D1049813B44C2F31E4178BD",
              width: 1280,
            },
            {
              contentUrl:
                "https://i.ytimg.com/vi/V70Z-YoBvWM/maxresdefault.jpg",
              hostPageUrl: "https://www.youtube.com/watch?v=V70Z-YoBvWM",
              name: "Sasuke edit - YouTube",
              contentSize: "72067 B",
              accentColor: "#9B3031",
              height: 720,
              imageId: "239883D8736B0771755C0B3DC40B03306B80BDC0",
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=V70Z-YoBvWM",
              encodingFormat: "jpeg",
              width: 1280,
            },
            {
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=iNJY-5RXuC8",
              hostPageUrl: "https://www.youtube.com/watch?v=iNJY-5RXuC8",
              width: 1280,
              encodingFormat: "jpeg",
              contentUrl:
                "https://i.ytimg.com/vi/iNJY-5RXuC8/maxresdefault.jpg",
              height: 720,
              imageId: "818B4227346E40CD6CC1CC296594B6DB5B370144",
              accentColor: "#8F533C",
              contentSize: "81240 B",
              name: "13 minutes of the best uchiha sasuke edits - YouTube",
            },
          ],
          title:
            "Handpicked Best Sasuke Edits Reflecting His Character Development",
        },
        {
          title:
            "Capturing Sasuke's Journey Through Epic Fights and Emotional Moments",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685421249/aishortz/5781f5b454a2d654f6b051531d64cb7b5a9b9a07899685925566a226a23b2a89/en-US-Standard-D-76bb0df998e23d1d323a5a394031d70a.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685421249/aishortz/5781f5b454a2d654f6b051531d64cb7b5a9b9a07899685925566a226a23b2a89/en-US-Standard-F-76bb0df998e23d1d323a5a394031d70a.wav",
            ],
            durations: [15.392875, 15.439542],
          },
          talkingPoint:
            "From epic fight scenes to emotional moments, these edits perfectly capture Sasuke's journey from a vengeful young boy to a powerful ninja who learns the true meaning of friendship and loyalty.",
          images: [
            {
              contentUrl:
                "http://images6.fanpop.com/image/photos/39400000/Sasuke-fight-uchiha-sasuke-39465862-450-292.jpg",
              encodingFormat: "jpeg",
              width: 450,
              accentColor: "#A611BA",
              height: 292,
              hostPageDisplayUrl:
                "www.fanpop.com/clubs/uchiha-sasuke/images/39465862/title/sasuke-fight-photo",
              contentSize: "83267 B",
              name: "Sasuke fight - Uchiha Sasuke Photo (39465862) - Fanpop",
              imageId: "5A12993D5DCCDD79A232F35E371B7D7531C963D3",
              hostPageUrl:
                "http://www.fanpop.com/clubs/uchiha-sasuke/images/39465862/title/sasuke-fight-photo",
            },
            {
              hostPageUrl:
                "http://aminoapps.com/web/x3/blog/ed3af085-742b-43df-ab79-b1b9d3c3ff06",
              encodingFormat: "jpeg",
              height: 576,
              contentSize: "46225 B",
              contentUrl:
                "http://pm1.narvii.com/6247/103304ce62d0383e60718c4b96ee7601ce1b2590_hq.jpg",
              width: 1024,
              name: "Naruto vs sasuke final fight | Anime Amino",
              accentColor: "#427489",
              hostPageDisplayUrl:
                "aminoapps.com/web/x3/blog/ed3af085-742b-43df-ab79-b1b9d3c3ff06",
              imageId: "EC34CE46DDEB194BEA4A9EB935A29CA4D291395F",
            },
            {
              accentColor: "#2D789E",
              name: "12 Best Anime Fight Scenes of All Time - BlackJack Store",
              height: 398,
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://bjanime.com/2020/12/22/12-best-anime-fight-scenes-of-all-time/",
              hostPageDisplayUrl:
                "https://bjanime.com/2020/12/22/12-best-anime-fight-scenes-of-all-time",
              contentUrl:
                "https://bjanime.com/wp-content/uploads/2020/12/Naruto-vs-Sasuke-fight-1280x500-1.jpg",
              contentSize: "34436 B",
              width: 1020,
              imageId: "E2A80159EA76D4496DCC8264FE71017AE12B8BEB",
            },
          ],
        },
        {
          title: "Featuring Creative and Visually Stunning Sasuke Edits",
          voiceAudio: {
            durations: [13.301875, 13.537292],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685421249/aishortz/5781f5b454a2d654f6b051531d64cb7b5a9b9a07899685925566a226a23b2a89/en-US-Standard-D-f7f996320566af6b44be36f8cc33146f.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685421249/aishortz/5781f5b454a2d654f6b051531d64cb7b5a9b9a07899685925566a226a23b2a89/en-US-Standard-F-f7f996320566af6b44be36f8cc33146f.wav",
            ],
          },
          talkingPoint:
            "We'll also be featuring some of the most creative and visually stunning edits out there, that use special effects and music to create a truly immersive viewing experience.",
          images: [
            {
              encodingFormat: "jpeg",
              imageId: "B7D2709FE740FA76107D5E0A819D34A9F404E347",
              accentColor: "#1A4EB1",
              contentSize: "46179 B",
              hostPageUrl: "https://in.pinterest.com/pin/698269117219313622/",
              hostPageDisplayUrl:
                "https://in.pinterest.com/pin/698269117219313622",
              contentUrl:
                "https://i.pinimg.com/736x/e4/bc/c5/e4bcc5e747ab97023bb7bfaab3cf0951.jpg",
              name: "Sasuke edit [Video] | Sasuke shippuden, Sasuke uchiha shippuden, Naruto shippuden anime",
              height: 960,
              width: 540,
            },
            {
              contentUrl:
                "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f6c5304e-a5f1-4d6a-ada9-25e9e75c9bf0/daytw31-7968f761-0660-41b7-8885-fd1c5f899319.jpg/v1/fill/w_766,h_1043,q_70,strp/sasuke_uchiha_by_magato98_daytw31-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA5MyIsInBhdGgiOiJcL2ZcL2Y2YzUzMDRlLWE1ZjEtNGQ2YS1hZGE5LTI1ZTllNzVjOWJmMFwvZGF5dHczMS03OTY4Zjc2MS0wNjYwLTQxYjctODg4NS1mZDFjNWY4OTkzMTkuanBnIiwid2lkdGgiOiI8PTE1MzcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.aRR5_rMijwiBxVlUBuu4odv_gKrCoX2EThURCg3FqFA",
              imageId: "1A7127FD315AFC2CDCFA80814A783EB5EC82CFF7",
              contentSize: "145013 B",
              height: 1043,
              hostPageUrl:
                "https://www.deviantart.com/magato98/art/Sasuke-Uchiha-663163309",
              name: "Sasuke Uchiha by magato98 on DeviantArt",
              hostPageDisplayUrl:
                "https://www.deviantart.com/magato98/art/Sasuke-Uchiha-663163309",
              width: 766,
              encodingFormat: "jpeg",
              accentColor: "#2C799F",
            },
            {
              contentUrl:
                "https://i.ytimg.com/vi/QkzFLgywjy8/maxresdefault.jpg",
              hostPageUrl: "https://www.youtube.com/watch?v=QkzFLgywjy8",
              imageId: "CEEC50F5B298E17A656F1116B0F52E4593ACFD70",
              contentSize: "116718 B",
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=QkzFLgywjy8",
              accentColor: "#5F16B5",
              name: "Sasuke edit - YouTube",
              encodingFormat: "jpeg",
              width: 1280,
              height: 720,
            },
          ],
        },
        {
          talkingPoint:
            "So sit back, relax, and get ready to be blown away by some of the most incredible Uchiha Sasuke edits you've ever seen!",
          images: [
            {
              imageId: "0B1F6B53C377D15B5C17A465E5A35EBDF95B6871",
              contentSize: "14697 B",
              accentColor: "#967335",
              hostPageUrl: "https://www.youtube.com/watch?v=bTFkU9p6HnI",
              name: "Sasuke Tribute // Blow Me Away - YouTube",
              height: 360,
              encodingFormat: "jpeg",
              width: 480,
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=bTFkU9p6HnI",
              contentUrl: "https://i.ytimg.com/vi/bTFkU9p6HnI/hqdefault.jpg",
            },
            {
              imageId: "E8543798CE5506A4A22C0BAB11DDC0009B74D13A",
              hostPageDisplayUrl:
                "https://tenor.com/view/sasuke-uchiha-naruto-manga-anime-sword-gif-17253205",
              width: 498,
              contentUrl:
                "https://media1.tenor.com/images/cc42a93d41fc2e21fad947b920fc58ba/tenor.gif?itemid=17253205",
              accentColor: "#070314",
              height: 258,
              name: "Sasuke Uchiha Naruto GIF - SasukeUchiha Naruto Manga - Discover & Share GIFs",
              encodingFormat: "animatedgif",
              contentSize: "879144 B",
              hostPageUrl:
                "https://tenor.com/view/sasuke-uchiha-naruto-manga-anime-sword-gif-17253205",
            },
            {
              hostPageUrl: "https://www.youtube.com/watch?v=qeFkN3OtP-A",
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=qeFkN3OtP-A",
              name: "Naruto Vs. Sasuke Blow Me Away - YouTube",
              contentUrl: "https://i.ytimg.com/vi/qeFkN3OtP-A/hqdefault.jpg",
              height: 360,
              encodingFormat: "jpeg",
              accentColor: "#A82D23",
              contentSize: "9051 B",
              imageId: "FE3CBFA7CCCB84ECA34072F1AE196B3E12555E32",
              width: 480,
            },
          ],
          title: "Prepare to be Blown Away by Incredible Sasuke Edits",
          voiceAudio: {
            durations: [10.928417, 11.462042],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685421250/aishortz/5781f5b454a2d654f6b051531d64cb7b5a9b9a07899685925566a226a23b2a89/en-US-Standard-D-3ef3134d439b2c08caea90ade38d9832.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685421249/aishortz/5781f5b454a2d654f6b051531d64cb7b5a9b9a07899685925566a226a23b2a89/en-US-Standard-F-3ef3134d439b2c08caea90ade38d9832.wav",
            ],
          },
        },
      ],
      intro: {
        images: [
          {
            name: "Sasuke Uchiha edit - YouTube",
            accentColor: "#126792",
            imageId: "5AA9137996B84C192BC867E9D5BA255423769EFC",
            hostPageUrl: "https://www.youtube.com/watch?v=ouNot7P7V80",
            hostPageDisplayUrl: "https://www.youtube.com/watch?v=ouNot7P7V80",
            contentUrl: "https://i.ytimg.com/vi/ouNot7P7V80/maxresdefault.jpg",
            height: 720,
            contentSize: "126343 B",
            encodingFormat: "jpeg",
            width: 1280,
          },
          {
            hostPageUrl: "https://www.pinterest.com/pin/756534437388753468/",
            height: 1240,
            contentSize: "271442 B",
            width: 1237,
            name: "Pic Sasuke Uchiha Edit - Instagram Vargz7 | Sasuke shippuden, Sasuke uchiha shippuden, Sasuke ...",
            hostPageDisplayUrl:
              "https://www.pinterest.com/pin/756534437388753468",
            encodingFormat: "jpeg",
            accentColor: "#8B4044",
            imageId: "80E5C60A615A1EBF17607E673F97CDCDBDAFCF9A",
            contentUrl:
              "https://i.pinimg.com/originals/76/d3/74/76d374548b531525f9977c81b6a7d18c.jpg",
          },
          {
            accentColor: "#6B423D",
            imageId: "A5A42E88A02E08EF85A9A60771C4EBC65C267E6A",
            hostPageDisplayUrl: "https://www.youtube.com/watch?v=7dSXG7Mgqdg",
            name: "Sasuke Edit😈 - YouTube",
            width: 1280,
            height: 720,
            hostPageUrl: "https://www.youtube.com/watch?v=7dSXG7Mgqdg",
            contentUrl: "https://i.ytimg.com/vi/7dSXG7Mgqdg/maxresdefault.jpg",
            encodingFormat: "jpeg",
            contentSize: "66214 B",
          },
        ],
        talkingPoint:
          "In this video, we're going to showcase some of the most amazing Uchiha Sasuke edits from the Naruto and Naruto Shippuden anime series. We've handpicked the best edits out there that highlight Sasuke's incredible skills and character development throughout the series. From epic fight scenes to emotional moments, these edits perfectly capture Sasuke's journey from a vengeful young boy to a powerful ninja who learns the true meaning of friendship and loyalty.",
        voiceAudio: {
          durations: [26.670417, 26.908917],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685421257/aishortz/5781f5b454a2d654f6b051531d64cb7b5a9b9a07899685925566a226a23b2a89/en-US-Standard-D-5d218fcaa5fdd11985d08fc2e4c605f4.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685421257/aishortz/5781f5b454a2d654f6b051531d64cb7b5a9b9a07899685925566a226a23b2a89/en-US-Standard-F-5d218fcaa5fdd11985d08fc2e4c605f4.wav",
          ],
        },
      },
    },
    prompt: "Make a video about about uchiha sasuke edit",
    userId: "user_2QUvn4c0t735P704HX3HTXk4Jsk",
    metadata: {
      description:
        "Create an action-packed edit of Uchiha Sasuke from the Naruto anime. Include scenes where Sasuke shows his unique abilities, such as his Sharingan and Rinnegan. Use fast-paced music and transitions to keep the video engaging, and avoid using too much dialogue. Avoid showcasing spoilers that might ruin the experience for those who haven't watched the show yet.",
      color: {
        accentColor: "#C2185B",
      },
      title: "Insane Uchiha Sasuke Edit - Must Watch!!",
      height: 1080,
      durationInSeconds: 120,
      width: 1920,
      topic: "Uchiha Sasuke Edit",
      style: "fun",
    },
    message: "Video created successfully!",
  },
  {
    message: "Video created successfully!",
    createdAt: "Sat Jun 24 2023",
    render: {
      error: "",
      msg: "Render not initiated yet.",
      status: "PENDING",
      url: "",
    },
    userId: "user_2Rd6C68zXvKoEmIL5SZx0zMmqf4",
    referenceData: "Github platform showcase",
    metadata: {
      height: 1080,
      width: 1920,
      description:
        "This video will showcase the top Github repositories and projects in various categories, such as web development, machine learning, and mobile app development. The video will explain what each repository does and highlight the key features of each project.",
      color: {
        accentColor: "#000000",
        gradientStartColor: "#4e54c8",
        gradientEndColor: "#8f94fb",
      },
      title: "Top Github Projects in Various Categories",
      durationInSeconds: 180,
      table: {
        label: "Top Github Repositories",
      },
      topic: "Github Showcase",
      style: "normal",
    },
    prompt: "Make a video about Github Showcase",
    data: {
      videoSections: [
        {
          talkingPoint:
            "Hey there, welcome to this video about Github Showcase! In this video, we'll be talking about the Github platform showcase and how it can help you showcase your projects to the world.",
          images: [
            {
              name: "GitHub Learning Lab: Introduction to GitHub Walkthrough - YouTube",
              hostPageUrl:
                "https://www.youtube.com/watch?v=sz6zfrQpCQg?playerapiid=ytplayer",
              hostPageDisplayUrl:
                "https://www.youtube.com/watch?v=sz6zfrQpCQg?playerapiid=ytplayer",
              contentSize: "37057 B",
              imageId: "96F12C4CFF0C86511AA3D16FC8847644A406E40C",
              width: 1280,
              accentColor: "#2583A6",
              height: 720,
              encodingFormat: "jpeg",
              contentUrl:
                "https://i.ytimg.com/vi/sz6zfrQpCQg/maxresdefault.jpg",
            },
            {
              imageId: "3796EE767DC04E334B810EBFC5E2719B3D94507A",
              width: 1280,
              encodingFormat: "jpeg",
              contentSize: "125160 B",
              contentUrl:
                "https://i.ytimg.com/vi/HFJEzFaeCog/maxresdefault.jpg",
              hostPageUrl: "https://www.youtube.com/watch?v=HFJEzFaeCog",
              accentColor: "#C5AC06",
              name: "Introduction to GitHub in Visual Studio Code - YouTube",
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=HFJEzFaeCog",
              height: 720,
            },
            {
              hostPageUrl: "https://github.com/mohammadfrh/showCase",
              hostPageDisplayUrl: "https://github.com/mohammadfrh/showCase",
              height: 1920,
              name: "GitHub - mohammadfrh/showCase",
              contentUrl:
                "https://raw.githubusercontent.com/bilgehankalkan/showcase/master/screenshots/2.png",
              width: 1080,
              encodingFormat: "png",
              accentColor: "#00574B",
              contentSize: "43177 B",
              imageId: "735E47AB97EE5D0A3D88DD8D454DC53042AB58E9",
            },
          ],
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687567559/aishortz/7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf/en-US-Standard-D-710183004e637c6ea8ce9f73dc799488.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687567559/aishortz/7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf/en-US-Standard-F-710183004e637c6ea8ce9f73dc799488.wav",
            ],
            durations: [12.687833, 13.359208],
          },
          title: "Introduction to Github Showcase",
        },
        {
          title: "Create a portfolio of your work",
          images: [
            {
              width: 638,
              imageId: "F1DB33084AAAC6E38B619DF2FB46A7CE68D6E638",
              hostPageDisplayUrl:
                "https://www.slideshare.net/BlazetekServices/career-portfolio-management-42437304",
              name: "Career portfolio management",
              encodingFormat: "jpeg",
              contentUrl:
                "https://image.slidesharecdn.com/careerportfoliomanagement-141207041941-conversion-gate02/95/career-portfolio-management-3-638.jpg?cb=1417926033",
              height: 479,
              contentSize: "58382 B",
              accentColor: "#28455F",
              hostPageUrl:
                "https://www.slideshare.net/BlazetekServices/career-portfolio-management-42437304",
            },
            {
              contentSize: "186755 B",
              height: 772,
              hostPageDisplayUrl:
                "https://www.examples.com/design/professional-career-portfolio-examples.html",
              hostPageUrl:
                "https://www.examples.com/design/professional-career-portfolio-examples.html",
              encodingFormat: "jpeg",
              name: "10+ Professional Career Portfolio Examples in PSD | AI | EPS Vector | Examples",
              contentUrl:
                "https://images.examples.com/wp-content/uploads/2017/11/moscovita-work-portfolio-1-.jpg",
              accentColor: "#595147",
              width: 1160,
              imageId: "3835E46A6D6CBD2EF79289908C4730BE39588CDE",
            },
            {
              contentUrl:
                "https://static-cse.canva.com/blob/136926/portfolio.png",
              height: 1570,
              contentSize: "518893 B",
              encodingFormat: "png",
              hostPageDisplayUrl:
                "https://www.canva.com/learn/portfolio/?utm_sq=g5xg3zm1ro",
              width: 2880,
              accentColor: "#4528A3",
              name: "How to make a portfolio | Canva",
              imageId: "1AAC1ED503161C0BA079ABA64283D907D76BE5A4",
              hostPageUrl:
                "https://www.canva.com/learn/portfolio/?utm_sq=g5xg3zm1ro",
            },
          ],
          talkingPoint:
            "Github Showcase is a platform that allows developers to showcase their best work to the world. It's a way to get your work noticed and recognized by the community.",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687567559/aishortz/7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf/en-US-Standard-D-872e774e2ffb8c27667508daa39af7c0.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687567559/aishortz/7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf/en-US-Standard-F-872e774e2ffb8c27667508daa39af7c0.wav",
            ],
            durations: [11.909167, 11.893],
          },
        },
        {
          title: "Network with other developers",
          images: [
            {
              contentUrl:
                "http://www.infragistics.com/community/cfs-filesystemfile.ashx/__key/CommunityServer.Blogs.Components.WeblogFiles/devtoolsguy.Maria_5F00_Blogs_5F00_April/2234.software_5F00_development.jpg",
              height: 492,
              contentSize: "61639 B",
              encodingFormat: "jpeg",
              width: 800,
              name: "What are the real benefits of being an MSDN subscriber? | Infragistics Blog",
              accentColor: "#B58516",
              imageId: "6848ED1FBD22B0EA39188661694301D9D08EFF50",
              hostPageUrl:
                "https://www.infragistics.com/community/blogs/devtoolsguy/archive/2016/05/04/what-are-the-real-benefits-of-being-an-msdn-subscriber.aspx",
              hostPageDisplayUrl:
                "https://www.infragistics.com/community/blogs/devtoolsguy/archive/2016/05/04/what-are...",
            },
            {
              hostPageDisplayUrl:
                "https://learn.g2.com/remote-web-developer-jobs",
              name: "How to Find Remote Web Developer Jobs",
              height: 4912,
              contentUrl: "https://learn.g2.com/hubfs/iStock-1075599562.jpg",
              accentColor: "#8E623D",
              imageId: "D048E81D469D5C0A3877ACDE59123745095E86E4",
              width: 7360,
              hostPageUrl: "https://learn.g2.com/remote-web-developer-jobs",
              contentSize: "4463691 B",
              encodingFormat: "jpeg",
            },
            {
              contentSize: "415555 B",
              height: 1326,
              accentColor: "#A76724",
              hostPageDisplayUrl:
                "https://www.wearemobilefirst.com/blog/developer-networking",
              encodingFormat: "jpeg",
              contentUrl:
                "https://uploads-ssl.webflow.com/5d3a2bf76e364b62a89a075a/5d3ec9a8c89f6aab6a2b550c_rawpixel-661919-unsplash.jpg",
              width: 2048,
              imageId: "83A87CEE1A346EC1B2A7B58E609432B41F37A24D",
              name: "A Guide To Networking For Developers | Blog | We Are Mobile First",
              hostPageUrl:
                "https://www.wearemobilefirst.com/blog/developer-networking",
            },
          ],
          talkingPoint:
            "The platform is easy to use and allows you to create a portfolio of your work. You can add descriptions, images, and videos to show off your projects in the best possible way.",
          voiceAudio: {
            durations: [12.258375, 12.901625],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687567559/aishortz/7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf/en-US-Standard-D-0ebcf74179d5fd12effa7542850b9ee0.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687567559/aishortz/7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf/en-US-Standard-F-0ebcf74179d5fd12effa7542850b9ee0.wav",
            ],
          },
        },
        {
          talkingPoint:
            "Github Showcase is a great way to network with other developers and find inspiration for your own projects. You can browse through other people's work and connect with them to learn more about their process.",
          images: [
            {
              contentSize: "835852 B",
              contentUrl:
                "https://sunlitspaces.com/wp-content/uploads/2016/02/10-Ways-to-Get-Inspired.jpg",
              width: 727,
              name: "10 Great Ways to Get Inspired - Sunlit Spaces | DIY Home Decor, Holiday, and More",
              height: 1973,
              hostPageDisplayUrl:
                "https://sunlitspaces.com/10-great-ways-to-get-inspired",
              accentColor: "#B1221A",
              hostPageUrl:
                "https://sunlitspaces.com/10-great-ways-to-get-inspired/",
              imageId: "EB55A954D3A9855AAD010909910A31F932CA5229",
              encodingFormat: "jpeg",
            },
            {
              contentSize: "133829 B",
              encodingFormat: "jpeg",
              height: 1024,
              name: "5 Easy Ways To Get Inspired | Creativity quotes, Inspiration, Art lessons elementary",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/256423772511444299",
              width: 683,
              contentUrl:
                "https://i.pinimg.com/originals/e4/cb/5f/e4cb5fdd7adce31010cc050b7d41ef65.jpg",
              imageId: "B3D737037CF695C1A50AC0C99A3248515FF96A18",
              hostPageUrl: "https://www.pinterest.com/pin/256423772511444299/",
              accentColor: "#AC1F52",
            },
            {
              name: "DIY Decorative Clipboards using Wrapping Paper {& Season in a Trunk Giveaway!} | The Happy Housie",
              height: 650,
              hostPageDisplayUrl:
                "https://thehappyhousie.porch.com/diy-decorative-clipboards",
              width: 650,
              hostPageUrl:
                "https://thehappyhousie.porch.com/diy-decorative-clipboards/",
              accentColor: "#2AA192",
              imageId: "BA596438B7171FCE535C7A063EE872CB131A95DE",
              contentSize: "152845 B",
              encodingFormat: "jpeg",
              contentUrl:
                "https://thehappyhousie.com/wp-content/uploads/2014/09/Get-Your-DIY-On-Challenge-Pinterest-Inspired-Projects-.jpg",
            },
          ],
          title: "Get inspiration for your projects",
          voiceAudio: {
            durations: [13.737542, 14.014083],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687567559/aishortz/7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf/en-US-Standard-D-7dcdbefc94f9f02cf680e01f2a2ea0c8.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687567559/aishortz/7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf/en-US-Standard-F-7dcdbefc94f9f02cf680e01f2a2ea0c8.wav",
            ],
          },
        },
        {
          title: "Get feedback on your work",
          images: [
            {
              height: 864,
              hostPageUrl:
                "https://www.makemebetter.net/how-to-take-feedback-at-work-positively/",
              contentSize: "246877 B",
              hostPageDisplayUrl:
                "https://www.makemebetter.net/how-to-take-feedback-at-work-positively",
              encodingFormat: "png",
              contentUrl:
                "https://www.makemebetter.net/wp-content/uploads/2020/08/227-1536x864.png",
              imageId: "ABF78D1254BD3EB0253468310912C413B517B548",
              accentColor: "#0B1F44",
              name: "How to take Feedback at work Positively - Make Me Better",
              width: 1536,
            },
            {
              contentUrl:
                "https://blog.lucywalkerrecruitment.com/hs-fs/hubfs/feedback.jpg?width=900&name=feedback.jpg",
              accentColor: "#C38B08",
              contentSize: "63435 B",
              hostPageUrl:
                "https://blog.lucywalkerrecruitment.com/employee-experience-how-good-is-your-company-strategy",
              hostPageDisplayUrl:
                "https://blog.lucywalkerrecruitment.com/employee-experience-how-good-is-your-company...",
              name: "Employee Experience: How Good is Your Company Strategy",
              height: 633,
              width: 900,
              encodingFormat: "jpeg",
              imageId: "5B51D0263A668033B17C64FA47D1777B516E25E4",
            },
            {
              contentUrl:
                "https://www.jobcluster.com/app/webroot/files/uploads/career-advice/how-to-take-feedback.png",
              imageId: "58DF9736BABF52B4036DCF7AE5538CA7644DD646",
              name: "10 Easy Steps to Get Promoted at Workplace",
              hostPageUrl:
                "https://www.jobcluster.com/career-advice/10-easy-steps-to-get-promoted-at-workplace-51",
              accentColor: "#CAA901",
              height: 800,
              width: 800,
              encodingFormat: "png",
              contentSize: "36568 B",
              hostPageDisplayUrl:
                "https://www.jobcluster.com/career-advice/10-easy-steps-to-get-promoted-at-workplace-51",
            },
          ],
          voiceAudio: {
            durations: [11.811875, 12.382833],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687567559/aishortz/7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf/en-US-Standard-D-cf8b04aed283622558d0ac07d32cb2ba.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687567559/aishortz/7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf/en-US-Standard-F-cf8b04aed283622558d0ac07d32cb2ba.wav",
            ],
          },
          talkingPoint:
            "Finally, Github Showcase is a great way to get feedback on your work. You can share your projects with the community and get feedback on what you've done well and what you can improve on.",
        },
      ],
      outro: {
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1687567560/aishortz/7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf/en-US-Standard-D-abd433be90bffe2194c54058e5dd102f.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1687567560/aishortz/7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf/en-US-Standard-F-abd433be90bffe2194c54058e5dd102f.wav",
          ],
          durations: [15.858083, 16.614875],
        },
        talkingPoint:
          "Thanks for watching this video about Github Showcase. We hope you found it informative and useful. Check out our recommended videos on similar topics to learn more. Don't forget to like and share this video, and subscribe to our channel for more content like this. Thanks again!",
      },
      table: {
        summary:
          "The table displays the details of the top 10 Github repositories, ranked by the number of stars. The table includes the name of the repository, its stars, forks, and a brief description. The top 10 repositories in this list are Visual Studio Code, TensorFlow, React, Angular, Flutter, Vue.js, Express, Docker, Ansible, and Kubernetes. The table highlights that popular repositories are those that are widely used in different domains, such as front-end development (React, Angular, Vue.js), machine learning (TensorFlow), and containerized applications (Docker, Kubernetes). Developers can use this information to explore the popular open-source projects and contribute to them to improve their skills.",
        voiceAudio: {
          durations: [49.286, 52.053208],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1687567558/aishortz/7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf/en-US-Standard-D-483aa4e13d012b2f661ce96863c8e335.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1687567558/aishortz/7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf/en-US-Standard-F-483aa4e13d012b2f661ce96863c8e335.wav",
          ],
        },
        isPresent: true,
        table:
          "| Repository | Stars | Forks | Description |\n|------------|-------|-------|-------------|\n| VSCode | 110k | 19.6k | Visual Studio Code is a powerful and lightweight code editor. |\n| TensorFlow | 161k | 91.3k | TensorFlow is an open-source software library for dataflow and differentiable programming across a range of tasks. |\n| React | 157k | 38.3k | A declarative, efficient, and flexible JavaScript library for building user interfaces. |\n| Angular | 68.6k | 16.4k | Angular is a platform for building mobile and desktop web applications. |\n| Flutter | 103k | 14.6k | Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop. |\n| Vue.js | 180k | 26.9k | Vue is a progressive framework for building user interfaces. |\n| Express | 49.7k | 9.6k | Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. |\n| Docker | 125k | 35.7k | Docker is an open platform for developers and sysadmins to build, ship, and run distributed applications, whether on laptops, data center VMs, or the cloud. |\n| Ansible | 47k | 19.2k | Ansible is a simple and powerful automation engine for getting apps and systems to a desired state. |\n| Kubernetes | 115k | 27.5k | Kubernetes is an open-source container orchestration system for automating deployment, scaling, and management of containerized applications. |",
      },
      intro: {
        voiceAudio: {
          durations: [15.1075, 16.279875],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1687567559/aishortz/7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf/en-US-Standard-D-b4a730fcdbab28dfcf7e7a59cee25f52.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1687567559/aishortz/7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf/en-US-Standard-F-b4a730fcdbab28dfcf7e7a59cee25f52.wav",
          ],
        },
        talkingPoint:
          "In this video, we will showcase the top Github repositories and projects in various categories, such as web development, machine learning, and mobile app development. We'll explain what each repository does and highlight the key features of each project.",
        images: [
          {
            height: 1920,
            name: "GitHub - mohammadfrh/showCase",
            accentColor: "#00574B",
            contentUrl:
              "https://raw.githubusercontent.com/bilgehankalkan/showcase/master/screenshots/2.png",
            contentSize: "43177 B",
            hostPageUrl: "https://github.com/mohammadfrh/showCase",
            encodingFormat: "png",
            hostPageDisplayUrl: "https://github.com/mohammadfrh/showCase",
            width: 1080,
            imageId: "735E47AB97EE5D0A3D88DD8D454DC53042AB58E9",
          },
          {
            name: "GitHub - mohammadfrh/showCase",
            accentColor: "#AD1E52",
            contentSize: "50559 B",
            hostPageUrl: "https://github.com/mohammadfrh/showCase",
            width: 1080,
            contentUrl:
              "https://raw.githubusercontent.com/bilgehankalkan/showcase/master/screenshots/1.png",
            imageId: "735E47AB97EE5D0A3D88FEC427313DD7CC04966F",
            encodingFormat: "png",
            hostPageDisplayUrl: "https://github.com/mohammadfrh/showCase",
            height: 1920,
          },
          {
            contentUrl:
              "https://repository-images.githubusercontent.com/185236319/977ff500-71dc-11e9-8dc0-53771adb06c7",
            name: "showcase · GitHub Topics · GitHub",
            hostPageUrl: "https://github.com/topics/showcase",
            accentColor: "#8D613D",
            encodingFormat: "png",
            imageId: "81D7190133789D11D14ACDAC3A3A0A5E6D80DBC9",
            hostPageDisplayUrl: "https://github.com/topics/showcase",
            contentSize: "225426 B",
            width: 1280,
            height: 640,
          },
        ],
      },
    },
    status: "SUCCESS",
    error: "",
    creditType: "free",
    isPublic: false,
    uniqueId:
      "7191d6f0c44928e7e245b3870e55676df1c7857d903bddd20870f2a53550e3bf",
  },
  {
    message: "Video created successfully!",
    status: "SUCCESS",
    data: {
      outro: {
        voiceAudio: {
          durations: [15.22375, 16.288958],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685454675/aishortz/7979d67626f690234ace087f56950f56422fd6fea91d0431018da71b59c04d6d/en-US-Standard-D-f4583d0fac19adab6ae37c9259c229b5.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685454675/aishortz/7979d67626f690234ace087f56950f56422fd6fea91d0431018da71b59c04d6d/en-US-Standard-F-f4583d0fac19adab6ae37c9259c229b5.wav",
          ],
        },
        talkingPoint:
          "Thanks for watching! We hope you found this video informative. If you want to learn more about stock market trading, check out our other videos on our channel. Don't forget to like and share this video and subscribe to our channel for more content like this. Until next time!",
      },
      videoSections: [
        {
          images: [
            {
              width: 1080,
              contentUrl:
                "https://2.bp.blogspot.com/-E_CxLUro6Fo/XtiSl9kk5RI/AAAAAAACMm4/Ms27yOvtOToYt2vPGkDlSAxAo-94u3qrQCK4BGAYYCw/s1600/500013400634_86657-704075.jpg",
              name: "6 Indicators all Traders Should Know | Indian Stock Market Hot Tips & Picks in Shares of India",
              contentSize: "153272 B",
              accentColor: "#25A67A",
              hostPageDisplayUrl:
                "https://www.indian-share-tips.com/2020/06/6-indicators-all-traders-should-know.html",
              height: 1016,
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://www.indian-share-tips.com/2020/06/6-indicators-all-traders-should-know.html",
              imageId: "F29F1B0B085F524B49B578B3C3B0C064AFEACDD7",
            },
            {
              height: 479,
              accentColor: "#0D9FBE",
              width: 638,
              imageId: "F5E678024C0BA680288D156D09C9AB4067D99C9F",
              encodingFormat: "jpeg",
              contentUrl:
                "https://image.slidesharecdn.com/the-fundamentals-of-trading-in-the-indian-stock-market-150330035306-conversion-gate01/95/the-fundamentalsoftradingintheindianstockmarket-1-638.jpg?cb=1427687852",
              name: "The fundamentals-of-trading-in-the-indian-stock-market",
              hostPageUrl:
                "https://www.slideshare.net/sharetipsinfo/the-fundamentalsoftradingintheindianstockmarket-46438834",
              contentSize: "59753 B",
              hostPageDisplayUrl:
                "https://www.slideshare.net/sharetipsinfo/the...",
            },
            {
              hostPageUrl:
                "https://www.investindia.gov.in/team-india-blogs/covid-19-and-indian-stock-market-movement",
              width: 1000,
              hostPageDisplayUrl:
                "https://www.investindia.gov.in/team-india-blogs/covid-19-and-indian-stock-market-movement",
              encodingFormat: "jpeg",
              contentSize: "514397 B",
              name: "Covid-19 and the Indian stock market movement",
              imageId: "45C12540268865B7328550DB026333D7AB7B1B45",
              accentColor: "#12B912",
              contentUrl:
                "https://static.investindia.gov.in/s3fs-public/inline-images/shutterstock_513452020.jpg",
              height: 668,
            },
          ],
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685454672/aishortz/7979d67626f690234ace087f56950f56422fd6fea91d0431018da71b59c04d6d/en-US-Standard-D-2f3aab2c0deb70fee0a0d859fc927327.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685454672/aishortz/7979d67626f690234ace087f56950f56422fd6fea91d0431018da71b59c04d6d/en-US-Standard-F-2f3aab2c0deb70fee0a0d859fc927327.wav",
            ],
            durations: [17.847167, 18.297333],
          },
          title: "Fundamentals of Indian and Global Stock Market Trading",
          talkingPoint:
            "Welcome to our presentation on the fundamentals of Indian stock market trading and global stock market trading. In the next 10 minutes, we will cover the key aspects of trading in the Indian stock market and explore the dynamics of global stock market trading.",
        },
        {
          voiceAudio: {
            durations: [20.248792, 20.944042],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685454672/aishortz/7979d67626f690234ace087f56950f56422fd6fea91d0431018da71b59c04d6d/en-US-Standard-D-2b2606e9876647463891d05e2f428069.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685454672/aishortz/7979d67626f690234ace087f56950f56422fd6fea91d0431018da71b59c04d6d/en-US-Standard-F-2b2606e9876647463891d05e2f428069.wav",
            ],
          },
          images: [
            {
              accentColor: "#078D4B",
              name: "India-stock-market-index-chart – 美股旁观者",
              width: 730,
              encodingFormat: "jpeg",
              imageId: "48F5951A264BC02009AF186749A1A7224B5325B4",
              height: 471,
              hostPageUrl:
                "https://www.usstockwatcher.com/list-of-popular-india-etfs-in-the-us-stock-market-a-quick-introduction/india-stock-market-index-chart/",
              contentUrl:
                "https://www.usstockwatcher.com/wp-content/uploads/2019/05/India-stock-market-index-chart.jpg",
              contentSize: "51945 B",
              hostPageDisplayUrl:
                "https://www.usstockwatcher.com/list-of-popular-india-etfs-in-the-us-stock-market-a...",
            },
            {
              accentColor: "#A32828",
              imageId: "C196DB842B664EB8AC0038A32ADF36FB9AC7C7F6",
              height: 430,
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/123708320999345122",
              width: 675,
              contentUrl:
                "https://i.pinimg.com/originals/fe/81/53/fe81534956dcaa49ff5764550cc0bfcb.gif",
              encodingFormat: "gif",
              hostPageUrl: "https://www.pinterest.com/pin/123708320999345122/",
              name: "Indian Stock Market News, Equity Market and Sensex Today in India | Equitymaster | Indian stock ...",
              contentSize: "18161 B",
            },
            {
              height: 1080,
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/812336851515586407",
              accentColor: "#BA2911",
              hostPageUrl: "https://www.pinterest.com/pin/812336851515586407/",
              width: 1920,
              encodingFormat: "jpeg",
              contentUrl:
                "https://i.pinimg.com/originals/43/a3/5b/43a35b604ff7c27446e151276d2a8dae.jpg",
              name: "Pin on Best Stock Tips",
              contentSize: "211909 B",
              imageId: "68F945418875AF1B1676844FE78B837B937872FD",
            },
          ],
          title: "Overview of the Indian Stock Market and Key Indices",
          talkingPoint:
            "Overview of the Indian stock market, consisting of the Bombay Stock Exchange (BSE) and the National Stock Exchange (NSE). Key indices: BSE Sensex and NSE Nifty 50, representing the performance of select stocks from various sectors.",
        },
        {
          images: [
            {
              width: 1600,
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://www.superheuristics.com/how-to-launch-a-product-in-competitive-market",
              contentSize: "154892 B",
              name: "How to Launch a Product in a Competitive Market - Super Heuristics",
              contentUrl:
                "https://www.superheuristics.com/wp-content/uploads/2020/11/market-structure.jpg",
              accentColor: "#C80303",
              height: 1092,
              hostPageUrl:
                "https://www.superheuristics.com/how-to-launch-a-product-in-competitive-market/",
              imageId: "086195C2AFA8285A9A4D1E9D301AD685E2A673C6",
            },
            {
              hostPageDisplayUrl:
                "www.slideshare.net/learningimarticus/financial-systems-role-of-market-participants",
              name: "Financial systems role of market participants",
              height: 479,
              contentUrl:
                "http://image.slidesharecdn.com/m1t5financialsystemsroleofmarketparticipants-150425042029-conversion-gate01/95/financial-systems-role-of-market-participants-29-638.jpg?cb=1429936386",
              imageId: "CEAF88A2562A8EB8747CB4F7CBA916B647C754C2",
              encodingFormat: "jpeg",
              hostPageUrl:
                "http://www.slideshare.net/learningimarticus/financial-systems-role-of-market-participants",
              contentSize: "40001 B",
              width: 638,
              accentColor: "#065742",
            },
            {
              accentColor: "#0438C7",
              width: 932,
              contentUrl: "https://s3.tradingview.com/e/E6HWyse6_mid.png",
              encodingFormat: "png",
              contentSize: "135212 B",
              height: 550,
              name: "Forex — Education — TradingView",
              hostPageDisplayUrl: "https://www.tradingview.com/education/forex",
              hostPageUrl: "https://www.tradingview.com/education/forex/",
              imageId: "5A5DF16B6F1111AC254101657E2A567B2344A8BD",
            },
          ],
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685454672/aishortz/7979d67626f690234ace087f56950f56422fd6fea91d0431018da71b59c04d6d/en-US-Standard-D-6b9df493320d42e6c49edf4307b09036.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685454672/aishortz/7979d67626f690234ace087f56950f56422fd6fea91d0431018da71b59c04d6d/en-US-Standard-F-6b9df493320d42e6c49edf4307b09036.wav",
            ],
            durations: [17.119083, 18.412542],
          },
          talkingPoint:
            "Understanding the market structure, including the role of regulators, exchanges, brokers, and investors. Overview of different market participants, such as individual investors, institutional investors, and market makers.",
          title: "Understanding the Market Structure and Participants",
        },
        {
          images: [
            {
              hostPageUrl: "https://www.pinterest.com/pin/73605775149629548/",
              name: "4 MARKET PHASES | Stock market basics, Forex trading training, Trading charts",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/73605775149629548",
              accentColor: "#0E4BBD",
              imageId: "68869E8384F94972822525F8A97BF13B1D142C24",
              width: 474,
              contentUrl:
                "https://i.pinimg.com/originals/96/e8/69/96e869df879a4cdf783258ed62dfad90.jpg",
              contentSize: "69076 B",
              height: 474,
              encodingFormat: "jpeg",
            },
            {
              height: 390,
              name: "This Pin was discovered by Be Unique365. Discover (and save!) your own Pins on Pinterest. forex ...",
              imageId: "4F32E0FA046A8BE617BB55482CDEA5FEE97EC8C0",
              width: 474,
              contentSize: "72840 B",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/701787554419870248",
              contentUrl:
                "https://i.pinimg.com/736x/59/1e/b8/591eb8c7a236adc4568e7f1bbe967ec4.jpg",
              accentColor: "#0E763D",
              encodingFormat: "jpeg",
              hostPageUrl: "https://www.pinterest.com/pin/701787554419870248/",
            },
            {
              name: "Key market phases 📉📈 | Stock trading strategies, Trading charts, Stock options trading",
              width: 736,
              imageId: "CD13F0BFF1DDE0482A1AA29C890D85F3F5FB6D63",
              height: 736,
              contentSize: "68271 B",
              encodingFormat: "jpeg",
              accentColor: "#A65E25",
              hostPageDisplayUrl:
                "https://www.pinterest.cl/pin/607211962252387981",
              contentUrl:
                "https://i.pinimg.com/736x/09/5f/fd/095ffd9f87575a0490fc0763ef8e45af.jpg",
              hostPageUrl: "https://www.pinterest.cl/pin/607211962252387981/",
            },
          ],
          title: "Trading Hours and Different Market Phases",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685454672/aishortz/7979d67626f690234ace087f56950f56422fd6fea91d0431018da71b59c04d6d/en-US-Standard-D-210803eb1a10a9476a9bc07cfadd514f.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685454671/aishortz/7979d67626f690234ace087f56950f56422fd6fea91d0431018da71b59c04d6d/en-US-Standard-F-210803eb1a10a9476a9bc07cfadd514f.wav",
            ],
            durations: [17.855458, 19.201375],
          },
          talkingPoint:
            "Discussion on the trading hours of the Indian stock market (Monday to Friday, 9:15 AM to 3:30 PM, Indian Standard Time). Explanation of different market phases, including pre-opening, continuous trading, and closing sessions.",
        },
        {
          images: [
            {
              contentSize: "153272 B",
              name: "6 Indicators all Traders Should Know | Indian Stock Market Hot Tips & Picks in Shares of India",
              hostPageUrl:
                "https://www.indian-share-tips.com/2020/06/6-indicators-all-traders-should-know.html",
              encodingFormat: "jpeg",
              contentUrl:
                "https://2.bp.blogspot.com/-E_CxLUro6Fo/XtiSl9kk5RI/AAAAAAACMm4/Ms27yOvtOToYt2vPGkDlSAxAo-94u3qrQCK4BGAYYCw/s1600/500013400634_86657-704075.jpg",
              accentColor: "#25A67A",
              hostPageDisplayUrl:
                "https://www.indian-share-tips.com/2020/06/6-indicators-all-traders-should-know.html",
              width: 1080,
              height: 1016,
              imageId: "F29F1B0B085F524B49B578B3C3B0C064AFEACDD7",
            },
            {
              contentSize: "38469 B",
              contentUrl:
                "https://qph.fs.quoracdn.net/main-qimg-f41320602659829187f81d1b8ddbd651",
              name: "How does the Indian stock market work? - Quora",
              hostPageUrl:
                "https://www.quora.com/How-does-the-Indian-stock-market-work",
              accentColor: "#CC4F00",
              height: 336,
              encodingFormat: "png",
              width: 523,
              imageId: "F1FABEE3D17F7F572F8242D4395C4FAD65D5C98E",
              hostPageDisplayUrl:
                "https://www.quora.com/How-does-the-Indian-stock-market-work",
            },
            {
              name: "Stock exchange",
              contentSize: "50268 B",
              contentUrl:
                "https://image.slidesharecdn.com/stockexchange-160803184947/95/stock-exchange-2-638.jpg?cb=1470250273",
              hostPageDisplayUrl:
                "https://www.slideshare.net/AmanBaksh/stock-exchange-64670343",
              height: 479,
              width: 638,
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://www.slideshare.net/AmanBaksh/stock-exchange-64670343",
              imageId: "233C2624CD1EB926C362495AE54EF210C63F5BC0",
              accentColor: "#3B8190",
            },
          ],
          voiceAudio: {
            durations: [24.261, 25.218625],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685454672/aishortz/7979d67626f690234ace087f56950f56422fd6fea91d0431018da71b59c04d6d/en-US-Standard-D-19c3e91002f30636a36dd81f9b9423c2.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685454672/aishortz/7979d67626f690234ace087f56950f56422fd6fea91d0431018da71b59c04d6d/en-US-Standard-F-19c3e91002f30636a36dd81f9b9423c2.wav",
            ],
          },
          talkingPoint:
            "Explanation of various securities traded in the Indian stock market, including stocks and bonds. Overview of the different types of stocks, such as blue-chip stocks, mid-cap stocks, and penny stocks. Discussion on the risk-reward profile of each type of security and how to choose the right type of investment based on your investment goals.",
          title: "Explanation of Securities Traded in the Indian Stock Market",
        },
      ],
      intro: {
        voiceAudio: {
          durations: [21.264083, 22.365875],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685454707/aishortz/7979d67626f690234ace087f56950f56422fd6fea91d0431018da71b59c04d6d/en-US-Standard-D-8b22b043ae36e295adfd1e3192cc3667.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685454707/aishortz/7979d67626f690234ace087f56950f56422fd6fea91d0431018da71b59c04d6d/en-US-Standard-F-8b22b043ae36e295adfd1e3192cc3667.wav",
          ],
        },
        talkingPoint:
          "In this video, we will take a comprehensive look at stock market trading for beginners. We'll explore the basics, including relevant terms and concepts, trading strategies and analysis techniques, and market trends. By the end of this video, you'll be equipped with the ultimate guide to investing in stocks and have a comprehensive overview of how the stock market works.",
        images: [
          {
            imageId: "68869E8384F94972822525F8A97BF13B1D142C24",
            hostPageDisplayUrl:
              "https://www.pinterest.com/pin/73605775149629548",
            hostPageUrl: "https://www.pinterest.com/pin/73605775149629548/",
            contentUrl:
              "https://i.pinimg.com/originals/96/e8/69/96e869df879a4cdf783258ed62dfad90.jpg",
            encodingFormat: "jpeg",
            accentColor: "#0E4BBD",
            width: 474,
            name: "4 MARKET PHASES | Stock market basics, Forex trading training, Trading charts",
            height: 474,
            contentSize: "69076 B",
          },
          {
            encodingFormat: "jpeg",
            imageId: "36DB46DBBE466E84ECC5264D609B206F517D93BC",
            width: 652,
            contentSize: "23809 B",
            hostPageDisplayUrl:
              "https://dicajytuh.web.fc2.com/smart-binary-options/stock-market-basics-for-beginners...",
            height: 489,
            contentUrl:
              "http://authorstream.s3.amazonaws.com/content/3068991_636244648676407500.jpg",
            accentColor: "#C18B0A",
            hostPageUrl:
              "https://dicajytuh.web.fc2.com/smart-binary-options/stock-market-basics-for-beginners-ppt-76-febova.html",
            name: "Stock market basics for beginners ppt - 1 minute how to read 60 second binary option trading",
          },
          {
            contentSize: "132486 B",
            contentUrl: "https://i.ytimg.com/vi/rPXbspfcEZ0/maxresdefault.jpg",
            hostPageUrl: "https://www.youtube.com/watch?v=rPXbspfcEZ0",
            encodingFormat: "jpeg",
            width: 1280,
            height: 720,
            accentColor: "#B11A24",
            name: "Stock Market Basics For Beginners India - YouTube",
            imageId: "719D76B5AB902EC1524D41E5A3367D0EA49C3CEC",
            hostPageDisplayUrl: "https://www.youtube.com/watch?v=rPXbspfcEZ0",
          },
        ],
      },
      table: {
        isPresent: false,
        table: "",
        voiceAudio: {
          urls: ["", ""],
          durations: [0, 0],
        },
        summary: "",
      },
    },
    createdAt: "Tue May 30 2023",
    referenceData:
      "Slide 1:\nIntroduction:\n\nWelcome to our presentation on the fundamentals of Indian stock market trading and global stock market trading.\nIn the next 10 minutes, we will cover the key aspects of trading in the Indian stock market and explore the dynamics of global stock market trading.\nSlide 2:\nIndian Stock Market:\n\nOverview of the Indian stock market, consisting of the Bombay Stock Exchange (BSE) and the National Stock Exchange (NSE).\nKey indices: BSE Sensex and NSE Nifty 50, representing the performance of select stocks from various sectors.\nSlide 3:\nMarket Structure and Participants:\n\nUnderstanding the market structure, including the role of regulators, exchanges, brokers, and investors.\nOverview of different market participants, such as individual investors, institutional investors, and market makers.\nSlide 4:\nTrading Hours and Market Phases:\n\nDiscussion on the trading hours of the Indian stock market (Monday to Friday, 9:15 AM to 3:30 PM, Indian Standard Time).\nExplanation of different market phases, including pre-opening, continuous trading, and closing sessions.\nSlide 5:\nTypes of Securities:\n\nExplanation of various securities traded in the Indian stock market, including stocks",
    metadata: {
      color: {
        gradientStartColor: "#4169E1",
        accentColor: "#4169E1",
        gradientEndColor: "#1E90FF",
      },
      topic: "Fundamentals of Stock Market Trading",
      title: "The Ultimate Guide to Stock Market Trading for Beginners",
      description:
        "The video should cover the basics of stock market trading, including the terms and concepts used, trading strategies, analysis techniques, and market trends. It should give a comprehensive overview of how the stock market works and how to invest in stocks.",
      durationInSeconds: 600,
      height: 1080,
      style: "normal",
      width: 1920,
    },
    userId: "user_2QW1I29K0nkSiAmTn0oo7WkVxQC",
    uniqueId:
      "7979d67626f690234ace087f56950f56422fd6fea91d0431018da71b59c04d6d",
    prompt: "Make a video about Fundamentals of Stock Market Trading",
    render: {
      error: "",
      url: "",
      status: "PENDING",
      msg: "Render not initiated yet.",
    },
    creditType: "free",
    error: "",
    isPublic: false,
  },
  {
    status: "SUCCESS",
    render: {
      url: "",
      error: "",
      msg: "Render not initiated yet.",
      status: "PENDING",
    },
    metadata: {
      color: {
        accentColor: "#1a1a1a",
      },
      topic: "Using JavaScript: Learn 5 Popular Regex Components",
      height: 1080,
      width: 1920,
      title: "5 Regex Components Every JavaScript Developer Should Know",
      durationInSeconds: 300,
      description:
        "In this video, you will learn everything you need to know about regular expressions (regex) in JavaScript. We will cover five popular regex components that can help you improve your coding skills. Whether you are a beginner or an advanced JavaScript developer, this video is for you. By the end of this video, you will have a solid understanding of how to use regex to make your code more efficient and powerful.",
      style: "professional",
    },
    createdAt: "Sun May 28 2023",
    data: {
      table: {
        voiceAudio: {
          durations: [0, 0],
          urls: ["", ""],
        },
        summary: "",
        table: "",
        isPresent: false,
      },
      intro: {
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685316271/aishortz/86d4a26747d616384082c78d10132e1f4d7aede31aef800896c4bf2a8307f06b/en-US-Standard-D-022e15020ec9c1fdcfbd96617d9e3080.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685316271/aishortz/86d4a26747d616384082c78d10132e1f4d7aede31aef800896c4bf2a8307f06b/en-US-Standard-F-022e15020ec9c1fdcfbd96617d9e3080.wav",
          ],
          durations: [14.454083, 14.678667],
        },
        images: [
          {
            contentUrl: "https://i.stack.imgur.com/2wHkL.png",
            encodingFormat: "png",
            hostPageUrl:
              "https://stackoverflow.com/questions/3828766/javascript-regex-tester-for-javascript-regex/14597201",
            width: 719,
            hostPageDisplayUrl:
              "https://stackoverflow.com/questions/3828766/javascript-regex-tester-for-javascript...",
            height: 580,
            accentColor: "#0C4EBF",
            contentSize: "58854 B",
            imageId: "F096C4D47F999C36BB732F711D6D2FDBF397DCCD",
            name: "Javascript Regex Tester for Javascript Regex - Stack Overflow",
          },
          {
            accentColor: "#167AB5",
            height: 339,
            width: 767,
            imageId: "A46D909B05B8184683F6D8248DAF7D1CAB0DC30C",
            contentUrl:
              "https://www.thedataschool.com.au/wp-content/uploads/2019/05/Regex-Title-image.png",
            hostPageDisplayUrl:
              "https://maibushyx.blogspot.com/2021/07/38-javascript-regex-test-example.html",
            hostPageUrl:
              "https://maibushyx.blogspot.com/2021/07/38-javascript-regex-test-example.html",
            name: "38 Javascript Regex Test Example - Javascript Overflow",
            encodingFormat: "png",
            contentSize: "15625 B",
          },
          {
            encodingFormat: "jpeg",
            hostPageUrl:
              "https://www.simplilearn.com/tutorials/java-tutorial/regex-in-java",
            contentUrl:
              "https://www.simplilearn.com/ice9/free_resources_article_thumb/JavaScript_RegEx.jpg",
            height: 477,
            contentSize: "33985 B",
            imageId: "5387FF9BEC8FFAF0EAFEA928DE952A88954CBF8F",
            hostPageDisplayUrl:
              "https://www.simplilearn.com/tutorials/java-tutorial/regex-in-java",
            accentColor: "#30628E",
            name: "Regex in Java: An Introduction to Regular Expression with Examples",
            width: 848,
          },
        ],
        talkingPoint:
          "In this video, we will take a look at five important regex components every JavaScript developer should know. By the end of the video, you will have a solid understanding of how to use these regex components to make your code more efficient and powerful.",
      },
      videoSections: [
        {
          images: [
            {
              hostPageUrl:
                "https://shailajav.com/book-review-the-dot-by-peter-reynolds/",
              encodingFormat: "jpeg",
              contentUrl:
                "https://shailajav.com/wp-content/uploads/2014/06/81KW6DNDlQL.jpg",
              width: 2077,
              hostPageDisplayUrl:
                "https://shailajav.com/book-review-the-dot-by-peter-reynolds",
              imageId: "6649FC4E2E98C6A9CEB074567FE67CED22C01D3F",
              accentColor: "#C93302",
              name: "Book Review- The Dot by Peter H Reynolds",
              contentSize: "104189 B",
              height: 2073,
            },
            {
              hostPageDisplayUrl:
                "www.goodreads.com/book/show/825377.The_Dot?from_search=true",
              contentUrl:
                "http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1363702319i/825377._UY630_SR1200,630_.jpg",
              contentSize: "37281 B",
              height: 630,
              accentColor: "#C1890A",
              encodingFormat: "jpeg",
              width: 1200,
              imageId: "6BE12086CBF1CBA9A80D80E92B0D2AE2C1EF3487",
              name: "The Dot by Peter H. Reynolds — Reviews, Discussion, Bookclubs, Lists",
              hostPageUrl:
                "http://www.goodreads.com/book/show/825377.The_Dot?from_search=true",
            },
            {
              accentColor: "#BF8A0C",
              hostPageDisplayUrl:
                "tjonajourney.blogspot.com/2012/07/celebrating-books-that-touch-our.html",
              encodingFormat: "jpeg",
              name: "TJ on a Journey: Celebrating Books That Touch Our Humanity",
              contentUrl:
                "http://2.bp.blogspot.com/-5N25SghhR0Q/UBioroKztiI/AAAAAAAABj0/gQf5JlfkLMA/s1600/the+dot.jpeg",
              imageId: "D2264B70AEEF3826CC446B57C6EC07DA72315864",
              contentSize: "39144 B",
              hostPageUrl:
                "http://tjonajourney.blogspot.com/2012/07/celebrating-books-that-touch-our.html",
              width: 500,
              height: 467,
            },
          ],
          talkingPoint:
            "Alright folks, let's dive into regex components and how they work in JavaScript. First up, we have the dot (.) which matches any character except for a newline. This can be useful for finding patterns within a string.",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685316270/aishortz/86d4a26747d616384082c78d10132e1f4d7aede31aef800896c4bf2a8307f06b/en-US-Standard-D-337493117caff3f1a1a028f0d2e80ace.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685316270/aishortz/86d4a26747d616384082c78d10132e1f4d7aede31aef800896c4bf2a8307f06b/en-US-Standard-F-337493117caff3f1a1a028f0d2e80ace.wav",
            ],
            durations: [13.881333, 14.918042],
          },
          title: "The Dot (.)",
        },
        {
          talkingPoint:
            "Next, we have the caret (^) which matches the start of a string. This can be helpful if you're looking for specific patterns at the beginning of a string.",
          voiceAudio: {
            durations: [10.617917, 11.514708],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685316270/aishortz/86d4a26747d616384082c78d10132e1f4d7aede31aef800896c4bf2a8307f06b/en-US-Standard-D-e8f307ed0fd486e8248d1a78c92b0ceb.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685316270/aishortz/86d4a26747d616384082c78d10132e1f4d7aede31aef800896c4bf2a8307f06b/en-US-Standard-F-e8f307ed0fd486e8248d1a78c92b0ceb.wav",
            ],
          },
          title: "The Caret (^)",
          images: [
            {
              encodingFormat: "jpeg",
              contentUrl:
                "https://pbs.twimg.com/profile_images/869425407505780736/ZYq21vWF.jpg",
              width: 512,
              hostPageDisplayUrl:
                "https://twitter.com/the_caret/status/877966697923203072",
              name: 'The Caret on Twitter: "Stay ahead of the innovation curve with the ultimate @kickstarter recs ...',
              hostPageUrl:
                "https://twitter.com/the_caret/status/877966697923203072",
              accentColor: "#C41607",
              contentSize: "7538 B",
              height: 512,
              imageId: "AB11F005E2B06FF1C73489EED86B22AB11D37563",
            },
            {
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "sohansurag.blogspot.com/2010/10/caret-logo.html",
              contentSize: "110334 B",
              imageId: "7F9CF69EAADB752E414F7F27F70ACB1062812ACB",
              hostPageUrl:
                "http://sohansurag.blogspot.com/2010/10/caret-logo.html",
              accentColor: "#CB0080",
              contentUrl:
                "http://4.bp.blogspot.com/_c7MfWbS4os0/TLWJ9355GRI/AAAAAAAAAhA/0ZfKDD7M5RA/s1600/caret_logo_by_sohansurag-d30nrv1.jpg",
              height: 800,
              name: "Confessions Of a Disturbed!: Caret Logo",
              width: 1500,
            },
            {
              hostPageDisplayUrl:
                "https://lightedbuildingletters.blogspot.com/2020/02/40-things-you-didnt-know-have-names...",
              name: "Lighted Building Letters: 40 Things You Didn’t Know Have Names",
              contentSize: "18013 B",
              height: 600,
              hostPageUrl:
                "https://lightedbuildingletters.blogspot.com/2020/02/40-things-you-didnt-know-have-names.html",
              contentUrl:
                "https://assets.hongkiat.com/uploads/things-you-didnt-know-the-names/caret.jpg",
              width: 800,
              accentColor: "#666666",
              imageId: "D705707127E28E5FC5A7157108E355BCAD31AF12",
              encodingFormat: "jpeg",
            },
          ],
        },
        {
          title: "The Dollar Sign ($)",
          talkingPoint:
            "Moving on to the dollar sign ($), which matches the end of a string. This can be useful for finding patterns at the end of a string.",
          images: [
            {
              name: "BMA Wealth Creators - Official Blog: What does the dollar sign($) represent?",
              height: 1600,
              hostPageDisplayUrl:
                "bma-wealth.blogspot.com/2012/04/what-does-dollar-sign-represent.html",
              hostPageUrl:
                "http://bma-wealth.blogspot.com/2012/04/what-does-dollar-sign-represent.html",
              width: 1200,
              imageId: "B4117645C1D3E0615B16101D1AF97174FBC2EE35",
              encodingFormat: "jpeg",
              contentUrl:
                "http://1.bp.blogspot.com/-fd2pBVYKvDY/T5ps8QJnLpI/AAAAAAAABo8/xgnSgBIFiQI/s1600/gold_dollar.jpg",
              contentSize: "524756 B",
              accentColor: "#C4C107",
            },
            {
              contentSize: "1495535 B",
              width: 2435,
              name: "Dollar Sign PNG Image - PurePNG | Free transparent CC0 PNG Image Library",
              hostPageUrl: "https://purepng.com/photo/2863/dollar-sign",
              accentColor: "#CAAB01",
              imageId: "E7AE06B8FD6B4BBCB578FFEF78C99837CE6C8BFD",
              encodingFormat: "png",
              contentUrl:
                "https://purepng.com/public/uploads/large/purepng.com-dollar-signobjectsdollar-signmoney-cash-dollar-sign-object-currency-631522323964d8wuo.png",
              hostPageDisplayUrl: "https://purepng.com/photo/2863/dollar-sign",
              height: 3472,
            },
            {
              contentSize: "174312 B",
              name: "Funny Dollar Sign Clipart - Gold Dollar Sign Png, Transparent Png - kindpng",
              encodingFormat: "png",
              width: 860,
              contentUrl:
                "https://www.kindpng.com/picc/m/348-3488843_funny-dollar-sign-clipart-gold-dollar-sign-png.png",
              hostPageDisplayUrl:
                "https://www.kindpng.com/imgv/hRmiJTm_funny-dollar-sign-clipart-gold-dollar-sign-png",
              height: 1235,
              accentColor: "#9C4E03",
              hostPageUrl:
                "https://www.kindpng.com/imgv/hRmiJTm_funny-dollar-sign-clipart-gold-dollar-sign-png/",
              imageId: "E8D1BEB81E97271FA5DF4926B26AC96A14EFC3C0",
            },
          ],
          voiceAudio: {
            durations: [10.395417, 10.985667],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685316270/aishortz/86d4a26747d616384082c78d10132e1f4d7aede31aef800896c4bf2a8307f06b/en-US-Standard-D-4693395d97ff78dd8118e9c73b5b7a03.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685316270/aishortz/86d4a26747d616384082c78d10132e1f4d7aede31aef800896c4bf2a8307f06b/en-US-Standard-F-4693395d97ff78dd8118e9c73b5b7a03.wav",
            ],
          },
        },
        {
          title: "The Pipe Symbol (|)",
          voiceAudio: {
            durations: [10.861667, 11.408708],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685316270/aishortz/86d4a26747d616384082c78d10132e1f4d7aede31aef800896c4bf2a8307f06b/en-US-Standard-D-daac49bfed626cbf5f5315beac1c6940.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685316270/aishortz/86d4a26747d616384082c78d10132e1f4d7aede31aef800896c4bf2a8307f06b/en-US-Standard-F-daac49bfed626cbf5f5315beac1c6940.wav",
            ],
          },
          images: [
            {
              encodingFormat: "jpeg",
              height: 5000,
              contentUrl:
                "https://static.vecteezy.com/system/resources/previews/000/649/008/original/pipes-icon-symbol-sign-vector.jpg",
              hostPageUrl:
                "https://www.vecteezy.com/vector-art/649008-pipes-icon-symbol-sign",
              imageId: "401D08D3371B7F3FC637ED76699BC5CBA9AEBADF",
              width: 5000,
              hostPageDisplayUrl:
                "https://www.vecteezy.com/vector-art/649008-pipes-icon-symbol-sign",
              contentSize: "1355140 B",
              accentColor: "#5E666D",
              name: "pipes icon symbol sign 649008 Vector Art at Vecteezy",
            },
            {
              contentSize: "16315 B",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/752664156460829306",
              height: 490,
              width: 490,
              encodingFormat: "png",
              accentColor: "#241F21",
              contentUrl:
                "https://i.pinimg.com/originals/21/34/fe/2134fe20d23ebac0a3b2819809daf171.png",
              hostPageUrl: "https://www.pinterest.com/pin/752664156460829306/",
              name: "pipes icon symbol sign | Symbols, Wallpaper interior design, Mood board design",
              imageId: "8DB13A9E59DAA042EB5E2484A5D86802E7087626",
            },
            {
              encodingFormat: "jpeg",
              contentSize: "623839 B",
              name: "pipes icon symbol sign 649254 Vector Art at Vecteezy",
              accentColor: "#635A71",
              width: 5000,
              hostPageDisplayUrl:
                "https://www.vecteezy.com/vector-art/649254-pipes-icon-symbol-sign",
              contentUrl:
                "https://static.vecteezy.com/system/resources/previews/000/649/254/original/pipes-icon-symbol-sign-vector.jpg",
              height: 5000,
              imageId: "697B36DE19FB9216574639D58FD91AD2A7199738",
              hostPageUrl:
                "https://www.vecteezy.com/vector-art/649254-pipes-icon-symbol-sign",
            },
          ],
          talkingPoint:
            "Fourth on our list is the pipe symbol (|) which is used for alternation. This allows you to search for multiple patterns at once, which can be a real time saver.",
        },
        {
          voiceAudio: {
            durations: [13.642542, 14.434833],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685316270/aishortz/86d4a26747d616384082c78d10132e1f4d7aede31aef800896c4bf2a8307f06b/en-US-Standard-D-43828ca3ca7e8e8ab9af002e353c6524.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685316270/aishortz/86d4a26747d616384082c78d10132e1f4d7aede31aef800896c4bf2a8307f06b/en-US-Standard-F-43828ca3ca7e8e8ab9af002e353c6524.wav",
            ],
          },
          title: "Square Brackets ([])",
          images: [
            {
              contentUrl:
                "https://4.bp.blogspot.com/-Xnx1yo1yiOc/Vuld44SO4qI/AAAAAAAAA1k/9UsqhBQYsl43nNZmgU6Dwuk6S28yC5RqA/s1600/Wall+Mount+Bracket+25mm+1.jpg",
              hostPageDisplayUrl:
                "steeltubeconnectors.blogspot.com/2016/03/wall-mount-bracket-25mm.html",
              height: 1600,
              width: 900,
              name: "Openshop Online South Africa: Wall Mount Bracket (Large) 25mm",
              hostPageUrl:
                "http://steeltubeconnectors.blogspot.com/2016/03/wall-mount-bracket-25mm.html",
              accentColor: "#565451",
              imageId: "86506AA312EACF74405049378D34D78EFA0F56FB",
              contentSize: "63036 B",
              encodingFormat: "jpeg",
            },
            {
              name: "Stainless Steel Square Tube Bracket - Buy wood shelf bracket pattern, stainless steel bracket ...",
              contentSize: "75946 B",
              encodingFormat: "jpeg",
              accentColor: "#656565",
              width: 1500,
              imageId: "27C1779F6F64A5D918C84EB2DD7562F5A328CFBB",
              hostPageUrl:
                "https://cangzhoufutong.com/Stainless-Steel-Square-Tube-Bracket-pd41174604.html",
              contentUrl:
                "https://rororwxhnjrnll5q.ldycdn.com/cloud/ljBprKokllSRpimrlkoliq/71auINdwJ4L-_AC_SL1500_.jpg",
              hostPageDisplayUrl:
                "https://cangzhoufutong.com/Stainless-Steel-Square-Tube-Bracket-pd41174604.html",
              height: 1426,
            },
            {
              contentUrl:
                "https://i.etsystatic.com/7586588/r/il/55846f/2039874775/il_fullxfull.2039874775_cxr1.jpg",
              imageId: "2D56109A26CAE20EE80ADBF270CEA828AF8C3FAA",
              hostPageUrl:
                "https://www.uniquewoodartwork.com/listing/732869895/square-shelf-brackets-powder-coated",
              accentColor: "#996432",
              width: 3000,
              name: "Square Shelf Brackets | Powder Coated Shelf Brackets | Steel Shelf Brackes | Metal Shelf Bracket",
              hostPageDisplayUrl:
                "https://www.uniquewoodartwork.com/listing/732869895/square-shelf-brackets-powder-coated",
              encodingFormat: "jpeg",
              height: 2000,
              contentSize: "348931 B",
            },
          ],
          talkingPoint:
            "Last but not least, we have square brackets ([]), which are used to define a character set. This allows you to search for any character within a set, which can be especially helpful when you're dealing with a large amount of data.",
        },
      ],
      outro: {
        voiceAudio: {
          durations: [20.462417, 21.46575],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685316272/aishortz/86d4a26747d616384082c78d10132e1f4d7aede31aef800896c4bf2a8307f06b/en-US-Standard-D-18e8562dd6e0f775afd1d51571194fec.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685316273/aishortz/86d4a26747d616384082c78d10132e1f4d7aede31aef800896c4bf2a8307f06b/en-US-Standard-F-18e8562dd6e0f775afd1d51571194fec.wav",
          ],
        },
        talkingPoint:
          "Thanks for joining us on this detailed overview of regex components and how they can be used in JavaScript. We hope you found this video informative and helpful. Check out our recommended videos on this topic for more in-depth tutorials. Don't forget to like, share, and subscribe to our channel for more high-quality content like this. Thanks for watching!",
      },
    },
    isPublic: false,
    error: "",
    referenceData:
      "Using JavaScript, I am going to teach you 5 popular regex components. Don’t worry if you never heard of regex before. I will teach you everything you need to know in this one video.",
    userId: "user_2QRUtTughkpAI5CrtYdLJhdVmNt",
    message: "Video created successfully!",
    creditType: "free",
    prompt:
      "Make a video about Using JavaScript, I am going to teach you 5 popular regex components. Don’t worry if you never heard of regex before. I will teach you everything you need to know in this one video.",
    uniqueId:
      "86d4a26747d616384082c78d10132e1f4d7aede31aef800896c4bf2a8307f06b",
  },
  {
    creditType: "free",
    message: "Video created successfully!",
    data: {
      outro: {
        talkingPoint:
          "Thanks for watching! If you enjoyed this video on different types of alloys, please give it a thumbs up and share it with your friends. Consider subscribing to our channel for more amazing content. Also, check out our recommended videos on related topics: Aluminum vs. Steel: Which One Should You Use? and Titanium Alloys: The Future of Engineering! See you in the next one!",
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684850413/aishortz/8d78612c9d098ce565369041899be9e19de0636ca9c51608f5906c20ccfc48f5/en-US-Standard-D-2ebc7374b5ab3a5bafd6a9f146aec978.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684850413/aishortz/8d78612c9d098ce565369041899be9e19de0636ca9c51608f5906c20ccfc48f5/en-US-Standard-F-2ebc7374b5ab3a5bafd6a9f146aec978.wav",
          ],
          durations: [22.684625, 24.079792],
        },
      },
      table: {
        table: "",
        summary: "",
        isPresent: false,
        voiceAudio: {
          durations: [0, 0],
          urls: ["", ""],
        },
      },
      intro: {
        images: [
          {
            contentUrl:
              "https://www.thoughtco.com/thmb/pyYvvCde-UBEnZP5ryHWuFlCVL8=/1500x1000/filters:fill(auto,1)/metal-alloys-2340254_final-5c58577246e0fb00013a2c51.png",
            accentColor: "#C76C04",
            width: 1500,
            hostPageUrl: "https://www.thoughtco.com/metal-alloys-2340254",
            contentSize: "394239 B",
            height: 1000,
            name: "Properties, Composition, and Production of Metal Alloys",
            imageId: "9513034397FD86BBC5C06C71753A959242607ACE",
            encodingFormat: "png",
            hostPageDisplayUrl:
              "https://www.thoughtco.com/metal-alloys-2340254",
          },
          {
            hostPageDisplayUrl:
              "https://www.mechanicaleducation.com/2019/05/alloy-steel-and-different-types-of-alloy...",
            encodingFormat: "png",
            hostPageUrl:
              "https://www.mechanicaleducation.com/2019/05/alloy-steel-and-different-types-of-alloy-steel.html",
            contentSize: "365913 B",
            contentUrl:
              "https://3.bp.blogspot.com/-E3wvbGXC6FI/XN7o0hMgwmI/AAAAAAAACHU/_AjtrFFxIIsFrUzb4P5Fufh2owgsrU3_ACK4BGAYYCw/s1600/ALLOY-STEEL-AND-DIFFERENT-TYPES-OF-ALLOY-STEEL.png",
            accentColor: "#232323",
            name: "Alloy Steel and Different types of Alloy Steel - Mechanical Education",
            imageId: "BE1C3B985BF19E11AA806EE83844B053D76AB7EB",
            width: 1600,
            height: 850,
          },
          {
            width: 860,
            encodingFormat: "jpeg",
            hostPageUrl: "https://www.pinterest.com/pin/523191681703721021/",
            accentColor: "#A27C29",
            contentUrl:
              "https://i.pinimg.com/originals/19/bd/af/19bdaf8cbb026cf7ceb42a54b57f2162.jpg",
            height: 576,
            name: "D&D 5E – Metals | Metal, D&d, D&d dungeons and dragons",
            hostPageDisplayUrl:
              "https://www.pinterest.com/pin/523191681703721021",
            imageId: "57913083C38253F31DABFFA382D76181CAE2DC27",
            contentSize: "54486 B",
          },
        ],
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684850412/aishortz/8d78612c9d098ce565369041899be9e19de0636ca9c51608f5906c20ccfc48f5/en-US-Standard-D-0cebaadcdcacd1cc4f95bbecae396cd6.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684850412/aishortz/8d78612c9d098ce565369041899be9e19de0636ca9c51608f5906c20ccfc48f5/en-US-Standard-F-0cebaadcdcacd1cc4f95bbecae396cd6.wav",
          ],
          durations: [21.57725, 23.158],
        },
        talkingPoint:
          "In this video, we will explore the world of metal alloys. We'll cover the most commonly used metal alloys, such as steel, aluminum, titanium, and copper alloys. We'll discuss their properties, applications, and the benefits they offer in industries such as aerospace, automotive, and medical. Get ready to discover the advantages of metal alloys!",
      },
      videoSections: [
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684850405/aishortz/8d78612c9d098ce565369041899be9e19de0636ca9c51608f5906c20ccfc48f5/en-US-Standard-D-4a6841565315abea889711ceb972cbd6.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684850405/aishortz/8d78612c9d098ce565369041899be9e19de0636ca9c51608f5906c20ccfc48f5/en-US-Standard-F-4a6841565315abea889711ceb972cbd6.wav",
            ],
            durations: [17.5895, 18.705125],
          },
          talkingPoint:
            "Steel is an alloy primarily composed of iron and carbon. It offers exceptional strength, durability, and versatility. Steel finds applications in construction, automotive manufacturing, appliances, and various industrial sectors.",
          images: [
            {
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/477100154275874293",
              height: 468,
              width: 600,
              accentColor: "#BDBD0E",
              imageId: "E353DC0C0C83A1B70DE38116B52B21F56E4960DC",
              name: "Different Types of Steels-Stainless steels, Chemical Composition,Applications, Properties etc ...",
              encodingFormat: "jpeg",
              hostPageUrl: "https://www.pinterest.com/pin/477100154275874293/",
              contentSize: "59986 B",
              contentUrl:
                "https://i.pinimg.com/736x/ac/d7/16/acd7166e311ac976fdbf67504368f0d5.jpg",
            },
            {
              imageId: "6225D5A4F8660C97158CDC7D4BC4F43B6C0A31B7",
              hostPageUrl: "https://www.azom.com/article.aspx?ArticleID=17084",
              accentColor: "#BFAD0C",
              contentUrl:
                "https://www.azom.com/images/Article_Images/ImageForArticle_17084(2).jpg",
              contentSize: "134190 B",
              name: "What is Structural Steel? Composition and Applications",
              hostPageDisplayUrl:
                "https://www.azom.com/article.aspx?ArticleID=17084",
              width: 950,
              encodingFormat: "jpeg",
              height: 633,
            },
            {
              imageId: "24D52AC8D1F1E83F441848D0F2DFB0AB823E38B0",
              encodingFormat: "png",
              contentUrl:
                "http://nuclear-power.com/wp-content/uploads/2020/02/Carbon-Steels-composition.png",
              height: 564,
              name: "Steels - Properties of Steels | nuclear-power.com",
              accentColor: "#3B6390",
              contentSize: "14639 B",
              width: 746,
              hostPageUrl:
                "https://www.nuclear-power.com/nuclear-engineering/metals-what-are-metals/steels-properties-of-steels/",
              hostPageDisplayUrl:
                "https://www.nuclear-power.com/nuclear-engineering/metals-what-are-metals/steels...",
            },
          ],
          title: "Steel - Composition and Applications",
        },
        {
          talkingPoint:
            "Aluminum alloys are lightweight and possess excellent corrosion resistance. They are widely used in the aerospace industry, automotive components, packaging materials, and structural applications where weight reduction is crucial.",
          voiceAudio: {
            durations: [16.399167, 17.507042],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684850404/aishortz/8d78612c9d098ce565369041899be9e19de0636ca9c51608f5906c20ccfc48f5/en-US-Standard-D-d4cac8baac0754a03bb809de53a53903.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684850406/aishortz/8d78612c9d098ce565369041899be9e19de0636ca9c51608f5906c20ccfc48f5/en-US-Standard-F-d4cac8baac0754a03bb809de53a53903.wav",
            ],
          },
          title: "Aluminum Alloys - Lightweight and Corrosion Resistant",
          images: [
            {
              width: 500,
              encodingFormat: "jpeg",
              imageId: "B942E98C7BF6047CACB6ABA0640E8F37B76AEF31",
              height: 500,
              contentSize: "32442 B",
              name: "Aluminium Alloy MTB Pedal Lightweight Durable Corrosion Resistance Blue *** Read more at the ...",
              accentColor: "#0C3D6B",
              hostPageUrl: "https://www.pinterest.com/pin/55380270402638158/",
              contentUrl:
                "https://i.pinimg.com/originals/46/78/8f/46788f2702001b84eea6ddea961841c6.jpg",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/55380270402638158",
            },
            {
              hostPageUrl:
                "http://www.aluminumhardwareproducts.com/sale-12902259-small-density-1060-aluminum-alloy-bar-good-corrosion-resistance.html",
              hostPageDisplayUrl:
                "www.aluminumhardwareproducts.com/sale-12902259-small-density-1060-aluminum-alloy-bar...",
              height: 640,
              accentColor: "#446C87",
              contentUrl:
                "http://www.aluminumhardwareproducts.com/photo/pl29773791-small_density_1060_aluminum_alloy_bar_good_corrosion_resistance.jpg",
              name: "Small Density 1060 Aluminum Alloy Bar Good Corrosion Resistance",
              width: 640,
              contentSize: "49837 B",
              imageId: "7AE9AB0984714E3CA81FC77857DABBD92E5F38F6",
              encodingFormat: "jpeg",
            },
            {
              contentUrl:
                "http://www.faicarvico.it/files/galleryPhoto/0/65/0.jpg",
              imageId: "D1C89C46C1CEEC7019D30D04A29BE286C4C86DF4",
              encodingFormat: "jpeg",
              hostPageUrl:
                "http://www.faicarvico.it/galleria/cra-corrosion-resistant-alloy-11",
              hostPageDisplayUrl:
                "www.faicarvico.it/galleria/cra-corrosion-resistant-alloy-11",
              contentSize: "406006 B",
              width: 892,
              height: 1000,
              accentColor: "#5E4B36",
              name: "CRA - CORROSION RESISTANT ALLOY",
            },
          ],
        },
        {
          voiceAudio: {
            durations: [17.962875, 19.268167],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684850404/aishortz/8d78612c9d098ce565369041899be9e19de0636ca9c51608f5906c20ccfc48f5/en-US-Standard-D-2308e6c848b3bc184c7bba7ac9310151.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684850406/aishortz/8d78612c9d098ce565369041899be9e19de0636ca9c51608f5906c20ccfc48f5/en-US-Standard-F-2308e6c848b3bc184c7bba7ac9310151.wav",
            ],
          },
          talkingPoint:
            "Titanium alloys are known for their exceptional strength-to-weight ratio, corrosion resistance, and biocompatibility. They are extensively utilized in aerospace engineering, medical implants, sports equipment, and chemical processing industries.",
          images: [
            {
              imageId: "16DF257C22C2A5759234810F1DBFB148E4E1146D",
              hostPageDisplayUrl:
                "https://www.dierk-raabe.com/titanium-alloys/mechanical-properties-of-titanium",
              encodingFormat: "jpeg",
              height: 249,
              contentUrl:
                "https://www.dierk-raabe.com/s/cc_images/cache_2455479372.jpg?t=1427618461",
              width: 399,
              name: "Metallurgical Materials Science and Alloy Design - Mechanical Properties of Titanium",
              accentColor: "#21AAA5",
              contentSize: "17767 B",
              hostPageUrl:
                "https://www.dierk-raabe.com/titanium-alloys/mechanical-properties-of-titanium/",
            },
            {
              imageId: "E5D0756A8DE1D0DF3624E9F15AC348A0C25B05B8",
              contentUrl:
                "http://nuclear-power.com/wp-content/uploads/2020/03/titanium-grade-5-image-min.png",
              width: 1000,
              name: "Titanium Alloys - Characteristics and Uses",
              accentColor: "#393633",
              hostPageUrl:
                "https://www.nuclear-power.com/nuclear-engineering/metals-what-are-metals/alloys-composition-properties-of-metal-alloys/titanium-alloys/",
              hostPageDisplayUrl:
                "https://www.nuclear-power.com/nuclear-engineering/metals-what-are-metals/alloys...",
              contentSize: "160532 B",
              encodingFormat: "png",
              height: 1000,
            },
            {
              imageId: "DE16FD2291A2D0B5D05CB70DF5D9A8838342D75B",
              hostPageDisplayUrl:
                "https://dir.indiamart.com/impcat/titanium-alloys.html",
              encodingFormat: "jpeg",
              height: 500,
              name: "Titanium Alloys at Best Price in India",
              hostPageUrl:
                "https://dir.indiamart.com/impcat/titanium-alloys.html",
              accentColor: "#252525",
              contentUrl:
                "https://5.imimg.com/data5/ZL/MW/SE/SELLER-1413895/titanium-alloys-rod-500x500.jpg",
              contentSize: "37850 B",
              width: 500,
            },
          ],
          title: "Titanium Alloys - Strength and Versatility",
        },
        {
          talkingPoint:
            "Copper alloys, such as bronze and brass, offer high electrical conductivity, thermal conductivity, and excellent formability. They are employed in electrical wiring, plumbing fixtures, musical instruments, and decorative applications.",
          images: [
            {
              hostPageUrl:
                "https://www.researchgate.net/figure/a-The-resistivity-of-copper-alloys-increases-in-various-magnitudes-with-increasing-the_fig1_343535949",
              imageId: "FAB9AFEC6EB4957F2B8593A285C4F1B32224D030",
              contentUrl:
                "https://www.researchgate.net/profile/Seung-Han-4/publication/343535949/figure/fig1/AS:948651715211264@1603187602611/a-The-resistivity-of-copper-alloys-increases-in-various-magnitudes-with-increasing-the.png",
              width: 621,
              encodingFormat: "png",
              contentSize: "124574 B",
              name: "(a) The resistivity of copper alloys increases in various magnitudes... | Download Scientific ...",
              hostPageDisplayUrl:
                "https://www.researchgate.net/figure/a-The-resistivity-of-copper-alloys-increases-in...",
              height: 1000,
              accentColor: "#3B3D90",
            },
            {
              encodingFormat: "jpeg",
              contentUrl:
                "https://www.researchgate.net/profile/Mozhgan-Gholami-Kermanshahi/publication/272729745/figure/fig8/AS:668701925863451@1536442371734/Tensile-strength-and-elongation-of-some-be-free-high-strength-copper-alloys-with_Q640.jpg",
              hostPageUrl:
                "https://www.researchgate.net/figure/Hardness-and-electrical-conductivity-of-several-high-strength-copper-alloys-see-online_fig7_272729745",
              hostPageDisplayUrl:
                "https://www.researchgate.net/figure/Hardness-and-electrical-conductivity-of-several...",
              name: "Hardness and electrical conductivity of several high strength copper... | Download Scientific ...",
              contentSize: "61501 B",
              width: 546,
              height: 546,
              accentColor: "#A9B615",
              imageId: "FA00F74EF1B3686F156E5AE8165265E051CAF6E4",
            },
            {
              height: 520,
              hostPageUrl:
                "https://www.indiamart.com/proddetail/copper-alloys-11720027288.html",
              hostPageDisplayUrl:
                "https://www.indiamart.com/proddetail/copper-alloys-11720027288.html",
              encodingFormat: "jpeg",
              accentColor: "#B66615",
              imageId: "2F92C913385BCDEBFA00F949053EA9C462E98715",
              contentSize: "53184 B",
              width: 820,
              name: "Copper Alloys at Rs 600/kilogram | Copper Alloys | ID: 11720027288",
              contentUrl:
                "https://5.imimg.com/data5/WC/JW/VS/SELLER-7473023/copper-alloys.jpg",
            },
          ],
          title: "Copper Alloys - High Conductivity and Formability",
          voiceAudio: {
            durations: [18.125708, 19.574292],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684850404/aishortz/8d78612c9d098ce565369041899be9e19de0636ca9c51608f5906c20ccfc48f5/en-US-Standard-D-d1b67368a0111459dd3353dfd3c8e372.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684850405/aishortz/8d78612c9d098ce565369041899be9e19de0636ca9c51608f5906c20ccfc48f5/en-US-Standard-F-d1b67368a0111459dd3353dfd3c8e372.wav",
            ],
          },
        },
      ],
    },
    prompt:
      "Make a video about the different types of metal alloys, including their distinct features, applications, and benefits.",
    createdAt: "Tue May 23 2023",
    status: "SUCCESS",
    error: "",
    isPublic: true,
    referenceData:
      "Common types of metal alloys:\n\nSteel: Steel is an alloy primarily composed of iron and carbon. It offers exceptional strength, durability, and versatility. Steel finds applications in construction, automotive manufacturing, appliances, and various industrial sectors.\n\nAluminum alloys: Aluminum alloys are lightweight and possess excellent corrosion resistance. They are widely used in the aerospace industry, automotive components, packaging materials, and structural applications where weight reduction is crucial.\n\nTitanium alloys: Titanium alloys are known for their exceptional strength-to-weight ratio, corrosion resistance, and biocompatibility. They are extensively utilized in aerospace engineering, medical implants, sports equipment, and chemical processing industries.\n\nCopper alloys: Copper alloys, such as bronze and brass, offer high electrical conductivity, thermal conductivity, and excellent formability. They are employed in electrical wiring, plumbing fixtures, musical instruments, and decorative applications.",
    metadata: {
      height: 1080,
      style: "professional",
      topic: "Types of Metal Alloys",
      width: 1920,
      color: {
        gradientEndColor: "#FF4500",
        gradientStartColor: "#FFA500",
        accentColor: "#FFA500",
      },
      description:
        "This video will explore the different types of metal alloys, including their distinct features, applications, and benefits. We will cover the most commonly used metal alloys such as titanium alloys, steel alloys, copper alloys, and nickel alloys. We will explain the properties and characteristics of each alloy, their applications in industries such as aerospace, automotive, and medical, and the benefits they offer. This video will be informative for those who are interested in learning about the world of metal alloys.",
      durationInSeconds: 300,
      title: "Types of Metal Alloys: Discover the Benefits",
    },
    userId: "user_2PbJnAXLLNskJrUDFgMPIwqlHAX",
    render: {
      msg: "Render not initiated yet.",
      status: "PENDING",
      url: "",
      error: "",
    },
    uniqueId:
      "8d78612c9d098ce565369041899be9e19de0636ca9c51608f5906c20ccfc48f5",
  },
  {
    createdAt: "Wed May 24 2023",
    render: {
      error: "",
      status: "PENDING",
      msg: "Render not initiated yet.",
      url: "",
    },
    message: "Video created successfully!",
    isPublic: false,
    metadata: {
      durationInSeconds: 300,
      style: "fun",
      color: {
        accentColor: "#FF9900",
      },
      height: 1080,
      topic: "Animals",
      title: "10 Amazing Animals You Won't Believe Exist!",
      width: 1920,
      description:
        "This video should showcase various animals from different habitats around the world. It should be informative, engaging, and entertaining for viewers. Please avoid using any graphic or disturbing images of animals. Instead, please focus on beautiful and captivating shots of animals in their natural environment. The video should include facts and information about the animals featured, their habitat, diet, and fun facts about their behavior. ",
    },
    referenceData: "Animals on the florest",
    creditType: "free",
    uniqueId:
      "a0daa6f2dcdf07ae6b2b26b2eb7167ffe5d176ae12d7a4ae554d2624beb95d46",
    prompt: "Make a video about Animals",
    data: {
      intro: {
        images: [
          {
            contentSize: "932378 B",
            width: 2906,
            imageId: "7118146A2BC42662A6C7604FADDA2DEDE6249BB4",
            encodingFormat: "jpeg",
            hostPageUrl:
              "https://wallpapercave.com/cute-baby-wild-animals-wallpapers",
            accentColor: "#694731",
            name: "Cute Baby Wild Animals Wallpapers - Wallpaper Cave",
            contentUrl: "https://wallpapercave.com/wp/wp2698601.jpg",
            hostPageDisplayUrl:
              "https://wallpapercave.com/cute-baby-wild-animals-wallpapers",
            height: 2319,
          },
          {
            hostPageUrl:
              "https://www.theodysseyonline.com/28-of-the-cutest-baby-animals",
            name: "28 Of The Cutest Baby Animals",
            contentUrl:
              "http://cdn.playbuzz.com/cdn/9aa0b54c-f199-4543-8dfa-f2c28c5af221/2dc233e4-dbc2-409c-95e4-38df853fdf5e.jpg",
            width: 2048,
            accentColor: "#9F612C",
            height: 1366,
            contentSize: "379148 B",
            imageId: "C39EB9F91C7A2F7884D1986F10278C23BB22E749",
            hostPageDisplayUrl:
              "https://www.theodysseyonline.com/28-of-the-cutest-baby-animals",
            encodingFormat: "jpeg",
          },
          {
            accentColor: "#856C46",
            width: 800,
            hostPageDisplayUrl:
              "smileupmanallfunny.blogspot.com/2012/07/animals-in-australia.html",
            name: "Blog not found",
            contentUrl:
              "http://2.bp.blogspot.com/-YByxCqmtR7Q/UAGmctRjE1I/AAAAAAAAD1M/RqN2DftKE6s/s1600/animals-in-australia.jpg",
            hostPageUrl:
              "http://smileupmanallfunny.blogspot.com/2012/07/animals-in-australia.html",
            encodingFormat: "jpeg",
            height: 1196,
            imageId: "A1514BF8A440AACE9B377E98A7A2281CBE309F6F",
            contentSize: "71957 B",
          },
        ],
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684937387/aishortz/a0daa6f2dcdf07ae6b2b26b2eb7167ffe5d176ae12d7a4ae554d2624beb95d46/en-US-Standard-D-03d5439636700bdb444e5a4f30fe799a.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684937387/aishortz/a0daa6f2dcdf07ae6b2b26b2eb7167ffe5d176ae12d7a4ae554d2624beb95d46/en-US-Standard-F-03d5439636700bdb444e5a4f30fe799a.wav",
          ],
          durations: [15.58675, 16.231958],
        },
        talkingPoint:
          "In this video, we will take a look at 10 amazing animals you won't believe exist! From the fascinating creatures of the forest, to the giants of the ocean and the iconic animals of the Arctic, get ready to be amazed by the incredible diversity of our planet's wildlife.",
      },
      table: {
        voiceAudio: {
          urls: ["", ""],
          durations: [0, 0],
        },
        table: "",
        summary: "",
        isPresent: false,
      },
      videoSections: [
        {
          talkingPoint:
            "Let's start with the animals of the forest. Did you know that there are over 1 million known species of animals in the world and a large number of them live in the forest? From majestic tigers to tiny insects, the forest is a hub of biodiversity.",
          voiceAudio: {
            durations: [15.720833, 16.035458],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684937378/aishortz/a0daa6f2dcdf07ae6b2b26b2eb7167ffe5d176ae12d7a4ae554d2624beb95d46/en-US-Standard-D-412d3bf6f37c897bf36652c26b1503c5.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684937378/aishortz/a0daa6f2dcdf07ae6b2b26b2eb7167ffe5d176ae12d7a4ae554d2624beb95d46/en-US-Standard-F-412d3bf6f37c897bf36652c26b1503c5.wav",
            ],
          },
          images: [
            {
              width: 1033,
              hostPageDisplayUrl:
                "https://sigurdurnordal.org/2018/01/05/photographer-captures-enchanting-photos-of...",
              encodingFormat: "jpeg",
              height: 1291,
              hostPageUrl:
                "https://sigurdurnordal.org/2018/01/05/photographer-captures-enchanting-photos-of-finlands-forest-animals-in-the-wild/",
              name: "Photographer Captures Enchanting Photos of Finland’s Forest Animals in the Wild – Sig Nordal, Jr.",
              accentColor: "#A1552A",
              contentUrl:
                "https://mymodernmet.com/wp/wp-content/uploads/2018/01/forest-animals-photography-joachim-munter-12.jpg",
              contentSize: "82279 B",
              imageId: "3E24563BE2220AE39A6C781E8A03D65209EEB97F",
            },
            {
              contentUrl:
                "https://mymodernmet.com/wp/wp-content/uploads/2018/01/forest-animals-photography-joachim-munter-20.jpg",
              imageId: "0BF29210F0001536B4A10CF1E537D1EB1969E266",
              hostPageDisplayUrl:
                "https://mymodernmet.com/joachim-munter-finland-forest-animal-photos/3",
              contentSize: "168470 B",
              hostPageUrl:
                "https://mymodernmet.com/joachim-munter-finland-forest-animal-photos/3/",
              width: 1080,
              height: 1350,
              encodingFormat: "jpeg",
              accentColor: "#956536",
              name: "Photos Capture Finland’s Fairytale Forest Animals in the Wild",
            },
            {
              contentSize: "99795 B",
              name: "Photographer Captures Enchanting Photos of Finland’s Forest Animals",
              contentUrl:
                "https://mymodernmet.com/wp/wp-content/uploads/2019/01/forest-animals-photography-ossi-saarinen-8.jpg",
              imageId: "2311B0AE2C0A7E92CA5D219E186F4504FD331DD1",
              hostPageDisplayUrl:
                "https://mymodernmet.com/ossi-saarinen-finland-fairy-forest-animals",
              height: 938,
              width: 750,
              accentColor: "#A0652B",
              hostPageUrl:
                "https://mymodernmet.com/ossi-saarinen-finland-fairy-forest-animals/",
              encodingFormat: "jpeg",
            },
          ],
          title: "Animals of the Forest",
        },
        {
          images: [
            {
              hostPageUrl:
                "http://www.chimuadventures.com/blog/2016/02/sloths-fun-facts/",
              encodingFormat: "jpeg",
              imageId: "20574EB33C25989BA9F6383C90B62A7AE2FFCC7F",
              contentSize: "1860235 B",
              height: 1532,
              name: "Sloths: 10 fun facts that will make you giggle",
              contentUrl:
                "http://www.chimuadventures.com/blog/wp-content/uploads/2016/02/shutterstock_157876628.jpg",
              hostPageDisplayUrl:
                "www.chimuadventures.com/blog/2016/02/sloths-fun-facts",
              accentColor: "#456814",
              width: 2730,
            },
            {
              imageId: "97E638C9D9BF6CE4D5AE506C9241B467D46E3497",
              hostPageDisplayUrl:
                "www.rainforestcruises.com/jungle-blog/sloths-in-the-amazon-rainforest",
              name: "Sloths in the Amazon Rainforest — Rainforest Cruises",
              hostPageUrl:
                "http://www.rainforestcruises.com/jungle-blog/sloths-in-the-amazon-rainforest",
              contentSize: "1256714 B",
              encodingFormat: "png",
              contentUrl:
                "http://static1.squarespace.com/static/5388e453e4b0813d343199fc/t/561be1bce4b0bd8065586df8/1444667844389/three-toed+sloth",
              width: 1000,
              height: 664,
              accentColor: "#9A6831",
            },
            {
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://www.factinate.com/things/42-slow-facts-sloths/2/",
              width: 3456,
              contentSize: "1484092 B",
              accentColor: "#6B841D",
              name: "42 Slow Facts About Sloths - Page 2 of 42",
              imageId: "8E40349B0369FFF9183AA1819025640CB6357F09",
              height: 2592,
              hostPageDisplayUrl:
                "https://www.factinate.com/things/42-slow-facts-sloths/2",
              contentUrl:
                "https://www.factinate.com/wp-content/uploads/2017/12/aaaaaaaaaaaaa.jpg",
            },
          ],
          title: "Fascinating Sloths",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684937378/aishortz/a0daa6f2dcdf07ae6b2b26b2eb7167ffe5d176ae12d7a4ae554d2624beb95d46/en-US-Standard-D-76e33eeee066c76c4b9b78a192a97b28.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684937378/aishortz/a0daa6f2dcdf07ae6b2b26b2eb7167ffe5d176ae12d7a4ae554d2624beb95d46/en-US-Standard-F-76e33eeee066c76c4b9b78a192a97b28.wav",
            ],
            durations: [12.827417, 13.102125],
          },
          talkingPoint:
            "One of the most fascinating animals in the forest is the sloth. These slow-moving creatures spend most of their lives hanging upside down from trees and can even sleep for up to 20 hours a day!",
        },
        {
          title: "Colorful Toucans",
          voiceAudio: {
            durations: [13.396333, 13.568542],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684937378/aishortz/a0daa6f2dcdf07ae6b2b26b2eb7167ffe5d176ae12d7a4ae554d2624beb95d46/en-US-Standard-D-a2119f847ede14b1841bcf149acffba4.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684937378/aishortz/a0daa6f2dcdf07ae6b2b26b2eb7167ffe5d176ae12d7a4ae554d2624beb95d46/en-US-Standard-F-a2119f847ede14b1841bcf149acffba4.wav",
            ],
          },
          talkingPoint:
            "Another interesting animal found in the forest is the toucan. Known for their brightly colored beaks, these birds are excellent at hunting for food and can even fly through the densest parts of the forest with ease.",
          images: [
            {
              hostPageUrl:
                "https://www.reddit.com/r/NatureIsFuckingLit/comments/a30kt0/a_colorful_toucan/",
              accentColor: "#84C008",
              encodingFormat: "jpeg",
              name: "🔥 A colorful Toucan 🔥 : r/NatureIsFuckingLit",
              contentSize: "184517 B",
              width: 2048,
              imageId: "173BBDD6A8E56D078C82DD3F158098039181F1E5",
              height: 1536,
              contentUrl: "https://i.redd.it/t2g9w1l4h9221.jpg",
              hostPageDisplayUrl:
                "https://www.reddit.com/r/NatureIsFuckingLit/comments/a30kt0/a_colorful_toucan",
            },
            {
              encodingFormat: "jpeg",
              name: "Toucans. Colorful Bird In Pictures - ELSOAR",
              accentColor: "#B4B217",
              hostPageDisplayUrl:
                "photo.elsoar.com/toucans-colorful-bird-pictures.html",
              width: 1600,
              height: 1582,
              imageId: "EC23E96AED886BCC9AA288B7ABE7086A814F636E",
              contentSize: "684118 B",
              contentUrl:
                "http://photo.elsoar.com/wp-content/images/Colored-Toucan.-Keel-Billed-Toucan-from-Central-America.jpg",
              hostPageUrl:
                "http://photo.elsoar.com/toucans-colorful-bird-pictures.html",
            },
            {
              name: "Nature is amazing ! The vivid colours of this toucan are incredible. We found this Toco Toucan ...",
              height: 2048,
              width: 2045,
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://www.pinterest.com.mx/pin/637681628467460818",
              imageId: "57BA1F234159ED0EDF3C6C3D1915964205945B9A",
              contentUrl:
                "https://i.pinimg.com/originals/e0/4c/35/e04c3510d629b7305cef78f68ae261e8.jpg",
              contentSize: "600416 B",
              accentColor: "#BFA30C",
              hostPageUrl:
                "https://www.pinterest.com.mx/pin/637681628467460818/",
            },
          ],
        },
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684937378/aishortz/a0daa6f2dcdf07ae6b2b26b2eb7167ffe5d176ae12d7a4ae554d2624beb95d46/en-US-Standard-D-bfb37f3a046549f03ed8e54f7e1662d9.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684937378/aishortz/a0daa6f2dcdf07ae6b2b26b2eb7167ffe5d176ae12d7a4ae554d2624beb95d46/en-US-Standard-F-bfb37f3a046549f03ed8e54f7e1662d9.wav",
            ],
            durations: [13.285167, 13.768333],
          },
          talkingPoint:
            "Moving on to the ocean, did you know that the blue whale is the largest animal on earth? These gentle giants can grow up to 100 feet in length and weigh as much as 200 tons!",
          images: [
            {
              contentUrl:
                "https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/11/640/320/1862/1048/blue-whale-getty-images.jpg?ve=1&tl=1?ve=1&tl=1",
              width: 1862,
              hostPageDisplayUrl:
                "https://www.foxnews.com/science/a-blue-whale-had-his-heartbeat-taken-for-the-first-time...",
              contentSize: "212116 B",
              imageId: "C365694B3EC0FF8910043355749F92D05BF276D3",
              hostPageUrl:
                "https://www.foxnews.com/science/a-blue-whale-had-his-heartbeat-taken-for-the-first-time-ever-and-scientists-are-shocked",
              height: 1048,
              accentColor: "#1098BB",
              name: "A blue whale had his heartbeat taken for the first time ever — and scientists are shocked | Fox News",
              encodingFormat: "jpeg",
            },
            {
              name: "5 of the Biggest Animals on Earth | Fun Animals Wiki, Videos, Pictures, Stories",
              encodingFormat: "jpeg",
              hostPageUrl:
                "http://animaltheory.blogspot.com/2014/08/5-of-biggest-animals-on-earth.html",
              contentSize: "94832 B",
              imageId: "27FB04D6AAAD69D391AEE9D37E7BF350C16876F5",
              hostPageDisplayUrl:
                "animaltheory.blogspot.com/2014/08/5-of-biggest-animals-on-earth.html",
              width: 1600,
              contentUrl:
                "http://2.bp.blogspot.com/-DDrHaqaWsfM/U_thLmR9ARI/AAAAAAAAS_4/FvRpXbV_Qa8/s1600/blue%2Bwhale.jpg",
              height: 534,
              accentColor: "#0F4C7C",
            },
            {
              width: 1024,
              contentSize: "96153 B",
              contentUrl:
                "http://4.bp.blogspot.com/-Ut3tcyyf0Po/UQaCYrk323I/AAAAAAAAAg0/7ORfx-73h9Y/s1600/blue-whale.jpg",
              imageId: "442907A3E10AA5A08784DB72D66B1C72B170EE99",
              hostPageDisplayUrl:
                "fantasticaanimal.blogspot.com/2013/01/blue-whale-biggest-animal-in-world.html",
              name: "Fantastica Animal: Blue Whale The Biggest Animal in World",
              accentColor: "#2267A9",
              height: 768,
              encodingFormat: "jpeg",
              hostPageUrl:
                "http://fantasticaanimal.blogspot.com/2013/01/blue-whale-biggest-animal-in-world.html",
            },
          ],
          title: "Largest Animal on Earth - The Blue Whale",
        },
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684937378/aishortz/a0daa6f2dcdf07ae6b2b26b2eb7167ffe5d176ae12d7a4ae554d2624beb95d46/en-US-Standard-D-f45190305c9b4a5d5dea8d60e7b36566.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684937378/aishortz/a0daa6f2dcdf07ae6b2b26b2eb7167ffe5d176ae12d7a4ae554d2624beb95d46/en-US-Standard-F-f45190305c9b4a5d5dea8d60e7b36566.wav",
            ],
            durations: [19.033792, 19.699958],
          },
          talkingPoint:
            "Finally, let's talk about animals in the Arctic. One of the most iconic animals of the Arctic is the polar bear. These majestic creatures are perfectly adapted to the harsh environment of the Arctic and are excellent swimmers, able to swim for hours at a time in search of food.",
          images: [
            {
              encodingFormat: "jpeg",
              accentColor: "#4C6F7F",
              contentUrl:
                "https://wwf.ca/wp-content/uploads/2020/02/Polar-bear-climbing-on-ice-%C2%A9-Richard-Barrett-_-WWF-UK-scaled-e1583271103647-1024x591.jpg",
              imageId: "D931393490435A2091A6368DA76C09D31AD27C3C",
              name: "Canada’s 10 most iconic animals - WWF.CA",
              height: 591,
              hostPageDisplayUrl:
                "https://wwf.ca/stories/canadas-10-most-iconic-animals",
              hostPageUrl:
                "https://wwf.ca/stories/canadas-10-most-iconic-animals/",
              contentSize: "43770 B",
              width: 1024,
            },
            {
              contentUrl:
                "https://www.arenapile.com/wp-content/uploads/2017/10/Polar-Bear.jpg",
              hostPageUrl:
                "https://arenapile.blogspot.com/2017/10/top-10-most-famous-arctic-animals.html",
              contentSize: "2202566 B",
              height: 1575,
              accentColor: "#377794",
              imageId: "FC3BE8DD8F1F68F0E7C8F4E230AA0554CEC2A041",
              hostPageDisplayUrl:
                "https://arenapile.blogspot.com/2017/10/top-10-most-famous-arctic-animals.html",
              name: "Top 10 Most Famous Arctic Animals - ArenaPile",
              encodingFormat: "jpeg",
              width: 2800,
            },
            {
              height: 1000,
              width: 1500,
              imageId: "B743B9CCF10A5FF7272FED7B7A0EE9575CD72E84",
              hostPageDisplayUrl:
                "www.sciencetimes.com/articles/26541/20200720/polar-bears-could-be-extinct-by-2100...",
              contentSize: "338005 B",
              name: "Polar Bears Could Be Extinct by 2100, Climate Change to Blame | Science Times",
              encodingFormat: "jpeg",
              hostPageUrl:
                "http://www.sciencetimes.com/articles/26541/20200720/polar-bears-could-be-extinct-by-2100-climate-change-to-blame.htm",
              contentUrl:
                "https://1721181113.rsc.cdn77.org/data/images/full/28529/polar-bear-extinction.jpg",
              accentColor: "#4B5E80",
            },
          ],
          title: "Iconic Arctic Animal - The Polar Bear",
        },
      ],
      outro: {
        voiceAudio: {
          durations: [14.92275, 15.618917],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684937385/aishortz/a0daa6f2dcdf07ae6b2b26b2eb7167ffe5d176ae12d7a4ae554d2624beb95d46/en-US-Standard-D-b37b04228656532c51a390690f6303e1.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684937385/aishortz/a0daa6f2dcdf07ae6b2b26b2eb7167ffe5d176ae12d7a4ae554d2624beb95d46/en-US-Standard-F-b37b04228656532c51a390690f6303e1.wav",
          ],
        },
        talkingPoint:
          "Thanks for watching! If you enjoyed learning about these fascinating animals, be sure to check out our other recommended videos on wildlife and biodiversity. Don't forget to like and share this video, and consider subscribing to our channel for more exciting content.",
      },
    },
    status: "SUCCESS",
    error: "",
    userId: "user_2QF5wnFO2ogXOfzwbezKNVqNR1U",
  },
  {
    creditType: "free",
    referenceData: "Anything you want to add if you want to add",
    uniqueId:
      "c3e3ed3802959a7daf2fbd79633900547e92f58e1fa1e7360f2704437260cca8",
    isPublic: false,
    prompt: "Make a video about Bread with hot sauce and beef to make burger",
    createdAt: "Fri Jun 23 2023",
    render: {
      url: "",
      error: "",
      msg: "Render not initiated yet.",
      status: "PENDING",
    },
    userId: "user_2RcNRHrAIDQNR1C7MCoOEROA5Uh",
    metadata: {
      color: {
        accentColor: "#ff0000",
        gradientEndColor: "#ffff00",
        gradientStartColor: "#ff0000",
      },
      description:
        "This video will showcase an easy-to-follow recipe on how to make a mouth-watering burger using sliced bread, spicy hot sauce, and juicy beef. The recipe will cover making the burger patty, toasting the bread and assembling these ingredients together. The video will also present some interesting facts about how the combination of bread, hot sauce, and beef can make a delicious meal that can be enjoyed in many different ways.",
      height: 1080,
      topic: "How to make a delicious burger using bread, hot sauce, and beef",
      durationInSeconds: 300,
      title: "How to make a Delicious Burger with Bread",
      width: 1920,
      style: "fun",
    },
    message: "Video created successfully!",
    error: "",
    data: {
      table: {
        voiceAudio: {
          urls: ["", ""],
          durations: [0, 0],
        },
        table: "",
        isPresent: false,
        summary: "",
      },
      outro: {
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598220/aishortz/c3e3ed3802959a7daf2fbd79633900547e92f58e1fa1e7360f2704437260cca8/en-US-Standard-D-793230e4bec89777f9fe78704fd55424.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598220/aishortz/c3e3ed3802959a7daf2fbd79633900547e92f58e1fa1e7360f2704437260cca8/en-US-Standard-F-793230e4bec89777f9fe78704fd55424.wav",
          ],
          durations: [14.226167, 14.87375],
        },
        talkingPoint:
          "Thanks for joining us in making this delicious burger! Don't forget to like and share the video and subscribe to our channel for more mouth-watering recipes. If you enjoyed this video, check out our recommendations for similar content. Happy cooking!",
      },
      intro: {
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598220/aishortz/c3e3ed3802959a7daf2fbd79633900547e92f58e1fa1e7360f2704437260cca8/en-US-Standard-D-07891629765b5e99a25510f3ff84ca76.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598221/aishortz/c3e3ed3802959a7daf2fbd79633900547e92f58e1fa1e7360f2704437260cca8/en-US-Standard-F-07891629765b5e99a25510f3ff84ca76.wav",
          ],
          durations: [23.4045, 24.29],
        },
        talkingPoint:
          "In this video, we will showcase an easy-to-follow recipe on how to make a mouth-watering burger using sliced bread, spicy hot sauce, and juicy beef. We will cover everything from making the burger patty to toasting the bread and assembling all the ingredients together. Join us as we explore how the combination of bread, hot sauce, and beef can make a delicious meal that can be enjoyed in many different ways.",
        images: [
          {
            imageId: "0654C87492AA14B82101FF0221A24CB5870E94F5",
            accentColor: "#A47527",
            contentSize: "97054 B",
            width: 768,
            contentUrl:
              "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/905610-1-eng-GB_burger.jpg",
            hostPageDisplayUrl:
              "https://www.deliciousmagazine.co.uk/recipes/the-ultimate-beef-burgers",
            name: "The ultimate beef burgers recipe | delicious. magazine",
            encodingFormat: "jpeg",
            hostPageUrl:
              "https://www.deliciousmagazine.co.uk/recipes/the-ultimate-beef-burgers/",
            height: 960,
          },
          {
            hostPageUrl: "https://www.pinterest.com/pin/452822937516309043/",
            name: "Spicy beef burger recipe | Jamie Oliver burger recipe | Recipe | Burger recipes beef, Food, Beef ...",
            contentUrl:
              "https://i.pinimg.com/originals/d4/27/28/d4272828d49f7506df404a0522c331af.jpg",
            width: 767,
            imageId: "B23627DC42926841ABAEE5DAA7594EEFF3226F84",
            height: 1025,
            encodingFormat: "jpeg",
            hostPageDisplayUrl:
              "https://www.pinterest.com/pin/452822937516309043",
            contentSize: "122872 B",
            accentColor: "#A36F28",
          },
          {
            name: "Homemade Hamburgers | Turkey, Beef & Pork for Triple the Flavor!",
            imageId: "D88789CD1F422F93BD93FEFC769C52CE65459EE4",
            contentSize: "264268 B",
            contentUrl:
              "https://youcanliverichonless.com/wp-content/uploads/2015/09/triple-flavor-burgers-feature-693x1024.png",
            accentColor: "#B0751B",
            height: 1024,
            hostPageDisplayUrl:
              "https://perfectpiesandpastry.com/three-meat-homemade-hamburgers",
            hostPageUrl:
              "https://perfectpiesandpastry.com/three-meat-homemade-hamburgers/",
            encodingFormat: "png",
            width: 693,
          },
        ],
      },
      videoSections: [
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598220/aishortz/c3e3ed3802959a7daf2fbd79633900547e92f58e1fa1e7360f2704437260cca8/en-US-Standard-D-ec3b74318fcc5dbfa1d9bd439187f366.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598220/aishortz/c3e3ed3802959a7daf2fbd79633900547e92f58e1fa1e7360f2704437260cca8/en-US-Standard-F-ec3b74318fcc5dbfa1d9bd439187f366.wav",
            ],
            durations: [18.570292, 19.633],
          },
          title: "Choosing high-quality ground beef",
          talkingPoint:
            "Hey there burger lovers! Today, we're making a delicious burger using bread, hot sauce, and beef. First, let's start with the beef. Make sure you choose a high-quality ground beef with at least 80% lean meat. This will ensure that your burger is juicy and flavorful.",
          images: [
            {
              name: "Ground Beef – Excel Fresh Meats",
              contentSize: "430867 B",
              contentUrl:
                "https://excelfreshmeats.com/wp-content/uploads/2016/10/Ground-Beef-80-Lean-high-res.jpg",
              accentColor: "#48090D",
              hostPageDisplayUrl:
                "https://excelfreshmeats.com/products/ground-beef",
              encodingFormat: "jpeg",
              width: 6134,
              height: 4600,
              imageId: "B5A16D5B59CE6ED82E772089E57FB91D93BA318F",
              hostPageUrl: "https://excelfreshmeats.com/products/ground-beef/",
            },
            {
              width: 474,
              contentUrl:
                "https://stevesmeat.com/wp-content/uploads/2015/06/Ground-Beef-500x500.jpg",
              name: "Quality Ground Beef | Steves Meat Market | De Soto Kansas",
              hostPageDisplayUrl: "https://stevesmeat.com/shop/ground-beef",
              height: 474,
              accentColor: "#99B912",
              contentSize: "37750 B",
              hostPageUrl: "https://stevesmeat.com/shop/ground-beef/",
              imageId: "AA1598C11478B03491FAEABA592F67063B7282EE",
              encodingFormat: "jpeg",
            },
            {
              contentUrl:
                "http://photos.demandstudios.com/getty/article/235/102/184736356.jpg",
              contentSize: "1738657 B",
              accentColor: "#96AC1F",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://adellatheitheave.blogspot.com/2021/08/ground-beef-for-diabetics-magically.html",
              width: 2122,
              hostPageDisplayUrl:
                "https://adellatheitheave.blogspot.com/2021/08/ground-beef-for-diabetics-magically.html",
              height: 1415,
              name: "Ground Beef For Diabetics - Magically Delicious Low-Carb Ground Beef Recipes ...",
              imageId: "4C40160C587F08AD2BCA7AB466A61143CAB2C6BE",
            },
          ],
        },
        {
          images: [
            {
              contentSize: "2055873 B",
              name: "The newest addition to my collection from Heat Hot Sauce. : hotsauce",
              height: 3024,
              hostPageUrl:
                "https://www.reddit.com/r/hotsauce/comments/5gxco4/the_newest_addition_to_my_collection_from_heat/",
              accentColor: "#B63D15",
              contentUrl:
                "https://external-preview.redd.it/VOBJLoAkvKta2nSD-a--PpRlwuKxrd4alGKp-84BRio.jpg?auto=webp&s=ea16d5a5316ba52e89bd9b56ba5560401e2ea8a1",
              encodingFormat: "jpeg",
              width: 4032,
              hostPageDisplayUrl:
                "https://www.reddit.com/r/hotsauce/comments/5gxco4/the_newest_addition_to_my_collection...",
              imageId: "D5475DF79E89D21657CD707BF08FF0F2B094DFCA",
            },
            {
              accentColor: "#B53B16",
              width: 1080,
              height: 1080,
              name: "Bring the Heat Hot Sauce Gift Set – Cantina Royal Hot Sauce",
              imageId: "9B3A25B12FC3C0D880A9BE55EAC26934BE4C0C59",
              contentSize: "91621 B",
              hostPageUrl:
                "https://cantinaroyalhotsauce.com/products/bring-the-heat-hot-sauce-4-pack",
              contentUrl:
                "https://cdn.shopify.com/s/files/1/1800/5281/products/4Pack_1024x1024@2x.jpg?v=1613109648",
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://cantinaroyalhotsauce.com/products/bring-the-heat-hot-sauce-4-pack",
            },
            {
              contentSize: "1268646 B",
              encodingFormat: "jpeg",
              name: "Nashville Heat Sauces Mixed Casex12 | nashvilleheatsauces",
              accentColor: "#BA5511",
              hostPageDisplayUrl:
                "https://www.nashvilleheatsauces.com/product-page/nashville-heat-sauces-mixed-casex12",
              height: 2184,
              width: 3275,
              contentUrl:
                "https://static.wixstatic.com/media/9d980e_2bb0d6720622402e984ceae889a8c459~mv2_d_3275_2184_s_2.jpg/v1/fill/w_3275,h_2184,al_c,q_85/9d980e_2bb0d6720622402e984ceae889a8c459~mv2_d_3275_2184_s_2.jpg",
              hostPageUrl:
                "https://www.nashvilleheatsauces.com/product-page/nashville-heat-sauces-mixed-casex12",
              imageId: "2B8E50ECF878533A9E0C71BA42FE035CDBE6B434",
            },
          ],
          talkingPoint:
            "Next, it's time to add some heat to our burger. We'll be using hot sauce to give our burger a kick. You can choose your favorite hot sauce or make your own by mixing together some chili peppers, vinegar, and spices. Be careful not to add too much hot sauce though, as it can overpower the other flavors.",
          title: "Adding heat with hot sauce",
          voiceAudio: {
            durations: [19.334, 20.679333],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598220/aishortz/c3e3ed3802959a7daf2fbd79633900547e92f58e1fa1e7360f2704437260cca8/en-US-Standard-D-45385ad6b4494eb705ec9439a27c7adb.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598220/aishortz/c3e3ed3802959a7daf2fbd79633900547e92f58e1fa1e7360f2704437260cca8/en-US-Standard-F-45385ad6b4494eb705ec9439a27c7adb.wav",
            ],
          },
        },
        {
          talkingPoint:
            "Now, let's talk about the bread. A burger is only as good as its bun, so make sure you choose a high-quality bun that's sturdy enough to hold all the ingredients. You can use a classic sesame seed bun or try something different like a brioche or pretzel bun. Toast the bun lightly to give it a nice crunch.",
          images: [
            {
              imageId: "A4435A9C9BDD5C8D4358A72D4031FAC8B48BED28",
              accentColor: "#946137",
              encodingFormat: "jpeg",
              contentSize: "106853 B",
              contentUrl:
                "https://i.pinimg.com/originals/4c/97/18/4c9718a7ba3742494e155949bb18c1f3.jpg",
              name: "How To Make Sourdough Brioche Burger Buns - Bread By Elise | Recipe | Burger buns, Burger, Brioche",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/how-to-make-sourdough-brioche-burger-buns-bread-by-elise...",
              height: 1104,
              width: 736,
              hostPageUrl:
                "https://www.pinterest.com/pin/how-to-make-sourdough-brioche-burger-buns-bread-by-elise--425519864801739617/",
            },
            {
              contentSize: "72820 B",
              height: 1104,
              hostPageUrl:
                "https://www.pinterest.com/pin/how-to-make-sourdough-brioche-burger-buns-bread-by-elise--645351821613556814/",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/how-to-make-sourdough-brioche-burger-buns-bread-by-elise...",
              name: "How To Make Sourdough Brioche Burger Buns - Bread By Elise | Recipe | Burger buns, Sourdough, Bread",
              accentColor: "#AC7E1F",
              contentUrl:
                "https://i.pinimg.com/originals/26/8d/0a/268d0a0d24bebf601f4d3fe60b5c92d9.jpg",
              encodingFormat: "jpeg",
              imageId: "3DA9FCE2D2F171D531E34DDB1904305983A194F4",
              width: 736,
            },
            {
              encodingFormat: "jpeg",
              contentUrl:
                "https://www.savorysimple.net/v1/wp-content/uploads/2014/01/web-Pretzel-Rolls-2-028.jpg",
              imageId: "709D0FF2B89EC84915D12B1701F2580EFACF618E",
              name: "Perfect Chewy Pretzel Buns Recipe {Easy} - Savory Simple",
              contentSize: "132391 B",
              height: 906,
              hostPageUrl: "https://www.savorysimple.net/pretzel-buns/",
              accentColor: "#783D10",
              width: 600,
              hostPageDisplayUrl: "https://www.savorysimple.net/pretzel-buns",
            },
          ],
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598220/aishortz/c3e3ed3802959a7daf2fbd79633900547e92f58e1fa1e7360f2704437260cca8/en-US-Standard-D-346bb26fcc88f22641f9842416286e64.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598220/aishortz/c3e3ed3802959a7daf2fbd79633900547e92f58e1fa1e7360f2704437260cca8/en-US-Standard-F-346bb26fcc88f22641f9842416286e64.wav",
            ],
            durations: [20.436167, 21.10725],
          },
          title: "Selecting a sturdy and flavorful bun",
        },
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598220/aishortz/c3e3ed3802959a7daf2fbd79633900547e92f58e1fa1e7360f2704437260cca8/en-US-Standard-D-26df29433348c2e1cc25b27e0c9fe46f.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598220/aishortz/c3e3ed3802959a7daf2fbd79633900547e92f58e1fa1e7360f2704437260cca8/en-US-Standard-F-26df29433348c2e1cc25b27e0c9fe46f.wav",
            ],
            durations: [18.371083, 18.792875],
          },
          talkingPoint:
            "It's time to assemble our burger! Start by shaping the beef into patties that are slightly larger than the diameter of your bun. Season the patties with salt and pepper and grill them to your desired level of doneness. Once the patties are cooked, place them on the bottom half of the bun.",
          images: [
            {
              hostPageDisplayUrl:
                "https://www.dreamstime.com/variety-raw-beef-meat-steaks-grilling-seasoning-utensils...",
              encodingFormat: "jpeg",
              name: "Variety of Raw Beef Meat Steaks for Grilling with Seasoning and Utensils Stock Image - Image of ...",
              contentUrl:
                "https://thumbs.dreamstime.com/z/variety-raw-beef-meat-steaks-grilling-seasoning-utensils-dark-rustic-board-179732101.jpg",
              imageId: "D9F9B8EE70094F12B5E716A2518784D016C32CA0",
              hostPageUrl:
                "https://www.dreamstime.com/variety-raw-beef-meat-steaks-grilling-seasoning-utensils-dark-rustic-board-image179732101",
              width: 1600,
              accentColor: "#1178AF",
              height: 790,
              contentSize: "214438 B",
            },
            {
              hostPageUrl:
                "https://www.dreamstime.com/variety-raw-beef-meat-steaks-grilling-seasoning-utensils-dark-rustic-board-image179732782",
              height: 1046,
              width: 1600,
              name: "Variety of Raw Beef Meat Steaks for Grilling with Seasoning and Utensils Stock Photo - Image of ...",
              contentUrl:
                "https://thumbs.dreamstime.com/z/variety-raw-beef-meat-steaks-grilling-seasoning-utensils-dark-rustic-board-179732782.jpg",
              contentSize: "272965 B",
              imageId: "8AE30DC7AC0B9C2566E9DE7EE39DC61BBFE67593",
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://www.dreamstime.com/variety-raw-beef-meat-steaks-grilling-seasoning-utensils...",
              accentColor: "#1178AF",
            },
            {
              accentColor: "#1178AF",
              width: 1600,
              encodingFormat: "jpeg",
              contentSize: "212570 B",
              imageId: "8705BEA6BA8DD84E76FF1B44B89173B08998341B",
              hostPageDisplayUrl:
                "https://www.dreamstime.com/variety-raw-beef-meat-steaks-grilling-seasoning-utensils...",
              hostPageUrl:
                "https://www.dreamstime.com/variety-raw-beef-meat-steaks-grilling-seasoning-utensils-dark-rustic-board-image179732049",
              name: "Variety of Raw Beef Meat Steaks for Grilling with Seasoning and Utensils Stock Image - Image of ...",
              height: 779,
              contentUrl:
                "https://thumbs.dreamstime.com/z/variety-raw-beef-meat-steaks-grilling-seasoning-utensils-dark-rustic-board-179732049.jpg",
            },
          ],
          title: "Grilling and seasoning the beef",
        },
        {
          title: "Assembling the burger with hot sauce and toppings",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598220/aishortz/c3e3ed3802959a7daf2fbd79633900547e92f58e1fa1e7360f2704437260cca8/en-US-Standard-D-2a124d88b2f06386c6f7a60724d798b3.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598220/aishortz/c3e3ed3802959a7daf2fbd79633900547e92f58e1fa1e7360f2704437260cca8/en-US-Standard-F-2a124d88b2f06386c6f7a60724d798b3.wav",
            ],
            durations: [17.078542, 18.060292],
          },
          images: [
            {
              hostPageUrl: "https://www.pinterest.com/pin/385268943093711085/",
              width: 736,
              imageId: "9377D7CEDC671C1816AAE64DB37CCA41578A627F",
              contentSize: "91855 B",
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/385268943093711085",
              name: "How to build the perfect burger: a graphical depiction of acceptable toppings | Burger toppings ...",
              accentColor: "#BC780F",
              height: 736,
              contentUrl:
                "https://i.pinimg.com/736x/ca/fb/5d/cafb5d510acfa558a0512bb8c94796ac--perfect-hamburger-how-to-build.jpg",
            },
            {
              name: "The Best Order to Stack Your Burger Toppings - Distinguish manhood",
              hostPageDisplayUrl:
                "https://distinguishmanhood.blogspot.com/2021/06/the-best-order-to-stack-your-burger.html",
              contentSize: "665509 B",
              height: 1450,
              hostPageUrl:
                "https://distinguishmanhood.blogspot.com/2021/06/the-best-order-to-stack-your-burger.html",
              contentUrl:
                "https://content.artofmanliness.com/uploads/2021/05/Stack-Burger-Toppings-1.jpg",
              encodingFormat: "jpeg",
              width: 1200,
              accentColor: "#B29119",
              imageId: "A089BE78BC543F1147527CBADFC01A1A43077211",
            },
            {
              hostPageUrl:
                "https://photostockeditor.com/image/burger-person-assembling-cheese-and-patty-burger-human-25282",
              contentSize: "62575 B",
              encodingFormat: "jpeg",
              accentColor: "#B59E16",
              width: 675,
              name: "Burger Person Assembling Cheese And Patty Burger Human Image Free Photo",
              imageId: "37BF6BB9A3928C5900760E63DCB02964262A2B39",
              contentUrl:
                "https://cdn2.photostockeditor.com/c/2612/food-person-assembling-cheese-and-patty-burger-burger-burger-image.jpg",
              height: 1200,
              hostPageDisplayUrl:
                "https://photostockeditor.com/image/burger-person-assembling-cheese-and-patty-burger...",
            },
          ],
          talkingPoint:
            "Finally, it's time to add the hot sauce. Drizzle a small amount of hot sauce over the top of the patty, then add your favorite toppings like cheese, lettuce, tomato, and onion. Place the top half of the bun on the burger and enjoy!",
        },
      ],
    },
    status: "SUCCESS",
  },
  {
    data: {
      outro: {
        talkingPoint:
          "Thanks for watching. If you're interested in learning more about sustainable business practices, check out our recommended videos in the playlist. Don't forget to like, share, and subscribe to our channel for more high-quality content on environmental stewardship, social responsibility, and ethical supply chain management.",
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685211847/aishortz/cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8/en-US-Standard-D-f5056cb27d4afa72e8caec7d453cc154.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685211847/aishortz/cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8/en-US-Standard-F-f5056cb27d4afa72e8caec7d453cc154.wav",
          ],
          durations: [18.206042, 19.592583],
        },
      },
      videoSections: [
        {
          talkingPoint:
            "Environmental Stewardship: Companies should minimize their carbon footprint by reducing greenhouse gas emissions, managing waste responsibly, and reducing water usage. The use of renewable energy should be maximized.",
          voiceAudio: {
            durations: [15.16675, 15.602833],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685211844/aishortz/cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8/en-US-Standard-D-393c2d36426ee9ad53ada56b97fa0506.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685211844/aishortz/cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8/en-US-Standard-F-393c2d36426ee9ad53ada56b97fa0506.wav",
            ],
          },
          title: "Environmental Stewardship",
          images: [
            {
              imageId: "8315F5DE2FE467CED2FAAC5B2AEF4B65963B0D86",
              hostPageDisplayUrl:
                "www.slideserve.com/timon-boyer/environmental-stewardship",
              name: "PPT - Environmental Stewardship PowerPoint Presentation - ID:6832432",
              contentUrl:
                "http://image3.slideserve.com/6832432/environmental-stewardship-n.jpg",
              hostPageUrl:
                "http://www.slideserve.com/timon-boyer/environmental-stewardship",
              width: 720,
              contentSize: "47932 B",
              encodingFormat: "jpeg",
              height: 540,
              accentColor: "#043804",
            },
            {
              accentColor: "#209DAB",
              contentSize: "2067994 B",
              imageId: "94FE03ECB22D67FF8CFB01BEC2439E6FEE803593",
              contentUrl:
                "https://greeneconomylondon.ca/wp-content/uploads/2020/08/environmental-stewardship-guide-book-1.png",
              height: 2000,
              width: 1545,
              encodingFormat: "png",
              hostPageDisplayUrl:
                "https://greeneconomylondon.ca/become-a-local-environmental-steward",
              hostPageUrl:
                "https://greeneconomylondon.ca/become-a-local-environmental-steward/",
              name: "Become a Local Environmental Steward - Green Economy London",
            },
            {
              encodingFormat: "jpeg",
              width: 940,
              hostPageUrl:
                "https://www.steer.com/eagle-ford-shale/environmental-stewardship/",
              contentUrl:
                "https://www.steer.com/wp-content/uploads/2016/07/environmental-stewardship.jpg",
              hostPageDisplayUrl:
                "https://www.steer.com/eagle-ford-shale/environmental-stewardship",
              height: 228,
              contentSize: "92938 B",
              imageId: "243E114483FF102B9D38D36EB59AAA893909295E",
              accentColor: "#21A4AA",
              name: "Environmental Stewardship | STEER",
            },
          ],
        },
        {
          images: [
            {
              width: 2391,
              contentSize: "202152 B",
              accentColor: "#BB9F0D",
              height: 2114,
              contentUrl:
                "https://www.rciind.com/wp-content/uploads/2019/02/SUSTAINABILITY-AT-RCI.png",
              hostPageDisplayUrl:
                "https://www.rciind.com/sustainability/sustainable-operations",
              hostPageUrl:
                "https://www.rciind.com/sustainability/sustainable-operations/",
              encodingFormat: "png",
              imageId: "5788328463856363892C15EA164679B470AAE023",
              name: "Sustainable Operations – rciindia",
            },
            {
              accentColor: "#CB7D00",
              name: "Corporate Sustainable Operation - ASIAN POWER DEVICES - Switching Power Supply",
              contentUrl:
                "https://www.apd.com.tw/wp-content/uploads/2020/12/corporate-sustainable-operation-en.png",
              imageId: "E4590B021D073F5CF926487AAFB7FEA45EF52912",
              width: 763,
              height: 721,
              hostPageUrl:
                "https://www.apd.com.tw/en/about-apd/corporate-social-responsibility/corporate-sustainable-operation/",
              encodingFormat: "png",
              contentSize: "30081 B",
              hostPageDisplayUrl:
                "https://www.apd.com.tw/en/about-apd/corporate-social-responsibility/corporate...",
            },
            {
              width: 2000,
              height: 1266,
              contentUrl:
                "http://cargoclan.cathaypacificcargo.com/wp-content/uploads/2019/10/Hero-Image-CX-Sustainability-Report.png",
              accentColor: "#A7BD0E",
              contentSize: "158756 B",
              imageId: "93F6BAF239458831D9CDAFDF0C0BF1AE47C58CA5",
              hostPageDisplayUrl:
                "cargoclan.cathaypacificcargo.com/2020-vision-for-sustainable-operations",
              name: "Sustainability: a 2020 vision for operations - Cathay Pacific Cargo Clan",
              hostPageUrl:
                "http://cargoclan.cathaypacificcargo.com/2020-vision-for-sustainable-operations/",
              encodingFormat: "png",
            },
          ],
          talkingPoint:
            "Sustainable Operations: Businesses should operate in a sustainable manner by considering factors such as life-cycle of products, efficient use of resources, and minimizing environmental impact in all stages of operation.",
          title: "Sustainable Operations",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685211844/aishortz/cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8/en-US-Standard-D-f8942c6821b7b6ab1a3a6e3286c049cf.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685211844/aishortz/cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8/en-US-Standard-F-f8942c6821b7b6ab1a3a6e3286c049cf.wav",
            ],
            durations: [15.269375, 15.814667],
          },
        },
        {
          title: "Social Responsibility",
          talkingPoint:
            "Social Responsibility: Companies should take care of their employees by ensuring safe working conditions, fair wages, and a non-discriminatory workplace. They should also contribute to the welfare of the communities they operate in.",
          images: [
            {
              contentSize: "73856 B",
              hostPageUrl:
                "https://squareup.com/townsquare/corporate-social-responsibility",
              hostPageDisplayUrl:
                "https://squareup.com/townsquare/corporate-social-responsibility",
              height: 996,
              imageId: "5E65160742B728C40EF576DAC618242395E24A00",
              encodingFormat: "jpeg",
              accentColor: "#2797A4",
              width: 1496,
              contentUrl:
                "https://jumbotron-production-f.squarecdn.com/assets/5602d5ccfbcd69ba5352.jpg",
              name: "Why You Should Care About Corporate Social Responsibility",
            },
            {
              encodingFormat: "jpeg",
              name: "Will America’s Biggest Corporations Live Up To Their New Ethical Promise? | Michigan Ross",
              contentSize: "698672 B",
              width: 1200,
              contentUrl:
                "https://michiganross.umich.edu/sites/default/files/images/articles/corporate_social_responsibility.jpg",
              accentColor: "#C70B04",
              height: 675,
              imageId: "484EE34DA121A22DA90208F3FCD889A232CC29B0",
              hostPageDisplayUrl:
                "https://michiganross.umich.edu/rtia-articles/will-america-s-biggest-corporations-live...",
              hostPageUrl:
                "https://michiganross.umich.edu/rtia-articles/will-america-s-biggest-corporations-live-their-new-ethical-promise",
            },
            {
              name: "What is Corporate Social Responsibility | VU Online",
              hostPageUrl:
                "https://online.vu.edu.au/blog/what-is-corporate-social-responsibility",
              accentColor: "#1156AB",
              contentUrl:
                "https://online.vu.edu.au/sites/default/files/Keypath---VU-MBA-Skyscraper-Article-1--What-is-Global-Corporate-Social-Responsibility---Good-and-Bad-Examples_mini-IG.png",
              height: 431,
              imageId: "D4EE64052530857CBFB4EE93BBC0A086722BF8EC",
              width: 474,
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://online.vu.edu.au/blog/what-is-corporate-social-responsibility",
              contentSize: "110910 B",
            },
          ],
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685211844/aishortz/cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8/en-US-Standard-D-a60a8cf7b161da47d538edd5c20e142f.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685211844/aishortz/cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8/en-US-Standard-F-a60a8cf7b161da47d538edd5c20e142f.wav",
            ],
            durations: [15.603458, 16.063167],
          },
        },
        {
          talkingPoint:
            "Governance Practices: Effective governance involves transparency, business integrity, compliance with laws and regulations, and sound risk management practices.",
          images: [
            {
              encodingFormat: "png",
              name: "Corporate-Governance-Framework | Paul Wan & Co",
              hostPageDisplayUrl:
                "https://pwco.com.sg/corporate-governance-framework",
              imageId: "C3B3766F52874A6CCF5DD2635A2BE42239C902E5",
              height: 852,
              width: 768,
              contentUrl:
                "https://pwco.com.sg/wp-content/uploads/2020/05/Corporate-Governance-Framework-768x852.png",
              contentSize: "418206 B",
              accentColor: "#BA6011",
              hostPageUrl:
                "https://pwco.com.sg/corporate-governance-framework/",
            },
            {
              hostPageUrl:
                "https://nili-ell.blogspot.com/2021/07/corporate-governance-best-practices.html",
              contentUrl:
                "https://www.sfc.hk/-/media/EN/files/ER/SFC-Corporate-Governance-frameworkEng.jpg",
              name: "Corporate Governance Best Practices - Investor Center | Lippo - Our grc software provides a ...",
              contentSize: "623605 B",
              accentColor: "#C4A107",
              height: 1354,
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://nili-ell.blogspot.com/2021/07/corporate-governance-best-practices.html",
              imageId: "5F0B7200CB41CC1A0EDCD1B914CAE0B486E576B6",
              width: 1486,
            },
            {
              height: 2048,
              hostPageUrl:
                "https://www.mystrategyup.com/corporate-governance-methods/",
              accentColor: "#05C5C6",
              encodingFormat: "jpeg",
              name: "Corporate Governance Methods | Adopt Business Controls | Grow Faster",
              contentSize: "91751 B",
              contentUrl:
                "https://www.mystrategyup.com/wp-content/uploads/2020/10/Corporate-Governance-slide-1-1603x2048.jpg",
              imageId: "6B7651A6241C4DF483F5E7F430F20A228BC21337",
              width: 1603,
              hostPageDisplayUrl:
                "https://www.mystrategyup.com/corporate-governance-methods",
            },
          ],
          title: "Governance Practices",
          voiceAudio: {
            durations: [11.585833, 12.331417],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685211844/aishortz/cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8/en-US-Standard-D-c46edd28e2c2c826bf06473448c58ed2.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685211843/aishortz/cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8/en-US-Standard-F-c46edd28e2c2c826bf06473448c58ed2.wav",
            ],
          },
        },
        {
          talkingPoint:
            "Ethical Supply Chain Management: Businesses should ensure ethical practices across the supply chain, including fair labor practices, responsible sourcing of materials, and minimal environmental impact.",
          images: [
            {
              contentUrl:
                "https://www.selecthub.com/wp-content/uploads/2022/08/SCM-Trends.jpg",
              hostPageUrl:
                "http://complianceportal.american.edu/ethical-supply-chain-issues.php",
              name: "🌷 Ethical supply chain issues. Emerging Ethical Issues in Supply Chain Management. 2022-11-05",
              width: 750,
              contentSize: "168284 B",
              height: 666,
              hostPageDisplayUrl:
                "complianceportal.american.edu/ethical-supply-chain-issues.php",
              imageId: "3CCD9F48D00EE12B655E5C47FCEE2FDD48FBFDDD",
              encodingFormat: "jpeg",
              accentColor: "#CB9300",
            },
            {
              imageId: "CC672ED0C1EB35A8AC873BEDCFA3217B2DA38B58",
              hostPageDisplayUrl:
                "https://www.dhl.com/discover/en-nz/logistics-advice/sustainability-and-green-logistics...",
              accentColor: "#B1881A",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://www.dhl.com/discover/en-nz/logistics-advice/sustainability-and-green-logistics/sustainable-farm-management-and-ethical-sourcing",
              contentSize: "243865 B",
              width: 474,
              height: 246,
              contentUrl:
                "https://discover.dhl.com/content/dam/new-zealand/desktop/logistics-advice/sustainability-and-green-logistics/from-farm-to-ship--sustainable-sourcing-in-the-supply-chain/sustainable-management-green-supply-chain-1920x998.jpg",
              name: "Farm to Ship: Sustainable Management - DHL Express NZ",
            },
            {
              contentSize: "624584 B",
              encodingFormat: "png",
              imageId: "DBF62D1498142AC4F129F5BB56072F40C2F5E6A8",
              hostPageUrl:
                "https://www.resonanceglobal.com/blog/the-growing-vocabulary-of-supply-chain-management",
              contentUrl:
                "https://www.resonanceglobal.com/hubfs/Supply%20Chain%20Management.png",
              height: 1000,
              width: 2000,
              accentColor: "#103A66",
              hostPageDisplayUrl:
                "https://www.resonanceglobal.com/blog/the-growing-vocabulary-of-supply-chain-management",
              name: "Upstream, Downstream, Extended, and Ethical: The Growing Vocabulary of Supply Chain Management",
            },
          ],
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685211844/aishortz/cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8/en-US-Standard-D-d7a77d227ec94021230d81fe87125d9b.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685211844/aishortz/cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8/en-US-Standard-F-d7a77d227ec94021230d81fe87125d9b.wav",
            ],
            durations: [14.216083, 14.975292],
          },
          title: "Ethical Supply Chain Management",
        },
      ],
      table: {
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685211842/aishortz/cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8/en-US-Standard-D-f8a0343298b8d44647df8591418d774c.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685211843/aishortz/cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8/en-US-Standard-F-f8a0343298b8d44647df8591418d774c.wav",
          ],
          durations: [51.684667, 54.282792],
        },
        isPresent: true,
        table:
          "| Component | Description |\n| --- | --- |\n| Environmental | This component focuses on the impact of a company's operations on the environment. It includes issues like carbon emissions, resource depletion, and waste management. |\n| Social | This component focuses on a company's relationships with external stakeholders, including employees, customers, and communities. It includes issues like labor practices, human rights, and community development. |\n| Governance | This component focuses on the internal governance of a company. It includes issues like board composition, executive compensation, and audit quality. |",
        summary:
          "The ESG Components table shows the three key components of ESG analysis: Environmental, Social, and Governance. The Environmental component focuses on the impact of a company's operations on natural resources and the environment. This includes considerations like carbon emissions, resource depletion, and waste management. The Social component focuses on a company's relationships with external stakeholders, including employees, customers, and communities. This includes issues like labor practices, human rights, and community development. The Governance component focuses on the internal governance of a company. This includes issues like board composition, executive compensation, and audit quality. Understanding these three components is vital to achieving a full picture of a company's long-term sustainability and social responsibility.",
      },
      intro: {
        images: [
          {
            encodingFormat: "jpeg",
            hostPageDisplayUrl:
              "https://www.valero.com/responsibility/esg-environmental-social-governance",
            imageId: "E4FCF4BA76631C699725455A4BAFDDFB3088F900",
            accentColor: "#127495",
            contentSize: "506121 B",
            width: 1638,
            name: "Environmental Social Governance (ESG) | Valero",
            height: 1137,
            contentUrl:
              "https://www.valero.com/sites/default/files/2020-11/ESG%20Overview_FullWidth.jpg",
            hostPageUrl:
              "https://www.valero.com/responsibility/esg-environmental-social-governance",
          },
          {
            imageId: "18F1AE8A7D73DC32CF5E0F20F9F40784B5A495BA",
            accentColor: "#20AB91",
            width: 2032,
            contentUrl:
              "https://www.ecoadvisors.eu/wp-content/uploads/2019/01/ESG.png",
            contentSize: "162786 B",
            hostPageDisplayUrl: "https://www.ecoadvisors.eu/what-is-esg",
            hostPageUrl: "https://www.ecoadvisors.eu/what-is-esg/",
            height: 1060,
            name: "What is ESG? | ECO Advisors",
            encodingFormat: "png",
          },
          {
            width: 2342,
            name: "SUSTAINABILITY CONSULTING | M&H Consulting",
            imageId: "A0657BE463B307F9D9FB0D351E6E29B087826022",
            contentSize: "621020 B",
            hostPageDisplayUrl: "www.mhcfirm.com/esg-sustainability-consulting",
            contentUrl:
              "http://mhcfirm.com/wp-content/uploads/2020/05/ESG-Infograph-01-2.png",
            accentColor: "#007EB5",
            hostPageUrl:
              "http://www.mhcfirm.com/esg-sustainability-consulting/",
            encodingFormat: "png",
            height: 1599,
          },
        ],
        voiceAudio: {
          durations: [26.122583, 27.148917],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685211849/aishortz/cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8/en-US-Standard-D-6cc5bf534b5764eb4a25a2a3797a8094.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685211849/aishortz/cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8/en-US-Standard-F-6cc5bf534b5764eb4a25a2a3797a8094.wav",
          ],
        },
        talkingPoint:
          "In this video, we will explore the power of Environmental Social Governance or ESG. We'll take a look at the importance of ESG for businesses to adopt, which includes minimizing carbon footprint, sustainable operations, social responsibility, ethical governance practices, and supply chain management. Stay tuned to find out how implementing ESG can positively impact a company's operations and the world we live in!",
      },
    },
    referenceData:
      "Environmental Stewardship: Companies should minimize their carbon footprint by reducing greenhouse gas emissions, managing waste responsibly, and reducing water usage. The use of renewable energy should be maximized.\n\nSustainable Operations: Businesses should operate in a sustainable manner by considering factors such as life-cycle of products, efficient use of resources, and minimizing environmental impact in all stages of operation.\n\nSocial Responsibility: Companies should take care of their employees by ensuring safe working conditions, fair wages, and a non-discriminatory workplace. They should also contribute to the welfare of the communities they operate in.\n\nGovernance Practices: Effective governance involves transparency, business integrity, compliance with laws and regulations, and sound risk management practices.\n\nEthical Supply Chain Management: Businesses should ensure ethical practices across the supply chain, including fair labor practices, responsible sourcing of materials, and minimal environmental impact.\n\nStakeholder Engagement: Engaging with stakeholders such as investors, employees, customers, and communities helps understand their expectations and align the bus",
    metadata: {
      color: {
        gradientStartColor: "#008000",
        gradientEndColor: "#FFFFFF",
        accentColor: "#008000",
      },
      height: 1080,
      description:
        "This video should highlight the importance of Environmental Social Governance and why corporations should adopt it in their policies. The video should include real-world examples of corporations that have successfully implemented ESG and how it has positively impacted their business, as well as brief explanations of the three key components of ESG: environment, social, and governance. The video should be professional in style and graphics such as charts and tables should be included to make it more interesting.",
      durationInSeconds: 300,
      topic: "Environmental Social Governance",
      style: "professional",
      width: 1920,
      title: "The Power of Environmental Social Governance",
      table: {
        label: "ESG Components",
      },
    },
    creditType: "free",
    status: "SUCCESS",
    userId: "user_2QO5Gf7jQxif1Xzt6ecEfMvIaln",
    isPublic: false,
    render: {
      error: "",
      url: "",
      status: "PENDING",
      msg: "Render not initiated yet.",
    },
    createdAt: "Sat May 27 2023",
    uniqueId:
      "cd8c8c69c7bc3682d2a53d461e7cb8332a65df152bb5243bb77c7015b92a14a8",
    prompt: "Make a video about Environmental Social Governance",
    error: "",
    message: "Video created successfully!",
  },
  {
    render: {
      error: "",
      msg: "Render not initiated yet.",
      url: "",
      status: "PENDING",
    },
    referenceData:
      "It will be based on teacher candidates in Ontario who are learning about how to make a difference, effective teaching practice and assessment.",
    status: "SUCCESS",
    message: "Video created successfully!",
    data: {
      table: {
        table: "",
        summary: "",
        isPresent: false,
        voiceAudio: {
          durations: [0, 0],
          urls: ["", ""],
        },
      },
      videoSections: [
        {
          voiceAudio: {
            durations: [17.65475, 18.250458],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685231827/aishortz/e6aa6d494b6bcaf040c90b992bf7af0fa222629d1cf1019c6426675e624df07e/en-US-Standard-D-b9a56908935503f76e9b009c76710f41.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685231827/aishortz/e6aa6d494b6bcaf040c90b992bf7af0fa222629d1cf1019c6426675e624df07e/en-US-Standard-F-b9a56908935503f76e9b009c76710f41.wav",
            ],
          },
          talkingPoint:
            "Let's talk about how new teachers in Ontario are making a difference in the education system. These teacher candidates are learning about effective teaching practices and assessment, which are crucial in making a positive impact on their students' lives.",
          images: [
            {
              hostPageDisplayUrl:
                "https://www.cbc.ca/news/canada/british-columbia/b-c-welcomes-ontario-teachers-who-may...",
              name: "Ontario teachers who face losing their jobs are 'more than welcome' in B.C., minister says | CBC ...",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://www.cbc.ca/news/canada/british-columbia/b-c-welcomes-ontario-teachers-who-may-lose-their-jobs-1.5090604",
              contentSize: "82632 B",
              contentUrl:
                "https://i.cbc.ca/1.3751530.1475181005!/cpImage/httpImage/image.jpg_gen/derivatives/original_780/teacher-in-classroom.jpg",
              imageId: "F31738FDD4297BD5FC39C55A188DF0459554EFB9",
              height: 566,
              width: 780,
              accentColor: "#AF251C",
            },
            {
              imageId: "B384C087B5C89042C2DD2331D4D6218E0D6409B4",
              contentUrl:
                "https://www.oct.ca/publications/professionally_speaking/2019-12/images/2019-12-Great-teaching-2-PS.jpg",
              accentColor: "#16758A",
              height: 3000,
              contentSize: "1754236 B",
              hostPageDisplayUrl:
                "https://www.oct.ca/publications/professionally_speaking/2019-12/2019-12-Great-Teaching...",
              hostPageUrl:
                "https://www.oct.ca/publications/professionally_speaking/2019-12/2019-12-Great-Teaching-PS.asp",
              name: "| Professionally Speaking December 2019",
              encodingFormat: "jpeg",
              width: 4508,
            },
            {
              name: "Ontario Secondary School Teachers Federation Has Reached an Agreement With the Province ...",
              contentSize: "101056 B",
              accentColor: "#A36D28",
              width: 1068,
              hostPageDisplayUrl:
                "https://bramptonist.com/ontario-secondary-school-teachers-federation-has-reached-an...",
              contentUrl:
                "https://bramptonist.com/wp-content/uploads/2019/04/iStock-178398972-1068x712.jpg",
              imageId: "46897969A21C67703E30FC783A5CD2B53B0C9DF2",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://bramptonist.com/ontario-secondary-school-teachers-federation-has-reached-an-agreement-with-the-province/",
              height: 712,
            },
          ],
          title: "New Teachers in Ontario: Making a Difference in Education",
        },
        {
          images: [
            {
              name: "NetSupport continues to support teachers as technology increases in education | NetSupport Inc",
              hostPageDisplayUrl:
                "https://www.netsupport-inc.com/20160729netsupport-continues-to-support-teachers-as...",
              contentSize: "61245 B",
              hostPageUrl:
                "https://www.netsupport-inc.com/20160729netsupport-continues-to-support-teachers-as-technology-increases-in-education/",
              encodingFormat: "jpeg",
              width: 900,
              accentColor: "#4B6B80",
              imageId: "5D6AFD24E08F37CE9CFCD6A16A7576996064248F",
              height: 600,
              contentUrl:
                "https://www.netsupport-inc.com/wp-content/uploads/2016/07/Supporting-teachers-in-technology-led-teaching.jpg",
            },
            {
              hostPageDisplayUrl:
                "https://hechingerreport.org/teachers-colleges-struggle-to-blend-technology-into-teacher...",
              name: "Teachers colleges struggle to blend technology into teacher training",
              contentUrl:
                "https://i1.wp.com/hechingerreport.org/wp-content/uploads/2015/08/teachercollegetechIMG_0408.jpg?ssl=1",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://hechingerreport.org/teachers-colleges-struggle-to-blend-technology-into-teacher-training/",
              height: 3456,
              accentColor: "#A15C2A",
              imageId: "6E0312C6D2C71F2CC19D720DE537722813AF0F20",
              width: 5184,
              contentSize: "1081308 B",
            },
            {
              hostPageUrl:
                "http://blog.himanshusheth.net/2017/04/01/impact-of-technology-on-education/",
              accentColor: "#6E3125",
              contentSize: "232091 B",
              width: 1458,
              height: 903,
              encodingFormat: "jpeg",
              name: "Impact of Technology on Education - Blog of Himanshu Sheth on Technology, Entrepreneurship and ...",
              hostPageDisplayUrl:
                "blog.himanshusheth.net/2017/04/01/impact-of-technology-on-education",
              contentUrl:
                "http://3.bp.blogspot.com/-TOZVucMOqe8/VJD6QdPbDnI/AAAAAAAAACk/2Zq9kyQPvow/s1600/5.jpg",
              imageId: "51B51879CD4DC7086A546961E368F748653C4E78",
            },
          ],
          talkingPoint:
            "One way new teachers are making a difference is by incorporating technology into their lessons. With the help of technology, they can create interactive and engaging lessons that cater to different learning styles.",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685231827/aishortz/e6aa6d494b6bcaf040c90b992bf7af0fa222629d1cf1019c6426675e624df07e/en-US-Standard-D-0c440c647f8efc9b9675ba421d5fa9f3.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685231827/aishortz/e6aa6d494b6bcaf040c90b992bf7af0fa222629d1cf1019c6426675e624df07e/en-US-Standard-F-0c440c647f8efc9b9675ba421d5fa9f3.wav",
            ],
            durations: [16.81375, 17.406125],
          },
          title:
            "Incorporating Technology in Teaching: Impact of New Teachers in Ontario",
        },
        {
          title:
            "Promoting Inclusivity and Diversity: Role of New Teachers in Ontario",
          talkingPoint:
            "Another way new teachers are making a difference is by promoting inclusivity and diversity in their classrooms. They are creating a safe and welcoming environment for all students, regardless of their background or abilities.",
          images: [
            {
              hostPageUrl:
                "https://www.mic.ul.ie/ednip-2020-schools-role-inclusivity-diversity-communities",
              contentSize: "113647 B",
              height: 540,
              contentUrl:
                "https://www.mic.ul.ie/sites/default/files/styles/slide/public/2021-06/EDNIP%20Report%20Image.jpg?itok=W8K27ezy",
              width: 840,
              encodingFormat: "jpeg",
              name: "“If we were all the same then you wouldn’t know who we are” - MIC Integration Initiative ...",
              hostPageDisplayUrl:
                "https://www.mic.ul.ie/ednip-2020-schools-role-inclusivity-diversity-communities",
              imageId: "C56322C05378AAFB434F842086FA7D894DA5FC2A",
              accentColor: "#1276B9",
            },
            {
              contentSize: "443710 B",
              accentColor: "#723F31",
              contentUrl:
                "https://i0.wp.com/blog.qualityclassrooms.ca/wp-content/uploads/2021/09/How-to-Promote-Diversity-and-Inclusivity-in-the-Classroom-1-1.png?resize=1024%2C1024&ssl=1",
              hostPageDisplayUrl:
                "https://blog.qualityclassrooms.ca/how-to-promote-diversity-and-inclusivity-in-the...",
              height: 1024,
              width: 1024,
              encodingFormat: "png",
              imageId: "7E51220FB8941FBCFB6972966ADA34A05A38C98B",
              hostPageUrl:
                "https://blog.qualityclassrooms.ca/how-to-promote-diversity-and-inclusivity-in-the-classroom-1-1/",
              name: "How-to-Promote-Diversity-and-Inclusivity-in-the-Classroom-1-1 – Quality Classrooms Blog",
            },
            {
              height: 697,
              contentSize: "846994 B",
              encodingFormat: "jpeg",
              width: 1164,
              hostPageDisplayUrl:
                "www.oise.utoronto.ca/oise/About_OISE/Dealing_with_diversity_in_the_classroom.html",
              accentColor: "#773627",
              contentUrl:
                "https://www.oise.utoronto.ca/oise/UserFiles/Image/2017-diverse-classroom.jpg",
              name: "OISE :: Dealing with diversity in the classroom :: Ontario Institute for Studies in Education of ...",
              imageId: "324C1BE05906B3A6B2EBAE5A5952FB5FA2B1D8A6",
              hostPageUrl:
                "http://www.oise.utoronto.ca/oise/About_OISE/Dealing_with_diversity_in_the_classroom.html",
            },
          ],
          voiceAudio: {
            durations: [17.220708, 17.580167],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685231827/aishortz/e6aa6d494b6bcaf040c90b992bf7af0fa222629d1cf1019c6426675e624df07e/en-US-Standard-D-bc40a929718279742b54d121b6bfb517.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685231827/aishortz/e6aa6d494b6bcaf040c90b992bf7af0fa222629d1cf1019c6426675e624df07e/en-US-Standard-F-bc40a929718279742b54d121b6bfb517.wav",
            ],
          },
        },
        {
          images: [
            {
              contentUrl:
                "https://images.reference.com/amg-cms-reference-images/media/innovative-teaching_278a1b0503ce263.jpg?width=740&height=420&fit=crop&format=pjpg",
              width: 740,
              contentSize: "61708 B",
              height: 420,
              imageId: "DD2E8959439968DFC59CB6A8A92DA030B633451B",
              encodingFormat: "jpeg",
              name: "What Is Innovative Teaching?",
              accentColor: "#123774",
              hostPageDisplayUrl:
                "https://www.reference.com/world-view/innovative-teaching-278a1b0503ce263",
              hostPageUrl:
                "https://www.reference.com/world-view/innovative-teaching-278a1b0503ce263",
            },
            {
              contentSize: "44115 B",
              accentColor: "#939238",
              width: 640,
              hostPageDisplayUrl:
                "https://www.scientificworldinfo.com/2019/10/best-innovative-teaching-strategies-for...",
              height: 420,
              name: "12 Best Innovative Teaching Strategies for Modern Pedagogy that can Improve Student Engagement",
              imageId: "AA36DA87D89A3D3684813289321EE463413B4407",
              contentUrl:
                "https://1.bp.blogspot.com/-uM5rFJi09Zg/XbCGck_W6uI/AAAAAAAADCo/ARGJRatlS1kg7CGY8sS9s6kfzv35mE4wwCLcBGAsYHQ/s1600/Best-innovative-teaching-strategies-for-modern-pedagogy.jpg",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://www.scientificworldinfo.com/2019/10/best-innovative-teaching-strategies-for-modern-pedagogy.html",
            },
            {
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://brainfeedmagazine.com/innovative-teaching-methods-techniques",
              name: "Innovative Teaching Methods/Techniques – Brainfeed Magazine – Awards for Best Schools",
              imageId: "1912596CBE3486C549F53D000C48F34CDD1361F8",
              contentUrl:
                "https://brainfeedmagazine.com/wp-content/uploads/2019/08/Innovative-Teaching-Methods-Techniques-585x334.jpg",
              accentColor: "#AF1C2B",
              width: 585,
              height: 334,
              contentSize: "49453 B",
              hostPageUrl:
                "https://brainfeedmagazine.com/innovative-teaching-methods-techniques/",
            },
          ],
          title:
            "Innovative Teaching Methods: Bringing Excitement to Classrooms through New Teachers",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685231827/aishortz/e6aa6d494b6bcaf040c90b992bf7af0fa222629d1cf1019c6426675e624df07e/en-US-Standard-D-0cf2f808ffb5d39acec086e6ab709dcd.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685231827/aishortz/e6aa6d494b6bcaf040c90b992bf7af0fa222629d1cf1019c6426675e624df07e/en-US-Standard-F-0cf2f808ffb5d39acec086e6ab709dcd.wav",
            ],
            durations: [15.788625, 16.091875],
          },
          talkingPoint:
            "New teachers are also using innovative teaching methods to keep their students engaged and interested in the subject matter. They are constantly seeking new ways to make learning fun and exciting.",
        },
        {
          talkingPoint:
            "Finally, new teachers are making a difference by being passionate about their job. They are dedicated to their students and are always looking for ways to help them succeed. Their enthusiasm is contagious and inspires their students to do their best.",
          title:
            "Passion for Teaching: Driving Force of Ontario's New Teachers",
          images: [
            {
              hostPageUrl:
                "https://www.teflcourse.net/blog/love-what-you-do-a-passion-for-teaching/",
              contentUrl:
                "https://www.teflcourse.net/uploads/passion-for-teaching.jpg",
              accentColor: "#0049AE",
              imageId: "E5DB33BA4539AEFAC6BD2868CFF95B3A07EAA1D8",
              width: 1120,
              name: "Love What You Do - A Passion for Teaching | ITTT | TEFL Blog",
              hostPageDisplayUrl:
                "https://www.teflcourse.net/blog/love-what-you-do-a-passion-for-teaching",
              encodingFormat: "jpeg",
              height: 630,
              contentSize: "71999 B",
            },
            {
              name: "Passion for teaching",
              width: 638,
              hostPageDisplayUrl:
                "https://www.slideshare.net/acanonigo/passion-for-teaching",
              contentSize: "87210 B",
              height: 903,
              hostPageUrl:
                "https://www.slideshare.net/acanonigo/passion-for-teaching",
              accentColor: "#2282AA",
              imageId: "BB1017DC1D7D2527F081DEBF750D21E521E500A8",
              encodingFormat: "jpeg",
              contentUrl:
                "https://image.slidesharecdn.com/passionforteaching-121028231833-phpapp02/95/passion-for-teaching-1-638.jpg?cb=1351466541",
            },
            {
              height: 788,
              hostPageDisplayUrl:
                "https://www.thelondonschool.it/corsi/teachig-for-passion-evento-formazione",
              hostPageUrl:
                "https://www.thelondonschool.it/corsi/teachig-for-passion-evento-formazione/",
              accentColor: "#2490A7",
              contentUrl:
                "https://www.thelondonschool.it/wp-content/uploads/2020/07/teaching_for_passion.png",
              name: "Evento gratuito: Teaching for Passion | The London School",
              encodingFormat: "png",
              imageId: "7247940DF0314CECB50123A18DCB3CDF8A4A0BBA",
              width: 940,
              contentSize: "845185 B",
            },
          ],
          voiceAudio: {
            durations: [18.423917, 18.985458],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685231827/aishortz/e6aa6d494b6bcaf040c90b992bf7af0fa222629d1cf1019c6426675e624df07e/en-US-Standard-D-73e57dc0ac5299b0aa3b779df87776b5.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1685231827/aishortz/e6aa6d494b6bcaf040c90b992bf7af0fa222629d1cf1019c6426675e624df07e/en-US-Standard-F-73e57dc0ac5299b0aa3b779df87776b5.wav",
            ],
          },
        },
      ],
      outro: {
        talkingPoint:
          "Thanks for watching! If you enjoyed this video, don't forget to like, share, and subscribe to our channel. Also, be sure to check out our other videos on similar topics, such as 'Innovative Teaching Methods' and 'Creating Inclusive Classrooms'. Keep learning and making a difference in education!",
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685231829/aishortz/e6aa6d494b6bcaf040c90b992bf7af0fa222629d1cf1019c6426675e624df07e/en-US-Standard-D-3e5d1c6bb94077be0b6215fc92ffb6f5.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685231829/aishortz/e6aa6d494b6bcaf040c90b992bf7af0fa222629d1cf1019c6426675e624df07e/en-US-Standard-F-3e5d1c6bb94077be0b6215fc92ffb6f5.wav",
          ],
          durations: [17.077, 18.431458],
        },
      },
      intro: {
        images: [
          {
            contentSize: "53129 B",
            imageId: "433269BA39789B3EE3693CB72E3F494545F7AAF4",
            encodingFormat: "jpeg",
            width: 474,
            height: 266,
            hostPageDisplayUrl:
              "https://www.news4jax.com/solutionaries/2023/05/24/this-new-approach-to-school...",
            accentColor: "#4A6A81",
            contentUrl:
              "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/JTLVBT3RTBHQ5FNBQ6N2WRUYPI.jpg?_a=ATCqVhC0",
            hostPageUrl:
              "https://www.news4jax.com/solutionaries/2023/05/24/this-new-approach-to-school-suspensions-is-making-a-difference-for-students-and-teachers/",
            name: "This new approach to school suspensions is making a difference for ...",
          },
          {
            imageId: "B2601665F1093E16F144A4D80268EBEB70815A95",
            accentColor: "#653C3A",
            name: "Students Uncover Their Teacher's Secret and Their View of Him ...",
            height: 295,
            hostPageDisplayUrl:
              "https://www.msn.com/en-us/news/us/students-uncover-their-teachers-secret-and-their-view...",
            width: 474,
            hostPageUrl:
              "https://www.msn.com/en-us/news/us/students-uncover-their-teachers-secret-and-their-view-of-him-completely-changes/ss-AA172vbg",
            contentUrl:
              "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA172qdc.img",
            contentSize: "60442 B",
            encodingFormat: "jpeg",
          },
          {
            accentColor: "#2D3270",
            name: "Longtime Conroe teacher sets out to make a difference in lives",
            contentUrl:
              "https://s.hdnux.com/photos/52/44/43/11159796/6/1200x0.jpg",
            imageId: "3EB6981B30BB3758E269FD833F9B73DA828BDB20",
            contentSize: "67667 B",
            width: 474,
            height: 296,
            hostPageUrl:
              "https://www.timesunion.com/neighborhood/moco/news/article/Longtime-Conroe-teacher-sets-out-to-make-a-9465319.php",
            encodingFormat: "jpeg",
            hostPageDisplayUrl:
              "https://www.timesunion.com/neighborhood/moco/news/article/Longtime-Conroe-teacher-sets...",
          },
        ],
        talkingPoint:
          "In this video, we will explore inspiring stories of new teachers changing lives. These teachers are making a positive impact on their students by using effective teaching practices, incorporating technology into their lessons, promoting inclusivity and diversity, using innovative teaching methods, and exhibiting a passion for their job that inspires their students to do their best.",
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685231829/aishortz/e6aa6d494b6bcaf040c90b992bf7af0fa222629d1cf1019c6426675e624df07e/en-US-Standard-D-d4c5b8c9bf37f8d0c353460bdbe3fc15.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1685231829/aishortz/e6aa6d494b6bcaf040c90b992bf7af0fa222629d1cf1019c6426675e624df07e/en-US-Standard-F-d4c5b8c9bf37f8d0c353460bdbe3fc15.wav",
          ],
          durations: [22.082167, 22.882292],
        },
      },
    },
    creditType: "free",
    isPublic: false,
    userId: "user_2QOjtjtiKiJc6IhUqUzs9IZbpm7",
    error: "",
    metadata: {
      style: "professional",
      title: "New Teachers Changing Lives: Inspiring Stories",
      width: 1920,
      description:
        "Create an inspiring video that showcases new teachers who are making a positive impact in the lives of their students. Highlight their passion for teaching and dedication to their profession. Include interviews with students and colleagues to show how these teachers are making a difference. Avoid using graphics, charts, or tables unless necessary.",
      durationInSeconds: 180,
      height: 1080,
      topic: "New Teachers Making a Difference",
      color: {
        gradientStartColor: "#FFC300",
        gradientEndColor: "#FF5733",
        accentColor: "#FF5733",
      },
    },
    uniqueId:
      "e6aa6d494b6bcaf040c90b992bf7af0fa222629d1cf1019c6426675e624df07e",
    createdAt: "Sat May 27 2023",
    prompt:
      "Make a video about make a video about new teachers making a difference ",
  },
  {
    error: "",
    status: "SUCCESS",
    isPublic: false,
    message: "Video created successfully!",
    referenceData:
      "rogramming languages can be broadly categorized into several types, each with its distinct features, applications, and advantages. High-level languages, such as Python, Java, and C++, provide a more abstracted and human-readable syntax, making them easier to learn and code. They are versatile and widely used across various domains, including web development, data analysis, and software engineering. Scripting languages, like JavaScript and Ruby, excel in automating tasks and creating dynamic web pages. They are often interpreted and offer flexibility for rapid prototyping. Domain-specific languages (DSLs) focus on specific problem domains, like SQL for database querying or MATLAB for mathematical computations, offering specialized features and optimized performance for their respective fields. Functional programming languages, such as Haskell and Lisp, emphasize immutability and the use of pure functions, promoting code reliability and concurrency.",
    createdAt: "Wed May 24 2023",
    userId: "user_2PbJnAXLLNskJrUDFgMPIwqlHAX",
    prompt:
      "Make a video about about the different types of programming languages, including their distinct features, applications, and advantages.",
    uniqueId:
      "eece16a8c10adffc22d3f5c4a0a1f17a9bbe0e24202cbd619a8bf8ba74de0ea2",
    render: {
      status: "PENDING",
      error: "",
      msg: "Render not initiated yet.",
      url: "",
    },
    data: {
      outro: {
        voiceAudio: {
          durations: [11.954625, 13.033708],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684933603/aishortz/eece16a8c10adffc22d3f5c4a0a1f17a9bbe0e24202cbd619a8bf8ba74de0ea2/en-US-Standard-D-f48685010f10680d14724827ba811946.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684933603/aishortz/eece16a8c10adffc22d3f5c4a0a1f17a9bbe0e24202cbd619a8bf8ba74de0ea2/en-US-Standard-F-f48685010f10680d14724827ba811946.wav",
          ],
        },
        talkingPoint:
          "Thanks for watching! If you want to learn more about programming languages, be sure to check out our recommended video on the topic. Don't forget to like, share, and subscribe to our channel for more tech content!",
      },
      table: {
        voiceAudio: {
          urls: ["", ""],
          durations: [0, 0],
        },
        isPresent: false,
        table: "",
        summary: "",
      },
      intro: {
        talkingPoint:
          "In this video, we will explore the different types of programming languages. We'll cover programming language paradigms like object-oriented programming and functional programming, and their applications. We'll also explain the advantages and disadvantages of each language and their suitability for different tasks. Examples of programming languages that we'll cover are Java, Python, JavaScript, Ruby, and C++.",
        voiceAudio: {
          durations: [25.770375, 27.107],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684933603/aishortz/eece16a8c10adffc22d3f5c4a0a1f17a9bbe0e24202cbd619a8bf8ba74de0ea2/en-US-Standard-D-429fd8d3d3eb7d118559f42c638aa67f.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684933603/aishortz/eece16a8c10adffc22d3f5c4a0a1f17a9bbe0e24202cbd619a8bf8ba74de0ea2/en-US-Standard-F-429fd8d3d3eb7d118559f42c638aa67f.wav",
          ],
        },
        images: [
          {
            height: 1215,
            accentColor: "#148EB7",
            imageId: "5ABFD01C10BB33E315F6B3A44963BAF105D72DF8",
            width: 1730,
            name: "Yet Another Top Ten List of Popular Programming Languages",
            contentUrl:
              "https://i2.wp.com/opensourceforu.com/wp-content/uploads/2019/03/Programming-languages.jpg?fit=1730%2C1215&ssl=1",
            hostPageUrl:
              "https://www.opensourceforu.com/2019/03/yet-another-top-ten-list-of-popular-programming-languages/",
            hostPageDisplayUrl:
              "https://www.opensourceforu.com/2019/03/yet-another-top-ten-list-of-popular-programming...",
            encodingFormat: "jpeg",
            contentSize: "207404 B",
          },
          {
            encodingFormat: "jpeg",
            height: 652,
            imageId: "99F8848C2330C80FF0B06D2BD2D7B0DE93D2822A",
            hostPageUrl:
              "https://mtech-admission-iits.blogspot.com/2017/04/programming-languages-to-learn.html",
            contentUrl:
              "https://4.bp.blogspot.com/-2IQBBB8Bbck/WPO4s0RQDZI/AAAAAAAAFqs/bVnqgKJHtxoPCDSGS469MfRlRhRW0EmMgCLcB/s1600/programming_languages.jpg",
            accentColor: "#BF0E0C",
            hostPageDisplayUrl:
              "https://mtech-admission-iits.blogspot.com/2017/04/programming-languages-to-learn.html",
            contentSize: "201742 B",
            width: 949,
            name: "M. Tech Computer Science at IITs: Programming languages to learn",
          },
          {
            hostPageDisplayUrl:
              "https://medium.com/groklearning/a-guide-to-programming-languages-for-coding-in-class...",
            imageId: "CC9205EBE33BE08A73927715B4B1FD12CEFCC298",
            hostPageUrl:
              "https://medium.com/groklearning/a-guide-to-programming-languages-for-coding-in-class-4e6de6c01343",
            height: 3000,
            encodingFormat: "jpeg",
            contentUrl:
              "https://miro.medium.com/max/11400/1*8KMMxiDLGxyD4CpsmL0iDg.jpeg",
            accentColor: "#B94112",
            contentSize: "1342853 B",
            name: "A guide to programming languages for coding in class",
            width: 4000,
          },
        ],
      },
      videoSections: [
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684933592/aishortz/eece16a8c10adffc22d3f5c4a0a1f17a9bbe0e24202cbd619a8bf8ba74de0ea2/en-US-Standard-D-f039b2cea3b43f6f53d8c71dfd78bb17.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684933591/aishortz/eece16a8c10adffc22d3f5c4a0a1f17a9bbe0e24202cbd619a8bf8ba74de0ea2/en-US-Standard-F-f039b2cea3b43f6f53d8c71dfd78bb17.wav",
            ],
            durations: [9.854667, 10.564875],
          },
          talkingPoint:
            "Programming languages can be broadly categorized into several types, each with its distinct features, applications, and advantages.",
          title: "Types of Programming Languages",
          images: [
            {
              width: 1024,
              hostPageDisplayUrl:
                "https://www.slideshare.net/juhi_bhoyar/types-of-programming-languages",
              accentColor: "#C59E06",
              hostPageUrl:
                "https://www.slideshare.net/juhi_bhoyar/types-of-programming-languages",
              contentSize: "76603 B",
              encodingFormat: "jpeg",
              name: "Types of Programming Languages",
              height: 576,
              imageId: "600687DAB409BEED43E15F6F35BCA723C11C8FAD",
              contentUrl:
                "https://image.slidesharecdn.com/cprograming-170310111858/95/types-of-programming-languages-8-1024.jpg?cb=1489144963",
            },
            {
              hostPageDisplayUrl:
                "https://www.learncomputerscienceonline.com/computer-programming",
              accentColor: "#00AE4D",
              imageId: "003E30524DF1AE5F63339245C151ECB741E42294",
              hostPageUrl:
                "https://www.learncomputerscienceonline.com/computer-programming/",
              name: "Computer Programming | Introduction To Computer Programming",
              contentSize: "100021 B",
              height: 509,
              width: 798,
              encodingFormat: "jpeg",
              contentUrl:
                "https://www.learncomputerscienceonline.com/wp-content/uploads/2019/05/Types-Of-Programming-Language.jpg",
            },
            {
              accentColor: "#BC0F44",
              imageId: "A3C1B3AEABFEE1F93D055BEEB316E02AD9E210CC",
              width: 3042,
              contentSize: "769220 B",
              hostPageUrl:
                "https://www.techasoft.com/post/types-of-programming-languages",
              hostPageDisplayUrl:
                "https://www.techasoft.com/post/types-of-programming-languages",
              contentUrl:
                "https://www.techasoft.com/blog/2021/01/1609736490.jpg",
              name: "Types Of Programming Languages",
              encodingFormat: "jpeg",
              height: 1738,
            },
          ],
        },
        {
          images: [
            {
              encodingFormat: "jpeg",
              accentColor: "#AB4220",
              height: 768,
              contentSize: "80921 B",
              imageId: "C80A413C1341086753FA38E255B15A7DFE2119A9",
              name: "PPT - Chapter 1 Introduction to Object-Oriented Programming and Problem Solving PowerPoint ...",
              width: 1024,
              hostPageDisplayUrl:
                "www.slideserve.com/harriet/chapter-1-introduction-to-object-oriented-programming-and...",
              contentUrl:
                "http://image.slideserve.com/566124/high-level-languages-l.jpg",
              hostPageUrl:
                "http://www.slideserve.com/harriet/chapter-1-introduction-to-object-oriented-programming-and-problem-solving",
            },
            {
              hostPageDisplayUrl:
                "https://www.slideserve.com/dickeyr/high-level-languages-powerpoint-ppt-presentation",
              imageId: "729135C2C0655B4E31962E4A282335FC7DF8BA4B",
              height: 540,
              contentSize: "68650 B",
              encodingFormat: "jpeg",
              accentColor: "#2E2E2E",
              name: "PPT - High Level Languages PowerPoint Presentation, free download - ID:9182049",
              contentUrl:
                "https://image4.slideserve.com/9182049/high-level-languages-n.jpg",
              hostPageUrl:
                "https://www.slideserve.com/dickeyr/high-level-languages-powerpoint-ppt-presentation",
              width: 720,
            },
            {
              hostPageDisplayUrl:
                "https://learntocodewith.me/programming/source-code",
              name: "Source Code And Language Differences",
              width: 924,
              contentUrl:
                "https://learntocodewith.me/wp-content/uploads/2014/04/high-to-low-level-languages.png",
              height: 1198,
              contentSize: "24495 B",
              hostPageUrl:
                "https://learntocodewith.me/programming/source-code/",
              accentColor: "#C95202",
              imageId: "B415893DB923C046BE9C7E59757D6421A539FB15",
              encodingFormat: "png",
            },
          ],
          talkingPoint:
            "High-level languages, such as Python, Java, and C++, provide a more abstracted and human-readable syntax, making them easier to learn and code. They are versatile and widely used across various domains, including web development, data analysis, and software engineering.",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684933592/aishortz/eece16a8c10adffc22d3f5c4a0a1f17a9bbe0e24202cbd619a8bf8ba74de0ea2/en-US-Standard-D-ed79783c6837d72103480c375b9e36de.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684933592/aishortz/eece16a8c10adffc22d3f5c4a0a1f17a9bbe0e24202cbd619a8bf8ba74de0ea2/en-US-Standard-F-ed79783c6837d72103480c375b9e36de.wav",
            ],
            durations: [19.115792, 20.814792],
          },
          title: "High-level Languages",
        },
        {
          images: [
            {
              contentSize: "349317 B",
              name: "Scripting languages comparison",
              accentColor: "#61666A",
              height: 1203,
              imageId: "B916EBAE22DF5A5E01BB7E6BFCB574C610A4DBEE",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://test-able.blogspot.com/2012/07/scripting-languages-comparison.html",
              hostPageDisplayUrl:
                "https://test-able.blogspot.com/2012/07/scripting-languages-comparison.html",
              width: 1541,
              contentUrl:
                "https://3.bp.blogspot.com/-mSxSbOKbtxk/UBBOtIbtguI/AAAAAAAAFXE/8v9MoaUzQPI/s1600/scripting+languages+1.jpg",
            },
            {
              hostPageUrl:
                "https://www.slideserve.com/bluma/introduction-to-scripting-languages-with-perl-powerpoint-ppt-presentation",
              name: "PPT - Introduction to Scripting Languages (with Perl) PowerPoint Presentation - ID:5699497",
              width: 1024,
              encodingFormat: "jpeg",
              accentColor: "#0D95BE",
              hostPageDisplayUrl:
                "https://www.slideserve.com/bluma/introduction-to-scripting-languages-with-perl...",
              height: 768,
              imageId: "2AFA6719B885158CA72BFF4F37A81FAE16BF7BA2",
              contentSize: "90838 B",
              contentUrl:
                "https://image3.slideserve.com/5699497/origin-of-scripting-languages-l.jpg",
            },
            {
              hostPageUrl:
                "https://www.slideserve.com/dong/scripting-languages",
              height: 768,
              contentUrl:
                "https://image.slideserve.com/514277/scripting-languages5-l.jpg",
              contentSize: "113956 B",
              hostPageDisplayUrl:
                "https://www.slideserve.com/dong/scripting-languages",
              name: "PPT - Scripting Languages PowerPoint Presentation, free download - ID:514277",
              width: 1024,
              accentColor: "#343498",
              imageId: "6897D3B08B9C471AF0AEC71714EF16F1BD74047A",
              encodingFormat: "jpeg",
            },
          ],
          title: "Scripting Languages",
          talkingPoint:
            "Scripting languages, like JavaScript and Ruby, excel in automating tasks and creating dynamic web pages. They are often interpreted and offer flexibility for rapid prototyping.",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684933592/aishortz/eece16a8c10adffc22d3f5c4a0a1f17a9bbe0e24202cbd619a8bf8ba74de0ea2/en-US-Standard-D-8574bbf42b4b641589c58cac43d76005.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684933592/aishortz/eece16a8c10adffc22d3f5c4a0a1f17a9bbe0e24202cbd619a8bf8ba74de0ea2/en-US-Standard-F-8574bbf42b4b641589c58cac43d76005.wav",
            ],
            durations: [12.814417, 13.422875],
          },
        },
        {
          title: "Domain-specific Languages (DSLs)",
          images: [
            {
              contentUrl: "https://martinfowler.com/books/dsl.jpg",
              imageId: "C3AB852C16DD5F440575528D5820B830909FC036",
              name: "Domain Specific Languages",
              encodingFormat: "jpeg",
              width: 500,
              hostPageUrl: "https://www.martinfowler.com/books/dsl.html",
              hostPageDisplayUrl: "https://www.martinfowler.com/books/dsl.html",
              accentColor: "#C4070E",
              contentSize: "77050 B",
              height: 661,
            },
            {
              imageId: "2CCE4A33155A85682188A703B76C7DB379A4671C",
              contentUrl: "http://www.se-rwth.de/topics/pics/dsl01.png",
              accentColor: "#41688A",
              encodingFormat: "png",
              height: 527,
              hostPageDisplayUrl:
                "www.se-rwth.de/topics/Domain-Specific-Languages.php",
              contentSize: "36091 B",
              name: "SE@RWTH: Topic 'Domain-Specific Languages (DSLs)'",
              hostPageUrl:
                "http://www.se-rwth.de/topics/Domain-Specific-Languages.php",
              width: 1429,
            },
            {
              hostPageDisplayUrl: "https://queue.acm.org/detail.cfm?id=2617811",
              contentUrl:
                "https://dl.acm.org/cms/attachment/861900f9-9a7c-4c09-8912-5838fdde39b9/gill1.png",
              height: 333,
              width: 640,
              encodingFormat: "png",
              contentSize: "33907 B",
              accentColor: "#5E913A",
              hostPageUrl: "https://queue.acm.org/detail.cfm?id=2617811",
              imageId: "915806E060DFEE36029FEE01A08BCE7F6331E5D4",
              name: "Domain-specific Languages and Code Synthesis Using Haskell - ACM Queue",
            },
          ],
          voiceAudio: {
            durations: [17.836292, 18.619125],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684933592/aishortz/eece16a8c10adffc22d3f5c4a0a1f17a9bbe0e24202cbd619a8bf8ba74de0ea2/en-US-Standard-D-25491695df8f13db07a82f573cfcff6a.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684933592/aishortz/eece16a8c10adffc22d3f5c4a0a1f17a9bbe0e24202cbd619a8bf8ba74de0ea2/en-US-Standard-F-25491695df8f13db07a82f573cfcff6a.wav",
            ],
          },
          talkingPoint:
            "Domain-specific languages (DSLs) focus on specific problem domains, like SQL for database querying or MATLAB for mathematical computations, offering specialized features and optimized performance for their respective fields.",
        },
        {
          title: "Functional Programming Languages",
          images: [
            {
              contentUrl:
                "https://marketbusinessnews.com/wp-content/uploads/2021/01/programming-1-500x349.jpg",
              imageId: "19E6192AE423ADA11626795BB6E3AA6379273E28",
              encodingFormat: "jpeg",
              accentColor: "#B78A14",
              name: "7 Best Functional Programming Languages To Know About In 2021",
              height: 349,
              contentSize: "19330 B",
              hostPageDisplayUrl:
                "https://marketbusinessnews.com/7-best-functional-programming-languages-to-know-about-in...",
              hostPageUrl:
                "https://marketbusinessnews.com/7-best-functional-programming-languages-to-know-about-in-2021/255444/",
              width: 500,
            },
            {
              name: "Functional Programming Languages: Concepts & Advantages – LearnEd",
              width: 960,
              hostPageDisplayUrl:
                "https://learned.azurewebsites.net/2022/09/30/functional-programming-languages-concepts...",
              hostPageUrl:
                "https://learned.azurewebsites.net/2022/09/30/functional-programming-languages-concepts-advantages/",
              imageId: "0A6BA7E9D078E6839407FA53B0077207D696AA6D",
              height: 540,
              contentUrl:
                "https://hackr.io/blog/media/functional-programming-languages.png",
              contentSize: "112597 B",
              encodingFormat: "png",
              accentColor: "#0060CB",
            },
            {
              imageId: "811FD3DB066E6D3E7460E90BA30F8C3B0C2A0D5F",
              hostPageDisplayUrl:
                "https://medium.com/scalac/top-functional-programming-languages-ranking-based-on...",
              name: "Top Functional Programming Languages Ranking Based On Sentiment Analysis 2021 - Scalac - Medium",
              contentUrl:
                "https://miro.medium.com/max/1280/0*9Kv0eAPFftnoWGW4.jpg",
              height: 1759,
              hostPageUrl:
                "https://medium.com/scalac/top-functional-programming-languages-ranking-based-on-sentiment-analysis-ranking-a883af769d4b",
              contentSize: "198079 B",
              width: 1280,
              accentColor: "#C25409",
              encodingFormat: "jpeg",
            },
          ],
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684933592/aishortz/eece16a8c10adffc22d3f5c4a0a1f17a9bbe0e24202cbd619a8bf8ba74de0ea2/en-US-Standard-D-d4ad2f2842a1a21e7dc35718a0f1adfb.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684933592/aishortz/eece16a8c10adffc22d3f5c4a0a1f17a9bbe0e24202cbd619a8bf8ba74de0ea2/en-US-Standard-F-d4ad2f2842a1a21e7dc35718a0f1adfb.wav",
            ],
            durations: [11.6195, 12.186333],
          },
          talkingPoint:
            "Functional programming languages, such as Haskell and Lisp, emphasize immutability and the use of pure functions, promoting code reliability and concurrency.",
        },
      ],
    },
    metadata: {
      durationInSeconds: 600,
      style: "professional",
      title: "The Different Types of Programming Languages Explained",
      width: 1920,
      height: 1080,
      color: {
        gradientStartColor: "#ffffff",
        gradientEndColor: "#0066ff",
        accentColor: "#0066ff",
      },
      topic: "Programming Languages",
      description:
        "This video should introduce and compare different types of programming languages. The video should cover programming language paradigms, such as object-oriented programming and functional programming, and how they are used in different applications. Additionally, the video should explain the advantages and disadvantages of each language, as well as their suitability for different tasks. Examples of programming languages that can be covered in the video are Java, Python, JavaScript, Ruby, and C++.",
    },
    creditType: "free",
  },
  {
    message: "Video created successfully!",
    metadata: {
      title:
        "Revolutionize Your Video Animations with Viddyoze's New AI Features",
      color: {
        accentColor: "#0072C6",
        gradientStartColor: "#0072C6",
        gradientEndColor: "#00B0F0",
      },
      width: 1920,
      height: 1080,
      style: "professional",
      topic: "New AI Features in Viddyoze Platform",
      durationInSeconds: 60,
      table: {
        label: "Comparison of New AI Features",
      },
      description:
        "Create a promotional video for a webinar showcasing the release of new AI features in the Viddyoze platform. The video should briefly explain the benefits of using these new features and how they can change the way video animations are created and used.",
    },
    isPublic: false,
    data: {
      outro: {
        talkingPoint:
          "Don't forget to check out our other videos about video creation and editing. We have plenty of tutorials and tips to help you enhance your video content. If you enjoyed this video, please like, share, and subscribe to our channel for more exciting content. Thanks for watching!",
        voiceAudio: {
          durations: [16.010958, 17.25275],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927927/aishortz/f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606/en-US-Standard-D-14f5cb2778483125a25f6ffdb914135f.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927927/aishortz/f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606/en-US-Standard-F-14f5cb2778483125a25f6ffdb914135f.wav",
          ],
        },
      },
      videoSections: [
        {
          title:
            "Introduction to Upcoming Webinar on New AI Features on Viddyoze Platform",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927919/aishortz/f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606/en-US-Standard-D-7105aa57a0f64a433eaec8b2bcf0d9d3.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927919/aishortz/f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606/en-US-Standard-F-7105aa57a0f64a433eaec8b2bcf0d9d3.wav",
            ],
            durations: [14.807167, 15.290792],
          },
          talkingPoint:
            "Hey guys, I'm excited to tell you about the upcoming webinar on June 1st at 3pm where Jamie will be discussing the new AI features being released on the Viddyoze platform.",
          images: [
            {
              accentColor: "#2119B2",
              width: 1200,
              height: 628,
              hostPageDisplayUrl: "https://mycb.site/viddyoze-review?id=1",
              contentSize: "42885 B",
              hostPageUrl: "https://mycb.site/viddyoze-review?id=1",
              contentUrl: "https://viddyoze.com/media/fb-share-image.jpg",
              encodingFormat: "jpeg",
              imageId: "4F4604A8F4149BB7DA0E671D2FE16A399653BEB9",
              name: "ClickBank Review Site Viddyoze Review",
            },
            {
              accentColor: "#2F017E",
              width: 1779,
              hostPageDisplayUrl:
                "https://www.iki-sea.org/2020/11/16/webinar-can-ai-be-creative-nov-25th-2020",
              imageId: "78C706E6947554920A93070C504A19B8B042A526",
              contentSize: "692305 B",
              hostPageUrl:
                "https://www.iki-sea.org/2020/11/16/webinar-can-ai-be-creative-nov-25th-2020/",
              name: "The Institute for Knowledge and Innovation South East Asia | Webinar – Can AI be Creative – Nov ...",
              contentUrl:
                "http://www.iki-sea.org/wp-content/uploads/2020/11/Artboard-2EP10.jpg",
              encodingFormat: "jpeg",
              height: 873,
            },
            {
              height: 720,
              accentColor: "#5F4C3B",
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=EzgpGXl-DiM",
              contentUrl:
                "https://i.ytimg.com/vi/EzgpGXl-DiM/maxresdefault.jpg",
              imageId: "485B89B88DA53D0CB4E683D42EB1E00DCD47D62B",
              encodingFormat: "jpeg",
              width: 1280,
              contentSize: "70246 B",
              name: "Viddyoze Review Webinar Replay Demo Bonus - Viddyoze AI - YouTube",
              hostPageUrl: "https://www.youtube.com/watch?v=EzgpGXl-DiM",
            },
          ],
        },
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927919/aishortz/f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606/en-US-Standard-D-fb6d9dc2816a078768036e40a6b944bd.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927919/aishortz/f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606/en-US-Standard-F-fb6d9dc2816a078768036e40a6b944bd.wav",
            ],
            durations: [11.649875, 11.670542],
          },
          talkingPoint:
            "This webinar is completely free and is a great opportunity to learn about the new features and how they can benefit your videos.",
          images: [
            {
              hostPageDisplayUrl:
                "https://www.totalebizsolutions.com/powering-education-sector",
              contentUrl:
                "https://www.totalebizsolutions.com/wp-content/uploads/2020/08/Benefits-of-AI.jpg",
              height: 630,
              width: 1200,
              contentSize: "90722 B",
              imageId: "D432C6C4FD0C82EC7C2C8FE2786DCF495DBAE4F4",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://www.totalebizsolutions.com/powering-education-sector/",
              name: "Powering the Education Sector With Hyper-personalisation Learning",
              accentColor: "#166FB5",
            },
            {
              hostPageUrl:
                "https://blogs.ampcus.com/11-ways-ai-will-benefit-businesses-2018/",
              imageId: "DA593B9C7820AA6816C01981B32FE5BDCD68A935",
              contentUrl:
                "https://blogs.ampcus.com/wp-content/uploads/2018/03/11-Ways-AI-will-Benefit-Businesses-in-2018..jpg",
              contentSize: "316894 B",
              width: 1000,
              hostPageDisplayUrl:
                "https://blogs.ampcus.com/11-ways-ai-will-benefit-businesses-2018",
              height: 957,
              encodingFormat: "jpeg",
              accentColor: "#027CC9",
              name: "11 Ways AI will Benefit Businesses in 2020 - Ampcus",
            },
            {
              hostPageUrl:
                "https://elearninginfographics.com/ai-in-recruitment-innovation-meets-opportunity-infographic/",
              encodingFormat: "jpeg",
              imageId: "99E9E3303956085F589EE70572466E9FF812FDFA",
              hostPageDisplayUrl:
                "https://elearninginfographics.com/ai-in-recruitment-innovation-meets-opportunity...",
              height: 3045,
              name: "AI In Recruitment: Innovation Meets Opportunity - e-Learning Infographics",
              contentUrl:
                "https://cdn-infographic.pressidium.com/wp-content/uploads/2019/04/4146735311-960x3045.jpg",
              contentSize: "265544 B",
              width: 960,
              accentColor: "#1A81B1",
            },
          ],
          title:
            "Free Opportunity to Learn about New AI Features and Benefits for Your Videos",
        },
        {
          title: "Examples of New AI Features on Viddyoze Platform",
          talkingPoint:
            "Jamie will be showcasing examples of what can be done with the new AI features, such as the ability to automatically remove backgrounds and add custom animations.",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927919/aishortz/f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606/en-US-Standard-D-7bb9532895d43664905f25506fb4e9df.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927919/aishortz/f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606/en-US-Standard-F-7bb9532895d43664905f25506fb4e9df.wav",
            ],
            durations: [12.522875, 12.768542],
          },
          images: [
            {
              imageId: "E7E9A11465F2B008BCE70879AD36D064293AB262",
              hostPageDisplayUrl:
                "https://launchspace.net/software/review/viddyoze/comment-page-1",
              accentColor: "#1243B9",
              height: 591,
              contentUrl:
                "https://launchspace.net/wp-content/uploads/2019/05/viddyoze-review.jpg",
              width: 800,
              contentSize: "44007 B",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://launchspace.net/software/review/viddyoze/comment-page-1/",
              name: "Viddyoze Reviews: Overview, Pricing, and Features - Launch Space",
            },
            {
              hostPageUrl:
                "http://www.socialleadsfreak.com/viddyoze-review/index.html",
              encodingFormat: "jpeg",
              contentUrl:
                "http://www.socialleadsfreak.com/wp-content/uploads/2018/08/viddyoze-compressed-1536x864.jpg",
              name: "Viddyoze 3.0 Review - Create Animations In Minutes\u200e",
              imageId: "D0B8ECD841CC5903E83614019F4D95D9A8E5A779",
              accentColor: "#BDA80E",
              height: 864,
              contentSize: "111279 B",
              hostPageDisplayUrl:
                "www.socialleadsfreak.com/viddyoze-review/index.html",
              width: 1536,
            },
            {
              encodingFormat: "jpeg",
              imageId: "B6A8A740EBDB358FC7D5D280D374C0FBD95ECD9C",
              hostPageDisplayUrl: "https://50wheel.com/viddyoze",
              accentColor: "#3B6231",
              height: 600,
              width: 714,
              contentSize: "39460 B",
              hostPageUrl: "https://50wheel.com/viddyoze/",
              contentUrl:
                "https://50wheel.com/wp-content/uploads/2018/09/viddyoze2-714x600.jpg",
              name: "Viddyoze - Features, Pricing, Reviews, Comparisons and Alternatives",
            },
          ],
        },
        {
          title:
            "Exciting New Feature: Automatically Sync Animations with Audio in Your Videos",
          voiceAudio: {
            durations: [15.510458, 15.927875],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927919/aishortz/f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606/en-US-Standard-D-2f1f139775f391de7c3522c4ea9cb7e8.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927919/aishortz/f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606/en-US-Standard-F-2f1f139775f391de7c3522c4ea9cb7e8.wav",
            ],
          },
          talkingPoint:
            "One of the most exciting new features is the ability to automatically sync your animations with the audio in your videos, making it easier than ever to create professional-looking content.",
          images: [
            {
              width: 1280,
              contentSize: "91401 B",
              height: 720,
              accentColor: "#027CC9",
              hostPageUrl: "https://www.youtube.com/watch?v=6nsR13E_kAQ",
              contentUrl:
                "https://i.ytimg.com/vi/6nsR13E_kAQ/maxresdefault.jpg",
              encodingFormat: "jpeg",
              hostPageDisplayUrl: "https://www.youtube.com/watch?v=6nsR13E_kAQ",
              imageId: "3F10F81BDD369A263336BA49AE7A2DE1E9366177",
              name: "Syncing Elements with Audio Inside Groups | CS Animation Tutorials - YouTube",
            },
            {
              imageId: "8D323995F268A8FC6F55DB08FD9E0F0BF2E8D379",
              encodingFormat: "png",
              contentSize: "145717 B",
              name: "Adding Audio and Syncing Animations - E-Learning Heroes",
              accentColor: "#AD1E1F",
              hostPageUrl:
                "https://community.articulate.com/series/getting-started-with-articulate-presenter-13/articles/adding-audio-and-syncing-animations",
              contentUrl:
                "https://articulate-heroes.s3.amazonaws.com/audio-editorvn4dj8.png",
              hostPageDisplayUrl:
                "https://community.articulate.com/series/getting-started-with-articulate-presenter-13...",
              width: 600,
              height: 337,
            },
            {
              width: 1280,
              imageId: "5901A9C9B6AFEBE6D2CE1BD1C9A97657D705155A",
              height: 720,
              contentSize: "54801 B",
              accentColor: "#546678",
              name: "Lip-sync animations ( WIP ) video - 3:00am Dead Time™ - Mod DB",
              hostPageDisplayUrl:
                "https://www.moddb.com/games/300-am-dead-time/videos/lip-sync-animations-wip",
              hostPageUrl:
                "https://www.moddb.com/games/300-am-dead-time/videos/lip-sync-animations-wip",
              contentUrl:
                "https://cdn.dbolical.com/videos/games/1/19/18340/300am-dead-time-lip-sync-animation-test-3-wip.mp4.jpg",
              encodingFormat: "jpeg",
            },
          ],
        },
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927919/aishortz/f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606/en-US-Standard-D-8c8ec7f134ec307679d28133eae92285.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927919/aishortz/f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606/en-US-Standard-F-8c8ec7f134ec307679d28133eae92285.wav",
            ],
            durations: [14.77725, 15.061458],
          },
          images: [
            {
              height: 628,
              contentSize: "30904 B",
              contentUrl:
                "https://techfreaksavvy.com/wp-content/uploads/2020/05/Viddyoze.jpg",
              width: 1200,
              hostPageDisplayUrl:
                "https://techfreaksavvy.com/viddyoze-review-3-0-is-it-a-scam-or-legit",
              hostPageUrl:
                "https://techfreaksavvy.com/viddyoze-review-3-0-is-it-a-scam-or-legit/",
              name: "Viddyoze Review 3.0 | Is It A Scam or legit?",
              imageId: "17CF58628FABA67B85307A7B83C095143D7C2D00",
              encodingFormat: "jpeg",
              accentColor: "#091CC2",
            },
            {
              name: "WEBINAR REMINDER: Join us next Thursday, May 18: Maximize Your TEAM Productivity in 10 Steps",
              encodingFormat: "png",
              height: 800,
              hostPageDisplayUrl: "https://nozbe.com/blog/spring-webinar",
              hostPageUrl: "https://nozbe.com/blog/spring-webinar/",
              imageId: "2F57C2F367DFF14A34A6B0F3E3D4A40007BE7666",
              contentSize: "45508 B",
              accentColor: "#CC6400",
              contentUrl:
                "https://files.nozbe.com/images/blog/1600w/spring2017-webinar.png",
              width: 1600,
            },
            {
              hostPageDisplayUrl: "https://mycb.site/viddyoze-review?id=1",
              height: 628,
              imageId: "4F4604A8F4149BB7DA0E671D2FE16A399653BEB9",
              encodingFormat: "jpeg",
              name: "ClickBank Review Site Viddyoze Review",
              accentColor: "#2119B2",
              contentUrl: "https://viddyoze.com/media/fb-share-image.jpg",
              width: 1200,
              contentSize: "42885 B",
              hostPageUrl: "https://mycb.site/viddyoze-review?id=1",
            },
          ],
          talkingPoint:
            "So mark your calendars for June 1st at 3pm and join us for this informative and engaging webinar on the new AI features in the Viddyoze platform!",
          title:
            "Reminder to Join the Webinar on June 1st at 3pm for New AI Features on Viddyoze Platform",
        },
      ],
      table: {
        isPresent: true,
        table:
          "| AI Feature | Description | Advantages | Disadvantages |\n| --- | --- | --- | --- |\n| Sentiment Analysis | Analyzes emotions and opinions in text | Helps companies understand consumer feedback | Not always accurate in understanding complex language |\n| Object Recognition | Identifies objects in images and videos | Useful in security and surveillance systems | May struggle with identifying objects in certain lighting conditions |\n| Natural Language Processing | Helps computers understand human language | Useful in chatbots and voice assistants | May struggle with understanding sarcasm and humor |\n| Recommendation Engines | Suggests products or services based on user data | Increases sales and customer satisfaction | May feel invasive to users who value privacy |",
        summary:
          "The table above shows a comparison of various new AI features in terms of their description, advantages, and disadvantages. Sentiment analysis analyzes emotions and opinions in text, which can be useful for companies looking to understand consumer feedback. However, it may not always be accurate in understanding complex language. Object recognition can identify objects in images and videos and is useful in security and surveillance systems, but may struggle with certain lighting conditions. Natural language processing helps computers understand human language and is useful in chatbots and voice assistants, but may struggle with understanding sarcasm and humor. Recommendation engines suggest products or services based on user data, which can increase sales and customer satisfaction. However, it may feel invasive to users who value privacy.",
        voiceAudio: {
          durations: [51.808625, 53.489792],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927918/aishortz/f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606/en-US-Standard-D-ce2b36cc3f844987a11a6dfa70c92b52.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927918/aishortz/f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606/en-US-Standard-F-ce2b36cc3f844987a11a6dfa70c92b52.wav",
          ],
        },
      },
      intro: {
        images: [
          {
            imageId: "E7E9A11465F2B008BCE70879AD36D064293AB262",
            contentSize: "44007 B",
            hostPageDisplayUrl:
              "https://launchspace.net/software/review/viddyoze/comment-page-1",
            width: 800,
            accentColor: "#1243B9",
            height: 591,
            encodingFormat: "jpeg",
            hostPageUrl:
              "https://launchspace.net/software/review/viddyoze/comment-page-1/",
            name: "Viddyoze Reviews: Overview, Pricing, and Features - Launch Space",
            contentUrl:
              "https://launchspace.net/wp-content/uploads/2019/05/viddyoze-review.jpg",
          },
          {
            accentColor: "#BDA80E",
            contentUrl:
              "http://www.socialleadsfreak.com/wp-content/uploads/2018/08/viddyoze-compressed-1536x864.jpg",
            height: 864,
            contentSize: "111279 B",
            encodingFormat: "jpeg",
            width: 1536,
            name: "Viddyoze 3.0 Review - Create Animations In Minutes\u200e",
            hostPageUrl:
              "http://www.socialleadsfreak.com/viddyoze-review/index.html",
            imageId: "D0B8ECD841CC5903E83614019F4D95D9A8E5A779",
            hostPageDisplayUrl:
              "www.socialleadsfreak.com/viddyoze-review/index.html",
          },
          {
            hostPageUrl: "https://50wheel.com/viddyoze/",
            contentSize: "39460 B",
            name: "Viddyoze - Features, Pricing, Reviews, Comparisons and Alternatives",
            accentColor: "#3B6231",
            height: 600,
            width: 714,
            contentUrl:
              "https://50wheel.com/wp-content/uploads/2018/09/viddyoze2-714x600.jpg",
            encodingFormat: "jpeg",
            hostPageDisplayUrl: "https://50wheel.com/viddyoze",
            imageId: "B6A8A740EBDB358FC7D5D280D374C0FBD95ECD9C",
          },
        ],
        talkingPoint:
          "In this video, we will explore the new AI features that have been added to the Viddyoze platform. These features promise to revolutionize the way video animations are created and used. Stay tuned to learn how these new features can benefit your videos.",
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927925/aishortz/f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606/en-US-Standard-D-4f92c415c39e9c95bbe3fdfd81d82cdd.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1684927925/aishortz/f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606/en-US-Standard-F-4f92c415c39e9c95bbe3fdfd81d82cdd.wav",
          ],
          durations: [14.890208, 15.08125],
        },
      },
    },
    createdAt: "Wed May 24 2023",
    uniqueId:
      "f338e0b234abe4ac4a2a55cfebdc64ce8fe0162ab7f3b5015dbd27913b3f1606",
    render: {
      error: "",
      status: "PENDING",
      url: "",
      msg: "Render not initiated yet.",
    },
    creditType: "free",
    userId: "user_2QEnHsQZfSpsAO1VJOqz8tSgVtE",
    status: "SUCCESS",
    error: "",
    prompt:
      "Make a video about A webinar to promote new AI features being released in the Viddyoze platform. ",
    referenceData:
      "The webinar will be free and take place on the 1st June at 3pm. In the webinar Jamie will discuss the new features being released and show examples of what can be done.",
  },
  {
    uniqueId:
      "f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef",
    data: {
      outro: {
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1686377375/aishortz/f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef/en-US-Standard-D-8dedea1ea0206b13acfc81c672162dde.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1686377375/aishortz/f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef/en-US-Standard-F-8dedea1ea0206b13acfc81c672162dde.wav",
          ],
          durations: [15.537625, 16.319917],
        },
        talkingPoint:
          "Thanks for watching our video on mowing a lawn like a pro! If you enjoyed this video, please like and share it, and consider subscribing to our channel for more lawn care tips. And don't forget to check out our recommended videos on similar topics. Happy mowing!",
      },
      table: {
        summary:
          "Mowing is one of the most common practices in lawn management. It may seem simple but it is important to mow at the right height to have a healthy and beautiful lawn. Grass types vary in their growing characteristics, thus requiring different mowing heights. The table provides guidelines for the recommended mowing heights for a few of the most common grass types. For Bermuda grass and Zoysia grass, it is recommended to keep it short between 0.5 - 2.0 inches. On the other hand, Kentucky Bluegrass and Centipede Grass should be mowed at a slightly higher height, between 1.5 - 2.5 inches. St. Augustine Grass and Fescue Grass grow tall and should have a higher recommended mowing height range, between 2.0 - 3.5 inches. Lastly, Bahia Grass should be mowed at the highest height between 2.5 and 4.0 inches. It is important to follow these guidelines to avoid stressing the grass, compromising its health and making your lawn look unattractive.",
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1686377373/aishortz/f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef/en-US-Standard-D-48b06552193f993862b1f6d98a3740ec.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1686377373/aishortz/f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef/en-US-Standard-F-48b06552193f993862b1f6d98a3740ec.wav",
          ],
          durations: [59.789042, 61.380042],
        },
        table:
          "| Grass Type | Recommended Mowing Height (in inches) |\n| --- | --- |\n| Bermuda Grass | 0.5 - 1.5 |\n| Kentucky Bluegrass | 1.5 - 2.5 |\n| St. Augustine Grass | 2.0 - 3.5 |\n| Fescue Grass | 2.0 - 3.5 |\n| Zoysia Grass | 0.5 - 2.0 |\n| Centipede Grass | 1.5 - 2.5 |\n| Bahia Grass | 2.5 - 4.0 |",
        isPresent: true,
      },
      videoSections: [
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686377374/aishortz/f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef/en-US-Standard-D-9d6d0e4b202cbb4e7886cfb640247456.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686377374/aishortz/f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef/en-US-Standard-F-9d6d0e4b202cbb4e7886cfb640247456.wav",
            ],
            durations: [17.893542, 18.550958],
          },
          talkingPoint:
            "Hey there, today we're talking about mowing a lawn and we're going to start with picking the right lawn mower. You want to make sure you choose a mower that fits your lawn size and terrain. For example, if you have a large lawn with hills, you may want a self-propelled mower to make the job easier.",
          images: [
            {
              width: 700,
              imageId: "EC1B45D0209335B2556AA8DE056141FA22345D39",
              name: "Choosing the right lawn mower - Smartanswers.net",
              accentColor: "#ABA720",
              hostPageUrl:
                "https://smartanswers.net/choosing-the-right-lawn-mower/",
              contentUrl:
                "https://d2hg8ctx8thzji.cloudfront.net/smartanswers.net/wp-content/uploads/2022/08/Choosingtherightlawnmower-700x350.jpg",
              hostPageDisplayUrl:
                "https://smartanswers.net/choosing-the-right-lawn-mower",
              height: 350,
              encodingFormat: "jpeg",
              contentSize: "77744 B",
            },
            {
              contentUrl:
                "https://kylesgarage.com/wp-content/uploads/2020/11/11-1.jpg",
              width: 2048,
              encodingFormat: "jpeg",
              name: "A Guide to Choosing the Right Self-Propelled Lawn Mower - Kyle's Garage",
              height: 1365,
              hostPageUrl:
                "https://kylesgarage.com/a-guide-to-choosing-the-right-self-propelled-lawn-mower/",
              accentColor: "#A74224",
              imageId: "5A06392C99F259A22DE4E8675343A37239A000F5",
              contentSize: "176611 B",
              hostPageDisplayUrl:
                "https://kylesgarage.com/a-guide-to-choosing-the-right-self-propelled-lawn-mower",
            },
            {
              encodingFormat: "jpeg",
              height: 1131,
              contentSize: "1829962 B",
              name: "Choosing the Right Lawn Mower | The Allstate Blog",
              accentColor: "#4B6121",
              width: 1698,
              contentUrl:
                "https://blog.allstate.com/wp-content/uploads/2016/03/lawn-mower_istock.jpg",
              imageId: "B5FEC798F2C66291EA1A6BC6838865898701246E",
              hostPageDisplayUrl:
                "https://blog.allstate.com/choosing-the-right-lawn-mower-video",
              hostPageUrl:
                "https://blog.allstate.com/choosing-the-right-lawn-mower-video/",
            },
          ],
          title: "Choosing the Right Lawn Mower",
        },
        {
          talkingPoint:
            "Now let's talk about how your lawn mower is powered. You have a few options: gas, electric, or manual. Gas mowers are powerful and great for large lawns, but they require more maintenance. Electric mowers are quieter and easier to maintain, but they may not have as much power. Manual mowers are eco-friendly and quiet, but they require more physical effort.",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686377374/aishortz/f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef/en-US-Standard-D-9c409785e81ff655582a05a23f1bca80.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686377374/aishortz/f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef/en-US-Standard-F-9c409785e81ff655582a05a23f1bca80.wav",
            ],
            durations: [25.476083, 26.625042],
          },
          title: "Factors to Consider in Powering Your Lawn Mower",
          images: [
            {
              hostPageUrl: "https://www.pinterest.com/pin/603834262529218384/",
              contentSize: "33029 B",
              encodingFormat: "jpeg",
              height: 400,
              imageId: "29D71FB80978850881D34EFB9A594303109B43D8",
              width: 400,
              contentUrl:
                "https://i.pinimg.com/originals/07/80/6b/07806bb58e9da9627fa13e1775c5603e.jpg",
              accentColor: "#999A31",
              name: "The Anatomy of a Lawn Mower - Modern Design | Lawn mower repair, Lawn mower, Lawn mower maintenance",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/603834262529218384",
            },
            {
              name: "How to Change Your Lawn Mower Battery - Golly Gee Gardening",
              height: 332,
              contentUrl:
                "https://gollygeegardening.com/wp-content/uploads/2019/09/lawn-mower.jpg",
              width: 500,
              accentColor: "#47662D",
              contentSize: "88345 B",
              imageId: "9139C1CC6ACD080C4E11DAF6252586038B945F89",
              hostPageUrl:
                "https://gollygeegardening.com/how-to-change-your-lawn-mower-battery/",
              encodingFormat: "jpeg",
              hostPageDisplayUrl:
                "https://gollygeegardening.com/how-to-change-your-lawn-mower-battery",
            },
            {
              hostPageDisplayUrl:
                "https://theridinglawnmower.com/lawn-tractor/lawn-tractor-battery",
              contentSize: "224984 B",
              name: "Lawn Tractor Battery Guide ( + Riding Lawn Mower Tips) | The Mow Dojo",
              width: 2048,
              encodingFormat: "jpeg",
              accentColor: "#456386",
              height: 1365,
              contentUrl:
                "https://theridinglawnmower.com/wp-content/uploads/2021/03/HRG466-Battery-Changing.jpg",
              imageId: "B107B55B5FB92B2A559D32A81BEBD03D03939255",
              hostPageUrl:
                "https://theridinglawnmower.com/lawn-tractor/lawn-tractor-battery/",
            },
          ],
        },
        {
          images: [
            {
              contentUrl:
                "https://cdn.mos.cms.futurecdn.net/sDLy9H9rxzMapCZgWTUcD8-768-80.jpg",
              height: 432,
              hostPageDisplayUrl:
                "https://www.realhomes.com/news/gardening-expert-best-length-to-cut-grass",
              imageId: "84A23C8D6F31CBF577D7E7F8D41DE88C5FCDF6D8",
              width: 768,
              name: "The best length to cut grass to, according to gardening expert | Real Homes",
              encodingFormat: "jpeg",
              contentSize: "82097 B",
              hostPageUrl:
                "https://www.realhomes.com/news/gardening-expert-best-length-to-cut-grass",
              accentColor: "#878C3F",
            },
            {
              accentColor: "#B64A15",
              height: 751,
              width: 1280,
              hostPageUrl:
                "https://www.flymo.com/uk/content/hints-tips/lawn-care/top-tips-for-grass-cutting",
              contentUrl:
                "https://styla-prod-us.imgix.net/2e66cd920d9ca27ca19c3dc169421451?auto=format%2Ccompress&w=1280&h=751&fit=crop&crop=faces%2Cedges",
              contentSize: "298610 B",
              name: "Top Tips for Grass Cutting",
              hostPageDisplayUrl:
                "https://www.flymo.com/uk/content/hints-tips/lawn-care/top-tips-for-grass-cutting",
              imageId: "038E51FAFA3C189BAB31D757C859DA7DB9699AA9",
              encodingFormat: "jpeg",
            },
            {
              width: 800,
              hostPageUrl:
                "https://www.flymo.com/uk/content/hints-tips/lawn-care/top-tips-for-grass-cutting",
              hostPageDisplayUrl:
                "https://www.flymo.com/uk/content/hints-tips/lawn-care/top-tips-for-grass-cutting",
              contentSize: "177035 B",
              height: 400,
              imageId: "038E51FAFA3C189BAB31DE94095EC09DF3BA1A83",
              name: "Top Tips for Grass Cutting",
              encodingFormat: "jpeg",
              contentUrl:
                "https://img.styla.com/resizer/sfh_0x0_95/_50270_71631.jpeg?w=1200&h=630&fit=crop&crop=faces",
              accentColor: "#505917",
            },
          ],
          talkingPoint:
            "When it comes to cutting the grass, you want to make sure you're cutting it to the right length. Generally, you should aim to cut the grass to about 2-3 inches. You also want to make sure the lawn mower blade is set at the right height. If it's too low, you risk damaging the grass roots. If it's too high, you won't get an even cut. And don't forget to set the lawn mower to mulching mode to help fertilize your lawn.",
          title: "Tips on Cutting Grass to the Right Length",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686377374/aishortz/f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef/en-US-Standard-D-13cb0fd7a19124bf5dc61c2bbe49fa7e.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686377374/aishortz/f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef/en-US-Standard-F-13cb0fd7a19124bf5dc61c2bbe49fa7e.wav",
            ],
            durations: [25.627375, 27.206958],
          },
        },
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686377374/aishortz/f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef/en-US-Standard-D-7e211d4285f86127c7a416eeb5e5d6bd.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686377374/aishortz/f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef/en-US-Standard-F-7e211d4285f86127c7a416eeb5e5d6bd.wav",
            ],
            durations: [22.186208, 22.740958],
          },
          images: [
            {
              height: 4613,
              width: 1000,
              imageId: "9142A3F75C486F6131A15B7AF84E23F02D0A88C0",
              hostPageDisplayUrl:
                "https://infographicjournal.com/lawn-mower-safety",
              encodingFormat: "jpeg",
              hostPageUrl: "https://infographicjournal.com/lawn-mower-safety/",
              name: "Lawn Mower Safety [Infographic]",
              accentColor: "#C00D0B",
              contentSize: "787507 B",
              contentUrl:
                "https://infographicjournal.com/wp-content/uploads/2018/06/Lawn-Mower-Safety.jpg",
            },
            {
              contentSize: "1473414 B",
              height: 3300,
              encodingFormat: "jpeg",
              contentUrl:
                "https://intermountainhealthcare.org/-/media/images/modules/blog/posts/2014/06/lawnmowing_safety-infographic.jpg?la=en",
              accentColor: "#0962B0",
              width: 2550,
              name: "Prevent Lawnmower Injuries",
              hostPageDisplayUrl:
                "https://intermountainhealthcare.org/blogs/topics/live-well/2014/06/prevent-lawnmower...",
              imageId: "0950E3FB4245E0D7BF29CED6F6F2E2B81D9A0023",
              hostPageUrl:
                "https://intermountainhealthcare.org/blogs/topics/live-well/2014/06/prevent-lawnmower-injuries/",
            },
            {
              height: 600,
              accentColor: "#4E7302",
              encodingFormat: "jpeg",
              name: "Lawn Mower Safety Tips [Infographic] - Best Infographics",
              contentSize: "79314 B",
              width: 700,
              imageId: "59E107003784027CD77931337774CEAC253EA584",
              hostPageUrl:
                "http://www.best-infographics.com/lawn-mower-safety-guide/",
              hostPageDisplayUrl:
                "www.best-infographics.com/lawn-mower-safety-guide",
              contentUrl:
                "http://www.best-infographics.com/wp-content/uploads/2018/06/28/Lawn-Mower-Safety-700x600.jpg",
            },
          ],
          title: "Safety Precautions When Using a Lawn Mower",
          talkingPoint:
            "Now for some safety precautions. Always wear closed-toe shoes to protect your feet from the spinning blades. If you have long hair, tie it back to avoid getting it caught in the mower. And be careful when mowing near obstacles like rocks or tree roots, as they can damage the lawn mower or even cause it to kick back and injure you.",
        },
        {
          title: "Pro Tips for Mowing Your Lawn",
          talkingPoint:
            "So there you have it, some tips for mowing a lawn like a pro. Remember to choose the right lawn mower, set the blade height correctly, and take safety precautions to avoid any accidents.",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686377374/aishortz/f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef/en-US-Standard-D-0e5cc75f6de73f21cfa1f61b1e7b56dd.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1686377374/aishortz/f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef/en-US-Standard-F-0e5cc75f6de73f21cfa1f61b1e7b56dd.wav",
            ],
            durations: [12.948958, 13.834],
          },
          images: [
            {
              name: "5 Professional Tips for Mowing Your Lawn | Creative Edge",
              accentColor: "#4C7512",
              encodingFormat: "jpeg",
              height: 614,
              imageId: "91EF1DBE6BA2D09D99B11C077C0CF24DCB9EDA9D",
              hostPageUrl:
                "https://lawncarelakelandtampaflorida.com/5-professional-tips-mowing-lawn/",
              width: 1024,
              contentSize: "142825 B",
              contentUrl:
                "https://lawncarelakelandtampaflorida.com/wp-content/uploads/2016/11/5-Professional-Tips-for-Mowing-Your-Lawn.jpg",
              hostPageDisplayUrl:
                "https://lawncarelakelandtampaflorida.com/5-professional-tips-mowing-lawn",
            },
            {
              height: 1260,
              imageId: "5CA5AD09DC74C90296DF0BD2290C4F211CB5CA86",
              width: 600,
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/492581277991016901",
              accentColor: "#AEB615",
              hostPageUrl: "https://www.pinterest.com/pin/492581277991016901/",
              contentSize: "184525 B",
              encodingFormat: "jpeg",
              name: "How to Mow Your Lawn Like a Pro | Lawn care diy, Lawn care tips, Mowing",
              contentUrl:
                "https://i.pinimg.com/originals/c2/02/1c/c2021c4933013dff4237bcc09c1ed0e5.jpg",
            },
            {
              name: "Professional lawn mowing tips and tricks - Ideas by Mr Right",
              accentColor: "#6D9239",
              imageId: "6BDD8604D734E48452A5E84B4CCAEBA3F6695592",
              contentUrl:
                "https://www.mrright.in/ideas/wp-content/uploads/2017/05/featured-pixabay-5-883x416.jpg",
              contentSize: "102977 B",
              hostPageDisplayUrl:
                "https://www.mrright.in/ideas/home-improvement/professional-lawn-mowing-tips-tricks",
              height: 416,
              width: 883,
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://www.mrright.in/ideas/home-improvement/professional-lawn-mowing-tips-tricks/",
            },
          ],
        },
      ],
      intro: {
        talkingPoint:
          "In this video, we will take a look at the secrets to a perfectly manicured lawn. We will cover the best and most efficient ways to mow a lawn, including tips on picking the right lawn mower, maintaining the equipment, and properly mowing the grass. Stay tuned for some expert advice on achieving a beautiful lawn in no time!",
        voiceAudio: {
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1686377375/aishortz/f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef/en-US-Standard-D-b745a9a05c5bb1825667858f438d21ba.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1686377375/aishortz/f8b3f6e2219524311a660b5af9b33045d94d881e8f3c05ea02ea60d5809c00ef/en-US-Standard-F-b745a9a05c5bb1825667858f438d21ba.wav",
          ],
          durations: [19.261667, 20.004792],
        },
        images: [
          {
            hostPageDisplayUrl:
              "homeguides.sfgate.com/time-mow-lawn-hot-outside-42626.html",
            contentSize: "3251793 B",
            width: 2090,
            imageId: "815FB38FED5FAC289E5D012FC8A4675235E932F6",
            contentUrl:
              "http://photos.demandstudios.com/getty/article/171/95/78031287.jpg",
            accentColor: "#704233",
            height: 1672,
            name: "The Best Time to Mow a Lawn When it Is Hot Outside | Home Guides | SF Gate",
            encodingFormat: "jpeg",
            hostPageUrl:
              "http://homeguides.sfgate.com/time-mow-lawn-hot-outside-42626.html",
          },
          {
            imageId: "F14707135683C1A9408FC9FC89809BE556AC4E67",
            hostPageUrl:
              "http://green-blog.org/blogs/entry/867-gardening-done-right-5-simple-steps-for-having-a-beautiful-garden/",
            hostPageDisplayUrl:
              "green-blog.org/blogs/entry/867-gardening-done-right-5-simple-steps-for-having-a...",
            height: 1100,
            name: "Gardening Done Right: 5 Simple Steps for Having a Beautiful Garden - Urbanosaurus' Eco Blog ...",
            encodingFormat: "jpeg",
            contentSize: "492659 B",
            accentColor: "#3B7A0F",
            width: 1920,
            contentUrl:
              "http://www.hss.com/blog/wp-content/uploads/2014/04/lawn-mowing.jpg",
          },
          {
            name: "Mowing the Lawn is Bad for your Health",
            height: 2912,
            imageId: "3C6439B693FF4C4ADC7BD38D8FF628D73C10989F",
            contentUrl:
              "http://www.greenmoxie.com/wp/wp-content/uploads/lawn-alternatives.jpg",
            contentSize: "7586091 B",
            accentColor: "#8F883C",
            hostPageDisplayUrl:
              "www.greenmoxie.com/mowing-the-lawn-is-bad-for-your-health",
            hostPageUrl:
              "http://www.greenmoxie.com/mowing-the-lawn-is-bad-for-your-health/",
            encodingFormat: "jpeg",
            width: 4368,
          },
        ],
      },
    },
    referenceData:
      "The video will involve picking a lawn mower\n30 seconds about the way it is powered\n1 minute about how long the grass should be cut and how it needs to set on the lawn mower.\nprecautions for safety, like the possibility of getting your toes cut etc.",
    createdAt: "Sat Jun 10 2023",
    creditType: "free",
    metadata: {
      durationInSeconds: 180,
      topic: "Mowing a lawn",
      title: "Secrets to a Perfectly Manicured Lawn",
      style: "professional",
      width: 1920,
      table: {
        label: "Recommended mowing heights for common grass types",
      },
      color: {
        accentColor: "#3CB371",
        gradientStartColor: "#FFFFFF",
        gradientEndColor: "#3CB371",
      },
      height: 1080,
      description:
        "The video should cover the best and most efficient ways to mow a lawn. It should include tips on how to prepare the lawn, how to maintain the equipment, and how to properly mow the grass. Please exclude graphics, charts and tables from the video.",
    },
    status: "SUCCESS",
    prompt: "Make a video about A video about mowing a lawn",
    message: "Video created successfully!",
    isPublic: false,
    userId: "user_2R0BiMjwA8SdBnw4z2vYpIckN7A",
    render: {
      status: "PENDING",
      msg: "Render not initiated yet.",
      url: "",
      error: "",
    },
    error: "",
  },
  {
    isPublic: false,
    status: "SUCCESS",
    referenceData: "Event timeline, Music Preferences ",
    metadata: {
      title: "10 Essential Tips for Managing a Wedding | Don't Miss Out!",
      description:
        "This video should provide a step-by-step guide on how to manage a wedding effectively. It should include tips and common mistakes to avoid. The video should be engaging, easy to follow and its content must be informative and constructive.",
      durationInSeconds: 300,
      width: 1920,
      topic: "Managing a Wedding",
      style: "professional",
      color: {
        gradientEndColor: "#FFA07A",
        accentColor: "#FFA07A",
        gradientStartColor: "#FFE4E1",
      },
      height: 1080,
    },
    userId: "user_2QmxFBRSUmq2C5Q15HCX7qgCfME",
    prompt: "Make a video about Managing a wedding",
    uniqueId:
      "fe3c5e5d8f8c9076f0745fbbb00416772d9058e61172c67efb16ffbfbb4e26c0",
    creditType: "free",
    data: {
      outro: {
        talkingPoint:
          "Thanks for watching! If you found this video helpful, please like and share it with your friends. Check out our recommended videos on wedding planning, and don't forget to subscribe to our channel for more great content! Happy wedding planning!",
        voiceAudio: {
          durations: [13.097417, 14.194542],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598810/aishortz/fe3c5e5d8f8c9076f0745fbbb00416772d9058e61172c67efb16ffbfbb4e26c0/en-US-Standard-D-7dba36c1e429f3b8d0550263c67cecf1.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598810/aishortz/fe3c5e5d8f8c9076f0745fbbb00416772d9058e61172c67efb16ffbfbb4e26c0/en-US-Standard-F-7dba36c1e429f3b8d0550263c67cecf1.wav",
          ],
        },
      },
      videoSections: [
        {
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598805/aishortz/fe3c5e5d8f8c9076f0745fbbb00416772d9058e61172c67efb16ffbfbb4e26c0/en-US-Standard-D-a20c54eed03eae5598441f0f94483b7b.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598805/aishortz/fe3c5e5d8f8c9076f0745fbbb00416772d9058e61172c67efb16ffbfbb4e26c0/en-US-Standard-F-a20c54eed03eae5598441f0f94483b7b.wav",
            ],
            durations: [24.43525, 25.386875],
          },
          images: [
            {
              accentColor: "#1D65AE",
              height: 266,
              name: "Timeline of events maker - mokasinflowers",
              hostPageDisplayUrl:
                "https://mokasinflowers.weebly.com/timeline-of-events-maker.html",
              contentUrl:
                "https://venngage-wordpress.s3.amazonaws.com/uploads/2019/10/Venngage-Timeline-Maker-Timeline-Creator-Timeline-Infographics.jpg",
              width: 474,
              imageId: "0AA3B25A64DE9CDD33A5911698E5BC08449FEB10",
              contentSize: "197345 B",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://mokasinflowers.weebly.com/timeline-of-events-maker.html",
            },
            {
              imageId: "BB9D0925A8E7D24031402A156C711C3562C31D6A",
              hostPageDisplayUrl:
                "https://douglasbaseball.com/what-is-a-template-in-word/event-timeline-template-word...",
              height: 1583,
              accentColor: "#11A9AC",
              hostPageUrl:
                "https://douglasbaseball.com/what-is-a-template-in-word/event-timeline-template-word-inside-what-is-a-template-in-word/",
              contentSize: "69017 B",
              width: 2048,
              encodingFormat: "png",
              name: "Event Timeline Template Word Inside What Is A Template In Word",
              contentUrl:
                "https://douglasbaseball.com/wp-content/uploads/2019/11/event-timeline-template-word-inside-what-is-a-template-in-word-2048x1583.png",
            },
            {
              accentColor: "#C79204",
              height: 1875,
              width: 2500,
              hostPageUrl:
                "http://www.wordstemplates.org/event-timeline-template/",
              name: "14+ Event Timeline Templates | Word, Excel & PDF Templates",
              contentSize: "176691 B",
              imageId: "4CCFAD17675BB3C76CF5C77BFF3FEF8682A63AC4",
              hostPageDisplayUrl:
                "www.wordstemplates.org/event-timeline-template",
              contentUrl:
                "http://templatelab.com/wp-content/uploads/2016/06/Timeline-Template-29.jpg",
              encodingFormat: "jpeg",
            },
          ],
          title: "Creating an Event Timeline",
          talkingPoint:
            "First things first, let's talk about creating an event timeline. This is crucial to ensure that everything runs smoothly on the big day. Make sure to include all the important details such as the ceremony start time, reception start time, and any other events such as speeches or dances. It's also important to communicate this timeline clearly with all vendors and bridal party members.",
        },
        {
          talkingPoint:
            "Next up, let's discuss music preferences. Music is a huge part of any wedding, and it's important to choose songs that reflect the couple's personalities and style. Consider creating a playlist for each part of the event such as the ceremony, cocktail hour, and reception. Don't forget to include any special requests from the couple or guests.",
          images: [
            {
              imageId: "3E24B1A5203C1CBC74D4B63990323596D8892162",
              contentSize: "68829 B",
              encodingFormat: "jpeg",
              accentColor: "#B52416",
              contentUrl:
                "http://www.socialsciencespace.com/wp-content/uploads/music-preference-grid_opt.jpg",
              name: "Is It Genre - or Valence and Depth - You Like About a Tune? - Social Science Space",
              height: 441,
              width: 600,
              hostPageUrl:
                "https://www.socialsciencespace.com/2016/08/is-it-genre-or-valence-and-depth-you-like-about-a-tune/",
              hostPageDisplayUrl:
                "https://www.socialsciencespace.com/2016/08/is-it-genre-or-valence-and-depth-you-like...",
            },
            {
              contentUrl:
                "http://www.jbmusictherapy.com/wp-content/uploads/2015/08/iStock_000062358630_Large.jpg",
              name: "Music Preferences - JB Music Therapy",
              hostPageUrl:
                "http://www.jbmusictherapy.com/why-do-our-music-preferences-matter/",
              encodingFormat: "jpeg",
              accentColor: "#BD1D0E",
              height: 1783,
              imageId: "20B771165624AF07DE9A21EA1CF5D2A61D1212F1",
              contentSize: "7027160 B",
              hostPageDisplayUrl:
                "www.jbmusictherapy.com/why-do-our-music-preferences-matter",
              width: 2757,
            },
            {
              hostPageDisplayUrl:
                "https://kngsadvancedportfoliorachellewis.blogspot.com/2009/06/graphs-and-tables-of...",
              hostPageUrl:
                "https://kngsadvancedportfoliorachellewis.blogspot.com/2009/06/graphs-and-tables-of-results.html",
              width: 400,
              encodingFormat: "jpeg",
              height: 241,
              imageId: "51E11E5785E819BC4045156E2D6F0E687C064B8E",
              contentSize: "22687 B",
              accentColor: "#A05F2B",
              name: "KNGSAdvancedPortfolioRachelLewis: Graphs and tables of results",
              contentUrl:
                "https://4.bp.blogspot.com/_-iMB7RA6OFc/StXpMKb0P-I/AAAAAAAAAeg/C2MbdM1ve6g/s400/music+genre+preference.jpg",
            },
          ],
          voiceAudio: {
            durations: [21.817, 23.072542],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598805/aishortz/fe3c5e5d8f8c9076f0745fbbb00416772d9058e61172c67efb16ffbfbb4e26c0/en-US-Standard-D-4c0547e70cb67abc368f0e541bd06dc5.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598805/aishortz/fe3c5e5d8f8c9076f0745fbbb00416772d9058e61172c67efb16ffbfbb4e26c0/en-US-Standard-F-4c0547e70cb67abc368f0e541bd06dc5.wav",
            ],
          },
          title: "Music Preferences",
        },
        {
          images: [
            {
              name: "Everything You Need to Know About Coordinating with Vendors – Paul and Grace Photography",
              imageId: "ADBCED67E9BB3A2F91B487B8ABB1D19FC99FCD37",
              encodingFormat: "jpeg",
              height: 576,
              hostPageDisplayUrl:
                "https://paulandgracephotography.com/everything-you-need-to-know-about-coordinating-with...",
              accentColor: "#33200C",
              contentSize: "121751 B",
              hostPageUrl:
                "https://paulandgracephotography.com/everything-you-need-to-know-about-coordinating-with-vendors/",
              contentUrl:
                "https://paulandgracephotography.com/wp-content/uploads/2019/09/Madera_Estates_Wedding-4-864x576.jpg",
              width: 864,
            },
            {
              contentSize: "130957 B",
              encodingFormat: "jpeg",
              hostPageUrl:
                "https://paulandgracephotography.com/everything-you-need-to-know-about-coordinating-with-vendors/",
              name: "Everything You Need to Know About Coordinating with Vendors – Paul and Grace Photography",
              imageId: "ADBCED67E9BB3A2F91B456EFA497655DEF70342E",
              height: 1024,
              contentUrl:
                "https://paulandgracephotography.com/wp-content/uploads/2019/09/Madera_Estates_Wedding-6-683x1024.jpg",
              width: 683,
              accentColor: "#975A34",
              hostPageDisplayUrl:
                "https://paulandgracephotography.com/everything-you-need-to-know-about-coordinating-with...",
            },
            {
              width: 800,
              hostPageUrl: "https://www.pinterest.com/pin/185843922098464141/",
              name: "planningitall.com - planningitall Resources and Information. | Vendor events, Event, Event planning",
              contentSize: "69023 B",
              imageId: "C79E7C050B2F816D4EE8CBBB5ED2D3CA3B240AF5",
              height: 533,
              contentUrl:
                "https://i.pinimg.com/originals/5d/c8/4c/5dc84c081486524a3e096932344cd154.jpg",
              hostPageDisplayUrl:
                "https://www.pinterest.com/pin/185843922098464141",
              encodingFormat: "jpeg",
              accentColor: "#995032",
            },
          ],
          title: "Coordinating with Vendors",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598805/aishortz/fe3c5e5d8f8c9076f0745fbbb00416772d9058e61172c67efb16ffbfbb4e26c0/en-US-Standard-D-a1a2589e375d33dde27e10fed469a9d3.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598805/aishortz/fe3c5e5d8f8c9076f0745fbbb00416772d9058e61172c67efb16ffbfbb4e26c0/en-US-Standard-F-a1a2589e375d33dde27e10fed469a9d3.wav",
            ],
            durations: [21.687583, 22.1605],
          },
          talkingPoint:
            "Another important aspect of managing a wedding is coordinating with vendors. This includes everything from the caterer and florist to the photographer and DJ. Make sure to communicate clearly with each vendor about their specific responsibilities and expectations. It's also a good idea to have a backup plan in case any issues arise.",
        },
        {
          images: [
            {
              width: 850,
              accentColor: "#2D4B8C",
              hostPageDisplayUrl:
                "https://www.researchgate.net/figure/5-Different-styles-of-seating-arrangements_fig5...",
              imageId: "BEE477815B039007755440089CB171368DC4D157",
              name: "Different styles of seating arrangements | Download Scientific Diagram",
              encodingFormat: "png",
              contentUrl:
                "https://www.researchgate.net/profile/Thao-Do-6/publication/344444801/figure/fig5/AS:941886399320068@1601574625453/5-Different-styles-of-seating-arrangements.png",
              contentSize: "90807 B",
              height: 786,
              hostPageUrl:
                "https://www.researchgate.net/figure/5-Different-styles-of-seating-arrangements_fig5_344444801",
            },
            {
              hostPageDisplayUrl:
                "https://www.pinterest.ca/pin/466333736405853293",
              width: 1600,
              accentColor: "#CA9301",
              name: "Infographic: Classroom seating arrangements | Online publication for school educators | ACER ...",
              imageId: "985C83995C55786E4FD8DAE79F9E57E3009E15FB",
              encodingFormat: "jpeg",
              height: 2296,
              contentSize: "366576 B",
              hostPageUrl: "https://www.pinterest.ca/pin/466333736405853293/",
              contentUrl:
                "https://i.pinimg.com/originals/97/66/de/9766de20612accf559351ced6be3b3bc.jpg",
            },
            {
              imageId: "6A56584486C32783E7A9E418B153BB81CFD58582",
              hostPageDisplayUrl:
                "https://www.tagvenue.com/blog/seating-arrangements-for-events",
              width: 2048,
              height: 1364,
              name: "Event Seating Arrangements: A Quick Guide - Tagvenue.com",
              contentSize: "526650 B",
              encodingFormat: "jpeg",
              contentUrl:
                "https://www.tagvenue.com/blog/wp-content/uploads/2017/04/seating-arrangements.jpg",
              hostPageUrl:
                "https://www.tagvenue.com/blog/seating-arrangements-for-events/",
              accentColor: "#6B4221",
            },
          ],
          title: "Seating Arrangements",
          voiceAudio: {
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598804/aishortz/fe3c5e5d8f8c9076f0745fbbb00416772d9058e61172c67efb16ffbfbb4e26c0/en-US-Standard-D-3733e18363454237eccb6b86d44630a5.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598804/aishortz/fe3c5e5d8f8c9076f0745fbbb00416772d9058e61172c67efb16ffbfbb4e26c0/en-US-Standard-F-3733e18363454237eccb6b86d44630a5.wav",
            ],
            durations: [17.924333, 18.85175],
          },
          talkingPoint:
            "Let's talk about the seating arrangements. This can be a daunting task, but it's important to ensure that guests are comfortable and happy. Consider grouping people together based on their relationships or interests. It's also important to consider any special needs or requests from guests.",
        },
        {
          talkingPoint:
            "Last but not least, don't forget about the little details that can make a big impact. This includes things like table settings, centerpieces, and favors. These small touches can really tie everything together and make the event feel cohesive and special.",
          voiceAudio: {
            durations: [16.024417, 17.021375],
            urls: [
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598804/aishortz/fe3c5e5d8f8c9076f0745fbbb00416772d9058e61172c67efb16ffbfbb4e26c0/en-US-Standard-D-a10823b36146230d91e229d8c3a10daa.wav",
              "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598805/aishortz/fe3c5e5d8f8c9076f0745fbbb00416772d9058e61172c67efb16ffbfbb4e26c0/en-US-Standard-F-a10823b36146230d91e229d8c3a10daa.wav",
            ],
          },
          images: [
            {
              hostPageUrl:
                "http://stumingames.com/2013/10/attention-to-detail-stumin/",
              accentColor: "#666666",
              height: 717,
              encodingFormat: "jpeg",
              imageId: "41E05871095C053ACA27AD523DD1623CE1EF6182",
              width: 912,
              contentSize: "72675 B",
              hostPageDisplayUrl:
                "stumingames.com/2013/10/attention-to-detail-stumin",
              contentUrl:
                "http://i1.wp.com/stumingames.com/wp-content/uploads/2013/10/attention-to-detail.jpg",
              name: "Attention To Detail - STUMINGAMES",
            },
            {
              hostPageUrl:
                "https://www.thoughtfulleader.com/attention-to-detail-matters/",
              name: "Attention to Detail for Leaders: Does It Matter? - Thoughtful Leader",
              imageId: "863C5BA2700CE85C72038BC38654ED59E5AB189E",
              width: 900,
              hostPageDisplayUrl:
                "https://www.thoughtfulleader.com/attention-to-detail-matters",
              height: 600,
              encodingFormat: "jpeg",
              contentSize: "96079 B",
              accentColor: "#BB1F10",
              contentUrl:
                "https://www.thoughtfulleader.com/wp-content/uploads/2017/09/Attention-to-Detail-Main.jpg",
            },
            {
              encodingFormat: "jpeg",
              contentSize: "54722 B",
              accentColor: "#B5162E",
              height: 597,
              imageId: "5765E442FC31C2D3635BD806498E978377227EE5",
              hostPageDisplayUrl: "www.quotemaster.org/attention+to+detail",
              contentUrl:
                "http://www.quotemaster.org/images/ec/ec6d8d90f0f40313ea217c7c37c1f6be.jpg",
              hostPageUrl: "http://www.quotemaster.org/attention+to+detail",
              name: "Quotes about Attention to detail (92 quotes)",
              width: 809,
            },
          ],
          title: "Attention to Detail",
        },
      ],
      intro: {
        voiceAudio: {
          durations: [16.981292, 17.565958],
          urls: [
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598805/aishortz/fe3c5e5d8f8c9076f0745fbbb00416772d9058e61172c67efb16ffbfbb4e26c0/en-US-Standard-D-8492c581517a8ff9fb92376f806139f0.wav",
            "https://res.cloudinary.com/dlh61ubew/video/upload/v1687598805/aishortz/fe3c5e5d8f8c9076f0745fbbb00416772d9058e61172c67efb16ffbfbb4e26c0/en-US-Standard-F-8492c581517a8ff9fb92376f806139f0.wav",
          ],
        },
        talkingPoint:
          "In this video, we will explore 10 essential tips for managing a wedding to ensure that everything runs smoothly on the big day. From creating an event timeline to coordinating with vendors, we'll provide easy-to-follow advice to make your wedding planning experience the best it can be. Don't miss out!",
        images: [
          {
            hostPageUrl:
              "https://www.idaliaphotography.com/top-10-tips-managing-children-wedding/",
            height: 682,
            contentSize: "174360 B",
            accentColor: "#7A0F4D",
            name: "Top 10 Tips for Managing Children At Your Wedding",
            contentUrl:
              "https://www.idaliaphotography.com/wp-content/uploads/2014/05/16-10195-post/Managing-Children-at-Your-Wedding-NJ-Wedding-Photographers-1024x682.jpg",
            encodingFormat: "jpeg",
            imageId: "1E19AD80EE0FB39E2268605A7FE7B6799A5738FD",
            width: 1024,
            hostPageDisplayUrl:
              "https://www.idaliaphotography.com/top-10-tips-managing-children-wedding",
          },
          {
            contentUrl:
              "https://www.zoebinning.co.uk/wp-content/uploads/2020/06/Wedding-planner-bride-768x512.jpg",
            contentSize: "56507 B",
            hostPageDisplayUrl:
              "https://www.zoebinning.co.uk/boost-your-wedding-venue-business-with-zoe-binning-ltd...",
            imageId: "62117F265D419BD626E6EC0B78F8204EBBA6F8C2",
            hostPageUrl:
              "https://www.zoebinning.co.uk/boost-your-wedding-venue-business-with-zoe-binning-ltd-freelance-wedding-venue-management-coordination-services/",
            encodingFormat: "jpeg",
            height: 512,
            name: "Boost your Wedding Venue Business with Zoë Binning Ltd - Freelance Wedding Venue Management ...",
            width: 768,
            accentColor: "#936438",
          },
          {
            hostPageUrl:
              "https://www.idaliaphotography.com/top-10-tips-managing-children-wedding/",
            encodingFormat: "jpeg",
            imageId: "1E19AD80EE0FB39E2268634255D1FC11A35667AB",
            hostPageDisplayUrl:
              "https://www.idaliaphotography.com/top-10-tips-managing-children-wedding",
            name: "Top 10 Tips for Managing Children At Your Wedding",
            height: 1024,
            accentColor: "#945F37",
            contentSize: "236971 B",
            width: 683,
            contentUrl:
              "https://www.idaliaphotography.com/wp-content/uploads/2014/05/09-10195-post/managing-children-idalia-photography-02-683x1024.jpg",
          },
        ],
      },
      table: {
        voiceAudio: {
          urls: ["", ""],
          durations: [0, 0],
        },
        summary: "",
        isPresent: false,
        table: "",
      },
    },
    createdAt: "Mon Jun 05 2023",
    render: {
      url: "",
      error: "",
      msg: "Render not initiated yet.",
      status: "PENDING",
    },
    message: "Video created successfully!",
    error: "",
  },
];
