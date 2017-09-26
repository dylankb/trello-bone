var path = require('path');
var fs = require('fs');
var filePath = path.resolve(path.dirname(__dirname), 'data/lists.json');

module.exports = {
  __readFile: function() {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  },
  get: function() {
    return this.__readFile().data;
  },
  getLastId: function() {
    return this.__readFile().last_id;
  },
  getLastPosition: function() {
    return this.__readFile().last_position;
  },
  set: function(data, options) {
    data.id = this.getLastId();
    if (options.incrementId) { data.id += 1; }
    fs.writeFileSync(filePath, JSON.stringify({
      last_id: data.id,
      data: data,
    }), 'utf8');
  },
};
