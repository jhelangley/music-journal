export function RatingControl({ rating, rateAlbum }) {
    return (
        <div>
            {
                [1, 2, 3, 4, 5].map(number => (
                    <button key={number} onClick={() => rateAlbum(rating === number ? null : number)}>
                        {number <= rating ? '★' : '☆'}
                    </button>
                ))
            }
        </div>
    )
}