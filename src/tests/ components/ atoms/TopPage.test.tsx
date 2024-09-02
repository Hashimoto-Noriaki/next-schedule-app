import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TopPage } from "../../../pages/TopPage";
import { useRouter } from "next/router";

// Mock next/router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("TopPage", () => {
  it("コンポーネントが正しくレンダリングされることを確認", () => {
    const mockRouter = {
      push: jest.fn(),
    };

    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    render(<TopPage />);

    // タイトルが正しくレンダリングされているか確認
    expect(screen.getByText("スケジュール管理")).toBeInTheDocument();
    expect(
      screen.getByText("スケジュールを管理するアプリ"),
    ).toBeInTheDocument();

    // ボタンが正しくレンダリングされているか確認
    const button = screen.getByRole("button", { name: "ログイン" });
    expect(button).toBeInTheDocument();
  });

  it("ログインボタンがクリックされたときに /login にナビゲートすることを確認", () => {
    const mockRouter = {
      push: jest.fn(),
    };

    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    render(<TopPage />);

    // ログインボタンをクリック
    fireEvent.click(screen.getByRole("button", { name: "ログイン" }));

    // router.push が正しい引数で呼び出されたことを確認
    expect(mockRouter.push).toHaveBeenCalledWith("/login");
  });
});
