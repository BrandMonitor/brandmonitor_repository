Ext.define('Ext.util.DaemonGridPanel', {
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
	panelPageSize:20,
	panelSorters:[],
	showState:true,
	stateChangeUrl:null,
	stateCode:null,
	border:false,
	   
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

		me.dateStore = Ext.create('Ext.data.Store', {
	        pageSize: me.panelPageSize,
	        model: 'DaemonGridFieldsModel',
	        remoteSort: true,
	        autoLoad: true,
	        proxy: {
	            type: 'ajax',
		        headers:{"Accept":"application/json","Content-Type":"text/html;charset=utf-8"},
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
	            		 if(rec.get(me.stateCode)==1){
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
			 border:false,
			 baseCls:'ms-bg-light x-panel',
			 store: me.dateStore,
			 columns:me.panelColumns,
			 //disableSelection: true,
		     loadMask: true,
		     bbar: Ext.create('Ext.PagingToolbar', {
		            store: me.dateStore,
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
	},
	reload:function(){
		var me = this;
		me.dateStore.reload();
	}
});	