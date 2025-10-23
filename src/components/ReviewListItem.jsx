import { useState } from "react";
import Modal from "./Modal";
import styles from "./ReviewListItem.module.css";
import Button from "./Button";
import ReviewForm from "./ReviewForm";

function ReviewListItem({ item, onUpdate, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const dateString = new Date(item.createdAt).toLocaleDateString();

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={item.imgUrl} alt={item.title} />
      <div className={styles.item}>
        <h2>{item.title}</h2>
        <p>{"★".repeat(item.rating)}</p>
        <p>{dateString}</p>
        <p>{item.content}</p>
        <div className={styles.button}>
          <Button variant="ghost" onClick={() => setIsOpen(true)}>
            수정
          </Button>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <h1>리뷰 수정</h1>
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
    </div>
  );
}

export default ReviewListItem;
