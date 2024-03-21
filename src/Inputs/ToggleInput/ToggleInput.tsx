import { ToggleInputProps } from "./ToggleInputProps";

export const ToggleInput = ({
  label,
  onChange,
  type,
  name,
  checked,
}: ToggleInputProps) => {
  return (
    <div className="py-3">
      <label className="flex items-center cursor-pointer">
        <input
          type={type}
          value=""
          className="sr-only peer"
          name={name}
          onChange={onChange}
          checked={checked}
        />
        <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
        <div className="ms-4 font-bold text-lg">{label}</div>
      </label>
    </div>
  );
};
