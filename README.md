### Trello-Bone

A clone of the Trello task-management app using Express, Backbone, Sass, and more. Implements CRUD actions on cards and lists as well as drag-n-drop.

#### Installation

- Clone repo
- Navigate with your terminal to the newly cloned folder, and run the following commands:
- Get server dependencies: Run `npm install`
- Get client dependencies: Run `bower install`
- Compile templates: Run `handlebars views/templates/ -f public/javascripts/templatesCompiled.js`
- Run `npm start` and go to `localhost:3000` in your browser of choice

#### Notes

##### Making template changes

- This project uses [precompiled Handlebars templates](http://handlebarsjs.com/precompilation.html). Currently precompiling is a manual process, so if you make further changes to a `.handlebars` files run `handlebars views/templates/ -f public/javascripts/templatesCompiled.js` from the project directory.
