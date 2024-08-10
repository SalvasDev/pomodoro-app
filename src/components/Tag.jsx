import brain from '../assets/brain.svg';
import coffeeCupBlue from '../assets/coffee-blue.svg';
import coffeeCupOrange from '../assets/coffee-orange.svg';

const Tag = ({ label }) => {
  const tagColor =
    label === 'Enfoque'
      ? 'text-[#84cc16] border-[#84cc16] bg-[#8dd42120]'
      : label === 'Pausa corta'
      ? 'text-[#f59e0b] border-[#f59e0b] bg-[#f59e0b20]'
      : 'text-[#06b6d4] border-[#06b6d4] bg-[#06b6d420]';

  return (
    <div
      className={`flex flex-row gap-2 items-center justify-center p-2 border rounded-lg max-h-8 ${tagColor}`}
    >
      <img
        src={
          label === 'Enfoque'
            ? brain
            : label === 'Pausa corta'
            ? coffeeCupOrange
            : coffeeCupBlue
        }
        alt={`${label}`}
        className="h-4 w-4"
      />
      <span className="font-semibold text-sm">{label}</span>
    </div>
  );
};

export default Tag;
