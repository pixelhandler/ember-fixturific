module.exports = function(app) {
  var express = require('express');
  var colorsRouter = express.Router();
  var endpoint = '/api/colors';
  var json = require('../../fixtures' + '/api/colors');

  colorsRouter.get('/', function(req, res) {
    res.send(JSON.stringify(json));
  });

  colorsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  colorsRouter.get('/:id', function(req, res) {
    var color = json.colors.filter(function(color) {
      return color.id === parseInt(req.params.id, 10);
    });
    res.send(JSON.stringify({ "colors": color }));
  });

  colorsRouter.put('/:id', function(req, res) {
    var color = json.colors.filter(function(color) {
      return color.id === parseInt(req.params.id, 10);
    });
    res.send(JSON.stringify({ "colors": color }));
  });

  colorsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use(endpoint, colorsRouter);
};
