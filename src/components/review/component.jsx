export const Review = ({ reviews }) => {
    return (
      <div>
    {reviews.length ? (
        reviews.map((review) => 
            <div>
                <div>{review.text}</div>
                <div className='autors'> autor: {review.user}</div>
            </div>
        
        )
      ) : (
        <div></div>
      )}
      </div>
    );
  };