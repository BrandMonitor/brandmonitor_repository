Ext.define('Micro.offlineEventUsers.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroOfflineEventUsersMain',
	
	initComponent: function() {
		var me = this;
		
		var hiddenfieldForSoure=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield',inputId:'oeuId', name: 'oeuId' });
		
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
                    {"value":0, "name":"停用"},
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
		
		var genderComboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
                    {"value":1, "name":"男"},
                    {"value":2, "name":"女"},
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'性别',
		    value:"",
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {statusType:null});
		    	me.DaemonContentPanel.dateStore.reload();
		    	genderComboBox.reset();
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {gender:newValue});
		        	me.DaemonContentPanel.dateStore.reload();
		        }
		    }
		});
		
		var orderStatus = Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
                    {"value":0, "name":"已取消"},
                    {"value":1, "name":"已付款"},
                    {"value":2, "name":"退款中"},
                    {"value":3, "name":"已退款"},
                    {"value":4, "name":"待付款"},
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'订单状态',
			value:0,
		    name: 'status',
		    inputId:'status',
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {status:null});
		    	me.DaemonContentPanel.dateStore.reload();
		    	orderStatus.reset();
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {status:newValue});
		        	me.DaemonContentPanel.dateStore.reload();
		        }
		    }
		});
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['oeuId','oeyId','userImg','userName','yulin','orderId','tel'
			             ,'realName','status','createTime','remark','lastUpdateTime'
			],
			storeIdProperty:'oeuId',
			stateCode:'status',
			showAddBtn:false,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:false,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/offlineeventusers/del',
		    formUrl:contextPath+'/admin/offlineeventusers/add',
			storeUrl:contextPath+'/admin/offlineeventusers/list',
			stateChangeUrl:contextPath+'/admin/offlineeventusers/status',
			rightPanelToolBar:[statuscomboBox,genderComboBox,searchByName],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
						 ,{header:'自增id',dataIndex:'oeuId',sortable:false,hidden:false,flex:0.5,renderer:null}
						 ,{header:'活动id',dataIndex:'oeyId',sortable:false,hidden:false,flex:0.5,renderer:null}
						 ,{header:'用户头像',dataIndex:'userImg',sortable:false,hidden:false,flex:1,renderer:function(data,m,record,rindex,cindex){
					        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:30px;'>";
					        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 30px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
									"<img class='appPosition_img' width=30px; height=30px; src='"+data+"'>" +
									"</div>";
					        	 return img;
					         }}
				         ,{header:'遇邻昵称',dataIndex:'userName',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'遇邻号',dataIndex:'yulin',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'订单号',dataIndex:'orderId',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'联系电话',dataIndex:'tel',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'真实姓名',dataIndex:'realName',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'订单状态',dataIndex:'status',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 if(data == 4){
					    		 return '<font color="yellow">待付款</font>';
					    	 }else if(data == 1){
					    		 return '<font color="green">已付款</font>';
					    	 }else if(data == 2){
					    		 return '<font color="red">退款中</font>';
					    	 }else if(data == 3){
					    		 return '<font color="black">已退款</font>';
					    	 }else{
					    		 return '未知';
					    	 }
					        }}}
				         ,{header:'下单时间',dataIndex:'createTime',sortable:false,hidden:false,flex:2,renderer:function(data){
				        	 if(data!=null){
				        		 return Ext.Date.format(new Date(data), 'Y-m-d H:i:s');
					        }}}
				         ,{header:'最后更新时间',dataIndex:'lastUpdateTime',sortable:false,hidden:false,flex:2,renderer:function(data){
				        	 if(data!=null){
				        		 return Ext.Date.format(new Date(data), 'Y-m-d H:i:s');
					        }}}
				         ],
			daemonFormItems: [
			                  hiddenfieldForSoure,
			                  ,{
						            xtype: 'component',
						            html: '订单状态'
						      }
			                  ,orderStatus
			],
			listeners:{
				afterEditFormshow:function(theFormPage){
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
					hiddenfieldForSoure.setValue(records[0].get("oeuId"));
				} ,
				afterAddFormshow:function(theFormPage){
				} 
			}
			});
		this.callParent(arguments);
	} 
});	