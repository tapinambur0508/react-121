import CatInfo from "./components/CatInfo/CatInfo";

import cats from "./cats.json";

function App() {
  return (
    <div>
      {cats.map((cat) => (
        <CatInfo
          key={cat.id}
          name={cat.name}
          age={cat.age}
          image={cat.image}
          available={cat.available}
        />
      ))}

      {/* <CatInfo
        name="Sir Pounce-a-lot"
        age={5}
        image="https://cataas.com/cat/says/Meow"
        available={false}
      />
      <CatInfo
        name="Meowzilla"
        age={2}
        image="https://cataas.com/cat/says/Roar"
        available={false}
      /> */}
    </div>
  );
}

export default App;
