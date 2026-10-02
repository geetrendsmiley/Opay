# MyBank Demo

A simple HTML/CSS/JavaScript wallet dashboard inspired by the general layout of the supplied reference image.

## Demo login

- Phone: `07030528292`
- PIN: `123456`

## Files

```text
mybank/
├── index.html
├── dashboard.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── README.md
```

## Run locally

Open `index.html` in a browser, or use the VS Code Live Server extension.

## Deploy to Vercel

1. Create a GitHub repository, for example `mybank`.
2. Upload these files.
3. Import the repository into Vercel.
4. Framework preset: **Other**.
5. Build command: leave empty.
6. Output directory: leave empty.
7. Deploy.

## Important security note

This project is a **frontend demo**, not a real banking system. The phone number and PIN are visible in JavaScript, so they are not secure credentials. It does not connect to a bank, process money, or perform real transfers.

For a real app, authentication must be handled by a backend with password/PIN hashing, sessions or secure tokens, HTTPS, rate limiting, database access controls, audit logs, and proper financial/compliance controls.
