import { useState } from "react";
import Modal from "./Modal";
import styles from "./ReviewListItem.module.css";
import Button from "./Button";
import ReviewForm from "./ReviewForm";

function ReviewListItem({ item, onUpdate, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const dateString = new Date(item.createdAt).toLocaleDateString();

  return (
    <div className={styles.item}>
      <img className={styles.image} src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{dateString}</p>
        <p>{item.content}</p>
        <Button variant="ghost" onClick={() => setIsOpen(true)}>
          수정
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ReviewForm
            review={item}
            onSubmit={(data) => {
              onUpdate(item.id, data);
              setIsOpen(false);
            }}
          />
        </Modal>
        <Button variant="danger" onClick={() => onDelete(item.id)}>
          삭제
        </Button>
      </div>
    </div>
  );
}

export default ReviewListItem;
