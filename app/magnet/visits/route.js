import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      visits: [
        { latitude: 39.8252124, longitude: -86.1846707 }
      ]
    };
  }
});
