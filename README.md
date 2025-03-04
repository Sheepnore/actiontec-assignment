A modern React application built with Vite, featuring a clean and efficient development environment.

Visit <https://actiontec-assignment.vercel.app> to see live demo

**Modern Tech Stack**

- React 19 with latest features
- Vite for fast development and building
- Material-UI
- TailwindCSS

**Project Structure**

- Organized directory structure:
  - `/src/assets` - Static assets
  - `/src/auth` - Authentication related components
  - `/src/data` - Data management
  - `/src/ui` - UI components

## Setup Instructions

1. **Prerequisites**

   - Node.js (latest LTS version recommended)
   - npm

2. **Installation**

   ```bash
   # Clone the repository
   git clone [repository-url]

   # Navigate to project directory
   cd actiontec-assignment

   # Install dependencies
   npm install
   ```

3. **Running the Application**

   ```bash
   # Start development server
   npm run dev

   # Build for production
   npm run build

   # Preview production build
   npm run preview
   ```

## Features

- **Posts Management**

  - View paginated list of posts from JSONPlaceholder API
  - View detailed post information
  - Refresh functionality to update posts data
  - Comments section for each post
  - Pagination support (10 posts per page)

- **User Features**

  - User authentication simulation with environment variables
  - User-specific actions (e.g., comment management)
  - View post authors and their usernames
  - Delete comments functionality for authenticated users

## Environment Variables

The project uses environment variables to simulate login authentication. Create a `.env` file in the root directory and a variable named `VITE_USER_ID`. For demo purpose, create `VITE_USER_ID=1`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality checks
