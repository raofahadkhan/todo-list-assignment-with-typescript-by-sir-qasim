var todoTasks = [
    { id: 1, tasks: "toothbrush", status: "Completed" },
    { id: 2, tasks: "assignment", status: "Pending" },
    { id: 3, tasks: "Presentation", status: "Pending" },
];
todoTasks[2].status = "Completed";
var todoComp = todoTasks.filter(function (e) { return e.status == "Completed"; });
console.log(todoComp);
console.log(todoComp.length);
var todoPend = todoTasks.filter(function (e) { return e.status == "Pending"; });
console.log(todoPend);
console.log(todoPend.length);
console.log(todoTasks);
