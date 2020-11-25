import React, { useEffect, useState } from "react";

export default function MyFunc() {
  const [count, setCount] = useState(0);
  const handleCount = () =>
    setCount(prevState => {
      return prevState + 1;
    });

  const handleClear = () => setCount(0)

  useEffect(() => {
    console.log("-> my first effect")
  });

  useEffect(() => {
    console.log("-> componentDidMount equivalent");
  }, []);

  useEffect(() => {
    if (count > 0) {
      console.log("-> componentDidUpdate equivalent");
    }
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("-> componentWillUnmount equivalent");
    };
  }, []);

  console.log(`-> Start Render (${count}) `);
  return (
    <div className="flex justify-center">
      <div>
      <h1 className="text-2xl font-medium"> Function Component </h1>
      <br/>
      <p>
        <button onClick={handleCount} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">Count </button>
        {count}<br/><br/>
        <button onClick={handleClear} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-3">Clear</button>
      </p>
      </div>
    </div>
  );
}
