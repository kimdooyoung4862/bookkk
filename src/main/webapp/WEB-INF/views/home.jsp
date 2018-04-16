<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="context" value="<%=request.getContextPath()%>"></c:set>
<html>
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="${context}/resources/js/app.js"></script>
	<script src="${context}/resources/js/view.js"></script>
	<script src="${context}/resources/js/router.js"></script>
	<link rel="stylesheet" href="${context}/resources/css/NewFile.css" />
    <title>두영</title>
</head>
<body>
<div id="wrapper" class="header">	
</div>
<div id="content" class="content">
</div>
</body>
</html>
<script>
    app.init('${context}');
</script>
