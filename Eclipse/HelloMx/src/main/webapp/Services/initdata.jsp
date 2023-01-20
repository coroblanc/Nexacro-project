<!-- 1.Designating a Java library -->
<%@ page import="java.io.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>

<!-- 2. Defining a MIME type -->
<%@ page contentType="text/xml; charset=UTF-8" %>

<%
/** 3. Creating a basic object of Nexacro Platform **/
PlatformData pdata = new PlatformData();

/** 5-1. Processing ErrorCode and ErrorMsg **/
int nErrorCode = 0;
String strErrorMsg = "START";

try {
    /** 4. Processing data: saving data as a file **/
    /** 4.1 Creating a dataset and inputting basic data to the dataset **/
    DataSet ds = new DataSet("customers");
    ds.addColumn("ID",DataTypes.STRING, 4);
    ds.addColumn("NAME",DataTypes.STRING, 16);
    ds.addColumn("EMAIL", DataTypes.STRING, 32);
    ds.addColumn("PHONE", DataTypes.STRING, 16);
    ds.addColumn("COMP_NAME", DataTypes.STRING, 32);
    ds.addColumn("DEPARTMENT", DataTypes.STRING, 32);
    ds.addColumn("COMP_PHONE", DataTypes.STRING, 16);
    ds.addColumn("COMP_ADDR", DataTypes.STRING, 256);
    
    int row = 0;
    int i = 0;
    String[] customers = new String[8];
    
    customers[0] = "TC-001";
    customers[1] = "Harry A. Brown";
    customers[2] = "ceo@tobesoft.com";
    customers[3] = "6987-6543";
    customers[4] = "TOBESOFT";
    customers[5] = "0";
    customers[6] = "6506-7000";
    customers[7] = "Seoul";

    for (i = 0; i < 5; i++)
    {
        row = ds.newRow(); 
        String id = String.format("%s-%d", customers[0], i);
        ds.set(row,"ID",id);
        ds.set(row,"NAME",customers[1]);
        ds.set(row,"EMAIL",customers[2]);
        ds.set(row,"PHONE",customers[3]);
        ds.set(row,"COMP_NAME",customers[4]);
        ds.set(row,"DEPARTMENT",customers[5]);
        ds.set(row,"COMP_PHONE",customers[6]);
        ds.set(row,"COMP_ADDR",customers[7]);
    }

    pdata.addDataSet(ds);

    /** 4.2 Saving a dataset to a file **/
    String targetFilename = "./saveFile.bin";
    OutputStream target = new FileOutputStream(targetFilename);
    PlatformResponse res = new PlatformResponse(target, PlatformType.CONTENT_TYPE_BINARY);
    res.setData(pdata);
    res.sendData();
    target.close(); 
    System.out.println("after file write.."); 

    /** 5.2 Setting ErrorCode and ErrorMsg for success**/
    nErrorCode = 0;
    strErrorMsg = "SUCC";
    
} catch (Throwable th) {
    /** 5.3 Setting ErrorCode and ErrorMsg for failure **/
    nErrorCode = -1;
    strErrorMsg = th.getMessage();
}

/** 5.4 Saving the ErrorCode and ErrorMsg to send them to the client **/
PlatformData senddata = new PlatformData();
VariableList varList = senddata.getVariableList();
varList.add("ErrorCode", nErrorCode);
varList.add("ErrorMsg", strErrorMsg);
    
/** 6. Sending result data to the client **/
HttpPlatformResponse res = new HttpPlatformResponse(response, 
    PlatformType.CONTENT_TYPE_XML,"UTF-8");
res.setData(senddata);
res.sendData();
%>