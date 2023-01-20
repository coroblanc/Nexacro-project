(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Members");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(860,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_member", this);
            obj._setContents("<ColumnInfo><Column id=\"MID\" type=\"STRING\" size=\"10\"/><Column id=\"MNAME\" type=\"STRING\" size=\"30\"/><Column id=\"PWD\" type=\"STRING\" size=\"30\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"GENDER\" type=\"INT\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"EMAIL\">1000@ez.edu</Col><Col id=\"MNAME\">홍길동</Col><Col id=\"MID\">1000</Col><Col id=\"PWD\">1000</Col><Col id=\"GENDER\">1</Col></Row><Row><Col id=\"EMAIL\">2000@ez.edu</Col><Col id=\"MNAME\">전우치</Col><Col id=\"MID\">2000</Col><Col id=\"PWD\">2000</Col><Col id=\"GENDER\">1</Col></Row><Row><Col id=\"EMAIL\">3000@ez.edu</Col><Col id=\"MNAME\">임꺽정</Col><Col id=\"MID\">3000</Col><Col id=\"PWD\">3000</Col><Col id=\"GENDER\">1</Col></Row><Row><Col id=\"MID\">4000</Col><Col id=\"MNAME\">사오정</Col><Col id=\"PWD\">4000</Col><Col id=\"EMAIL\">4000@ez.edu</Col><Col id=\"GENDER\">1</Col></Row><Row><Col id=\"MID\">5000</Col><Col id=\"MNAME\">오미자</Col><Col id=\"EMAIL\">5000@ez.edu</Col><Col id=\"PWD\">5000</Col><Col id=\"GENDER\">2</Col></Row><Row><Col id=\"MID\">5100</Col><Col id=\"MNAME\">오수자</Col><Col id=\"EMAIL\">5100@ez.edu</Col><Col id=\"PWD\">5100</Col><Col id=\"GENDER\">2</Col></Row><Row><Col id=\"MID\">6000</Col><Col id=\"MNAME\">육각형</Col><Col id=\"EMAIL\">6000@ez.edu</Col><Col id=\"PWD\">6000</Col><Col id=\"GENDER\">1</Col></Row><Row><Col id=\"MID\">6210</Col><Col id=\"MNAME\">김사랑</Col><Col id=\"EMAIL\">6210@ez.edu</Col><Col id=\"PWD\">6210</Col><Col id=\"GENDER\">2</Col></Row><Row><Col id=\"MID\">7000</Col><Col id=\"MNAME\">오미인</Col><Col id=\"EMAIL\">7000@ez.edu</Col><Col id=\"PWD\">7000</Col><Col id=\"GENDER\">2</Col></Row><Row><Col id=\"MID\">8000</Col><Col id=\"MNAME\">박보영</Col><Col id=\"PWD\">8000</Col><Col id=\"EMAIL\">8000@ez.edu</Col><Col id=\"GENDER\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","21","18","829","59",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객 정보 관리");
            obj.set_background("aquamarine");
            obj.set_color("blueviolet");
            obj.set_font("bold 28px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","83","456","337",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_member");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"117\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"비밀번호\"/><Cell col=\"3\" text=\"전자메일\"/><Cell col=\"4\" text=\"성별\"/></Band><Band id=\"body\"><Cell text=\"bind:MID\"/><Cell col=\"1\" text=\"bind:MNAME\"/><Cell col=\"2\" text=\"bind:PWD\"/><Cell col=\"3\" text=\"bind:EMAIL\"/><Cell col=\"4\" text=\"bind:GENDER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","485","87","365","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("아이디");
            obj.set_background("cornsilk");
            obj.set_color("black");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","485","150","365","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("고객이름");
            obj.set_background("cornsilk");
            obj.set_color("black");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","486","220","365","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("비밀번호");
            obj.set_background("cornsilk");
            obj.set_color("black");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","486","290","365","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("이메일");
            obj.set_background("cornsilk");
            obj.set_color("black");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","485","110","359","33",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","485","180","359","33",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_maxlength("30");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","485","247","359","33",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maxlength("30");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","485","317","359","33",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Button("btnInsert","740","34","86","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","485","360","179","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("성별");
            obj.set_background("cornsilk");
            obj.set_color("black");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbGender","486","387","178","33",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cbGender_innerdataset = new nexacro.NormalDataset("cbGender_innerdataset", obj);
            cbGender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(cbGender_innerdataset);
            obj.set_text("성별");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbGender00","670","387","178","33",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cbGender00_innerdataset = new nexacro.NormalDataset("cbGender00_innerdataset", obj);
            cbGender00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">male</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">female</Col></Row></Rows>");
            obj.set_innerdataset(cbGender00_innerdataset);
            obj.set_text("성별");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("cbGenderR","667","360","187","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("sex");
            obj.set_background("cornsilk");
            obj.set_color("black");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",860,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_member","MID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit00_00","value","ds_member","MNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit00_00_00","value","ds_member","PWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit00_00_00_00","value","ds_member","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cbGender","value","ds_member","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cbGender00","value","ds_member","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Members.xfdl", function() {

        this.Static01_00_onclick = function(obj,e)
        {

        };

        this.Static01_01_onclick = function(obj,e)
        {

        };

        this.Edit00_onchanged = function(obj,e)
        {

        };

        this.btnInsert_onclick = function(obj,e)
        {
        	var row = this.ds_member.addRow();
        	trace("[insert]row=" +row);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static01_00.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.Static01_01.addEventHandler("onclick",this.Static01_01_onclick,this);
            this.Edit00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Edit00_00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Edit00_00_00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Edit00_00_00_00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.btnInsert.addEventHandler("onclick",this.btnInsert_onclick,this);
        };
        this.loadIncludeScript("Members.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
