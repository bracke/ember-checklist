import Ember from 'ember';

export default Ember.Helper.helper((params, { property, item }) => {
	if (property === null || property === undefined) {
		return item;
	}
	return item.get(property.toString());
});
