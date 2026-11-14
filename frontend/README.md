# TryFit AI – AI-Powered Virtual Fashion Try-On & Recommendation Platform

## 1. Project Overview

**TryFit AI** is an AI-powered fashion discovery and virtual try-on platform designed to make online shopping more personalized, convenient and interactive.

The platform aims to bring fashion products from multiple e-commerce platforms into one place, allowing users to explore clothing, compare products and visualize how selected outfits may look on them using Artificial Intelligence.

Users can upload their photographs, select clothing items and generate AI-powered virtual try-on previews.

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

1. Develop a centralized fashion discovery platform.
2. Integrate AI-powered virtual clothing try-on.
3. Provide personalized fashion recommendations.
4. Help users explore and compare products.
5. Create a user-friendly online shopping experience.
6. Reduce uncertainty when selecting clothing online.

## 4. Key Features

### 4.1 User Authentication
- User registration and login.
- Personalized user profiles.
- Account management.

### 4.2 Fashion Discovery
- Browse clothing products.
- Explore fashion categories.
- Search and filter products.
- Sort products by price and ratings.

### 4.3 AI Virtual Try-On
- Upload a personal photograph.
- Select a clothing product.
- Generate an AI-powered outfit preview.
- View the generated result.

### 4.4 Product Comparison
- Explore similar products.
- Compare prices and product information.
- Access original shopping websites through external links.

### 4.5 AI Fashion Recommendations
- Personalized clothing suggestions.
- Recommendations based on user preferences.
- Fashion style discovery.

### 4.6 Wishlist
- Save favourite products.
- Revisit saved products later.

## 5. Technology Stack

| Component | Technology |
|---|---|
| Frontend | React.js, TypeScript |
| Build Tool | Vite |
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

- **Frontend:** Handles the user interface, product discovery, image uploads and user interactions.
- **Backend:** Handles API requests, image processing workflows and communication with AI services.
- **Database:** Planned for storing user information, fashion preferences and wishlist data.
- **AI Engine:** Processes person and garment images to generate virtual try-on previews.

### System Workflow

```text
                 USER
                   |
                   v
           TRYFIT AI FRONTEND
           (React + TypeScript)
                   |
          ---------------------
          |         |         |
          v         v         v
       Explore   Profile   Virtual
       Products            Try-On
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

1. The user opens TryFit AI.
2. The user signs in or creates an account.
3. The user explores available fashion products.
4. The user selects a clothing item.
5. The user uploads a suitable photograph.
6. The backend sends the images to the AI try-on service.
7. The AI model generates a virtual outfit preview.
8. The generated result is displayed to the user.
9. The user can explore other products and visit the original shopping website.

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

*This is an overview of the main project structure. Additional files and folders may be present.*

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

### Step 2: Backend Setup

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Configure the required environment variables in a `.env` file.

Start the backend:

```bash
python3 -m uvicorn main:app --reload
```

Backend URL:

`http://127.0.0.1:8000`

API documentation:

`http://127.0.0.1:8000/docs`

### Step 3: Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

`http://localhost:5173`

## 10. Development Status

TryFit AI is currently under active development.

| Module | Status |
|---|---|
| React frontend | In development |
| Product Explore page | Prototype |
| User authentication | Under development |
| User profile | Under development |
| FastAPI backend | Initial setup completed |
| Image upload | Implemented in try-on workflow |
| AI virtual try-on | Integration under evaluation |
| Product aggregation | Planned |
| MongoDB integration | Planned |
| AI recommendations | Planned |
| Wishlist | Planned |
| Cloud deployment | Planned |

The product catalogue currently uses sample product data. Live e-commerce integrations and the final AI virtual try-on service are yet to be completed.

## 11. Future Enhancements

- Integrate a reliable AI virtual try-on model.
- Connect authorized product APIs and affiliate feeds.
- Implement personalized AI fashion recommendations.
- Add clothing size recommendation features.
- Integrate price tracking and product alerts.
- Complete database integration.
- Improve mobile responsiveness.
- Deploy the complete application to cloud hosting.

## 12. Advantages

- Makes online fashion discovery more interactive.
- Helps users visualize clothing before purchasing.
- Reduces the effort involved in comparing products.
- Provides a centralized fashion discovery experience.
- Combines Artificial Intelligence with web development.

## 13. License

This project is developed for academic and educational purposes as a final-year BCA project.

Third-party libraries, AI models and services remain subject to their respective licenses and terms of use.

## 14. Developer

**Project Name:** TryFit AI  
**Project Type:** AI-Based Web Application  
**Domain:** Artificial Intelligence, Fashion Technology and Web Development  

**GitHub Repository:**  
https://github.com/S-Anupriya/tryfit-ai

---

**TryFit AI – Explore Fashion. Experience AI. Find Your Fit.**