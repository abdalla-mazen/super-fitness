# 💪 Super Fitness

A modern, responsive fitness and nutrition web application built with **React, TypeScript, and Vite**.

Super Fitness provides users with an integrated platform to explore workouts and meals, manage their accounts, complete a personalized onboarding process, and interact with an AI-powered fitness assistant.

The application was developed with a focus on **scalable frontend architecture, reusable components, type safety, responsive design, authentication, API integration, and multilingual support**.

## 🌐 Live Demo

🚀 [**Try Super Fitness**](https://super-fitness-plum.vercel.app/)

---

## ✨ Features

### 🔐 Authentication & Account Management

- User registration and login
- Protected routes
- Forgot password flow
- Password reset and verification
- Change password
- Profile management
- Token-based authentication using Axios interceptors

### 🎯 Personalized Onboarding

A multi-step onboarding flow collects user information such as:

- Gender
- Age
- Weight
- Height
- Fitness goals
- Activity level

The collected information is used to provide a more personalized fitness experience.

### 🥗 Meals & Nutrition

- Browse meal categories
- Filter meals by category
- View detailed meal information
- Display ingredients and preparation instructions
- Integrated with **TheMealDB API**

### 🏋️ Workouts

- Browse available workouts
- Explore exercises by muscle group
- View workout-related information
- Integrated with the fitness backend API

### 🤖 AI Fitness Assistant

An integrated AI chat assistant allows users to ask fitness-related questions and receive AI-generated responses.

The AI functionality is powered through **OpenRouter**.

### 🌍 Multilingual Experience

The application supports:

- 🇬🇧 English
- 🇪🇬 Arabic

It also supports both:

- LTR (Left-to-Right)
- RTL (Right-to-Left)

layouts.

### 🎨 Theme System

Users can switch between:

- Light mode
- Dark mode
- System preference

### 📱 Responsive Design

The interface is designed to work across:

- Desktop
- Tablet
- Mobile

using a responsive component-based UI architecture.

---

## 🛠️ Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- React Router

### Styling & UI

- Tailwind CSS
- Radix UI
- Shadcn/ui-inspired components
- Lucide React

### State & Data Fetching

- TanStack Query
- React Context API

### Forms & Validation

- React Hook Form
- Zod

### API & Networking

- Axios
- Axios Interceptors
- Fetch API
- REST APIs

### Internationalization

- i18next
- react-i18next

### AI

- OpenRouter API

### Development Tools

- ESLint
- Git
- GitHub

---

## 🏗️ Architecture

The project follows a **feature-oriented and route-based frontend architecture** designed to keep the codebase maintainable and scalable.

```text
src/
├── app/
│   ├── (account)/
│   ├── (auth)/
│   ├── about/
│   ├── homepage/
│   ├── meals/
│   ├── workouts/
│   ├── App.tsx
│   └── layout.tsx
│
├── components/
│   ├── layout/
│   ├── providers/
│   ├── shared/
│   └── ui/
│
├── lib/
│   ├── apis/
│   ├── constants/
│   ├── schemas/
│   ├── types/
│   └── utils/
│
├── hooks/
│
├── axiosConfig.ts
├── i18n.ts
├── main.tsx
└── index.css

locales/
├── ar/
└── en/
```

### Architecture Principles

The application separates responsibilities between:

- **Pages & Routes** → application features and user flows
- **Components** → reusable UI elements
- **Providers** → global application state
- **API Layer** → backend communication
- **Hooks** → reusable application logic
- **Schemas** → form validation
- **Types** → shared TypeScript definitions
- **Locales** → multilingual translations

This structure makes the application easier to maintain and extend as new features are introduced.

---

## 🔌 API Integration

Super Fitness communicates with multiple external and internal services.

### Fitness Backend

The internal fitness API handles:

- Authentication
- User data
- Onboarding
- Muscles
- Workouts
- Account-related operations

Authenticated requests automatically attach the bearer token through an Axios interceptor:

```
Authorization: Bearer <token>
```

### TheMealDB

Used for meal and nutrition data.

- Public API
- No authentication required
- Meal categories
- Meals filtered by category
- Meal details
- Ingredients and preparation instructions

### OpenRouter

Powers the AI Fitness Assistant.

---

## 🔒 Authentication Flow

The application uses token-based authentication managed through Axios interceptors.

### Flow

1. User signs up or signs in through the authentication API.
2. On success, an access token is returned and stored client-side.
3. An Axios request interceptor automatically attaches the token to authenticated API requests.
4. An Axios response interceptor handles 401 Unauthorized responses and session expiration.
5. Protected routes check authentication state before rendering account-specific pages.
6. Unauthenticated users are redirected to the sign-in page.

### Logout

Logout clears the stored authentication token and resets the authentication state, preventing access to protected routes.

---

## 📋 Form Validation

Forms are implemented using:

- React Hook Form
- Zod

This provides:

- Type-safe form values
- Centralized validation rules
- Client-side validation
- Reusable validation schemas
- Efficient form handling

### Validation Flow

```
User Input
    ↓
React Hook Form
    ↓
Zod Schema
    ↓
Validation
    ↓
API Request
```

---

## ⚡ Data Fetching & State Management

The application uses TanStack Query for server-state management.

It handles:

- API requests
- Caching
- Loading states
- Error states
- Mutations
- Query invalidation

Global UI and application state is handled through React Context API, including areas such as:

- Theme
- Onboarding state

This separation keeps server state and client/global state independent.

---

## 🌐 Internationalization

Internationalization is implemented using:

- i18next
- react-i18next

Translation resources are organized by language:

```
locales/
├── ar/
└── en/
```

The UI dynamically adapts to the selected language and supports RTL layouts for Arabic.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- Node.js 18+
- npm or Yarn
- Git

### Installation

```bash
git clone https://github.com/abdalla-mazen/super-fitness.git
cd super-fitness
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and create a production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build |

---

## 🌍 Deployment

Super Fitness is a Vite Single Page Application and can be deployed to platforms such as:

- Vercel
- Netlify
- Other static hosting platforms

For SPA routing, the hosting provider must redirect unknown routes to `index.html`.

A Netlify redirect configuration is included in the project.

---

## 🧩 Key Engineering Highlights

- Component-based, feature-oriented frontend architecture
- Type-safe development with TypeScript
- Token-based authentication with Axios interceptors
- Centralized API communication
- Server-state management with TanStack Query
- Schema-based form validation with React Hook Form and Zod
- Internationalization with Arabic/English support
- RTL/LTR layout support
- Light/Dark/System theme support
- Responsive design across desktop, tablet, and mobile
- Integration with REST APIs and third-party services
- AI-powered fitness assistant

---

## 📄 License

No specific open-source license is currently declared for this project.

<div align="center">

💪 **Super Fitness**

A modern fitness experience built with React, TypeScript & Vite.

🚀 [Live Demo](https://super-fitness-plum.vercel.app/)

</div>
