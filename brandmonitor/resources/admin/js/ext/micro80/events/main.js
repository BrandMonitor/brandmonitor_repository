Ext.define('Micro.events.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroEventsMain',
	
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
		    	 Ext.apply(daemon.dateStore.proxy.extraParams, {name:null});
		         daemon.dateStore.reload();
		         searchByName.reset();
		     }, 
		     onTrigger2Click:function(eventObj){
		    	 newValue = this.getValue();
		    	 Ext.apply(daemon.dateStore.proxy.extraParams, {name:newValue});
		         daemon.dateStore.reload();
		     },
		     listeners:{
		    	 specialkey: function(field, e){
	                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
	                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
	                    if (e.getKey() == e.ENTER) {
	                    	newValue = this.getValue();
	       		    	 	Ext.apply(daemon.dateStore.proxy.extraParams, {name:newValue});
	       		    	 	daemon.dateStore.reload();
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
		    value:"全部",
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    	Ext.apply(daemon.dateStore.proxy.extraParams, {statusType:null});
		    	daemon.dateStore.reload();
		    	statuscomboBox.reset();
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        	Ext.apply(daemon.dateStore.proxy.extraParams, {statusType:newValue});
		        	daemon.dateStore.reload();
		        }
		    }
		});
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['id','title','img','introduction','addr','eventsTime'
			             ,'cost','communityId','communityName','userId','userName','part'
			             ,'star','replyTimes','status','createTime','remark'],
			storeIdProperty:'id',
			stateCode:'status',
			showAddBtn:false,
			showEditBtn:false,
			showDelBtn:false,
			showStatusBtn:true,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/events/del',
		    formUrl:contextPath+'/admin/events/add',
			storeUrl:contextPath+'/admin/events/list',
			stateChangeUrl:contextPath+'/admin/events/status',
			rightPanelToolBar:[statuscomboBox,searchByName],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
						  ,{header:'id',dataIndex:'id',sortable:false,hidden:false,flex:0.5,renderer:null}
						  ,{header:'图片',dataIndex:'img',sortable:false,hidden:false,flex:1,renderer:function(data,m,record,rindex,cindex){
					        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:30px;'>";
					        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 30px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
									"<img class='appPosition_img' width=30px; height=30px; src='"+data+"'>" +
									"</div>";
					        	 return img;
					         }}
				         ,{header:'标题',dataIndex:'title',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'简介',dataIndex:'introduction',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'地址',dataIndex:'addr',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'活动时间',dataIndex:'eventsTime',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 return Ext.Date.format(new Date(data), 'Y-m-d H:i:s');
					        }}}
				         ,{header:'费用',dataIndex:'cost',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'社区',dataIndex:'communityName',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'发起人',dataIndex:'userName',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'参与人数',dataIndex:'part',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'点赞次数',dataIndex:'star',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'评论次数',dataIndex:'replyTimes',sortable:false,hidden:false,flex:2,renderer:null}
			],
			daemonFormItems: [
		                  hiddenfieldForSoure,
		                  ,{fieldLabel: '标题',name: 'title',flex:3,allowBlank: true,inputId:'title',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                  ,{fieldLabel: '图片',name: 'img',flex:3,allowBlank: true,inputId:'img',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                  ,{fieldLabel: '简介',name: 'introduction',flex:3,allowBlank: true,inputId:'introduction',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                  ,{fieldLabel: '地址',name: 'addr',flex:3,allowBlank: true,inputId:'addr',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                  ,{fieldLabel: '活动时间',name: 'eventsTime',flex:3,allowBlank: true,inputId:'events_time',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                  ,{fieldLabel: '费用',name: 'cost',flex:3,allowBlank: true,inputId:'cost',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                  ,{fieldLabel: '社区id',name: 'communityId',flex:3,allowBlank: true,inputId:'community_id',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}			                  
		                  ,{fieldLabel: '发起人id',name: 'userId',flex:3,allowBlank: true,inputId:'user_id',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                  ,{fieldLabel: '参与人数',name: 'part',flex:3,allowBlank: true,inputId:'part',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}			                  
		                  ,{fieldLabel: '点赞次数',name: 'star',flex:3,allowBlank: true,inputId:'star',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                  ,{fieldLabel: '评论次数',name: 'replyTimes',flex:3,allowBlank: true,inputId:'reply_times',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}			                  
			],
			listeners:{
				afterEditFormshow:function(theFormPage){
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
					hiddenfieldForSoure.setValue(records[0].get("id"));
				} ,
				afterAddFormshow:function(theFormPage){
				} 
			}
			});
		this.callParent(arguments);
	} 
});	