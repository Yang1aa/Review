import React from "react";
import {
  useRouteMatch,
  useParams,
  useHistory,
  useLocation,
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
export default function Student(props) {
  console.log("props", props);

  const match = useRouteMatch();
  const params = useParams();
  const history = useHistory();
  const loation = useLocation();
  console.log("match", match);
  console.log("params", params);
  console.log("history", history);
  console.log("loation", loation);
  const stu = STUDENT_MESSAGE.find(
    (item) => item.id === +props.match.params.id
  );
  const goFwHandle = () => {
    console.log("go");
    props.history.go(2);
  };
  const goBwHandle = () => {
    console.log("go");
    props.history.go(-2);
  };
  const goBackoHandle = () => {
    console.log("goBack");
    props.history.goBack();
  };
  const goForwardHandle = () => {
    console.log("goForward");
    props.history.goForward();
  };
  const pushHandle = () => {
    console.log("push");
    props.history.push({
      pathname: "/student/4",
    });
  };
  const replaceHandle = () => {
    console.log("replace");
    props.history.replace({
      pathname: "/student/4",
    });
  };
  return (
    <div>
      {stu.id} --- {stu.name}
      <br />
      <button onClick={goFwHandle}>go forward 2</button>
      <button onClick={goBwHandle}>go back 2</button>
      <br />
      <button onClick={goBackoHandle}>goBack</button>
      <br />
      <button onClick={goForwardHandle}>goForward</button>
      <br />
      <button onClick={pushHandle}>push</button>
      <br />
      <button onClick={replaceHandle}>replace</button>
    </div>
  );
}
