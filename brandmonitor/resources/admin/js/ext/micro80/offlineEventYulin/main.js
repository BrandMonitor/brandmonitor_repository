Ext.define('Micro.offlineEventYulin.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroOfflineEventYulinMain',
	
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
		
		var startTime = Ext.create('Ext.util.DaemonDateTimePicker', {
			fieldLabel:'上线时间',
		    //labelAlign:'left',
			width:150,
			inputId:'startTime',
			name: 'startTime',
			showTimePicker:true,
			hideClearTrigger:false,
			hideSearchTrigger:true,
			hideTriggerTrigger:true,
			labelStyle: 'font-weight:bold;padding:0',
			clearFunction:function(){
				Ext.apply(me.dataStore.proxy.extraParams, {startTime:null});
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
			storeFields:['oeyId','yulin','userImg','userName','title','eventImg'
			             ,'location','eventTime','eventType','consultTimes','price','malePrice','femalePrice'
			             ,'star','status','createTime','remark','htmlContent','commentTimes','shortLocation'
			],
			storeIdProperty:'oeyId',
			stateCode:'status',
			showAddBtn:true,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:true,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/offlineeventyulin/del',
		    formUrl:contextPath+'/admin/offlineeventyulin/add',
			storeUrl:contextPath+'/admin/offlineeventyulin/list',
			stateChangeUrl:contextPath+'/admin/offlineeventyulin/status',
			rightPanelToolBar:[statuscomboBox,genderComboBox,searchByName],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
						 ,{header:'自增id',dataIndex:'oeyId',sortable:false,hidden:false,flex:0.5,renderer:null}
						 ,{header:'封面图',dataIndex:'eventImg',sortable:false,hidden:false,flex:1,renderer:function(data,m,record,rindex,cindex){
					        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:30px;'>";
					        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 30px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
									"<img class='appPosition_img' width=30px; height=30px; src='"+data+"'>" +
									"</div>";
					        	 return img;
					         }}
				         ,{header:'负责人',dataIndex:'userName',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'标题',dataIndex:'title',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'地点',dataIndex:'location',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'时间',dataIndex:'eventTime',sortable:false,hidden:false,flex:2,renderer:function(data){
				        	 if(data!=null){
				        		 return Ext.Date.format(new Date(data), 'Y-m-d H:i:s');
					        }}}
				         ,{header:'活动类型',dataIndex:'eventType',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'咨询数',dataIndex:'consultTimes',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'评论数',dataIndex:'commentTimes',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'男生费用',dataIndex:'malePrice',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'女生费用',dataIndex:'femalePrice',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'点赞数',dataIndex:'star',sortable:false,hidden:false,flex:2,renderer:null}
				         ],
			daemonFormItems: [
			                  hiddenfieldForSoure,
			                  ,{
						            xtype: 'component',
						            html: '封面图'
						      }
			                  ,changingImage
			                  ,{fieldLabel: '标题',name: 'title',flex:3,allowBlank: true,inputId:'title',value:'',minLength:1,maxLength:30,regexText:'1-30个字符',blankText:'1~30个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: '活动地址',name: 'location',flex:3,allowBlank: true,inputId:'location',value:'',minLength:1,maxLength:80,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{
			                	  xtype: 'component',
			                	  html: '短活动地址,只显示**区,如 南山区'
			                  }
			                  ,{fieldLabel: '短地址',name: 'shortLocation',flex:3,allowBlank: true,inputId:'shortLocation',value:'',minLength:1,maxLength:10,regexText:'1-10个字符',blankText:'1~10个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: '男生费用',name: 'malePrice',flex:3,allowBlank: true,inputId:'malePrice',value:'',minLength:1,maxLength:5,regexText:'1-5个字符',blankText:'1~5个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: '女生费用',name: 'femalePrice',flex:3,allowBlank: true,inputId:'femalePrice',value:'',minLength:1,maxLength:5,regexText:'1-5个字符',blankText:'1~5个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: '类型',name: 'eventType',flex:3,allowBlank: true,inputId:'eventType',value:'',minLength:1,maxLength:10,regexText:'1-10个字符',blankText:'1~10个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{
			                	  xtype: 'component',
			                	  html: '活动开始时间，新创建的活动需要填写；后面可不填写，填写则修改活动时间'
			                  }
			                  ,startTime
			                  ,{
			                	  xtype: 'component',
			                	  html: 'html文本,请在135editor编辑好复制到下面'
			                  }
							  ,htmlEditor
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