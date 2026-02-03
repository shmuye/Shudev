# Personal Portfolio

A concise personal portfolio for showcasing projects, skills, and contact details.

Live demo: https://shudev.vercel.app

---

## Features

- Responsive design
- Projects showcase
- Tech stack overview
- Contact form (backend API)
- Clean, modern UI

---

## Tech Stack

- Frontend: React, Vite, Tailwind CSS
- UI: Radix UI
- Backend: Node.js, Express
- Email: Resend (email service)

---

## Deployment

- Frontend: Vercel
- Backend: Render

---

## Project Structure

```txt
developer-portfolio/
├── backend/
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
└── README.md
```

---

## Getting Started (Local)

Prerequisites: Node.js (16+), npm or yarn

1. Clone the repository

```bash
git clone https://github.com/<your-username>/developer-portfolio.git
cd developer-portfolio
```

2. Install dependencies

```bash
# frontend
cd frontend
npm install

# in a separate terminal: backend
cd ../backend
npm install
```

3. Create environment files

- `backend/.env`

```env
RESEND_API_KEY=your_resend_api_key
PORT=3001
```

- `frontend/.env` (Vite)

```env
VITE_API_URL=http://localhost:3001/contact
```

4. Run the app

```bash
# start backend
cd backend
npm start

# start frontend (in another terminal)
cd ../frontend
npm run dev
```

Open the frontend at the Vite dev URL (typically http://localhost:5173).

---

## Contributing

Create an issue or PR for improvements or bug fixes.

---

## License

This project is provided as-is. Add a license file if needed.

---

## Contact

Email: add your contact email here
