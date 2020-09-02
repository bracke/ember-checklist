import Ember from 'ember';

export default Ember.Helper.helper((params, { selected, item }) => {
	var result = false;
	if (selected) {
		selected.forEach(data => {
			if (data === item) {
				result = true;
			}
		});
	}
	return result;
});
