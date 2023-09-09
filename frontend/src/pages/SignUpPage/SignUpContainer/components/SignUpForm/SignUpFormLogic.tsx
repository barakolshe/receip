import { auth } from "@/configs/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface SignUpFormTypes {
  email: string;
  password: string;
}

const useSignUpFormLogic = () => {
  const {
    handleSubmit,
    register,
    formState: { errors: formErrors },
    setError,
  } = useForm<SignUpFormTypes>();

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

  const onSubmit = ({ email, password }: SignUpFormTypes) => {
    const navigate = useNavigate();

    console.log("creating user");
    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        // Signed in
        navigate("/login");
        // ...
      })
      .catch(() => {
        setError("password", {
          type: "EmailAlreadyExists",
          message: "The email provided already exists",
        });
      });
  };

  return {
    submitHandler: handleSubmit(onSubmit),
    formErrors,
    registers,
  };
};

export default useSignUpFormLogic;
