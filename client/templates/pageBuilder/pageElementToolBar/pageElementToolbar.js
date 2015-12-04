Template.pageElementToolbar.helpers({

	
});

Template.pageElementToolbar.events({

	'click #toggle-element-toolbar': function() {
		$('.ui.sidebar.right')
		.sidebar({
			'closable': false,
			'dimPage': false
		})
		.sidebar('setting', 'transition', 'overlay')
		.sidebar('toggle');

		$('div.show-elements').toggleClass('hide-elements');
	},

});


Template.pageElementToolbar.onRendered(function(){

	var el = document.getElementById('page-elements');
	var sortable = Sortable.create(el, {
		group: {
		    name: 'elements',
		    pull: 'clone',
		    put: false,
		  },
		  animation: 1000,
	});

});