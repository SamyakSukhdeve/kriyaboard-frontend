import { useDroppable } from "@dnd-kit/core";

const Droppable = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  // const style = isOver ? { backgroundColor: "lightgreen" } : undefined; // Example visual feedback

  // const style = isOver
  //   ? { border: "2px solid darkred" }
  //   : { backgroundColor: "transparent" }; // More obvious feedback

  return (
    <div ref={setNodeRef}  className="p-0 m-0 rounded-2xl">
      {children}
    </div>
  );
};

export default Droppable;
