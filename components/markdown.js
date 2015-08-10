import Ember from 'Ember'

export default Ember.Component.extend({
  html: Ember.computed('attrs.text', function() {
    let text = this.attrs.text || "";
    return Ember.String.htmlSafe(markdown.toHTML(text));
  });
});
