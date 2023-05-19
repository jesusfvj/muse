# Muze - Frontend Application

Muze is a frontend application built with React, Vite, and Tailwind CSS. It is connected to a MongoDB database and allows users to register as either regular users or artists. As an artist, you can upload your own music for others to listen to. The application also includes an administrator page for managing users, artists, playlists, tracks, and albums. JWT authentication is implemented to secure backend requests, which are handled by a Node.js server. Axios is used for making these requests.

## Installation and Setup

Before running the Muze application, make sure you have Node.js and npm (Node Package Manager) installed on your machine. Additionally, ensure that you have a MongoDB database set up and running.

1. Clone the repository:

```shell
git clone https://github.com/jesusfvj/muse.git
```

2. Navigate to the project's root directory:

```shell
cd muze
```

3. Install the dependencies:

```shell
npm install
```

4. Configure the backend:

   - Open the `.env` file in the project's root directory and update the MongoDB connection string.

5. Start the application:

```shell
npm run dev
```

6. Access the application:

   - Open your web browser and visit `http://localhost:YOUR_PORT` to access the Muze application.

## Features

- User registration and authentication
- Artist registration and authentication
- User profiles
- Artist profiles
- Music uploads by artists
- Music playback
- Administrator panel for managing users, artists, playlists, tracks, and albums

## Technologies Used

- React: JavaScript library for building user interfaces.
- Vite: A build tool that provides fast and optimized development setup for React applications.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- MongoDB: A popular NoSQL database for storing application data.
- Node.js: A JavaScript runtime environment for executing server-side code.
- Express.js: A web application framework for Node.js.
- JWT (JSON Web Tokens): A standard for securely transmitting information between parties as a JSON object.
- Axios: A promise-based HTTP client for making requests to the backend.

Sure! Here's the updated README with the dependencies organized in a table:

## Dependencies

Muze relies on the following dependencies:

| Dependency                 | Version  |
| -------------------------- | -------- |
| @heroicons/react           | ^2.0.18  |
| @material-tailwind/react   | ^2.0.0   |
| @stripe/react-stripe-js    | ^2.1.0   |
| @stripe/stripe-js          | ^1.52.1  |
| @tanstack/react-query      | ^4.28.0  |
| axios                      | ^1.4.0   |
| json-server                | ^0.17.2  |
| react                      | ^18.2.0  |
| react-dom                  | ^18.2.0  |
| react-hook-form            | ^7.43.9  |
| react-icons                | ^4.8.0   |
| react-loader-spinner       | ^5.3.4   |
| react-multi-carousel       | ^2.8.2   |
| react-router-dom           | ^6.9.0   |
| react-router-hash-link     | ^2.4.3   |
| react-toastify             | ^9.1.2   |


## Collaborators

The following GitHub users have contributed to the Muze project:

- [jesusfvj](https://github.com/jesusfvj)
- [MiquelAbella](https://github.com/MiquelAbella)
- [landerssini](https://github.com/landerssini)
- [BertaGN](https://github.com/BertaGN)

## Contributing

We welcome contributions to Muze! If
