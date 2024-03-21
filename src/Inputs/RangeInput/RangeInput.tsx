import styles from "./RangeInput.module.css";
import { RangeProps } from "./RangeInputProps";

export const RangeInput = ({
  id,
  label,
  type,
  name,
  min,
  max,
  value,
  step,
  onChange,
}: RangeProps) => {
  return (
    <div className="flex flex-col py-3">
      {label && (
        <label className="font-bold text-lg" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={`border-[3px] min-w-28 h-3 ${styles.rangeInput} mb-0.5`}
        id={id}
        type={type}
        name={name}
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={onChange}
      />
    </div>
  );
};
