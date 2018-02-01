# Seattle Baseball League

### It's an application to track baseball league in Seattle.

#### By Malgorzata Haniszewska and Kevin Babcock

## Description

This website manages baseball league. All data persisted in a connected database (Firebase).
* User can visit a page to see a list of all teams.
* User can click on each individual team from list to see details (manager, players, games)
* User can visit a page to see a list of all players.
* User can click on each individual player from list to see details (age, position, team, Jersey number)
* User can visit a page to see a list of all games.
* User can filter schedule by desired team.
* Administrator can edit and delete data only when is logged in.
* Administrator can edit players, teams and games.
* Administrator can delete players, teams and games.

## Development server

* Clone GitHub repository to your personal device using terminal command `git clone https://github.com/kevinmbabcock/baseball-league`
* go to root directory of this project
* run `npm install`
* run `bower install`
* change directory to src/app
* create file `touch api-keys.ts`
* log in to [Firebase](https://firebase.google.com/), go to console and create new project, select Add Firebase to your web app
* add your api-keys to api-keys.ts file
  `export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };`
* change rules to value: true
* run `ng serve` for a dev server
* navigate to `http://localhost:4200/`;the app will automatically reload if you change any of the source files

## Support and contact details

Contact emails: gosia.haniszewska@gmail.com kevinmbabcock@icloud.com

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Technologies Used

* HTML
* CSS
* Typescript
* Angular2/[Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.
* [Firebase](https://firebase.google.com/)

## License

This project is licensed under the MIT License.
