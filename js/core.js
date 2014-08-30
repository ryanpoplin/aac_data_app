'use strict';
(function($) {
  Parse.initialize("QVQ9y2NgrPvf4AnkKCdtGgiqrrFErrRJNd9BdTi6", "itZhGux4XOLo5jkLBJVeNKpkJBRH2XSgLLdhAKmE");  
  var DefaultView;
  DefaultView = Backbone.View.extend({
    tagName: 'div',
    el: '#spa',
    template: _.template($('#default-view').html()),
    render: function() {
      $(this.el).html(this.template({}));
    }
  });
  var DataView;
  DataView = Backbone.View.extend({
    tagName: 'div',
    el: '#spa',
    template: _.template($('#data-view').html()),
    render: function() {
      $(this.el).html(this.template({}));
    }
  });
  var Router = Backbone.Router.extend({
    routes: {
      '': 'defaultViewRoute',
      'data': 'dataViewRoute'
    },
    defaultViewRoute: function() {
      var defaultView = new DefaultView;
      defaultView.render();
    },
    dataViewRoute: function() {
      var dataView = new DataView();
      dataView.render();
    }
  });
  $(function() {
    new Router;
    Backbone.history.start();
  });
}(jQuery));