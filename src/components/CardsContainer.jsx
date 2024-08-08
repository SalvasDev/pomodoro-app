import SessionDetails from './SessionDetails';
import TodoList from './TodoList';

const CardsContainer = () => {
  return (
    <main className="flex flex-col lg:flex-row  w-full h-[594px] mt-8 gap-9">
      <SessionDetails />
      <TodoList />
    </main>
  );
};

export default CardsContainer;
