import React from "react";
import "./button.css";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  icon?: "plus" | "minus";
  onClick?: () => void;
  width?: string; // 横幅を指定するためのプロパティ
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  icon,
  width = "auto", // 初期値を設定
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " ",
      )}
      style={{ backgroundColor, width }} // ここで width に "100%" を指定可能
      {...props}
    >
      {icon === "plus" && <span className="icon">＋</span>}
      {icon === "minus" && <span className="icon">−</span>}
      {label}
    </button>
  );
};
