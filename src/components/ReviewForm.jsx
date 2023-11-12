import React from "react";
import Form from "../components/UI/Form/Form";
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";

const ReviewForm = ({ handler, disabled, onSubmit, isLoading }) => {
  const handleChange = (e) => {
    handler({ review: e.target.value });
  };

  return (
    <Form className="add-review__form" onSubmit={onSubmit}>
      <Input
        className="add-review__form__input"
        placeholder="I have had the best room experience in Starlo"
        onChange={handleChange}
      />
      <Button disabled={disabled} isLoading={isLoading}>
        Add
      </Button>
    </Form>
  );
};

export default ReviewForm;
