import { useState } from "react";

import ClickButton from "./ClickButton/ClickButton";
import CountDisplay from "./CountDisplay";
import TagManager from "./TagManager/TagManager";

function App() {
  const [count, setCount] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    // setCount(count + 1); // setCount(1);
    // setCount(count + 2);
    // setCount(count + 3);
    // setCount(count + 4);
    // setCount(count + 5);
    // console.log(count);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <CountDisplay count={count} />

      <ClickButton onUpdate={handleClick} />
      <ClickButton onUpdate={handleClick} />
      <ClickButton onUpdate={handleClick} />
      <ClickButton onUpdate={handleClick} />

      <button onClick={handleToggle}>Toggle</button>

      {isOpen && (
        <>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            molestiae impedit placeat similique natus debitis exercitationem
            quibusdam, ducimus nobis non ex amet, ipsa quod sequi corporis
            veritatis nam rem fugiat.
          </p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </>
      )}

      <TagManager />
    </>
  );
}

export default App;
