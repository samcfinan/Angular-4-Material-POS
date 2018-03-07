# Angular 4 POS

A basic point-of-sale demo application built in Angular 4. This project uses Angular Material UI elements (https://material.angular.io) and a Firebase Cloud Firestore and Firebase Auth backend (https://firebase.google.com).

The purpose is to demonstrate a simple POS using modern frameworks. Users can perform transactions, add/modify products (with image upload), create new user accounts, and see a paginated transaction history. Adding/removing users and products is restriced to Admin users.

DEMO: https://angularpos.samfinan.com

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.

Project built by Sam Finan (www.samfinan.com) for fun & games.

## How to Use

1. Clone project
2. Run `npm install`
3. Create Firebase environment config files (see below).
4. Run `ng serve`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Firebase Configuration

Create `src/environments` directory and `environment.ts` and `environment.prod.ts` configuration files. The configuration files should use the following format and can be retrieved from your [Firebase console](https://console.firebase.google.com).

`
export const environment = {
  production: false,
  // Initialize Firebase
  firebaseConfig: {
    apiKey: 'xxxxxx',
    authDomain: 'angularpos.firebaseapp.com',
    databaseURL: 'https://angularpos.firebaseio.com',
    projectId: 'angularpos',
    storageBucket: 'angularpos.appspot.com',
    messagingSenderId: 'xxxxxx'
  }
};

`



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
