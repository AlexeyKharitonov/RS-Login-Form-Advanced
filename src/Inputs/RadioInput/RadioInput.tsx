import { RadioInputProps } from "./RadioInputProps";

export const RadioInput = ({
  label,
  id,
  type,
  name,
  onChange,
  selectedValue,
}: RadioInputProps) => {
  return (
    <>
      {label.map((labelItem, index) => (
        <div className="flex flex-col items-start py-3" key={index}>
          {label && (
            <label className="font-bold text-lg mb-1" htmlFor={id}>
              {labelItem}
            </label>
          )}
          <input
            className="w-6 h-6 cursor-pointer"
            id={id}
            type={type}
            name={name}
            onChange={onChange}
            checked={selectedValue === labelItem}
          />
        </div>
      ))}
    </>
  );
};
