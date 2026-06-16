# 📝 To-Do List App

A simple and responsive To-Do List application built using **HTML**, **CSS**, and **Vanilla JavaScript**.

Tasks are stored in the browser using **Local Storage**, so they remain available even after refreshing or reopening the page.

---

## 🚀 Features

* Add tasks by pressing **Enter**
* Delete individual tasks
* Mark tasks as completed using checkboxes
* Strike-through effect for completed tasks
* Clear all tasks with one click
* Automatically saves tasks using Local Storage
* Reloads saved tasks when the page is opened again
* Responsive and minimal user interface

---

## 📂 Project Structure

```
todo-list/
│
├── index.html
├── styles.css
└── script.js
```

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Browser Local Storage API

---

## ⚡ How It Works

### Adding a Task

1. Type a task into the input field.
2. Press **Enter**.
3. The task is added to the list.
4. The task is automatically saved in Local Storage.

### Completing a Task

* Click the checkbox next to a task.
* The task text will be crossed out.
* Unchecking restores the original text.

### Deleting a Task

* Click the 🗑️ button next to any task.
* The task is removed from both the UI and Local Storage.

### Clearing All Tasks

* Click the **Clear All** button.
* All tasks are removed from the page and Local Storage.

---

## 💾 Local Storage

Tasks are stored in the browser using:

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

When the page loads:

```javascript
JSON.parse(localStorage.getItem("tasks"));
```

This allows tasks to persist even after refreshing the page.

---

## 🏃 Running the Project

1. Clone the repository:

```bash
git clone https://github.com/your-username/todo-list.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

No installation or dependencies required.

---

## 🔮 Future Improvements

* Edit existing tasks
* Dark mode
* Task categories
* Due dates
* Drag-and-drop task reordering
* Completed task counter
* Store completion status in Local Storage
* Mobile-first enhancements

