Summer Chores

Callback Version:
This project is designed to run a set of chores that have a random chance of falling asleep before completing
or completing and calling the next chore to begin. If all chores are completed, a completion message will print.

- Feature 1: Random Number Generator (Math.random() < 0.2) to create a scenario where Sarah might fall asleep
before finishing the current chore/after finishing the most recent chore.
- Feature 2: setTimeout() to create the window in which Sarah is working on the chore and could call asleep.
- Feature 3: callback to call other functions and ultimately call doSummerChores to kick off the callback Hell.
  (I still feel like I have a pretty tenuous grasp on this concept. I just know this works. ¯\_(ツ)_/¯ )


Promise Version:
Updated with the following:
- Cleaner fallsAsleep function logic
- Each function includes resolve/reject logic
- The doSummerChores function includes a .then() chain that passes (name) through the chain, which ends in a final .catch, which includes a final error message in the form of another template literal.

Async and Await Version:
Updated with the following:
- Removed some redundancies with the resolves/console.logs
- Created an asynchronous function and passed name as an argument.
- Turned the result of each chore into a variable and used await to order their execution.
- Wrapped everything in a try/catch for error handling.