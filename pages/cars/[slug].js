import { useRouter } from 'next/router';

const CarView = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Hello cars: {slug}!</h1>
    </div>
  );
};

export default CarView;
