import { Timer } from "lucide-react";
const TaskCard = ({
  projectName,
  taskName,
  priority,
  dueDate,
  createdAt,
  photoURL,
}) => {
  return (
    <div className="flex w-[350px] flex-col cursor-grab  bg-white m-1  px-3 py-1 gap-2 rounded border-t-3 border-green-500">
      <div className="flex justify-between">
        <span className="text-[12px]">{createdAt}</span>
        <span className="text-[12px] font-medium text-green-500">
          {projectName}
        </span>
      </div>
      <span className="font-medium text-sm">{taskName}</span>
      <div className="flex flex-row items-center justify-between">
        <div className="flex gap-3">
          <span
            className={`text-[12px] font-light ${
              priority === "High" ? "text-red-500" : ""
            } ${priority === "Medium" ? "text-blue-500" : ""} ${
              priority === "Low" ? "text-green-500" : ""
            } `}
          >
            {priority}
          </span>
          <div className="flex">
            <Timer size={16} />{" "}
            <span className="text-[12px] font-light">{dueDate}</span>
          </div>
        </div>
        <div className=" h-7 w-7 rounded-full">
          <img src={photoURL} className="object-fill rounded-full " />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
