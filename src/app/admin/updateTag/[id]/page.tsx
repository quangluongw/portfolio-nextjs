import { getTagId } from "@/services/tag";
import UpdateTag from "../UpdateTag";

export default async function UpdateTagPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
 const dataTag= await getTagId(id)
  return <UpdateTag  dataTag={dataTag} />;
}
