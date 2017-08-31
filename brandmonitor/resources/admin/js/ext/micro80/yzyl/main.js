Ext.define('Micro.yzyl.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroYzylMain',
	
	initComponent: function() {
		var me = this;
		
		var hiddenfieldForSoure=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield',inputId:'yzylId', name: 'yzylId' });
		
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
                    {"value":0, "name":"停用"},
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'状态类型',
		    value:1,
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {statusType:null});
		    	me.DaemonContentPanel.dateStore.reload();
		    	statuscomboBox.reset();
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {statusType:newValue});
		        	me.DaemonContentPanel.dateStore.reload();
		        }
		    }
		});
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['yzylId','yzylYulin','yzylUserName','yzylAge','yzylOcc','yzylTel','yzylIntroduction','yzylImg1','yzylImg2','yzylImg3','createTime','lastUpdateTime','remark','status'],
			storeIdProperty:'yzylId',
			stateCode:'status',
			showAddBtn:true,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:true,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/yzyl/del',
		    formUrl:contextPath+'/admin/yzyl/add',
			storeUrl:contextPath+'/admin/yzyl/list',
			stateChangeUrl:contextPath+'/admin/yzyl/status',
			rightPanelToolBar:[statuscomboBox,searchByName],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
						 ,{header:'自增id',dataIndex:'yzylId',sortable:false,hidden:false,flex:0.5,renderer:null}
				         ,{header:'遇邻号',dataIndex:'yzylYulin',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'用户名',dataIndex:'yzylUserName',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'年龄',dataIndex:'yzylAge',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'职业',dataIndex:'yzylOcc',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'电话',dataIndex:'yzylTel',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'简介',dataIndex:'yzylIntroduction',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'图片1',dataIndex:'yzylImg1',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'图片2',dataIndex:'yzylImg2',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'图片3',dataIndex:'yzylImg3',sortable:false,hidden:false,flex:2,renderer:null}
				         ],
			daemonFormItems: [
						hiddenfieldForSoure
						,{fieldLabel: '遇邻号',name: 'yzylYulin',flex:3,allowBlank: true,inputId:'yzylYulin',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '用户名',name: 'yzylUserName',flex:3,allowBlank: true,inputId:'yzylUserName',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '年龄',name: 'yzylAge',flex:3,allowBlank: true,inputId:'yzylAge',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '职业',name: 'yzylOcc',flex:3,allowBlank: true,inputId:'yzylOcc',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '电话',name: 'yzylTel',flex:3,allowBlank: true,inputId:'yzylTel',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '简介',name: 'yzylIntroduction',flex:3,allowBlank: true,inputId:'yzylIntroduction',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '图片1',name: 'yzylImg1',flex:3,allowBlank: true,inputId:'yzylImg1',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '图片2',name: 'yzylImg2',flex:3,allowBlank: true,inputId:'yzylImg2',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '图片3',name: 'yzylImg3',flex:3,allowBlank: true,inputId:'yzylImg3',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
						],
			listeners:{
				afterEditFormshow:function(theFormPage){
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
					hiddenfieldForSoure.setValue(records[0].get("yzylId"));
				},
				afterAddFormshow:function(theFormPage){
				} 
			}
			});
		this.callParent(arguments);
	} 
});	