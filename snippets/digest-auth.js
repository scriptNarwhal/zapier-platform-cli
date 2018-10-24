const authentication = {
  type: 'digest',
  // "test" could also be a function
  test: {
    url: 'https://example.com/api/accounts/me.json'
  },
  connectionLabel: '{{bundle.authData.username}}' // Can also be a function, check digest auth below for an example
  // you can provide additional fields, but we'll provide `username`/`password` automatically
};

const App = {
  // ...
  authentication: authentication
  // ...
};
