import Ember from 'Ember'

export default Ember.Component.extend({
  recipient: "foo",
  body: "bar",
  
  actions: {
    send() {
      debugger;
    }
  }
});
