Ext.define('Micro.localNews.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroLocalNewsMain',
	
	initComponent: function() {
		var me = this;
		
		var hiddenfieldForSoure=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield',inputId:'id', name: 'id' });
		var fieldLabel=Ext.create('Ext.form.field.Text', {xtype: 'textfield',inputId:'ids', name: 'ids' });
		
		var htmlEditor=Ext.create('Ext.util.DaemonHtmlEditor', {
			readOnly:false,
			name:'content',
			margin:'0 10 10 0',
			flex:1
		});
		
		var sourcestore = Ext.create('Ext.data.Store', {
			 fields: ['id', 'name'],
			 autoLoad:true,
	         proxy: {
	             type: 'ajax',
	             headers:{"Accept":"application/json"},
	             method:'GET',
	             reader: {
				     type: 'json',
				     root: 'listPageObject'
				 },
	             url:contextPath+"/admin/newsource/list",
	             listeners:{
		    			load:function(treestore,node,record,su){
		    				
		    			} 
			        }
	         }
		});
		var sourcecomboBox=Ext.create('Ext.form.ComboBox', {
			store: sourcestore,
		    editable:false,
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    autoSelect:true,
		    autoShow:true,
		    value:'',
		    name:'source',
			inputId:'source',
		    fieldLabel:'新闻来源',
		    displayField: 'name',
		    valueField: 'id'
		});
		
		var communitystore = Ext.create('Ext.data.Store', {
			 fields: ['id', 'title'],
			 autoLoad:true,
	         proxy: {
	             type: 'ajax',
	             headers:{"Accept":"application/json"},
	             method:'GET',
	             reader: {
				     type: 'json',
				     root: 'listPageObject'
				 },
	             url:contextPath+"/admin/community/list",
	             listeners:{
		    			load:function(treestore,node,record,su){
		    				
		    			} 
			        }
	         }
		});
		var communitycomboBox=Ext.create('Ext.form.ComboBox', {
			store: communitystore,
		    editable:false,
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    emptyText:'社会新闻可以不选',
		    autoSelect:true,
		    autoShow:true,
		    value:'',
		    name:'communityId',
			inputId:'communityId',
		    fieldLabel:'发布社区',
		    displayField: 'title',
		    valueField: 'id'
		});
		
		var searchByName = Ext.create('Ext.form.field.Trigger', {
			 width:260,
		     editable:true,
		     emptyText:'模糊搜索标题，简介',
		     labelWidth:60,
		     labelAlign:'right',
			 fieldLabel:'搜索',
		     trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		     trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger',
		     onTrigger1Click:function(eventObj){
		    	 Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {name:null});
		         me.DaemonContentPanel.dateStore.reload();
		         searchByName.reset();
		     }, 
		     onTrigger2Click:function(eventObj){
		    	 newValue = this.getValue();
		    	 Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {name:newValue});
		         me.DaemonContentPanel.dateStore.reload();
		     },
		     listeners:{
		    	 specialkey: function(field, e){
	                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
	                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
	                    if (e.getKey() == e.ENTER) {
	                    	newValue = this.getValue();
	       		    	 	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {name:newValue});
	       		    	 	me.DaemonContentPanel.dateStore.reload();
	                    }
	                }
		     }
		});
		
		var newstypecomboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
					{"value":2, "name":"社会新闻"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'新闻类型',
		    value:2,
		    name: 'newsType',
		    inputId:'newsType',
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    	//Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {state:null});
		    	//me.DaemonContentPanel.dateStore.reload();
		    	//statecomboBox.reset();
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        	//Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {state:newValue});
		        	//me.DaemonContentPanel.dateStore.reload();
		        }
		    }
		});
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['id','title','img', 'introduction', 'content','newsType','communityId','source','star','reporter','status','replyTimes','createTime'],
			storeIdProperty:'id',
			stateCode:'status',
			showAddBtn:true,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:false,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/localNews/del',
		    formUrl:contextPath+'/admin/localNews/add',
			storeUrl:contextPath+'/admin/localNews/list',
			rightPanelToolBar:[searchByName],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
				         ,{header:'标题',dataIndex:'title',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'简介',dataIndex:'introduction',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'点赞',dataIndex:'star',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'回复次数',dataIndex:'replyTimes',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'新闻类型',dataIndex:'newsType',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 if(data==1){
					    		 return '本地新闻';
					    	 }else{
					    		 return '社会新闻';
					    	 }
					        }}}
					     ,{header:'发布日期',dataIndex:'createTime',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 return Ext.Date.format(new Date(data), 'Y-m-d H:i:s');
					        }}}
				         ],
			daemonFormItems: [
						hiddenfieldForSoure
						,sourcecomboBox
						,{fieldLabel: '标题',name: 'title',flex:3,allowBlank: true,inputId:'title',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '图片',name: 'img',flex:3,allowBlank: true,inputId:'img',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '摘要',xtype: 'textareafield',height:50,name: 'introduction',flex:3,allowBlank: true,inputId:'introduction',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '点赞',xtype:'numberfield',name: 'star',inputId:'star',
							step:10,
							value:0,
							minValue:0,
							allowBlank: true,
							labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '回复次数',xtype:'numberfield',name: 'replyTimes',inputId:'replyTimes',
							step:10,
							value:0,
							minValue:0,
							allowBlank: true,
							labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落图片1',name: 'img1',flex:3,allowBlank: true,inputId:'img1',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落小标题1',xtype: 'textareafield',height:50,name: 'title1',flex:3,allowBlank: true,inputId:'title1',value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落内容1',xtype: 'textareafield',height:150,name: 'content1',flex:1,allowBlank: true,inputId:'content1',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						
						,{fieldLabel: '段落图片2',name: 'img2',flex:3,allowBlank: true,inputId:'img2',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落小标题2',xtype: 'textareafield',height:50,name: 'title2',flex:3,allowBlank: true,inputId:'title2',value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落内容2',xtype: 'textareafield',height:150,name: 'content2',flex:1,allowBlank: true,inputId:'content2',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						
						,{fieldLabel: '段落图片3',name: 'img3',flex:3,allowBlank: true,inputId:'img3',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落小标题3',xtype: 'textareafield',height:50,name: 'title3',flex:3,allowBlank: true,inputId:'title3',value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落内容3',xtype: 'textareafield',height:150,name: 'content3',flex:1,allowBlank: true,inputId:'content3',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						
						,{fieldLabel: '段落图片4',name: 'img1',flex:3,allowBlank: true,inputId:'img4',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落小标题4',xtype: 'textareafield',height:50,name: 'title4',flex:3,allowBlank: true,inputId:'title4',value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落内容4',xtype: 'textareafield',height:150,name: 'content4',flex:1,allowBlank: true,inputId:'content4',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						
						,{fieldLabel: '段落图片5',name: 'img5',flex:3,allowBlank: true,inputId:'img5',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落小标题5',xtype: 'textareafield',height:50,name: 'title5',flex:3,allowBlank: true,inputId:'title5',value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落内容5',xtype: 'textareafield',height:150,name: 'content5',flex:1,allowBlank: true,inputId:'content5',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						
						,{fieldLabel: '段落图片6',name: 'img6',flex:3,allowBlank: true,inputId:'img6',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落小标题6',xtype: 'textareafield',height:50,name: 'title6',flex:3,allowBlank: true,inputId:'title6',value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落内容6',xtype: 'textareafield',height:150,name: 'content6',flex:1,allowBlank: true,inputId:'content6',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						
						,{fieldLabel: '段落图片7',name: 'i',flex:3,allowBlank: true,value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落小标题7',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落内容7',xtype: 'textareafield',height:150,name: 'c',flex:1,allowBlank: true,value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						
						,{fieldLabel: '段落图片7',name: 'i',flex:3,allowBlank: true,value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落小标题7',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落内容7',xtype: 'textareafield',height:150,name: 'c',flex:1,allowBlank: true,value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						
						,{fieldLabel: '段落图片7',name: 'i',flex:3,allowBlank: true,value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落小标题7',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落内容7',xtype: 'textareafield',height:150,name: 'c',flex:1,allowBlank: true,value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						
						,{fieldLabel: '段落图片7',name: 'i',flex:3,allowBlank: true,value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落小标题7',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落内容7',xtype: 'textareafield',height:150,name: 'c',flex:1,allowBlank: true,value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						
						,{fieldLabel: '段落图片7',name: 'i',flex:3,allowBlank: true,value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落小标题7',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落内容7',xtype: 'textareafield',height:150,name: 'c',flex:1,allowBlank: true,value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						
						,{fieldLabel: '段落图片7',name: 'i',flex:3,allowBlank: true,value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落小标题7',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落内容7',xtype: 'textareafield',height:150,name: 'c',flex:1,allowBlank: true,value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						
						,{fieldLabel: '段落图片7',name: 'i',flex:3,allowBlank: true,value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落小标题7',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '段落内容7',xtype: 'textareafield',height:150,name: 'c',flex:1,allowBlank: true,value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
                              ],
			listeners:{
				afterEditFormshow:function(theFormPage){
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
					hiddenfieldForSoure.setValue(records[0].get("id"));
					me.daemonFormItems.items.add(fieldLabel);
				} 
			}
			});
		this.callParent(arguments);
	} 
});	