import React, { useContext } from "react";
import ContextData from "../../Store/ContextData/ContextData";
export default function C() {
  return (
    <ContextData.Consumer>
      {(data) => {
        return (
          <div>
            name：{data.name}，age：{data.age}；
          </div>
        );
      }}
    </ContextData.Consumer>
  );
}
