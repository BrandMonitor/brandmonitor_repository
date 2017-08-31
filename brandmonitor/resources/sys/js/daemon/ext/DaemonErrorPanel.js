Ext.define('Ext.Daemon.DaemonErrorPanel', {
	extend: "Ext.panel.Panel",  
    requires: [
                
     ],
	alternateClassName: 'DaemonErrorPanel',
	message:dmlan.connectionfail,
	
	initComponent: function() {
		var me = this;
		Ext.apply(me,{
			layout: 'fit',
            html: "<div>"+me.message+"</div>"
		});
		this.callParent(arguments);
	},
	destroyMethod:function(){
		var me = this;
		me.destroy();
	}
});	