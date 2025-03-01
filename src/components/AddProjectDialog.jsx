import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import Select from "react-select";
import useProjectStore from "@/store/useProjectStore";
import useAuthStore from "@/store/useAuthStore";

const AddProjectDialog = ({ onOpen, onClose }) => {
  const { addProject, isLoading } = useProjectStore();
  const { users } = useAuthStore();

  const formattedUsers = users.map((user) => ({
    value: user.id,
    label: user.displayName,
    photoURL: user.photoURL,
  }));

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData);
    obj.members = selectedOptions.map((u) => u.value);
    try {
      await addProject(obj);
      onClose(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={onOpen} onOpenChange={() => onClose(false)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className={"text-black"}>Create Project</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          {/* project name */}
          <div className="flex flex-col gap-1 justify-center mx-2 my-3">
            <label className="font-medium text-[14px] text-black ">
              Project Name
            </label>
            <Input
              className="h-8 rounded text-black"
              name="projectName"
              placeholder="Enter Project Name"
              required={true}
            />
          </div>

          {/* select user */}
          <div className="flex flex-col gap-1 justify-center mx-2 my-3 ">
            <label className="font-medium text-[14px] text-black">
              Select Members
            </label>
            <Select
              options={formattedUsers}
              required
              name="members"
              isMulti
              value={selectedOptions}
              onChange={setSelectedOptions}
              placeholder="Select Users"
              className="basic-multi-select text-black"
              getOptionLabel={(e) => (
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={e.photoURL}
                    className="h-6 w-6 rounded-full"
                    alt=""
                  />
                  <div className="text-black text-[12px]">{e.label}</div>
                </div>
              )}
            />
          </div>

          {/* buttons */}
          <DialogFooter>
            <Button type="submit" className="h-8">
              <div className="flex flex-row items-center gap-2">
                <span>Add Project</span>
                {isLoading && (
                  <img
                    src="/src/assets/google.svg"
                    className={`h-3 w-3 ${isLoading && "animate-spin"}`}
                  />
                )}
              </div>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProjectDialog;
