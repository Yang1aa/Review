import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useRegisterMutation, useLoginMutation } from "../../store/userApi";
import style from "./index.module.css";
export default function Login() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const nameIpt = useRef();
  const passwordIpt = useRef();
  const emaildIpt = useRef();
  const [registerFn, { error: regerror }] = useRegisterMutation();
  const [loginFn, { error: logerror }] = useLoginMutation();
  const submitHandle = (e) => {
    e.preventDefault();
    const username = nameIpt.current.value;
    const password = passwordIpt.current.value;
    // 处理登录功能
    if (isLoginForm) {
      // console.log("登录 -->", username, password);
      loginFn({
        identifier: username,
        password,
      }).then((res) => {
        if (!res.error) {
          console.log("登陆成功！");
        }
        console.log("res", res);
      });
    } else {
      const email = emaildIpt.current.value;
      //console.log('注册 -->', username, password, email);
      registerFn({
        username,
        password,
        email,
      }).then((res) => {
        if (!res.error) {
          // 注册成功
          setIsLoginForm(true);
        }
        console.log("res", res);
      });
    }
  };
  return (
    <div>
      <form onSubmit={submitHandle}>
        <h2>{isLoginForm ? "登录界面" : "注册界面"}</h2>
        {regerror && !isLoginForm && <p>{regerror.data.error.message}</p>}
        {logerror && isLoginForm && <p>{logerror.data.error.message}</p>}
        <div className={style.content_style}>
          <h3>账号或邮箱</h3>
          <input type="text" placeholder="请输入名字" ref={nameIpt} />
        </div>
        {!isLoginForm && (
          <div className={style.content_style}>
            <h3>邮箱</h3>
            <input type="email" placeholder="请输邮箱" ref={emaildIpt} />
          </div>
        )}
        <div className={style.content_style}>
          <h3>密码</h3>
          <input type="password" placeholder="请输入密码" ref={passwordIpt} />
        </div>
        <button>{isLoginForm ? "登 录" : "注 册"}</button>
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            setIsLoginForm((prevState) => !prevState);
            nameIpt.current.value = "";
            passwordIpt.current.value = "";
          }}
        >
          {isLoginForm ? "没有账号？点击注册" : "已有账号？点击登录"}
        </a>
      </form>
    </div>
  );
}
