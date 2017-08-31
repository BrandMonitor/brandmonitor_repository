Ext.define('Ext.util.DaemonFormPanel', {
	extend: "Ext.form.Panel",  
    requires: [
                
     ],
	alternateClassName: 'DaemonFormPanel',
	layout: 'fit',
	border: false,
	storeUrl:null,
	autoScroll: true,
	bodyStyle: 'padding:15px 50% 15px 15px',
	//padding:'15 50% 15 15',
	waitMsgTarget: true,
	url: null,
	defaultSend:true,
	daemonFormItems: null,
	timeout:60*1000,
	bodyCls:'ms-bg-light x-panel',
    
	initComponent: function() {
		var me = this;
		me.DaemonBackBtn = Ext.create('Ext.button.Button', {
			iconCls:'daemon-btn-back',
			xtype:'button',
			text:dmlan.back,
			listeners:{
				click:function(){
					me.fireEvent('back_click_before',me.DaemonBackBtn);
					//DaemonUtil.floatip(dmlan.tip,dmlan.back);
					me.fireEvent('back_click_after',me.DaemonBackBtn);
				}
			}
		});
		me.DaemonSaveBtn = Ext.create('Ext.button.Button', {
			iconCls:'daemon-btn-save',
			xtype:'button',
			text:dmlan.save,
			listeners:{
				click:function(){
					 var form = this.up('form').getForm();
					 me.fireEvent('add_click_before',form);
			            if (form.isValid()&&me.defaultSend) {
			                form.submit({
			                	//clientValidation: true,
			                	waitMsg: dmlan.saving,
			                	timeout:me.timeout,
			                	headers:{"Accept":"application/json"},
			                	params: {
			                	        newStatus: 'delivered'
			                	    },
			                    success: function(form, action) {
			                    	//daemon.daemonHistory.refresh();
			                    	var result=Ext.decode(action.response.responseText);
			                    	DaemonUtil.floatip(dmlan.tip,dmlan.savesuccess);
			                    	me.fireEvent('add_success',form);
			                    },
			                    failure: function(form, action) {
			                    	var result=Ext.decode(action.response.responseText);
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
			         me.fireEvent('add_click_after',form);
				}
			}
		});
		Ext.apply(me,{
			layout: 'anchor',
		    defaults: {
		        anchor: '100%'
		    },
		    defaultType: 'textfield',
		    tbar:[me.DaemonBackBtn,me.DaemonSaveBtn],
		    items:me.daemonFormItems
		});
		/*me.addEvents('add_click_before');
		me.addEvents('add_success');
		me.addEvents('add_click_after');*/
		this.callParent(arguments);
	},
	destroyMethod:function(){
		var me = this;
		me.destroy();
	}
});	