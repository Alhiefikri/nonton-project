import { apiKey } from "@/constant";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // read route params
  const id = (await params).id;

  // fetch data
  const video = await fetchVideo(id);

  return {
    title: video[0].snippet.title,
  };
}

async function fetchVideo(id: string) {
  let url = new URL(
    `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}`
  );

  url.searchParams.set("part", "snippet");
  url.searchParams.set("type", "video");

  try {
    const response = await fetch(url);
    const video = await response.json();
    return video.items;
  } catch (error) {
    console.error(error);
  }
}

export default async function VideoDetail({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const videoSrc = `https://www.youtube.com/embed/${params.id}`;
  const video = await fetchVideo(params.id);
  console.log(video);
  return (
    <div className="px-8 grid grid-cols-10 gap-4">
      <div className="col-span-7">
        <div className="w-[100%]">
          <iframe src={videoSrc} className="w-[100%] h-[35rem]" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-lg">{video[0].snippet.title}</h2>
          <h2 className="font-bold text-sm">{video[0].snippet.channelTitle}</h2>
          <p className="text-slate-400 text-md">
            {video[0].snippet.description}
          </p>
        </div>
      </div>
    </div>
  );
}
