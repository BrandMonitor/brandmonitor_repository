Ext.define('Micro.user.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroUserMain',
	
	initComponent: function() {
		var me = this;
		
		var searchByName = Ext.create('Ext.form.field.Trigger', {
			 width:260,
		     editable:true,
		     emptyText:'请输入需要搜索的网站名称',
		     labelWidth:60,
		     labelAlign:'right',
			 fieldLabel:'网站名称',
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
		
		var statecomboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
					{"value":"valid", "name":"有效"},
					{"value":"invalid", "name":"无效"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    width: 220,
		    fieldLabel:'状态',
			labelWidth:60,
		    emptyText:'所有',
		    //value:'valid',
		    displayField: 'name',
		    valueField: 'value',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {state:null});
		    	me.DaemonContentPanel.dateStore.reload();
		    	statecomboBox.reset();
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {state:newValue});
		        	me.DaemonContentPanel.dateStore.reload();
		        }
		    }
		});
		
		var hiddenfieldForSoure=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield',inputId:'pkFkDoctorId', name: 'pkFkDoctorId' });
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['id','staffCode','qq', 'tel', 'userName','status','email','createTime'],
			storeIdProperty:'id',
			stateCode:'status',
			showAddBtn:false,
			showEditBtn:false,
			showDelBtn:false,
			showStatusBtn:false,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/home/del',
		    formUrl:contextPath+'/monitor/add',
			storeUrl:contextPath+'/admin/home/list',
			rightPanelToolBar:[],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
				         ,{header:'名字',dataIndex:'userName',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'登录帐号',dataIndex:'staffCode',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'QQ',dataIndex:'qq',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'手机',dataIndex:'tel',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'邮箱',dataIndex:'email',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'注册日期',dataIndex:'createTime',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 return Ext.Date.format(new Date(data), 'Y-m-d H:i:s');
					        }}}
				         ],
			daemonFormItems: [
                              {fieldLabel: '网站名称',name: 'name',allowBlank: true,inputId:'name',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
                              ,{fieldLabel: '网站地址',name: 'url',allowBlank: true,inputId:'url',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
			             ],
			listeners:{
				afterEditFormshow:function(theFormPage){
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
		    		if(records!=null&&records.length>0){
						changingImage.setSrc(records[0].get("portraitUrl"));
		    		}
				} 
			}
			});
		this.callParent(arguments);
	} 
});	