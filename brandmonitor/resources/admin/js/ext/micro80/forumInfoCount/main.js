Ext.define('Micro.forumInfoCount.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroForumInfoCountMain',
	
	initComponent: function() {
		var me = this;
		
		var countTimecomboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
                    {"value":"", "name":"选择统计日期"},
                    {"value":1, "name":"按<font color='blue'>天</font>统计"},
                    {"value":2, "name":"按<font color='blue'>周</font>统计"},
                    {"value":3, "name":"按<font color='blue'>月</font>统计"},
                    {"value":4, "name":"按<font color='blue'>季</font>统计"},
                    {"value":5, "name":"按<font color='blue'>年</font>统计"},
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'状态类型',
		    value:"",
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {countTime:null});
		    	me.DaemonContentPanel.dateStore.reload();
		    	countTimecomboBox.reset();
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {countTime:newValue});
		        	me.DaemonContentPanel.dateStore.reload();
		        }
		    }
		});
		
		var yulin = Ext.create('Ext.form.field.Trigger', {
			 width:260,
		     editable:true,
		     emptyText:'遇邻号搜索',
		     labelWidth:60,
		     labelAlign:'right',
			 fieldLabel:'搜索',
		     trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		     trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger',
		     onTrigger1Click:function(eventObj){
		    	 Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {yulin:null});
		         me.DaemonContentPanel.dateStore.reload();
		         yulin.reset();
		     }, 
		     onTrigger2Click:function(eventObj){
		    	 newValue = this.getValue();
		    	 Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {yulin:newValue});
		         me.DaemonContentPanel.dateStore.reload();
		     },
		     listeners:{
		    	 specialkey: function(field, e){
	                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
	                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
	                    if (e.getKey() == e.ENTER) {
	                    	newValue = this.getValue();
	       		    	 	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {yulin:newValue});
	       		    	 	me.DaemonContentPanel.dateStore.reload();
	                    }
	                }
		     }
		});
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['forumCount','forumReplyCount','forumReplyMutualCount','allCount'],
			storeIdProperty:'id',
			stateCode:'status',
			showAddBtn:false,
			showEditBtn:false,
			showDelBtn:false,
			showStatusBtn:false,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/forumInfoCount/del',
		    formUrl:contextPath+'/admin/forumInfoCount/add',
			storeUrl:contextPath+'/admin/forumInfoCount/list',
			stateChangeUrl:contextPath+'/admin/forumInfoCount/status',
			rightPanelToolBar:[countTimecomboBox,yulin],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
				         ,{header:'发帖数',dataIndex:'forumCount',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'楼层数',dataIndex:'forumReplyCount',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'回复数',dataIndex:'forumReplyMutualCount',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'合计数',dataIndex:'allCount',sortable:false,hidden:false,flex:2,renderer:null}
				         ],
			daemonFormItems: [
						],
			listeners:{
				afterEditFormshow:function(theFormPage){
				},
				afterAddFormshow:function(theFormPage){
				} 
			}
			});
		this.callParent(arguments);
	} 
});	