const required = "Это поле обязательно для заполнения";

export const loginValidation = {
  required,
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Неверный формат электронной почты",
  },
};

export const passwordValidation = {
  required,
  minLength: {
    value: 4,
    message: "Пароль должен быть не менее 4 символа",
  },
};
