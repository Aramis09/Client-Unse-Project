import { verificationToken } from "@/helpers/verifyToken";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useVerifyToken = () => {
  const router = useRouter();
  const [statusToken, setStatusToken] = useState<boolean>(false);
  
  useEffect(() => {
    verificationToken().then((res) => {
      setStatusToken(res.acces);
    });
  }, [router]);

  return {statusToken, router}
}

export default useVerifyToken