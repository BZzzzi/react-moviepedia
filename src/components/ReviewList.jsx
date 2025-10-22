import ReviewListItem from "./ReviewListItem";

function ReviewList({ items, onDelete, onUpdate }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
