import React from "react";
import {
  Navigate,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";
const STUDENT_MESSAGE = [
  {
    id: 1,
    name: "孙悟空",
  },
  {
    id: 2,
    name: "猪八戒",
  },
  {
    id: 3,
    name: "沙和尚",
  },
  {
    id: 4,
    name: "唐僧",
  },
];
export default function Student() {
  const { id } = useParams();
  const loaction = useLocation();
  const match = useMatch("/student/:id");
  const nav = useNavigate();
  console.log("match", match);
  const STU = STUDENT_MESSAGE.find((item) => item.id === +id);
  return (
    <div>
      {+id === 4
        ? (
            <button
              onClick={() => {
                // nav("/student/1");
                nav("/student/1", { replace: true });
              }}
            >
              点我去孙悟空
            </button>
          ) && <Navigate to={"/student/1"} replace></Navigate>
        : null}
      <h1>id:{STU.id}</h1>
      <h1>name:{STU.name}</h1>
    </div>
  );
}
