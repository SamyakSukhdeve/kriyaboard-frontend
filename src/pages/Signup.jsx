import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import useAuthStore from "../store/useAuthStore";
import { useEffect } from "react";

const Signup = () => {
  const { signUpWithGoogle, user, signUpWithGitHub } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="flex justify-center flex-col items-center min-h-svh">
      <span className="py-10 text-2xl">SignUp or LogIn</span>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center bg-amber-50 p-5 rounded gap-5">
          <img src="/src/assets/google.svg" className="h-8" alt="" />
          <Button
            title="Sign up with Google"
            onClick={signUpWithGoogle}
          ></Button>
        </div>
        <div className="flex flex-col justify-center bg-amber-50 p-5 rounded gap-5">
          <img src="/src/assets/github.svg" className="h-8" alt="" />
          <Button
            title="Sign up with Github"
            onClick={signUpWithGitHub}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
