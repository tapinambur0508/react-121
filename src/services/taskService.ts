import axios from "axios";

import type { Task, CreateTask, UpdateTask } from "../types/task";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const getTasks = async (counter: number): Promise<Task[]> => {
  console.log(counter);
  const res = await axios.get<Task[]>("/tasks");
  return res.data;
};

export const createTask = async (payload: CreateTask): Promise<Task> => {
  const res = await axios.post<Task>("/tasks", payload);
  return res.data;
}

export const deleteTask = async (taskId: Task["id"]): Promise<void> => {
  await axios.delete(`/tasks/${taskId}`);
}

export const updateTask = async (taskId: Task["id"], payload: UpdateTask): Promise<Task> => {
  const res = await axios.put<Task>(`/tasks/${taskId}`, payload);
  return res.data;
}
