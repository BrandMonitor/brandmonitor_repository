Ext.define('Micro.forumreply.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroForumReplyMain',
	
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
		
		var usersStore = Ext.create('Ext.data.Store', {
			 fields: ['id', 'userName'],
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
	             url:contextPath+"/admin/forum/userList",
	             listeners:{
		    			load:function(treestore,node,record,su){
		    				
		    			} 
			        }
	         }
		});
		
		var usersComboBox = Ext.create('Ext.form.ComboBox', {
			store: usersStore,
		    editable:false,
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    autoSelect:true,
		    autoShow:true,
		    value:'',
		    name:'testUser',
			inputId:'testUser',
		    fieldLabel:'回帖用户',
		    displayField: 'userName',
		    valueField: 'id'
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
		
		var imgWidth=160;
		var imgHeight=160;
		var img1Image = Ext.create('Ext.util.DaemonImgPanel', {
			fieldLabel:'封面图片',
			formName:'img1',
			width:imgWidth,
			height:imgHeight
		});
		
		var img2Image = Ext.create('Ext.util.DaemonImgPanel', {
			fieldLabel:'封面图片',
			formName:'img2',
			width:imgWidth,
			height:imgHeight
		});
		
		var img3Image = Ext.create('Ext.util.DaemonImgPanel', {
			fieldLabel:'封面图片',
			formName:'img3',
			width:imgWidth,
			height:imgHeight
		});
		
		var phoneComboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
				    {"value":"", "name":"请选择"},
                    {"value":"苹果手机", "name":"苹果手机"},
                    {"value":"安卓手机", "name":"安卓手机"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'手机类型',
			value:"",
		    name: 'phone',
		    inputId:'phone',
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
		
		var createTime = Ext.create('Ext.util.DaemonDateTimePicker', {
			fieldLabel:'上线时间',
		    //labelAlign:'left',
			width:150,
			inputId:'createTime',
			name: 'createTime',
			showTimePicker:true,
			hideClearTrigger:false,
			hideSearchTrigger:true,
			hideTriggerTrigger:true,
			labelStyle: 'font-weight:bold;padding:0',
			clearFunction:function(){
				Ext.apply(me.dataStore.proxy.extraParams, {createTime:null});
		     	me.dataStore.loadPage(1);
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
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['id','forumId','img','img1','img2','img3','userName', 'floor', 'floorReplyTimes', 'host', 'userId', 'yulin','content','status','createTime'],
			storeIdProperty:'id',
			stateCode:'status',
			showAddBtn:true,
			showEditBtn:false,
			showDelBtn:false,
			showStatusBtn:true,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/forumreply/del',
		    formUrl:contextPath+'/admin/forumreply/add',
			storeUrl:contextPath+'/admin/forumreply/list',
			stateChangeUrl:contextPath+'/admin/forumreply/status',
			rightPanelToolBar:[statuscomboBox,yulin,searchByName],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
						 ,{header:'回帖(楼层)id',dataIndex:'id',sortable:false,hidden:false,flex:1,renderer:null}
				         ,{header:'所属帖子id',dataIndex:'forumId',sortable:false,hidden:false,flex:1,renderer:null}
				         ,{header:'回帖人头像',dataIndex:'img',sortable:false,hidden:false,flex:1,renderer:function(data,m,record,rindex,cindex){
				        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:30px;'>";
				        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 30px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
								"<img class='appPosition_img' width=30px; height=30px; src='"+data+"'>" +
								"</div>";
				        	 return img;
				         }}
				         ,{header:'回帖人遇邻号',dataIndex:'yulin',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'回帖人昵称',dataIndex:'userName',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'楼层',dataIndex:'floor',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'楼层回复次数',dataIndex:'floorReplyTimes',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'是否楼主',dataIndex:'host',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 if(data==1){
					    		 return '楼主';
					    	 }
					     }}}
				         ,{header:'内容',dataIndex:'content',sortable:false,hidden:false,flex:2,renderer:null}
				         ],
			daemonFormItems: [
						hiddenfieldForSoure
						,{fieldLabel: '所属帖子id',name: 'forumId',flex:3,allowBlank: true,inputId:'forumId',value:'',minLength:1,maxLength:10,regexText:'1-10个字符',blankText:'1~10个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{
							xtype: 'component',
							html: '回帖用户 (格式为 用户名|账号)'
						}
						,usersComboBox
						,{fieldLabel: '回帖内容',xtype: 'textareafield',height:150,name: 'content',flex:3,allowBlank: true,inputId:'content',value:'',minLength:1,maxLength:500,regexText:'1-500个字符',blankText:'1~500个字符',labelStyle: 'font-weight:bold;padding:0'}
						,phoneComboBox
						,{
				            xtype: 'component',
				            html: '上线时间可以不选，不选表示立即上线'
				         }
						,createTime
						,img1Image
						,img2Image
						,img3Image
						],
			listeners:{
				afterEditFormshow:function(theFormPage){
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
					hiddenfieldForSoure.setValue(records[0].get("id"));
					createTime.setDate(records[0].get("createTime"));
				},
				afterAddFormshow:function(theFormPage){
				} 
			}
			});
		this.callParent(arguments);
	} 
});	