import React, { useContext } from "react";
import contextData from "../../Store/ContextData/ContextData";
export default function B() {
  const data = useContext(contextData);
  return (
    <div>
      name：{data.name}，age：{data.age}；
    </div>
  );
}
