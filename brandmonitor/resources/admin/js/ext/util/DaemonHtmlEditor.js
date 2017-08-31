Ext.define('Ext.util.DaemonHtmlEditor', {
	extend:'Ext.form.field.HtmlEditor',
	requires: [
	],
	alternateClassName: 'DaemonHtmlEditor',
	addNewPic:true,
	needChangeImg:null,
	xfolderRoot:null,
	rate:null,
	originalWidth:0,
	originalHeight:0,
	//selectTH:false,
	//selectTW:false,
	initComponent : function(){
        var cmp = this;
        
        /*var fbsXfolderConfig = {
                xfolderThumbRoot:'${xfolder_root}',
                xfolderRoot:'${xfolder_root}',
                imgpix:Ext.isIE6?".gif":".png",
                authToken:'<%=FbsUtil.getAuthToken(request, FbsConstant.SessionKey.FBS_AUTHTOKEN)%>'	
        	};*/
        
        var picturePlugin = function(cmp){
            var comp;
            this.init = function(cmp){
                this.cmp = cmp;
                comp = cmp;
                this.cmp.on('render', this.go, this);
            };
            this.go = function(){
                var tb = this.cmp.getToolbar();
                
                var my_textfield_aabb =  new Ext.form.field.Text({
            		//xtype:'textfield',
        			margin:'10 5 5 5',
        			flex:9,
        			width:280,
        			border:false,
        			fieldLabel: '图片url',
        			//value:'http://127.0.0.1:8080/fbs/resources/img/webgear/logo.png',
        			labelWidth:45
        		});
                
            	var sliderfield_height =  Ext.create('Ext.slider.Single',{
        			//xtype:'sliderfield',
        			margin:'10 5 5 0',
        			value:0,
        			flex:9,
                 	increment:1,
                 	minValue: 0,
                 	width:285,
                 	maxValue: 2000,
                 	listeners:{
         		    	change:function(){
         		    		textfield_height.setValue(this.getValue());
         		    		comp.previewImg.setHeight(this.getValue());
             		    	if(comp.rateBox.child().getValue()){
             		    		if(comp.rate!=null){
    	         		    		var w = this.getValue()*comp.rate;
    	         		    		sliderfield_width.setValue(w.toFixed(0));
    	         		    		textfield_width.setValue(w.toFixed(0));
    	         		    		comp.previewImg.setWidth(w.toFixed(0));
             		    		}
             		    	}
         		    	}
         		    }
        		});
            	
            	var sliderfield_width =  Ext.create('Ext.slider.Single',{
        			//xtype:'sliderfield',
        			margin:'10 5 5 0',
        			value:0,
        			flex:9,
         		    increment:1,
         		    minValue: 0,
         		    width:285,
         		    maxValue: 2000,
         		    listeners:{
         		    	change:function(){
	         		    	textfield_width.setValue(this.getValue());
	         		    	comp.previewImg.setWidth(this.getValue());
	         		    	if(comp.rateBox.child().getValue()){
	         		    		if(comp.rate!=null){
		         		    		var h = this.getValue()/comp.rate;
		         		    		sliderfield_height.setValue(h.toFixed(0));
		         		    		textfield_height.setValue(h.toFixed(0));
		         		    		comp.previewImg.setHeight(h.toFixed(0));
	         		    		}
	         		    	}
         		    	}
         		    }
        		});
        		
        		var textfield_width = Ext.create('Ext.form.field.Text',{
        			xtype:'textfield',
        			width:40,
        			margin:'6 5 5 0',
        			enableKeyEvents:true,
        			value:0,
        			listeners:{
         		    	keyup:function(){
         		    		sliderfield_width.setValue(this.getValue());
         		    		comp.previewImg.setWidth(this.getValue());
         		    		if(comp.rateBox.child().getValue()){
	         		    		if(comp.rate!=null){
		         		    		var h = this.getValue()/comp.rate;
		         		    		sliderfield_height.setValue(h.toFixed(0));
		         		    		textfield_height.setValue(h.toFixed(0));
		         		    		comp.previewImg.setHeight(h.toFixed(0));
	         		    		}
	         		    	}
         		    	}
         		    }
        		});
        									
        		var textfield_height = Ext.create('Ext.form.field.Text',{
        			xtype:'textfield',
        			width:40,
        			margin:'6 5 5 0',
        			value:0,
        			enableKeyEvents:true,
        			listeners:{
         		    	keyup:function(){
         		    		sliderfield_height.setValue(this.getValue());
         		    		comp.previewImg.setHeight(this.getValue());
         		    		if(comp.rateBox.child().getValue()){
             		    		if(comp.rate!=null){
    	         		    		var w = this.getValue()*comp.rate;
    	         		    		sliderfield_width.setValue(w.toFixed(0));
    	         		    		textfield_width.setValue(w.toFixed(0));
    	         		    		comp.previewImg.setWidth(w.toFixed(0));
             		    		}
             		    	}
         		    	}
         		    }
        		});	
        								
				var window = Ext.create('Ext.window.Window', {
					title:'添加图片',
                	closeAction:'hide',
                	layout:'fit',
                	width:400,
                	height:335,
                	buttons:[
						{
							xtype:'button',
							//flex:1,
							//margin:'10 5 5 5',
							//width:'100%',
							text:'确定',
							handler:function(){
								var my_textfield = my_textfield_aabb.getValue();
								var width = sliderfield_width.getValue();
								var height =sliderfield_height.getValue();
								//旧方法：
								//html = "<img src='"+my_textfield+"' width='"+width+"px' height='"+height+"px' />";
								//comp.execCmd('InsertHTML',html);
								//comp.deferFocus();
								//新方法
								var myHtml = document.getElementById(comp.getId()+"-iframeEl");
								var clickimgfun = function(){
									comp.addNewPic = false;
									window.show();
								};
								
								if(comp.addNewPic){
									
									var img = document.createElement("img");
									if(my_textfield != null && my_textfield != ""){
										img.src = my_textfield;
										img.width = width;
										img.height = height;
										if (img.attachEvent) {
											img.attachEvent("ondblclick",function(){
												my_textfield_aabb.setValue(img.src);
												sliderfield_width.setValue(img.width);
										  		sliderfield_height.setValue(img.height);
										  		comp.addNewPic = false;
												window.show();
												comp.setDisabled(true);
												comp.needChangeImg = img;
												comp.previewImg.setSrc(img.src);
												comp.rateBox.setDisabled(true);
												comp.rateBox.child().setValue(false);
												comp.rate = null;
											});
										}
										else {
											img.addEventListener("dblclick",function(){
												my_textfield_aabb.setValue(img.src);
												sliderfield_width.setValue(img.width);
										  		sliderfield_height.setValue(img.height);
										  		comp.addNewPic = false;
												window.show();
												comp.setDisabled(true);
												comp.needChangeImg = img;
												comp.previewImg.setSrc(img.src);
												comp.rateBox.setDisabled(true);
												comp.rateBox.child().setValue(false);
												comp.rate = null;
											}, false);
										}
										
										if(myHtml!=null){
											myHtml.contentWindow.document.body.appendChild(img);
										}  
									}else{
										alert("插入图片失败,url不能为空");
									}	
								}else{
									
									comp.needChangeImg.width = width;
									comp.needChangeImg.height = height;
								
								}
								
								
								
								window.hide();			
								comp.addNewPic = true;	
								my_textfield_aabb.setValue("");
								sliderfield_width.setValue(0);
								sliderfield_height.setValue(0);   
								comp.needChangeImg = null;
								textfield_width.setValue(0);
								textfield_height.setValue(0);
								comp.setDisabled(false);
								comp.originalBtn.setDisabled(true);
								comp.originalWidth=0;
								comp.originalHeight=0;
								comp.previewImg.setSrc('http://www.sencha.com/img/20110215-feat-html5.png');
								comp.rateBox.setDisabled(false);
								comp.rateBox.child().setValue(true);
								comp.rate = null;
							}
						}
                	],
                	items: [
                    	{
                        	xtype:'panel',
                        	bodyStyle: {
        						background: '#EBEBEB'
        					},
        					items:[
        					   
        					   {
        					    	layout:'hbox',
        					    	border:false,
        					    	bodyStyle: {
		        						background: '#EBEBEB'
		        					},
        					    	items:[
        					    	    {
        					    	    	xtype:'panel',
        					    	    	title:'图片预览',
        					    	    	margin:'10 5 5 5',
        					    	    	width:200,
        					    	    	height:150,
        					    	    	border:false,
        					    	    	autoScroll:true,
        					    	    	items:[
												comp.previewImg = Ext.create('Ext.Img', {
													//border:2,
													style: {
													    borderColor: 'black',
													    borderStyle: 'solid'
													},
												    src: 'http://www.sencha.com/img/20110215-feat-html5.png'
												   // width:103,
												   // height:103,
												    //margin:'0 0 0 95'
												    //renderTo: Ext.getBody()
												}),
        					    	    	]
        					    	    },
										
										{
        									layout:{
        										type: 'vbox', 
        										align: 'stretch'
        										//align: 'left',
        										//pack:'end',
        									},
        									margin:'10 5 0 5',
        									height:150,
        									border:false,
        									flex:1,
        									bodyStyle: {
        		        						background: '#EBEBEB'
        		        					},
                					    	items:[
												{
													flex:1,
													xtype:'button',
													width:'100%',
													margin:'10 5 5 0',
													text:'浏览xfolder',
													handler:function(){
														wgApp.getXFolderWindow().showAutoSizeAndSelectFile("选择文件",function(filedata){
															//wgApp.log(filedata);
															comp.addNewPic = true;
															comp.rateBox.setDisabled(false);
															comp.rateBox.child().setValue(true);
															var imgUrl = filedata.subUrl;//xfolderRoot+filedata.subUrl;
															var image = new Image();
															image.onload = function(){
															  var width = image.width;
															  var height = image.height;
															  sliderfield_width.setValue(width);
															  sliderfield_height.setValue(height);
															  textfield_width.setValue(width);
															  textfield_height.setValue(height);
															  comp.previewImg.setHeight(height);
															  comp.previewImg.setWidth(width);
															  comp.originalWidth = width;
															  comp.originalHeight = height;
															  comp.rate = width/height;
															  //comp.rate = comp.rate.toFixed(0);
															  //alert(comp.rate);
															};
														
															image.src = comp.xfolderRoot+imgUrl;
															comp.originalBtn.setDisabled(false);
															comp.previewImg.setSrc(image.src);
															//comp.smallImg.setSrc(image.src);
															
															my_textfield_aabb.setValue(comp.xfolderRoot+imgUrl);
															wgApp.getXFolderWindow().hide();
												   		},{
												    		selectmode:'FILE',//FILE|DIR
												    		getAppInfo:true
												    	});
														//comp.rateBox.child().getValue();
													}
												},
												comp.originalBtn = Ext.create('Ext.button.Button',{
													flex:1,
													xtype:'button',
													text:'恢复原始尺寸',
													disabled:true,
													margin:'10 5 5 0',
													width:'100%',
													handler:function(){
														sliderfield_width.setValue(comp.originalWidth);
														sliderfield_height.setValue(comp.originalHeight);
														textfield_width.setValue(comp.originalWidth);
														textfield_height.setValue(comp.originalHeight);
														comp.previewImg.setHeight(comp.originalHeight);
														comp.previewImg.setWidth(comp.originalWidth);
													}	
												}),
												comp.rateBox = Ext.create('Ext.form.FieldContainer',{
													fieldLabel: '锁定比例',
												     labelAlign:'right',
												     //flex:1,
												     margin:'5 5 0 0',
												     labelWidth:55,
												     defaultType: 'checkboxfield',
												     items: [
												         {
												             name      : 'topping',
												             checked   : true,
												             inputValue: '1'//,
												         }
												     ]
												})
                					    	]
										}
        					    	]
        					    },
        						{
        							layout:'hbox',
        							border:false,
        							bodyStyle: {
		        						background: '#EBEBEB'
		        					},
        							items:[
        								my_textfield_aabb,
        								
        								
        							]
        						},
	                        	{
                            		border:false,
                            		layout:'hbox',
                            		bodyStyle: {
            							background: '#EBEBEB'
            						},
                            		items:[
                            			{
        									xtype:'label',
        									margin:'10 2 5 5',	
        									html: '图片长：'
        								},
        								sliderfield_width,
        								textfield_width
                            		]
                            	},
                            	{
                            		border:false,
                            		layout:'hbox',
                            		bodyStyle: {
            							background: '#EBEBEB'
            						},
                            		items:[
                            			{
        									xtype:'label',
        									margin:'10 2 5 5',	
        									html: '图片高：'
        								},
        								sliderfield_height,
        								textfield_height
                            		]
                            	}
                            	/*{
                            		border:false,
                            		layout:'hbox',
                            		bodyStyle: {
            							background: '#EBEBEB'
            						},
            						items:[
										
										comp.smallImg = Ext.create('Ext.Img', {
												    //src: 'http://www.sencha.com/img/20110215-feat-html5.png',
												   //renderTo: Ext.getBody()
													width:50,
													height:50
												})
            						]
                            	},*/
                            	/*{
								    xtype:'fieldset',
								    title: '缩略图预览',
								    checkboxToggle: true,
								    collapsed: true,
								    //margin
								    items :[
										comp.smallImg = Ext.create('Ext.Img', {
											width:50,
											height:50
										})
								    ]
								},*/
                            	/*{
                            		border:false,
                            		layout:'hbox',
                            		bodyStyle: {
            							background: '#EBEBEB'
            						},
                            		items:[
                            			{
				        					xtype:'button',
				        					flex:1,
				        					margin:'10 5 5 5',
				        					width:'100%',
				        					text:'确定',
				        					handler:function(){
				        						var my_textfield = my_textfield_aabb.getValue();
				        						var width = sliderfield_width.getValue();
				        						var height =sliderfield_height.getValue();
				        						//旧方法：
				        						//html = "<img src='"+my_textfield+"' width='"+width+"px' height='"+height+"px' />";
				        						//comp.execCmd('InsertHTML',html);
												//comp.deferFocus();
												//新方法
				        						var myHtml = document.getElementById(comp.getId()+"-iframeEl");
				        						var clickimgfun = function(){
				        							comp.addNewPic = false;
				        							window.show();
				        						};
				        						
				        						if(comp.addNewPic){
				        						
					        						var img = document.createElement("img");
					        						if(my_textfield != null && my_textfield != ""){
						        						img.src = my_textfield;
						        						img.width = width;
						        						img.height = height;
						        						if (img.attachEvent) {
					        								img.attachEvent("ondblclick",function(){
					        									my_textfield_aabb.setValue(img.src);
					        									sliderfield_width.setValue(img.width);
														  		sliderfield_height.setValue(img.height);
														  		comp.addNewPic = false;
					        									window.show();
					        									comp.setDisabled(true);
					        									comp.needChangeImg = img;
					        								
					        								});
						        						}
						        						else {
						        							img.addEventListener("dblclick",function(){
					        									my_textfield_aabb.setValue(img.src);
					        									sliderfield_width.setValue(img.width);
														  		sliderfield_height.setValue(img.height);
														  		comp.addNewPic = false;
					        									window.show();
					        									comp.setDisabled(true);
					        									comp.needChangeImg = img;
					        								}, false);
						        						}
						        						
						        						if(myHtml!=null){
						        							myHtml.contentWindow.document.body.appendChild(img);
						        						}  
						        					}else{
						        						alert("插入图片失败,url不能为空");
						        					}	
				        						}else{
				        							
					        						comp.needChangeImg.width = width;
					        						comp.needChangeImg.height = height;
					        					
				        						}
				        						
				        						
				        						
				        						window.hide();			
				        						comp.addNewPic = true;	
				        						my_textfield_aabb.setValue("");
				        						sliderfield_width.setValue(0);
												sliderfield_height.setValue(0);   
												comp.needChangeImg = null;
												textfield_width.setValue(0);
												textfield_height.setValue(0);
												comp.setDisabled(false);
				        					}
		        						}
                            		]
                            	}*/
                            	
        						
                            ]
                        }
                	],
                	listeners:{
                		close:function(){
                			comp.addNewPic = true;	
				        	my_textfield_aabb.setValue("");
				        	sliderfield_width.setValue(0);
							sliderfield_height.setValue(0);   
							comp.needChangeImg = null;
							textfield_width.setValue(0);
							textfield_height.setValue(0);
							comp.setDisabled(false);
							comp.originalBtn.setDisabled(true);
							comp.originalWidth=0;
							comp.originalHeight=0;
							comp.previewImg.setSrc('http://www.sencha.com/img/20110215-feat-html5.png');
							comp.rateBox.setDisabled(false);
							comp.rateBox.child().setValue(true);
							comp.rate = null;
                		}
                	}
					
					
				});
				


                var tbtn = Ext.create('Ext.Button', {
                	itemId : 'upPicture',
                    iconCls:'wg-btn-internetfolder',
                    enableToggle:false,
                    //clickEvent: 'mousedown',
                    tabIndex: -1,
                    tooltip:'添加图片',
                    overflowText:'添加图片',
                   	handler:function(){
                   		comp.setDisabled(true);
                   		window.show();
                   	}
                });

                tb.insert('-');
                tb.insert(tbtn);
            };
        };
        Ext.apply(cmp,{plugins:[new picturePlugin()]});

        
        cmp.callParent(arguments);
    }
});