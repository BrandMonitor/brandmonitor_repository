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
		
		var reporterStore = Ext.create('Ext.data.Store', {
			 fields: ['reporterName'],
			 autoLoad:true,
	         proxy: {
	             type: 'ajax',
	             headers:{"Accept":"application/json"},
	             method:'GET',
	             reader: {
				     type: 'json',
				     root: 'listPageObject'
				 },
	             url:contextPath+"/admin/reporter/list",
	             listeners:{
		    			load:function(treestore,node,record,su){
		    				
		    			} 
			        }
	         }
		});
		var reporterComboBox=Ext.create('Ext.form.ComboBox', {
			store: reporterStore,
		    editable:false,
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    autoSelect:true,
		    autoShow:true,
		    value:'',
		    name:'reporterName',
			inputId:'reporterName',
		    fieldLabel:'记者姓名',
		    displayField: 'reporterName',
		    valueField: 'reporterName'
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
				 extraParams:{
					 limit:1000
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
		
		var newsTypeSelect=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
                    {"value":10, "name":"一周一邻"},
					{"value":11, "name":"慢走生活"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'新闻类型',
		    value:"",
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {newsType:null});
		    	me.DaemonContentPanel.dateStore.reload();
		    	newsTypeSelect.reset();
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {newsType:newValue});
		        	me.DaemonContentPanel.dateStore.reload();
		        }
		    }
		});
		
		var statusComboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
                    {"value":2, "name":"审核"},
                    {"value":1, "name":"启用"},
                    {"value":0, "name":"停用"},
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'状态类型',
		    value:"",
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {statusType:null});
		    	me.DaemonContentPanel.dateStore.reload();
		    	statusComboBox.reset();
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {statusType:newValue});
		        	me.DaemonContentPanel.dateStore.reload();
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
				    {"value":10, "name":"一周一邻"},
					{"value":11, "name":"慢走生活"},
                    {"value":12, "name":"遇邻印象"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'新闻类型',
		    value:10,
		    name: 'newsType',
		    inputId:'newsType',
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        }
		    }
		});
		
		var genderComboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
				    {"value":0, "name":"当新闻类型为 遇邻印象 时，性别不能为空"},
					{"value":1, "name":"男"},
                    {"value":2, "name":"女"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'性别',
		    value:0,
		    name: 'gender',
		    inputId:'gender',
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    },
	        listeners:{
	        	afterrender:function(me2,eOpts){
	    			},
		        change:function(cb,newValue,oldValue){
		        }
		    }
		});
		
		var imgWidth=160;
		var imgHeight=160;
		
		var indexImg = Ext.create('Ext.util.DaemonImgPanel', {
			fieldLabel:'合并后慢走生活的首页图',
			formName:'indexImg',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage = Ext.create('Ext.util.DaemonImgPanel', {
			fieldLabel:'封面图片',
			formName:'img',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage1 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i1',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage2 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i2',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage3 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i3',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage4 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i4',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage5 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i5',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage6 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i6',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage7 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i7',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage8 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i8',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage9 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i9',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage10 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i10',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage11 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i11',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage12 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i12',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage13 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i13',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage14 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i14',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage15 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i15',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage16 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i16',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage17 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i17',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage18 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i18',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage19 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i19',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage20 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i20',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage21 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i21',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage22 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i22',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage23 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i23',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage24 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i24',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage25 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i25',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage26 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i26',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage27 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i27',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage28 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i28',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage29 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i29',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage30 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i30',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage31 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i31',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage32 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i32',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage33 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i33',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage34 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i34',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage35 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i35',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage36 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i36',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage37 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i37',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage38 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i38',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage39 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i39',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage40 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i40',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage41 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i41',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage42 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i42',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage43 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i43',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage44 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i44',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage45 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i45',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage46 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i46',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage47 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i47',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage48 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i48',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage49 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i49',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage50 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i50',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage51 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i51',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage52 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i52',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage53 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i53',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage54 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i54',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage55 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i55',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage56 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i56',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage57 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i57',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage58 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i58',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage59 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i59',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage60 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i60',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage61 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i61',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage62 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i62',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage63 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i63',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage64 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i64',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage65 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i65',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage66 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i66',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage67 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i67',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage68 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i68',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage69 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i69',
			width:imgWidth,
			height:imgHeight
		});
		var changingImage70 = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i70',
			width:imgWidth,
			height:imgHeight
		});
		startTime = Ext.create('Ext.util.DaemonDateTimePicker', {
			fieldLabel:'上线时间',
		    //labelAlign:'left',
			width:150,
			inputId:'startTime',
			name: 'startTime',
			showTimePicker:true,
			hideClearTrigger:false,
			hideSearchTrigger:true,
			hideTriggerTrigger:true,
			labelStyle: 'font-weight:bold;padding:0',
			clearFunction:function(){
				Ext.apply(me.dataStore.proxy.extraParams, {startTime:null});
		     	me.dataStore.loadPage(1);
			}
		});
		var daemonFilePanel=null;
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['id','title','img','indexImg', 'introduction', 'content','newsType','yulin','communityId','source','star','click','data','reporter','status','replyTimes','createTime','startTime'],
			storeIdProperty:'id',
			stateCode:'status',
			showAddBtn:true,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:true,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/localNews/del',
		    formUrl:contextPath+'/admin/localNews/add',
			storeUrl:contextPath+'/admin/localNews/list',
			stateChangeUrl:contextPath+'/admin/localNews/status',
			rightPanelToolBar:[newsTypeSelect,statusComboBox,searchByName],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
						 ,{header:'id',dataIndex:'id',sortable:false,hidden:false,flex:0.5,renderer:null}
						 ,{header:'图片',dataIndex:'img',sortable:false,hidden:false,flex:1,renderer:function(data,m,record,rindex,cindex){
				        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:30px;'>";
				        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 30px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
								"<img class='appPosition_img' width=30px; height=30px; src='"+data+"'>" +
								"</div>";
				        	 return img;
				         }}
				         ,{header:'标题',dataIndex:'title',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'简介',dataIndex:'introduction',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'点赞',dataIndex:'star',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'点击次数',dataIndex:'click',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'回复次数',dataIndex:'replyTimes',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'遇邻号',dataIndex:'yulin',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'新闻类型',dataIndex:'newsType',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 if(data==10){
					    		 return '一周一邻';
					    	 }else{
					    		 return '慢走生活';
					    	 }
					        }}}
					     ,{header:'发布日期',dataIndex:'startTime',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 return Ext.Date.format(new Date(data), 'Y-m-d H:i:s');
					        }}}
				         ],
			daemonFormItems: [
						hiddenfieldForSoure
						,reporterComboBox
						,sourcecomboBox
						,{
				            xtype: 'component',
				            html: '合并后慢走生活的首页图,不是慢走生活可不传，请用300px*240px的大小，图片不能大于100k'
				         }
						,indexImg
						,{
							xtype: 'component',
							html: '封面图片，请用300px*240px的大小，图片不能大于100k'
						}
						,changingImage
						,{
				            xtype: 'component',
				            html: '上线时间可以不选，不选表示立即上线'
				         }
						,startTime
						/*,{
				            xtype: 'component',
				            style: 'margin-top:10px',
				            html: '如果不选表示立即生效'
				         }*/
						,{fieldLabel: '标题',inputId:'title',name: 'title',flex:3,allowBlank: true,value:'',
							minLength:1,maxLength:30,regexText:'1-23个字符',blankText:'1~23个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '图片',xtype: 'text',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '摘要',xtype: 'textareafield',height:50,name: 'introduction',flex:3,allowBlank: true,
							inputId:'introduction',value:'',minLength:1,maxLength:100,regexText:'1-1000个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '点击数',xtype:'numberfield',name: 'click',inputId:'click',
							step:10,
							value:0,
							minValue:0,
							allowBlank: true,
							labelStyle: 'font-weight:bold;padding:0'}
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
						,newstypecomboBox
						,genderComboBox
						,{fieldLabel: '遇邻号',name: 'yulin',flex:3,allowBlank: true,inputId:'yulin',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{
				            xtype: 'component',
				            html: '正文图片，宽度最大600px，高度不限，图片不能大于100k'
				         }
						,{ xtype: 'button',sort:'b1',text : '删除以下的这个段落(包括1个图片，1个标题和1个文字）',style: 'margin:0' ,labelStyle: 'font-weight:bold;padding:0',handler:function(){
                    		 Ext.MessageBox.show({
                               title: '删除小段落',
                               msg: '删除第一个小段落(包括1个图片，1个标题和1个文字）?',
                               buttons: Ext.MessageBox.YESNO,
                               buttonText:{
                                   yes: "是（删除之后不可恢复）", 
                                   no: "否（不删除）" 
                               },
                               fn: function(btn,text){
                              	if(btn=='yes'){
                              		 me.DaemonFormPanel.remove(me.DaemonFormPanel.down('[sort=b1]'));
                              		 me.DaemonFormPanel.remove(me.DaemonFormPanel.down('[sort=i1]'));
                              		 me.DaemonFormPanel.remove(me.DaemonFormPanel.down('[sort=t1]'));
                              		 me.DaemonFormPanel.remove(me.DaemonFormPanel.down('[sort=c1]'));
                              	 }
                               }
                           });
                    	}} 
						,changingImage1
						,{fieldLabel: '正文标题',sort:'t1',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',sort:'c1',xtype: 'textareafield',height:80,name: 'c',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage2
						,{fieldLabel: '正文标题',sort:'t2',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c2',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage3
						,{fieldLabel: '正文标题',sort:'t3',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c3',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage4
						,{fieldLabel: '正文标题',sort:'t4',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c4',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage5
						,{fieldLabel: '正文标题',sort:'t5',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c5',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage6
						,{fieldLabel: '正文标题',sort:'t6',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c6',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage7
						,{fieldLabel: '正文标题',sort:'t7',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c7',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage8
						,{fieldLabel: '正文标题',sort:'t8',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c8',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage9
						,{fieldLabel: '正文标题',sort:'t9',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c9',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage10
						,{fieldLabel: '正文标题',sort:'t10',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c10',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage11
						,{fieldLabel: '正文标题',sort:'t11',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c11',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage12
						,{fieldLabel: '正文标题',sort:'t12',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c12',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage13
						,{fieldLabel: '正文标题',sort:'t13',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c13',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage14
						,{fieldLabel: '正文标题',sort:'t14',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c14',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage15
						,{fieldLabel: '正文标题',sort:'t15',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c15',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage16
						,{fieldLabel: '正文标题',sort:'t16',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c16',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage17
						,{fieldLabel: '正文标题',sort:'t17',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c17',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage18
						,{fieldLabel: '正文标题',sort:'t18',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c18',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage19
						,{fieldLabel: '正文标题',sort:'t19',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c19',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage20
						,{fieldLabel: '正文标题',sort:'t20',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c20',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage21
						,{fieldLabel: '正文标题',sort:'t21',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c21',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage22
						,{fieldLabel: '正文标题',sort:'t22',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c22',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage23
						,{fieldLabel: '正文标题',sort:'t23',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c23',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage24
						,{fieldLabel: '正文标题',sort:'t24',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c24',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage25
						,{fieldLabel: '正文标题',sort:'t25',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c25',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage26
						,{fieldLabel: '正文标题',sort:'t26',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c26',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage27
						,{fieldLabel: '正文标题',sort:'t27',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c27',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage28
						,{fieldLabel: '正文标题',sort:'t28',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c28',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage29
						,{fieldLabel: '正文标题',sort:'t29',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c29',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage30
						,{fieldLabel: '正文标题',sort:'t30',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c30',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage31
						,{fieldLabel: '正文标题',sort:'t31',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c31',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage32
						,{fieldLabel: '正文标题',sort:'t32',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c32',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage33
						,{fieldLabel: '正文标题',sort:'t33',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c33',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage34
						,{fieldLabel: '正文标题',sort:'t34',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c34',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage35
						,{fieldLabel: '正文标题',sort:'t35',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c35',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage36
						,{fieldLabel: '正文标题',sort:'t36',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c36',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage37
						,{fieldLabel: '正文标题',sort:'t37',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c37',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage38
						,{fieldLabel: '正文标题',sort:'t38',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c38',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage39
						,{fieldLabel: '正文标题',sort:'t39',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c39',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage40
						,{fieldLabel: '正文标题',sort:'t40',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c40',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage41
						,{fieldLabel: '正文标题',sort:'t41',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c41',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage42
						,{fieldLabel: '正文标题',sort:'t42',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c42',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage43
						,{fieldLabel: '正文标题',sort:'t43',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c43',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage44
						,{fieldLabel: '正文标题',sort:'t44',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c44',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage45
						,{fieldLabel: '正文标题',sort:'t45',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c45',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage46
						,{fieldLabel: '正文标题',sort:'t46',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c46',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage47
						,{fieldLabel: '正文标题',sort:'t47',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c47',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage48
						,{fieldLabel: '正文标题',sort:'t48',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c48',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage49
						,{fieldLabel: '正文标题',sort:'t49',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c49',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage50
						,{fieldLabel: '正文标题',sort:'t50',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c50',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage51
						,{fieldLabel: '正文标题',sort:'t51',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c51',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage52
						,{fieldLabel: '正文标题',sort:'t52',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c52',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage53
						,{fieldLabel: '正文标题',sort:'t53',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c53',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage54
						,{fieldLabel: '正文标题',sort:'t54',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c54',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage55
						,{fieldLabel: '正文标题',sort:'t55',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c55',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage56
						,{fieldLabel: '正文标题',sort:'t56',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c56',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage57
						,{fieldLabel: '正文标题',sort:'t57',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c57',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage58
						,{fieldLabel: '正文标题',sort:'t58',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c58',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage59
						,{fieldLabel: '正文标题',sort:'t59',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c59',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage60
						,{fieldLabel: '正文标题',sort:'t60',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c60',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage61
						,{fieldLabel: '正文标题',sort:'t61',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c61',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage62
						,{fieldLabel: '正文标题',sort:'t62',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c62',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage63
						,{fieldLabel: '正文标题',sort:'t63',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c63',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage64
						,{fieldLabel: '正文标题',sort:'t64',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c64',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage65
						,{fieldLabel: '正文标题',sort:'t65',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c65',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage66
						,{fieldLabel: '正文标题',sort:'t66',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c66',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage67
						,{fieldLabel: '正文标题',sort:'t67',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c67',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage68
						,{fieldLabel: '正文标题',sort:'t68',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c68',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage69
						,{fieldLabel: '正文标题',sort:'t69',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c69',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						,changingImage70
						,{fieldLabel: '正文标题',sort:'t70',name: 't',flex:3,allowBlank: true,value:'',minLength:1,maxLength:250,regexText:'1-250个字符',blankText:'1~250个字符',labelStyle: 'font-weight:bold;padding:0'}
						,{fieldLabel: '正文内容',xtype: 'textareafield',height:80,name: 'c',sort: 'c70',flex:1,allowBlank: true,value:'',minLength:1,maxLength:350,regexText:'1-200个字符',blankText:'1~800个字符',labelStyle: 'font-weight:bold;padding:0'}
						
						],
			listeners:{
				afterEditFormshow:function(theFormPage){
					for ( var int = 1; int < 71; int++) {
						theFormPage.down('[sort=i'+int+']').setSrc("");
						theFormPage.down('[sort=t'+int+']').setValue("");
						theFormPage.down('[sort=c'+int+']').setValue("");
					}
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
					changingImage.setSrc(records[0].get("img"));
					indexImg.setSrc(records[0].get("indexImg"));
					hiddenfieldForSoure.setValue(records[0].get("id"));
					startTime.setDate(records[0].get("startTime"));
					var data=records[0].get("data");
					for ( var int = 1; int < data.length+1; int++) {
						theFormPage.down('[sort=i'+int+']').setSrc(data[int-1].img);
						theFormPage.down('[sort=t'+int+']').setValue(data[int-1].title);
						theFormPage.down('[sort=c'+int+']').setValue(data[int-1].content);
					}
				} ,
				afterAddFormshow:function(theFormPage){
					hiddenfieldForSoure.setValue("");
					changingImage.setSrc("");
					indexImg.setSrc("");
					for ( var int = 1; int < 71; int++) {
						theFormPage.down('[sort=i'+int+']').setSrc("");
						theFormPage.down('[sort=t'+int+']').setValue("");
						theFormPage.down('[sort=c'+int+']').setValue("");
					}
				} 
			}
			});
		this.callParent(arguments);
	} 
});	