import GithubIcon from '../assets/githubLogo.svg';

const Navbar = () => {
  return (
    <section className="flex marker:w-full h-[70px] flex-row justify-between items-center">
      <div>
        <h1 className="font-extrabold text-4xl text-[#E4E4E7]">Pomodoro</h1>
        <h2 className="xl:text-xl text-[#A1A1AA]">
          ¡Gestiona tu tiempo de forma efectiva!
        </h2>
      </div>
      <div className="flex flex-row gap-2">
        <button
          type="button"
          className="bg-gray-800 w-8 h-8 rounded flex justify-center items-center"
        >
        <a href='https://github.com/SalvasDev/pomodoro-app' target='_blank'><img src={GithubIcon} alt="GitHub" className="w-5 h-5 color-icon" /></a>  
        </button>
      </div>
    </section>
  );
};

export default Navbar;
