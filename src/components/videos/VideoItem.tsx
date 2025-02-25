import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function VideoItem({ video }: { video: any }) {
  return (
    <Card>
      <CardContent>
        <Link href={`/videos/${video.id.videoId}`}>
          <Image
            width={500}
            height={500}
            alt=""
            src={video.snippet.thumbnails.medium.url}
          />
        </Link>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-lg">
            {video.snippet.channelTitle.slice(0, 10)}...
          </h2>
          <h2 className="font-bold text-sm">
            {video.snippet.title.slice(0, 20)}...
          </h2>
        </div>
      </CardFooter>
    </Card>
  );
}
