export default function ReviewDetails({ params }: {
    params: {
        reviewId: string,
        productId: string
    }
}) {
    return (
        <h1>Review {params.reviewId} for product {params.productId}</h1>
    )
}