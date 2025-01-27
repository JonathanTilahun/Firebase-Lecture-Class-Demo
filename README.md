## Create the Project

1. Go to [firebase.google.com](https://firebase.google.com)
2. Click **"Get Started"**
3. Click **Create Project**
4. Name your project something like `firebase-practice`
5. For the Configure Google Analytics part, select **"Default Account for Firebase"**

## Create the Database

6. Click **Build** on the side, then select **"Realtime Database"**
7. Select **Create a database**
8. Select **"Start in Test Mode"**
9. In the top left corner, select the settings icon, then **Project Settings**
10. Scroll to the bottom and select the `< />` icon to create a web app
11. Name it `firebase-practice` then register the app
12. Copy the `firebaseConfig` object and paste it into the `src/firebase.js` file locally. Just paste that object with the keys; don’t change anything else.

## Run Locally
Just do:

`npm start`