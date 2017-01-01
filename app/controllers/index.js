import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  closestMeetup: Ember.computed.alias('model.data.firstObject'),
  meetupDate: Ember.computed('closestMeetup.time', function() {
    let utcSeconds = this.get('closestMeetup.time');

    return moment(utcSeconds).format('MMMM dddd Do, h:mm a');
  })
});
