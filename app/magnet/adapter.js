import DS from 'ember-data';

export default DS.Adapter.extend({
  findRecord(store, type, id) {
    return { id };
  }
});
