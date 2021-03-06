![screenshot of app](https://raw.githubusercontent.com/mattybalaam/ich-bin-cloud-berliner/master/app-screenshot.png)

View [demo version](https://mattybalaam.github.io/ich-bin-cloud-berliner/)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Tag cloud app which takes a json file, and other parameters to show a word cloud which is interactive, showing more metadata when words are selected.

The Tag Cloud takes parameters as props

- *title*: A string
- *data*: JSON object - see `src/json/topics.json` for format.
- *sortType*: A string, either 'pyramid' or 'shuffle'. Defaults to 'shuffle'.
- *customSort*: A function taking a one dimensional array.
- *detailsAreas*: JSON object with labels and string representing how to access values from data object
- *legendDetails*: JSON object representing a lengend of the tags colour coding. 

## Requirements
- `Node` - 9.3.0 tested; you may find other versions work
- `NPM` - 5.5.1 tested; you may find other versions work
- or alternatively `Yarn`.

## Installation
1. Clone this repository 
2. run `npm install` (if you get errors on Windows you may need to try `npm install --force`)

## Scripts

### `npm run build`

This will build the app for production into the `build` folder.

On a succesfull build you will find instruction on how to serve locally

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

## Supported Browsers

Built app is targeted using [Browserslist](https://github.com/ai/browserslist) to allow [Babel](https://babeljs.io/) and [PostCSS](http://postcss.org/) to attempt to build correctly for 

```
> 1%
last 4 versions
Chrome > 62
Safari > 11
Edge > 40
Firefox > 57
IE 11
```

Note that for IE11 support some Polyfills and specific css rules have been used. These are all commented in the code because it might not be obvious why they are there. 

## Known Issues 
 
A workaround for iOS devices implementation of viewport units, in particlar VH needs to be considered and implemented. Perhaps something like the 'vh-check' module which was tried but was buggy.
 
## Contributions
Currently this app is lacking good test coverage because I don't have much experience with these and this project also had a tight intital turnaround time, please feel free to lend a hand. 
