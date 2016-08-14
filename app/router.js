import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('magnet:magnet_id', function() {
    this.route('visits');
  });
});

export default Router;
