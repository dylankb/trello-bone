### Trello Clone

A clone of the Trello task-management app using Express, Backbone, Sass, and more. Only implements a subset of Trello's features.

#### Installation

- Clone repo
- Get server dependencies: From repository directory, run `npm install`
- Get client dependencies: Run `bower install`
- Compile templates: Run `handlebars views/templates/ -f public/javascripts/templatesCompiled.js`
- Run `npm start` and go to `localhost:3000` in your browser of choice

#### Notes

##### Making template changes

- This project uses [precompiled Handlebars templates](http://handlebarsjs.com/precompilation.html). Currently precompiling is a manual process, so if you make further changes to a `.handlebars` files run `handlebars views/templates/ -f public/javascripts/templatesCompiled.js` from the project directory.
