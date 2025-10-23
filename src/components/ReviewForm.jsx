import { useEffect, useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import placeholderImg from "../asset/placeholder.webp";
import styles from "./ReviewForm.module.css";

function ReviewForm({
  review = {
    title: "",
    imgUrl: placeholderImg,
    rating: 1,
    content: "",
  },
  onSubmit,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const submit = (formData) => {
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    onSubmit(data);
  };
  // console.log(review.imgUrl);

  return (
    <div>
      <form action={submit} className={styles.modalForm}>
        <img src={review.imgUrl} className={styles.formImg} />
        <input type="hidden" name="imgUrl" value={review.imgUrl} />
        <div className={styles.formLayout}>
          <div className={styles.formContent}>
            <Input
              name="title"
              defaultValue={review.title}
              placeholder="제목을 입력해 주세요."
              ref={inputRef}
              className={styles.input}
            />
            <Select
              defaultValue={review.rating}
              name="rating"
              className={styles.select}
            >
              <option value={1}>⭐️</option>
              <option value={2}>⭐️⭐️</option>
              <option value={3}>⭐️⭐️⭐️</option>
              <option value={4}>⭐️⭐️⭐️⭐️</option>
              <option value={5}>⭐️⭐️⭐️⭐️⭐️</option>
            </Select>
          </div>
          <Textarea
            name="content"
            defaultValue={review.content}
            placeholder="내용을 입력해 주세요."
            className={styles.textarea}
          />
          <Button>작성완료</Button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
