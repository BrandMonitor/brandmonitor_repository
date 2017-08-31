<%@ page import="com.trademark.alipay.util.AlipaySubmit" %>
<%@ page import="java.util.Map" %><%--
  Created by IntelliJ IDEA.
  User: T
  Date: 2016/12/26
  Time: 15:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html lang="en">
<head>
    <meta http-equiv="content-type" content="text/html";charset=UTF-8 />
    <title>支付</title>
</head>
<body>
<c:set var="data" value="${result.data}" scope="request" />
<%
    Map<String,String> signParams = (Map<String,String>)request.getAttribute("data");
    String html = AlipaySubmit.buildRequest(signParams,"POST","确定");
    out.print(html);
%>

</body>
</html>
