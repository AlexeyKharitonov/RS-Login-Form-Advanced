import { ChangeHandler } from "../../Types";

export interface RadioInputProps {
  label: string[];
  id: string;
  type: string;
  name: string;
  onChange: ChangeHandler;
  selectedValue: string;
}
