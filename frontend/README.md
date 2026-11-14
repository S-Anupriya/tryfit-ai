# TryFit AI – AI-Powered Virtual Fashion Try-On & Recommendation Platform

## 1. Project Overview

**TryFit AI** is an AI-powered fashion discovery and virtual try-on platform designed to make online shopping more personalized, convenient and interactive.

The platform aims to bring fashion products from multiple e-commerce platforms into one place, allowing users to explore clothing, compare products and visualize how selected outfits may look on them using Artificial Intelligence.

Instead of relying only on product images, users can upload their own photograph, select a clothing item and generate an AI-powered virtual try-on preview.

TryFit AI aims to bridge the gap between traditional online shopping and the in-store shopping experience.

## 2. Problem Statement

Online fashion shopping has several challenges:

- Customers cannot physically try on clothes before purchasing.
- It can be difficult to imagine how an outfit will look on an individual.
- Similar products are available across multiple shopping platforms.
- Comparing prices and product details across websites takes time.
- Customers may select unsuitable clothing sizes or styles.

TryFit AI aims to address these challenges through AI-powered virtual try-on, product discovery and personalized fashion recommendations.

## 3. Project Objectives

The main objectives of TryFit AI are:

1. To develop a centralized fashion discovery platform.
2. To integrate AI-powered virtual clothing try-on.
3. To provide personalized fashion recommendations.
4. To help users explore and compare products from different shopping platforms.
5. To provide a user-friendly and interactive shopping experience.
6. To reduce uncertainty when selecting clothing online.

## 4. Key Features

### 4.1 User Authentication
- User registration and login.
- Personalized user profiles.
- Secure account management.

### 4.2 Fashion Discovery
- Browse clothing products.
- Explore different fashion categories.
- Search and filter products.
- Sort products based on price and ratings.

### 4.3 AI Virtual Try-On
- Upload a personal photograph.
- Select a clothing product.
- Generate an AI-powered outfit preview.
- View the generated try-on result.

### 4.4 Product Comparison
- Explore similar products.
- Compare prices and product information.
- Access the original shopping platform through external product links.

### 4.5 AI Fashion Recommendations
- Personalized clothing suggestions.
- Recommendations based on user preferences.
- Assistance in discovering suitable fashion styles.

### 4.6 Wishlist
- Save favourite fashion products.
- Revisit selected products later.

## 5. Technology Stack

| Component | Technology |
|---|---|
| Frontend | React.js, TypeScript |
| Frontend Build Tool | Vite |
| Styling | CSS |
| Backend | Python, FastAPI |
| Database | MongoDB Atlas (planned) |
| AI Integration | FASHN Virtual Try-On (under evaluation) |
| API Communication | REST API |
| Version Control | Git and GitHub |
| Frontend Deployment | Vercel (planned) |
| Backend Deployment | Render (planned) |

## 6. System Architecture

TryFit AI follows a frontend-backend architecture.

**Frontend – React + TypeScript**

Handles the user interface, product discovery, image uploads, user interactions and presentation of AI-generated results.

**Backend – Python + FastAPI**

Handles API requests, image processing workflows, backend operations and communication with AI services.

**Database – MongoDB Atlas**

Planned for storing user information, fashion preferences, product details and wishlist data.

**AI Virtual Try-On Engine**

Processes the user's photograph and selected garment image to generate a virtual clothing preview.

### Basic Workflow

```text
             USER
               |
               v
       TRYFIT AI FRONTEND
        (React + TypeScript)
               |
       -------------------
       |        |        |
       v        v        v
    Explore   Profile  Virtual
    Products           Try-On
                         |
                         v
                  FASTAPI BACKEND
                         |
                         v
                  AI TRY-ON ENGINE
                         |
                         v
                  GENERATED IMAGE
                         |
                         v
                  DISPLAY RESULT
```

## 7. How the Platform Works

1. The user opens the TryFit AI platform.
2. The user signs in or creates an account.
3. The user explores available fashion products.
4. The user selects a clothing item.
5. The user uploads a suitable personal photograph.
6. The backend sends the required images to the AI virtual try-on service.
7. The AI model generates a virtual outfit preview.
8. The generated result is displayed to the user.
9. The user can explore other products and visit the original shopping website to purchase an item.

## 8. Project Structure

```text
tryfit-ai/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── README.md
└── .gitignore
```

*The structure above represents the main project organization; additional files and folders may be added during development.*

## 9. Installation and Setup

### Prerequisites

- Python 3.10 or later
- Node.js and npm
- Git
- Visual Studio Code

### Step 1: Clone the Repository

```bash
git clone https://github.com/S-Anupriya/tryfit-ai.git
cd tryfit-ai
```

### Step 2: Set Up the Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Create a `.env` file inside the backend directory and add the required environment variables.

Never upload API keys or secret credentials to GitHub.

Start the backend:

```bash
python3 -m uvicorn main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

API documentation:

```text
http://127.0.0.1:8000/docs
```

### Step 3: Set Up the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

## 10. Current Development Status

TryFit AI is under active development.

| Module | Status |
|---|---|
| React frontend | In development |
| Product Explore page | Prototype |
| User authentication | Under development |
| User profile | Under development |
| FastAPI backend | Initial setup completed |
| Image upload | Implemented in the try-on workflow |
| AI virtual try-on | Integration under evaluation |
| Product aggregation | Planned |
| MongoDB integration | Planned |
| Product recommendations | Planned |
| Wishlist | Planned |
| Deployment | Planned |

The product catalogue currently uses sample product data. Live e-commerce integrations and the final AI virtual try-on service are yet to be completed.

## 11. Future Enhancements

- Integrate a reliable AI virtual try-on model.
- Connect authorized product APIs and affiliate product feeds.
- Implement personalized AI fashion recommendations.
- Add advanced size recommendation features.
- Integrate price tracking and product alerts.
- Complete MongoDB database integration.
- Improve mobile responsiveness.
- Deploy the complete application to cloud hosting.

## 12. Advantages

- Makes online fashion discovery more interactive.
- Helps users visualize clothing before purchasing.
- Reduces the effort involved in comparing products.
- Provides a centralized fashion discovery experience.
- Combines web development with practical AI applications.

## 13. License

This project is developed for academic and educational purposes as a final-year BCA project.

Third-party libraries, AI models and services remain subject to their respective licenses and terms of use.

## 14. Developer

**Project Name:** TryFit AI  
**Project Type:** AI-Based Web Application  
**Domain:** Artificial Intelligence, Fashion Technology and Web Development  
**Frontend:** React + TypeScript  
**Backend:** Python + FastAPI  

**GitHub Repository:**  
https://github.com/S-Anupriya/tryfit-ai

---

*TryFit AI – Explore Fashion. Experience AI. Find Your Fit.*git add README.md
git add README.md
