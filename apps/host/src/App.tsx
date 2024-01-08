import { Suspense, lazy, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import CustomButton from 'remote/components/CustomButton';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const CustomButton = lazy(() => import("remote/components/CustomButton"));
  const TestButton = lazy(() => import("efi_remote/components/TestButton"));
  const ButtonBox = lazy(() => import("efi_remote/components/ButtonBox"));

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Suspense fallback={<div>Loading...</div>}>
          <CustomButton />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <TestButton />
        </Suspense>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <ButtonBox />
        </Suspense> */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
