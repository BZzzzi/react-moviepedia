import { useState } from "react";
import ReviewList from "./components/ReviewList";
import monkItems from "./mock.json";

function App() {
  const [order, setOrder] = useState();
  const [items, setItems] = useState(monkItems);

  const sortedItem = items.sort((a, b) => b[order] - a[order]);

  const handleDelete = (id) => {
    const nextItem = items.filter((item) => item.id !== id);
    setItems(nextItem);
  };

  return (
    <>
      <button onClick={() => setOrder("createdAt")}>최신순</button>
      <button onClick={() => setOrder("rating")}>베스트순</button>
      <ReviewList items={sortedItem} onDelete={handleDelete} />
    </>
  );
}

export default App;
