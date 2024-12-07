import styles from "./styles.module.css";

export const Review = ({ reviews }) => {
    return (
      <div>
    {reviews.length ? (
        reviews.map((review) => 
            <ul >
                <li className={styles.liList}>{review.text}</li>
                <li className={styles.cleareList}> autor: {review.user}</li>
            </ul>
        
        )
      ) : (
        <div></div>
      )}
      </div>
    );
  };