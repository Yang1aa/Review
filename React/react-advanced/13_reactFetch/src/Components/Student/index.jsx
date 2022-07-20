import React, { useCallback, useContext, useState } from "react";

import StudentList from "./StundentList";

export default function Stundent(props) {
  const { data } = props;

  return (
    <div>
      {
        data.map((item) => {
          console.log('item',item)
          return (
            <React.Fragment key={item.id}>
              <div>
                <StudentList item={item} />
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
}
