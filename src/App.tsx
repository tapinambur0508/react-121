import axios from "axios";
import { useState, useEffect } from "react";

import Timer from "./Timer";
import Sidebar from "./Sidebar/Sidebar";

import type { Character } from "./types/character";

function App() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [counter, setCounter] = useState<number>(() => {
    const value = localStorage.getItem("my-counter");

    console.log(value);

    if (value !== null) {
      return JSON.parse(value) as number;
    }

    return 0;
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log("useEffect");

    async function getCharacter() {
      const { data } = await axios.get<Character>(
        "https://swapi.info/api/people/5"
      );

      setCharacter(data);
    }

    getCharacter();
  }, []);

  useEffect(() => {
    localStorage.setItem("my-counter", JSON.stringify(counter));
  }, [counter]);

  console.log("App");

  const toggle = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <h1>Effects</h1>

      <div>
        <pre>{JSON.stringify(character, null, 2)}</pre>
        <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
          Count {counter}
        </button>
      </div>

      {/* {isVisible ? <Timer /> : null}

      <button onClick={toggle}>Toggle</button> */}

      <div>
        <button onClick={openSidebar}>Open Sidebar</button>
        {isSidebarOpen ? <Sidebar onClose={closeSidebar} /> : null}
      </div>
    </>
  );
}

export default App;
