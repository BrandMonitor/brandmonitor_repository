Ext.define('Ext.Daemon.ContentPanel', {
	extend: "Ext.panel.Panel",  
    requires: [
                
     ],
	alternateClassName: 'ContentPanel',
	layout: 'border',
	region: 'center',
	margins: '0 5 0 0',
	//border: false,
    isForm:true,
    formMe:null,
    formKey:null,
    objectMe:null,
    visit:'file/firmware/',
	   
	initComponent: function() {
		var me = this;
		Ext.define('FileGridFieldsModel', {
	        extend: 'Ext.data.Model',
	        fields:['id','text', 'path', 'absolutepath','size','type','leaf'],
	        idProperty: 'id'
	    });
		var dateStore = Ext.create('Ext.data.Store', {
	        pageSize: me.panelPageSize,
	        model: 'FileGridFieldsModel',
	        remoteSort: true,
	        autoLoad: true,
	        proxy: {
	            type: 'ajax',
		        headers:{"Accept":"application/json"},
		        method:'GET',
		        reader: {
				    type: 'json' 
				},
				url: contextPath+'/mgr/file/getList',
				extraParams: {
					visit:me.visit
                } 
	        } 
	    });
		var dMNavigatePicker = Ext.create('Daemon.util.DMNavigatePicker', {
			
		});
		
		
		var panel=Ext.create('Ext.grid.Panel', {
		   // title: '请双击选择一个文件',
		    store: dateStore,
		    border: false,
		    region: 'center',
		    columns: [
		       {    header:'类型',
		            menuDisabled: true,
		            sortable: false,
		            align: 'center',
		            xtype: 'actioncolumn',
		            width: 60,
		            items: [{
		            	 getClass: function(v, meta, rec) { 
		            		 if(rec.get("leaf")){
		            			 this.items[0].tooltip =dmlan.statuson;
			                     return 'daemon-btn-file2';
		            		 }else{
		            			 this.items[0].tooltip =dmlan.statusoff;
			                     return 'daemon-btn-dir';
		            		 }
		                 }
		            }]}
			   ,{header:'文件名称',dataIndex:'text',sortable:false,hidden:false,flex:1,renderer:null}
			   ,{header:'文件路径',dataIndex:'path',sortable:false,hidden:false,flex:2,renderer:null}
			  // ,{header:'文件路径',dataIndex:'absolutepath',sortable:false,hidden:false,flex:0.5,renderer:null}
			  // ,{header:'文件大小',dataIndex:'size',sortable:false,hidden:false,flex:0.5,renderer:null}
			  // ,{header:'文件类型',dataIndex:'type',sortable:false,hidden:false,flex:0.5,renderer:null}
		    ],
		    tbar:[
		          dMNavigatePicker
		          ],
		    listeners:{
		    	celldblclick:function( thisMe, td, cellIndex, record, tr, rowIndex, e, eOpts ){
		    		if(record.get("leaf")){
		    			    if(me.isForm){
		    			    	me.formMe.setValues([{id:me.formKey,value:record.get("path")}]);
		    			    }else{
		    			    	me.objectMe.setValue(record.get("path"));
		    			    }
		    			    me.destroy();
		    		}else{
		    			//DaemonUtil.alert(dmlan.tip,"不能选择文件夹");
		    			Ext.apply(dateStore.proxy.extraParams, {visit:me.visit+record.get("text")+"/"});
			        	dateStore.reload();
		    		}
					
				}
			}
		});
		Ext.apply(me,{
			items: [panel]
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
	}
});	