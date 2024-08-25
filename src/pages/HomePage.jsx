import CardsContainer from '../components/CardsContainer';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="max-w-[1120px] mx-auto mt-[-16px] lg:mt-16 pb-8">
      <Navbar />
      <CardsContainer />
    </div>
  );
};

export default HomePage;
