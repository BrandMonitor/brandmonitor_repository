Ext.define('Micro.yunlinevents.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroYunlinEventsMain',
	
	initComponent: function() {
		var me = this;
		
		var imgWidth=160;
		var imgHeight=160;
		
		var changingImage = Ext.create('Ext.util.DaemonImgPanel', {
			formName:'img',
			width:imgWidth,
			height:imgHeight
		});
		
		var hiddenfieldForSoure=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield',inputId:'id', name: 'id' });
		
		var searchByName = Ext.create('Ext.form.field.Trigger', {
			 width:260,
		     editable:true,
		     emptyText:'模糊搜索标题,简介',
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
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['id','title','introduction',"img","star","first","second","third","url","status","remark"],
			storeIdProperty:'id',
			stateCode:'status',
			showAddBtn:true,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:true,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/yunlinevents/del',
		    formUrl:contextPath+'/admin/yunlinevents/add',
			storeUrl:contextPath+'/admin/yunlinevents/list',
			stateChangeUrl:contextPath+'/admin/yunlinevents/status',
			rightPanelToolBar:[searchByName],
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
				         ,{header:'帖子点赞',dataIndex:'star',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'第一名用户id',dataIndex:'first',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'第二名用户id',dataIndex:'second',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'第三名用户id',dataIndex:'third',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'实名认证url',dataIndex:'url',sortable:false,hidden:false,flex:2,renderer:null}
				         ],
			daemonFormItems: [
		                  hiddenfieldForSoure
		                  ,{fieldLabel: '标题',name: 'title',flex:3,allowBlank: true,inputId:'title',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
		                  ,{fieldLabel: '社区简介',name: 'introduction',flex:3,allowBlank: true,inputId:'introduction',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                  ,changingImage
		                  ,{fieldLabel: '点赞',xtype:'numberfield',name: 'star',inputId:'star',
								step:1,
								value:0,
								minValue:0,
								allowBlank: true,
								labelStyle: 'font-weight:bold;padding:0'}
		                  ,{fieldLabel: '第一名用户id',name: 'first',flex:3,allowBlank: true,inputId:'first',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                  ,{fieldLabel: '第二名用户id',name: 'second',flex:3,allowBlank: true,inputId:'second',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                  ,{fieldLabel: '第三名用户id',name: 'third',flex:3,allowBlank: true,inputId:'third',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                  ,{fieldLabel: '实名认证url',name: 'url',flex:3,allowBlank: true,inputId:'url',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                  ,{fieldLabel: '备注',name: 'remark',flex:3,allowBlank: true,inputId:'remark',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
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