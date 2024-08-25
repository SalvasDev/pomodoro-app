import CardsContainer from '../components/CardsContainer';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="max-w-[1120px] mx-auto mt-1 lg:mt-16 dark:bg-black ">
      <Navbar />
      <CardsContainer />
    </div>
  );
};

export default HomePage;
