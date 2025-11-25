interface CatInfoProps {
  name: string;
  age: number;
  image: string;
  available: boolean;
}

function CatInfo({ name, age, image, available }: CatInfoProps) {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>
        Age: <strong>{age}</strong>
      </p>
      <p>Available: {available ? "Yes" : "No"}</p>
    </div>
  );
}

export default CatInfo;
