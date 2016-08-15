import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      visits: [
        {
	  lat: 39.8252124,
	  lng: -86.1846707,
	  user: "Thomas Jefferson"
	}
      ]
    };
  }
});
