import { getBlogCategory } from "@/services/blog";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
  const data = await getBlogCategory();
  return (
    <DashboardClient data={data} />
  )
}
