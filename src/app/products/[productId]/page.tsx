export default async function page({ params }:
    { params: Promise<{ productId: string }> }) {
    const productid = (await params).productId

    return (
        <div>
            detail {productid}
        </div>
    )
}
