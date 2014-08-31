'use strict';
(function($) {
  var logicGate = true;
  Parse.initialize("QVQ9y2NgrPvf4AnkKCdtGgiqrrFErrRJNd9BdTi6", "itZhGux4XOLo5jkLBJVeNKpkJBRH2XSgLLdhAKmE");  
  var LogInView;
  LogInView = Backbone.View.extend({
    tagName: 'div',
    el: '#default-template-section',
    template: _.template($('#log-in-template').html()),
    events: {
      'click .new-account': 'signUpRender'
    },
    render: function() {
      logicGate = true;
      $(this.el).html(this.template({}));
    },
    signUpRender: function() {
      logicGate = false;
      var signUpView = new SignUpView({});  
      signUpView.render();
      $(defaultView.el).append(logInView.$el);
    }
  });
  var SignUpView;
  SignUpView = Backbone.View.extend({
    tagName: 'div',
    el: '#default-template-section',
    template: _.template($('#sign-up-template').html()),
    render: function() {
      logicGate = false;
      $(this.el).html(this.template({}));
    },
    loginInRender: function() {
      logicGate = true;
      var logInView = new logInView({});  
      logInView.render();
      $(defaultView.el).append(signUpView.$el);
    }
  });
  var DefaultView;
  DefaultView = Backbone.View.extend({
    tagName: 'div',
    el: '#spa',
    logIn: '#default-template-section',
    signUp: '#default-template-section',
    template: _.template($('#default-template').html()),
    render: function() {
      // if (logicGate) {
        $(this.el).html(this.template({}));
        var logInView = new LogInView({});  
        logInView.render();
        $(this.logIn).append(logInView.$el);
      /*} else {
        $(this.el).html(this.template({}));
        var signUpView = new SignUpView({});  
        signUpView.render();
        $(this.signUp).append(signUpView.$el);
      }*/
  });
  var DataView;
  DataView = Backbone.View.extend({
    tagName: 'div',
    el: '#spa',
    template: _.template($('#data-template').html()),
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