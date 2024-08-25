import CardsContainer from '../components/CardsContainer';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="max-w-[1120px] mx-auto mt-24 dark:bg-black ">
      <Navbar />
      <CardsContainer />
    </div>
  );
};

export default HomePage;
