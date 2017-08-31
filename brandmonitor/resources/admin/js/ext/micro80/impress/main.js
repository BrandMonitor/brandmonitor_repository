Ext.define('Micro.impress.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroImpressMain',
	
	initComponent: function() {
		var me = this;
		
		var hiddenfieldForSoure=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield',inputId:'id', name: 'id' });
		
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
	                    if (e.getKey() == e.ENTER) {
	                    	newValue = this.getValue();
	       		    	 	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {name:newValue});
	       		    	 	me.DaemonContentPanel.dateStore.reload();
	                    }
	                }
		     }
		});
		
		var statuscomboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
                    {"value":1, "name":"启用"},
                    {"value":0, "name":"停用"},
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'状态类型',
		    value:1,
		    displayField: 'name',
		    valueField: 'value',
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    onTrigger1Click:function(eventObj){
		    	Ext.apply(me.DaemonContentPanel.dateStore.proxy.extraParams, {statusType:null});
		    	me.DaemonContentPanel.dateStore.reload();
		    	statuscomboBox.reset();
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
		var imgWidth=160;
		var imgHeight=260;
		var changingImage = Ext.create('Ext.util.DaemonImgPanel', {
			sort:'i0',
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
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['id','yulin','userName','tel','gender','birthday','userAge','nowHome','familyHome','workYears','constellation','single','quest1','quest2','quest3','quest4','quest5','img1','img2','img3','img4','img5','img6','img7','img8','img9','open','status'],
			storeIdProperty:'id',
			stateCode:'status',
			showAddBtn:false,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:true,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/impress/del',
		    formUrl:contextPath+'/admin/impress/add',
			storeUrl:contextPath+'/admin/impress/list',
			stateChangeUrl:contextPath+'/admin/impress/status',
			rightPanelToolBar:[statuscomboBox,searchByName],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
						  ,{header:'图片1',dataIndex:'img1',sortable:false,hidden:false,flex:2,renderer:function(data,m,record,rindex,cindex){
					        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:60px;'>";
					        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 60px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
									"<img class='appPosition_img' width=60px; height=60px; src='"+data+"'>" +
									"</div>";
					        	 return img;
					         }}
						  ,{header:'图片2',dataIndex:'img2',sortable:false,hidden:false,flex:2,renderer:function(data,m,record,rindex,cindex){
					        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:60px;'>";
					        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 60px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
									"<img class='appPosition_img' width=60px; height=60px; src='"+data+"'>" +
									"</div>";
					        	 return img;
					         }}
						  ,{header:'图片3',dataIndex:'img3',sortable:false,hidden:false,flex:2,renderer:function(data,m,record,rindex,cindex){
					        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:60px;'>";
					        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 60px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
									"<img class='appPosition_img' width=60px; height=60px; src='"+data+"'>" +
									"</div>";
					        	 return img;
					         }}
						  ,{header:'图片4',dataIndex:'img4',sortable:false,hidden:false,flex:2,renderer:function(data,m,record,rindex,cindex){
					        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:60px;'>";
					        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 60px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
									"<img class='appPosition_img' width=60px; height=60px; src='"+data+"'>" +
									"</div>";
					        	 return img;
					         }}
						  ,{header:'图片5',dataIndex:'img5',sortable:false,hidden:false,flex:2,renderer:function(data,m,record,rindex,cindex){
					        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:60px;'>";
					        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 60px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
									"<img class='appPosition_img' width=60px; height=60px; src='"+data+"'>" +
									"</div>";
					        	 return img;
					         }}
						  ,{header:'图片6',dataIndex:'img6',sortable:false,hidden:false,flex:2,renderer:function(data,m,record,rindex,cindex){
					        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:60px;'>";
					        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 60px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
									"<img class='appPosition_img' width=60px; height=60px; src='"+data+"'>" +
									"</div>";
					        	 return img;
					         }}
						  ,{header:'图片7',dataIndex:'img7',sortable:false,hidden:false,flex:2,renderer:function(data,m,record,rindex,cindex){
					        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:60px;'>";
					        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 60px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
									"<img class='appPosition_img' width=60px; height=60px; src='"+data+"'>" +
									"</div>";
					        	 return img;
					         }}
						  ,{header:'图片8',dataIndex:'img8',sortable:false,hidden:false,flex:2,renderer:function(data,m,record,rindex,cindex){
					        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:60px;'>";
					        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 60px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
									"<img class='appPosition_img' width=60px; height=60px; src='"+data+"'>" +
									"</div>";
					        	 return img;
					         }}
						  ,{header:'图片9',dataIndex:'img9',sortable:false,hidden:false,flex:2,renderer:function(data,m,record,rindex,cindex){
					        	 var img="<div style='text-overflow: ellipsis;white-space: nowrap;overflow: hidden;height:60px;'>";
					        	 img=img+"<div class='appPosition_div' style='display:inline-block;float:left;height: 60px;margin: 0 auto 0;min-width: 60px;overflow: hidden;position: relative;text-align: center;text-overflow: ellipsis;white-space: nowrap;width: 60px;'>" +
									"<img class='appPosition_img' width=60px; height=60px; src='"+data+"'>" +
									"</div>";
					        	 return img;
					         }}
				         ,{header:'遇邻号',dataIndex:'yulin',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'真实姓名',dataIndex:'userName',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'联系电话',dataIndex:'tel',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'性别',dataIndex:'gender',sortable:false,hidden:false,flex:2,renderer:function(data){
				        	 if (data != null) {
				        		 if (data == 1) {
				        			 return "男";
				        		 } else if (data ==2) {
				        			 return "女";
				        		 }
				        	 }}}
					     ,{header:'出生日期',dataIndex:'birthday',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'现居地',dataIndex:'nowHome',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'老家',dataIndex:'familyHome',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'星座',dataIndex:'constellation',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'单身状态',dataIndex:'single',sortable:false,hidden:false,flex:2,renderer:function(data){
				        	 if (data != null) {
				        		 if (data == 0) {
				        			 return "恋爱中";
				        		 } else if (data ==1) {
				        			 return "单身狗";
				        		 }else {
				        			 return "想恋爱";
				        		 }
				        	 }}}
					     ,{header:'问题1',dataIndex:'quest1',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'问题2',dataIndex:'quest2',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'问题3',dataIndex:'quest3',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'问题4',dataIndex:'quest4',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'问题5',dataIndex:'quest5',sortable:false,hidden:false,flex:2,renderer:null}
					     ,{header:'是否公开',dataIndex:'open',sortable:false,hidden:false,flex:2,renderer:function(data){
				        	 if (data != null) {
				        		 if (data == 0) {
				        			 return "保密";
				        		 } else if (data ==1) {
				        			 return "公开";
				        		 }
				        	 }}}
				         ],
			daemonFormItems: [
						hiddenfieldForSoure
						,{fieldLabel: '遇邻号',name: 'yulin',flex:3,allowBlank: true,inputId:'yulin',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '真实姓名',name: 'userName',flex:3,allowBlank: true,inputId:'userName',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '联系电话',name: 'tel',flex:3,allowBlank: true,inputId:'tel',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '性别',name: 'gender1',flex:3,allowBlank: true,inputId:'gender1',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '出生日期',name: 'birthday',flex:3,allowBlank: true,inputId:'birthday',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '现居地',name: 'nowHome',flex:3,allowBlank: true,inputId:'nowHome',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '老家',name: 'familyHome',flex:3,allowBlank: true,inputId:'familyHome',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '是否公开',name: 'open1',flex:3,allowBlank: true,inputId:'open1',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '星座',name: 'constellation',flex:3,allowBlank: true,inputId:'constellation',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '单身状态',name: 'single1',flex:3,allowBlank: true,inputId:'single1',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '问题1',xtype: 'textareafield',height:60,name: 'quest1',flex:1,allowBlank: true,inputId:'quest1',value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '问题2',xtype: 'textareafield',height:60,name: 'quest2',flex:1,allowBlank: true,inputId:'quest2',value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '问题3',xtype: 'textareafield',height:60,name: 'quest3',flex:1,allowBlank: true,inputId:'quest3',value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '问题4',xtype: 'textareafield',height:60,name: 'quest4',flex:1,allowBlank: true,inputId:'quest4',value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '问题5',xtype: 'textareafield',height:60,name: 'quest5',flex:1,allowBlank: true,inputId:'quest5',value:'',minLength:1,maxLength:100,regexText:'1-100个字符',blankText:'1~100个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,{fieldLabel: '图片1',name: 'img1',flex:3,allowBlank: true,inputId:'img1',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,changingImage
		                ,{fieldLabel: '图片2',name: 'img2',flex:3,allowBlank: true,inputId:'img2',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,changingImage1
		                ,{fieldLabel: '图片3',name: 'img3',flex:3,allowBlank: true,inputId:'img3',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,changingImage2
		                ,{fieldLabel: '图片4',name: 'img4',flex:3,allowBlank: true,inputId:'img4',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,changingImage3
		                ,{fieldLabel: '图片5',name: 'img5',flex:3,allowBlank: true,inputId:'img5',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,changingImage4
		                ,{fieldLabel: '图片6',name: 'img6',flex:3,allowBlank: true,inputId:'img6',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,changingImage5
		                ,{fieldLabel: '图片7',name: 'img7',flex:3,allowBlank: true,inputId:'img7',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,changingImage6
		                ,{fieldLabel: '图片8',name: 'img8',flex:3,allowBlank: true,inputId:'img8',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,changingImage7
		                ,{fieldLabel: '图片9',name: 'img9',flex:3,allowBlank: true,inputId:'img9',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
		                ,changingImage8
		                ],
			listeners:{
				afterEditFormshow:function(theFormPage){
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
					hiddenfieldForSoure.setValue(records[0].get("id"));
					if(records[0].get("gender")==1){
						theFormPage.down('[inputId=gender1]').setValue("男");
					}else{
						theFormPage.down('[inputId=gender1]').setValue("女");
					}
					if(records[0].get("open")==1){
						theFormPage.down('[inputId=open1]').setValue("公开");
					}else{
						theFormPage.down('[inputId=open1]').setValue("保密");
					}
					if(records[0].get("single")==0){
						theFormPage.down('[inputId=single1]').setValue("恋爱中");
					}else if(records[0].get("single")==1){
						theFormPage.down('[inputId=single1]').setValue("单身狗");
					}else{
						theFormPage.down('[inputId=single1]').setValue("想恋爱");
					}
					changingImage.setSrc(records[0].get("img1"));
					changingImage1.setSrc(records[0].get("img2"));
					changingImage2.setSrc(records[0].get("img3"));
					changingImage3.setSrc(records[0].get("img4"));
					changingImage4.setSrc(records[0].get("img5"));
					changingImage5.setSrc(records[0].get("img6"));
					changingImage6.setSrc(records[0].get("img7"));
					changingImage7.setSrc(records[0].get("img8"));
					changingImage8.setSrc(records[0].get("img9"));
				},
				afterAddFormshow:function(theFormPage){
				} 
			}
			});
		this.callParent(arguments);
	} 
});	