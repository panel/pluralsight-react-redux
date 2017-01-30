# Pluralsight Admin Tutorial
A react/redux/webpack application that presents an interface that pretends to administer Pluralsight courses built by following the course [Building Applications in React and Redux in ES6](https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents).

## Run in development
```npm start -s ```

This will start a development webpack service that will lint, run tests and serve the transpiled files.

## Build for prod
```npm run build -s```

This will create a deployable, static version of the application in the `./dist` folder.

## Challenges
- Author Admin
- ~~Delete Course~~
- ~~Hide empty course list~~
- Prompt user about unsaved changes
- Add additional client side validation
- Handle 404s
- ~~Show # of courses in header~~
- Pagination
- ~~Sort Course Table~~
- Revert abandoned changes
