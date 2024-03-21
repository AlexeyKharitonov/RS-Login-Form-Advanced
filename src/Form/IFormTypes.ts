export interface IData {
  placeholder: string;
  label: string;
  description: string;
  error: string;
  variant: string[];
  radius: number;
  size: number;
  disabled: boolean;
  asterisk: boolean;
}

export interface IFormData {
  email: "";
  password: "";
  name?: "";
  nickName?: "";
  sex?: "Male";
  confirmPassword?: "";
}

export interface IOption {
  label: string;
  value: string;
}

export interface IChange {
  type: string;
  checked: boolean;
  value: string;
}
