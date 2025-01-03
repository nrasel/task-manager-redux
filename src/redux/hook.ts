import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store"; // Adjust the import path to your store file

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
