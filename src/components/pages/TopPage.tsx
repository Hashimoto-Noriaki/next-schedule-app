

export default function TopPage(){
    return(
        <div>
            <header className="leading-[60px]">
                <div className="container mx-auto flex justify-between">
                    <h1 className="logo">スケジュール管理App</h1>
                    <nav>
                        <ul className="flex gap-10 text-sky-400">
                            <li>利用説明</li>
                            <li>新規登録</li>
                            <li>ログイン</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}