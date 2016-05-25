import Ember from 'ember';

export default Ember.Controller.extend({

	email: '',

	message: '',

	hasValidEmailAddress: Ember.computed.match('email', /^.+@.+\..+$/),
	hasEnteredMessage: Ember.computed.notEmpty('message'),
	
	isEnabled: Ember.computed.and('hasValidEmailAddress', 'hasEnteredMessage'),
	isDisabled: Ember.computed.not('isEnabled'),

	actions: {

		saveMessage() {
			this.set('responseMessage', `Thank you, your message has been sent. We will get back to you as soon as possible.`);
			this.set('email', '');
			this.set('message', '');
		}
	}

});
