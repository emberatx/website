import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.ajax({
      url: 'https://api.meetup.com/Ember-ATX/events?&sign=true&photo-host=public&page=1&page=1&status=upcoming',
      dataType: 'jsonp',
      success: function(response) {
        return response;
      }
    });
  }
});
