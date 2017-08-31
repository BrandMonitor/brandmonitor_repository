Ext.define('Micro.bugs.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroBugsMain',
	
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
		
		var sysUserStore = Ext.create('Ext.data.Store', {
			 fields: ['id', 'userName'],
			 autoLoad:true,
	         proxy: {
	             type: 'ajax',
	             headers:{"Accept":"application/json"},
	             method:'GET',
	             reader: {
				     type: 'json',
				     root: 'listPageObject'
				 },
	             url:contextPath+"/admin/adminUser/self",
	             listeners:{
		    			load:function(treestore,node,record,su){
		    			} 
			        }
	         }
		});
		var sysUserComboBox=Ext.create('Ext.form.ComboBox', {
			store: sysUserStore,
		    editable:false,
		    labelStyle: 'font-weight:bold;padding:0',
		    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
		    trigger2Cls: Ext.baseCSSPrefix + 'form-trigger-trigger',
		    autoSelect:true,
		    autoShow:true,
		    value:'',
		    name:'replyUser',
			inputId:'replyUser',
		    fieldLabel:'答复人',
		    displayField: 'userName',
		    valueField: 'id'
		});
		
		var imgWidth=160;
		var imgHeight=160;
		var changingImage = Ext.create('Ext.util.DaemonImgPanel', {
			fieldLabel:'封面图片',
			formName:'img',
			width:imgWidth,
			height:imgHeight
		});
		
		var gradeComboBox=Ext.create('Ext.form.ComboBox', {
			store: {
				fields: ['name', 'value'],
				data : [
                     {"value":5, "name":"100Km/h"}
                    ,{"value":4, "name":"80Km/h"}
                    ,{"value":3, "name":"60Km/h"}
                    ,{"value":2, "name":"40Km/h"}
					,{"value":1, "name":"20Km/h"}
				]
			},
		    editable:false,
		    autoSelect:true,
		    autoShow:true,
		    fieldLabel:'优先级',
			value:3,
		    name: 'grade',
		    inputId:'grade',
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
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['id','userId','replyUser','question','answer','img','grade','status','createTime','remark'],
			storeIdProperty:'id',
			stateCode:'status',
			showAddBtn:true,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:true,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/bugs/del',
		    formUrl:contextPath+'/admin/bugs/add',
			storeUrl:contextPath+'/admin/bugs/list',
			stateChangeUrl:contextPath+'/admin/bugs/status',
			rightPanelToolBar:[statuscomboBox,searchByName],
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
				,{header:'优先级',dataIndex:'grade',sortable:false,hidden:false,flex:2,renderer:null}
				,{header:'发起人',dataIndex:'userId',sortable:false,hidden:false,flex:2,renderer:null}
				,{header:'问题内容',dataIndex:'question',sortable:false,hidden:false,flex:2,renderer:null}
				,{header:'答复人',dataIndex:'replyUser',sortable:false,hidden:false,flex:2,renderer:null}
				,{header:'答复内容',dataIndex:'answer',sortable:false,hidden:false,flex:2,renderer:null}
			],
			daemonFormItems: [
				 hiddenfieldForSoure,
				,gradeComboBox
				,changingImage
				,{fieldLabel: '问题内容',name: 'question',flex:3,allowBlank: true,inputId:'question',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
				,sysUserComboBox
				,{fieldLabel: '答复内容',name: 'answer',flex:3,allowBlank: true,inputId:'answer',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
            ],
			listeners:{
				afterEditFormshow:function(theFormPage){
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
					hiddenfieldForSoure.setValue(records[0].get("id"));
				},
				afterAddFormshow:function(theFormPage){
				} 
			}
			});
		this.callParent(arguments);
	} 
});	