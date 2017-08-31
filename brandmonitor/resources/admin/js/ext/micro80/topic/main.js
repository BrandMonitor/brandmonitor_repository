Ext.define('Micro.topic.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroTopicMain',
	
	initComponent: function() {
		var me = this;
		
		var hiddenfieldForSoure=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield',inputId:'topicId', name: 'topicId' });
		
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
		
		var topComboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
                    {"value":0, "name":"请选择"},
                    
                    {"value":1, "name":"个人信息"},
                    {"value":2, "name":"动漫"},
                    {"value":3, "name":"社交"},
                    {"value":4, "name":"老家"},
                    {"value":5, "name":"护肤"},
                    {"value":6, "name":"萌宠"},
                    {"value":7, "name":"情感"},
                    {"value":8, "name":"星座"},
                    {"value":9, "name":"旅行"},
                    {"value":10, "name":"游戏"},
                    {"value":11, "name":"美食"},
                    {"value":12, "name":"闲聊"},
                    {"value":13, "name":"热点"},
                    {"value":14, "name":"职场"},
                    
                    {"value":15, "name":"运动健身"},
                    {"value":16, "name":"小说"},
                    {"value":17, "name":"电影"},
                    {"value":18, "name":"音乐"},
                    {"value":19, "name":"电视剧"},
                    {"value":20, "name":"综艺"},
                    {"value":21, "name":"数码科技"},
                    
                    {"value":22, "name":"心理测试"},
                    {"value":23, "name":"脑经急转弯"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'是否置顶',
			value:0,
		    name: 'topicSubType',
		    inputId:'topicSubType',
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
				    {"value":0, "name":"请选择"},
                    {"value":1, "name":"生活"},
                    {"value":2, "name":"爱好"},
                    {"value":3, "name":"游戏"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'话题类型',
			value:0,
		    name: 'topicType',
		    inputId:'topicType',
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
//		        	if (){ //当有值改变时更新
//		        		
//		        	}
		        }
		    }
		});
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['topicId','topicType','topicSubType','topicQuestion','topicAnswer','lastUpdateTime','createTime','status','remark'],
			storeIdProperty:'topicId',
			stateCode:'status',
			showAddBtn:true,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:true,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/topic/del',
		    formUrl:contextPath+'/admin/topic/add',
			storeUrl:contextPath+'/admin/topic/list',
			stateChangeUrl:contextPath+'/admin/topic/status',
			rightPanelToolBar:[statuscomboBox,searchByName],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
						 ,{header:'话题id',dataIndex:'topicId',sortable:false,hidden:false,flex:0.5,renderer:null}
				         ,{header:'话题类型',dataIndex:'topicType',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'话题子类型',dataIndex:'topicSubType',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'话题',dataIndex:'topicQuestion',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'答案',dataIndex:'topicAnswer',sortable:false,hidden:false,flex:2,renderer:null}
				         ],
			daemonFormItems: [
						hiddenfieldForSoure
						,recommendComboBox
						,topComboBox
						,{fieldLabel: '话题及选项',xtype: 'textareafield',height:150,name: 'topicQuestion',flex:1,allowBlank: true,inputId:'topicQuestion',value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{
				            xtype: 'component',
				            html: '没有答案可为空'
				         }
						,{fieldLabel: '话题的答案',xtype: 'textareafield',height:150,name: 'topicAnswer',flex:1,allowBlank: true,inputId:'topicAnswer',value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
						],
			listeners:{
				afterEditFormshow:function(theFormPage){
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
					hiddenfieldForSoure.setValue(records[0].get("topicId"));
				},
				afterAddFormshow:function(theFormPage){
				} 
			}
			});
		this.callParent(arguments);
	} 
});	