# 📝 DailyNotes Backend  
Backend REST API untuk aplikasi DailyNotes, dibuat menggunakan **Node.js, Express, PostgreSQL, dan Sequelize**.

## 🚀 Features
- Create Note
- Get All Notes
- Get Detail Note by ID
- Update Note
- Delete Note
- Search Notes
- JSON formatted response

---

## 📦 Tech Stack
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- dotenv
- CORS

---

## 📁 Project Structure
```
backend/
│── controllers/
│── models/
│── routes/
│── config/
│── index.js
└── README.md

```

---

## ⚙️ Installation

### 1. Install Dependencies
```
npm install

```

### 2. Setup Environment Variables

Buat file **.env**
```
DB_NAME=dailynotes_db
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=127.0.0.1
PORT=5000

```

---

## 🗄️ Database Migration / Sync
Pastikan PostgreSQL berjalan, lalu:

```
npm run dev
```
Sequelize akan otomatis membuat tabel.

---

## ▶️ Running the Server
```
npm run dev

```
Server berjalan di:
```
[http://localhost:4000](http://localhost:4000)

````
---

## 📌 API Endpoints

| Method | Endpoint         | Description        |
|--------|------------------|--------------------|
| GET    | /api/notes       | Get all notes      |
| POST   | /api/notes       | Create note        |
| GET    | /api/notes/:id   | Detail note        |
| PUT    | /api/notes/:id   | Update note        |
| DELETE | /api/notes/:id   | Delete note        |

---

## 🧪 Example Create Note (JSON)
```json
{
  "title": "Belajar Programming",
  "body": "Belajar Fullstack Javascript",
  "color": "#ffeb3b"
}
````
---

## Developer
Built with ❤️ for portfolio & study.
---
