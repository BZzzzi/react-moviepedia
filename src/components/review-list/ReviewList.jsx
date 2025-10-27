import ReviewListItem from "./ReviewListItem";
import styles from "./ReviewList.module.css";
import Button from "../common/Button";
import { useState } from "react";
import useTranslate from "../../hooks/useTranslate";

function ReviewList({ items, onDelete, onUpdate }) {
  const t = useTranslate();
  const [visibleCount, setVisibleCount] = useState(5);

  return (
    <div className={styles.mainBox}>
      <ul>
        {items.slice(0, visibleCount).map((item) => (
          <li key={item.id} className={styles.listBox}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          </li>
        ))}
      </ul>
      {items.length > visibleCount && (
        <Button
          variant="second"
          className={styles.moreShow}
          onClick={() => {
            setVisibleCount(visibleCount + 5);
          }}
        >
          {t("load more")}
        </Button>
      )}
    </div>
  );
}

export default ReviewList;
