import { useState } from "react";
import ReviewList from "./components/ReviewList";
import items from "./mock.json";

function App() {
  // 1. 사용자가 원하는 정렬을 클릭한다.
  // 2. 클릭할 때 마다 State를 변경시켜 정렬할 때 리렌더링 된다.
  const [order, setOrder] = useState();

  // 3. 최신순, 베스트순이 내림차순으로 정렬된다.
  const sortedItem = items.sort((a, b) => b[order] - a[order]);

  return (
    <>
      <button onClick={() => setOrder("createdAt")}>최신순</button>
      <button onClick={() => setOrder("rating")}>베스트순</button>
      <ReviewList items={sortedItem} />
    </>
  );
}

export default App;
