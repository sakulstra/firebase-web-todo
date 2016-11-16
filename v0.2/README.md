What we did here:

#### Add initial routing
First install react-router... we take v4 here because it#s new and shiny, if you don't like it - go with v2/3 the documentation is good. We believe in you!
`npm install --save react-router@next` for v4 or `npm install --save react-router` for v3.
#### Add initial file/folder structure
We now added
```js
src
    - api           # will include the calls to and from firebase
    - environment   # will contain e.g. enums, local stores ...
    - ui            # will contain all the ui
```
#### Add initial ui
App.js now contains the current routing
```js
/       -> home
/todo   -> todo page
/*      -> 404 error page
```
#### Write first few stories
We now have our pages included in storybook. Nice.

#### :dancing: