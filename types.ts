export type ITask = {
  id: string;
  title: string;
  description: string;
  dueDate: string; // ISO format (e.g., YYYY-MM)
  priority: "high" | "medium" | "low";
  isCompleted: boolean;
};
