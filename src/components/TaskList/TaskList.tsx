import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Task, UpdateTask } from "../../types/task";
import css from "./TaskList.module.css";

import { deleteTask, updateTask } from "../../services/taskService";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const queryClient = useQueryClient();

  const updateTaskM = useMutation({
    mutationFn: ([taskId, payload]: [Task["id"], UpdateTask]) => {
      return updateTask(taskId, payload);
    },
    onSuccess: (task) => {
      console.log("Updated task:", task);
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const deleteTaskM = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.item}>
          <input
            type="checkbox"
            defaultChecked={task.completed}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              return updateTaskM.mutate([
                task.id,
                // { completed: !task.completed },
                {completed: event.target.checked}
              ]);
            }}
          />
          <span className={css.text}>{task.text}</span>
          <button
            type="button"
            className={css.button}
            disabled={deleteTaskM.isPending}
            onClick={() => deleteTaskM.mutate(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
