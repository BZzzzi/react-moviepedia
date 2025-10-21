import { useState } from "react";
import ReviewList from "./components/ReviewList";
import Modal from "./components/Modal";
import monkItems from "./mock.json";

function App() {
  const [order, setOrder] = useState();
  const [items, setItems] = useState(monkItems);
  const [isOpen, setIsOpen] = useState(false);

  const sortedItem = items.sort((a, b) => b[order] - a[order]);

  const handleDelete = (id) => {
    const nextItem = items.filter((item) => item.id !== id);
    setItems(nextItem);
  };

  return (
    <>
      <button onClick={() => setOrder("createdAt")}>최신순</button>
      <button onClick={() => setOrder("rating")}>베스트순</button>
      <button onClick={() => setIsOpen(true)}>추가하기</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        모달 내용입니다.
      </Modal>
      <ReviewList items={sortedItem} onDelete={handleDelete} />
    </>
  );
}

export default App;
