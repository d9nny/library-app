import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';

export default Model.extend({
  email: attr('string'),
  message: attr('string'),

  hasValidEmailAddress: Ember.computed.match('email', /^.+@.+\..+$/),
	hasEnteredMessage: Ember.computed.notEmpty('message'),
	
	isEnabled: Ember.computed.and('hasValidEmailAddress', 'hasEnteredMessage'),
	isDisabled: Ember.computed.not('isEnabled')

});
