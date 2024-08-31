import React from "react";
import { render, screen } from "@testing-library/react";
import { NotLoginLayout } from "./NotLoginLayout";
import "@testing-library/jest-dom";

// Mockの子コンポーネントを用意
const MockChildComponent = () => <div>Child Component</div>;

describe("NotLoginLayout Component", () => {
  it("should render the header with the correct logo and navigation links", () => {
    render(
      <NotLoginLayout>
        <MockChildComponent />
      </NotLoginLayout>,
    );

    // ロゴのリンクが正しいか確認
    const logoLink = screen.getByText(/スケジュール管理APP/i);
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");

    // ナビゲーションリンクの確認
    const loginLink = screen.getByText(/ログイン/i);
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/login");

    // 子コンポーネントが表示されているか確認
    expect(screen.getByText(/Child Component/i)).toBeInTheDocument();
  });

  it("should render the main content area with child components", () => {
    render(
      <NotLoginLayout>
        <MockChildComponent />
      </NotLoginLayout>,
    );

    // メインコンテンツに子コンポーネントが含まれているか確認
    expect(screen.getByText(/Child Component/i)).toBeInTheDocument();
  });
});
