function getTwoTasks() {
  // Task 1
  const title1 = prompt("Enter title for Task 1:");
  const description1 = prompt("Enter description for Task 1:");
  let status1 = prompt("Enter status for Task 1 (todo, doing, done):").toLowerCase();

  while (status1 !== "todo" && status1 !== "doing" && status1 !== "done") {
    status1 = prompt("Invalid input. Please enter status for Task 1 (todo, doing, done):").toLowerCase();
  }

  // Task 2
  const title2 = prompt("Enter title for Task 2:");
  const description2 = prompt("Enter description for Task 2:");
  let status2 = prompt("Enter status for Task 2 (todo, doing, done):").toLowerCase();

  while (status2 !== "todo" && status2 !== "doing" && status2 !== "done") {
    status2 = prompt("Invalid input. Please enter status for Task 2 (todo, doing, done):").toLowerCase();
  }

  if (status1 === "done") {
    console.log(`Title: ${title1}, status: ${status1}`);
  }

  if (status2 === "done") {
    console.log(`Title: ${title2}, status: ${status2}`);
  }

  if (
    (status1 === "todo" || status1 === "doing") &&
    (status2 === "todo" || status2 === "doing")
  ) {
    console.log("No tasks completed, let's get to work!");
  }

  if (status1 === "done" && status2 === "done") {
    console.log(`Task : ${title1}, status: ${status1}`);
    console.log(`Task : ${title2}, status: ${status2}`);
  }
}

getTwoTasks();
