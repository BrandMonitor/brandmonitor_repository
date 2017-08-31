Ext.define('Micro.offlineEventConsult.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroOfflineEventConsultMain',
	
	initComponent: function() {
		var me = this;
		
		var hiddenfieldForSoure=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield',inputId:'oeyId', name: 'oeyId' });
		
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
		
		var imgWidth=500;
		var imgHeight=500;
		var changingImage = Ext.create('Ext.util.DaemonImgPanel', {
			fieldLabel:'封面图片',
			formName:'eventImg',
			width:imgWidth,
			height:imgHeight
		});
		
		var eventTime = Ext.create('Ext.util.DaemonDateTimePicker', {
			fieldLabel:'上线时间',
		    //labelAlign:'left',
			width:150,
			inputId:'eventTime',
			name: 'eventTime',
			showTimePicker:true,
			hideClearTrigger:false,
			hideSearchTrigger:true,
			hideTriggerTrigger:true,
			labelStyle: 'font-weight:bold;padding:0',
			clearFunction:function(){
				Ext.apply(me.dataStore.proxy.extraParams, {eventTime:null});
		     	me.dataStore.loadPage(1);
			}
		});
		
		var htmlEditor = Ext.create('Ext.util.DaemonHtmlEditor', {
			readOnly:false,
			name:'htmlContent',
			margin:'0 10 10 0',
			flex:2
		});
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['oeyId','oecstId','yulin','userName','userImg','content'
			             ,'reply','status','createTime','remark','lastUpdateTime'
			],
			storeIdProperty:'oeyId',
			stateCode:'status',
			showAddBtn:true,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:true,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/offlineeventconsult/del',
		    formUrl:contextPath+'/admin/offlineeventconsult/add',
			storeUrl:contextPath+'/admin/offlineeventconsult/list',
			stateChangeUrl:contextPath+'/admin/offlineeventconsult/status',
			rightPanelToolBar:[statuscomboBox,genderComboBox,searchByName],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
						 ,{header:'自增id',dataIndex:'oecstId',sortable:false,hidden:false,flex:0.5,renderer:null}
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
				         ,{header:'咨询内容',dataIndex:'content',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'回复内容',dataIndex:'reply',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'咨询时间',dataIndex:'createTime',sortable:false,hidden:false,flex:2,renderer:function(data){
				        	 if(data!=null){
				        		 return Ext.Date.format(new Date(data), 'Y-m-d H:i:s');
					        }}}
				         ,{header:'回复时间',dataIndex:'lastUpdateTime',sortable:false,hidden:false,flex:2,renderer:function(data){
				        	 if(data!=null){
				        		 return Ext.Date.format(new Date(data), 'Y-m-d H:i:s');
				        	 }}}
				         ],
			daemonFormItems: [
			                  hiddenfieldForSoure,
			                  ,{
						            xtype: 'component',
						            html: '封面图'
						      }
			                  ,changingImage
			                  ,{fieldLabel: '标题',name: 'title',flex:3,allowBlank: true,inputId:'title',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: '位置',name: 'location',flex:3,allowBlank: true,inputId:'location',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: '费用',name: 'price',flex:3,allowBlank: true,inputId:'price',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{
						            xtype: 'component',
						            html: 'html文本,请在135editor编辑好复制到下面'
						      }
							  ,htmlEditor
			                  ,eventTime
			],
			listeners:{
				afterEditFormshow:function(theFormPage){
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
					hiddenfieldForSoure.setValue(records[0].get("oeyId"));
					changingImage.setSrc(records[0].get("eventImg"));
					startTime.setDate(records[0].get("startTime"));
					htmlEditor.setValue(records[0].get("htmlContent"));
				} ,
				afterAddFormshow:function(theFormPage){
					changingImage.setSrc("");
				} 
			}
			});
		this.callParent(arguments);
	} 
});	