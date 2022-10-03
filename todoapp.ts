type Taskstodo = {
  id: number;
  tasks: string;
  status: "Completed" | "Pending";
}[];

const todoTasks: Taskstodo = [
  { id: 1, tasks: "toothbrush", status: "Completed" },
  { id: 2, tasks: "assignment", status: "Pending" },
  { id: 3, tasks: "Presentation", status: "Pending" },
];

//Marking todo item as completed
todoTasks[2].status = "Completed";

//listing todo items which are completed and their count
const todoComp = todoTasks.filter((e) => e.status == "Completed");
console.log(todoComp);
console.log(todoComp.length);

//listing todo items which are pending and their count
const todoPend = todoTasks.filter((e) => e.status == "Pending");
console.log(todoPend);
console.log(todoPend.length);

// listing the whole todo list items
console.log(todoTasks);
