# First Responder App

A comprehensive emergency dispatch and incident management system for first responders including police, fire, and medical personnel.

## Features

- **Real-time Emergency Dispatch**: Centralized 911 call management and dispatcher interface
- **Responder Tracking**: GPS-based location tracking and status updates for all field units
- **Incident Management**: Create, update, and track incidents from dispatch to resolution
- **Communication Hub**: Integrated messaging system for responders and dispatch
- **Resource Allocation**: Intelligent dispatch algorithm to route units based on availability and proximity
- **Incident Reports**: Digital reporting system with photo/document attachment support
- **Analytics Dashboard**: Performance metrics, response times, and incident statistics
- **Mobile Responsive**: Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Styling
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Leaflet/Mapbox** - Real-time mapping
- **Socket.io Client** - Real-time communication

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type-safe backend
- **PostgreSQL** - Primary database
- **Redis** - Caching and real-time features
- **Socket.io** - WebSocket communication
- **JWT** - Authentication

### DevOps & Tools
- **Docker** - Containerization
- **Docker Compose** - Local development
- **ESLint & Prettier** - Code quality
- **Jest** - Testing framework
- **GitHub Actions** - CI/CD

## Project Structure

```
first-responder-app/
├── frontend/               # React application
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Redux configuration
│   │   ├── services/      # API & services
│   │   ├── types/         # TypeScript types
│   │   ├── utils/         # Utility functions
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
├── backend/                # Express API
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Business logic
│   │   ├── models/        # Database models
│   │   ├── middleware/    # Express middleware
│   │   ├── services/      # Business services
│   │   ├── types/         # TypeScript types
│   │   ├── utils/         # Utility functions
│   │   ├── app.ts
│   │   └── server.ts
│   ├── migrations/        # Database migrations
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml      # Local development setup
├── .github/
│   └── workflows/         # CI/CD workflows
├── .gitignore
└── .env.example
```

## Getting Started

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL 14+
- Redis 7+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LetsMakeMoney85/first-responder-app.git
   cd first-responder-app
   ```

2. **Start services with Docker Compose**
   ```bash
   docker-compose up -d
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   npm run migrate
   npm run seed
   ```

4. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Start development servers**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Frontend
   cd frontend
   npm start
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - Database: localhost:5432
   - Redis: localhost:6379

## Development Workflow

### Code Style
- Follow ESLint rules
- Format code with Prettier
- Use TypeScript for type safety

### Running Tests
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd ../frontend
npm test
```

### Building for Production
```bash
# Backend
cd backend
npm run build

# Frontend
cd ../frontend
npm run build
```

## API Documentation

API documentation is available at `/api/docs` when running the backend server.

## Database Schema

See `backend/migrations/` for database schema definitions.

## Contributing

1. Create a feature branch from `dev`
2. Make your changes
3. Submit a Pull Request
4. Code review and CI/CD checks required

## License

MIT

## Support

For issues and questions, please open a GitHub issue.
