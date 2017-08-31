Ext.define('Micro.adminUser.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroAdminUserMain',
	
	initComponent: function() {
		var me = this;
		
		var hiddenfieldForSoure=Ext.create('Ext.form.field.Hidden', {xtype: 'hiddenfield',inputId:'id', name: 'id' });
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['id','staffCode','userName',"tel","password","status","lastLoginTime","createTime","remark"],
			storeIdProperty:'id',
			stateCode:'status',
			showAddBtn:false,
			showEditBtn:true,
			showDelBtn:false,
			showStatusBtn:false,
			stateValueOn:'1',
		    stateValueOff:'2',
		    delUrl:contextPath+'/admin/adminUser/del',
		    formUrl:contextPath+'/admin/adminUser/add',
			storeUrl:contextPath+'/admin/adminUser/list',
			rightPanelToolBar:[],
			saveBtnName:'保存',
			panelColumns:[
						  {xtype: 'rownumberer',width: 30,sortable: false }
				         ,{header:'登录帐号',dataIndex:'staffCode',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'用户名',dataIndex:'userName',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'电话',dataIndex:'tel',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'密码',dataIndex:'password',sortable:false,hidden:false,flex:2,renderer:null}
				         ,{header:'最后登录时间',dataIndex:'lastLoginTime',sortable:false,hidden:false,flex:2,renderer:function(data){if(data!=null){
					    	 return Ext.Date.format(new Date(data), 'Y-m-d H:i:s');
					        }}}
				         ],
			daemonFormItems: [
			                  hiddenfieldForSoure
			                  ,{fieldLabel: '用户名',name: 'userName',flex:3,allowBlank: true,inputId:'user_name',value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: '电话',name: 'tel',flex:3,allowBlank: true,inputId:'tel',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: '旧密码',name: 'passwordOriginal',flex:3,allowBlank: true,inputId:'passwordOriginal',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: '新密码',name: 'passwordNewOne',flex:3,allowBlank: true,inputId:'passwordNewOne',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
			                  ,{fieldLabel: '确认新密码',name: 'passwordNewTwo',flex:3,allowBlank: true,inputId:'passwordNewTwo',value:'',minLength:1,maxLength:200,regexText:'1-80个字符',blankText:'1~80个字符',labelStyle: 'font-weight:bold;padding:0'}
			],
			listeners:{
				afterEditFormshow:function(theFormPage){
					var records = me.DaemonContentPanel.getSelectionModel().getSelection();
					hiddenfieldForSoure.setValue(records[0].get("id"));
				} ,
				afterAddFormshow:function(theFormPage){
				} 
			}
			});
		this.callParent(arguments);
	} 
});	