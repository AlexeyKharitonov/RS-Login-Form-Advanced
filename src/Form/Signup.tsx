import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "../Inputs/TextInput/";
import { SelectInput } from "../Inputs/SelectInput/";
import { RangeInput } from "../Inputs/RangeInput";
import { ToggleInput } from "../Inputs/ToggleInput/";
import { Loader } from "../Loader";
import { IChange, IData, IFormData, IOption } from "./IFormTypes";
import { RadioInput } from "../Inputs/RadioInput";
import { inputBGStyle } from "../Utils/inputBGStyle";
import { Button } from "../Button";
import { SubmitHandler } from "../Types";

export const Signup = ({ submit }: { submit: SubmitHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const [formData, setFormData] = useState<IData>({
    placeholder: "",
    label: "",
    description: "",
    error: "",
    variant: ["Default", "Black", "Blue"],
    radius: 10,
    size: 18,
    disabled: false,
    asterisk: true,
  });
  const [inputs, setInputs] = useState<IFormData>({
    email: "",
    password: "",
    name: "",
    nickName: "",
    sex: "Male",
    confirmPassword: "",
  });

  const [selected, setSelected] = useState(formData.variant[0]);
  const [loading, setLoading] = useState(false);

  const handleSelect = (selOpt: string) => {
    setSelected(selOpt);
  };

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      submit(inputs);
      setLoading(false);
    }, 500);
    reset();
  };

  const setChange = ({ type, checked, value }: IChange) => {
    switch (type) {
      case "checkbox":
        return checked;
      case "range":
        return +value;
      case "select-one":
        return value;
      case "radio":
        return value;
      default:
        return value;
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;

    let checked = false;
    if (event.target instanceof HTMLInputElement) {
      checked = event.target.checked;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: setChange({ type, checked, value }),
    }));
    setInputs((prevInputForm) => ({
      ...prevInputForm,
      [name]: setChange({ type, checked, value }),
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
    <div className="flex flex-col md:flex-row justify-center items-center w-full p-16 gap-12">
      <div className="w-2/3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          // onChange={handleChange}
          className="w-full mx-auto opacity-85 min-w-40 bg-[#EEEEEE] px-12 py-8 rounded-lg"
        >
          <TextInput
            label={formData.label.length ? formData.label : "Name"}
            id="name"
            type="name"
            name="name"
            description={formData.description}
            placeholder={
              formData.placeholder.length ? formData.placeholder : "Your name"
            }
            customError={formData.error}
            disabled={formData.disabled}
            asterisk={formData.asterisk}
            rounded={formData.radius}
            size={formData.size}
            register={register}
            rules={{
              required: "Это поле обязательно для заполнения",
              minLength: {
                value: 3,
                message: "Имя должно быть не менее 3 символов",
              },
            }}
            error={errors.name}
            bgInput={inputBGStyle(selected)}
          />
          <TextInput
            label={formData.label.length ? formData.label : "NickName"}
            id="nickName"
            type="nickName"
            name="nickName"
            description={formData.description}
            placeholder={
              formData.placeholder.length
                ? formData.placeholder
                : "Your nickname"
            }
            customError={formData.error}
            disabled={formData.disabled}
            asterisk={formData.asterisk}
            rounded={formData.radius}
            size={formData.size}
            register={register}
            rules={{
              required: "Это поле обязательно для заполнения",
              minLength: {
                value: 3,
                message: "Никнейм должен быть не менее 3 символов",
              },
            }}
            error={errors.nickName}
            bgInput={inputBGStyle(selected)}
          />
          <TextInput
            label={formData.label.length ? formData.label : "Email"}
            id="email"
            type="email"
            name="email"
            description={formData.description}
            placeholder={
              formData.placeholder.length ? formData.placeholder : "Your email"
            }
            customError={formData.error}
            disabled={formData.disabled}
            asterisk={formData.asterisk}
            rounded={formData.radius}
            size={formData.size}
            register={register}
            rules={{
              required: "Это поле обязательно для заполнения",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Неверный формат электронной почты",
              },
            }}
            error={errors.email}
            bgInput={inputBGStyle(selected)}
          />
          <RadioInput
            label={["Male", "Female"]}
            id="sex"
            type="radio"
            name="sex"
            selectedValue={inputs.sex}
            onChange={handleChange}
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
            rules={{
              required: "Это поле обязательно для заполнения",
              minLength: {
                value: 4,
                message: "Пароль должен быть не менее 4 символа",
              },
            }}
            error={errors.password}
            bgInput={inputBGStyle(selected)}
          />
          <TextInput
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Your confirm password"
            customError={formData.error}
            disabled={formData.disabled}
            asterisk={formData.asterisk}
            rounded={formData.radius}
            size={formData.size}
            register={register}
            rules={{
              required: "Это поле обязательно для заполнения",
              minLength: {
                value: 4,
                message: "Пароль должен быть не менее 4 символа",
              },
            }}
            error={errors.confirmPassword}
            bgInput={inputBGStyle(selected)}
          />
          <Button>Отправить</Button>
        </form>
      </div>
      <div className="w-1/3">
        <form
          // onChange={handleChange}
          className="w-full mx-auto min-w-40 opacity-85 bg-[#EEEEEE] p-8 rounded-lg "
        >
          <TextInput
            label="Placeholder"
            id="placeholder"
            type="text"
            name="placeholder"
            placeholder="Your email"
            register={register}
          />
          <TextInput
            label="Label"
            id="label"
            type="text"
            name="label"
            placeholder="Email"
            register={register}
          />
          <TextInput
            label="Description"
            id="description"
            type="text"
            name="description"
            placeholder="Description"
            register={register}
          />
          <TextInput
            label="Error"
            id="error"
            type="text"
            name="error"
            placeholder="Error"
            register={register}
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
            // disabled={formData.asterisk}
            type="checkbox"
            name="asterisk"
            onChange={handleChange}
            checked={formData.asterisk}
          />
        </form>
      </div>
    </div>
  );
};
