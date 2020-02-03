import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Index = ({ cars }) => {
  console.log('cars', cars);

  return (
    <div>
      <h1>Hello world!</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <Link href={`/cars/${car.name}`}>
              <a>{car.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/cars');
  const json = await res.json();
  return { cars: json };
};

export default Index;
