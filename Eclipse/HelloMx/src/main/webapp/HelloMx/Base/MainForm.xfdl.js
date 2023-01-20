(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MainForm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("st","0.63%","1.39%","89.22%","8.89%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객 관리 시스템");
            obj.set_textAlign("center");
            obj.set_font("bold 28px/normal \"Malgun Gothic\"");
            obj.set_background("aqua");
            obj.set_color("navy");
            obj.set_boxShadow("10px 10px 0px 0px aliceblue");
            this.addChild(obj.name, obj);

            obj = new Div("div_left_menu","0.63%","12.5%","15.63%","60.56%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("Base::LeftForm.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_workspace","16.41%","12.50%","74.22%","60.56%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_left_menu
            obj = new Layout("default","",0,0,this.div_left_menu.form,function(p){});
            this.div_left_menu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_workspace
            obj = new Layout("default","",0,0,this.div_workspace.form,function(p){});
            this.div_workspace.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Base::LeftForm.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("MainForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
