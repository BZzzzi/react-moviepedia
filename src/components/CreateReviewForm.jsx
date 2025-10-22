import { useEffect, useRef } from "react";

function CreateReviewForm({ onSubmit }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const submit = (formData) => {
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <div>
      <form action={submit}>
        <input
          name="title"
          placeholder="제목을 입력해 주세요."
          ref={inputRef}
        />
        <select name="rating">
          <option value={1}>⭐️</option>
          <option value={2}>⭐️⭐️</option>
          <option value={3}>⭐️⭐️⭐️</option>
          <option value={4}>⭐️⭐️⭐️⭐️</option>
          <option value={5}>⭐️⭐️⭐️⭐️⭐️</option>
        </select>
        <textarea name="content" placeholder="내용을 입력해 주세요." />
        <button>작성완료</button>
      </form>
    </div>
  );
}

export default CreateReviewForm;
