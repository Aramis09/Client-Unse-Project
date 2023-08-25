import Forms from "@/components/Forms/Forms";
import { useRouter } from "next/router";

export default function FormRender() {
  const router = useRouter();
  const { segments } = router.query;

  if (segments === "service") {
    return <Forms type="service" />;
  }
  if (segments === "subservice") {
    return <Forms type="subservice" />;
  }
  if (segments === "advertising") {
    return <Forms type="advertising" />;
  }

  return <div>Form not found</div>;
}
