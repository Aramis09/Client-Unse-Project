import { sendDeleted } from "@/helpers/delete";
import { ICON_DELETE } from "@/utils/consts";
import React, { useState } from "react";
interface P {
  styles: string;
  id: number;
}
export default function ButtonDeleteSection({ styles, id }: P) {
  const [deleteCounter, setdeleteCounter] = useState(0);
  const handleDelete = async () => {
    setdeleteCounter(deleteCounter + 1);
    if (deleteCounter !== 2) return "No action delete";
    sendDeleted({ id, typeDelete: "sections" });
    window.location.reload();
  };
  return (
    <button onClick={handleDelete} className={styles}>
      <img src={ICON_DELETE} alt="iconDelete" />
      <p>{deleteCounter}/3</p>
    </button>
  );
}
