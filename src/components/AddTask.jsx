import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Button } from "../components/ui/button";

const AddTask = ({ ref, handelToggle }) => {
  return (
    <dialog
      ref={ref}
      className="w-96 h-96 rounded bg-white text-black border-1 border-black  px-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="text-[16px] font-medium my-3">Create Task</div>
      <div>
        <div className="flex flex-col gap-1 justify-center mx-2 my-3">
          <span className="font-light text-[14px]">Task</span>
          <Input className="h-8 rounded" />
        </div>
        <div className="flex flex-col gap-1 justify-center mx-2 my-3">
          <span className="font-light text-[14px]">Priority</span>
          <select
            name="priority"
            id="p"
            className={cn(
              "border-neutral-200  file:text-neutral-950 placeholder:text-neutral-500 selection:bg-neutral-900 selection:text-neutral-50 aria-invalid:outline-destructive/60 aria-invalid:ring-red-500/20 dark:aria-invalid:outline-destructive dark:aria-invalid:ring-red-500/50 ring-neutral-950/10 dark:ring-neutral-950/20 dark:outline-ring/40 outline-ring/50 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500/60 dark:aria-invalid:border-red-500 flex h-8 w-full min-w-0 rounded border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-[3px] aria-invalid:focus-visible:outline-none md:text-sm dark:aria-invalid:focus-visible:ring-4 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:selection:bg-neutral-50 dark:selection:text-neutral-900 dark:aria-invalid:ring-red-900/20 dark:dark:aria-invalid:ring-red-900/50 dark:ring-neutral-300/10 dark:dark:ring-neutral-300/20 dark:dark:aria-invalid:ring-red-900/40 dark:aria-invalid:border-red-900/60 dark:dark:aria-invalid:border-red-900"
            )}
          >
            <option value="High" className="text-red-500">
              High
            </option>
            <option value="Medium" className="text-blue-500">
              Medium
            </option>
            <option value="Low" className="text-green-500">
              Low
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-1 justify-center mx-2 my-3">
          <span className="font-light text-[14px]">Due Date</span>
          <Input type="date" className="h-8 rounded " />
        </div>
      </div>
      <div className="flex flex-row gap-3 right-3 bottom-3 absolute">
        {" "}
        <Button className="h-8" variant="outline" onClick={handelToggle}>
          Close
        </Button>
        <Button className="h-8">Add Task</Button>
      </div>
    </dialog>
  );
};

export default AddTask;
