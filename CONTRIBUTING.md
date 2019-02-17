# Contributing

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then clone it to your local device
2. Install yarn: `npm install -g yarn` | [yarn installation](https://yarnpkg.com/en/docs/instal)
3. Install the dependencies: `yarn`
4. Link Silky Charts: `yarn link`
5. Run `yarn dev` to build and watch for code changes
6. Get into the Playground: `cd playground`
7. Install the dependencies: `yarn`
8. Link to Silky Charts: `yarn link silky-charts`
9. Start the playground: `yarn start`

## How to use the playground

Once you are in the playground you will find a React application created with [RCA](https://facebook.github.io/create-react-app/). The App structure is the following:

```
.
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.js
│   ├── components
│   │   ├── ChartContainer.js
│   │   └── Container.js
│   ├── data.js
│   ├── index.js
│   └── styles.css
└── yarn.lock
```

After installing all the dependencies you will be able to start the application and use the `App.js` to play with the current charts or test new ones. The App file is already importing all the charts available and the example data sets included in the application for testing purposes, and is also already rendering one of the charts with most common props already defined and comment out to make it easier to test these.

There is also a `data.js` that contains all the testing data sets. Use this data set to test your charts and add new ones if you need them for your new chart or just for testing the current ones and include them in your pull request.

## Create a Pull Request

Silky Charts uses [git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) in its repository, so if you want to contribute and publish a pull request please create a `feature` branch out of `develop` with a name describing you change or feature and create the pull request pointing back to the `develop` branch.

1. `git flow feature start <feature-name>`
2. Make your changes and commit them
3. Run the tests with `yarn test` or `npm run tests`
4. Add unit tests and fix the linting issues and broken tests (_as today the tests are in plan of refactoring so don't worry about broken ones_)
5. [Create the pull request](https://help.github.com/articles/creating-a-pull-request/).

## Tests

Running all tests:

```
yarn test
```

## Testing in your own app

If you haven't yet, follow the first five steps described in [Contributing to Silky Charts](#contributing-to-silky-charts) then inside your project directory:

1. Link to Silky Charts: `yarn link silky-charts`

And start coding...

## Troubleshooting

- When you use bundlers like Webpack and Parcel you might encounter some issues related with Hooks throwing an error that says "`Hooks can only be called inside the body of a function component`". This problem is caused by a [duplicate React in your bundle](https://github.com/facebook/react/issues/14721#issuecomment-458757426) and you have to follow this [workaround](https://github.com/facebook/react/issues/13991#issuecomment-462090853) to make it work. -- Use this [package.json]('./playground/package.json) file as an example.
