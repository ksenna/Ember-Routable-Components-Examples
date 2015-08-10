import Ember from 'Ember'

export default Ember.Controller.extend({
  recipient: "foo",
  body: "bar",
  
  actions: {
    send() {
      debugger;
    }
  }
});
