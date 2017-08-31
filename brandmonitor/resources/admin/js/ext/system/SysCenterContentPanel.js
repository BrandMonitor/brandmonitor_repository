Ext.define('Ext.System.SysCenterContentPanel', {
	extend: "Ext.panel.Panel",  
    requires: [
                
     ],
	alternateClassName: 'SysCenterContentPanel',
	layout: 'fit',
	region: 'center',
	border:false,
	dataPanel:null,
	dataPanelStore:null,
	dataDestroyMethod:null,
	loadPanel:null,
	   
	initComponent: function() {
		var me = this;
		Ext.apply(me,{
			loader : {
				scripts: true,
				success: function(theloader,response) {
				    me.fireEvent('urltabloadsuccess',me);
				},
				failure: function(theloader,response){
					me.fireEvent('urltabloadfail',me); 
				}
			}
		});
		this.callParent(arguments);
	},
	dmP:function(addPanel,destroyMethod){
		var me = this;
		if(me.dataPanel!=null){
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
	},
	dmLoader:function(record){
		var me = this;
		if(record.get("url")!=null&&record.get("url").length>0){
			me.loadPanel=me.getLoader().load({
    			method:'GET',
    			url: contextPath+record.get("url"),
    			listeners:{
		        	load:function(thisme, response, options, eOpts){
		        	}
    			}
    		});	
			me.getLoader().on('load',function(thisme, response, options, eOpts) {
				
			});
		}
	},
	contentPanelReload:function(){
		var me=this;
		if(me.DaemonContentPanel.dateStore!=null){
			me.DaemonContentPanel.dateStore.reload();
		}
	}
});	