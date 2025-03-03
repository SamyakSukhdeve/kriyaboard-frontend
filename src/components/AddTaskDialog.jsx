import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useTaskStore from "@/store/useTaskStore";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogDescription } from "@radix-ui/react-dialog";
import useAuthStore from "@/store/useAuthStore";
import { LoaderCircle } from "lucide-react";

const AddTaskDialog = ({ onOpen, onClose, projectData, members }) => {
  const { createTask, isLoading } = useTaskStore();
  const { users } = useAuthStore();

  const projectMembers = members[0].members;
  const memberUser = users.filter((u) => projectMembers.includes(u.id));

  const addTaskToDb = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);
    try {
      await createTask(data, projectData);
      onClose(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Dialog open={onOpen} onOpenChange={() => onClose(false)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className={"text-black"}>Create Task</DialogTitle>
            <DialogDescription />
          </DialogHeader>
          <form onSubmit={addTaskToDb}>
            {/* task */}
            <div className="flex flex-col gap-1 justify-center mx-2 my-3">
              <label className="font-medium text-[14px] text-black ">
                Task
              </label>
              <Input
                className="h-8 rounded text-black"
                name="task"
                placeholder="Enter Task"
                required={true}
              />
            </div>

            {/* dropdown-1 */}
            <div className="flex flex-col gap-1 justify-center mx-2 my-3">
              <label className="font-medium text-[14px] text-black">
                Priority
              </label>
              <Select name="priority" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="High">
                    <div className="flex flex-row items-center gap-4">
                      <div className="h-2 w-2 bg-red-500 rounded"></div>
                      <div className="text-black">High</div>
                    </div>
                  </SelectItem>
                  <SelectItem value="Medium">
                    <div className="flex flex-row items-center gap-4">
                      <div className="h-2 w-2 bg-blue-500 rounded"></div>
                      <div className="text-black">Medium</div>
                    </div>
                  </SelectItem>
                  <SelectItem value="Low">
                    <div className="flex flex-row items-center gap-4">
                      <div className="h-2 w-2 bg-green-500 rounded"></div>
                      <div className="text-black">Low</div>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* dueDate */}
            <div className="flex flex-col gap-1 justify-center mx-2 my-3">
              <label className="font-medium text-[14px] text-black">
                Due Date
              </label>
              <Input
                type="date"
                className="h-8 rounded text-black"
                name="dueDate"
                required={true}
              />
            </div>

            {/* dropdown-2 */}
            <div className="flex flex-col gap-1 justify-center mx-2 my-3 ">
              <label className="font-medium text-[14px] text-black">
                Assign To
              </label>
              <Select name="assignTo" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select User" />
                </SelectTrigger>
                <SelectContent>
                  {memberUser.map((u) => (
                    <SelectItem
                      value={JSON.stringify({ photoURL: u.photoURL, id: u.id })}
                      key={u.id}
                    >
                      <div className="flex flex-row items-center gap-4">
                        <img
                          src={u.photoURL}
                          className="h-7 w-7 rounded-full"
                          alt=""
                        />
                        <div className="text-black">{u.displayName}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* buttons */}
            <DialogFooter>
              <Button type="submit" className="h-8">
                <div className="flex flex-row items-center gap-2">
                  <span>Add Task</span>
                  {isLoading && (
                    <LoaderCircle
                      className={`h-3 w-3 ${isLoading && "animate-spin"}`}
                    />
                  )}
                </div>
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddTaskDialog;
