Ext.define('Ext.Daemon.DaemonFormPanel', {
	extend: "Ext.form.Panel",  
    requires: [
                
     ],
	alternateClassName: 'DaemonFormPanel',
	layout: 'fit',
	border: false,
	storeUrl:null,
	bodyStyle: 'padding:15px 50% 15px 15px',
	//padding:'15 50% 15 15',
	waitMsgTarget: true,
	url: 'http://www.google.com',
	
	daemonFormItems: null,
    
	initComponent: function() {
		var me = this;
		me.DaemonSaveBtn = Ext.create('Ext.button.Button', {
			iconCls:'daemon-btn-save',
			xtype:'button',
			text:dmlan.save,
			listeners:{
				click:function(){
					 me.fireEvent('add_click_before',me.DaemonSaveBtn);
					 var form = this.up('form').getForm();
			            if (form.isValid()) {
			                form.submit({
			                	waitMsg: dmlan.saving,
			                    success: function(form, action) {
			                    	DaemonUtil.floatip(dmlan.tip,dmlan.savesuccess);
			                    },
			                    failure: function(form, action) {
			                    	DaemonUtil.alert(dmlan.tip,dmlan.savefail);
			                    }
			                });
			            }
			         me.fireEvent('add_click_after',me.DaemonSaveBtn);
				}
			}
		});
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
		Ext.apply(me,{
			layout: 'anchor',
		    defaults: {
		        anchor: '100%'
		    },
		    defaultType: 'textfield',
		    items:me.daemonFormItems,
		    tbar:[me.DaemonSaveBtn,me.DaemonBackBtn]
		});
		
		this.callParent(arguments);
	},
	destroyMethod:function(){
		var me = this;
		me.destroy();
	}
});	