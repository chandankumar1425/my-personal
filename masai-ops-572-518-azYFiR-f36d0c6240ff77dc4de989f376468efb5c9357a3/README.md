# WEB - Masai Task Manager

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Form Submit is Working Fine - 1 marks.
 ✅ Check the Data after mutiple form submits - 1 marks.
 ✅ Check the Dashboard page's Table  - 1 marks.
 ✅ Check the total Table size  - 1 marks.
 ✅ Check Filtering in Done  - 1 marks.
 ✅ Add  To Progress and Check the Deleting - 1mark.
 ✅ Visit Progress Page and Check Table - 1mark.
 ✅ Add  To Done and Check the Deleting - 1mark.
 ✅ Check The Done Page - 1mark.
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html
- dashboard.html
- Progress.html
- Done.html
- Scripts/index.js
- Scripts/dashboard.js
- Scripts/progress.js
- Scripts/done.js
- Please ignore all the other files except the above-mentioned ones.

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

### Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

### Problem Statement:-

- Build an application where you can store all the tasks that you have.
- Your application had a Navbar that contains 4 tabs (this is already in the template no need to build).
  1. Home
  2. Dashboard
  3. In-Progress
  4. Done

### Home Page:-

- This page contains a form with 4 input boxes and one select tag having the following fields (this is already in the template no need to build).

1. Task Name
2. Description
3. Start Date (Input-Type-date)
4. End Date (Input-Type-date)
5. Priority

- On clicking on form submit (form submit event) you should store student's data in your local storage with key `task-list`.

`Hint : localStorage.setItem("task-list",JSON.stringify)`

- Refer to this image for better understanding:- ![Screenshot 2022-07-14 at 8.11.23 PM.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-07-14/Screenshot%202022-07-14%20at%208.11.23%20PM_395898.png)
- Refer to this doc to understand how to take input values from date - [Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)

### Dashboard Page:-

- On this page all the data from the `task-list` will be shown in a table format.
- The table will have the following columns:-
  1. Name
  2. Description
  3. Start Date
  4. End Date
  5. Priority
  6. Add To Progress
- Here the values will come from the LacalStorage Except for the last column.
- On all the rows of the last column will have this value `Add`. This word is case sensitive. Please note that.
- When You click on the last cell of that row(Add) that row should be deleted both from DOM and from localStorage and should be added in a new localStorage with the key `priority-list`.

`Hint : localStorage.setItem("priority-list",JSON.stringify) `.

- Refer to this image for better understanding ![Screenshot 2022-07-14 at 8.20.59 PM.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-07-14/Screenshot%202022-07-14%20at%208.20.59%20PM_529519.png)

### Priority Page:-

- On this page all the data from the `priority-list` will be shown in a table format.
- The table will have the following columns:-
  1. Name
  2. Description
  3. Start Date
  4. End Date
  5. Priority
  6. Add To Done
- Here the values will come from the LacalStorage Except for the last column.
- All the rows of the last column will have this value `Add`. This word is case-sensitive. Please note that.
- When You click on the last cell of that row(Add) that row should be deleted both from DOM and from localStorage and should be added in a new localStorage with the key `done-list`.

`Hint : localStorage.setItem("done-list",JSON.stringify)`

- Refer to this image for better understanding:- ![Screenshot 2022-07-15 at 12.43.16 PM.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-07-15/Screenshot%202022-07-15%20at%2012.43.16%20PM_200012.png)

### Done Page:-

- On this page all the data from the `done-list` will be shown in a table format.
- The table will have the following columns:-
  1. Name
  2. Description
  3. Start Date
  4. End Date
  5. Priority
- All the values on this page will come from the localStorage only.
- Refer to this image for better understanding:- ![Screenshot 2022-07-15 at 12.44.35 PM.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-07-15/Screenshot%202022-07-15%20at%2012.44.35%20PM_237639.png)

### Bonus Features:-

- In the Dashboard page you will have a select field. You can filter tasks by priority with that.
- When you chose the default value in the select tag(Select Priority) all the tasks in the localstorage should be shown.
- On the Dashboard page there will also be a heading tag. You have to show the total number of tasks on that particular page.
- In the template you will have the heading like this

`<h1>Total Task:- <span id="task-count">0</span></h1>`.

- You have to catch this span tag and append the text there.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
