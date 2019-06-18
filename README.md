This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## Setup

- Go to the client folder and run `npm i`
- Then go to the api folder and run `npm i`
- Then go to the rmtpServer folder and run `npm i`
- Install OBS in you system and setup basic streaming
- Then to start stream go to OBS settings, then navigate to streams, select custom and paste `rtmp://localhost/live` in server input
- Then get an API key for Google OAuth Login from [Google Api](https://console.developers.google.com/)
- Then in the client folder make a .env file and paste you api key along with the following variable: `REACT_APP_GOOGLE_CLIENT_ID`.
  Example: REACT_APP_GOOGLE_CLIENT_ID="XXYYZZ".
- Open three terminal sessions and in one session navigate to the client folder and run `npm start`, then navigate to rmtpServer folder and run `npm start` and then navigate to api folder and run `npm start`.
- The client side will run on [Port 3000](http://localhost:3000), RMTP will run on [Port 8000](http://localhost:8000) and api side will run on [Port 3001](http://localhost:3001)

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


![Alt Text](snaps/1.png?raw=true "Title")
![Alt Text](snaps/2.png?raw=true "Title")
![Alt Text](snaps/3_.png?raw=true "Title")
