/**
 * @author caven
 */
/** 
Example
@see define usage: http://localhost:8080/webres/js/extjs-4.1.1/docs/index.html#!/api/Ext
@see class usage: http://localhost:8080/webres/js/extjs-4.1.1/docs/source/Viewport.html#Ext-container-Viewport
*/
Ext.define('Daemon.util.DMItemSelectorPicker', {
	extend:'Ext.panel.Panel',  
	alias: 'Daemon.DMItemSelectorPicker',
	alternateClassName: 'DMItemSelectorPicker',
	requires: [ 
	           'Ext.data.Store',
	           'Ext.Button',
	           'Ext.grid.Panel',
	           'Ext.form.field.Hidden', 
	           'Ext.panel.Panel'
	       ],
	//bodyPadding: 5,
	border:false,		
	layout: {
        type: 'vbox',       // Arrange child items vertically
        align: 'stretch'
    },
    leftFields:null,
    rightFields:null,
    leftUrl:null,
    rightUrl:null,
    leftColumns:null,
    rightColumns:null,
    //提交的变量名称
    hiddenAppInputId:'_add_',//需要添加的数据
    hiddenAppInputId2:'_del_',//需要删除的数据
    hiddenDropInputId:'_drop_',//排序的数据
    
    hiddenAppInputId_default_value:null,
    leftTitle:null,
    rightTitle:null,
    leftToorbal:null,
    rightToorbal:null,
    //缓存的数组，不需要用户操作
    appObj:null,
    pageSize:15,
    //新增模式，默认右边为空，最后为一次性添加 
    //右边不为空时，自动转换为添加模式
    addmode:true,
    //自动转换模式
    auto_addmode:true,
    //右边是否分页
    right_pagination:false,
    //添加URL
    leftUrlSave:null,
    //删除URL
    rightUrlDel:null,
    //添加或者删除的标示列的名称
    left_or_right_mark_id:'id',
    //添加或者删除的标示值
    markId:null,
    orderby:null,
    //隐藏中间整页添加的按钮 
    hiddenButton:false,
    //设置右边面板是否可以拖动
    r_draggable:false,
    //添加列
    r_add_row:null,
    //默认一开始自动load数据
    frist_load:true,
    
    //右边gridpanel的扩展插件
    rightGirdplugins:null,
    
    sign:':',
    
	initComponent: function() {
		var me =this;
		me.addEvents('r_selectionchange');
		me.addEvents('r_drop');
		me.appObjDefault = new Array();
		me.appObj = new Array();
		me.appObjDel = new Array();
		
		//用于改变值的
		me.appObjChange =[];
		
		me.hiddenfieldForDrop=Ext.create('Ext.form.field.Hidden',{
			xtype: 'hiddenfield',
			inputId:me.hiddenDropInputId,
			name:me.hiddenDropInputId,
			value:me.hiddenAppInputId_default_value
			});
		me.hiddenfieldForApp=Ext.create('Ext.form.field.Hidden',{
			xtype: 'hiddenfield',
			inputId:me.hiddenAppInputId,
			name:me.hiddenAppInputId,
			value:me.hiddenAppInputId_default_value
			});
		me.hiddenfieldForAppDel=Ext.create('Ext.form.field.Hidden',{
			xtype: 'hiddenfield',
			inputId:me.hiddenAppInputId2,
			name:me.hiddenAppInputId2,
			value:me.hiddenAppInputId_default_value
			});
		//取得隐藏框的值
		me.hiddenfieldForApp2=Ext.create('Ext.form.field.Hidden', 
				{
			xtype: 'hiddenfield',
			value:me.hiddenAppInputId_default_value
			});
		me.hiddenfieldForAppDel2=Ext.create('Ext.form.field.Hidden',{
			xtype: 'hiddenfield',
			value:me.hiddenAppInputId_default_value
			});
		me.leftstore = Ext.create('Ext.data.Store', {
			 fields:me.leftFields,
			 pageSize:me.pageSize,
			 sorters:me.orderby,
	         proxy: {
	             type: 'ajax',
	             headers:{"Accept":"application/json"},
	             method:'GET',
	             reader: {
				     type: 'json',
				     root: 'list',	 
 		             totalProperty: 'dataSize'
				 },
	             url:me.leftUrl
	             
	         },
	         listeners:{
	    			load:function(gridstore,node,record,su){
	    				me.leftColumnsNum=gridstore.getTotalCount();
	    			},
	    			beforeload:function( store, operation,  eOpts ){
	    				Ext.apply(store.proxy.extraParams, {_markId:me.markId});
	    				Ext.apply(store.proxy.extraParams, {removeParam:me.getHiddenValue()});
	    			} 
		        }
	        
		});
			me.rightstore = Ext.create('Ext.data.Store', {
				 fields:me.rightFields,
		         proxy: {
		             type: 'ajax',
		             headers:{"Accept":"application/json"},
		             method:'GET',
		             reader: {
					     type: 'json'
					 },
					 extraParams: {
						 _markId:me.markId
					    },
		             url:me.rightUrl
		         },
	             listeners:{
		    			load:function(gridstore,node,record,su){
		    				me.rightColumnsNum=gridstore.getTotalCount();
		    				if(me.auto_addmode){
		    					if(me.rightColumnsNum!=null&&me.rightColumnsNum>0){
			    					me.addmode=false;
			    				}else{
			    					me.addmode=true;
			    				}
		    				}
		    				//如果是提交参数模式，则开始必须记录右边面板的ID
		    				if(me.rightColumnsNum>0){
		    					me.appObjDefault = new Array();
		    					for ( var int = 0; int < me.rightColumnsNum; int++) {
		    						me.addDefaultValue(gridstore.getAt(int).get(me.left_or_right_mark_id));
								}
		    					
		    				}
		    			},
		    			beforeload:function( store, operation,  eOpts ){
		    				Ext.apply(store.proxy.extraParams, {_markId:me.markId}); 
		    			} 
			        }
		        
			});
		
		me.leftColumns.push({
			header:'操作',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            xtype: 'actioncolumn',
            width: 60,
            items: [{
            	 getClass: function(v, meta, rec) { 
            		 this.items[0].tooltip = '添加';
                     return 'fbs-btn-add';
                 },
                 handler: function(grid, rowIndex, colIndex) {
                	 me.leftAdd(rowIndex);
                	// alert(me.hiddenfieldForApp.getValue() +"|||||"+me.appObjDefault.join() +"|||||"+me.hiddenfieldForAppDel.getValue() );
                 }
            }]
        }
                             );
		
		if(me.r_add_row!=null){
			me.rightColumns.push(me.r_add_row);
		}
		me.rightColumns.push({
			header:'操作',
            menuDisabled: true,
            sortable: false,
            align: 'center',
            xtype: 'actioncolumn',
            width: 60,
            items: [{
            	iconCls:'fbs-btn-delete',  
                tooltip: '删除',
                handler: function(grid, rowIndex, colIndex) {
                    me.rightDel(rowIndex);
                    //alert(me.hiddenfieldForApp.getValue() +"|||||"+me.appObjDefault.join() +"|||||"+me.hiddenfieldForAppDel.getValue() );
                }
            }]
        	}
          );
		
		me.leftPanel=Ext.create('Ext.grid.Panel', {
		    store: me.leftstore,
		    columns:me.leftColumns,
		    tbar:me.leftToorbal,
		    title:me.leftTitle,
//		    stateful: true,
//	        collapsible: true,
//	        multiSelect: true,
		    width: '44%',
			height: '100%',
			bbar: Ext.create('Ext.PagingToolbar', {
	            store: me.leftstore 
	        })
		});
		var rightbbar=null;
		if(me.right_pagination){
			Ext.apply(me.rightstore.proxy.reader, {root:'list'});
			Ext.apply(me.rightstore.proxy.reader, {totalProperty:'dataSize'});
			Ext.apply(me.rightstore, {pageSize:me.pageSize});
			rightbbar=Ext.create('Ext.PagingToolbar', {
	            store: me.rightstore 
	        })
		}	
		
		var r_viewConfig={
		        plugins: {
		            ptype: 'gridviewdragdrop'
		           /* dragText: '应用模板排序',
		            drop:function(){
		            	alert(1);
		            }	*/						            
		        },
		        listeners:{
	            	drop:function(node,data,overModel,dropPosition,eOpts ){
	            		rightNum=me.rightstore.data.length;
	            		if(rightNum>0){
	            			me.hiddenfieldForDrop.setValue("");
	            			for ( var int = 0; int < rightNum; int++) {
	            				var indexId=me.rightstore.getAt(int).get(me.left_or_right_mark_id);
	            				if(int==0){
	            					me.hiddenfieldForDrop.setValue(indexId);
	            				}else{
	            					me.hiddenfieldForDrop.setValue(me.hiddenfieldForDrop.getValue()+","+indexId);
	            				}
							}
	            		}
	            		me.fireEvent('r_drop',node,data,overModel,dropPosition,eOpts);
	            	}
	            }
		    };
		
		if(!me.r_draggable){
			r_viewConfig=null;
		};
		
		
		me.rightPanel=Ext.create('Ext.grid.Panel', {
			plugins:me.rightGirdplugins,
		    store:me.rightstore,
		    columns: me.rightColumns,
		    tbar:me.rightToorbal,
		    title:me.rightTitle,
		    width: '44%',
			height: '100%',
			bbar:rightbbar,
			viewConfig:r_viewConfig,
			listeners: {
				selectionchange:function(selectionRowModel, records,  eOpts ){
					me.fireEvent('r_selectionchange',selectionRowModel, records,  eOpts);
				},
		        drop:function(node,data,overModel,dropPosition,eOpts ){
//		        	me.fireEvent('r_drop',node,data,overModel,dropPosition,eOpts);
		        }
			}
		});
	
		
		me.button1=Ext.create('Ext.Button', {
		    text: '添加整页>',
		    width: '100%',
		    margins: '5 5 5 5',
		    handler: function() {
		    	var count=me.leftstore.getCount();
		    	if(count>0){
			    	for ( var int = 0; int <count; int++) {
						me.leftAdd(0);
					}
		    	}
		    }
		});
		me.button2=Ext.create('Ext.Button', {
		    text: '<删除整页',
		    width: '100%',
		    margins: '5 5 5 5',
		    handler: function() {
		    	var count=me.rightstore.getCount();
		    	if(count>0){
		    		for ( var int = 0; int <count; int++) {
						me.rightDel(0);
					}
		    	}
		    	
		    }
		});
		me.Panel2=Ext.create('Ext.panel.Panel', {
			width: '10%',
			height: '100%',
		    layout: 'vbox',
		    border:false,	
		    margins: '60 5 5 5' ,
		    items:[ me.button1, me.button2]
		});
		
		if(me.hiddenButton){
			/*Ext.apply(me.Panel2,{
				items: [ me.button1, me.button2]
			});*/
			me.Panel2=Ext.create('Ext.panel.Panel', {
				width: '10%',
				height: '100%',
			    layout: 'vbox',
			    border:false,	
			    margins: '60 2 5 2' 
			});
		}
		Ext.apply(me,{
    		layout:{
    			type:'hbox'
    		},
     		items:[me.leftPanel,me.Panel2,me.rightPanel,me.hiddenfieldForDrop,me.hiddenfieldForApp,me.hiddenfieldForApp2,me.hiddenfieldForAppDel,me.hiddenfieldForAppDel2]
		});
//		me.addListener("beforeadd",function(component, eOpts){
//			alert(1);
//		});

		this.callParent(arguments);
	}, 
	addDefaultValue:function(value){
		var me =this;
		me.appObjDefault.push(value);
	},
	hiddenfieldForApp_setValue:function(array){
		var me =this;
		me.hiddenfieldForApp.setValue(array.join());
	},
	hiddenfieldForApp2_setValue:function(array){
		var me =this;
		me.hiddenfieldForApp2.setValue(array.join());
	},
	hiddenfieldForAppDel_setValue:function(array){
		var me =this;
		me.hiddenfieldForAppDel.setValue(array.join());
	},
	hiddenfieldForAppDel2_setValue:function(array){
		var me =this;
		me.hiddenfieldForAppDel2.setValue(array.join());
	},
	addHiddenValue:function(value){
		var me =this;
		var isNotExist=true;
		if(me.appObjDefault!=null&&me.appObjDefault.length>0){
			for(var j = 0; j < me.appObjDefault.length; j++){
                if(me.appObjDefault[j]===value){
                	isNotExist=false;
                 }
 			}
		}
		if(isNotExist){
			me.appObj.push(value);
		}
		if(me.addmode){
			me.hiddenfieldForApp_setValue(me.appObj);
		}
		me.hiddenfieldForApp2_setValue(me.appObj);
	},
	change_submit_value:function(array,signs){
		for(var j = 0; j < array.length; j++){
			if(me.appObjChange[array[j]]){
				
			}
		}
		me.appObjChange[value]=newValue;
	},
	removeHiddenValue:function(value){
		var me =this;
		var isNotExist=true;
		if(me.appObjDefault!=null&&me.appObjDefault.length>0){
			for(var j = 0; j < me.appObjDefault.length; j++){
                if( me.appObjDefault[j]===value){
                	isNotExist=false;
                 }
 			}
		}
		if(isNotExist){
			if(me.appObj!=null&&me.appObj.length>0){
				for(var j = 0; j < me.appObj.length; j++){
	                if(me.appObj[j]===value){
	                	me.appObj.splice(j,1);
	                 }
	 			}
			}
		}else{
			me.appObjDel.push(value);
		}
		if(me.addmode){
			me.hiddenfieldForApp_setValue(me.appObj);
			me.hiddenfieldForAppDel_setValue(me.appObjDel);
		}
		me.hiddenfieldForApp2_setValue(me.appObj);
		me.hiddenfieldForAppDel2_setValue(me.appObjDel);
	},
	leftAdd:function(rowIndex){
		var me =this;
		var rec = me.leftstore.getAt(rowIndex);
		me.addHiddenValue(rec.get(me.left_or_right_mark_id));
        me.leftstore.removeAt(rowIndex);
        if(me.leftstore.getCount()==0){
        	me.leftstore.load();
        }
        me.rightstore.add(rec);
        rec.commit(); 
        //数据添加模式
        if(me.addmode){
        	
        }else{
        	/*if(me.rightstore==me.pageSize){
            	me.leftstore.loadPage(me.leftstore.count());
            }*/
        	var aa= WGUtil.ajaxcall({
    			method:'GET',
    			url:me.leftUrlSave,
    			params:{
    				_markId:me.markId,
    				_addId:rec.get(me.left_or_right_mark_id)
    			},
    			callback:function(opt,success,response){
    	    		if(!wgApp.checkResponse(response)){return null;}
    				var dataRes = Ext.decode(response.responseText);
    				/*if(dataRes=="true"){
    				}else{
    					wgApp.floatip('添加失败','添加不成功，请重试。');
    					me.removeHiddenValue(rec.get(me.left_or_right_mark_id));
    					me.rightstore.removeAt(rowIndex);
    			        me.leftstore.add(rec);
    				}*/
    			}
    		});
        }
	},
	rightDel:function(rowIndex){
		var me =this;
		var rec = me.rightstore.getAt(rowIndex);
		me.removeHiddenValue(rec.get(me.left_or_right_mark_id));
        me.rightstore.removeAt(rowIndex);
        me.leftstore.add(rec);
      //数据添加模式
        if(me.addmode){
        	
        }else{
        	/*if(me.rightstore==me.pageSize){
            	me.leftstore.loadPage(me.leftstore.count());
            }*/
        	var aa= WGUtil.ajaxcall({
    			method:'GET',
    			url:me.rightUrlDel,
    			params:{
    				_markId:me.markId,
    				_addId:rec.get(me.left_or_right_mark_id)
    			},
    			callback:function(opt,success,response){
    	    		if(!wgApp.checkResponse(response)){return null;}
    				var dataRes = Ext.decode(response.responseText);
    				/*if(dataRes=="true"){
    				}else{
    					wgApp.floatip('输出失败','输出不成功，请重试。');
    					me.addHiddenValue(rec.get(me.left_or_right_mark_id));
    					me.leftstore.removeAt(rowIndex);
    			        me.rightstore.add(rec);
    				}*/
    			}
    		});
        }
	},
	changeMode:function(){
		var me =this;
		if(addmode){
			addmode=false;
		}else{
			addmode=true;
		}
	},
	reload:function(){
		var me =this;
    	me.leftstore.load();
    	me.rightstore.load();
    	//me.setDocked(me.rightPanel,true);
	},
	changeMarkId:function(newMarkId){
		var me =this;
		me.markId=newMarkId;
	},
	getValue:function(){
		var me =this;
		return me.hiddenfieldForApp.getValue();
	},
	clearValue:function(){
		var me =this;
		me.appObj = new Array();
		me.appObjDel = new Array();
		me.appObjDefault = new Array();
		me.changeMarkId(null);
		me.hiddenfieldForApp.setValue(null);
		me.hiddenfieldForApp2.setValue(null);
		me.hiddenfieldForAppDel.setValue(null);
		me.hiddenfieldForAppDel2.setValue(null);
		me.rightstore.load();
		me.leftstore.load();
	},
	getHiddenValue:function(){
		var me =this;
		return me.hiddenfieldForApp2.getValue();
	},
	getHiddenDelValue:function(){
		var me =this;
		return me.hiddenfieldForAppDel2.getValue();
	},
	change_frist_load:function(value){
		var me =this;
		me.frist_load=value;
	},
	onRender:function(){
		var me = this;
		if(me.frist_load){
			me.leftstore.load();
			me.rightstore.load();
		}
		me.callParent(arguments);
	}
 });