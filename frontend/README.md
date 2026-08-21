# Funsway Service Frontend

React-based frontend for the Funsway Service rental car application.

## Setup

### Install Dependencies
```bash
npm install
```

### Environment Variables
Create a `.env` file in the frontend directory:
```
REACT_APP_API_URL=http://localhost:5000/api
```

### Start Development Server
```bash
npm start
```

The application will open at `http://localhost:3000`

## Build for Production
```bash
npm run build
```

## Project Structure

```
src/
├── components/      # Reusable components
│   ├── Navbar.js
│   └── Footer.js
├── pages/          # Page components
│   ├── HomePage.js
│   ├── CarsPage.js
│   ├── BookingPage.js
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   └── ProfilePage.js
├── App.js          # Main App component
└── index.js        # Entry point
```

## Pages

- **Home** - Landing page with features and call-to-action
- **Cars** - Browse and filter available rental cars
- **Booking** - Book a car with dates and locations
- **Login** - User login page
- **Register** - New user registration
- **Profile** - User profile and booking history
