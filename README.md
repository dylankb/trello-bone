### Trello Clone

A clone of the Trello task-management app using Express, Backbone, Sass, and more. Only implements a subset of Trello's features.

#### Installation

- Clone repo
- In repository directory, run `npm install`
- Run `npm start` and got to `localhost:3000` in your browser of choice

#### Notes

##### Making template changes

- This project uses [precompiled Handlebars templates](http://handlebarsjs.com/precompilation.html). Currently precompiling is a manual process, so if you change one of the .handlebars files, from the project directory run `handlebars views/templates/ -f public/javascripts/templatesCompiled.js`.
