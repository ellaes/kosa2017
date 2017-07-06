<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="" method="post">
<select name="jobId">
<c:forEach var="jobs" items="${jobs}">
	<c:if test="${emp.jobid==job.key}">
		<option value="${ job.key}" selected>${job.value}</option>
	</c:if>
	<c:if test="${emp.jobId ne job.key }">
		<option value="${job.key}">{job.value}</option>
	</c:if>
</c:forEach>
</select>
</form>
</body>
</html>