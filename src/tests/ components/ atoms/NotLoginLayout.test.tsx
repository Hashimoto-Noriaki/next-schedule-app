import React from "react";
import { render, screen } from "@testing-library/react";
import { NotLoginLayout } from "../../../components/templates/NotLoginLayout";
import "@testing-library/jest-dom";

// Mockの子コンポーネントを用意
const MockChildComponent = () => <div>Child Component</div>;

// リンクの期待値を検証するためのヘルパー関数
const checkLink = (text: RegExp, href: string) => {
  const link = screen.getByText(text);
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", href);
};

describe("NotLoginLayout コンポーネント", () => {
  it("ヘッダーが正しいロゴとナビゲーションリンクでレンダリングされるべき", () => {
    render(
      <NotLoginLayout>
        <MockChildComponent />
      </NotLoginLayout>,
    );

    // ロゴのリンクが正しいか確認
    checkLink(/スケジュール管理APP/i, "/");

    // ナビゲーションリンクの確認
    checkLink(/ログイン/i, "/login");

    // 子コンポーネントが表示されているか確認
    expect(screen.getByText(/Child Component/i)).toBeInTheDocument();
  });

  it("メインコンテンツ領域に子コンポーネントがレンダリングされるべき", () => {
    render(
      <NotLoginLayout>
        <MockChildComponent />
      </NotLoginLayout>,
    );

    // メインコンテンツに子コンポーネントが含まれているか確認
    expect(screen.getByText(/Child Component/i)).toBeInTheDocument();
  });
});
