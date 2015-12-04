Template.livePreview.helpers({
	
});

Template.livePreview.events({

});


Template.livePreview.onRendered(function(){

	var el = document.getElementById('preview-wrapper');
	var sortable = Sortable.create(el, {
		group: {
		    name: 'elements',
		    put: 'elements'
		  },
		  animation: 100,
		  scrollSpeed: 25,
	});

	//var editor = new MediumEditor('.editable', {
	 	//toolbar: {
	 		//buttons: ['bold', 'italic', 'underline', 'anchor', 'h1', 'h2', 'h3', 'quote']
	 	//}
	//});
 
    //$('.editable').mediumInsert({
        //editor: editor
    //});

	$('.editable').froalaEditor({
		toolbarInline: true,
		charCounterCount: false,
		initOnClick: true
	});

});