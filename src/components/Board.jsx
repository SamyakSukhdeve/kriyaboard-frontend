import { Plus } from "lucide-react";

const Board = ({ boardName, children, onclick }) => {
  return (
    <div className="flex flex-row  ">
      <div className="min-h-svh bg-green-100 mx-3 my-2 flex flex-col text-black  rounded">
        <div className="flex flex-row justify-between">
          {" "}
          <span className=" m-4 font-medium">{boardName}</span>
          <Plus
            className="m-4 h-6 w-6 hover:bg-gray-200 rounded"
            onClick={onclick}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Board;
