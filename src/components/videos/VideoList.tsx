import VideoItem from "./VideoItem";

export default function VideoList() {
  return (
    <div className="grid grid-cols-5 gap-8">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((video: any) => {
        return (
          <div key={video}>
            <VideoItem />
          </div>
        );
      })}
    </div>
  );
}
