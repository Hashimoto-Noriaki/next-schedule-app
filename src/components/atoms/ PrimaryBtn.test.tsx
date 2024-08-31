import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PrimaryBtn } from "./PrimaryBtn";
import "@testing-library/jest-dom";

describe("PrimaryBtnコンポーネント", () => {
  it("ボタンが正しいテキストでレンダリングされるべき", () => {
    render(<PrimaryBtn onClick={() => {}}>Click Me</PrimaryBtn>);
    // ボタンが正しくレンダリングされているか確認
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("クリックされたときにonClickハンドラが呼ばれるべき", () => {
    const handleClick = jest.fn();
    render(<PrimaryBtn onClick={handleClick}>Click Me</PrimaryBtn>);
    // ボタンをクリックして、onClickハンドラが呼ばれるか確認
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("正しいCSSクラスが適用されるべき", () => {
    render(<PrimaryBtn onClick={() => {}}>Click Me</PrimaryBtn>);
    const button = screen.getByText("Click Me");
    // ボタンに正しいCSSクラスが適用されているか確認
    expect(button).toHaveClass(
      "bg-lime-800",
      "text-white",
      "p-4",
      "text-lg",
      "rounded-lg",
    );
  });
});
