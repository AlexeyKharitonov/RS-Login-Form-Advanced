import {
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  FieldError,
} from "react-hook-form";
import { ChangeHandler } from "../../Types";

export interface TextInputProps {
  label: string;
  id: string;
  type: string;
  name: string;
  placeholder: string;
  description?: string;
  disabled?: boolean;
  asterisk?: boolean;
  rounded?: number;
  size?: number;
  register?: UseFormRegister<FieldValues> | undefined;
  rules?: RegisterOptions;
  customError?: string;
  error?: FieldError | { message?: string };
  bgInput?: string;
  defaultValue?: string;
  onChange?: ChangeHandler;
}
