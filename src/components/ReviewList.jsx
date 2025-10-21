import ReviewListItem from "./ReviewListItem";

function ReviewList({ items }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <ReviewListItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
