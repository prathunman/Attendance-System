# Attendance System

This project is an Attendance System built with HTML, CSS, JavaScript, and a Spring Boot backend. It allows users to log in, sign up, and access the home page.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Running the Project](#running-the-project)
- [Testing Credentials](#testing-credentials)
- [License](#license)

## Features
- User Registration
- User Login
- JWT Authentication
- Home Page with Welcome Message

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Spring Boot, Spring Security, JPA, MySQL
- JWT for authentication

## Setup Instructions

### Prerequisites
- Java 17 or higher
- Maven
- XAMPP (for MySQL)
- Live Server extension for VS Code

### Backend Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/attendance-system.git
    cd attendance-system/server
    ```

2. Configure the MySQL database using XAMPP:
    - Open XAMPP and start the MySQL module.
    - Create a database named `attendancedb`

3. Build and run the backend:
    ```sh
    ./mvnw clean install
    ./mvnw spring-boot:run
    ```

### Frontend Setup
1. Navigate to the client directory:
    ```sh
    cd ../client
    ```

2. Open the project in VS Code and start Live Server:
    - Right-click on `home.html` or `login.html` and select "Open with Live Server".

## Running the Project
1. Ensure the backend server is running on [`http://localhost:8080`](server/src/main/java/com/example/server/config/SecurityConfig.java ).
2. Open `login.html` in your browser using Live Server to access the application.

## Testing Credentials
Use the following credentials to test the application:

- **Email:** `user@gmail.com`
- **Password:** `password123`

## Notes
- All fields are required during signup and login.
- Password must be at least 8 characters long.

## License
This project is licensed under the Apache License 2.0. See the  file for details.