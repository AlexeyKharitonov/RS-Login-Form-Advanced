import { ActionMeta } from "react-select";

export interface Option {
  label: string;
  value: string;
}

export interface SelectInputProps {
  label?: string;
  id?: string;
  name: string;
  opts: string[];
  placeholder?: string;
  onChange: (option: Option | null, actionMeta?: ActionMeta<Option>) => void;
  handleSelect?: (value: string) => void;
}
