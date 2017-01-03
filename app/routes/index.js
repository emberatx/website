import Ember from 'ember';
import fetch from "ember-network/fetch";

export default Ember.Route.extend({
  model() {
    return fetch('https://shielded-bayou-35314.herokuapp.com/').then(response => response.json());
  }
});
