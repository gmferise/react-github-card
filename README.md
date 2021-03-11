# Overview
For this assessment, you will build an app using the following concepts:

* State
* Event Handlers
* Fetch
* Conditional Rendering
* Component Library
* create-react-app

For the past couple of assessments, we have been giving you a scaffold project for you to fork and clone, however, you will build this project from scratch using create-react-app. You will also practice using a component library. For more on why we use component libraries, [see here](https://medium.com/@timurcatakli/why-should-you-use-a-react-component-library-for-your-project-aa530a05e038).

# Getting Started
**Part 1 - Create a Button with a Basic Event Handler**

1. Create an App using create-react-app
1. Spin up your app and view it in the browser to make sure it works
1. Clear out the default content of the return statement for the App component.
1. Render a button element in your App Component
1. Add a handleToggle function to your App Component
  * Add the handleToggle function to your button's click event
  * We recommend having the handler console.log() to verify it is hooked up correctly

*At this point, you should have a simple button that will fire a console.log when clicked.*

**Part 2 - Get Data from the Github API and Update State**

1. Add 2 state variables to your app: user: {} and active: false
1. In your handleToggle event handler, create a fetch that performs a GET request on this url
  * `https://api.github.com/users/a-github-username`
  * Note: be sure to replace `a-github-username` with an actual username
1. Update state with the result of this fetch

*At this point, when you click the button it should add the Github information to state. (Use React Dev Tools Chrome Extension to verify)*

**Part 3 - Render Github User Info on the Page**

1. Use conditional rendering to display the Github user information from state once the button is clicked
1. Specifically Render:
  * Your profile image using **avatar_url**
  * Your **name**
  * At least 2 other pieces of information from the Github user information.

1. Make sure that when you click your button it toggles between showing the user information and hiding the information.
  * *hint: this is where the "active" state variable could be useful*

*At this point the core functionality of your app should align with the final product video at the bottom of this page. Namely, a button that toggles showing your information on the page.*

**Part 4 - Component Library**

You must use a component library. You can use any component library you like, however, it should have components that you can actually use for this assessment. The component libraries below are some great options. They have a component called "Card" that you should highly consider using for this assessment. Also, "Button" component is another good one for this assessment.

* [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/)
* [Material-UI](https://material-ui.com/)

# Happy Hacking!!
Example Final Product:

[https://s3.us-east-2.amazonaws.com/files.kenzie.academy/frontend-q2/github-card.mp4](https://s3.us-east-2.amazonaws.com/files.kenzie.academy/frontend-q2/github-card.mp4)

**Stretch Goals**

* Add a new section to the page that contains a form with an input box. The input box should ask for a Github username. After the user types in a Github username and submits the form, then it should display a card (should look the same as the one created in Part 3) with that users information. The form can be resubmitted anytime with a new username and it should continue to display the card but with the new users information. Note: for this bonus feature, you should try to re-use the jsx you already wrote for the card from Part 3. You can easily re-use this jsx by creating a named component containing that jsx. A possible name could be "GithubCard".

===

Author: Gavin Ferise

References: 
1. https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
1. https://react-bootstrap.github.io/components/forms/#forms-validation
1. Regex in NameForm.js based on https://github.com/shinnn/github-username-regex
1. https://hackernoon.com/creating-callable-objects-in-javascript-d21l3te1