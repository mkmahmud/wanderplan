// app/dashboard/page.tsx
"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, store } from "../../redux/store";
import { login } from "@/app/redux/features/userSlice";



export default function Dashboard() {

  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();


  console.log(user);

  return (
    <div className="mt-20">
      <button className="p-4" onClick={() => dispatch(login({ name: "Mahmudul" }))}>
        Click Here
      </button>
    </div>
  );
}
