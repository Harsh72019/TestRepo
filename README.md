
# 🚀 My Backend API Server

A performant Node.js + Express backend API with MongoDB and Redis integration. It supports dynamic filtering, caching, validation, and follows a modular folder structure.

---

## 🛠️ Getting Started

Follow these steps to set up and run the project locally.

---

### 📦 Prerequisites

Make sure the following are installed on your machine:

- **Node.js** (v16+ recommended)
- **MongoDB**
- **Redis**

---

### ⬇️ Clone the Repository

```bash
git clone https://github.com/Harsh72019/TestRepo.git
cd TestRepo
```

Or [download the ZIP](https://github.com/Harsh72019/TestRepo/archive/refs/heads/main.zip) and extract it.

---

### 📥 Install Dependencies

```bash
npm install
```

---

### 🧠 Start Redis Server

Depending on your operating system:

#### Ubuntu / Debian

```bash
sudo apt update
sudo apt install redis
redis-server
```

#### macOS (Homebrew)

```bash
brew install redis
redis-server
```

#### Windows (Chocolatey)

```bash
choco install redis-64
redis-server
```

---

### 🛢️ Start MongoDB Daemon

If MongoDB isn't running as a service, start it manually:

```bash
mongod
```

---

### 🔄 Run the Server (Development)

```bash
npm run dev
```

The server will start on the configured port (default: `3001`).

Link for local : `http://localhost:3001/`

Have also deployed the backend live on render ,database mongoDB atlas and redis on redis-lab - `https://testrepo-0a6g.onrender.com` 
NOTE - My live version is free tier so the responses might be delayed

You can acccess the swagger dcoumentation on `http://localhost:3001/api-docs`

---

## 📂 Project Structure

```
src/
├── config/          # Configuration (e.g. Redis, DB)
├── controllers/     # Route handlers
├── middlewares/     # Express middlewares
├── models/          # Mongoose models
├── repositories/    # Data access logic
├── routes/          # API route definitions
├── services/        # Business logic
├── utils/           # Utility functions
├── validators/      # Request validation schemas
```

---

## ✅ Features

- RESTful API architecture
- Redis-based caching
- MongoDB via Mongoose
- Request validation with Joi
- Modular and scalable structure
- Swagger API documentation

---


