Ext.define('Ext.System.SysTopPanelExt', {
	extend: "Ext.panel.Panel",  
    requires: [
     	'Ext.util.DaemonUtil'
     ],
	alternateClassName: 'SysTopPanelExt',
	
	layout: 'border',
	region: 'north',
	height: 81,
	border: false,
	dataviewStore:null,
	//margins: '0 0 0 10',
	   
	initComponent: function() {
		var me = this;
		
		var n_leftPanel = Ext.create('Ext.panel.Panel', {
			region: 'west',
			height: 80,
			baseCls:'ms-top-light',
			html:logo,
			width: 229
			   });
			   
	   var n_rightPanel = Ext.create('Ext.panel.Panel', {
			region: 'east',
			baseCls:'ms-top-light',
			width: 229,
			tbar:{
        		 id:'ms_menu',
				 baseCls:'ms-top-light' 
        	},
 			bbar: {
				 id:'ms_navigation',
        		 baseCls:'ms-top-light' 
 			}
			   });
			   
	  	var n_bottomPanel = Ext.create('Ext.panel.Panel', {
			region: 'south',
			baseCls:'ms-spacing-light',
			height: 1
		});
			   
   	 	/* var data = [
	        [ 1,  "系统首页", "home" ,"../resources/admin/img/house.png",false],
	        [ 2,  "会员管理", "home" ,"../resources/admin/img/hy.png",true],
	        [ 3,  "营销系统", "home" ,"../resources/admin/img/yx.png",false],
	        [ 4,  "自动回复", "home" ,"../resources/admin/img/hf.png",false],
	        [ 5,  "报表系统", "home" ,"../resources/admin/img/bb.png",false]
	    ];
	
	   Ext.define('Mobile', {
	        extend: 'Ext.data.Model',
	        fields: [
	            {name: 'id', type: 'int'},
	            'name',
	            'ename',
	            'img',
	            'leaf'
	        ]
	    });
	
	    me.store = Ext.create('Ext.data.ArrayStore', {
	        model: 'Mobile',
	        sortInfo: {
	            field    : 'name',
	            direction: 'ASC'
	        },
	        data: data
	    });*/
	    
		Ext.define('dataviewStoreFieldsModel', {
	        extend: 'Ext.data.Model',
	        fields:['code','pcode', 'treepath', 'title','seat','url','icon','status','children','leaf','id','text','isIframe'],
			idProperty:'code'
	    });
	    me.dataviewStore = Ext.create('Ext.data.Store', {
			 autoLoad:true,
			 model: 'dataviewStoreFieldsModel',
	         proxy: {
	             type: 'ajax',
	             headers:{"Accept":"application/json"},
	             method:'GET',
	             reader: {
				     type: 'json' 
				 },
	             url:contextPath+"/daemon/menu"
	         },
	         listeners:{
		    		load:function(treestore,node,record,su){
		    			setTimeout(daemon.allReady,300);
		    			//alert(treestore.getCount());
		    		} 
			 }
		});
	    me.dataview = Ext.create('Ext.view.View', {
	        deferInitialRefresh: false,
	        store: me.dataviewStore,
	        tpl  : Ext.create('Ext.XTemplate',
	            '<tpl for=".">',
	                '<div class="phone">',
	                    (!Ext.isIE6? '<img width="46" height="46" src="{icon}" />' :
	                     '<div style="width:46px;height:46px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'{icon}\',sizingMethod=\'scale\')"></div>'),
	                    '<span>{title}</span>',
	                '</div>',
	            '</tpl>'
	        ),
	
	        id: 'phones',
	        frame:true,
	        itemSelector: 'div.phone',
	        overItemCls : 'phone-hover',
	        multiSelect : true,
	        autoScroll  : true,
	        listeners: {
                selectionchange: function(dv, nodes, object ){
                	//alert(nodes[0].data.children);
                	//alert(me.dataviewStore.getCount());
                	//me.changeCenterPanelByRecord(nodes[0].data);
                	daemon.changeCenterPanelByRecord(nodes[0]);
                },
                render:function(){
                	
                }
            }
	    });	   
	    
		var n_topPanel = Ext.create('Ext.panel.Panel', {
			region: 'center',
		    height:80,
        	baseCls:'ms-bg-deep',
            margins: '0 0 0 0',
            padding: '0 0 0 50',
			baseCls:'ms-top-light',
        	border: false,
        	items:me.dataview
		      });
		
			   
		Ext.apply(me,{
			items: [ 
			         n_leftPanel,
			         n_topPanel,
			         n_rightPanel,
			         n_bottomPanel
		          ],
		    listeners: {
                render:function(){
                	
                }
            }
		});
		
		
		me.msMenu=Ext.getCmp("ms_menu");
		me.msNavigation=Ext.getCmp("ms_navigation");
		
		
		me.msNavigation.add('->');
				me.msNavigation.add({
					xtype:'button',
					iconCls:'daemon-btn-user',
					text:'<font color="#FFFFFF" size="40px">您好：'+userName+'</font>',
					overCls:'ms-bg-deep',
					listeners:{
						click:function(){
							Ext.History.back();
						}
					}
				});
		me.msNavigation.add({
					xtype:'button',
					text:'<font color="#FFFFFF" size="40px">退出系统</font>',
					iconCls:'daemon-btn-quit',
					overCls:'ms-bg-deep',
					listeners:{
						click:function(){
							window.location=contextPath+"/loginOut";
						}
					}
				});
		
		this.callParent(arguments);
	}
});	