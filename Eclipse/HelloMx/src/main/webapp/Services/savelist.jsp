<!-- 1. Designating a Java library -->
<%@ page import="java.io.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>

<!-- 2. Defining a MIME type -->
<%@ page contentType="text/xml; charset=UTF-8" %>

<%
/** 3. Creating a basic object of Nexacro Platform **/
PlatformData pdata = new PlatformData();

/** 6.1 Processing ErrorCode and ErrorMsg **/
int nErrorCode = 0;
String strErrorMsg = "START";

try {
    /** 4. Receiving a request from the client **/
    // create HttpPlatformRequest for receive data from client

    System.out.println("[save_list] Starting..."); 
	
    HttpPlatformRequest req = new HttpPlatformRequest(request);
    req.receiveData();

    System.out.println("[save_list] receiveData..."); 

    /** 5. Processing data: Loading data from the file **/
    /** 5.1 Loading data from the http object **/ 

    pdata = req.getData();
	
    System.out.println("[save_list] getData..."); 

    /** Obtaining a dataset from the received data **/
    // DataSet ds = pdata.getDataSet("dsCustomers");
    DataSet ds = pdata.getDataSet("customers");
	
	System.out.println(">>> DataSet(customers) : rowcount=" + ds.getRowCount());
	System.out.println(">>> DataSet(customers) : colcount=" + ds.getColumnCount());

	/*
	for(int row=0; row < ds.getRowCount(); row++) {
		System.out.printf("[id] %s\n", ds.getString(row, "id"));
		System.out.printf("[name] %s\n", ds.getString(row, "name"));
		System.out.printf("[email] %s\n", ds.getString(row, "email"));
		System.out.printf("[phone] %s\n", ds.getString(row, "phone"));
	}
	*/
	
	System.out.println("--------------------------------------------------");
	for(int row=0; row < ds.getRowCount(); row++) {
		int rowType = ds.getRowType(row);
		boolean isStoreDataChanges = ds.isStoreDataChanges();

		String rowTypeName = (rowType == DataSet.ROW_TYPE_NORMAL) ? "NORMAL"
			: (rowType == DataSet.ROW_TYPE_INSERTED) ? "INSERTED"
			: (rowType == DataSet.ROW_TYPE_UPDATED) ? "UPDATED"
			: (rowType == DataSet.ROW_TYPE_DELETED) ? "DELETED" : "UNKNOWN";

		System.out.printf("row[%d] isStoreDataChanges(%b), rowType(%d)(%s)\n", 
			row, isStoreDataChanges, rowType, rowTypeName);
		
		for(int col=0; col < ds.getColumnCount(); col++) {
			ColumnHeader header = ds.getColumn(col);
			String name = header.getName();
			String value = ds.getString(row, name);
			System.out.printf("[%d] %s: %s\n", col, name, value);
		}
		System.out.println("--------------------------------------------------");
	}

	System.out.println("--------------------------------------------------");
	System.out.println("[ 삭제된 데이터 ]");
	System.out.println("--------------------------------------------------");
	int delRow = ds.getRemovedRowCount();
	System.out.printf(">>> DataSet(customers) : deleted row count=%d\n", delRow);

	for(int row=0; row < delRow; row++) {
		String id = ds.getRemovedData(row, "id").toString();
		String name = ds.getRemovedData(row, "name").toString();
		System.out.printf("[%d] id: %s\n", row, id);
		System.out.printf("[%d] name: %s\n", row, name);
		System.out.println("..............................");
	}	
	
    /** Saving data as a file with init data **/
    String targetFilename = "./saveFile.bin";
    OutputStream target = new FileOutputStream(targetFilename);
    PlatformResponse res = new PlatformResponse(target, PlatformType.CONTENT_TYPE_BINARY);
    res.setData(pdata);
    res.sendData();
    target.close(); 

    /** 6.2 Setting ErrorCode and ErrorMsg for success **/
    nErrorCode = 0;
    strErrorMsg = "person list saved complete : row count("+ds.getRowCount()+")";
    
} catch (Throwable th) {
    /** 6.3 Setting ErrorCode and ErrorMsg for failure **/
    nErrorCode = -1;
    strErrorMsg = th.getMessage();
    System.out.println("ERROR:"+strErrorMsg); 
}

/** 6.4 Saving ErrorCode and ErrorMsg to send them to the client **/
PlatformData senddata = new PlatformData();
VariableList varList = senddata.getVariableList();
varList.add("ErrorCode", nErrorCode);
varList.add("ErrorMsg", strErrorMsg);

/** 7. Sending result data to the client **/
HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML,"UTF-8");
res.setData(senddata);
res.sendData();
%>