import { Plus } from "lucide-react";

const Board = ({ boardName, children, onclick }) => {
  return (
    <div className="min-h-svh w-[365px] bg-green-100 mx-3 my-2 flex flex-col text-black rounded">
      <div className="flex flex-row justify-between p-4">
        <span className="font-medium">{boardName}</span>
        {boardName === "To Do" && (
          <Plus
            className="h-6 w-6 hover:bg-gray-200 rounded cursor-pointer"
            onClick={onclick}
          />
        )}
      </div>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};

export default Board;
