import React, { useEffect, useState } from "react";
export default function Search(props) {
  console.log("Search组件渲染了！");
  const [data, setData] = useState("");
  const changeHandle = (e) => {
    // console.log(e);
    setData(e.target.value);
  };
  useEffect(() => {
    const time = setTimeout(() => {
      props.setData(data);
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  });
  return (
    <>
      <input type="text" onChange={changeHandle} />
    </>
  );
}
