// import { useAudioData, visualizeAudio } from "@remotion/media-utils";
// import { useCurrentFrame, useVideoConfig } from "remotion";

// export default function AudioVisualizer({ audioURL }: { audioURL: string }) {
//   // const music = staticFile();
//   const frame = useCurrentFrame();
//   const { fps } = useVideoConfig();
//   const audioData = useAudioData(audioURL);
//   if (!audioData) {
//     return <div>NO AUDIO VISUALS</div>;
//   }
//   const visualization = visualizeAudio({
//     fps,
//     frame,
//     audioData,
//     numberOfSamples: 16,
//   }); // [0.22, 0.1, 0.01, 0.01, 0.01, 0.02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//   // Render a bar chart for each frequency, the higher the amplitude,
//   // the longer the bar
//   return (
//     <div className="flex">
//       {visualization.map((v, index) => {
//         return (
//           <div
//             key={index}
//             style={{ width: 15, height: 1000 * v, backgroundColor: "blue" }}
//           />
//         );
//       })}
//     </div>
//   );
// }

export {};
