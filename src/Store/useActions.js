import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { productsActions } from "./productsSlice";
const actions = {
  ...productsActions,
};
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
