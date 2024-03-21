import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "../Inputs/TextInput";
import { SelectInput } from "../Inputs/SelectInput";
import { RangeInput } from "../Inputs/RangeInput";
import { ToggleInput } from "../Inputs/ToggleInput";
import { loginValidation, passwordValidation } from "./FormValidation";
import { Loader } from "../Loader";
import { Button } from "../Button";
import { inputBGStyle } from "../Utils/inputBGStyle";
import { IData, IFormData, IOption } from "./IFormTypes";
import { ChangeHandler, SubmitHandler } from "../Types";

export const Signin = ({ submit }: { submit: SubmitHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    mode: "onChange",
  });

  const [formData, setFormData] = useState<IData>({
    placeholder: "Your email",
    label: "Email",
    description: "",
    error: "",
    variant: ["Default", "Black", "Blue"],
    radius: 10,
    size: 18,
    disabled: false,
    asterisk: true,
  });
  // const [inputs, setInputs] = useState<IFormData>({
  //   email: "",
  //   password: "",
  // });

  const [selected, setSelected] = useState(formData.variant[0]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelect = (selOpt: string) => {
    setSelected(selOpt);
  };

  const onSubmit = (data: IFormData) => {
    setLoading(true);
    setTimeout(() => {
      // submit(inputs);
      submit(data);
      setLoading(false);
    }, 500);
    reset();
  };

  // const setChanged = ({ type, checked, value }: IChange) => {
  //   switch (type) {
  //     case "checkbox":
  //       return checked;
  //     case "range":
  //       return +value;
  //     case "select-one":
  //       return value;
  //     default:
  //       return value;
  //   }
  // };

  // const handleInputChange = (event: React.FormEvent<HTMLFormElement>) => {
  //   const { name, value } = event.target as HTMLInputElement;
  //   setInputs((prevInput) => ({
  //     ...prevInput,
  //     [name]: value,
  //   }));
  // };

  const handleChange: ChangeHandler = (event) => {
    // const { name, value, type } = event.target as
    //   | HTMLInputElement
    //   | HTMLSelectElement;
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;

    let checked = false;
    if (target instanceof HTMLInputElement && type === "checkbox") {
      checked = target.checked;
    }

    // let checked = false;
    // if (event.target instanceof HTMLInputElement) {
    //   checked = event.target.checked;
    // }

    // if (type === "checkbox" || type === "radio") {
    //   checked = (event.target as HTMLInputElement).checked;
    // }

    setFormData((prevData) => ({
      ...prevData,
      // [name]: setChanged({ type, checked, value }),
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (selectedOption: IOption | null, name: string) => {
    if (selectedOption) {
      if (selectedOption) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: selectedOption.value,
        }));
      }
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <h1 className="flex justify-center font-extrabold my-3 text-5xl">
        Формы
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center w-full p-16 gap-12">
        <div className="w-2/3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            // onChange={handleInputChange}
            className="w-full mx-auto opacity-85 bg-[#EEEEEE] min-w-40 px-32 md:px-12 py-8 rounded-lg"
          >
            <TextInput
              // label={formData.label.length ? formData.label : "Email"}
              label={"Email"}
              id="email"
              type="email"
              name="email"
              description={formData.description}
              placeholder={
                formData.placeholder.length
                  ? formData.placeholder
                  : "Your email"
              }
              customError={formData.error}
              disabled={formData.disabled}
              asterisk={formData.asterisk}
              rounded={formData.radius}
              size={formData.size}
              register={register}
              rules={loginValidation}
              error={errors.email}
              bgInput={inputBGStyle(selected)}
            />
            <TextInput
              label="Password"
              id="password"
              type="password"
              name="password"
              placeholder="Your password"
              customError={formData.error}
              disabled={formData.disabled}
              asterisk={formData.asterisk}
              rounded={formData.radius}
              size={formData.size}
              register={register}
              rules={passwordValidation}
              error={errors.password}
              bgInput={inputBGStyle(selected)}
            />
            <Button>Отправить</Button>
          </form>
        </div>
        <div className="w-1/3">
          <form
            onChange={handleChange}
            className="w-full mx-auto opacity-85  bg-[#EEEEEE] p-8 rounded-lg "
          >
            <TextInput
              label="Placeholder"
              id="placeholder"
              type="text"
              name="placeholder"
              placeholder="Your email"
              register={register}
              defaultValue={formData.placeholder}
              onChange={handleChange}
            />
            <TextInput
              label="Label"
              id="label"
              type="text"
              name="label"
              placeholder="Email"
              register={register}
              defaultValue={formData.label}
              onChange={handleChange}
            />
            <TextInput
              label="Description"
              id="description"
              type="text"
              name="description"
              placeholder="Description"
              register={register}
              onChange={handleChange}
            />
            <TextInput
              label="Error"
              id="error"
              type="text"
              name="error"
              placeholder="Error"
              register={register}
              onChange={handleChange}
            />
            <SelectInput
              label="Variant"
              id="variant"
              name="select"
              opts={formData.variant}
              placeholder="Выбере цвет"
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "select")
              }
              handleSelect={handleSelect}
              // selected={selected}
            />
            <RangeInput
              id="Radius"
              label="Radius"
              type="range"
              name="radius"
              min="0"
              max="30"
              value={formData.radius}
              step="5"
              onChange={handleChange}
            />
            <RangeInput
              id="size"
              label="Size"
              type="range"
              name="size"
              min="12"
              max="30"
              step="2"
              value={formData.size}
              onChange={handleChange}
            />
            <ToggleInput
              label="Disabled"
              type="checkbox"
              name="disabled"
              onChange={handleChange}
              checked={formData.disabled}
            />
            <ToggleInput
              label="With asterisk"
              type="checkbox"
              name="asterisk"
              onChange={handleChange}
              checked={formData.asterisk}
            />
          </form>
        </div>
      </div>
    </>
  );
};
