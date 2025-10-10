# BookTracker - Personal Book Collection Manager

![BookTracker Screenshot](//booktracker/images/Screenshot1.png)

A simple and elegant Django web application to manage your personal book collection. Track your reading progress, add new books, and organize your literary journey.

## Features

- 📚 **Add Books** - Quickly add new books to your collection
- ✏️ **Edit Details** - Update book information anytime
- 🗑️ **Delete Books** - Remove books from your collection
- 📊 **Track Progress** - Mark books as Unread, Currently Reading, or Read
- 🎨 **Clean Interface** - Beautiful, responsive design
- 💾 **Persistent Storage** - Your data is safely stored in the database

## Screenshots

### Main Book Collection View
![Main Collection](booktracker/images/Screenshot1.png)

### Add/Edit Book Form
![Add Book Form](booktracker/images/Screenshot2.png)

## Technology Stack

- **Backend**: Django 4.x
- **Frontend**: HTML5, CSS3
- **Database**: SQLite (default)
- **Styling**: Custom CSS

## Installation & Setup

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Step-by-Step Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd booktracker
   ```

2. **Create and activate virtual environment**
   ```bash
   # On Windows
   python -m venv venv
   venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install django
   ```

4. **Run migrations**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create superuser (optional, for admin access)**
   ```bash
   python manage.py createsuperuser
   ```

6. **Run the development server**
   ```bash
   python manage.py runserver
   ```

7. **Access the application**
   - Main application: http://127.0.0.1:8000/
   - Admin panel: http://127.0.0.1:8000/admin/

## Project Structure

```
booktracker/
├── booktracker/          # Project settings
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── library/              # Main application
│   ├── migrations/       # Database migrations
│   ├── templates/        # HTML templates
│   │   └── library/
│   │       ├── base.html
│   │       ├── book_list.html
│   │       ├── book_form.html
│   │       └── book_confirm_delete.html
│   ├── __init__.py
│   ├── admin.py
│   ├── forms.py
│   ├── models.py
│   ├── urls.py
│   └── views.py
├── manage.py
└── README.md
```

## Usage Guide

### Adding a Book
1. Click the "Add New Book" button on the main page
2. Fill in the book details:
   - Title (required)
   - Author (required)
   - ISBN (optional)
   - Reading status (Unread, Currently Reading, or Read)
3. Click "Save" to add to your collection

### Managing Books
- **View**: All books are displayed on the main page with their current status
- **Edit**: Click the "Edit" button on any book card to modify its details
- **Delete**: Click the "Delete" button and confirm to remove a book

### Reading Status
- 🔴 **Unread** - Books you plan to read
- 🟡 **Currently Reading** - Books you're currently reading
- 🟢 **Read** - Books you've finished reading

## Models

The application uses a single model:

### Book Model
- `title` - Book title (CharField)
- `author` - Author name (CharField)
- `isbn` - International Standard Book Number (CharField, optional)
- `status` - Reading status with choices: unread/reading/read
- `date_added` - Automatic timestamp when book is added

## API Endpoints

| URL Pattern | View | Description |
|-------------|------|-------------|
| `/` | `book_list` | Display all books |
| `/add/` | `add_book` | Add a new book |
| `/edit/<book_id>/` | `edit_book` | Edit existing book |
| `/delete/<book_id>/` | `delete_book` | Delete a book |

## Customization

### Adding New Book Status
Edit `library/models.py` to modify the `STATUS_CHOICES`:

```python
STATUS_CHOICES = [
    ('unread', 'Unread'),
    ('reading', 'Currently Reading'),
    ('read', 'Read'),
    # Add new status here
    ('wishlist', 'Wishlist'),
]
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Acknowledgments

- Built with Django web framework
- Inspired by book lovers and readers worldwide
- Icons and design elements from modern web standards

---

**Happy Reading!** 
