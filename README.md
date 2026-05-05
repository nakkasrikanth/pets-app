# 🐾 Pet Gallery

A modern React application for browsing, searching, and downloading pet images.

## Features

- **Image Gallery**: Responsive grid displaying pet images (1 col mobile, 2 col tablet, 4 col desktop)
- **Multi-Select**: Select multiple images with selection persistence across routes
- **Bulk Download**: Download multiple selected images with estimated file size preview
- **Search**: Filter pets by title or description in real-time
- **Sorting**: Sort by name (A-Z, Z-A) or date (newest, oldest)
- **Pagination**: Navigate through pages of pets
- **Detail View**: Click any pet to see full details at `/pets/:id`
- **About Page**: Application information and usage guide

## Tech Stack

- **React 19** with functional components and hooks
- **TypeScript** for type safety
- **React Router v6** for client-side routing
- **styled-components** for CSS-in-JS styling
- **Redux Toolkit** for global state management
- **Axios** for API calls with interceptors
- **Custom Hooks** for data fetching with loading/error/empty states

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Running the App

```bash
# Run both React app and mock API server
npm run dev
```

This starts:
- React app on http://localhost:3000
- JSON Server (mock API) on http://localhost:3001

Alternatively, run them separately:

```bash
# Terminal 1: Start mock API server
npm run server

# Terminal 2: Start React app
npm start
```

## Project Structure

```
src/
├── components/              # React components
│   ├── About/              # About page
│   ├── Layout/             # App layout with header
│   ├── PetCard/            # Individual pet card
│   ├── PetDetail/          # Pet detail page
│   └── PetGallery/         # Main gallery with search/sort/pagination
├── repository/              # API layer
│   ├── api/                # API service modules
│   │   └── petApi.ts       # Pet API endpoints
│   └── axiosInstance.ts    # Axios configuration with interceptors
├── state-management/        # Redux state management
│   ├── hooks/              # Custom Redux hooks
│   │   ├── useAppStore.ts  # Typed dispatch/selector hooks
│   │   ├── usePets.ts      # Pet data hook
│   │   └── useSelection.ts # Selection hook
│   ├── slices/             # Redux slices
│   │   ├── petSlice.ts     # Pet state & async thunks
│   │   └── selectionSlice.ts # Selection state
│   └── store.ts            # Redux store configuration
├── styles/                  # styled-components
│   └── StyledComponents.ts # All styled components
├── types/                   # TypeScript interfaces
│   └── Pet.ts              # Pet and related types
└── App.tsx                  # Main app with routing
```

## API Endpoints

The mock API (json-server) provides:

- `GET /pets` - Fetch all pets

## Repository Layer (Axios)

API calls are made through the repository layer using Axios:

```typescript
import { petApi } from './repository';

// Fetch all pets
const pets = await petApi.getAll();

// Fetch single pet
const pet = await petApi.getById('1');
```

The `axiosInstance` includes:
- Request interceptors for auth tokens
- Response interceptors for error handling
- Configurable base URL and timeout

## Custom Hooks (Redux)

The `usePets` hook provides pets data with filtering, sorting, and pagination:

```typescript
const {
  pets,              // All pets
  paginatedPets,     // Current page pets
  isLoading,
  error,
  searchQuery,
  sortOption,
  currentPage,
  totalPages,
  setSearchQuery,    // Action
  setSortOption,     // Action
  setCurrentPage,    // Action
  refetch,
} = usePets();
```

The `useSelection` hook manages selection state:

```typescript
const {
  selectedCount,
  formattedTotalSize,
  isSelected,        // Check if pet is selected
  toggleSelection,   // Toggle pet selection
  selectAll,         // Select all pets
  clearSelection,    // Clear all
  downloadSelected,  // Download selected pets
} = useSelection();
```

## State Management (Redux Toolkit)

State is managed via Redux Toolkit with:
- **petSlice**: Handles pet data, loading states, search/sort/pagination
- **selectionSlice**: Handles selection state that persists across routes

```typescript
// Store structure
{
  pets: {
    pets: Pet[],
    isLoading: boolean,
    error: string | null,
    searchQuery: string,
    sortOption: SortOption,
    currentPage: number,
    pageSize: number,
  },
  selection: {
    selectedPets: Record<string, number>,
    selectedCount: number,
    estimatedTotalSize: number,
    formattedTotalSize: string,
  }
}
```

## Usage

1. **Browse**: Scroll through the gallery, use pagination to see more
2. **Search**: Type in the search bar to filter by title/description
3. **Sort**: Use the dropdown to change sort order
4. **Select**: Click checkboxes to select pets for download
5. **Download**: Use the floating action bar to download selected images
6. **View Details**: Click a pet card to see detailed information

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run app + mock server |
| `npm start` | Run React app only |
| `npm run server` | Run mock API only |
| `npm run build` | Build for production |
| `npm test` | Run tests |

## License

MIT
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
