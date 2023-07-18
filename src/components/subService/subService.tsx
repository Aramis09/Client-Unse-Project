import { SubServiceTypes } from "@/types/interfaces";
import Link from 'next/link'

interface S {
  subServiceProps: SubServiceTypes
}

export default function SubService({subServiceProps}: S) {
  const {id, title, resume} = subServiceProps
  return (
    <Link href={`/subServiceDetail/${id}`}>
    <div>
      <span>{title}</span>
      <span>{resume}</span>
    </div>
    </Link>

  )
}
