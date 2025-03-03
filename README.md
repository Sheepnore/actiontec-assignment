## Setup Instructions

Visit <https://actiontec-assignment.vercel.app> to see live demo

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

- **Modern Tech Stack**

  - React 19
  - Vite for fast development and building
  - Material-UI components
  - TailwindCSS

- **Project Structure**
  - Organized directory structure:
    - `/src/assets` - Static assets
    - `/src/auth` - Authentication related components
    - `/src/data` - Data management
    - `/src/ui` - UI components

## Environment Variables

The project uses environment variables to simulate login authentication. Create a `.env` file in the root directory and a variable named `VITE_USER_ID`. For demo purpose, create `VITE_USER_ID=1`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality checks
