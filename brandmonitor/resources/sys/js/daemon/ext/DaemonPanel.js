Ext.define('Ext.Daemon.DaemonPanel', {
	extend: "Ext.panel.Panel",  
    requires: [
                
    ],
	alternateClassName: 'DaemonPanel',
	layout: 'card',
	border:false,
	panelType:"grid",
	storeDefaultRootProperty:null,
	storeFields:null,
	storeIdProperty:null,
	storeUrl:null,
	stateChangeUrl:null,
	panelColumns:null,
	showAddBtn:true,
	showEditBtn:true,
	showStatusBtn:true,
	DaemonAddBtn:null,
	DaemonEditBtn:null,
	DaemonStatusBtn:null,
	panelTotalProperty:'recordCount',
	panelPageSize:50,
	panelSorters:[],
	//添加标题栏按钮
	panelTabr:null,
	//添加自定义面板
	customPanel:null,
	//form面板
	daemonFormItems: [{
        fieldLabel: 'First Name',
        name: 'first',
        allowBlank: false
    },{
        fieldLabel: 'Last Name',
        name: 'last',
        allowBlank: false
    },{
        fieldLabel: 'Last Name',
        name: 'last',
        allowBlank: false
    }],
    showState:true,
    stateCode:"state",
	   
	initComponent: function() {
		var me = this;
		me.DaemonContentPanel=null;
		var doOther=true;
		
		if(me.panelType=="grid"){
			me.DaemonContentPanel=Ext.create('Ext.Daemon.DaemonGridPanel', {
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
			me.DaemonContentPanel=Ext.create('Ext.Daemon.DaemonTreePanel', {
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
			me.DaemonContentPanel=Ext.create('Ext.Daemon.DaemonIframePanel', {
				border:false,
    			storeUrl:storeUrl
    		});
    		doOther=false;
		}else{
			me.DaemonContentPanel=Ext.create('Ext.Daemon.DaemonErrorPanel', {
				border:false,
				message:"页面制作做，请选择其他页面。错误信息：ErrorPGCode-"+Ext.History.getToken()
    		});
    		doOther=false;
		}
		
		me.DaemonFormPanel=Ext.create('Ext.Daemon.DaemonFormPanel', {
			daemonFormItems: me.daemonFormItems,
			listeners:{
				back_click_after:function(backBtm){
					var btmX=me.DaemonFormPanel.getX();
					//alert("没有移动的x："+me.DaemonFormPanel.getX());
					DaemonUtil.animateTransitionX(me.DaemonFormPanel,1500,btmX,function(){
						//DaemonUtil.floatip(dmlan.tip,dmlan.add);
						var layout = me.getLayout();
				        layout.setActiveItem(0);
						//DaemonUtil.floatip(dmlan.tip,dmlan.statusoff);
			        });
				}
			}
		});
		
		Ext.apply(me,{
			items:[me.DaemonContentPanel,me.DaemonFormPanel,me.customPanel]
		});
		
		if(doOther){
			me.DaemonContentPanel.addListener(
					'selectionchange',function( selectionRowModel, records,  eOpts ){
					if(records!=null&&records.length >0){
						if(me.showAddBtn){
							me.DaemonAddBtn.setDisabled(false);
						}
						if(me.showEditBtn){
							me.DaemonEditBtn.setDisabled(false);
						}
						if(me.showStatusBtn){
							me.DaemonStatusBtn.setDisabled(false);
						}
	            	}else{
	            		if(me.showAddBtn){
							me.DaemonAddBtn.setDisabled(true);
						}
						if(me.showEditBtn){
							me.DaemonEditBtn.setDisabled(true);
						}
						if(me.showStatusBtn){
							me.DaemonStatusBtn.setDisabled(true);
						}
	            	}
				}
			)
			me.panelTabr = Ext.create('Ext.toolbar.Toolbar', {
    		    border:false,
    		    items: []
    		});
			if(me.showAddBtn){
				me.DaemonAddBtn = Ext.create('Ext.button.Button', {
					iconCls:'daemon-btn-add',
					xtype:'button',
					text:dmlan.add,
					listeners:{
						click:function(){
							var btmX=me.DaemonContentPanel.getX();
							DaemonUtil.animateTransitionX(me.DaemonContentPanel,-1200,btmX,function(){
								    me.DaemonFormPanel.getForm().reset();
									//DaemonUtil.floatip(dmlan.tip,dmlan.add);
									var layout = me.getLayout();
						            layout.setActiveItem(1);
					        });
						}
					}
				});
				me.panelTabr.add(me.DaemonAddBtn);
			}
			if(me.showEditBtn){
				me.DaemonEditBtn = Ext.create('Ext.button.Button', {
					disabled:true,
					iconCls:'daemon-btn-edit',
					xtype:'button',
					text:dmlan.edit,
					listeners:{
						click:function(){
							var btmX=me.DaemonContentPanel.getX();
							DaemonUtil.animateTransitionX(me.DaemonContentPanel,-1200,btmX,function(){
								me.DaemonFormPanel.getForm().reset();
								var record = me.DaemonContentPanel.getSelectionModel().getSelection()[0];
						    	me.DaemonFormPanel.getForm().loadRecord(record);
								//DaemonUtil.floatip(dmlan.tip,dmlan.edit);
								var layout = me.getLayout();
					            layout.setActiveItem(1);
					        });
						}
					}
				});
				me.panelTabr.add(me.DaemonEditBtn);
			}
			if(me.showAddBtn){
				var menu = Ext.create('Ext.menu.Menu', {
			        items: [
			           {
			               text: dmlan.statuson,
			               iconCls: 'daemon-btn-statuson',
			               listeners:{
								click:function(){
									DaemonUtil.ajaxcall({
										dataType:'json',
										method:'GET',
										url:contextPath+me.stateChangeUrl+"?state=valid",
										callback:function(opt,success,response){
											 									
										}
									});
								}
							}
			           },{
			               text: dmlan.statusoff,
			               iconCls: 'daemon-btn-statusoff',
			               listeners:{
								click:function(){
									//DaemonUtil.floatip(dmlan.tip,dmlan.statusoff);
									DaemonUtil.ajaxcall({
										dataType:'json',
										method:'GET',
										url:contextPath+me.stateChangeUrl+"?state=invalid",
										callback:function(opt,success,response){
											
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
					menu:menu
				});
				me.panelTabr.add(me.DaemonStatusBtn);
			}
			
			
			
			me.DaemonContentPanel.addDocked(me.panelTabr,0);
		}
		this.callParent(arguments);
	},
	destroyMethod:function(){
		var me = this;
		me.destroy();
	}
});	