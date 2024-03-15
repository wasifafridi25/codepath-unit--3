import React from "react";

export default function BaristaForm() {
  const onCheckAnswer = () => {};

  const onNewDrink = () => {};

  return (
    <div>
      <form action=""></form>
      <button type="submit" className="button submit" onClick={onCheckAnswer}>
        Check Answer
      </button>
      <button
        type="new-drink-button"
        className="button submit"
        onClick={onNewDrink}
      >
        New Drink
      </button>
    </div>
  );
}
