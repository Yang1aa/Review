import React from "react";
import { useGetStudentsQuery } from "./Store/studentApi";
export default function App() {
  const { data, isLoading, isSuccess } = useGetStudentsQuery();
  return (
    <div>
      {isLoading && <p>数据加载中...</p>}
      {isSuccess &&
        data.data.map((item) => (
          <p key={item.id}>
            {item.attributes.name} ---
            {item.attributes.age} ---
            {item.attributes.gender} ---
            {item.attributes.address}
          </p>
        ))}
    </div>
  );
}
