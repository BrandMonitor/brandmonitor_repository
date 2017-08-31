Ext.define('Ext.util.DaemonDateTimePicker', {
	extend:'Ext.form.field.Picker',
	//requires: ['Ext.form.field.Date', 'Ext.picker.Time', 'Ext.view.BoundListKeyNav', 'Ext.Date'],
	alternateClassName: 'DaemonDateTimePicker',

	/*下拉条右边的图标*/
	/*
	//triggerCls : Ext.baseCSSPrefix + 'form-date-trigger',	
	trigger1Cls : Ext.baseCSSPrefix + 'form-clear-trigger',
	//trigger2Cls: Ext.baseCSSPrefix + 'form-date-trigger',
	trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger',
	*/
	hideClearTrigger:false,
	hideSearchTrigger:false,
	hideTriggerTrigger:false,
	
	/*日期时间格式化 */
	format:'Y-m-d H:i:s',
	/*是否显示时间选择器*/
	showTimePicker:true,
	/*日期选择的最小值*/
	minDate:null,
	/*日期选择的最大值*/
	maxDate:null,
	
	/*下拉面板的宽度*/
	displayFieldWidth:250,
	editable:false,
	matchFieldWidth:false,
	
	/*查找的方法*/
	searchFunction:null,
	clearFunction:null,
    initComponent : function(){
        var me = this;
        var i=0;
        if(!me.hideClearTrigger){
        	//alert(1);
	     	me.trigger1Cls = Ext.baseCSSPrefix + 'form-clear-trigger';
	     	me.onTrigger1Click = function(){
    			//me.submitValue =null;
				//this.setValue("");
				
				//var me = this;
		    	//me.submitValue =null;
		    	me.datePicker.setValue(new Date());
				this.setValue("");
				me.hour.setValue("");
		    	me.min.setValue("");
		    	me.sec.setValue("");
		    	
		    	me.clearFunction();
	     	};
			//trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger',
			i++;
	     }
	     if(!me.hideSearchTrigger){
	     	if(i==1){
	     		me.trigger2Cls = Ext.baseCSSPrefix + 'form-search-trigger';
	     		me.onTrigger2Click = function(){
	    			me.searchFunction();
		     	};
	     	}else{
	     		me.trigger1Cls = Ext.baseCSSPrefix + 'form-search-trigger';
	     		me.onTrigger1Click = function(){
	    			me.searchFunction();
	     		};
	     	}
	     	i++;
	     }
	     if(!me.hideTriggerTrigger){
	     	if(i==0){
	     		me.trigger1Cls = Ext.baseCSSPrefix + 'form-trigger-trigger';
	     		me.onTrigger1Click = function(){
	    			me.expand();
	     		};
	     	}else if(i==1){
	     		me.trigger2Cls = Ext.baseCSSPrefix + 'form-trigger-trigger';
	     		me.onTrigger2Click = function(){
	    			me.expand();
	     		};
	     	}else{
	     		me.trigger3Cls = Ext.baseCSSPrefix + 'form-trigger-trigger';
	     		me.onTrigger3Click = function(){
	    			me.expand();
	     		};
	     	}
	     	
	     }
        
        me.callParent(arguments);
    },

    createPicker: function() {
	     var me = this,picker,pickerHeight = 196;
	      
	     me.datePicker = new Ext.picker.Date({
	    	  minDate:me.minDate,
	    	  maxDate:me.MaxDate,
	    	  width:'100%',
	    	  showToday:false,
	    	  border:false,
	    	  //format:,
	    	  listeners:{
	    		  select:function(picker,date,e){
	    		  	//alert(date);
	    		  	var date = me.datePicker.getValue();
		    	  	//var date2 = new Date();
		    	    var h = me.hour.getValue();
		    	    var m = me.min.getValue();
		    	    var s = me.sec.getValue();
		    	    date.setSeconds(s);
		    	    date.setHours(h);
		    	    date.setMinutes(m);
		    	    	
		    	    //date = Ext.isDate(date) ? date:Ext.Date.dateFormat(date,me.format);
		    	    me.setDate(date);
		    	    me.collapse();
		    	    me.hour.setValue("");
		    	    me.min.setValue("");
		    	    me.sec.setValue("");
	    		  }
	    	  }
	      });
	      
	     
	      
	      me.hour = new Ext.form.field.Number({
	          fieldLabel: '时',
	          maxValue: 24,
	          labelWidth:12,
	          margin:'5 2 5 2',
	          flex:1,
	          minValue: 0
	      });
	      
	      me.min = new Ext.form.field.Number({
	          fieldLabel: '分',
	          maxValue: 59,
	          labelWidth:12,
	          margin:'5 2 5 2',
	          flex:1,
	          minValue: 0
	      });
	      
	      me.sec = new Ext.form.field.Number({
	          fieldLabel: '秒',
	          maxValue: 59,
	          labelWidth:12,
	          margin:'5 2 5 2',
	          flex:1,
	          minValue: 0
	      });
	      
	      if(me.showTimePicker){
	    	  pickerHeight = 228;
		      var timePanel = new Ext.panel.Panel({
		    	  layout:'hbox',
		    	  border:false,
		    	  width:'100%',
		    	  items:[me.hour,me.min,me.sec]
		      });
	      }
	      var saveButton = Ext.create('Ext.Button', {
	    	    text: '选择',
	    	    margin:'0 10 0 0',
	    	    handler: function() {
	    	    	var date = me.datePicker.getValue();
	    	    	//var date2 = new Date();
	    	    	
	    	    	var h = me.hour.getValue();
	    	    	var m = me.min.getValue();
	    	    	var s = me.sec.getValue();
	    	    	date.setSeconds(s);
	    	    	date.setHours(h);
	    	    	date.setMinutes(m);
	    	    	
	    	    	//date = Ext.isDate(date) ? Ext.Date.dateFormat(date,me.format) : date;
	    	    	//date = Ext.isDate(date) ? date:Ext.Date.dateFormat(date,me.format);
	    	    	me.setDate(date);
	    	    	me.collapse();
	    	    	me.hour.setValue("");
	    	    	me.min.setValue("");
	    	    	me.sec.setValue("");
	    	    	//date.setValue(new Date());
	    	    	//alert(date);
	    	       //alert(me.datePicker.getValue());
	    	    }
	    	});
	      
	      var todayButton = Ext.create('Ext.Button', {
	    	    text: '现在',
	    	    margin:'0 0 0 10',
	    	    handler: function() {
	    	    	var date = new Date();
	    	    	me.datePicker.setValue(date);
	    	    	
	    	    	var h = date.getHours();
	    	    	var m = date.getMinutes();
	    	    	var s = date.getSeconds();
	    	    	me.hour.setValue(h);
	    	    	me.min.setValue(m);
	    	    	me.sec.setValue(s);
	    	    	
	    	    	
	    	    }
	    	});
	      
	      var buttonPanel = new Ext.panel.Panel({
	    	  //layout:'hbox',
	    	  layout:{ 
		    		type:'hbox',
		    		align: 'center',
		    		pack: 'center'					    		
		    	},
	    	  border:false,
	    	  width:'100%',
	    	  bodyStyle: {
	    		    background: '#E5E5E5',
	    		    padding: '3px 0'
	    		},
	    	  items:[saveButton,todayButton]
	      });
	   
    	  picker = new Ext.panel.Panel({
	    	  //pickerField: me,
	    	  floating: true,
	    	  hidden: true,
	    	  ownerCt: this.ownerCt,
	    	  //height: pickerHeight,
	    	  width:me.displayFieldWidth,
	    	  layout:'vbox',
	    	  items:[me.datePicker,timePanel,buttonPanel]
	    	 // html: "<select><option>A</option><option>D</option><option>B</option></select><input type='checkbox'/><input/><textarea></textarea>"
    	  });

    	  return picker;  	  
    },
    
    
    /*设置时间*/
    setDate:function(d){
    	var me = this;
    	
    	if(me.showTimePicker){
    		//date = Ext.isDate(d) ? d:Ext.Date.dateFormat(d,me.format) ;
    		date = Ext.Date.dateFormat(d,me.format);
    	}else{
    		//alert(Ext.isDate(d));
    		//date = Ext.isDate(d) ? Ext.Date.dateFormat(d,"Y-m-d") : d;
    		date = Ext.Date.dateFormat(d,"Y-m-d");
    		//alert(date);
    	}
    	//alert(date)
    	me.setValue(date);
    },
    
    /*onTrigger1Click:function(){
    	var me = this;
    	//me.submitValue =null;
    	me.datePicker.setValue(new Date());
		this.setValue("");
		me.hour.setValue("");
    	me.min.setValue("");
    	me.sec.setValue("");
	},
    onTrigger2Click:function(){
    	var me = this;
    	me.search();
    },*/
    listeners:{
    	expand:function(){
    		var me = this;
    		var time = me.getValue();
    		//alert(time);
    		if(time!=null && time!=""){
    			if(time.indexOf(" ")!=-1){
	    			var times = time.split(" ");
	    			//me.datePicker.setValue(times[0]);
	    			if(time[1]!=null && time[1]!="")
	    			var timess = times[1].split(":");
	    			me.hour.setValue(timess[0]);
	    			me.min.setValue(timess[1]);
	    			me.sec.setValue(timess[2]);
    			}
    		}
    		
    	}
    }
    
});