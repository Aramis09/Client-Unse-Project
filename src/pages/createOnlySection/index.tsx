import SectionForm from "@/components/SectionForm/SectionForm";
import { createNewSection } from "@/helpers/sectionsHelpers";
import { DataInForm } from "@/types/interfaces";
import { useRouter } from "next/router";
import React from "react";

export default function CreateOnlySection() {
  const router = useRouter();
  const { idOwner, typeOwner } = router.query;

  const handleSendNewSection = async (data: DataInForm) => {
    await createNewSection({
      idOwner: Number(idOwner),
      typeOwner: String(typeOwner),
      dataSection: data,
    });
  };
  return (
    <div>
      <SectionForm sections={null} handleSave={handleSendNewSection} />
    </div>
  );
}
