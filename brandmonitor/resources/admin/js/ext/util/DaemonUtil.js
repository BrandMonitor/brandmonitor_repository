Ext.define('Ext.util.DaemonUtil', { 	
	alternateClassName: 'DaemonUtil',
	statics: {
		copyJsonData:function(data){
			return Ext.decode(Ext.encode(data));
		},
		booleanRenderFun:function(value){
			if(WGUtil.istrue(value)){
				return '<span style="color: green;">'+dmlan.yes+'</span>';
			}else{
				return '<span style="color: red;">'+dmlan.no+'</span>';
			}
		}
		,
		ajaxcall:function(config){
			if(config.dataType==null||config.dataType==''){
				config.dataType='json';
			}
			if(config.dataType=='json'){
				if(config.headers==null){
					config.headers={"Accept":"application/json"};
				}else{
					config.headers.Accept="application/json";
				}
			}
			if(config.dataType=='xml'){
				if(config.headers==null){
					config.headers={"Accept":"application/xml"};
				}else{
					config.headers.Accept="application/xml";
				}
			}
			
			if(config.method==null||config.method==''){
				config.method='GET';
			}
			
			/*if(config.checkWGResponse == true){
				var callback = config.callback;
				var cbfn = function(opt,success,response){					
					if(!wgApp.checkResponse(response)){return null;}
					if(callback!=null){
						callback(opt,success,response);
					}
				};
				config.callback = cbfn;
			}*/
			return Ext.Ajax.request(config);
		},
		istrue:function(value){
			if(value==0||value=='0'||value==null){
				return false;
			}else{
				return true;
			}
		},
		alert:function(title,format){
			Ext.Msg.alert(title,format);
		},
		createBox:function(t, s){
		        /*return ['<div class="msg">',
		                '<div class="x-box-tl"><div class="x-box-tr"><div class="x-box-tc"></div></div></div>',
		                '<div class="x-box-ml"><div class="x-box-mr"><div class="x-box-mc"><h3>', t, '</h3>', s, '</div></div></div>',
		                '<div class="x-box-bl"><div class="x-box-br"><div class="x-box-bc"></div></div></div>',
		                '</div>'].join('');*/
		      return '<div class="msg"><h3>' + t + '</h3><p>' + s + '</p></div>';
		},
		floatip:function(title,format){
			if(title==null){
				title="系统消息";
			}
            var msgCt = Ext.DomHelper.insertFirst(document.body, {id:'msg-div'}, true);
            var s = Ext.String.format.apply(String, Array.prototype.slice.call(arguments, 1));
            var m = null;
            if(format!=null){
            	m = Ext.DomHelper.append(msgCt, this.createBox(title, s), true);
            }else{
            	 m = Ext.DomHelper.append(msgCt, this.createBox(title, s), true);
            }
            m.hide();
            m.slideIn('t').ghost("t", { delay: 1000, remove: true});
		},
		confirm:function(title,format,callbackfun){
			Ext.Msg.confirm(title,format,callbackfun);//callbackfun(btn)
		},
		eval:function(ev){
			if (window.execScript) {
                return window.execScript(ev);
             } else {
            	 return window.eval(ev);
             }
		}
		,
		getValueFromMutiDataIndex:function(dataIndex,record){
			var thevalue = {};
			if(dataIndex instanceof Array && dataIndex.length>0){
				for(var i=0;i<dataIndex.length;i++){
					thevalue[dataIndex[i]] = record.get(dataIndex[i]);
				}
				thevalue = Ext.encode(thevalue);
			}else{
				thevalue = record.get(dataIndex);
			}
			return thevalue;
		}
		,
		ajaxSubmitForm:function(config){
			if(config!=null){

				  if(config.beforeSubmitFunction!=null){
					  var res = config.beforeSubmitFunction();
					  if(res==false){
						  return res;
					  }
				  }
				  
					if(config.method==null||config.method==''){
						config.method='POST';
					}
					
					if(config.dataType==null||config.dataType==''){
						config.dataType='json';
					}
					if(config.dataType=='json'){
						if(config.headers==null){
							config.headers={"Accept":"application/json"};
						}else{
							config.headers.Accept="application/json";
						}
					}
					if(config.dataType=='xml'){
						if(config.headers==null){
							config.headers={"Accept":"application/xml"};
						}else{
							config.headers.Accept="application/xml";
						}
					}
				  
				  config.formpanel.getForm().submit({
			     		clientValidation: config.clientValidation||true,
			     		url: config.url,
			     		method:config.method,
			     		headers:config.headers,
			     	    success: function(form, action) {//如果返回的结果带有success关键字，会根据true/false进入不同的callback方法

							  if(config.afterSubmitFunction!=null){
								  config.afterSubmitFunction();
							  }
							/*if(!wgApp.checkResponse(action.response)){return null;}*/
							if(action.result.success){

								  if(config.afterSubmitSuccessFunction!=null){
									  var goon = config.afterSubmitSuccessFunction();
									  if(goon==false){
										  return false;
									  }
								  }
							}
			     	     },
			     	     failure: function(form, action) {
							  if(config.afterSubmitFunction!=null){
								  config.afterSubmitFunction();
							  }
			     	    	
			     	    	/*if(action.response!=null&&!wgApp.checkResponse(action.response)){return null;}*/
			     	    	
			     	         switch (action.failureType) {
			     	             case Ext.form.action.Action.CLIENT_INVALID:
			     	            	me.alert(dmlan.savefail,dmlan.valfail);
			     	                 //Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
			     	                 break;
			     	             case Ext.form.action.Action.CONNECT_FAILURE:
			     	            	me.alert(dmlan.savefail,dmlan.connectionfail);
			     	                 //Ext.Msg.alert('Failure', 'Ajax communication failed');
			     	                 break;
			     	             case Ext.form.action.Action.SERVER_INVALID:
									if(action.result==null){
										me.alert(dmlan.savefail,dmlan.errorunknow);
										return null;
									}
									me.alert(dmlan.savefail,action.result.message);//服务器端验证失败 返回 false
			     	                 //Ext.Msg.alert('Failure', action.result.msg);
			     	        }
			     	     }
			     	});	
			}
		},
		animateTransitionX:function(obj,x,btmX,callback){
			//移动
			obj.animate({
			    duration:500,
			    scope: this,
			    to: {
			        x: x,
			        opacity: 0
			    }
			}).animate({
				   duration: 1,
				   to: {
				        x: btmX
				   },listeners: {
			            beforeanimate:  function() {
			            	
			          },afteranimate: function() {
			        	  callback();
			          },
				   }
			}).animate({
					duration: 1,
					to: {
					   opacity: 100
					}
			});
			//隐藏
			/*obj.animate({
			    duration:500,
			    scope: this,
			    to: {
			    	 opacity: 0
			    },listeners: {
		            beforeanimate:  function() {
		            	
			          },afteranimate: function() {
			        	  callback();
			          },
				   }
			}).animate({
				   duration: 1,
				   to: {
					   opacity: 1
				   }
			})*/
			//缩小
			/*obj.animate({
			    duration:5500,
			    scope: this,
			    to: {
			        x: -1000,
			        y: 500,
			        width:0,
					height:0,
			        opacity: 1
			    }
			});*/
			
		}
		/*,
	    ajaxOperation:function(config){
	    	
	    	if(config!=null){
	    		
	    		
	    		if(config.needRec==null){
	    			config.needRec = true;
	    		}
	    		
	    		if(config.needRec==true){
	        		if(config.records==null||config.records.length==0){
	        			wgApp.alert(dmlan.tip,dmlan.emptyselectRecord);
	        			return null;
	        		}
	        		if(config.records.length>1){
	        			config.isMutiOp= true;
	        		}else{
	        			config.isMutiOp=false;
	        		}
	    		}
	    		var tabKey = config.tabKey;
	    		var doAjaxOp = function(){
	        		var gp = config.operationPanel;
	        		wgApp.setAppLoading(true);
	        		gp.setLoading(true);
	        		if(tabKey!=null){
	        			wgApp.setTabLoading(tabKey,true);
	        		}
	        		var thparams = config.params;
	        		
	        		if(config.needRec==true){
		        		var opvalues = [];
		        		
		       		  	if(config.opDataIndex instanceof Array && config.opDataIndex.length>0){
			        		for(var i=0;i<config.records.length;i++){
			        			var rec = config.records[i];
			        			var thevalue = {}; 
			        			for(var j=0;j<config.opDataIndex.length;j++){
			        				thevalue[config.opDataIndex[j]] = rec.get(config.opDataIndex[j]);
			        			}
			        			opvalues[opvalues.length] = Ext.encode(thevalue);
			        		} 
		       		  	}else{
			        		for(var i=0;i<config.records.length;i++){
			        			var rec = config.records[i];
			        			opvalues[opvalues.length] = rec.get(config.opDataIndex);
			        		} 
		       		  	}
		       		  	
		        		for(var i=0;i<config.records.length;i++){
		        			opvalues[opvalues.length] = WGUtil.getValueFromMutiDataIndex(config.opDataIndex,config.records[i]);
		        		}
		        		
		       		  	
		        		if(thparams==null){
		        			thparams = {};		        			
		        		}
		        		thparams._key = opvalues;
	        		}
	        		
	        		WGUtil.ajaxcall({
	        			dataType:config.dataType||'json',
	        			method:config.method||'GET',
	        			url:config.url,
	        			params:thparams,
	        			checkWGResponse:config.checkWGResponse,
	        			callback:function(opt,success,response){
	        				wgApp.setAppLoading(false);
	        	    		gp.setLoading(false);
	    	        		if(tabKey!=null){
	    	        			wgApp.setTabLoading(tabKey,false);
	    	        		}	
	        	    		if(!wgApp.checkResponse(response)){return null;}
	        	    		
							  if(config.afterCallbackFunction!=null){
								  var goon = config.afterCallbackFunction(opt,success,response);
								  if(goon==false){
									  return false;
								  }
							  }	        	    		
	        	    		
	        	    		
	        				if(success){
	        					var dataRes = Ext.decode(response.responseText);
	        					if(dataRes.success){
	        						//wgApp.floatipInfo(config.opName+me.showTipsDataName+dmlan.);
	        						
									  if(config.afterOpSuccessFunction!=null){
										  var goon = config.afterOpSuccessFunction(dataRes);
										  if(goon==false){
											  return false;
										  }
									  }
	        						
	        						var theTip = "";
	        						if(config.needRec==true){
		        						if(config.isMutiOp==true){
		        							theTip = config.opName+dmlan.muti+config.showTipsDataName+" !";
		        						}else{
		        							theTip = config.opName+config.showTipsDataName+" '"+config.records[0].get(config.showTipsDataIndex)+"' !";
		        						}
	        						}else{
	        							theTip= config.opName+" !";
	        						} 
	        						wgApp.floatip(dmlan.opsuccess,theTip);
	        					}else{
	        						if(config.afterOpFailFunction!=null){
		        						var goon = config.afterOpFailFunction(dataRes);
										  if(goon==false){
											  return false;
										  }
	        						}
	        						wgApp.alert(dmlan.opfail,dataRes.message);
	        					}
	        				}else{
        						var goon = config.afterOpErrorFunction();
								  if(goon==false){
									  return false;
								  }
	        						wgApp.alert(dmlan.opfail,dmlan.connectionfail);
	        				}
	        			}
	        		});
	    		};
	    		
	    		if(config.needcomfirm==true){
					var theTip = "";
					if(config.needRec==true){
						if(config.isMutiOp){
							theTip = config.opName+dmlan.muti+config.showTipsDataName+".";
						}else{
							theTip = config.opName+config.showTipsDataName+" '"+config.records[0].get(config.showTipsDataIndex)+"' .";
						}
					}else{
						theTip = config.opName+" .";
					}
	    			wgApp.confirm(dmlan.opmakesure,theTip,function(btn){
	    				if(btn=='yes'){
	    					doAjaxOp();
	    				}
	    			});
	    		}else{
	    			doAjaxOp();
	    		}
	    		
	    	}
	    }*/
	} 
 });