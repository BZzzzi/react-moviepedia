import { useState } from "react";
import ReviewList from "./components/ReviewList";
import Modal from "./components/Modal";
import monkItems from "./mock.json";
import CreateReviewForm from "./components/CreateReviewForm";
import catImg from "./asset/cat.jpg";

function App() {
  const [order, setOrder] = useState();
  const [items, setItems] = useState(monkItems);
  const [isOpen, setIsOpen] = useState(false);

  const sortedItem = items.sort((a, b) => b[order] - a[order]);

  const handleCreate = (data) => {
    const now = new Date();
    const newItem = {
      id: items.length + 1,
      imgUrl: catImg,
      ...data,
      createdAt: now.valueOf(),
      updatedAt: now.valueOf(),
    };
    setItems([newItem, ...items]);
    setIsOpen(false);
  };

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
        <h2>리뷰 생성</h2>
        <CreateReviewForm onSubmit={handleCreate} />
      </Modal>
      <ReviewList items={sortedItem} onDelete={handleDelete} />
    </>
  );
}

export default App;
