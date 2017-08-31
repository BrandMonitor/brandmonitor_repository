Ext.define('Micro.impressedit.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroImpresseditMain',
	
	initComponent: function() {
		var me = this;
		
		var htmlEditor = Ext.create('Ext.util.DaemonHtmlEditor', {
			readOnly:false,
			name:'htmlContent',
			margin:'0 10 10 0',
			flex:2
		});
		
		var hiddenfieldForSoure=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield',inputId:'impressEditId', name: 'impressEditId' });
		
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
			formName:'img',
			width:imgWidth,
			height:imgHeight
		});
		
		var reporterStore = Ext.create('Ext.data.Store', {
			 fields: ['id','reporterName'],
			 autoLoad:true,
	         proxy: {
	             type: 'ajax',
	             headers:{"Accept":"application/json"},
	             method:'GET',
	             reader: {
				     type: 'json',
				     root: 'listPageObject'
				 },
	             url:contextPath+"/admin/reporter/list",
	             listeners:{
		    			load:function(treestore,node,record,su){
		    				
		    			} 
			        }
	         }
		});
		
		var sourcestore = Ext.create('Ext.data.Store', {
			 fields: ['id', 'name'],
			 autoLoad:true,
	         proxy: {
	             type: 'ajax',
	             headers:{"Accept":"application/json"},
	             method:'GET',
	             reader: {
				     type: 'json',
				     root: 'listPageObject'
				 },
				 extraParams:{
					 limit:1000
				 },
	             url:contextPath+"/admin/newsource/list",
	             listeners:{
		    			load:function(treestore,node,record,su){
		    				
		    			} 
			        }
	         }
		});
		
		var reporterComboBox=Ext.create('Ext.form.ComboBox', {
			store: reporterStore,
		    editable:false,
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    autoSelect:true,
		    autoShow:true,
		    value:'',
		    name:'reporter',
			inputId:'reporter',
		    fieldLabel:'记者姓名',
		    displayField: 'reporterName',
		    valueField: 'id',
//	    	trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
//		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
//		    onTrigger1Click:function(eventObj){
//		    	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {reporter:null});
//		    	me.DaemonContentPanel.dateStore.reload();
//		    	reporterComboBox.reset();
//		    }
		});
		
		var sourcecomboBox=Ext.create('Ext.form.ComboBox', {
			store: sourcestore,
		    editable:false,
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    autoSelect:true,
		    autoShow:true,
		    value:'',
		    name:'source',
			inputId:'source',
		    fieldLabel:'新闻来源',
		    displayField: 'name',
		    valueField: 'id',
//		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
//		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
//		    onTrigger1Click:function(eventObj){
//		    	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {source:null});
//		    	me.DaemonContentPanel.dateStore.reload();
//		    	sourcecomboBox.reset();
//		    }
		});
		
		var recommendComboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
                    {"value":0, "name":"正常"},
                    {"value":1, "name":"推荐"},
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'是否推荐',
			value:0,
		    name: 'recommend',
		    inputId:'recommend',
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
		
		var genderComboBox = Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
				    {"value":0, "name":"请选择性别"},
					{"value":1, "name":"男"},
                    {"value":2, "name":"女"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'性别',
		    value:0,
		    name: 'gender1',
		    inputId:'gender1',
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
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['impressEditId','img','title','introduction','content','impressType','recommend','source','reporter','yulin','gender','userAge','click','star','replyTimes','status','createTime','remark','impressHtmlPO','startTime'],
			storeIdProperty:'impressEditId',
			stateCode:'status',
			showAddBtn:true,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:true,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/impressedit/del',
		    formUrl:contextPath+'/admin/impressedit/add',
			storeUrl:contextPath+'/admin/impressedit/list',
			stateChangeUrl:contextPath+'/admin/impressedit/status',
			rightPanelToolBar:[statuscomboBox,searchByName],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
						 ,{header:'自增id',dataIndex:'impressEditId',sortable:false,hidden:false,flex:0.5,renderer:null}
						 ,{header:'图片',dataIndex:'img',sortable:false,hidden:false,flex:1,renderer:function(data,m,record,rindex,cindex){
				        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:30px;'>";
				        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 30px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
								"<img class='appPosition_img' width=30px; height=30px; src='"+data+"'>" +
								"</div>";
				        	 return img;
				         }}
				         ,{header:'标题',dataIndex:'title',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'简介',dataIndex:'introduction',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'性别',dataIndex:'gender',sortable:false,hidden:false,flex:2
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
					     ,{header:'推荐',dataIndex:'recommend',sortable:false,hidden:false,flex:2,renderer:function(data){
					    	 if(data!=null){
					    		 if(data==1){return '推荐';}
					    	 }
					     }}
					     ,{header:'遇邻号',dataIndex:'yulin',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'创建时间',dataIndex:'createTime',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 return Ext.Date.format(new Date(data), 'Y-m-d H:i:s');
					        }}}
					     ,{header:'上线日期',dataIndex:'startTime',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 return Ext.Date.format(new Date(data), 'Y-m-d H:i:s');
					        }}}
				         ],
			daemonFormItems: [
						hiddenfieldForSoure
						,reporterComboBox
						,sourcecomboBox
						,{
				            xtype: 'component',
				            html: '封面图'
				         }
						,changingImage
						,{fieldLabel: '标题',name: 'title',flex:3,allowBlank: true,inputId:'title',value:'',minLength:1,maxLength:30,regexText:'1-30个字符',blankText:'1~30个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '简介',xtype: 'textareafield',height:150,name: 'introduction',flex:2,allowBlank: true,inputId:'introduction',value:'',minLength:1,maxLength:195,regexText:'1-195个字符',blankText:'1~195个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '遇邻号',name: 'yulin',flex:3,allowBlank: true,inputId:'yulin',value:'',minLength:1,maxLength:30,regexText:'1-30个字符',blankText:'1~30个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{
				            xtype: 'component',
				            html: '当编辑时会出现数字1和2,1表示男,2表示女。'
				         }
						,genderComboBox
						,{fieldLabel: '用户年龄',name: 'userAge',flex:3,allowBlank: true,inputId:'userAge',value:'',minLength:1,maxLength:30,regexText:'1-30个字符',blankText:'1~30个字符',labelStyle: 'font-weight:bold;padding:0'}
						,recommendComboBox
						,{
				            xtype: 'component',
				            html: '上线时间可以不选，不选表示立即上线'
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
					changingImage.setSrc(records[0].get("img"));
					hiddenfieldForSoure.setValue(records[0].get("impressEditId"));
					var impressHtmlPO=records[0].get("impressHtmlPO");
					htmlEditor.setValue(impressHtmlPO.content);
					startTime.setDate(records[0].get("startTime"));
					if(records[0].get("gender")==1){
						theFormPage.down('[inputId=gender1]').setValue("1");
					}else if(records[0].get("gender")==2){
						theFormPage.down('[inputId=gender1]').setValue("2");
					}
				},
				afterAddFormshow:function(theFormPage){
					changingImage.setSrc("");
				} 
			}
			});
		this.callParent(arguments);
	} 
});	