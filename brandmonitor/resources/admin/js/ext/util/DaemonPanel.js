Ext.define('Ext.util.DaemonPanel', {
	extend: "Ext.panel.Panel",  
    requires: [
                
    ],
	alternateClassName: 'DaemonPanel',
	layout: 'card',
	border:false,
	panelType:"grid",
	storeDefaultRootProperty:null,
	storeFields:null,
	storeIdProperty:'id',
	storeUrl:null,
	delUrl:null,
	stateChangeUrl:null,
	panelColumns:null,
	defaultSend:true,
	showAddBtn:true,
	showEditBtn:true,
	showStatusBtn:true,
	showDelBtn:false,
	DaemonAddBtn:null,
	DaemonEditBtn:null,
	DaemonStatusBtn:null,
	formBodyStyle:'padding:15px 50% 15px 15px',
	panelTotalProperty:'recordCount',
	panelPageSize:35,
	formUrl:null,
	panelSorters:[],
	//添加标题栏按钮
	panelTabr:null,
	leftPanelToolBar:[],
	rightPanelToolBar:[],
	//添加自定义面板
	customPanel:null,
	helpPanel:null,
	customPanelTeam:[],
	//form面板
	daemonFormItems: [{
        fieldLabel: '该功能还没实现',
        name: 'first',
        allowBlank: false
    }],
    showState:true,
    stateCode:"state",
    stateValueOn:'valid',
    stateValueOff:'invalid',
    timeout:60*1000,
	   
	initComponent: function() {
		var me = this;
		me.DaemonContentPanel=null;
		var doOther=true;
		
		if(me.panelType=="grid"){
			me.DaemonContentPanel=Ext.create('Ext.util.DaemonGridPanel', {
				border:false,
    			storeDefaultRootProperty:me.storeDefaultRootProperty,
    			storeFields:me.storeFields,
    			storeIdProperty:me.storeIdProperty,
    			storeUrl:me.storeUrl,
    			showState:me.showState,
    			stateCode:me.stateCode,
    			stateChangeUrl:me.stateChangeUrl,
    			panelTotalProperty: me.panelTotalProperty,
    			panelPageSize: me.panelPageSize,
    			panelColumns:me.panelColumns,
    			listeners:{
    				
				}
    		});
		}else if(me.panelType=="tree"){
			me.DaemonContentPanel=Ext.create('Ext.util.DaemonTreePanel', {
				border:false,
    			storeDefaultRootProperty:me.storeDefaultRootProperty,
    			storeFields:me.storeFields,
    			storeIdProperty:me.storeIdProperty,
    			storeUrl:me.storeUrl,
    			stateChangeUrl:me.stateChangeUrl,
    			showState:me.showState,
    			stateCode:me.stateCode,
    			panelColumns:me.panelColumns,
    			listeners:{
    				
				}
    		});
		}else if(me.panelType=="iframe"){
			me.DaemonContentPanel=Ext.create('Ext.util.DaemonIframePanel', {
				border:false,
    			storeUrl:storeUrl
    		});
    		doOther=false;
		}else{
			me.DaemonContentPanel=Ext.create('Ext.util.DaemonErrorPanel', {
				border:false,
				message:"页面制作做，请选择其他页面。错误信息：ErrorPGCode-"+Ext.History.getToken()
    		});
    		doOther=false;
		}
		
		me.DaemonFormPanel=Ext.create('Ext.util.DaemonFormPanel', {
			bodyStyle: me.formBodyStyle,
			url:me.formUrl,
			timeout:me.timeout,
			daemonFormItems: me.daemonFormItems,
			defaultSend:me.defaultSend,
			listeners:{
				back_click_after:function(backBtm){
					me.fireEvent('back_click_after',me.DaemonSaveBtn);
					var btmX=me.DaemonFormPanel.getX();
					//alert("没有移动的x："+me.DaemonFormPanel.getX());
					DaemonUtil.animateTransitionX(me.DaemonFormPanel,1500,btmX,function(){
						//DaemonUtil.floatip(dmlan.tip,dmlan.add);
						var layout = me.getLayout();
				        layout.setActiveItem(0);
						//DaemonUtil.floatip(dmlan.tip,dmlan.statusoff);
			        });
				},
				add_success:function(form){
					me.fireEvent('add_success',me.DaemonFormPanel);
					me.getLayout().setActiveItem(0);
					me.DaemonContentPanel.reload();
				},
				add_click_before:function(form){
					 me.fireEvent('add_click_before',me.DaemonFormPanel);
				}
			}
		});
		
		Ext.apply(me,{
			items:[me.DaemonContentPanel,me.DaemonFormPanel,me.customPanel,me.helpPanel]
		});
		/*if(me.customPanelTeam!=null&&me.customPanelTeam.length>0){
			for ( var int = 0; int <me.customPanelTeam.length; int++) {
				me.add(me.customPanelTeam[int]);
			}
		}*/
		if(doOther){
			me.DaemonContentPanel.addListener(
					'selectionchange',function( selectionRowModel, records,  eOpts ){
						me.fireEvent('datapamel_selectionchange',selectionRowModel, records,  eOpts);
						if(records!=null&&records.length >0){
							if(me.showAddBtn){
								//me.DaemonAddBtn.setDisabled(false);
							}
							if(me.showEditBtn){
								me.DaemonEditBtn.setDisabled(false);
							}
							if(me.showStatusBtn){
								me.DaemonStatusBtn.setDisabled(false);
								if(records[0].get(me.stateCode)==me.stateValueOn){
									me.statemenu.items.get('statuson').setDisabled(true);
									me.statemenu.items.get('statusoff').setDisabled(false);
								}else{
									me.statemenu.items.get('statuson').setDisabled(false);
									me.statemenu.items.get('statusoff').setDisabled(true);
								}
							}
							if(me.showDelBtn){
								me.DaemonDelBtn.setDisabled(false);
							}
		            	}else{
		            		if(me.showAddBtn){
								//me.DaemonAddBtn.setDisabled(true);
							}
							if(me.showEditBtn){
								me.DaemonEditBtn.setDisabled(true);
							}
							if(me.showStatusBtn){
								me.DaemonStatusBtn.setDisabled(true);
							}
							if(me.showDelBtn){
								me.DaemonDelBtn.setDisabled(true);
							}
		            	}
				}
			);
			me.DaemonContentPanel.addListener(
					'itemdblclick',function( thisme, record, item, index, e, eOpts ){
						if(me.showEditBtn){
							 //DaemonUtil.floatip(dmlan.tip,"双击");
							 //me.DaemonEditBtn.fireEvent('click');
							me.fireEvent('beforeEditFormshow',me.DaemonFormPanel);
							var btmX=me.DaemonContentPanel.getX();
							DaemonUtil.animateTransitionX(me.DaemonContentPanel,-1200,btmX,function(){
								me.DaemonFormPanel.getForm().reset();
								var record = me.DaemonContentPanel.getSelectionModel().getSelection()[0];
								var value=me.DaemonContentPanel.dateStore.getById(record.get(me.storeIdProperty));
						    	me.DaemonFormPanel.getForm().loadRecord(value);
								//DaemonUtil.floatip(dmlan.tip,dmlan.edit);
								var layout = me.getLayout();
					            layout.setActiveItem(1);
					            me.fireEvent('afterEditFormshow',me.DaemonFormPanel);
					        });
						}
					 });
			me.panelTabr = Ext.create('Ext.toolbar.Toolbar', {
    		    border:false,
    		    items: []
    		});
			if(me.showAddBtn){
				me.DaemonAddBtn = Ext.create('Ext.button.Button', {
					iconCls:'daemon-btn-add',
					xtype:'button',
					text:dmlan.add,
					handler:function(){
						me.fireEvent('beforeAddFormshow',me.DaemonFormPanel);
						var btmX=me.DaemonContentPanel.getX();
						DaemonUtil.animateTransitionX(me.DaemonContentPanel,-1200,btmX,function(){
							    me.DaemonFormPanel.getForm().reset();
								//DaemonUtil.floatip(dmlan.tip,dmlan.add);
								var layout = me.getLayout();
					            layout.setActiveItem(1);
					            me.fireEvent('afterAddFormshow',me.DaemonFormPanel);
				        });
					}
					/*listeners:{
						click:function(){
							
						}
					}*/
				});
				me.panelTabr.add(me.DaemonAddBtn);
			}
			
			if(me.showEditBtn){
				me.DaemonEditBtn = Ext.create('Ext.button.Button', {
					disabled:true,
					iconCls:'daemon-btn-edit',
					xtype:'button',
					text:dmlan.edit,
					handler:function(){
						me.fireEvent('beforeEditFormshow',me.DaemonFormPanel);
						var btmX=me.DaemonContentPanel.getX();
						DaemonUtil.animateTransitionX(me.DaemonContentPanel,-1200,btmX,function(){
							me.DaemonFormPanel.getForm().reset();
							var record = me.DaemonContentPanel.getSelectionModel().getSelection()[0];
							var value=me.DaemonContentPanel.dateStore.getById(record.get(me.storeIdProperty));
					    	me.DaemonFormPanel.getForm().loadRecord(value);
							//DaemonUtil.floatip(dmlan.tip,dmlan.edit);
							var layout = me.getLayout();
				            layout.setActiveItem(1);
				            me.fireEvent('afterEditFormshow',me.DaemonFormPanel);
				        });
					}
					/*listeners:{
						click:function(){
							
						}
					}*/
				});
				me.panelTabr.add(me.DaemonEditBtn);
			}
			if(me.showStatusBtn){
				me.statemenu = Ext.create('Ext.menu.Menu', {
			        items: [
			           {
			        	   id:'statuson',
			               text: dmlan.statuson,
			               iconCls: 'daemon-btn-statuson',
			               listeners:{
								click:function(){
									DaemonUtil.ajaxcall({
										dataType:'json',
										method:'GET',
										headers:{'Content-Type':'application/json;charset=UTF-8'},
										url:me.stateChangeUrl,
										params: {
											id:me.DaemonContentPanel.getSelectionModel().getSelection()[0].get(me.storeIdProperty),
											state: 'valid'
				                	    },
										callback:function(opt,success,response){
											 var dataobj =Ext.decode(response.responseText);
											 if(dataobj.success){ 
												 me.DaemonContentPanel.getSelectionModel().getSelection()[0].set(me.stateCode,me.stateValueOn);
												 DaemonUtil.floatip(dmlan.tip,dmlan.opsuccess);
												 me.statemenu.items.get('statuson').setDisabled(true);
												 me.statemenu.items.get('statusoff').setDisabled(false);
											 }else{
												 DaemonUtil.alert(dmlan.error,dataobj.message);
											 }					
										}
									});
								}
							}
			           },{
			        	   id:'statusoff',
			               text: dmlan.statusoff,
			               iconCls: 'daemon-btn-statusoff',
			               listeners:{
								click:function(){
									//DaemonUtil.floatip(dmlan.tip,dmlan.statusoff);
									DaemonUtil.ajaxcall({
										dataType:'json',
										method:'GET',
										headers:{'Content-Type':'application/json;charset=UTF-8'},
										url:me.stateChangeUrl,
										params: {
											id:me.DaemonContentPanel.getSelectionModel().getSelection()[0].get(me.storeIdProperty),
											state: 'invalid'
				                	    },
										callback:function(opt,success,response){
											var dataobj =Ext.decode(response.responseText);
											if(dataobj.success){
												 me.DaemonContentPanel.getSelectionModel().getSelection()[0].set(me.stateCode,me.stateValueOff);
												 DaemonUtil.floatip(dmlan.tip,dmlan.opsuccess);
												 me.statemenu.items.get('statuson').setDisabled(false);
												 me.statemenu.items.get('statusoff').setDisabled(true);
											 }else{
												 DaemonUtil.alert(dmlan.error,dataobj.message);
											 }	
										}
									});
								}
							}
			           }
			        ]
			    });
				me.DaemonStatusBtn = Ext.create('Ext.button.Button', {
					disabled:true,
					iconCls:'daemon-btn-status',
					xtype:'button',
					text:dmlan.status,
					menu:me.statemenu
				});
				me.panelTabr.add(me.DaemonStatusBtn);
			}
			if(me.showDelBtn){
				me.DaemonDelBtn = Ext.create('Ext.button.Button', {
					iconCls:'daemon-btn-close',
					disabled:true,
					xtype:'button',
					text:dmlan.del,
					handler:function(){
						if(me.panelType=="tree"){
							if(!me.DaemonContentPanel.getSelectionModel().getSelection()[0].get("leaf")){
								DaemonUtil.alert(dmlan.error,"不能删除主节点.");
								return  null;
							}
						}
						DaemonUtil.ajaxcall({
							dataType:'json',
							method:'GET',
							headers:{'Content-Type':'application/json;charset=UTF-8'},
							url:me.delUrl,
							params: {
								id:me.DaemonContentPanel.getSelectionModel().getSelection()[0].get(me.storeIdProperty),
								userId:userId
	                	    },
							callback:function(opt,success,response){
								 var dataobj =Ext.decode(response.responseText);
								 if(dataobj.success){
									 var removeRecord=me.DaemonContentPanel.getSelectionModel().getSelection()[0];
									 if(me.panelType=="tree"){
										  var pnode = removeRecord.parentNode;
										  removeRecord.remove(false);
										  if(pnode!=null&&!pnode.hasChildNodes()){
											  pnode.set('leaf',true);
										  }
										  me.DaemonContentPanel.getSelectionModel().deselectAll();
									 }else{
										 me.DaemonContentPanel.getStore().remove(removeRecord);
									 }
									 DaemonUtil.floatip(dmlan.tip,dmlan.opsuccess);
								 }else{
									 DaemonUtil.alert(dmlan.error,dataobj.message);
								 }					
							}
						});
						
					}
				});
				me.panelTabr.add(me.DaemonDelBtn);
			}
			if(me.leftPanelToolBar!=null&&me.leftPanelToolBar.length>0){
				for ( var int = 0; int <me.leftPanelToolBar.length; int++) {
					me.panelTabr.add(me.leftPanelToolBar[int]);
				}
			}
			if(me.rightPanelToolBar!=null&&me.rightPanelToolBar.length>0){
				me.panelTabr.add('->');
				for ( var int = 0; int <me.rightPanelToolBar.length; int++) {
					me.panelTabr.add(me.rightPanelToolBar[int]);
				}
			}
			
			me.DaemonContentPanel.addDocked(me.panelTabr,0);
		}
		me.addEvents('beforeAddFormshow');
		me.addEvents('afterAddFormshow');
		me.addEvents('beforeEditFormshow');
		me.addEvents('afterEditFormshow');
		me.addEvents('add_click_before');
		me.addEvents('add_success');
		me.addEvents('back_click_after');
		me.addEvents('datapamel_selectionchange');
		this.callParent(arguments);
	},
	destroyMethod:function(){
		var me = this;
		me.destroy();
	},
	activeCustItem:function(num){
		var me = this;
		var btmX=me.DaemonContentPanel.getX();
		DaemonUtil.animateTransitionX(me.DaemonContentPanel,-1200,btmX,function(){
			var layout = me.getLayout();
            layout.setActiveItem(num);
        });
	}
});	