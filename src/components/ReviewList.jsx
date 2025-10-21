import ReviewListItem from "./ReviewListItem";

function ReviewList({ items, onDelete }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <ReviewListItem item={item} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
