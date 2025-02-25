export default function VideoDetail({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="px-8 grid grid-cols-10 gap-4">
      <div className="col-span-7">
        <div className="w-[100%]">
          <iframe src="" className="w-[100%] h-[35rem]" />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-lg">Title</h2>
          <h5 className="font-bold text-sm">Channel Title</h5>
          <p className="text-slate-400 text-md">Desctiption</p>
        </div>
      </div>
    </div>
  );
}
