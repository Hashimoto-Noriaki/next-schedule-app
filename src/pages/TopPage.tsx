import React from "react";
import { NotLoginLayout } from "../components/templates/NotLoginLayout";
import { PrimaryBtn } from "../components/atoms/PrimaryBtn";
import { useRouter } from "next/router";

export const TopPage = () => {
  const router = useRouter();
  return (
    <NotLoginLayout>
      <div className="text-center">
        <h1 className="text-7xl logo">スケジュール管理</h1>
        <p className="pt-[10vh] text-5xl">スケジュールを管理するアプリ</p>
        <div className="pt-[20vh]">
          <PrimaryBtn onClick={() => router.push("/login")}>
            ログイン
          </PrimaryBtn>
        </div>
      </div>
    </NotLoginLayout>
  );
};
