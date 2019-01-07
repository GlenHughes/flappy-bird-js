# GAME IS NOT WORKING AND IS CURRENTLY BEING DEVELOPED!

# Flappy Bird JS

This is a basic example of how to build a Flappy Bird style game using pure JS and HTML5 canvas. This is just a demo and shouldn't be taken seriously. Please feel free to fork and or make PR's to make this better for fun!

## How to play

Play live: https://glenhughes.me/projects/flappy-bird-js

game instructions here...

## Local setup for dev
Install locally with GIT `git clone git@github.com:GlenHughes/flappy-bird-js`

Then go to that directory: `cd flappy-bird-js`

I use Yarn as my package manager, install [Yarn](https://yarnpkg.com/lang/en/docs/install/) and then type `yarn` within the cloned directory.

Then type `yarn dev` this assumes that port `8092` is free! Change this if you are already using it within the `webpack/webpack-dev.js`.

## To build for production
Type `yarn build` in the cloned directory! This will build a production version with no logs or dev related stuff and also a `gzipped` version in the (or create) a `/dist`.
