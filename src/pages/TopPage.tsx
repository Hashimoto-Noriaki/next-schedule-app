import React from "react";
import { NotLoginLayout } from "../components/templates/NotLoginLayout";
import { PrimaryBtn } from "../components/atoms/PrimaryBtn";

export const TopPage = () => {
  return (
    <NotLoginLayout>
      <div className="text-center">
        <h1 className="text-7xl logo">スケジュール管理</h1>
        <p className="pt-[10vh] text-5xl">スケジュールを管理するアプリ</p>
        <div className="pt-[20vh]">
          <PrimaryBtn>ログイン</PrimaryBtn>
        </div>
      </div>
    </NotLoginLayout>
  );
};
