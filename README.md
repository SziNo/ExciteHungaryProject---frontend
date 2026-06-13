# Leave Calendar — Frontend

A team leave management and on-call rotation tracker built with React, TypeScript, Tailwind CSS, and TanStack Query.

**Live demo:** [https://excite-hungary-project-frontend.vercel.app](https://excite-hungary-project-frontend.vercel.app)

**Backend repository:** [https://github.com/SziNo/ExciteHungaryProject---backend](https://github.com/SziNo/ExciteHungaryProject---backend)

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite**
- **Tailwind CSS**
- **TanStack Query** (React Query) — server state management
- **Axios** — HTTP client
- **React Router** — client-side routing
- **date-fns** — date formatting and week calculation

For backend tech stack details, see the [backend repository](https://github.com/SziNo/ExciteHungaryProject---backend).

---

## Local Setup

### Prerequisites

- Node.js 18+
- Backend running on `http://localhost:8080` (see backend repo for setup)

### Steps

```bash
git clone <this-repo-url>
cd frontend
npm install
```

Create a `.env.local` file in the `frontend/` root:

```
VITE_API_URL=http://localhost:8080
```

Then start the dev server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Usage

### Leave Requests page

- **Create a leave request** — select a team member, pick a start and end date, add a reason, and hit Submit
- **Approve or Reject** pending requests using the buttons on each card
- **Filter** the list by team member or status (Pending / Approved / Rejected)
- Submitting overlapping dates for the same person will show an error

### On-Call Schedule page

- Shows the weekly on-call rotation for Alice, Bob, Charlie, and Diana
- Weeks where the on-call person has an approved leave are **highlighted in red** as a conflict
- The rotation repeats every 4 weeks

---

## Assumptions

- No authentication or user registration is required
- Team members are fixed: Alice, Bob, Charlie, Diana
- On-call rotation is calculated from a fixed epoch date and repeats in order
- Overlapping leave requests are blocked unless the existing one is Rejected
