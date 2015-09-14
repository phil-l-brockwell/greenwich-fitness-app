# greenwich-fitness-app

A mobile app built using Angular JS/Ionic Framework, showcasing a fictional client; Greenwich School of Fitness.

## Key Learning Areas
* Ionic Framework
* HTTP requests

## JSON API
The app uses a JSON api to store reviews, items and consultants. Before the load of a page, the app makes a relevant get request, as well as making a post request with any new reviews. The API also has a content management front end system which could potentially be used by the gym administration to update/monitor content centrally.

Check out the API and code at the following links:

* [API](https://greenwich-fitness-api.herokuapp.com/)
* [Repo](https://github.com/robertpulson/mobile_cw_api)

## Screenshots
![ScreenShot](https://github.com/robertpulson/greenwich-fitness-app/blob/master/screenshots/thumb_IMG_4203_1024.jpg)
![ScreenShot](https://github.com/robertpulson/greenwich-fitness-app/blob/master/screenshots/thumb_IMG_4204_1024.jpg)
![ScreenShot](https://github.com/robertpulson/greenwich-fitness-app/blob/master/screenshots/thumb_IMG_4205_1024.jpg)
![ScreenShot](https://github.com/robertpulson/greenwich-fitness-app/blob/master/screenshots/thumb_IMG_4206_1024.jpg)
![ScreenShot](https://github.com/robertpulson/greenwich-fitness-app/blob/master/screenshots/thumb_IMG_4207_1024.jpg)
![ScreenShot](https://github.com/robertpulson/greenwich-fitness-app/blob/master/screenshots/thumb_IMG_4208_1024.jpg)
![ScreenShot](https://github.com/robertpulson/greenwich-fitness-app/blob/master/screenshots/thumb_IMG_4210_1024.jpg)
![ScreenShot](https://github.com/robertpulson/greenwich-fitness-app/blob/master/screenshots/thumb_IMG_4211_1024.jpg)

## Getting Started

Clone the repo by entering `git clone git@github.com:robertpulson/greenwich-fitness-app.git` into the terminal.

Navigate into it using `cd greenwich-fitness-app`.

Use homebrew to install node (if not installed): `brew install node`.

Then install Cordova: `npm install -g cordova`.

And finally Ionic: `npm install -g ionic`

You can then serve the app to `http://localhost:8100/#/tab/home` by running `ionic serve`.

If you have xCode installed you can deploy the app to your phone by using:

`cordova build ios`

And then opening the `.xcodeproj` file inside `platforms -> ios`. If you connect a suitable device you can download the app to it, with full functionality, however an Apple Developers License is required for this.
