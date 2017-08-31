Ext.define('Micro.authentication.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroAuthenticationMain',
	
	initComponent: function() {
		var me = this;
		
		var hiddenfieldForSoure=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield',inputId:'autId', name: 'autId' });
		
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
		
		var realNameComboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
                    {"value":0, "name":"未认证"},
                    {"value":1, "name":"已认证"},
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'实名认证',
			value:0,
		    name: 'realName',
		    inputId:'realName',
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        }
		    }
		});
		var jobComboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
				        {"value":0, "name":"未认证"},
				        {"value":1, "name":"已认证"},
				        ]
			},
			editable:false,
			autoSelect:true,
			autoShow:true,
			fieldLabel:'工作认证',
			value:0,
			name: 'job',
			inputId:'job',
			displayField: 'name',
			valueField: 'value',
			labelStyle: 'font-weight:bold;padding:0',
			trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
			trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
			onTrigger1Click:function(eventObj){
			},
			listeners:{
				afterrender:function(me2,eOpts){
				},
				change:function(cb,newValue,oldValue){
				}
			}
		});
		
		var imgWidth=160;
		var imgHeight=160;
		var realNameUrlImage = Ext.create('Ext.util.DaemonImgPanel', {
			fieldLabel:'封面图片',
			formName:'realNameUrl',
			width:imgWidth,
			height:imgHeight
		});
		
		var jobUrlImage = Ext.create('Ext.util.DaemonImgPanel', {
			fieldLabel:'封面图片',
			formName:'jobUrl',
			width:imgWidth,
			height:imgHeight
		});
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['autId','yulin','realNameUrl','jobUrl','realName','job','createTime','lastUpdateTime','remark','status'],
			storeIdProperty:'autId',
			stateCode:'status',
			showAddBtn:true,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:true,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/authentication/del',
		    formUrl:contextPath+'/admin/authentication/add',
			storeUrl:contextPath+'/admin/authentication/list',
			stateChangeUrl:contextPath+'/admin/authentication/status',
			rightPanelToolBar:[statuscomboBox,searchByName],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
						 ,{header:'自增id',dataIndex:'autId',sortable:false,hidden:false,flex:0.5,renderer:null}
				         ,{header:'遇邻号',dataIndex:'yulin',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'图片',dataIndex:'realNameUrl',sortable:false,hidden:false,flex:1,renderer:function(data,m,record,rindex,cindex){
				        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:30px;'>";
				        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 30px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
								"<img class='appPosition_img' width=30px; height=30px; src='"+data+"'>" +
								"</div>";
				        	 return img;
				         }}
				         ,{header:'实名认证url',dataIndex:'realNameUrl',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'图片',dataIndex:'jobUrl',sortable:false,hidden:false,flex:1,renderer:function(data,m,record,rindex,cindex){
				        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:30px;'>";
				        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 30px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
								"<img class='appPosition_img' width=30px; height=30px; src='"+data+"'>" +
								"</div>";
				        	 return img;
				         }}
					     ,{header:'工作认证url',dataIndex:'jobUrl',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'是否实名',dataIndex:'realName',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 if(data==0){
					    		 return '未认证';
					    	 }else if(data==1){
					    		 return '<font color="#FF0000">已认证</font>';
					    	 }
					     }}}
					     ,{header:'是否有工作认证',dataIndex:'job',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 if(data==0){
					    		 return '未认证';
					    	 }else if(data==1){
					    		 return '<font color="#FF0000">已认证</font>';
					    	 }
					     }}}
				         ],
			daemonFormItems: [
						hiddenfieldForSoure
						,{fieldLabel: '遇邻号',name: 'yulin',flex:3,allowBlank: true,inputId:'yulin',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,realNameUrlImage
		                ,jobUrlImage
		                ,realNameComboBox
		                ,jobComboBox
						],
			listeners:{
				afterEditFormshow:function(theFormPage){
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
					hiddenfieldForSoure.setValue(records[0].get("autId"));
					realNameUrlImage.setSrc(records[0].get("realNameUrl"));
					jobUrlImage.setSrc(records[0].get("jobUrl"));
				},
				afterAddFormshow:function(theFormPage){
				} 
			}
			});
		this.callParent(arguments);
	} 
});	