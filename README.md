InfoHub
A modern, community-driven discussion platform built with Next.js. Create threads, reply, search, track activity, and manage profiles with a polished, dark-themed UI.

Demo
Local: http://localhost:3000


<img width="1005" height="600" alt="Screenshot 2026-04-06 at 7 02 31 PM" src="https://github.com/user-attachments/assets/21965657-135e-4473-b2d3-d3e2a675db4d" />

<img width="1029" height="590" alt="Screenshot 2026-04-06 at 7 02 58 PM" src="https://github.com/user-attachments/assets/310bd5c3-c8a2-4ce3-b7a7-b585505f3388" />
<img width="1038" height="599" alt="Screenshot 2026-04-06 at 7 03 08 PM" src="https://github.com/user-attachments/assets/d252a980-8eff-4dd3-89ca-918c51ea568c" />

Screens<img width="1048" height="593" alt="Screenshot 2026-04-06 at 7 03 17 PM" src="https://github.com/user-attachments/assets/0b0465ad-987a-4481-85e4-99797f326b9f" />

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

