# Realtime Chat App - Project Structure

```
realtime_chat/
├── BE/                          # Backend (Node.js/Express)
│   └── src/
│       ├── models/              # Mongoose Schemas (User, Message, Conversation, Friend, FriendRequest)
│       ├── controllers/         # Logic xử lý (auth, message, conversation, friend, user)
│       ├── routes/              # Định nghĩa API endpoints
│       ├── middlewares/         # Auth & Socket middleware
│       ├── socket/              # Socket.io setup & real-time events
│       ├── libs/                # Config (db, socket, cloudinary)
│       ├── utils/               # Helper functions (messageHelper)
│       └── server.js            # Entry point
│
├── FE/                          # Frontend (React/Vite)
    └── src/
        ├── components/          # Các UI component tái sử dụng
        │   ├── auth/            # Login, Signup forms
        │   ├── Chat/            # Chat interface components
        │   ├── sidebar/         # Sidebar navigation
        │   ├── friendRequest/   # Friend request dialogs
        │   ├── createNewChat/   # Create chat modals
        │   ├── profile/         # User profile
        │   └── ui/              # UI primitives
        │
        ├── pages/               # Các trang chính (Login, Home)
        ├── services/            # API calls (auth, chat, friend, user)
        ├── stores/              # Zustand state management
        │   ├── useAuthStore.ts
        │   ├── useChatStore.ts
        │   ├── useFriendStore.ts
        │   ├── useSocketStore.ts
        │   ├── useThemeStore.ts
        │   └── useUserStore.ts
        ├── types/               # TypeScript type definitions
        ├── hooks/               # Custom React hooks
        ├── lib/                 # Axios & Utils
        └── main.tsx             # Entry point
```

## Phần chính

### Backend (BE)
- **models/**: Định nghĩa schema database (MongoDB + Mongoose)
- **controllers/**: Logic xử lý request - auth, messaging, conversation, friends
- **routes/**: Map API endpoints
- **middlewares/**: JWT auth verification, Socket authentication
- **socket/**: Real-time events setup (online users, new messages, etc.)
- **libs/**: Configuration cho database, Socket.io, Cloudinary
- **server.js**: Express server setup, middleware registration

### Frontend (FE)
- **components/**: Reusable React components (forms, chat UI, modals)
- **pages/**: Trang chính của ứng dụng
- **stores/**: Zustand stores quản lý state (auth, chat, socket, etc.)
- **services/**: Axios API calls tới backend
- **types/**: TypeScript interfaces & types
- **hooks/**: Custom React hooks
- **lib/**: Axios instance, utility functions
