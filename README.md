# My Node.js Application

This is a simple Node.js application that demonstrates how to set up a basic server and run it using Docker.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)
- Docker (for containerization)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/my-nodejs-app.git
   cd my-nodejs-app
   ```

2. Install the dependencies:

   ```
   npm install
   ```

## Running the Application

To run the application locally, use the following command:

```
node src/index.js
```

The application will start on `http://localhost:3000`.

## Docker

To build and run the Docker image, follow these steps:

1. Build the Docker image:

   ```
   docker build -t my-nodejs-app .
   ```

2. Run the Docker container:

   ```
   docker run -p 3000:3000 my-nodejs-app
   ```

The application will be accessible at `http://localhost:3000` from your browser.

## License

This project is licensed under the MIT License.#   D o c k e r  
 