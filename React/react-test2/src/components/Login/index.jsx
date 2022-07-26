import React from "react";
import { useState } from "react";
import { useRef } from "react";
import style from "./index.module.css";
export default function Login() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const nameIpt = useRef();
  const passwordIpt = useRef();
  const submitHandle = (e) => {
    e.preventDefault();
    console.log("nameIpt", nameIpt.current.value);
    console.log("passwordIpt", passwordIpt.current.value);
  };
  return (
    <div>
      <form onSubmit={submitHandle}>
        <h2>{isLoginForm ? "登录界面" : "注册界面"}</h2>
        <div className={style.content_style}>
          <h3>名字</h3>
          <input type="text" placeholder="请输入名字" ref={nameIpt} />
        </div>
        <div className={style.content_style}>
          <h3>密码</h3>
          <input type="password" placeholder="请输入密码" ref={passwordIpt} />
        </div>
        {!isLoginForm && (
          <div className={style.content_style}>
            <h3>再次输入密码</h3>
            <input type="password" placeholder="请输入再次密码" ref={passwordIpt} />
          </div>
        )}
        <button
          onClick={() => {
            if (!isLoginForm) setIsLoginForm((pre) => !pre);
          }}
        >
          {isLoginForm ? "登 录" : "注 册"}
        </button>
        {isLoginForm ? (
          <a href="#" onClick={() => setIsLoginForm((pre) => !pre)}>
            没有账号点击注册
          </a>
        ) : null}
      </form>
    </div>
  );
}
