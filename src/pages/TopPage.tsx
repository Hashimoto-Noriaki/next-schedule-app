import React from "react";

export const TopPage = () => {
  return (
    <div className="relative">
      <header className="bg-white leading-[50px] fixed top-0 left-0 right-0">
        <div className="container mx-auto flex justify-between">
          <p className="logo">スケジュール管理APP</p>
          <nav>
            <ul className="flex gap-5 text-react-blue">
              <li>ご利用方法</li>
              <li>ログイン</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="pt-[50px] bg-gradient-to-r from-lime-100 to-lime-200 h-screen flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-7xl logo">スケジュール管理</h1>
          <p className="pt-[10vh] text-5xl">スケジュールを管理するアプリ</p>
          <div className="pt-[20vh]">
            <button className="bg-lime-800 text-white p-4 text-lg rounded-lg">
              ログイン
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TopPage;
