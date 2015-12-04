Template.topMenu.helpers({
	
});

Template.topMenu.events({

	'click #toggle-menu': function() {
		$('.ui.menu.sidebar')
		.sidebar({
			'closable': false,
			'dimPage': false
		}).sidebar('toggle');

	},

});


Template.topMenu.onRendered(function(){


});