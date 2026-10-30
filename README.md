# Join

Join is a collaborative task management application inspired by the Kanban methodology.

The application provides a central workspace for organizing tasks, managing contacts, tracking progress, and collaborating through a visual Kanban board.

This project was developed as a group project during my software development training.

## Features

### Authentication

- User registration with email and password
- User login and logout
- Guest login for testing the application
- Protected application areas for authenticated users
- Account deletion through a secure Supabase Edge Function

### Kanban Board

- Four task states:
  - To Do
  - In Progress
  - Awaiting Feedback
  - Done
- Create, edit, and delete tasks
- Move tasks between Kanban columns
- Search tasks by title or description
- Assign contacts to tasks
- Set task priorities
- Define due dates
- Organize tasks by category

### Subtasks

- Add subtasks to tasks
- Edit and delete subtasks
- Mark subtasks as completed
- Track task progress based on completed subtasks

### Contacts

- Create new contacts
- Edit existing contacts
- Delete contacts
- View contact details
- Alphabetically organized contact list
- Use contacts as task assignees

### Dashboard

The summary dashboard provides an overview of the current board, including task statistics and upcoming deadlines.

### Responsive Design

Join is designed for both desktop and mobile devices and adapts the Kanban board and application layout to smaller screen sizes.

## Technologies

- Angular
- TypeScript
- HTML
- SCSS / CSS
- Supabase
- Supabase Authentication
- Supabase Edge Functions
- Git / GitHub

## Project Structure

The application is organized into reusable Angular components and services with a clear separation between UI logic, application logic, and backend communication.

Supabase is used for persistent application data and authentication.

## Getting Started

### Prerequisites

Make sure Node.js and the Angular CLI are installed.

Install the project dependencies:

```bash
npm install
```

### Development Server

Start the local development server with:

```bash
ng serve
```

Then open:

```text
http://localhost:4200/
```

The application automatically reloads when source files are changed.

## Building

Create a production build with:

```bash
ng build
```

The generated build files are stored in the `dist/` directory.

## Supabase Account Deletion

Regular contacts are removed from `demoDB` directly.

A registered user can delete their own account only through the Supabase Edge Function because deleting an authentication user requires server-side privileges.

After applying:

```text
supabase/schema.sql
```

deploy the function to the Supabase project configured in:

```text
src/environments/environment.ts
```

using:

```bash
supabase functions deploy delete-contact --project-ref <project-ref>
```

Hosted Supabase functions provide `SUPABASE_URL` and `SUPABASE_SECRET_KEYS` as environment variables; the function uses the `default` secret key, which never leaves the function.

The deployed function only accepts an authenticated request to delete the requesting user's own linked account.

## Testing

Run the unit tests with:

```bash
ng test
```

The project uses Vitest as its unit test runner.

## Project Background

Join was created as a collaborative group project during my software development training.

The project focused on building a larger application as a team, working with Git and GitHub, implementing a responsive user interface, managing application data, and translating user stories and acceptance criteria into working software.

## Disclaimer

This project was created for educational purposes as part of my software development training.
