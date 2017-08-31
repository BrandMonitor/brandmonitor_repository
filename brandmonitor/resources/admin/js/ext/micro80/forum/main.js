Ext.define('Micro.forum.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroForumMain',
	
	initComponent: function() {
		var me = this;
		
		var hiddenfieldForSoure=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield',inputId:'id', name: 'id' });
		
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
		
		var statuscomboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
                    {"value":1, "name":"启用"},
                    {"value":0, "name":"停用"},
                    {"value":"", "name":"状态类型选择"}
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
		
		var topComboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
                    {"value":1, "name":"置顶"},
                    {"value":0, "name":"不置顶"},
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'是否置顶',
			value:0,
		    name: 'top',
		    inputId:'top',
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
		
		var recommendComboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
                    {"value":1, "name":"推荐"},
                    {"value":0, "name":"不推荐"},
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
		
		var imgWidth=160;
		var imgHeight=160;
		var changingImage = Ext.create('Ext.util.DaemonImgPanel', {
			fieldLabel:'封面图片',
			formName:'img',
			width:imgWidth,
			height:imgHeight
		});
		
		var forumTypeSelect=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
                    {"value":"", "name":"看某个论坛社区"},
                    {"value":1, "name":"我的社区"},
                    {"value":2, "name":"上班儿"},
                    {"value":3, "name":"去哪儿玩"},
					{"value":4, "name":"随手拍"},
					{"value":5, "name":"情感树洞"},
					{"value":6, "name":"断章"},
					{"value":7, "name":"找对象"},
					{"value":8, "name":"微观生活"},
					{"value":9, "name":"追剧"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'社区模块',
		    value:"",
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {forumType:null});
		    	me.DaemonContentPanel.dateStore.reload();
		    	forumTypeSelect.reset();
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {forumType:newValue});
		        	me.DaemonContentPanel.dateStore.reload();
		        }
		    }
		});
		
		var lastCreateTime = Ext.create('Ext.util.DaemonDateTimePicker', {
			fieldLabel:'置顶/推荐时间',
		    //labelAlign:'left',
			width:150,
			inputId:'lastCreateTime',
			name: 'lastCreateTime',
			showTimePicker:true,
			hideClearTrigger:false,
			hideSearchTrigger:true,
			hideTriggerTrigger:true,
			labelStyle: 'font-weight:bold;padding:0',
			clearFunction:function(){
				Ext.apply(me.dataStore.proxy.extraParams, {lastCreateTime:null});
		     	me.dataStore.loadPage(1);
			}
		});
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['id','title','img','backgroundImgs','top', 'recommend', 'forumType','content','nice','replyTimes','userId','userName','yulin','status','createTime','lastCreateTime','topTime','remark'],
			storeIdProperty:'id',
			stateCode:'status',
			showAddBtn:false,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:true,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/forum/del',
		    formUrl:contextPath+'/admin/forum/add',
			storeUrl:contextPath+'/admin/forum/list',
			stateChangeUrl:contextPath+'/admin/forum/status',
			rightPanelToolBar:[forumTypeSelect,statuscomboBox,yulin,searchByName],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
						 ,{header:'id',dataIndex:'id',sortable:false,hidden:false,flex:0.5,renderer:null}
				         ,{header:'标题',dataIndex:'title',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'内容',dataIndex:'content',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'置顶',dataIndex:'top',sortable:false,hidden:false,flex:1,renderer:function(data){
				        	 if(data != null){
				        		 if(data==1){return '置顶';}
				        	 }
				         }}
					     ,{header:'推荐',dataIndex:'recommend',sortable:false,hidden:false,flex:1,renderer:function(data){
					    	 if(data!=null){
					    		 if(data==1){return '推荐';}
					    	 }
					     }}
					     ,{header:'遇邻昵称',dataIndex:'userName',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'遇邻号',dataIndex:'yulin',sortable:false,hidden:false,flex:1,renderer:null}
					     ,{header:'版块',dataIndex:'forumType',sortable:false,hidden:false,flex:1,renderer:function(data){
					    	 if(data != null){
					    		 if(data==1){return '我的社区';}
					    		 if(data==2){return '上班儿';}
					    		 if(data==3){return '去哪儿玩';}
					    		 if(data==4){return '随手拍';}
					    		 if(data==5){return '情感树洞';}
					    		 if(data==6){return '断章';}
					    		 if(data==7){return '找对象';}
					    		 if(data==8){return '微观生活';}
					    		 if(data==9){return '追剧';}
					    	 }
					     }}
					     ,{header:'上线时间',dataIndex:'createTime',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 return Ext.Date.format(new Date(data), 'Y-m-d H:i:s');
					        }}}
					     ,{header:'最后更新时间',dataIndex:'lastCreateTime',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 return Ext.Date.format(new Date(data), 'Y-m-d H:i:s');
					     }}}
					     ,{header:'置顶推荐时间',dataIndex:'topTime',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 return Ext.Date.format(new Date(data), 'Y-m-d H:i:s');
					     }}}
				         ],
			daemonFormItems: [
						hiddenfieldForSoure
						,changingImage
						,recommendComboBox
						,topComboBox
						,{
				            xtype: 'component',
				            html: '置顶/推荐时间可以不选，不选表示立即置顶/推荐'
				         }
						,lastCreateTime
						],
			listeners:{
				afterEditFormshow:function(theFormPage){
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
					changingImage.setSrc(records[0].get("img"));
					lastCreateTime.setDate(records[0].get("lastCreateTime"));
					hiddenfieldForSoure.setValue(records[0].get("id"));
				},
				afterAddFormshow:function(theFormPage){
					changingImage.setSrc("");
				} 
			}
			});
		this.callParent(arguments);
	} 
});	