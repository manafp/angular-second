export interface Task {
  id: string; // Unique identifier for the task
  userId: string; // ID of the user who owns the task
  title: string; // Title of the task
  summary: string; // Description or summary of the task
  dueDate: string; // Due date for the task in ISO format (YYYY-MM-DD)
}
export interface NewTask {
  title: string;
  summary: string;
  dueDate: string;
}
