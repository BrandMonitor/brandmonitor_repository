Ext.define('Ext.util.DaemonAliyunFilePanel', {
	extend: "Ext.window.Window",  
    requires: [
                
     ],
	alternateClassName: 'DaemonAliyunFilePanel',
	height: 400,
	width: 600,
	layout: {
        type: 'border'
    },
    isForm:true,
    formMe:null,
    formKey:null,
    objectMe:null,
    listUrl:'/admin/file/getList',
    uploadUrl:'/admin/file/upload',
    imgWidth:0,
    imgHeight:0,
    visit:'/mnt/img/head/',
    border:false,
	
	initComponent: function() {
		var me = this;
		var home=me.visit;
		
		var refresh = Ext.create('Ext.button.Button', {
			iconCls:'daemon-btn-refresh',
			xtype:'button',
			text:dmlan.refresh,
			handler:function(){
				dateStore.reload();
			}
		});
		var homeBtn = Ext.create('Ext.button.Button', {
			iconCls:'daemon-btn-home',
			xtype:'button',
			text:'返回',
			handler:function(){
				dateStore.reload();
			}
		});
		var close = Ext.create('Ext.button.Button', {
			iconCls:'daemon-btn-close',
			xtype:'button',
			text:'关闭',
			handler:function(){
				me.destroy();
			}
		});
		
		var show=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
					{"value":1, "name":"是"},
					{"value":0, "name":"否"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'是否显示水印',
		    value:0,
		    name: 'show',
		    inputId:'show',
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    	//Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {state:null});
		    	//me.DaemonContentPanel.dateStore.reload();
		    	//statecomboBox.reset();
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        	//Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {state:newValue});
		        	//me.DaemonContentPanel.dateStore.reload();
		        }
		    }
		});
		
		var size=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
				    {"value":5, "name":"普通图片（小于500k）"},
				    {"value":10, "name":"动态图片（小于1000k）"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'图片大小限制',
		    value:5,
		    name: 'size',
		    inputId:'size',
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    	//Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {state:null});
		    	//me.DaemonContentPanel.dateStore.reload();
		    	//statecomboBox.reset();
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        	//Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {state:newValue});
		        	//me.DaemonContentPanel.dateStore.reload();
		        }
		    }
		});
		
		var fileEditBtn = Ext.create('Ext.button.Button', {
			iconCls:'daemon-btn-file',
			xtype:'button',
			text: '文件上传',
			handler:function(){
				var layout = fPanel.getLayout();
	            layout.setActiveItem(1);
			}
		});
		
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
				url: contextPath+me.listUrl,
				extraParams: {
					visit:me.visit,
					width:me.imgWidth,
					height:me.imgHeight
                } 
	        } 
	    });
		
		var panel=Ext.create('Ext.grid.Panel', {
		    title: '请双击选择一个文件',
		    store: dateStore,
		    //region: 'center',
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
		    
		    //tbar:[homeBtn,refresh,close,fileEditBtn],
		    tbar:[close],
		    
		    listeners:{
		    	celldblclick:function( thisMe, td, cellIndex, record, tr, rowIndex, e, eOpts ){
		    		if(record.get("leaf")){
		    			    me.fireEvent('celldblclickCallBack',record.get("path"),record.get("width"),record.get("height"),thisMe, td, cellIndex, record, tr, rowIndex, e, eOpts);
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
		me.addEvents('celldblclickCallBack');
		
		var customPanel=Ext.create('Ext.util.DaemonCustomPanel', {
		    //html: '<p>请点击上面的"选择文件"按钮，选择一个文件并上传，其他功能制作中。。。</p>' ,
		    //leftPanelToolBar:[fileBtn],
			title:'图片上传',
			border: true,
			url:contextPath+me.uploadUrl,
			isAnimate:false,
			visit:me.visit,
		    daemonFormItems: [
		    	{fieldLabel: '请选择一个图片',xtype: 'filefield',name: 'img',msgTarget: 'side',allowBlank: false,buttonText: '选择文件',labelStyle: 'font-weight:bold;padding:0'},
		    	show,
		    	size
		    	],
		    listeners:{
		    	CustomBackBtnClick:function(){
		    		 me.destroy();
				},
				CustomUpdateSuccess:function(form, action){
					//dateStore.reload();
					//var layout = fPanel.getLayout();
			        //layout.setActiveItem(0);
					var result=Ext.decode(action.response.responseText);
					me.fireEvent('celldblclickCallBack',result.message,result.width,result.height);
    			    if(me.isForm){
    			    	me.formMe.setValues([{id:me.formKey,value:result.message}]);
    			    }else{
    			    	me.objectMe.setValue(result.message);
    			    }
    			    me.destroy();
				}
		    }
		});
		
		var fPanel=Ext.create('Ext.panel.Panel', {
			layout: 'card',
			region: 'center',
			border:false,
			items: [customPanel]
		});
		Ext.apply(me,{
			items: [fPanel]
		});
		this.callParent(arguments);
	},
	destroyMethod:function(){
		var me = this;
		me.destroy();
	}
});	