/**
 * @author caven
 */
/** 
Example
@see define usage: http://localhost:8080/webres/js/extjs-4.1.1/docs/index.html#!/api/Ext
@see class usage: http://localhost:8080/webres/js/extjs-4.1.1/docs/source/Viewport.html#Ext-container-Viewport
*/
Ext.define('Daemon.util.DMNavigatePicker', {
	extend:'Ext.view.View',  
	alias: 'Daemon.DMNavigatePicker',
	alternateClassName: 'DMNavigatePicker',
	requires: [ 
	           'Ext.data.Store',
	           'Ext.data.Model'
	       ],
	       
	dataStore:null,
	initComponent: function() {
		var me =this;

		Ext.define('Image', {
		    extend: 'Ext.data.Model',
		    fields: [
		        { name:'caption', type:'string' }
		    ]
		});

		me.dataStore=Ext.create('Ext.data.Store', {
		    id:'imagesStore',
		    model: 'Image',
		    data: [
		        {caption:'file'},
		        {caption:'music'},
		        {caption:'pic'} 
		    ]
		});

		var imageTpl = new Ext.XTemplate(
		    '<tpl for=".">',
		        '<div  class="thumb-wrap">',
		          '<img src="{src}" />',
		          '<br/><span>{caption}</span>',
		        '</div>',
		    '</tpl>'
		);

		Ext.apply(me,{
			 store: me.dataStore,
			    tpl: imageTpl,
			    itemSelector: 'div.thumb-wrap',
			    emptyText: 'home' 
		});
		this.callParent(arguments);
	}
 });