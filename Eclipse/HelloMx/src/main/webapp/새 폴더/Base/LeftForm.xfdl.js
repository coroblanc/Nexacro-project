(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LeftForm");
            this.set_titletext("New Form");
            this.set_background("lightcyan");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnCustomers","16","20","149","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객관리");
            obj.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new Button("btnMembers","16","80","149","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("멤버관리");
            obj.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help","27","360","146","49",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("도움말");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("LeftForm.xfdl", function() {

        this.btnCustomers_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.div_workspace.set_url("FrameBase::Customer.xfdl");
        };

        this.btnMembers_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.div_workspace.set_url("FrameBase::Members2.xfdl");
        };

        this.btn_help_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.div_workspace.set_url("FrameBase::Help.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnCustomers.addEventHandler("onclick",this.btnCustomers_onclick,this);
            this.btnMembers.addEventHandler("onclick",this.btnMembers_onclick,this);
            this.btn_help.addEventHandler("onclick",this.btn_help_onclick,this);
        };
        this.loadIncludeScript("LeftForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
