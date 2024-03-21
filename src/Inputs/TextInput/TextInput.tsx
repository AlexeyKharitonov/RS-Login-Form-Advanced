import { TextInputProps } from "./TextInputProps";
import { LuAsterisk } from "react-icons/lu";

export const TextInput = ({
  label,
  id,
  type,
  name,
  placeholder,
  description,
  disabled = false,
  asterisk,
  rounded,
  size,
  register,
  rules,
  customError,
  error,
  bgInput,
  defaultValue,
  onChange,
}: TextInputProps) => {
  return (
    <div className="flex flex-col py-2">
      <div className="flex items-center">
        {label && (
          <label
            style={{ fontSize: `${size}px` }}
            className="font-bold text-lg"
            htmlFor={id}
          >
            {label}
          </label>
        )}{" "}
        {asterisk && (
          <span className="text-red-600 ml-0.5 mb-2">
            {" "}
            {<LuAsterisk size={14} />}
          </span>
        )}
      </div>
      {description && <span className="text-xs">{description}</span>}
      <input
        {...register?.(name, rules)}
        style={{
          borderRadius: `${rounded}px`,
          fontSize: `${size}px`,
          backgroundColor: disabled ? "#FFC0CB" : bgInput,
          cursor: disabled ? "not-allowed" : "",
        }}
        className={`border-[3px] min-w-28 mb-0.5 py-1.5 outline-none text-lg rounded-xl px-5 w-full text-gray-600
         ${error && "border-[0.5px] border-[#D6001C]"} `}
        id={id}
        placeholder={placeholder}
        type={type}
        name={name}
        disabled={disabled}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      {customError && (
        <span className="text-xs pl-2 text-red-600 mb-2">
          <span className="underline text-xs font-semibold">
            customError from input:
          </span>{" "}
          {customError}
        </span>
      )}
      {error && (
        <span className="text-[#D6001C] text-xs pl-2 pt-0.5">
          {error.message}
        </span>
      )}
    </div>
  );
};
