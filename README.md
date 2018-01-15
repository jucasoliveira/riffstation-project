This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform instalation and run the code

## Table of Contents

- [Project Dicectory](#available-directory)
- [Installing server and client](#installing-server-and-client)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- 

## Project Directory

On this projects have a client (front end) directory and a server(back end) directory.
`single-play-song` is the front , and `GetSongData` is the back.



## Installing server and client

After cloning the project , go to `GetSongData` and run:
```npm install```

After the instalation, go to ```single-play-song``` and execute the same command

## Folder Structure

Your project should look like this:

```
riffstation-project/
    single-play-song/
      README.md
      node_modules/
      package.json
      public/
        index.html
        guitar.png
      src/
        App.css
        App.js
        App.test.js
        index.css
        index.js
        logo.svg
        _tests_/
            PlaySong.spec.js
        components/
            PlaySong.js
    GetSongData/
      package.json
      app.js
      views/
        error.hbs
        index.hbs
        layout.hbs
      routes/
        index.js
        songList.js
      public/
        images/
        javascripts/
        stylesheets/
            style.css
      bin/
        www
```
## Available Scripts

In the project directory, you can run:

### `./GetSongData/npm start`
### `./single-play-song/npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `./single-play-song/npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.