Ext.define('Micro.userphone.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroUserphoneMain',
	
	initComponent: function() {
		var me = this;
		
		var hiddenfieldForSoure=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield',inputId:'upId', name: 'upId' });
		
		var searchByName = Ext.create('Ext.form.field.Trigger', {
			 width:260,
		     editable:true,
		     emptyText:'模糊搜索标题，简介',
		     labelWidth:60,
		     labelAlign:'right',
			 fieldLabel:'搜索',
		     trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		     trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger',
		     onTrigger1Click:function(eventObj){
		    	 Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {name:null});
		         me.DaemonContentPanel.dateStore.reload();
		         searchByName.reset();
		     }, 
		     onTrigger2Click:function(eventObj){
		    	 newValue = this.getValue();
		    	 Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {name:newValue});
		         me.DaemonContentPanel.dateStore.reload();
		     },
		     listeners:{
		    	 specialkey: function(field, e){
	                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
	                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
	                    if (e.getKey() == e.ENTER) {
	                    	newValue = this.getValue();
	       		    	 	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {name:newValue});
	       		    	 	me.DaemonContentPanel.dateStore.reload();
	                    }
	                }
		     }
		});
		
		var statuscomboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
				    {"value":1, "name":"启用"},
					{"value":0, "name":"停用"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'状态',
		    value:"请选择",
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {state:null});
		    	me.DaemonContentPanel.dateStore.reload();
		    	statuscomboBox.reset();
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
		
		var imgWidth=160;
		var imgHeight=160;
		var appFile = Ext.create('Ext.util.DaemonFilePanel', {
			fieldLabel:'封面图片',
			formName:'appFile',
			width:imgWidth,
			height:imgHeight
		});
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['upId',"yulin","phone",'status',"createTime","remark"],
			storeIdProperty:'upId',
			stateCode:'status',
			showAddBtn:true,
			showEditBtn:false,
			showDelBtn:false,
			showStatusBtn:true,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/userphone/del',
		    formUrl:contextPath+'/admin/userphone/add',
			storeUrl:contextPath+'/admin/userphone/list',
			stateChangeUrl:contextPath+'/admin/userphone/status',
			rightPanelToolBar:[searchByName],
			saveBtnName:'保存',
			panelColumns:[
				 {xtype: 'rownumberer',width: 30,sortable: false }
				,{header:'自增id',dataIndex:'upId',sortable:false,hidden:false,flex:0.5,renderer:null}
				,{header:'用户遇邻号',dataIndex:'yulin',sortable:false,hidden:false,flex:2,renderer:null}
				,{header:'手机类别',dataIndex:'phone',sortable:false,hidden:false,flex:2,renderer:null}
			],
			daemonFormItems: [
				 hiddenfieldForSoure
				 ,{fieldLabel: '用户遇邻号',name: 'yulin',flex:3,allowBlank: true,inputId:'yulin',value:'',minLength:1,maxLength:30,regexText:'1-20个字符',blankText:'1~20个字符',labelStyle: 'font-weight:bold;padding:0'}
				 ,{fieldLabel: '手机类别',name: 'phone',flex:3,allowBlank: true,inputId:'phone',value:'',minLength:1,maxLength:30,regexText:'1-20个字符',blankText:'1~20个字符',labelStyle: 'font-weight:bold;padding:0'}
			],
			listeners:{
				afterEditFormshow:function(theFormPage){
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
					hiddenfieldForSoure.setValue(records[0].get("upId"));
				} ,
				afterAddFormshow:function(theFormPage){
				} 
			}
			});
		this.callParent(arguments);
	} 
});	