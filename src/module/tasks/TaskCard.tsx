import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { ITask } from "types";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  console.log(task)
  return (
    <div className="border px-4 py-3 rounded-md my-3">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <div
            className={cn("size-3 rounded-full ", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          ></div>
          <h2>{task.title}</h2>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500">
            <Trash2 />
          </Button>
          <Checkbox />
        </div>
      </div>
      <p className=" mt-3 text-left">{task.description}</p>
    </div>
  );
};

export default TaskCard;
