import { useRouter } from "next/router";

export default function AdvertisingDetail({}) {
  const router = useRouter();
  const id = Number(router.query.idAdvertising);
  return <div></div>;
}
