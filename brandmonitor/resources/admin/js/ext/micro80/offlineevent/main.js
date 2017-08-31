Ext.define('Micro.offlineevent.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroOfflineeventMain',
	
	initComponent: function() {
		var me = this;
		
		var htmlEditor = Ext.create('Ext.util.DaemonHtmlEditor', {
			readOnly:false,
			name:'htmlContent',
			margin:'0 10 10 0',
			flex:2
		});
		
		var hiddenfieldForSoure=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield',inputId:'offlineEventId', name: 'offlineEventId' });
		
		var searchByName = Ext.create('Ext.form.field.Trigger', {
			 width:260,
		     editable:true,
		     emptyText:'模糊搜索标题，内容',
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
		
		
		var imgWidth=500;
		var imgHeight=500;
		var changingImage = Ext.create('Ext.util.DaemonImgPanel', {
			fieldLabel:'推荐图片',
			formName:'headimgurl',
			width:imgWidth,
			height:imgHeight
		});
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['offlineEventId','openid','nickname','headimgurl','sex','compereScore','eventScore','feedback','createTime'],
			storeIdProperty:'offlineEventId',
			stateCode:'status',
			showAddBtn:false,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:true,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/offlineevent/del',
		    formUrl:contextPath+'/admin/offlineevent/add',
			storeUrl:contextPath+'/admin/offlineevent/list',
			stateChangeUrl:contextPath+'/admin/offlineevent/status',
			rightPanelToolBar:[statuscomboBox,searchByName],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
						 ,{header:'自增id',dataIndex:'offlineEventId',sortable:false,hidden:false,flex:0.5,renderer:null}
						 ,{header:'微信头像',dataIndex:'headimgurl',sortable:false,hidden:false,flex:1,renderer:function(data,m,record,rindex,cindex){
				        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:30px;'>";
				        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 30px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
								"<img class='appPosition_img' width=30px; height=30px; src='"+data+"'>" +
								"</div>";
				        	 return img;
				         }}
				         ,{header:'微信昵称',dataIndex:'nickname',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'性别',dataIndex:'sex',sortable:false,hidden:false,flex:2
				        	 ,renderer:function(data){
					        	 if (data != null) {
					        		 if (data == 1) {
					        			 return "男";
					        		 } else if (data == 2) {
					        			 return "女";
					        		 }
					        	 }
				        	 }
				         }
					     ,{header:'主持人评分',dataIndex:'compereScore',sortable:false,hidden:false,flex:2,renderer:function(data){
					    	 if(data!=null){
					    		 if(data==1){return "<font color='red'>★☆☆☆☆</font>";}
					    		 if(data==2){return "<font color='red'>★★☆☆☆</font>";}
					    		 if(data==3){return "<font color='red'>★★★☆☆</font>";}
					    		 if(data==4){return "<font color='red'>★★★★☆</font>";}
					    		 if(data==5){return "<font color='red'>★★★★★</font>";}
					    	 }
					     }}
					     ,{header:'活动评分',dataIndex:'eventScore',sortable:false,hidden:false,flex:2,renderer:function(data){
					    	 if(data!=null){
					    		 if(data==1){return "<font color='red'>★☆☆☆☆</font>";}
					    		 if(data==2){return "<font color='red'>★★☆☆☆</font>";}
					    		 if(data==3){return "<font color='red'>★★★☆☆</font>";}
					    		 if(data==4){return "<font color='red'>★★★★☆</font>";}
					    		 if(data==5){return "<font color='red'>★★★★★</font>";}
					    	 }
					     }}
					     ,{header:'意见与反馈',dataIndex:'feedback',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'评分时间',dataIndex:'createTime',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 return Ext.Date.format(new Date(data), 'Y-m-d H:i:s');
					        }}}
				         ],
			daemonFormItems: [
						,changingImage
						,{fieldLabel: '微信昵称',name: 'nickname',flex:3,allowBlank: true,inputId:'nickname',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '意见与反馈',xtype: 'textareafield',name: 'feedback',flex:3,allowBlank: true,inputId:'feedback',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
						],
			listeners:{
				afterEditFormshow:function(theFormPage){
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
					changingImage.setSrc(records[0].get("headimgurl"));
				},
				afterAddFormshow:function(theFormPage){
				} 
			}
			});
		this.callParent(arguments);
	} 
});	