Ext.define('Ext.Daemon.Daemon', {
	extend: "Ext.Viewport",  
    requires: [
                
     ],
	alternateClassName: 'Daemon',
	layout: 'border',
	topPanel:null,
	leftPanel:null,
	contentPanel:null,
	   
	initComponent: function() {
		var me = this;
		
		me.topPanel = Ext.create('Ext.Daemon.TopPanel', {});
		me.leftPanel = Ext.create('Ext.Daemon.LeftPanel', {});
		me.contentPanel = Ext.create('Ext.Daemon.ContentPanel', {});
		
		me.daemonHistory = new Ext.Daemon.DaemonHistory();
		Ext.History.init();
		Ext.History.on('change',me.daemonHistory.historyChange);
		Ext.History.add(null);
		
		Ext.apply(me,{
			items: [
	         		me.topPanel,
	         		me.leftPanel, 
	         		me.contentPanel,
		            {
				        region: 'south',
				        baseCls:'ms-bg-light ms-bg-footer',
				        padding : '0 10 0 0',
				        //height:20,
				        html:'Powerby music&#8482;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;version 1.0'
				        //hidden:true
				       }
		        ],
		        listeners:{
		        	render:function( thisOjb, eOpts ){
		        		me.topPanel.addMenus(function afterSuccessFunction(){
		        			DaemonUtil.floatip(dmlan.tip,"系统初始化成功。");
		        		});
		        	}
		        },
		        renderTo: Ext.getBody()
		});
		this.callParent(arguments);
	},
	dmP:function(addPanel,destroyMethod){
		var me = this;
		if(addPanel==null){
			return null;
		}
		me.contentPanel.dmP(addPanel,destroyMethod);
	}
});	