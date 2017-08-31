Ext.define('Ext.Daemon.DaemonTreePanel', {
	extend: "Ext.tree.Panel",  
    requires: [
                
     ],
	alternateClassName: 'DaemonTreePanel',
	layout: 'fit',
	treestore:null,

	storeDefaultRootProperty:null,
	storeFields:null,
	storeIdProperty:null,
	storeUrl:null,
	panelColumns:null,
	panelTabr:null,
	stateChangeUrl:null,
	   
	initComponent: function() {
		var me = this;
		
		daemon.dateStore= Ext.create('Ext.data.TreeStore', {
			defaultRootProperty:me.storeDefaultRootProperty,
			autoLoad: true,
			fields:me.storeFields,
			idProperty:me.storeIdProperty,
			proxy: {
		         type: 'ajax',
		         headers:{"Accept":"application/json"},
		         method:'GET',
		         reader: {
				     type: 'json'
				     //,root: 'list'
				 },
				 url:me.storeUrl,
			     listeners:{
			        exception:function( theproxy, response, operation, options ){
			        	}
			     }
		     }
		});
		Ext.apply(me,{
			store: daemon.dateStore,
			//loadMask: true,
			rowLines:true,
	        useArrows: true,
	        rootVisible: false,
	        multiSelect: false,
	        //columnLines:true,
	        //singleExpand: true,
		    columns:me.panelColumns
		});
		
		
		
		this.callParent(arguments);
	},
	destroyMethod:function(){
		var me = this;
		me.treestore=null;
		me.destroy();
	}
});	