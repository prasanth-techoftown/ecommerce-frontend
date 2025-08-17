import { Outlet } from "react-router-dom";
import Navbar from "../src/ components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}


// import useCounterStore from "./store/counterStore";

// function App() {
//   // ✅ TypeScript now knows types automatically
//   const { count, increase, decrease, reset } = useCounterStore();

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h1>Count: {count}</h1>
//       <button onClick={increase}>+ Increase</button>
//       <button onClick={decrease}>- Decrease</button>
//       <button onClick={reset}>Reset</button>
//       <Child />
//     </div>
//   );
// }

// function Child() {
//   // ✅ Correctly typed state selector
//   const count = useCounterStore((state) => state.count);
//   return <h2>Child sees count: {count}</h2>;
// }

// export default App;

