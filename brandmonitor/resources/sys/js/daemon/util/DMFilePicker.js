/**
 * @author caven
 */
/** 
Example
@see define usage: http://localhost:8080/webres/js/extjs-4.1.1/docs/index.html#!/api/Ext
@see class usage: http://localhost:8080/webres/js/extjs-4.1.1/docs/source/Viewport.html#Ext-container-Viewport
*/
Ext.define('Daemon.util.DMFilePicker', {
    extend: 'Ext.form.field.Trigger',
    alias: 'Daemon.DMFilePicker',
    alternateClassName: 'DMFilePicker',
    requires: [
        'Ext.form.field.FileButton'
    ],

    //<locale>
    /**
     * @cfg {String} buttonText
     * The button text to display on the upload button. Note that if you supply a value for
     * {@link #buttonConfig}, the buttonConfig.text value will be used instead if available.
     */
    buttonText: 'Browse...',
    //</locale>

    /**
     * @cfg {Boolean} buttonOnly
     * True to display the file upload field as a button with no visible text field. If true, all
     * inherited Text members will still be available.
     */
    buttonOnly: false,

    /**
     * @cfg {Number} buttonMargin
     * The number of pixels of space reserved between the button and the text field. Note that this only
     * applies if {@link #buttonOnly} = false.
     */
    buttonMargin: 3,
    
    /**
     * @cfg {Boolean} clearOnSubmit
     * True to clear the selected file value when the form this field belongs to
     * is submitted to the server.
     */
    clearOnSubmit: true,

    /**
     * @cfg {Object} buttonConfig
     * A standard {@link Ext.button.Button} config object.
     */

    /**
     * @event change
     * Fires when the underlying file input field's value has changed from the user selecting a new file from the system
     * file selection dialog.
     * @param {Ext.ux.form.FileUploadField} this
     * @param {String} value The file value returned by the underlying file input field
     */

    /**
     * @property {Ext.Element} fileInputEl
     * A reference to the invisible file input element created for this upload field. Only populated after this
     * component is rendered.
     */

    /**
     * @property {Ext.button.Button} button
     * A reference to the trigger Button component created for this upload field. Only populated after this component is
     * rendered.
     */


    // private
    extraFieldBodyCls: Ext.baseCSSPrefix + 'form-file-wrap',

    /**
     * @cfg {Boolean} readOnly
     * Unlike with other form fields, the readOnly config defaults to true in File field.
     */
    readOnly: true,

    /**
     * Do not show hand pointer over text field since file choose dialog is only shown when clicking in the button
     * @private
     */
    triggerNoEditCls: '',

    // private
    componentLayout: 'triggerfield',

    // private. Extract the file element, button outer element, and button active element.
    childEls: ['browseButtonWrap'],

    // private
    onRender: function() {
        var me = this,
            id = me.id,
            inputEl;

        me.callParent(arguments);

        inputEl = me.inputEl;
        inputEl.dom.name = ''; //name goes on the fileInput, not the text input

        // render the button here. This isn't ideal, however it will be 
        // rendered before layouts are resumed, also we modify the DOM
        // below anyway
        me.button = new Ext.form.field.FileButton(Ext.apply({
            renderTo: id + '-browseButtonWrap',
            ownerCt: me,
            ownerLayout: me.componentLayout,
            id: id + '-button',
            ui: me.ui,
            disabled: me.disabled,
            text: me.buttonText,
            style: me.buttonOnly ? '' : me.getButtonMarginProp() + me.buttonMargin + 'px',
            inputName: me.getName(),
            listeners: {
                scope: me,
                change: me.onFileChange
            }
        }, me.buttonConfig));
        me.fileInputEl = me.button.fileInputEl;

        if (me.buttonOnly) {
            me.inputCell.setDisplayed(false);
        }

        // Ensure the trigger cell is sized correctly upon render
        me.browseButtonWrap.dom.style.width = (me.browseButtonWrap.dom.lastChild.offsetWidth + me.button.getEl().getMargin('lr')) + 'px';
        if (Ext.isIE) {
            me.button.getEl().repaint();
        }
    },

    /**
     * Gets the markup to be inserted into the subTplMarkup.
     */
    getTriggerMarkup: function() {
        return '<td id="' + this.id + '-browseButtonWrap"></td>';
    },

    /**
     * @private Event handler fired when the user selects a file.
     */
    onFileChange: function(button, e, value) {
    	
    	/*for ( var key in button.fileInputEl.dom.files[0]) {
    		alert(key);
		}*/
    	//alert(button.fileInputEl.dom.files[0].files);
    	/*alert(button.fileInputEl.dom.files[0].type);
    	alert(button.fileInputEl.dom.files[0].slice);
    	alert(button.fileInputEl.dom.files[0].mozSlice);
    	alert(button.fileInputEl.dom.files[0].name);
    	alert(button.fileInputEl.dom.files[0].lastModifiedDate);
    	alert(button.fileInputEl.dom.files[0].mozFullPath);*/
    	/*var obj=button.fileInputEl.dom;
    	if(obj)
        {  
            if (window.navigator.userAgent.indexOf("MSIE")>=1)
           {
               obj.select();
               value= document.selection.createRange().text;
           }   
            else if(window.navigator.userAgent.indexOf("Firefox")>=1)
            {
               if(obj.files)
                {
            	   value= obj.files.item(0).getAsDataURL();
                 }
               value= obj.value;
            }
            value= obj.value;
       } 
    	 if(obj.files)
         {
     	   value= obj.files.item(0).getAsDataURL();
          }else{
        	  value= obj.value;
          }*/
    	/*var realPath = document.selection.createRange().text;
    	alert(realPath);*/
    	
        this.lastValue = null; // force change event to get fired even if the user selects a file with the same name
        Ext.form.field.File.superclass.setValue.call(this, value);
    },

    /**
     * Overridden to do nothing
     * @method
     */
    setValue: Ext.emptyFn,

    reset : function(){
        var me = this,
            clear = me.clearOnSubmit;
        if (me.rendered) {
            me.button.reset(clear);
            me.fileInputEl = me.button.fileInputEl;
            if (clear) {
                me.inputEl.dom.value = '';
            }
        }
        me.callParent();
    },
    
    onShow: function(){
        this.callParent();
        // If we started out hidden, the button may have a messed up layout
        // since we don't act like a container
        this.button.updateLayout();    
    },

    onDisable: function(){
        this.callParent();
        this.button.disable();
    },

    onEnable: function(){
        this.callParent();
        this.button.enable();
    },

    isFileUpload: function() {
        return false;
    },

    extractFileInput: function() {
        var fileInput = this.button.fileInputEl.dom;
        this.reset();
        return fileInput;
    },
    
    restoreInput: function(el) {
        var button = this.button;
        button.restoreInput(el);
        this.fileInputEl = button.fileInputEl;
    },

    onDestroy: function(){
        Ext.destroyMembers(this, 'button');
        delete this.fileInputEl;
        this.callParent();
    },

    getButtonMarginProp: function() {
        return 'margin-left:';
    }
});