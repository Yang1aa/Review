import React from "react";
import StudentList from "./StundentList";

export default function Stundent(props) {
  const { data } = props;
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        return <StudentList item={item.attributes} key={item.id} />;
      })}
    </div>
  );
}
