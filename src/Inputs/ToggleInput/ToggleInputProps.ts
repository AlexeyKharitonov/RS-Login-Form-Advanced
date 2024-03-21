import { ChangeHandler } from "../../Types";

export interface ToggleInputProps {
  label: string;
  onChange: ChangeHandler;
  // type: string;
  type: "checkbox";
  name: string;
  checked: boolean;
}
