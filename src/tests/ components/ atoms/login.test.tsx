import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import Login from "../../../pages/login";

// useRouter をモックする
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Login コンポーネント", () => {
  let mockPush: jest.Mock<void, [string]>;

  beforeEach(() => {
    mockPush = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: mockPush,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Login コンポーネントが正しくレンダリングされる", () => {
    render(<Login />);

    // h1 要素を取得
    expect(
      screen.getByRole("heading", { name: /ログイン/i }),
    ).toBeInTheDocument();
    // email プレースホルダーを持つ入力要素を取得
    expect(screen.getByPlaceholderText("email")).toBeInTheDocument();
    // password プレースホルダーを持つ入力要素を取得
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
  });

  test("ボタンクリックで /login にナビゲートする", () => {
    render(<Login />);

    // ボタンをクリック
    fireEvent.click(screen.getByRole("button", { name: /ログイン/i }));

    // ルーターの push メソッドが正しい引数で呼び出されたことを確認
    expect(mockPush).toHaveBeenCalledWith("/login");
  });
});
