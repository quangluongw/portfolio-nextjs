export default async function page({ params }:
    { params: Promise<{ reviewId: string, productId: string }> }) {
    const { reviewId, productId } = await params
    return (
        <div>
            {reviewId}{productId}
        </div>
    )
}
