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

const AddProjectDialog = ({ onOpen, onClose }) => {
  const options = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
  ];
  const { users } = useProjectStore();

  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <Dialog open={onOpen} onOpenChange={() => onClose(false)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className={"text-black"}>Create Project</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <form>
          {/* project name */}
          <div className="flex flex-col gap-1 justify-center mx-2 my-3">
            <label className="font-medium text-[14px] text-black ">
              Project Name
            </label>
            <Input
              className="h-8 rounded"
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
              options={users}
              isMulti
              value={selectedOptions}
              onChange={setSelectedOptions}
              placeholder="Select Users"
              getOptionLabel={(e) => (
                <div className="flex flex-row items-center gap-4">
                  <img
                    src={e.photoURL}
                    className="h-7 w-7 rounded-full"
                    alt=""
                  />
                  <div className="text-black">{e.displayName}</div>
                </div>
              )}
              className="basic-multi-select text-black"
            />
          </div>

          {/* buttons */}
          <DialogFooter>
            <Button type="submit" className="h-8">
              <div className="flex flex-row items-center gap-2">
                <span>Add Task</span>
              </div>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProjectDialog;
