Ext.define('Ext.util.DaemonFilePanel', {
	extend: "Ext.panel.Panel",  
    requires: [
                
     ],
	alternateClassName: 'DaemonFilePanel',
	layout: 'border',
	border: false,
	src: "",
	type:'D:\\hmfy\\',
	listUrl:'/admin/file/getList',
    uploadUrl:'/admin/file/uploadAppFileToOSS',
    margin:'0 0 5 0',
	imgWidth:0,
	imgHeight:0,
	formKey:null,
	formName:'i',
	
	initComponent: function() {
		var me = this;
		var daemonFilePanel=null;
		me.changingImage = Ext.create('Ext.Img', {
				src:me.src,
				name: 'i',
		});
		me.hiddenfield=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield', name:me.formName });
		me.CustomSaveBtn = Ext.create('Ext.button.Button', {
			iconCls:'daemon-btn-save',
			xtype:'button',
			iconAlign:'bottom',
			listeners:{
				click:function(){
					if(daemonFilePanel==null||daemonFilePanel.getEl( ) ==null){
	            		var form   = this.up('form').getForm();
						daemonFilePanel=Ext.create('Ext.util.DaemonAliyunFileToOSSPanel', {
							 isForm:true,
							 formMe:form,
							 formKey:me.formKey,
							 visit:me.type,
							 listUrl:me.listUrl,
							 uploadUrl:me.uploadUrl,
							 imgWidth:me.imgWidth,
							 imgHeight:me.imgHeight,
							 width:500,
							 height:300,
							 listeners:{
								 celldblclickCallBack:function(value,width,height, thisMe, td, cellIndex, record, tr, rowIndex, e, eOpts ){
									 me.setHeight(height);
									 me.changingImage.setHeight(height);
									 me.changingImage.setSrc(value);
									 me.hiddenfield.setValue(value);
							    	}
							 }
						});
					}
					if (daemonFilePanel.isVisible()) {
						daemonFilePanel.hide(this, function() {
			            });
			        } else {
			        	daemonFilePanel.show(this, function() {
			            });
			        }
				}
			}
		});
		Ext.apply(me,{
			layout: 'border',
			items: [
			    {
			    	region: 'center',
			    	xtype: 'panel',
			    	layout: 'fit',
			    	items:me.changingImage
			    },
			    {
			        region: 'east',
			        xtype: 'panel',
			        layout: 'fit',
			        items:[me.CustomSaveBtn,me.hiddenfield]
				}
			       ]
		});
		me.callParent(arguments);
	},
	destroyMethod:function(){
		var me = this;
		me.destroy();
	},
	setSrc:function(src){
		var me = this;
		me.changingImage.setSrc(src);
		me.hiddenfield.setValue(src);
	},
	onRender:function(){
		var me = this;
		me.callParent(arguments);
	}
});	