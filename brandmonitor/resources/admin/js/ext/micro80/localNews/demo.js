Ext.define('Micro.localNews.main', {
	extend: "Ext.util.DaemonPanel",  
    requires: [
                
     ],
	alternateClassName: 'MicroLocalNewsMain',
	
	initComponent: function() {
		var me = this;
		
		Ext.apply(me,{
			storeDefaultRootProperty:'listPageObject',
			panelTotalProperty:'recordCount',
			storeFields:['id','title','img', 'introduction', 'content','newsType','communityId','source','star','click','data','reporter','status','replyTimes','createTime'],
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
				         ],
			daemonFormItems: [
						hiddenfieldForSoure
						,changingImage
						,{fieldLabel: '标题',inputId:'title',name: 'title',flex:3,allowBlank: true,value:'',minLength:1,maxLength:200,regexText:'1-200个字符',blankText:'1~200个字符',labelStyle: 'font-weight:bold;padding:0'}
						],
			listeners:{
				afterEditFormshow:function(theFormPage){
				} ,
				afterAddFormshow:function(theFormPage){
				} 
			}
			});
		this.callParent(arguments);
	} 
});	