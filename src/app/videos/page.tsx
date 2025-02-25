import { SearchInput } from "@/components/SearchInput";
import VideoList from "@/components/videos/VideoList";

export default function Videos({
  searchParams,
}: {
  searchParams: {
    [key: string]: string;
  };
}) {
  return (
    <div>
      <div className="w-[50%]">
        <SearchInput />
      </div>
      <div className="mt-8">
        <VideoList />
      </div>
    </div>
  );
}
