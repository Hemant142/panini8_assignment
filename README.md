
# Panini8 Assignment

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Deployed Links](#deployed-links)
- [Screenshots](#screenshots)


## Project Overview
Panini8 Assignment is a web application that allows users to view, create, and manage blog posts. The application includes features for user authentication, CRUD operations on blog posts, and the ability to like and comment on posts.

## Features
- **User Authentication**: Signup and signin functionality
- **Blog Feed**: Display all blogs with options to filter
- **CRUD Operations**: Create, Read, Update, Delete blog posts
- **Like and Comment**: Users can like and comment on posts

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT), Bcrypt

## Installation
To run this project locally, follow these steps:
1. **Clone the repository**
   ```bash
   git clone https://github.com/Hemant142/panini8_assignment
   ```

2. **Navigate to the project directory**
   ```bash
   cd Panini8_assignment
   ```

3. **Install dependencies for the backend**
   ```bash
   cd Backend
   npm install
   ```

4. **Install dependencies for the frontend**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Set up environment variables** (create a `.env` file in the backend directory)
   ```plaintext
   PORT= your_port_number
   MONGO_URI=your_mongodb_url
   JWT_SECRET=your_jwt_secret
   ```

6. **Run the backend server**
   ```bash
   cd backend
   npm run server
   ```

7. **Run the frontend application**
   ```bash
   cd ../frontend
   npm run dev
   ```

## Usage
Once the application is running, navigate to `http://localhost:5173/` in your browser to access the frontend. You can sign up or sign in to start using the blog features.

## Deployed Links
- **Frontend**: [Your Frontend Deployment Link](https://panini8-frontend.vercel.app/)
- **Backend**: [Your Backend Deployment Link](https://panini8-assignment-theta.vercel.app/)

## Laptop Screenshots
<img width="788" alt="LaptopHome" src="https://github.com/user-attachments/assets/f94f076d-9243-4c59-9520-824bac69dba1" />

<img width="780" alt="LaptopBlogs" src="https://github.com/user-attachments/assets/e8082b68-956e-465f-afa2-181af03d118a" />

<img width="778" alt="LaptopSignUp" src="https://github.com/user-attachments/assets/2929b113-a821-4562-8f3a-8e51901b3cb5" />

<img width="793" alt="LaptopLogin" src="https://github.com/user-attachments/assets/488a25a7-a6dd-40d0-9ec1-298e95626adf" />

## Mobile Screenshots 

<img width="238" alt="MobileCreateBlog" src="https://github.com/user-attachments/assets/68ecbdc7-4798-419f-90b5-d027a7869946" />

<img width="263" alt="MobileProfile" src="https://github.com/user-attachments/assets/52590799-0084-4a77-bfcf-d7928fb999af" />

<img width="286" alt="MobileHome" src="https://github.com/user-attachments/assets/33b625f7-92fe-40c9-b4d8-acb9b1d125c4" />

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements.

## License
This project is licensed under the MIT License.


