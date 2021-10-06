# AngularFireIssue

I get this error when attempting to use the new Angular Fire 7 modular api to configure Firebase Realtime Database: 

Error: AngularFireModule has not been provided at getSchedulers

## Steps to Reproduce

1. `npm install`
2. Add your Firebase environment config settings in `app.module`
3. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
4. You will see in browser developer tools the error: `Error: AngularFireModule has not been provided at getSchedulers`
## Desired Behavior

Firebase Realtime Database is configured and I'm able to use injection token in Firebase Service to query the database. 

### Side Note 

I have no issues configuring Firestore in this same way. I'm able to do this same provider/injection token pattern using `initializeApp` and `getFirestore`. 