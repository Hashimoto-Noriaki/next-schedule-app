

export default function TopPage(){
    return(
        <div className="relative">
            <header className="leading-[60px] fixed top-0 left-0 right-0 bg-white shadow-md">
                <div className="container mx-auto flex justify-between">
                    <h1 className="logo">スケジュール管理App</h1>
                    <nav>
                        <ul className="flex gap-10 font-bold text-sky-400">
                            <li className="hover:text-sky-700 hover:underline transition">利用説明</li>
                            <li className="hover:text-sky-700 hover:underline transition">新規登録</li>
                            <li className="hover:text-sky-700 hover:underline transition">ログイン</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="bg-gradient-to-r from-sky-400 to-sky-500 h-screen flex flex-col justify-center items-center">  
                <div className="text-center">
                    <h1 className="text-7xl logo">スケジュール管理App</h1>
                    <p className="pt-[30px] font-bold text-3xl">このアプリは、スケジュールを管理するためのアプリです。</p>
                    <p className="pt-[30px] font-bold text-3xl">ユーザーは、スケジュールを登録、編集、削除することができます。</p>
                    <p className="pt-[30px] font-bold text-3xl">また、スケジュールをカレンダー形式で表示することができます。</p>
                </div>
                <div className="pt-[20vh]">
                    <button className="bg-emerald-600 text-white font-bold text-lg  px-12 py-5 w-[400px] rounded-full shadow-lg  hover:bg-emerald-400 transition">ログイン</button>
                </div>
            </main>
        </div>
    )
}