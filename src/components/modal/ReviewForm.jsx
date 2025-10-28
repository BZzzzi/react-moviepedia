import { useEffect, useRef } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Select from "../common/Select";
import Textarea from "../common/Textarea";
import styles from "./ReviewForm.module.css";
import useTranslate from "../../hooks/useTranslate";
import FileInput from "../common/FileInput";

function ReviewForm({
  review = {
    title: "",
    imgUrl: "",
    rating: 1,
    content: "",
  },
  onSubmit,
}) {
  const t = useTranslate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <form action={onSubmit} className={styles.modalForm}>
        <FileInput name="imgFile" initialPreview={review.imgUrl} />
        <div className={styles.formLayout}>
          <div className={styles.formContent}>
            <Input
              name="title"
              defaultValue={review.title}
              placeholder={t("review title placeholder")}
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
            placeholder={t("review content placeholder")}
            className={styles.textarea}
          />
          <Button>{t("submit button")}</Button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
