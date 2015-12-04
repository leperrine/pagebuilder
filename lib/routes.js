FlowRouter.route('/', {
	name: 'pageBuilder',
	action() {
		BlazeLayout.render('pageBuilder');
	}
});