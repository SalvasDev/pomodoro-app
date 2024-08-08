import CardsContainer from '../components/CardsContainer';
import NavbarComponent from '../components/NavbarComponent';

const HomePage = () => {
  return (
    <div className="max-w-[1120px] mx-auto mt-24 ">
      <NavbarComponent />
      <CardsContainer />
    </div>
  );
};

export default HomePage;
