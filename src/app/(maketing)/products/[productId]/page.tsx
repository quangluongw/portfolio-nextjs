import { Metadata } from "next"

type Props = {
    params: Promise<{ productId: string }>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).productId
    return {
        title: `product ${id}`
    }
}
export default async function page({ params }: Props) {
    const productid = (await params).productId
    return (
        <div>
            detail {productid}
        </div>
    )
}
