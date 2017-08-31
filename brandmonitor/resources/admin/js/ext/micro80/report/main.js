Ext.define('Micro.report.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroReportMain',
	
	initComponent: function() {
		var me = this;
		
		var interfaceComboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
				    {"value":'1', "name":"定位"},
					{"value":'2', "name":"登录"},
				    {"value":'3', "name":"登录日志"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'系统接口',
		    value:"",
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {state:null});
		    	me.DaemonContentPanel.dateStore.reload();
		    	interfaceComboBox.reset();
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {table:newValue});
		        	me.DaemonContentPanel.dateStore.reload();
		        }
		    }
		});
		
		var dateTypeComboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
				     {"value":'%Y', "name":"按年统计"}
					,{"value":'%Y-%c', "name":"按月统计"}
				    ,{"value":'%Y-%c-%d', "name":"按日统计"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'统计类型',
		    value:"",
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {state:null});
		    	me.DaemonContentPanel.dateStore.reload();
		    	dateTypeComboBox.reset();
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {dateType:newValue});
		        	me.DaemonContentPanel.dateStore.reload();
		        }
		    }
		});
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:["countDate","count"],
			stateCode:'status',
			showAddBtn:false,
			showEditBtn:false,
			showDelBtn:false,
			showStatusBtn:false,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/report/del',
		    formUrl:contextPath+'/admin/report/add',
			storeUrl:contextPath+'/admin/report/list',
			stateChangeUrl:contextPath+'/admin/report/status',
			rightPanelToolBar:[dateTypeComboBox, interfaceComboBox],
			saveBtnName:'保存',
			panelColumns:[
				 {xtype: 'rownumberer',width: 30,sortable: false }
				,{header:'统计日期',dataIndex:'countDate',sortable:false,hidden:false,flex:2,renderer:null}
				,{header:'统计数量',dataIndex:'count',sortable:false,hidden:false,flex:2,renderer:null}
			],
			daemonFormItems: [
			],
			listeners:{
				afterEditFormshow:function(theFormPage){
				} ,
				afterAddFormshow:function(theFormPage){
				} 
			}
			});
		this.callParent(arguments);
	} 
});	