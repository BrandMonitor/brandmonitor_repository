Ext.define('Micro.community.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroCommunityMain',
	
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
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['id','title','introduction',"xPoint1","xPoint2","yPoint1","yPoint2","status","remark"],
			storeIdProperty:'id',
			stateCode:'status',
			showAddBtn:true,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:false,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/community/del',
		    formUrl:contextPath+'/admin/community/add',
			storeUrl:contextPath+'/admin/community/list',
			rightPanelToolBar:[searchByName],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
				         ,{header:'社区名字',dataIndex:'title',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'社区简介',dataIndex:'introduction',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'x轴坐标1',dataIndex:'xPoint1',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'x轴坐标2',dataIndex:'xPoint2',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'y轴坐标1',dataIndex:'yPoint1',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'y轴坐标2',dataIndex:'yPoint2',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'状态',dataIndex:'status',sortable:false,hidden:false,flex:2,renderer:function(data){
				        	 if(data != null){
				        		 if(data == 1){
				        			 return "启用";
				        		 }else if(data ==0){
				        			 return "停用";
				        		 }
				        	}}}
				         ],
			daemonFormItems: [
			                  hiddenfieldForSoure
			                  ,{fieldLabel: '社区名字',name: 'title',flex:3,allowBlank: true,inputId:'title',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: '社区简介',name: 'introduction',flex:3,allowBlank: true,inputId:'introduction',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: 'x轴坐标1',name: 'xPoint1',flex:3,allowBlank: true,inputId:'xPoint1',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: 'x轴坐标2',name: 'xPoint2',flex:3,allowBlank: true,inputId:'xPoint2',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: 'y轴坐标1',name: 'yPoint1',flex:3,allowBlank: true,inputId:'yPoint1',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: 'y轴坐标2',name: 'yPoint2',flex:3,allowBlank: true,inputId:'yPoint2',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: '备注',name: 'remark',flex:3,allowBlank: true,inputId:'remark',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: '状态',name: 'status',flex:3,allowBlank: true,inputId:'status',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
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