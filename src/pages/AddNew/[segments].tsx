import AdvertisingForm from "@/components/Forms/Advertising";
import ServiceForm from "@/components/Forms/ServiceForm";
import SubServiceForm from "@/components/Forms/SubServiceForm";
import { useRouter } from "next/router";

export default function FormRender() {
  const router = useRouter();
  const { segments } = router.query;

  if (segments === "service") {
    return <ServiceForm />;
  }
  if (segments === "subservice") {
    return <SubServiceForm />;
  }
  if (segments === "advertising") {
    return <AdvertisingForm />;
  }

  return <div>Form not found</div>;
}
