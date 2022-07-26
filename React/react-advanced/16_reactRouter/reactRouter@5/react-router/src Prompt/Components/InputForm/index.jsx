import React, { useState } from "react";
import { Prompt } from "react-router-dom";

export default function InputForm() {
  const [isPrompt, setIsPrompt] = useState(false);
  return (
    <div>
      <Prompt when={isPrompt} message={"信息没保存，确认离开吗？"} />
      <input
        type="text"
        placeholder="请输入信息"
        onChange={(e) => {
          if (e.target.value.trim().length !== 0) setIsPrompt(true);
        }}
      />
    </div>
  );
}
