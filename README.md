### Dockerビルド
```
docker compose up --build 
docker compose up --build -d
```
### Docker起動
```
docker compose up -d
```
http://localhost:3000/

### コンテナを止める
```
docker compose down 
```

### ESLint
静的解析ツール
```
npm run lint
```
### Prettier
コードフォーマッター（ソースコードを整形してくれるツール）
```
npm run format
```

### StoryBook起動
```
npm run storybook
```
- StoryBookお手本(SmartHR社)

https://story.smarthr-ui.dev
https://github.com/kufu/smarthr-ui?tab=readme-ov-file

### Jest（テスト）
```
npx jest
npm test   
```

- その他テスト
1. vitest
2. Testing Library

- ファイル構成
小規模プロジェクトや特定のコンポーネントに関連するテストをすぐに見つけやす利点があるので今回はこの構成を採用
```
src/
  components/
    atoms/
      PrimaryBtn.tsx
      PrimaryBtn.test.tsx
```

大規模な場合だと以下の構成。コードとテストを分けるので、プロジェクトの構造が把握しやすくなる
```
src/
  components/
    atoms/
      PrimaryBtn.tsx
  tests/
    components/
      atoms/
        PrimaryBtn.test.tsx
```
