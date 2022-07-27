import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "../../store/useSlice";

// 箭头函数方式
// const useAutoLogout = () => {
//   const { timeout } = useSelector((state) => state.userSlice);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const delay = timeout - Date.now();
//     if (delay < 5) {
//       dispatch(logout());
//       return;
//     }
//     const timer = setTimeout(() => {
//       console.log("1111111111111");
//       dispatch(logout());
//     }, delay);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [timeout]);
// };
// export default useAutoLogout;



// function方式
export default function useAutoLogout() {
  const { timeout } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    const delay = timeout - Date.now();
    if (delay < 5) {
      dispatch(logout());
      return;
    }
    const timer = setTimeout(() => {
      console.log("1111111111111");
      dispatch(logout());
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout]);
}
