import ReviewListItem from "./ReviewListItem";
import styles from "./ReviewList.module.css";
import Button from "../common/Button";
import { useState } from "react";
import useTranslate from "../../hooks/useTranslate";

function ReviewList({ items, onDelete, onUpdate, onLoadMore, hasNext }) {
  const t = useTranslate();

  return (
    <div className={styles.mainBox}>
      <ul>
        {items.map((item) => (
          <li key={item.id} className={styles.listBox}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          </li>
        ))}
      </ul>
      {hasNext && (
        <Button
          variant="second"
          className={styles.moreShow}
          onClick={() => onLoadMore()}
        >
          {t("load more")}
        </Button>
      )}
    </div>
  );
}

export default ReviewList;
