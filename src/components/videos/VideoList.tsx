/* eslint-disable @typescript-eslint/no-explicit-any */
import VideoItem from "./VideoItem";

export default function VideoList({ videos }: { videos: any }) {
  console.log(videos);
  return (
    <div className="grid grid-cols-5 gap-8">
      {videos.map((video: any) => {
        return (
          <div key={video.id.videoId}>
            <VideoItem video={video} />
          </div>
        );
      })}
    </div>
  );
}
