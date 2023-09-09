import { auth } from "@/configs/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface LoginFormTypes {
  email: string;
  password: string;
}

const useLoginFormLogic = () => {
  const {
    handleSubmit,
    register,
    formState: { errors: formErrors },
    setError,
  } = useForm<LoginFormTypes>();
  const navigate = useNavigate();

  // email
  const { ref: emailInputRef, ...emailInputProps } = register("email", {
    required: "This field is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Invalid email address",
    },
  });

  // password
  const { ref: passwordInputRef, ...passwordInputProps } = register(
    "password",
    {
      required: "This field is required",
    }
  );

  const registers = {
    email: {
      ref: emailInputRef,
      inputProps: emailInputProps,
    },
    password: {
      ref: passwordInputRef,
      inputProps: passwordInputProps,
    },
  };

  const onSubmit = ({ email, password }: LoginFormTypes) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        navigate("/home");
      })
      .catch(() => {
        setError("password", {
          type: "userNotFound",
          message: "The email or password you entered don't match",
        });
      });
  };

  return { submitHandler: handleSubmit(onSubmit), formErrors, registers };
};

export default useLoginFormLogic;
