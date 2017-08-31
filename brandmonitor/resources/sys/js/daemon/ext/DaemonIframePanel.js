Ext.define('Ext.Daemon.DaemonIframePanel', {
	extend: "Ext.panel.Panel",  
    requires: [
                
     ],
	alternateClassName: 'DaemonIframePanel',
	layout: 'fit',
	 
	storeUrl:null,
	   
	initComponent: function() {
		var me = this;
		Ext.apply(me,{
			border: false,
            frame: false,
            autoScroll: true,
            html: "<iframe scrolling='yes' width='100%' height='100%'  frameborder='0' src='" + me.storeUrl + "'></iframe>"
		});
		this.callParent(arguments);
	},
	destroyMethod:function(){
		var me = this;
		me.destroy();
	}
});	