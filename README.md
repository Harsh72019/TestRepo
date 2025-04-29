
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
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

Or [download the ZIP](https://github.com/your-username/your-repo-name/archive/refs/heads/main.zip) and extract it.

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


