import { notFound } from "next/navigation";
const getRamdomId = (count: number) => {
    return Math.floor(Math.random() * count)
}
export default async function page({
    params,
}: {
    params: Promise<{ reviewId: string; productId: string }>;
}) {
    const { reviewId, productId } = await params;
    const random = getRamdomId(2);
    if (random === 1) {
        throw new Error("lỗi")
    }
    if (parseInt(reviewId) > 100) {
        notFound();
    }
    return (
        <div>
            {reviewId}
            {productId}
        </div>
    );
}
