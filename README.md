# Fast React Pizza

Fast React Pizza is a React pizza-ordering application. Browse the menu, add
pizzas to a Redux-powered cart, place an order, and look up an existing order
by its order number.

## Features

- Browse the pizza menu and see sold-out items
- Add pizzas to the cart and adjust quantities
- Create an order with customer and delivery details
- Choose priority delivery when placing an order
- Search for an order by its ID
- Update an existing order's priority
- Responsive interface styled with Tailwind CSS

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) for development and production builds
- [React Router](https://reactrouter.com/) for navigation and data loading
- [Redux Toolkit](https://redux-toolkit.js.org/) and React Redux for state management
- [Tailwind CSS](https://tailwindcss.com/) 4
- A remote Fast Pizza API for menu and order data

## Getting started

### Prerequisites

- Node.js 20.19 or newer (or Node.js 22.12 or newer)
- pnpm, npm, or another Node.js package manager

### Installation

Clone the repository, move into the project directory, and install the
dependencies:

```bash
git clone https://github.com/Abanou6Nassif/fast-react-pizza.git
cd fast-react-pizza
pnpm install
```

If you use npm, replace `pnpm install` with `npm install`.

### Start the development server

```bash
pnpm dev
```

Open the local URL shown by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Vite development server |
| `pnpm build` | Create a production build |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run ESLint |

With npm, use `npm run <script>` instead, for example `npm run dev`.

## Project structure

```text
src/
├── features/
│   ├── cart/       # Cart state and cart UI
│   ├── menu/       # Menu loading and pizza items
│   ├── order/      # Checkout, order lookup, and priority updates
│   └── user/       # Customer information and username
├── services/       # Remote API helpers
├── ui/              # Shared layout and UI components
├── App.jsx         # Application routes
└── main.jsx        # React and Redux entry point
```

The app uses the public Fast Pizza API at
`https://react-fast-pizza-api.jonas.io/api` for menu and order operations, so
the development server needs network access for the full ordering flow.
