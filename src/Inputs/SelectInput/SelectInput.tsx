import Select from "react-select";
import { SelectInputProps } from "./SelectInputProps";
import { SelectStyles } from "./SelectStyles";

export const SelectInput = ({
  label,
  id,
  name,
  opts,
  placeholder,
  onChange,
  handleSelect,
}: SelectInputProps) => {
  const options = opts.map((opt) => ({ label: opt, value: opt }));

  return (
    <div className="flex flex-col py-2">
      {label && (
        <label className="font-bold text-lg" htmlFor={id}>
          {label}
        </label>
      )}
      <Select
        className="mb-1 text-lg min-w-28 w-full text-gray-600"
        name={name}
        options={options}
        placeholder={placeholder}
        styles={SelectStyles}
        onChange={(selectedOption) => {
          onChange(selectedOption);
          if (handleSelect) {
            handleSelect(selectedOption?.value);
          }
        }}
      />
    </div>
  );
};
