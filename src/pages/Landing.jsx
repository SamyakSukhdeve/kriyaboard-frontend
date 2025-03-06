import { Button } from "@/components/ui/button";
import FeatureCard from "../components/FeatureCard";
import { Link, useNavigate } from "react-router-dom";

import thunder from "../assets/thunder.svg";
import star from "../assets/star.svg";
import hourglass from "../assets/hourglass.svg";
import activity from "../assets/activity.svg";

const Landing = () => {
  const naviagtor = useNavigate();

  return (
    <div className=" flex flex-col min-h-svh justify-center ">
      <header className="">
        <div className="container p-4">
          <Link
            to="/"
            className="text-xl italic sm:text-2xl font-semibold text-primary"
          >
            Kriya Board
          </Link>
        </div>
      </header>
      <div className="flex flex-col justify-center items-center grow ">
        <div className="container mt-5 text-center flex flex-col items-center ">
          <span className="text-[18px]  font-medium  italic mx-2 sm:text-3xl lg:text-4xl lg:mx-10 xl:mx-70 xl:font-bold ">
            Stay Organized, Build Faster – Kanban Made for Small Developers &
            Teams!
          </span>
          <p className="my-3 italic font-extralight text-muted-foreground  text-[12px] md:text-lg mx-5 lg:mx-30 xl:mx-100">
            Designed for small developer teams & students, our Kanban board
            helps you collaborate, manage tasks, and track progress
            effortlessly. Stay focused, ship faster, and keep your projects on
            track—all in one place!
          </p>
        </div>
        <Button
          onClick={() => naviagtor("/signup")}
          className={"m-2"}
          variant={"secondary"}
          size="sm"
        >
          Get Started
        </Button>
        <div className="grid grid-cols-2   sm:mx-22 lg:grid-cols-4 lg:mx-18 xl:mx-50  mx-2 my-10 gap-2">
          <FeatureCard
            icon={thunder}
            title="Simple & Powerful"
            subTitle="Create projects, add tasks, and move them around with drag & drop ease."
          />
          <FeatureCard
            icon={activity}
            title="Real-Time Team Collaboration"
            subTitle="Work together effortlessly—invite teammates, assign tasks, and stay in sync."
          />
          <FeatureCard
            icon={hourglass}
            title="Stay Organized, Work Smarter"
            subTitle="Prioritize tasks, set due dates, and keep your projects on track."
          />
          <FeatureCard
            icon={star}
            title="Access Anytime, Anywhere"
            subTitle="Your work syncs in real-time with Cloud—no more lost progress!"
          />
        </div>
      </div>
      <footer className="flex justify-center items-center  inset-x-0 bottom-0">
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
