InfoHub
A modern, community-driven discussion platform built with Next.js. Create threads, reply, search, track activity, and manage profiles with a polished, dark-themed UI.

Demo
Local: http://localhost:3000
<img width="1170" height="796" alt="Screenshot 2025-08-23 at 7 29 21 PM" src="https://github.com/user-attachments/assets/3a179251-3e75-44a3-b5e8-f120ebbfa670" />
<img width="1176" height="788" alt="Screenshot 2025-08-23 at 7 29 38 PM" src="https://github.com/user-attachments/assets/c4b10a92-22fa-48ea-9b4e-bc27a5a9d526" />

<img width="1166" height="786" alt="Screenshot 2025-08-23 at 7 29 47 PM" src="https://github.com/user-attachments/assets/fed8d59a-589b-4014-b9cf-a25e925d5c43" />
<img width="1173" height="780" alt="Screenshot 2025-08-23 at 7 29 57 PM" src="https://github.com/user-attachments/assets/07552116-923e-4612-a069-82bd207e3351" />




Screens
Home feed with threads and replies

Search across threads and users

Activity notifications (mentions, replies)

Create Thread flow

Communities listing and detail

User Profile with Threads, Replies, Tagged

Tech Stack
Next.js (App Router)

TypeScript

React

Styling: CSS/modern utility classes

Font optimization: next/font (Inter)

Getting Started
Install dependencies

npm install

Run dev server

npm run dev

or: yarn dev / pnpm dev / bun dev

Open in browser

http://localhost:3000

Hot reload is enabled. Edit app/page.tsx and other files to see live updates.

Project Structure
app/ — Next.js App Router pages, layouts, routes

components/ — Reusable UI components

lib/ — Helpers, utilities

public/ — Static assets

styles/ — Global styles

Note: Exact folders may vary as the project evolves.

Environment Variables
If the app integrates with databases or auth providers, create a .env.local at the project root. Example placeholders:

NEXT_PUBLIC_APP_URL=

AUTH_SECRET=

DATABASE_URL=

Do not commit secrets. Add .env.local to .gitignore.

Scripts
dev: Start dev server

build: Production build

start: Run production server

lint: Lint codebase

Deployment
The simplest path is Vercel:

Push to GitHub

Import the repo in Vercel

Configure environment variables

Deploy

Contributing
Fork the repo

Create a feature branch

Commit changes with clear messages

Open a pull request with a concise description

