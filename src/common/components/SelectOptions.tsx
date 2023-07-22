import { GROUPS_OPTIONS } from '../../constants';

interface SelectOptionsProps {
  isMenuOpen: boolean;
  selectedOptions: string[];
  handleSelectedOptions: (option: string) => void;
}

const SelectOptions = ({
  isMenuOpen,
  selectedOptions,
  handleSelectedOptions,
}: SelectOptionsProps) => {
  return (
    <ul className={`selectMenu ${isMenuOpen ? 'open' : ''}`}>
      {GROUPS_OPTIONS.map((group) => (
        <li key={group.name} className="font-semibold">
          <p className="p-3">{group.name}</p>
          <ul className="font-normal">
            {group.options.map((option) => (
              <li
                key={option}
                className={`selectOption ${
                  selectedOptions.includes(option) ? 'active' : ''
                }`}
                onClick={() => handleSelectedOptions(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default SelectOptions;
