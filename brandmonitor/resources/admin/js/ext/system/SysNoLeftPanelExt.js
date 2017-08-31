Ext.define('Ext.System.SysNoLeftPanelExt', {
	extend: "Ext.panel.Panel",  
    requires: [
                
     ],
	alternateClassName: 'SysNoLeftPanelExt',
	
	layout: 'fit',
	baseCls:'ms-bg-light x-panel',
	
	initComponent: function() {
		var me = this;
		
		me.DaemonSaveBtn = Ext.create('Ext.button.Button', {
			iconCls:'daemon-btn-save',
			xtype:'button',
			text:dmlan.save,
			listeners:{
				click:function(){
				}
			}
		});
		me.DaemonSaveBtn2 = Ext.create('Ext.button.Button', {
			iconCls:'daemon-btn-save',
			xtype:'button',
			text:dmlan.save,
			listeners:{
				click:function(){
				}
			}
		});
		Ext.apply(me,{
			 tbar:[me.DaemonSaveBtn],
			 html:"message"
		});
		this.callParent(arguments);
	},
	destroyMethod:function(){
		var me = this;
		me.destroy();
	}
});	