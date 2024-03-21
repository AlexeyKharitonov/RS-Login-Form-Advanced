import { IFormData } from "../Form/IFormTypes";

export type SubmitHandler = (formData: IFormData) => void;
export type ChangeHandler = (
  event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => void;

// export type ChangeHandler = (
//   event: React.FormEvent<HTMLFormElement | HTMLSelectElement>
// ) => void;
