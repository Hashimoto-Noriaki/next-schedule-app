import React, { useState } from "react";

interface FormProps {
  onSubmit: (data: { username: string; email: string }) => void;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ username, email });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "0 auto" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="username" style={{ marginBottom: "5px" }}>
          名前:
        </label>
        <input
          id="username"
          type="text"
          placeholder="名前"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "8px", borderRadius: "4px", border: "3px solid #666" }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="email" style={{ marginBottom: "5px" }}>
          メールアドレス:
        </label>
        <input
          id="email"
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "8px", borderRadius: "4px", border: "3px solid #666" }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="password" style={{ marginBottom: "5px" }}>
          パスワード:
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "8px", borderRadius: "4px", border: "3px solid #666" }}  // より黒っぽい色に変更
        />
      </div>
      <button
        type="submit"
        style={{
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "1px solid ",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        送信
      </button>
    </form>
  );
};
