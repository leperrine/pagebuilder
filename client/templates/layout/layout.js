Template.layout.helpers({
	
});

Template.layout.events({
	'dblclick': function () {
		$('.description').editable('destroy');
	},

	'click .description': function () {
		$('.description').editable({
		inlineMode: false,
		initOnClick: true,
		autoSave: true
		});
	},

});


Template.layout.onRendered(function(){
	

});