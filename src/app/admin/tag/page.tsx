import TagList from "./TagList";
import { getTags } from "@/services/tag";

export default async function Tag() {
  const data = await getTags();
  return (
    <TagList data={data} />
  )
}
