export default function VideoDetail({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return <h2>Video Detail {params.id}</h2>;
}
