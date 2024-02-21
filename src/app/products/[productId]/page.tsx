import { Metadata } from "next";
import Link from "next/link";


type Props = {
  params: {
    productId: string
  }
}

export const generateMetadata = ({params}: Props): Metadata => {
  return {
    title: `Product ${params.productId}`
  }
}

function ProductDetails({ params }: {
  params: { productId: string }
}) {
  return (
    <>
    <h1>Detail about Product {params.productId}</h1>
    <Link href="/">Home</Link>
    </>
  )
}
export default ProductDetails