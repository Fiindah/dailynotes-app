# 🖥️ DailyNotes Frontend  
Frontend aplikasi DailyNotes dibangun menggunakan **Next.js** dan **TailwindCSS**, dengan colorful.

---

## ✨ Features
- Dashboard Notes
- Create New Note
- Edit Note
- Delete Note
- Search Notes
- Responsive UI
- Style layout (colorful cards)

---

## 🛠 Tech Stack
- Next.js 14 (App Router)
- TailwindCSS
- React Hooks
- Fetch API

---

## 📂 Project Structure
````

frontend/
│── app/
│   ├── notes/
│   │   ├── page.js
│   │   ├── create/page.js
│   │   └── [id]/page.js
│── components/
│── public/
└── README.md
```

---

## ⚙️ Installation

### 1. Install Dependencies
```
npm install
```

### 2. Run Development Server
```
npm run dev

```

Frontend akan berjalan di:
```
[http://localhost:3000](http://localhost:3000)

```

---
## 🔗 API Base URL
Atur di file `.env.local`:

```
NEXT_PUBLIC_API_URL=[http://localhost:5000/api](http://localhost:5000/api)

```

---

## 📌 Pages

| Path               | Description        |
|-------------------|--------------------|
| /notes            | List All Notes     |
| /notes/create     | Create Note        |
| /notes/[id]       | Detail Note        |

---

## 🎨 UI Showcase
- Grid layout  
- Colorful notes  
- Delete modal  

---

## Developer
Built with ❤️ for portfolio & study.
```
---