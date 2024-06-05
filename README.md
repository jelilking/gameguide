
# Game Guide Project

## Overview

This is a game guide template project built using JavaScript and Firebase. The goal of this project is to provide a comprehensive guide for a game, including various features such as user authentication, data storage, and dynamic content updates. Unfortunately, the project is currently incomplete due to the requirement of a pay-as-you-go plan for Google Cloud Functions.

## Features

- User authentication (Firebase Authentication)
- Real-time database (Firestore)
- Static site hosting (Firebase Hosting)
- Serverless functions (intended to be implemented with Firebase Cloud Functions)

## Project Structure

```plaintext
project-root/
│
├── public/               # Static files (HTML, JS)
│   ├── index.html
│   ├── index.js
│   └── auth.js
│
├── functions/            # Cloud Functions (intended)
│   └── index.js
│
├── firebase.json         # Firebase configuration
├── .firebaserc           # Firebase project configuration
├── package.json          # Node.js dependencies
└── README.md             # Project documentation
```

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/game-guide.git
    cd game-guide
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Initialize Firebase in your project:**
    ```sh
    firebase init
    ```
    - Select **Firestore** and **Hosting**.
    - Choose default settings for Firestore and public directory as `public`.
    - Do not configure as a single-page app unless required.

## Usage

1. **Start the Firebase local server:**
    ```sh
    firebase serve
    ```
    - This will start a local server and allow you to view the project at `http://localhost:5500`.

2. **Deploy the project to Firebase:**
    ```sh
    firebase deploy
    ```
    - Note: Deployment of Cloud Functions will require a pay-as-you-go plan.

## Issues

### Google Cloud Functions Pay-as-you-go Plan

The implementation of serverless functions using Firebase Cloud Functions could not be completed because it requires upgrading the Firebase project to the Blaze (pay-as-you-go) plan. This plan requires billing information and incurs charges based on usage.

### Workarounds and Future Plans

For those who wish to continue development:
- **Upgrade to Blaze Plan:** Consider upgrading your Firebase project to the Blaze plan to enable Cloud Functions.
- **Alternative Solutions:** Explore other backend solutions or self-hosted functions using tools like Supabase, Appwrite, or a custom Node.js server.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or additional features.



## Contact

For any questions or suggestions, please contact:
- Abduljelil
- Email: abduljelilozigi@gmail.com
- GitHub: jelilking (https://github.com/jelilking)

