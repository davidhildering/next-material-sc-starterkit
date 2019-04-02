# next-material-sc-starterkit

A (responsive) starter-kit build with Next.Js, Material-UI and Styled-Components. Easy to deploy a production build on Heroku. 
Build with some dummy components as a landingpage, but you can customise/delete/adjust all the components.

how to start:
1. Copy the repo.
2. npm i
3. npm run dev -> will start your localhost

#build: 
this app is configured to be build on heroku; just connect this app in your repo with heroku and build the application.

#Nodemon: 
Added for hot-reloading if you add dynamic routes.


#Google-analytics: 
replace 'UA-XXXXXXXX-X'' with your google ID inside pages/_document.js and helpers/index.js 

COOKIE CONSENT ALERT:
react-cookie-consent: https://www.npmjs.com/package/react-cookie-consent

TESTING:
testing can be done with JEST and enzyme. Some examples can be found in de components directory. Warning: don't add any tests in the pages directory,
this might interfere with the 'next export' function if you need to add that.


GRID:
This app uses react-grid-system. documentation can be found here: https://github.com/JSxMachina/react-grid-system

Hamburger Menu:
react-animated-burgers : https://www.npmjs.com/package/react-animated-burgers


Responsive modal: 
react-responsive-modal 

smooth scrolling:
react-scrollchor

