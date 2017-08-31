Ext.define('Ext.System.SysCenterPanelExt', {
	extend: "Ext.panel.Panel",  
    requires: [
                
     ],
	alternateClassName: 'SysCenterPanelExt',
	//layout: 'border',
	layout: 'fit',
    region:'center',
    baseCls:'ms-bg-light x-panel',
    dataPanel:null,
	dataDestroyMethod:null,
	border:false,
	
    
	initComponent: function() {
		var me = this;
		this.callParent(arguments);
	},
	dmP:function(addPanel,destroyMethod){
		var me = this;
		if(me.dataPanel!=null){
			if(me.dataPanel.destroyMethod()){
				me.dataPanel.destroyMethod();
			}
			me.dataPanel.destroyMethod();
			me.dataPanel=null;
		}
		if(me.dataDestroyMethod!=null){
			me.dataDestroyMethod();
			me.dataDestroyMethod=null;
		}
		me.dataPanel=addPanel;
		me.dataDestroyMethod=destroyMethod;
		me.add(addPanel);
	}
});	