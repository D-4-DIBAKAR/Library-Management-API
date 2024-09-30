# Fullstack Development Internship (Backend) - Book Rental API

This project is designed as a backend service to manage book rentals and transactions. It involves creating two main collections in MongoDB (Users and Books) and a Transactions database to track book issues and returns. Additionally, several APIs are created to retrieve book data based on various filters and to manage book rental transactions.
## Table of Contents
- Project Overview
- Database Structure
- API Endpoints
- Technologies Used
- Deployment
- Instructions
- Future Enhancements
## 1. Project Overview
The project involves:

  - Building a MongoDB database with two collections: Books and Users.
  - Creating APIs to perform search and filter operations on the Books collection.
  - Implementing a Transactions collection to track book issues and returns.
  - Developing APIs to query and update transaction records, including rent calculations.
  - Ensuring validation of existing users for transactions.
The goal is to understand backend API development, MongoDB schema design, and basic CRUD operations.

## 2. Database Structure
1. Books Collection
The Books collection contains the following fields:
  - name: String (Name of the book)
  - category: String (Book category)
  - rentPerDay: Number (Daily rent of the book)
2. Users Collection
The Users collection contains:

  - name: String (Name of the user)
  - email: String (User's email)
  - password: String (User's password)
3. Transactions Collection
The Transactions collection is used to record every issue and return of books. Fields include:

  - bbook: ObjectId (Reference to the book)
  - user: ObjectId (Reference to the user)
  - issueDate: Date (The date when the book was issued)
  - returnDate: Date (The date when the book was returned, null if not returned yet)
  - rent: Number (Total rent for the transaction)
## 3. Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Password Encryption:** Bcrypt.js
## 4. API Endpoints
  1. **Authentication**
  - Register:
    - Method: `POST`
    - Endpoint: `http://localhost:3000/api/users`
  - Login:
    - Method: `POST`
    - Endpoint: `http://localhost:3000/api/users/login`
  2. **User Management**
  - Get All Users:
    - Method: `GET`
    - Endpoint: `http://localhost:3000/api/users`
  - Get A User:
    - Method: `GET`
    - Endpoint: `http://localhost:3000/api/users/:id`
    - Replace :id with the user ID to fetch a specific user.
  3. **Books Management**
  - Get All Books:
    - Method: `GET`
    - Endpoint: `http://localhost:3000/api/books`
  - Search Book by Name/Term:
    - Method: `GET`
    - Endpoint: `http://localhost:3000/api/books/search?name=War`
  - Search Book by Rent [min/max]:
    - Method: `GET`
    - Endpoint: `http://localhost:3000/api/books/rent?minRent=8&maxRent=12`
  - Filter Book by Rent [category/min/max/name]: Similar to the previous one, but can include additional parameters for filtering.
  4. **Transaction**
  - Issue a  Book:
    - Method: `POST`
    - Endpoint: `http://localhost:3000/api/transactions/issue`
  - Return a  Book:
    - Method: `POST`
    - Endpoint: `http://localhost:3000/api/transactions/return`

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB server or MongoDBCompass installed on Machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/D-4-DIBAKAR/Library-Management-API.git
   cd Library-Management-API
   ```
2. Install dependencies:
  ```bash
    npm install
  ```
3. Create a .env file in the root directory and add your environment variables:
  ```bash
    PORT=<Your Port>
    MONGO_URI=<Your mongodb URI>
    JWT_SECRET=<SECRET_STR>
    JWT_EXPIRES_IN="1h"
  ```
4. Start the server:
- Seed Data into MongoDB:
```bash
    npm run seedData
```
- For development mode:
  ```bash
    npm run dev
  ```
- For production mode:
  ```bash
    npm start
  ```
## Screenshots

# Library-Management-API
![Register](https://github.com/user-attachments/assets/a605f96a-7e58-49ae-8e26-28978a93ebd9)

![Login](https://github.com/user-attachments/assets/2f0be15c-2db1-4a19-bf59-2f3d57b31b89)

![Get All User](https://github.com/user-attachments/assets/16744096-38e3-4943-95c6-8e3fb6a44796)

![Get A User](https://github.com/user-attachments/assets/8f3a2f12-d957-4efa-941d-2b14d901c83b)

![Get All Books](https://github.com/user-attachments/assets/2d7d9e5e-54d4-4242-81b5-898dec5548e4)

![Search Book by Name/Term](https://github.com/user-attachments/assets/5ad33bf3-32d7-40f7-ab4b-0574910b0dc8)

![Search Book by Rent min/max](https://github.com/user-attachments/assets/c521b8e1-defd-46fd-8f91-1051d34641ac)

![Filter Book by Rent category/min/max/name](https://github.com/user-attachments/assets/3cb154e2-74f3-4261-8f82-c26d32153a4e)

![Issue A Book](https://github.com/user-attachments/assets/8d8a48fd-fae5-47df-a642-009b76103555)


![Return A Book](https://github.com/user-attachments/assets/115060a6-7f1c-4d35-b990-f24f3c835197)





## Badges
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) 
![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white) 
![Nodejs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) 
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) 
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)

