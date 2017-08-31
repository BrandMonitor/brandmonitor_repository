Ext.define('Micro.newsReply.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroNewsReplyMain',
	
	initComponent: function() {
		var me = this;
		
		var hiddenfieldForSoure=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield',inputId:'id', name: 'id' });
		
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
		
		var testUserComboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
                    {"value":112, "name":"13213213200"},
                    {"value":101, "name":"13213213211"},
                    {"value":102, "name":"13213213222"},
                    {"value":105, "name":"13213213233"},
					{"value":108, "name":"13213213244"},
					{"value":109, "name":"13213213255"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'评论人',
			value:"",
		    name: 'testUser',
		    inputId:'testUser',
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
			storeFields:['id','newsId','userId','content','star','status','createTime'],
			storeIdProperty:'id',
			stateCode:'status',
			showAddBtn:true,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:true,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/newsreply/del',
		    formUrl:contextPath+'/admin/newsreply/add',
			storeUrl:contextPath+'/admin/newsreply/list',
			stateChangeUrl:contextPath+'/admin/newsreply/status',
			rightPanelToolBar:[statuscomboBox,searchByName],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
						 ,{header:'id',dataIndex:'id',sortable:false,hidden:false,flex:0.5,renderer:null}
				         ,{header:'新闻id',dataIndex:'newsId',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'用户id',dataIndex:'userId',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'评论内容',dataIndex:'content',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'帖子点赞',dataIndex:'star',sortable:false,hidden:false,flex:2,renderer:null}
				         ],
			daemonFormItems: [
						hiddenfieldForSoure
						,{fieldLabel: '新闻id',name: 'newsId',flex:3,allowBlank: true,inputId:'newsId',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						,testUserComboBox
						,{fieldLabel: '评论内容',name: 'content',flex:3,allowBlank: true,inputId:'content',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '点赞数',name: 'star',flex:3,allowBlank: true,inputId:'star',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
						],
			listeners:{
				afterEditFormshow:function(theFormPage){
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
					hiddenfieldForSoure.setValue(records[0].get("id"));
				},
				afterAddFormshow:function(theFormPage){
				} 
			}
			});
		this.callParent(arguments);
	} 
});	