Template.layout.helpers({
	
});

Template.layout.events({

	'click .segment': function (e) {
		$('.segment').editable({
		inlineMode: true,
		initOnClick: true,
		autoSave: true
		});

		$('#preview-wrapper').sortable('disable');
	},

	'dblclick .canvas': function () {
		$('#preview-wrapper').sortable('enable', {
			cursor: 'move'
		});
		$('.segment').editable('destroy');
	},

});


Template.layout.onRendered(function(){
	$('#preview-wrapper').sortable({
		cursor: 'move'
	});

});