# Creating Your First nOS dApp

### Pre-requisites:

First of all you'll need nOS browser locally. This is required to open your dApp.
You can follow the instructions here:

```
// Clone the nOS repo
$ git clone https://github.com/nos/client.git nos-client

// Navigate to the cloned repository
$ cd nos-client

// Install dependencies and launch the nOS client
// This is used to start developing on the nOS client
$ yarn install && yarn start

// or if you want to create a temporary binary

// Distribution command
// After running `yarn dist` you can navigate to `dist` directory and execute the `nOS` binary in a terminal.
$ yarn install && yarn dist
```

Creating a dApp can be done by building a simple single-page web application.  To get started
quickly, install the [@nosplatform/create-nos-dapp package](https://www.npmjs.com/package/@nosplatform/create-nos-dapp) and generate a new project using the `create-nos-dapp` command.

Within your dApp, you can integrate with the nOS API. nOS injects some predefined functions into
your application, allowing you to interact with the NEO blockchain and the currently authenticated
user's account.

## Note:
In case you decide *NOT* to use a template generated by `create-nos-dapp` to develop your dApp, don't forget to add [@nosplatform/api-functions](https://www.npmjs.com/package/@nosplatform/api-functions) to your project.

This will stub nOS API functions for development outside of the nOS client.

```sh
$ npm i --save @nosplatform/api-functions
$ yarn add @nosplatform/api-functions
```



## Developing with nOS API

Assuming you run your webapp at `http://localhost:8080`, simply type `nos://localhost:8080` into the nOS
address bar (which you built/compiled in the pre-requisites step earlier) at the top of that application, then press <kbd>Enter</kbd>.  Refer to the
[API documentation](./api.md) for a complete list of functionality.

## Known issues
Combining a custom protocol like `nos://` with hot module replacement is a known issue, causing the nOS client to return a black screen when running your dApp.

In such cases, it is adviced to use a bundler without hot module replacemen. As an example: using Parcel, this is done by adding `--no-hmr` to your start command.

If you really want to use HMR, you can use `http://` within the client instead (though we would advice against it).
