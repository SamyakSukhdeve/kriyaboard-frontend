import { Plus } from "lucide-react";

const Board = ({ boardName, children, onclick }) => {
  return (
    <div className=" min-h-svh w-[365px]  bg-[#D2E0FB] m-3 flex flex-col text-black rounded-sm">
      <div className="flex flex-row justify-between p-4">
        <span className="font-medium">{boardName}</span>
        {boardName === "To Do" && (
          <>
            <Plus
              className="h-6 w-6 hover:bg-gray-200 rounded cursor-pointer"
              onClick={onclick}
            />
            <span className="sr-only">Add Task</span>
          </>
        )}
      </div>
      <div className="flex flex-col gap-1 items-center">{children}</div>
    </div>
  );
};

export default Board;
