(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dsCustomers");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCustomers", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"4\"/><Column id=\"NAME\" type=\"STRING\" size=\"16\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"32\"/><Column id=\"PHONE\" type=\"STRING\" size=\"16\"/><Column id=\"COMP_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"32\"/><Column id=\"COMP_PHONE\" type=\"STRING\" size=\"16\"/><Column id=\"COMP_ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">1010</Col><Col id=\"NAME\">방승찬</Col><Col id=\"EMAIL\">bschan@ez.edu</Col><Col id=\"PHONE\">010-1234-5678</Col><Col id=\"COMP_NAME\">마이크로 소프트</Col><Col id=\"DEPARTMENT\">클라우드팀</Col><Col id=\"COMP_PHONE\">02-123-4567</Col><Col id=\"COMP_ADDR\">대한민국 경기도 성남시</Col></Row><Row><Col id=\"ID\">2020</Col><Col id=\"NAME\">홍길동</Col><Col id=\"EMAIL\">123@ez.edu</Col><Col id=\"PHONE\">010-1111-1111</Col><Col id=\"COMP_NAME\">이젠</Col><Col id=\"DEPARTMENT\">서버팀</Col><Col id=\"COMP_PHONE\">034-111-1234</Col><Col id=\"COMP_ADDR\">대한민국 평택시</Col></Row><Row><Col id=\"ID\">3030</Col><Col id=\"NAME\">김민수</Col><Col id=\"EMAIL\">321@ez.edu</Col><Col id=\"PHONE\">010-2222-2222</Col><Col id=\"COMP_NAME\">서울컴퍼니</Col><Col id=\"DEPARTMENT\">컴퓨터공학과</Col><Col id=\"COMP_PHONE\">02-191-0001</Col><Col id=\"COMP_ADDR\">서울특별시 관악구</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sttList","21","18","1209","59",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Customer List Search");
            obj.set_background("aquamarine");
            obj.set_color("blueviolet");
            obj.set_font("bold 28px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Div("divCommand","21","77","1209","503",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("azure");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","39","76","268","23",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("0");
            this.divCommand.addChild(obj.name, obj);

            obj = new Button("btnSearch","324","76","71","25",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("1");
            obj.set_text("검색");
            this.divCommand.addChild(obj.name, obj);

            obj = new Grid("grdCustomers","30","156","730","270",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsCustomers");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"132\"/><Column size=\"205\"/><Column size=\"273\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"ID\"/><Cell col=\"1\" rowspan=\"2\" text=\"NAME\"/><Cell col=\"2\" text=\"EMAIL\"/><Cell col=\"3\" text=\"COMPANY\"/><Cell row=\"1\" col=\"2\" text=\"PHONE\"/><Cell row=\"1\" col=\"3\" text=\"DEPARTMENT\"/><Cell row=\"2\" col=\"1\" colspan=\"2\" text=\"전화번호\"/><Cell row=\"2\" col=\"3\" text=\"주소\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" text=\"bind:ID\" textAlign=\"center\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:EMAIL\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:COMP_NAME\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" text=\"bind:PHONE\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" text=\"bind:DEPARTMENT\" textAlign=\"center\"/><Cell row=\"2\" col=\"1\" colspan=\"2\" text=\"bind:COMP_PHONE\" textAlign=\"center\"/><Cell row=\"2\" col=\"3\" text=\"bind:COMP_ADDR\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divCommand.addChild(obj.name, obj);

            obj = new Button("btnInsert","614","73","71","25",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("3");
            obj.set_text("입력");
            this.divCommand.addChild(obj.name, obj);

            obj = new Static("Static00","779","0","415","21",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("4");
            obj.set_text("아이디");
            obj.set_background("blanchedalmond");
            obj.set_textAlign("center");
            this.divCommand.addChild(obj.name, obj);

            obj = new Edit("Edit00","779","20","415","32",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("5");
            this.divCommand.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","779","83","415","32",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("6");
            this.divCommand.addChild(obj.name, obj);

            obj = new Static("Static00_00","779","62","415","21",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("7");
            obj.set_text("이름");
            obj.set_background("blanchedalmond");
            obj.set_textAlign("center");
            this.divCommand.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","779","143","415","32",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("8");
            this.divCommand.addChild(obj.name, obj);

            obj = new Static("Static00_01","779","122","415","21",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("9");
            obj.set_text("전자메일");
            obj.set_background("blanchedalmond");
            obj.set_textAlign("center");
            this.divCommand.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","779","205","415","32",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("10");
            this.divCommand.addChild(obj.name, obj);

            obj = new Static("Static00_02","779","184","415","21",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("11");
            obj.set_text("전화번호");
            obj.set_background("blanchedalmond");
            obj.set_textAlign("center");
            this.divCommand.addChild(obj.name, obj);

            obj = new Edit("Edit00_03","779","266","415","32",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("12");
            this.divCommand.addChild(obj.name, obj);

            obj = new Static("Static00_03","779","245","415","21",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("13");
            obj.set_text("회사이름");
            obj.set_background("blanchedalmond");
            obj.set_textAlign("center");
            this.divCommand.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","779","306","415","21",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("14");
            obj.set_text("소속부서");
            obj.set_background("blanchedalmond");
            obj.set_textAlign("center");
            this.divCommand.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00","779","327","415","32",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("15");
            this.divCommand.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_00","779","387","415","32",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("16");
            this.divCommand.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","779","366","415","21",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("17");
            obj.set_text("회사전화번호");
            obj.set_background("blanchedalmond");
            obj.set_textAlign("center");
            this.divCommand.addChild(obj.name, obj);

            obj = new Edit("Edit00_03_00_01","779","447","415","32",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("18");
            this.divCommand.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01","779","426","415","21",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("19");
            obj.set_text("회사주소");
            obj.set_background("blanchedalmond");
            obj.set_textAlign("center");
            this.divCommand.addChild(obj.name, obj);

            obj = new Button("btnDelete","713","150","67","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCommand.form
            obj = new Layout("default","",0,0,this.divCommand.form,function(p){});
            this.divCommand.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divCommand.form.Edit00","value","dsCustomers","ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divCommand.form.Edit00_00","value","dsCustomers","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divCommand.form.Edit00_01","value","dsCustomers","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divCommand.form.Edit00_02","value","dsCustomers","PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divCommand.form.Edit00_03","value","dsCustomers","COMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divCommand.form.Edit00_03_00","value","dsCustomers","DEPARTMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divCommand.form.Edit00_03_00_00","value","dsCustomers","COMP_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divCommand.form.Edit00_03_00_01","value","dsCustomers","COMP_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("customer.xfdl", function() {
        /*
        입력기능
        */
        this.divCommand_btnInsert_onclick = function(obj,e)
        {
        	 var row = this.dsCustomers.addRow();
             this.dsCustomers.setColumn(row, "ID", "TC-001");
             this.dsCustomers.setColumn(row, "NAME", "Tzuyu");
             this.dsCustomers.setColumn(row, "EMAIL", "ceo@twice.com");
             this.dsCustomers.setColumn(row, "PHONE", "6987-6543");
             this.dsCustomers.setColumn(row, "COMP_NAME", "TWICE");
             this.dsCustomers.setColumn(row, "DEPARTMENT", "0");
             this.dsCustomers.setColumn(row, "COMP_PHONE", "6506-7000");
             this.dsCustomers.setColumn(row, "COMP_ADDR", "Seoul");
        };
        /*
        검색기능
        */


        this.divCommand_btnSearch_onclick = function(obj,e)
        {
        	    var id = "search";
             var url = "http://localhost:8088/HelloMx/Services/sample.xml";
             var reqDs = "";
             var respDs = "dsCustomers=customers";
             var args = "";
             var callback = "svcCallbackFunc";

             this.transaction(id, url, reqDs, respDs, args, callback);
        };

        this.svcCallbackFunc = function(id, code, message)
        {
             if (code == 0) {
                  this.alert(this.dsCustomers.rowcount + " numbers of data have been found.");
                  trace(this.dsCustomers.rowcount + " numbers of data have been found.");
             } else {
                  this.alert("Error["+code+"]:"+message);
                  trace("Error["+code+"]:"+message);
             }
        }

        this.btnDelete_onclick = function(obj,e)
        {
        	var yn = this.confirm("정말 삭제하시겠습니까?");
        	if(yn){
        		this.dsCustomers.deleteRow(this.dsCustomers.rowposition);
        		this.alert("삭제성공");
        		}
        };

        this.divCommand_Static00_03_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sttList.addEventHandler("onclick",this.Static00_onclick,this);
            this.divCommand.form.btnSearch.addEventHandler("onclick",this.divCommand_btnSearch_onclick,this);
            this.divCommand.form.btnInsert.addEventHandler("onclick",this.divCommand_btnInsert_onclick,this);
            this.divCommand.form.Static00_03_00.addEventHandler("onclick",this.divCommand_Static00_03_00_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
        };
        this.loadIncludeScript("customer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
