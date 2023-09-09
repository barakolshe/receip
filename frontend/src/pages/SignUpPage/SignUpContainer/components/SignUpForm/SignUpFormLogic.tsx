import { auth } from "@/configs/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface LoginFormTypes {
  email: string;
  password: string;
}

const useSignUpFormLogic = () => {
  const { handleSubmit, control, register } = useForm<LoginFormTypes>();

  const registers = {};

  const { ref: inputRef, ...inputProps } = register("email", {
    required: true,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "invalid email address",
    },
  });

  const onSubmit = ({ email, password }: LoginFormTypes) => {
    const navigate = useNavigate();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        // Signed in
        navigate("/login");
        // ...
      })
      .catch((error) => {
        console.error(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
  };

  return {
    submitHandler: handleSubmit(onSubmit),
    control,
  };
};

export default useSignUpFormLogic;
