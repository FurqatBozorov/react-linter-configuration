import "./App.css";

import { useEffect, useMemo, useState } from "react";

import logo from "./assets/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = useMemo(() => {
    return count;
  }, [count]);

  return (
    <>
      Hello World! {logo} {data}
      <button onClick={() => setCount((prev) => prev)}>Increase</button>
    </>
  );
}

export default App;
