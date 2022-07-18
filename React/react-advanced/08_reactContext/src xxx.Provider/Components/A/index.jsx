import React, { useContext } from "react";
import ContextData from "../../Store/ContextData/ContextData";
export default function A() {
  const data = useContext(ContextData);
  return (
    <div>
      name：{data.name}，age：{data.age}；
    </div>
  );
}
