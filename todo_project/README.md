# 📝 Django To-Do List Application



A simple and beginner-friendly Django web application that allows users to **add**, **edit**, **delete**, and **mark tasks as completed**. The UI is built using **Bootstrap** to provide a clean and responsive design.

---

## 📌 Features

* ✅ Add new tasks
* ✏ Edit existing tasks
* ❌ Delete tasks
* ✔ Mark tasks as complete / undo
* 🎨 Beautiful Bootstrap UI
* 💾 Tasks stored in SQLite database

---

## 📂 Project Structure

```
todo_project/
│
├── todoproject/        # Main project directory
├── todo/               # App directory
│   ├── templates/      # HTML templates
│   │    └── home.html
│   │    └── update.html
│   ├── static/
│   │    └── todo/
│   │         └── style.css
│   ├── models.py       # Database models
│   ├── views.py        # App views (logic)
│   ├── urls.py         # App URL routing
│
└── manage.py
```

---

## ⚙️ Tech Stack

| Technology | Purpose       |
| ---------- | ------------- |
| Python     | Programming   |
| Django     | Web Framework |
| Bootstrap  | Frontend UI   |
| SQLite     | Database      |

---

## 🚀 Getting Started

Follow these steps to run the project on your local machine.

### 1️⃣ Clone the repository (or download ZIP)

```bash
git clone https://github.com/your-username/django-todo-app.git
cd django-todo-app
```

### 2️⃣ Create & Activate Virtual Environment

**Windows**

```bash
python -m venv venv
venv\Scripts\activate
```

**Mac/Linux**

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3️⃣ Install Dependencies

```bash
pip install django
```

### 4️⃣ Apply Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 5️⃣ Create Superuser (optional - to access admin panel)

```bash
python manage.py createsuperuser
```

### 6️⃣ Run the Development Server

```bash
python manage.py runserver
```

Then open your browser and go to:

```
http://127.0.0.1:8000/
```

---

## 🛠 Usage

* Type a task into the input field and click **Add**
* Click **Complete** to mark a task as completed (line-through style)
* Click **Edit** to modify a task
* Click **Delete** to remove a task from the list

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

* Django Documentation: [https://docs.djangoproject.com/](https://docs.djangoproject.com/)
* Bootstrap Documentation: [https://getbootstrap.com/](https://getbootstrap.com/)

---

### 🎉 Made with ❤️ using Django and Bootstrap!

---

Do you want me to **generate a GitHub-ready version with badges and images** next?
