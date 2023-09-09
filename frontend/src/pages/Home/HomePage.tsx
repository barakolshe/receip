import Button from "@/components/common/Button";
import { auth } from "@/configs/firebase.config";
import { signOut } from "firebase/auth";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const navigate = useNavigate();

  const logOut = async () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };

  return (
    <div>
      <h1>Hello</h1>
      <Button onClick={logOut}>Log Out</Button>
    </div>
  );
};

export default HomePage;
