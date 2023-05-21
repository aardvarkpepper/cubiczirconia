<!-- using port 3333

Notes to self:  Change "image type" to reference separate database.  Toggle between local, url1, url2, etc.
For badges and users.  Disassociate entirely, and turn them into separate databases, so for example
query image database, for user with id 1, sort by image id number ascending.  Returns array to populate element.
jas = junction associative (junction and association interchangable?)

too big - minify
doesn't have cart - will be added

useContext - not taught in pursuit.  styling, application, global level data.  authentication or user session
multiple componet

state for local stuff mostly

redux?  usecontext?  other tech sql
bootstrap limts

scss - structured css

getAllThemesForUserSortThemeId should likewise disassociate; instead of sorting by theme id, user specified sort.

Change theme default from populating separately for each user?
See how other programs implemnet default themes, what is standard
practice if any?

Redefine default theme to be an array of themes in database.
This is added to array of user themes.

Object.keys returns an array of keys from an object, but the order is inconsistent (browsers, hardware, etc.)  Create a linked list in sql that pulls correct order every time.

Snake to camel, camel to snake.  Look at "humps" package for implementation, but write own.

Ask about implmenetation and storing the entire users array in state.  Can just toggle, really, and have various checks.

CSS styling uses App components, particularly for navbar fixed to prevent x-scrolling, and below that table header sticky.  But the component between the navbar and table header should be dynamic.

Fix "generictable" reference to reference id.  As Object.keys order is not guaranteed (though apparently should be consistent), consider switch to Map or Set data structure.

For now, use Axios call to individual (record) and specifying by user (rather than dynamically for badges and themes) as dynamic link routing not covered in class, and insufficient time to research and implement new feature.

Look again for how to use multiple params.  From different components?  From same component?

Mystery:  Why does the GenericTable css styling apply to the UserDetails table?

Index passes variable down to "detail".  user setState set to variable.  If variable not set, then axios call to retrieve data.  (such as if URL called directly).  Render component to indicate if axios was called or not.

Call axios 20 units at a time - limit what goes in state, limit rendering thousands potential components instead only 40 at a tie or whatever.

Passing props.location.value through React Link does not work when page refreshed or using back/forwards buttons on browser.

In UsersIndex, axios is called then props passed to sub-component "GenericTable".  But where we access individual users, accessing GenericForm, there is no parent component.  Perhaps I should create one.  It does seem logical, though this is not what we did in class.  

Add escape clauses for UserEdit and UserDetails in case somehow data passed is null.  Though it shouldn't happen.  How can the component even be called outside of the wrapping context?  And the wrapping context provides the variable.  But it's useful in case someone else uses the component improperly, perhaps?  Encapsulation?

htmlFor in label required for other rendering?  But may be eliminated where label wraps input completely, at least for some browsers.

In GenericForm, using ...previous instead of deep copy.
Correct form to use unique key.  This requires some thought.

UserCreate uses state to take user because it's convenient.  But it's not really proper.  What if, for example, badge was created?  Badge is not in state.

UserEdit is not really dynamic for deletion function.

Look into 1 - checking data type of database (if even possible) and having form input type matching data type.  2 - checking input and edit data against "Set" data, constraining range of responses.

Slice is used for entry.  This is bad practice, as edit and  -->

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). -->

# User App Front End

Use Navbar element at top to navigate between home, user index, and create new user views.

A full-stack application using front end actions to interact with back end that connects to database.

Some dynamic references and formatting applied.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

<!-- ### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
