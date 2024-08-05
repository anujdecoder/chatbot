# Hey👋, I'm Ava

I'm a chatbot created by Anuj for Artisan Full Stack Developer role.

An online demo of the app can be found at [https://ava-chatbot-f2551.web.app/](https://ava-chatbot-f2551.web.app/).

## Salient Features

* **Google Authentication** - The app uses [Firebase](https://firebase.google.com/) for authenticating with your gmail
  account.
* **Persistence** - Your entire conversation with Ava is stored in Firestore database.
* **Accessible** - The entire application is accessible via keyboard.
* **Responsive** - Ava is built using [MaterialUI](https://mui.com/material-ui) and is responsive out of the box
* **Dark mode!** - Well no modern day application is complete without dark mode!

Take a look at [Ava](https://ava-chatbot-f2551.web.app/).

The server for Ava can be found at [chatbot-be](https://github.com/anujdecoder/chatbot-be)

### Project setup:

To run the code in local machine, you need to create and .env file using sample.env.

You will need to update :

* `REACT_APP_API_KEY`
* `REACT_APP_PROJECT_ID`
* `REACT_APP_AUTH_DOMAIN`

with the project keys you get from firebase. This project uses firebase for authentication and hence needs a firebase
project to be run in local.

In the project directory, run:

* `npm install` To install the dependencies
* `npm start` To run the project. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* `npm run deploy` To build and host the app on firebase

### Limitations/Features missing:
I feel following features are missing from the app that could not be implemented because of time constraints

* **Testing**  - I thought of using cypress but could not complete it
* **Localization** - This can be achieved using material-ui/labs 