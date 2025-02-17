import useAuthStore from "@/store/useAuthStore";
import { Timer, ChartNoAxesColumnIncreasing } from "lucide-react";
const TaskCard = ({ date, projectName, taskName }) => {
  const { user } = useAuthStore();
  return (
    <div className="flex w-[350px] flex-col bg-white m-2 px-3 py-1 gap-2 rounded border-t-3 border-green-500">
      <div className="flex justify-between">
        <span className="text-[12px]">{date}</span>
        <span className="text-[12px] font-medium text-green-500">
          {projectName}
        </span>
      </div>
      <span className="font-medium text-sm">{taskName}</span>
      <div className="flex flex-row items-center justify-between">
        <div className="flex gap-3">
          <span className="text-[12px] font-light text-red-500">High</span>
          <div className="flex">
            <Timer size={16} />{" "}
            <span className="text-[12px] font-light">Today</span>
          </div>
        </div>
        <div className=" h-7 w-7 rounded-full">
          <img src={user.photoURL} className="object-fill rounded-full " />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
