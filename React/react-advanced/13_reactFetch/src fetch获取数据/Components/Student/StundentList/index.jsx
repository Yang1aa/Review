import React from "react";

export default function StudentList(props) {
  return (
    <div>
      <div>
        <h1>Name:{props.item.name}</h1>
      </div>
      <div>
        <h1>Sex:{props.item.sex}</h1>
      </div>
      <div>
        <h1>Age:{props.item.age}</h1>
      </div>
      <div>
        <h1>Address:{props.item.address}</h1>
      </div>
    </div>
  );
}
