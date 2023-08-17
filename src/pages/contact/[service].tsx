import ContactForm from "@/components/ContactForm/ContactForm";
3;
import { useRouter } from "next/router";
export default function contact() {
  const router = useRouter();
  const {service} = router.query;
  if (service === "undefined") {
    return <div>Cargando...</div>;
  }

  if (!service) {
    return <div>No se ha proporcionado un valor de subservicio.</div>;
  }

  return <ContactForm subservice={String(service)} />;
}
