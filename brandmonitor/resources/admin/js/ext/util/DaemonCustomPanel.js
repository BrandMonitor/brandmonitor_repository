Ext.define('Ext.util.DaemonCustomPanel', {
	extend: "Ext.form.Panel",  
    requires: [
                
     ],
	alternateClassName: 'DaemonCustomPanel',
	layout: 'fit',
	border: false,
	bodyStyle: 'padding:15px 50% 15px 15px',
	leftPanelToolBar:null,
	rightPanelToolBar:null,
	waitMsgTarget: true,
	url: null,
	defaultSend:true,
	daemonFormItems: null,
	isAnimate:true,
	visit:null,
	enctype:'multipart/form-data',
	
	saveBtnName:'上传',
	initComponent: function() {
		var me = this;
			var CustomSaveBtn = Ext.create('Ext.button.Button', {
				iconCls:'daemon-btn-save',
				xtype:'button',
				text:me.saveBtnName,
				listeners:{
					click:function(){
						 var form = this.up('form').getForm();
				            if (form.isValid()&&me.defaultSend) {
				                form.submit({
				                	waitMsg: '正在上传',
				                	method:'POST',
				                	params: {
				                		enctype:me.enctype,
				                		visit:me.visit
				                    },
				                	headers:{"Content-Type":"application/json"},
				                    success: function(form, action) {
				                    	me.fireEvent('CustomUpdateSuccess',form, action);
				                    	var result=Ext.decode(action.response.responseText);
				                    	DaemonUtil.floatip(dmlan.tip,result.message);
				                    },
				                    failure: function(form, action) {
				                    	var result=Ext.decode(action.response.responseText);
				                    	me.fireEvent('CustomUpdateFailure',form, action);
				                    	switch (action.failureType) {
					                        case Ext.form.action.Action.CLIENT_INVALID:
					                            DaemonUtil.alert(dmlan.tip,'Form fields may not be submitted with invalid values');
					                            break;
					                        case Ext.form.action.Action.CONNECT_FAILURE:
					                        	DaemonUtil.alert(dmlan.tip,result.message);
					                            break;
					                        case Ext.form.action.Action.SERVER_INVALID:
					                        	DaemonUtil.alert(dmlan.tip,result.message);
				                    	}
				                    }
				                });
				            }
					}
				}
			});
		me.addEvents('CustomBackBtnClick');
		me.addEvents('CustomUpdateSuccess');
		me.addEvents('CustomUpdateFailure');
		var CustomBackBtn = Ext.create('Ext.button.Button', {
			iconCls:'daemon-btn-back',
			xtype:'button',
			text:dmlan.back,
			listeners:{
				click:function(){
					me.fireEvent('CustomBackBtnClick');
					if(me.isAnimate){
						var btmX=me.getX();
						DaemonUtil.animateTransitionX(me,1500,btmX,function(){
							//DaemonUtil.floatip(dmlan.tip,dmlan.add);
							var layout = daemon.contentPanel.dataPanel.getLayout();
					        layout.setActiveItem(0);
							//DaemonUtil.floatip(dmlan.tip,dmlan.statusoff);
				        });
					} 
				}
			}
		});
		
		var panelTabr = Ext.create('Ext.toolbar.Toolbar', {
		    border:false,
		    items: []
		});
		if(me.leftPanelToolBar!=null&&me.leftPanelToolBar.length>0){
			for ( var int = 0; int <me.leftPanelToolBar.length; int++) {
				panelTabr.add(me.leftPanelToolBar[int]);
			}
		}
		panelTabr.add(CustomSaveBtn );
		panelTabr.add(CustomBackBtn );
		if(me.rightPanelToolBar!=null&&me.rightPanelToolBar.length>0){
			panelTabr.add('->');
			for ( var int = 0; int <me.rightPanelToolBar.length; int++) {
				panelTabr.add(me.rightPanelToolBar[int]);
			}
		}
		Ext.apply(me,{
			layout: 'anchor',
		    defaults: {
		        anchor: '100%'
		    },
		    defaultType: 'textfield',
		    items:me.daemonFormItems,
			tbar:panelTabr
		});
		this.callParent(arguments);
	},
	destroyMethod:function(){
		var me = this;
		me.destroy();
	}
});	