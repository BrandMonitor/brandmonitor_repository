Ext.define('Ext.Daemon.DaemonGridPanel', {
	extend: "Ext.grid.Panel",  
    requires: [
                
     ],
	alternateClassName: 'DaemonGridPanel',
	layout: 'fit',
	gridstore:null,
	
	storeDefaultRootProperty:null,
	storeFields:null,
	storeIdProperty:null,
	storeUrl:null,
	panelColumns:null,
	panelTabr:null,
	panelTotalProperty:'recordCount',
	panelPageSize:50,
	panelSorters:[],
	showState:true,
	stateChangeUrl:null,
	stateCode:null,
	   
	initComponent: function() {
		var me = this;
		
		/*me.gridstore=Ext.create('Ext.data.Store', {
		    fields:['name', 'email', 'phone'],
		    autoLoad: true,
		    proxy: {
		         type: 'ajax',
		         headers:{"Accept":"application/json"},
		         method:'GET',
		         reader: {
				     type: 'json'
				     //,root: 'list'
				 },
				 url:contextPath+dmsetting.urls.menu,
			     listeners:{
			        exception:function( theproxy, response, operation, options ){
			        	}
			     }
		     }
		});*/
		
		Ext.define('DaemonGridFieldsModel', {
	        extend: 'Ext.data.Model',
	        fields: me.storeFields,
	        idProperty: me.storeIdProperty
	    });

		daemon.dateStore = Ext.create('Ext.data.Store', {
	        pageSize: me.panelPageSize,
	        model: 'DaemonGridFieldsModel',
	        remoteSort: true,
	        autoLoad: true,
	        proxy: {
	            type: 'ajax',
		        headers:{"Accept":"application/json"},
		        method:'GET',
		        reader: {
				    type: 'json',
				    root:'listPageObject',
		            totalProperty: me.panelTotalProperty
				},
				url: me.storeUrl,
	            simpleSortMode: true
	        },
	        sorters: me.panelSorters
	    });

		if(me.showState){
			me.panelColumns.push({
				header:dmlan.status,
	            menuDisabled: true,
	            sortable: false,
	            align: 'center',
	            xtype: 'actioncolumn',
	            width: 60,
	            items: [{
	            	 getClass: function(v, meta, rec) { 
	            		 if(rec.get(me.stateCode)=="valid"){
	            			 this.items[0].tooltip =dmlan.statuson;
		                     return 'daemon-btn-statuson';
	            		 }else{
	            			 this.items[0].tooltip =dmlan.statusoff;
		                     return 'daemon-btn-statusoff';
	            		 }
	            		
	                 }
	            }]
	        });
		}
		
		
		Ext.apply(me,{
			 store: daemon.dateStore,
			 columns:me.panelColumns,
			 //disableSelection: true,
		     loadMask: true,
		     bbar: Ext.create('Ext.PagingToolbar', {
		            store: daemon.dateStore,
		            displayInfo: true,
		            displayMsg: '第  {0} - {1} 条数据，共  {2} 条数据',
		            emptyMsg: "查询不到数据"
		        }),
		});
		this.callParent(arguments);
	},
	destroyMethod:function(){
		var me = this;
		me.gridstore.removeAll(true);
		me.destroy();
	}
});	