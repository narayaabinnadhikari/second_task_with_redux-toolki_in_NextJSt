"use client";

import { RootState } from "./GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./GlobalRedux/Features/Counter/counterSlice";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className="flex flex-col justify-center items-center p-6 min-h-screen">
      <button
        className="m-8 py-2 px-5 bg-lime-950 border-0 shadow-gray-400 rounded-xl text-white text-lg font-black"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        className="m-8 py-2 px-5 bg-lime-950 border-0 shadow-gray-400 rounded-xl text-white text-lg font-black"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="m-8 py-2 px-5 bg-lime-950 border-0 shadow-gray-400 rounded-xl text-white text-lg font-black"
        onClick={() => dispatch(incrementByAmount(2))}
      >
        Increment by 2
      </button>
    </main>
  );
}
