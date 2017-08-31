Ext.define('Ext.System.HomeExt', {
	extend: "Ext.Viewport",  
    requires: [
                
     ],
	alternateClassName: 'HomeExt',
	layout: 'border',
	baseCls:'ms-bg-light',
	oldSysHasLeftPanelExt:null,
	   
	initComponent: function() {
		var me = this;
		
		me.sysTopPanelExt = Ext.create('Ext.System.SysTopPanelExt', {});
		//me.sysLeftPanelExt = Ext.create('Ext.System.SysLeftPanelExt', {});
		me.sysCenterPanelExt = Ext.create('Ext.System.SysCenterPanelExt', {});
		
		
		Ext.apply(me,{
			items: [
	         		me.sysTopPanelExt,
	         		me.sysCenterPanelExt,
		            {
				        region: 'south',
				        baseCls:'ms-bg-footer',
				        padding : '0 10 0 0',
				        //height:20,
				        html:'Powerby 微助手&#8482;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;version 1.6'
				        //hidden:true
				       }
		        ],
		        listeners:{
		        	render:function( thisOjb, eOpts ){
		        		
		        	}
		        },
		        renderTo: Ext.getBody()
		});
		this.callParent(arguments);
	},
	allReady:function(){
		var me = this;
		var selectNum=0;
		daemon.sysTopPanelExt.dataview.select(selectNum,true,true);
		daemon.changeCenterPanelByRecord(daemon.sysTopPanelExt.dataviewStore.getAt(selectNum));
	},
	dmP:function(addPanel,destroyMethod){
		var me = this;
		if(addPanel==null){
			return null;
		}
		me.oldSysHasLeftPanelExt.SysCenterContentPanel.dmP(addPanel,destroyMethod);
	},
	changeCenterPanelByRecord: function(record){
		var me = this;
		if(record.get("leaf")){
              var sysNoLeftPanelExt = Ext.create('Ext.System.SysNoLeftPanelExt', {
              });
              me.sysCenterPanelExt.dmP(sysNoLeftPanelExt,null);
        }else{
              var sysHasLeftPanelExt = Ext.create('Ext.System.SysHasLeftPanelExt', {
            	  record:record
              });
              if(me.oldSysHasLeftPanelExt!=null){
            	  me.oldSysHasLeftPanelExt.destroy();
              }
              me.oldSysHasLeftPanelExt=sysHasLeftPanelExt;
              me.sysCenterPanelExt.dmP(sysHasLeftPanelExt,null);
        }
	}
});	