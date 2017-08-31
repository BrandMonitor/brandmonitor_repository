Ext.define('Ext.Daemon.LeftPanel', {
	extend: "Ext.panel.Panel",  
    requires: [
                
     ],
	alternateClassName: 'LeftPanel',
	
	showId:null,
	//layout: 'fit',
	layout: 'border',
    region:'west',
    border: true,
    split:true,
    collapsible: true,
    margins: '0 0 0 5',
    width: 180,
    showPanel:null,
    activeItem: null,
	
	initComponent: function() {
		var me = this;
		me.treePanelList=new Array();
		
		var store = Ext.create('Ext.data.TreeStore', {
		    root: {
		        expanded: true,
		        children: [
		            { id:"star",text: "收藏夹", expanded: true, iconCls:"daemon-btn-star",children: [
		                { id:"home",text: "桌面",iconCls:"daemon-btn-home", leaf: true },
		                { id:"time",text: "最近访问目录", iconCls:"daemon-btn-time",leaf: true}
		            ] }
		        ]
		    }
		});
		
		me.leftTopPanel=Ext.create('Ext.tree.Panel', {
			rootVisible: false,
			store: store,
			border: false,
			layout: 'fit',
			region: 'north',
			listeners:{
		    	select:function(treeview,record){
		    		DaemonUtil.floatip(dmlan.tip,record.get("id"));
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
		
		var changingImage = Ext.create('Ext.Img', {
			rowspan: 2,
			width:90,
			maxWidth:90,
			maxHeight:90,
			height:90,
			align:'center',
			margin:'30 0 0 44',
			border: 1,
			style: {
			    borderColor: 'black',
			    borderStyle: 'solid'
			},
		    src: 'http://www.sencha.com/img/20110215-feat-html5.png' 
		});
		
		me.leftCenterPanel=Ext.create('Ext.form.Panel', {
			border: false,
			//margin: '15 5 0 5',
			//padding: '15 5 0 5',
			layout: {
		        type: 'table',
		        columns: 1
		    },
			//region: 'center',
			region: 'south',
			items: [
			        changingImage,
			        {
			        	inputId : 'home_score',
			        	name: 'home_score',
			            xtype: 'displayfield',
			            hideLabel:true,
			            fieldLabel: 'Home',
			            margin:'0 10 0 10',
			            labelWidth:40,
			            value: '<span style="color:green;">eclipse-快捷方式</span>'
			        }
			        ,{
			        	inputId : 'home_score',
			        	name: 'home_score',
			            xtype: 'displayfield',
			            fieldLabel: '文件类型',
			            hideLabel:true,
			            margin:'0 10 0 10',
			            labelWidth:60,
			            value: '<span style="color:green;">图片</span>'
			        }
			        ,{
			        	inputId : 'home_score',
			        	name: 'home_score',
			            xtype: 'displayfield',
			            fieldLabel: '创建日期',
			            margin:'0 5 0 5',
			            labelWidth:60,
			            value: '<span style="color:green;">2013-06-06 12:06</span>'
			        }
			        ,{
			        	inputId : 'home_score',
			        	name: 'home_score',
			            xtype: 'displayfield',
			            fieldLabel: '修改日期',
			            margin:'0 5 0 5',
			            labelWidth:60,
			            value: '<span style="color:green;">2013-06-06 12:06</span>'
			        }
			        ,{
			        	inputId : 'home_score',
			        	name: 'home_score',
			            xtype: 'displayfield',
			            fieldLabel: '文件大小',
			            margin:'0 5 10 5',
			            labelWidth:60,
			            value: '<span style="color:green;">0.71M</span>'
			        }
			        ]
		});
		me.leftFooterPanel=Ext.create('Ext.panel.Panel', {
			border: false,
			layout: 'fit',
			//region: 'south',
			region: 'center',
			items: []
		});
		
		
		Ext.apply(me,{
			items: [me.leftTopPanel,me.leftCenterPanel,me.leftFooterPanel]
		});
		this.callParent(arguments);
	},
	addTreePanelList: function(treePanel) {
		var me = this;
		me.treePanelList[me.treePanelList.length]=treePanel;
	},
	TreePanelListFindPid: function(id) {
		var me = this;
		for ( var int = 0; int < me.treePanelList.length; int++) {
			treePanel=me.treePanelList[int];
			var record=treePanel.getStore().getNodeById(id);
			if(record!=null){
				record.pId=treePanel.getStore().getRootNode().get("id");
				return record;
			}
		}
	}
	/*,
	changePanel: function(pId,id){
		var me = this;
		me.getLayout().setActiveItem(pId);
		var treePanel=Ext.getCmp(pId);
		if(treePanel!=null){
			var rootRecord=treePanel.getStore().getRootNode();
			if(rootRecord!=null){
				me.setTitle(rootRecord.get("title"));
			}
			var record=treePanel.getStore().getNodeById(id);
			treePanel.getSelectionModel().deselectAll();
			
			var noOverCascadeBy=true;
			record.cascadeBy(function(node){
				if(node.get("leaf")&&noOverCascadeBy){
					noOverCascadeBy=false;
					treePanel.selectPath(node.getPath());
				}
			});
		}
	},
	changePanelById: function(id){
		var me = this;
		if(id!=null&&id.length>0){
			var record=me.TreePanelListFindPid(id);
			if(record!=null){
				me.getLayout().setActiveItem(record.pId);
				var treePath=record.get("treepath");
				var pIds = treePath.split("/");
				var pId=pIds[1];
				me.changePanel(pId,id);
				daemon.contentPanel.dmLoader(record);
			}else{
				daemon.contentPanel.dmErrorP("","页面制作做，请选择其他页面。错误信息：ErrorPGCode-"+id);
			}
		}
	}*/
});	