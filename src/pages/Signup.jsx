import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import google from "../assets/google.svg";
import github from "../assets/github.svg";
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
          <img src={google} className="h-8" alt="" />
          <Button onClick={signUpWithGoogle}>Sign up with Google</Button>
        </div>
        <div className="flex flex-col justify-center bg-amber-50 p-5 rounded gap-5">
          <img src={github} className="h-8" alt="" />
          <Button onClick={signUpWithGitHub}>Sign up with Github</Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
