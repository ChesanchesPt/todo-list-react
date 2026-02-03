import "./ButtonSquare.css";
import React from "react";

type ButtonSize = "small" | "medium";

interface ButtonSquareProps {
  icon: string;
  alt: string;
  size?: ButtonSize;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

export function ButtonSquare({
  icon,
  alt,
  size = "small",
  onClick,
  disabled = false,
  className,
}: ButtonSquareProps) {
  return (
    <button
      className={`button-square button-square--${size} ${className || ""}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <img src={icon} alt={alt} />
    </button>
  );
}
