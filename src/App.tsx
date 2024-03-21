import { IFormData } from "./Form/IFormTypes";
import { Signin } from "./Form/Signin";
import { Signup } from "./Form/Signup";
import ContentWpapper from "./Wrappers/ContentWpapper";

function App() {
  const handleSigninSubmit = (inputData: IFormData) => {
    console.log("####: inputData", inputData);
  };

  const handleSignupSubmit = (inputData: IFormData) => {
    console.log("####: inputData", inputData);
  };

  return (
    <ContentWpapper>
      <Signin submit={handleSigninSubmit} />
      <Signup submit={handleSignupSubmit} />
    </ContentWpapper>
  );
}

export default App;
