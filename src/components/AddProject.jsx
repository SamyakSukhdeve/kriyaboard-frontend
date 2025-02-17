import { Input } from "./ui/input";

const AddProject = ({ ref }) => {
  return (
    <dialog
      ref={ref}
      style={{ alignSelf: "center" }}
      className="w-96 h-96 rounded bg-amber-50 text-black px-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div>
        {" "}
        <span>Add Project</span>
        <Input />
      </div>
    </dialog>
  );
};
export default AddProject;
 