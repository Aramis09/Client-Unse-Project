import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useRedirect({
  routeToRedirect,
  dependenci,
}: {
  routeToRedirect: string;
  dependenci: boolean;
}) {
  const router = useRouter();
  useEffect(() => {
    if (dependenci) {
      router.push(`${routeToRedirect}`);
    }
  }, [dependenci]);
}