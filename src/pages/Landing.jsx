import Button from "../components/button";
import FeatureCard from "../components/FeatureCard";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const naviagtor = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-svh">
      <div className="container mx-10 max-w-5xl text-center flex flex-col items-center ">
        <span className="text-xl mx-7 sm:text-3xl lg:text-5xl font-medium italic">
          Stay Organized, Build Faster – Kanban Made for Small Developers &
          Teams!
        </span>
        <p className="my-5 italic font-light max-w-2xl text-sm md:text-lg mx-5">
          Designed for small developer teams & students, our Kanban board helps
          you collaborate, manage tasks, and track progress effortlessly. Stay
          focused, ship faster, and keep your projects on track—all in one
          place!
        </p>
      </div>
      <Button title="Get Started" onClick={() => naviagtor("/signup")} />
      <div className="grid grid-cols-2 sm:mx-6 lg:grid-cols-4 lg:mx-40 mx-4 my-10 gap-2">
        <FeatureCard
          icon="src/assets/thunder.svg"
          title="Simple & Powerful"
          subTitle="Create projects, add tasks, and move them around with drag & drop ease."
        />
        <FeatureCard
          icon="src/assets/activity.svg"
          title="Real-Time Team Collaboration"
          subTitle="Work together effortlessly—invite teammates, assign tasks, and stay in sync."
        />
        <FeatureCard
          icon="src/assets/hourglass.svg"
          title="Stay Organized, Work Smarter"
          subTitle="Prioritize tasks, set due dates, and keep your projects on track."
        />
        <FeatureCard
          icon="src/assets/star.svg"
          title="Access Anytime, Anywhere"
          subTitle="Your work syncs in real-time with Cloud—no more lost progress!"
        />
      </div>
      <footer className="flex justify-center items-center absolute inset-x-0 bottom-2">
        <div>
          Made by{" "}
          <Link
            to="https://samyaksukhdeve.dev/"
            target="_blank"
            className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-500 bg-clip-text text-transparent"
          >
            samyaksukhdeve.dev
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
