/**
 * @author caven
 */
Ext.define('Ext.Daemon.DaemonHistory', {
    requires: [
         'Ext.util.History'
     ],
	 alternateClassName: 'DaemonHistory',
	 
    constructor: function (config) {
    	 var me = this;
    	 this.callParent(arguments);
    }
    ,
    goBack: function() {
		Ext.History.back();
	},
	goForward: function() {
		Ext.History.forward();
	},    	
	refresh: function(){
		//this.historyChange(Ext.History.getToken());
		daemon.contentPanel.contentPanelReload();
	},
	historyChange:function(token){
	    daemon.leftPanel.changePanelById(token);
	}
	
 });