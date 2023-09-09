import { auth } from "@/configs/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface LoginFormTypes {
  email: string;
  password: string;
}

const useLoginFormLogic = () => {
  const { handleSubmit, control } = useForm<LoginFormTypes>();
  const navigate = useNavigate();

  const onSubmit = ({ email, password }: LoginFormTypes) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
  };

  return { submitHandler: handleSubmit(onSubmit), control };
};

export default useLoginFormLogic;
