import RegisterForm from "../../components/RegisterForm";
import SideDesc from "../../components/SideDesc";
import { StyledRegisterPage } from "./styles";

const Register = () => {
  return(
    <StyledRegisterPage>
      <SideDesc/>
      <RegisterForm />
    </StyledRegisterPage>
  );
};

export default Register;
