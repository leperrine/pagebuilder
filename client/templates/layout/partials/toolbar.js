Template.toolbar.helpers({
	
});

Template.toolbar.events({

	'click a#toggle-toolbar': function() {
		$('.ui.sidebar')
		.sidebar({
			'closable': false,
			'dimPage': false
		}).sidebar('toggle');

	},

});


Template.toolbar.onRendered(function(){

	$('.ui.accordion').accordion();

});