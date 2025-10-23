import { useState } from "react";
import ReviewList from "./components/ReviewList";
import Modal from "./components/Modal";
import monkItems from "./mock.json";
import ReviewForm from "./components/ReviewForm";
import catImg from "./asset/cat.jpg";
import Layout from "./components/Layout";
import Button from "./components/Button";

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

  const handleUpdate = (id, data) => {
    const index = items.findIndex((item) => item.id === id);
    const now = new Date();
    const newItem = {
      ...items[index],
      ...data,
      updatedAt: now.valueOf(),
    };
    const newItems = [
      ...items.slice(0, index),
      newItem,
      ...items.slice(index + 1),
    ];

    setItems(newItems);
  };

  const handleDelete = (id) => {
    const nextItem = items.filter((item) => item.id !== id);
    setItems(nextItem);
  };

  return (
    <>
      <Layout>
        <Button
          variant={order === "createdAt" ? "primary" : "second"}
          onClick={() => setOrder("createdAt")}
        >
          최신순
        </Button>
        <Button
          variant={order === "rating" ? "primary" : "second"}
          onClick={() => setOrder("rating")}
        >
          베스트순
        </Button>
        <Button onClick={() => setIsOpen(true)}>추가하기</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2>리뷰 생성</h2>
          <ReviewForm onSubmit={handleCreate} />
        </Modal>
        <ReviewList
          items={sortedItem}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      </Layout>
    </>
  );
}

export default App;
