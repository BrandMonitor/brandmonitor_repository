/**
 * @author caven
 */
/** 
Example
@see define usage: http://localhost:8080/webres/js/extjs-4.1.1/docs/index.html#!/api/Ext
@see class usage: http://localhost:8080/webres/js/extjs-4.1.1/docs/source/Viewport.html#Ext-container-Viewport
*/
Ext.define('Daemon.util.DMTreePicker', {
	extend:'Ext.form.field.Picker',  
    requires: [ 
         'Ext.grid.Panel',
         'Ext.data.TreeStore',
         'Ext.tree.Panel'
     ],
	alias: 'util.DMTreePicker',
	alternateClassName: 'DMTreePicker',
	pageaniconfig:{duration: 500},
	/*设置点击按钮的图片*/
	triggerCls: Ext.baseCSSPrefix + 'form-arrow-trigger',
	/*是：返回id的值  否：返回text的值*/
	returnId:true,
	/*获取目录树参数变量*/
	treeParams:null,
	/*是：初始化树    否：默认状态*/
	setPicker:false,
	/*是：为输入框设置第一个值    否：默认状态*/
	setFristValue:false,
	/*是否展开*/
	treeExpand:true,
	storeDefaultRootProperty:null,
	
	/*下拉框与input框宽度是否一致,eidted by JJ*/
	matchFieldWidth:false,
	
	/*显示完整的channelName，包含上一级的节点*/
	showFullTreeName:false,
	
	treeJsonUrl:null,
    initComponent: function() {
    	 var me=this;
    	 if(me.setPicker){
    		 me.createPicker();
    	 }
    	 this.callParent(arguments);
    },
   
    createPicker: function() {
    	 var me =this;
    	 me.DMTreeStore = Ext.create('Ext.data.TreeStore', {
    		 defaultRootProperty:me.storeDefaultRootProperty,
    	     autoLoad: true,
	         proxy: {
	             type: 'ajax',
	             headers:{"Accept":"application/json"},
	             method:'GET',
	             reader: {
				     type: 'json'
				 },
	             params:me.treeParams,
	             url:me.treeJsonUrl
	         },
	         listeners:{
	    			load:function(treestore,node,record,su){
	    		    	if(me.setPicker&&me.setFristValue){
	    		    		 var buz=me.DMTreeStore.getRootNode().getChildAt(0);
	    		    		 me.setShowValue(buz.raw.id);
	    		    	}
	    		    	if(!me.treeExpand){
	    		    		 me.picker.collapseAll();
	    		    	}
	    		    	me.fireEvent('beforeTreeshow',me.DMTreeStore);
	    			}
		        }
    	 });
         me.hiddenfieldForTree=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield', name: 'hiddenfieldForTree' });
    	 me.picker=Ext.create('Ext.tree.Panel', {
    		      store: me.DMTreeStore,
    		      rootVisible: false,
    		      autoScroll: true,
    		      floating: true,
    		      //collapsed:true,//edited by JJ ,default display width
    		      width:280,//edited by JJ ,default display width
    		      focusOnToFront: true,
    		      shadow: true,
    		      ownerCt: this.ownerCt,
    		      items:me.hiddenfieldForTree,
    		      listeners:{
    		    	 itemclick:function( treeMe,  record,  item,  index,  e,  eOpts){
    		    		 //var node = me.picker.getSelectionModel().getSelection(); 
    		    		 var treeText = "";
    		    		 var node = me.DMTreeStore.getNodeById(record.get('id'));
		    			 treeText = node.data.text;
    		    		 if(me.showFullTreeName){
        		    		 while(node.parentNode!=null){
        		    			 node = node.parentNode;
        		    			 if(node.data.text!="Root"){
        		    				 treeText = node.data.text+"-"+treeText;
        		    			 }
        		    		 } 
    		    		 }
    		    		 
    		    		//var r = me.picker.getView().getRecords(node);
    		    		//alert(r[0].get('text'));
    		    		 //wgApp.log(node);
    		    		//alert(node.parentNode);
    		    		 //node.expand();
    		    		 
    		    		 me.setHiddenValue(record.get('id'));
    		    		 me.setValue(treeText);
    		    		 //me.setValue(record.get('text'));
    		    		 me.collapse();
    		    		 me.inputEl.focus();
    		    	 }
    		      }
    		});
    	
       return me.picker;
    },
    alignPicker: function(){
        var me = this,
            picker = me.getPicker(),
            heightAbove = me.getPosition()[1] - Ext.getBody().getScroll().top,
            heightBelow = Ext.Element.getViewHeight() - heightAbove - me.getHeight(),
            space = Math.max(heightAbove, heightBelow);

        // Allow the picker to height itself naturally.
        if (picker.height) {
            delete picker.height;
            picker.updateLayout();
        }
        // Then ensure that vertically, the dropdown will fit into the space either above or below the inputEl.
        if (picker.getHeight() > space - 5) {
            picker.setHeight(space - 5); // have some leeway so we aren't flush against
        }
        me.callParent();
    },

    onListRefresh: function() {
        this.alignPicker();
        this.syncSelection();
    },
    setHiddenValue: function(values){
    	 this.hiddenfieldForTree.setValue(values);
    },
    setFirstHiddenValue: function(treestore,treeid){
    	
    },
    setShowValue: function(id){
    	 var me = this;
    	 var buz=me.DMTreeStore.getNodeById(id);
    	 if(buz!=null){
    		 var treeText="";
    		 me.setHiddenValue(buz.get("id"));
    		 treeText = buz.get("text");
    		 if(me.showFullTreeName){
    			 while(buz.parentNode!=null){
    				 buz = buz.parentNode;
	    			 if(buz.data.text!="Root"){
	    				 treeText = buz.data.text+"-"+treeText;
	    			 }
    			 }
    		 }
    		 me.setValue(treeText); 
    		 //me.setValue(buz.get("text")); 
    	 }
    },
    getValue: function() {
    	var me = this;
    	return me.hiddenfieldForTree.getValue();
    },
    getShowValue: function() {
    	var me = this;
    	return me.value;
    },
    getSubmitValue: function() {
        return this.getValue();
    },
    getDisplayValue: function() {
    	 return this.getValue();
    },
    clearValue: function() {
    	var me = this;
    	me.setValue([]);
        me.hiddenfieldForTree.setValue('');
    },
    onItemClick: function(picker, record){
        /*
         * If we're doing single selection, the selection change events won't fire when
         * clicking on the selected element. Detect it here.
         */
        var me = this,
            selection = me.picker.getSelectionModel().getSelection(),
            valueField = me.valueField;

        if (!me.multiSelect && selection.length) {
            if (record.get(valueField) === selection[0].get(valueField)) {
                // Make sure we also update the display value if it's only partial
                me.displayTplData = [record.data];
                me.setRawValue(me.getDisplayValue());
                me.collapse();
            }
        }
    },

    onBeforeSelect: function(list, record) {
        return this.fireEvent('beforeselect', this, record, record.index);
    },
    

    onBeforeDeselect: function(list, record) {
        return this.fireEvent('beforedeselect', this, record, record.index);
    }

 });