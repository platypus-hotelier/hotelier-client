# Hotelier

A custom hotel reservation system.

Site URL: <https://platypus-hotelier.herokuapp.com/>

## To Get Started...

First, clone this repo and install the dependencies with `npm install`. Then run the 
`grunt` command in the project root (this will use the "default" task alias in the 
grunt configuration). Now, run your http server from the `build/` directory.

## Application Deployment

This application is automatically deployed when a commit or merge occurs on the `master`
branch (this is called "continuous integration / deployment"). Before deploying the app, Heroku runs the
`grunt` command, because of this, **ALL dependencies** must be installed as regular app
`"dependencies"` in the `package.json`. This app **does not use `"devDependencies"`**.

> NOTE: Because `grunt` is run _when deploying the application on Heroku_, if the 
build fails, the site will NOT be visible! Ensure the entire `grunt` build runs successfully
before merging into `master`.

## API Information

The base URL for the data API is `https://platypus-hotelier-api.herokuapp.com/api/`
