import css from "./ClickButton.module.css";

interface ClickButtonProps {
  onUpdate: () => void;
}

function ClickButton({ onUpdate }: ClickButtonProps) {
  return (
    <button className={css.btn} onClick={onUpdate}>
      Click me
    </button>
  );
}

export default ClickButton;
