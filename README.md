To start, first clone this repository by using this command
git clone https://github.com/AbyanAli/todo-app.git

Then navigate to this project directory by running
cd todo-app

next, install all the needed dependencies
npm install

For setting up the firebase. create a new project on Firebase and enable the Firestore database. once that is done get teh configuration details and add them to teh firebase.js in this format:
API_KEY=your_api_key
AUTH_DOMAIN=your_auth_domain
PROJECT_ID=your_project_id
STORAGE_BUCKET=your_storage_bucket
MESSAGING_SENDER_ID=your_sender_id
APP_ID=your_app_id

then run the application:
npm start