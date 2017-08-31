Ext.define('Ext.util.DaemonPanelPanel', {
	extend: "Ext.panel.Panel",  
    requires: [
                
     ],
	alternateClassName: 'DaemonPanelPanel',
	layout: 'fit',
	   
	initComponent: function() {
		var me = this;
		
		
		Ext.apply(me,{
			border:false,
			baseCls:'ms-bg-light x-panel',
		});
		this.callParent(arguments);
	},
	destroyMethod:function(){
		var me = this;
		me.destroy();
	}
});	