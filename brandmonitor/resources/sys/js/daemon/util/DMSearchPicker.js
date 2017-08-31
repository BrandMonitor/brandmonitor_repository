Ext.define('Daemon.util.DMSearchPicker', {
	extend:'Ext.form.field.Picker',
	requires: [
	      //'Ext.form.field.ComboBox'
	],
	alias: 'Daemon.DMSearchPicker',
	alternateClassName: 'DMSearchPicker',
	
	editable:false,
	matchFieldWidth:false,
	hideClearTrigger:false,
	hideSearchTrigger:false,
	hideTriggerTrigger:false,
	//trigger1Cls : Ext.baseCSSPrefix + 'form-clear-trigger',
	//trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger',
	//trigger3Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
	
	/*查找数据store*/
	pickerStore:null,
	
	/*查找数据的url*/
	url:null,
	
	/*查找数据的params*/
	params:null,
	/*配置store的field，格式：['xx','xx']*/
	storeField:null,
	
	/*配置girdpanel显示的column，格式：['xx','xx']*/
	dataColumn:null,
	
	/*具体搜索的是哪个字段*/
	valueField:null,
	
	/*具体显示的是哪个字段*/
	displayField:null,
	
	/*按查找提交的值*/
	submitValue:null,
	
	/*查找的方法*/
	search:null,
	
	/*下拉面板的宽度*/
	displayFieldWidth:250,
	
    initComponent : function(){
        var me = this;
        var i = 0;
        if(!me.hideClearTrigger){
        	//alert(1);
	     	me.trigger1Cls = Ext.baseCSSPrefix + 'form-clear-trigger';
	     	me.onTrigger1Click = function(){
    			me.submitValue =null;
				this.setValue("");
				me.fireEvent('sp_clearValue_d');
	     	};
			//trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger',
			i++;
	     }
	     if(!me.hideSearchTrigger){
	     	if(i==1){
	     		me.trigger2Cls = Ext.baseCSSPrefix + 'form-search-trigger';
	     		me.onTrigger2Click = function(){
	    			me.search();
		     	};
	     	}else{
	     		me.trigger1Cls = Ext.baseCSSPrefix + 'form-search-trigger';
	     		me.onTrigger1Click = function(){
	    			me.search();
	     		};
	     	}
	     	i++;
	     }
	     if(!me.hideTriggerTrigger){
	     	if(i==0){
	     		me.trigger1Cls = Ext.baseCSSPrefix + 'form-trigger-trigger';
	     		me.onTrigger1Click = function(){
	    			me.expand();
	     		};
	     	}else if(i==1){
	     		me.trigger2Cls = Ext.baseCSSPrefix + 'form-trigger-trigger';
	     		me.onTrigger2Click = function(){
	    			me.expand();
	     		};
	     	}else{
	     		me.trigger3Cls = Ext.baseCSSPrefix + 'form-trigger-trigger';
	     		me.onTrigger3Click = function(){
	    			me.expand();
	     		};
	     	}
	     	
	     }
        me.addEvents('sp_itemSearch_d');
        me.addEvents('sp_itemClick_d');
        me.addEvents('sp_clearValue_d');
        me.addEvents('sp_itemDbClick_d');
        me.callParent(arguments);
    },

    createPicker: function() {
	     var me = this,picker,pickerHeight =300;
	     
	     if(me.pickerStore==null){
	    	 me.pickerStore  = Ext.create('Ext.data.Store', {	
				fields:me.storeField,
				pageSize:10,
				proxy: {
					 type: "ajax",
					 url: me.url,  
					 headers:{"Accept":"application/json"},
					 method:'GET',
					 extraParams:me.params,
					 reader: {
						 type: 'json',
				         root: 'listPageObject',
				         totalProperty: 'recordCount'
					 },
					 listeners:{
					     exception:function( theproxy, response, operation, options ){
					     }
					 }
				} 		
			});
	     } 
	     
	     var pgtb = Ext.create('Ext.PagingToolbar', {
		     store: me.pickerStore,
		     displayInfo: true		       
	   	 });
	     
	     searchByName_T = Ext.create('Ext.form.field.Trigger', {
			 width:'100%',
		     editable:true,
		     hideLabel: true,
		     emptyText:'在此处输入查询条件',
		     triggerCls: Ext.baseCSSPrefix + 'form-search-trigger',
		     onTriggerClick:function(eventObj){
		     	 me.fireEvent('sp_itemSearch_d');
		    	 searchName_val = this.getValue();
		     	 Ext.apply(me.pickerStore.proxy.extraParams, {query:searchName_val});
		     	 me.pickerStore.loadPage(1);
		     },
		     listeners:{
		    	 specialkey: function(field, e){
	                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
	                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
	                    if (e.getKey() == e.ENTER) {
	                    	 me.fireEvent('sp_itemSearch_d');
	        		    	 searchName_val = this.getValue();
	        		     	 Ext.apply(me.pickerStore.proxy.extraParams, {query:searchName_val});
	        		     	 me.pickerStore.loadPage(1);
	                    }
	                }
		     }
		});	
	     
	     /*
		 var datac = new Array();
									  if(me.dataColumn!=null){	    	 
					  for(var i=0;i<me.dataColumn.length;i++){
						  datac.push({
							  text:me.dataColumn[i],
							  dataIndex:me.dataColumn[i],
							  flex:1
						  });
					  }
				  }*/
		 
	     
	     //wgApp.log(datac);
	   	 var gridp = Ext.create('Ext.grid.Panel', {
	   		 	tbar:[searchByName_T],
	    	    store: me.pickerStore,
	    	    columns:me.dataColumn,
	    	    bbar:pgtb,
	    	    listeners:{
	    	    	itemclick:function(view,record){
	    	    		var record = this.getSelectionModel().getSelection()[0];
	    	    		var v = record.get(me.displayField);
	    	    		me.submitValue = record.get(me.valueField);
	    	    		me.setValue(v);
	    	    		//me.collapse();
	    	    		
	    	    		
	    	    		me.fireEvent('sp_itemClick_d',record);
	    	    	},
	    	    	itemdblclick:function(view,record){
	    	    		var record = this.getSelectionModel().getSelection()[0];
	    	    		var v = record.get(me.displayField);
	    	    		me.submitValue = record.get(me.valueField);
	    	    		me.setValue(v);
	    	    		me.fireEvent('sp_itemDbClick_d',record);
	    	    		//me.addEvents('');
	    	    	}
	    	    	
	    	    }
	     });
	     
    	 picker = new Ext.panel.Panel({
    		// pickerField: me,
    		 floating: true,
    		 hidden: true,
    		 ownerCt: this.ownerCt,
    		 width:me.displayFieldWidth,
    		 layout:'fit',
    		 items:[gridp]
	     });

    	  return picker;  	  
    },
    getSubmitValue:function(){
    	var me = this;
		var v = me.submitValue;
		return v;
    },
    setSubmitValue:function(value){
    	var me = this;
		me.submitValue = value;
		//return v;
    },
    resetPicker:function(){
    	var me = this;
    	me.submitValue = null;
    	if(me.pickerStore!=null){
    		me.pickerStore.removeAll();
    	}
    	
    	me.reset();
    }/*,
    onTrigger1Click:function(){
    	var me = this;
    	me.submitValue =null;
		this.setValue("");
	},
    onTrigger2Click:function(){
    	var me = this;
    	me.search();
    }*/
});