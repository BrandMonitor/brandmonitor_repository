Ext.define('Ext.Daemon.TopPanel', {
	extend: "Ext.panel.Panel",  
    requires: [
               'Ext.Daemon.DaemonUtil',
               'Ext.data.TreeStore'
     ],
	alternateClassName: 'TopPanel',
	
	layout: 'border',
	region: 'north',
	height: 60,
	border: false,
	margins: '0 0 0 10',
	   
	initComponent: function() {
		var me = this;
		
		var n_leftPanel = Ext.create('Ext.panel.Panel', {
			    region: 'west',
			    height: 60,
			    baseCls:'ms-bg-light',
			    html:logo,	
			    width: 180
			   });
		var n_topPanel = Ext.create('Ext.panel.Panel', {
			region: 'center',
		    height:60,
        	baseCls:'ms-bg-deep',
            margins: '0 5 0 0',
        	border: false,
        	tbar:{
        		 id:'ms_menu',
        		 baseCls:'ms-bg-light' 
        	},
 			bbar: {
					id:'ms_navigation',
					baseCls:'ms-bg-light' 
 			}
		   });
		
		
		Ext.apply(me,{
			items: [ 
			         n_leftPanel,
			         n_topPanel
		          ]
		});
		
		
		me.msMenu=Ext.getCmp("ms_menu");
		me.msNavigation=Ext.getCmp("ms_navigation");
		
		
		
		
		me.msNavigation.add({
			xtype:'button',
			text:'后退',
			iconCls:'daemon-btn-foback',
			overCls:'ms-bg-deep',
            handler: function(btn) {
            	daemon.daemonHistory.goBack();
            }} );
		me.msNavigation.add({
			xtype:'button',
			text:'前进',
			iconCls:'daemon-btn-forward',
			overCls:'ms-bg-deep',
            handler: function(btn) {
            	daemon.daemonHistory.goForward();
            }
        });
		me.msNavigation.add({
			xtype:'button',
			text:'刷新',
			iconCls:'daemon-btn-refresh',
			overCls:'ms-bg-deep',
            handler: function(btn) {
            	daemon.daemonHistory.refresh();
            }
        });
		
		this.callParent(arguments);
	},
	addMenus:function(afterSuccessFunction){
		var me = this;
		DaemonUtil.ajaxcall({
			dataType:'json',
			checkWGResponse:true,
			method:'GET',
			url:'menu.json',
			callback:function(opt,success,response){
				if(success){
				    var dataobj =Ext.decode(response.responseText);
					me.topmenus = dataobj;
					for(var i =0;i<dataobj.length;i++){
						var topmenu =me.topmenus[i];
						me.initMenus(topmenu,topmenu);
						var treestore = Ext.create('Ext.data.TreeStore', {
							defaultRootProperty:'children',
	    					fields:['id','title','text','img','leaf','children'],
	    					idProperty:'id',
	    				    root: topmenu
	    				});
						/*var treepanel=Ext.create('Ext.tree.Panel', {
							id:topmenu.id,
							rootVisible: false,
	    				    store: treestore,
	    				    //useArrows:true,
	    				    border:false,
	    				    listeners:{
	    				    	select:function(treeview,record){
	    				    		Ext.History.add(record.get("id"));
	    				    		//daemon.contentPanel.dmLoader(record);
	    				    		//me.daemonHistory.historyChange(record.get("code"));
	    				    	},
	    				    	beforeselect:function( selectionRowModel, record, index, eOpts ){
	    				    		if (!record.get('leaf')) {
	    				    			return false;
	    				    		}
	    			            },beforeitemclick:function(treeview,record){
	    				    		if (!record.get('leaf')) {
	    				    			treeview.toggle(record);
	    				    			return false;
	    				    		}
	    				    	}
	    				    }
	    				});
						daemon.leftPanel.addTreePanelList(treepanel);
						daemon.leftPanel.add(treepanel);*/
						me.msMenu.add({
							xtype:'button',
							cls:'ms-bg-deep',
							border:false,
					        arrowAlign: 'right',
					        iconCls:topmenu.img,
							text:topmenu.title,
							menu:topmenu.menu
						});
					}
					if(afterSuccessFunction!=null){
						afterSuccessFunction();
					}
				}else{
					alert("读取菜单失败");
				}
				me.msMenu.add('->');
				me.msMenu.add({
					xtype:'button',
					iconCls:'daemon-btn-user',
					text:'您好：'+userName,
					overCls:'ms-bg-deep',
					listeners:{
						click:function(){
							Ext.History.back();
						}
					}
				});
				me.msMenu.add({
					xtype:'button',
					text:'退出',
					iconCls:'daemon-btn-quit',
					overCls:'ms-bg-deep',
					listeners:{
						click:function(){
							window.location=contextPath+"/loginOut";
						}
					}
				});
			}
		});
	},
	initMenus:function(jsonObj,topMenu){
	    	var me = this;
	    	Ext.apply(jsonObj,{
	    		expanded:true,
	    		iconCls:jsonObj.img,
	    		text:jsonObj.title,
	      		listeners:{
	    			click:function(){
	    				DaemonUtil.floatip(dmlan.tip,"topPanel 181行 "+jsonObj.id);
	    				//daemon.leftPanel.changePanel(topMenu.id,jsonObj.id);
	    			}
	    		}
			});
	    	
	    	if(jsonObj.children!=null&&jsonObj.children.length>0){
	    		Ext.apply(jsonObj,{
	    			menu:{
	    				showSeparator:true,	
	        			items:jsonObj.children
	    			}    			
	    		});
	    		for(var i =0;i<jsonObj.children.length;i++){
	    			var item = jsonObj.children[i];
	    			me.initMenus(item,topMenu);
	    		}
	    	}else{
	    		jsonObj.leaf=true;
	    	}
	    } 
});	