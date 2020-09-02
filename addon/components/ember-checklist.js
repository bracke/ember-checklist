import Ember from 'ember';

export default Ember.Component.extend({
	classNames: [ 'ember-checklist' ],
  columns: 1,
	ulStyle: Ember.computed('columns', function() {
    return Ember.String.htmlSafe(`column-count: ${this.get('columns')}; padding-left:0;`);
	}),
	liStyle: Ember.computed(function() {
    return Ember.String.htmlSafe(`display: block;`);
	}),
  didInsertElement() {
    //console.log('did insert element invoked');
  },
  willDestroyElement() {
    //console.log('will destroy invoked');
  },
	actions: {
	  alterRelation(relationExists, item) {
			if (relationExists) {
				this.get('selected').removeObject(item);
			} else {
				this.get('selected').pushObject(item);
			}
		}
	}
});
