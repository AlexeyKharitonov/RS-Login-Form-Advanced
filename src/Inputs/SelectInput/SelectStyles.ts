import { StylesConfig } from "react-select";

export const SelectStyles: StylesConfig<any, boolean> = {
  control: (base, state) => ({
    ...base,
    borderRadius: "12px",
    borderColor: state.isFocused ? "transparent" : "#ced4da",
    boxShadow: state.isFocused ? "none" : base.boxShadow,
    "&:hover": {
      borderColor: state.isFocused ? "transparent" : "#ced4da",
    },
    color: "#4B5563",
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingLeft: "12px",
    border: "3px",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "12px",
    color: "#4B5563",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#4B5563",
  }),
};
