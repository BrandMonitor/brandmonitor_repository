Ext.define('Ext.System.SysHasLeftPanelExt', {
	extend: "Ext.panel.Panel",  
    requires: [
                
     ],
	alternateClassName: 'SysHasLeftPanelExt',
	layout: 'border',
	//baseCls:'ms-bg-light x-panel',
	record:null,
	border:false,
	SysCenterContentPanel:null,
	
	initComponent: function() {
		var me = this;
			
		Ext.define('leftDataviewStoreFieldsModel', {
			   extend: 'Ext.data.Model',
			   fields:['code','pcode', 'treepath', 'title','seat','url','icon','status','children','leaf','id','text','isIframe'],
			   idProperty:'code'
		});
		me.store = Ext.create('Ext.data.Store', {
			   model: 'leftDataviewStoreFieldsModel',
			   data: me.record.get("children"),
			   listeners:{
				    	load:function(treestore,node,record,su){
				    			alert(treestore.getCount());
				    	} 
					}
			    });
			
		me.dataview = Ext.create('Ext.view.View', {
			    deferInitialRefresh: false,
			    store: me.store,
			    tpl  : Ext.create('Ext.XTemplate',
				            '<tpl for=".">',
				                '<div class="phone">',
				                    '<span>{text}</span>',
				                '</div>',
				            '</tpl>'
				        ),
				id: 'leftPanel',
			    itemSelector: 'div.phone',
			    overItemCls : 'phone-hover',
			    multiSelect : true,
			    autoScroll  : true,
			    listeners: {
		            selectionchange: function(dv, nodes, object ){
		                	//DaemonUtil.floatip("",me.record);
		            	me.SysCenterContentPanel.dmLoader(nodes[0]);
		            },
	                render:function(){
	                	me.dataview.select(0);
	                }
		        }
		});	 
		
		var n_leftPanel = Ext.create('Ext.panel.Panel', {
			region: 'west',
			padding: '20px 0 0 0',
			baseCls:'ms-left-light x-panel',
			border: false,
		    //split:true,
		    //collapsible: true,
			width: 180,
			items:me.dataview
			   });
		
		/*var n_topPanel = Ext.create('Ext.panel.Panel', {
			region: 'south',
			baseCls:'ms-spacing-light',
			height: 1
		});*/
		me.SysCenterContentPanel = Ext.create('Ext.System.SysCenterContentPanel', {
				region: 'center',
				bodyCls:'ms-bg-light x-panel',
				border: false,
				   });
		Ext.apply(me,{
			items: [n_leftPanel,me.SysCenterContentPanel]
		});
		this.callParent(arguments);
	},
	destroyMethod:function(){
		var me = this;
		me.store.removeAll(true);
		me.destroy();
	}
});	