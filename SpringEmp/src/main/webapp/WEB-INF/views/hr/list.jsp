<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
${message}
<p><a href="<c:url value='/hr/insert'/>">새로운 사원 추가</a></p>
<table border=1>
<tr>
	<th>사원 번호</th>
	<th>이름</th>
	<th>이메일</th>
	<th>전화번호</th>
	<th>입사일</th>
	<th>직무</th>
	<th>급여</th>
	<th>커미션</th>
	<th>매니져 번호</th>
	<th>부서번호</th>
	<th>수정</th>
	<th>삭제</th>
</tr>
<c:forEach var="emp" items="${empList}">
<tr>
	<td><a href="<c:url value='/hr/${emp.empId}'/>">${emp.empId}</a></td>
	<td>${emp.firstName} ${emp.lastName}</td>
	<td>${emp.email}</td>
	<td>${emp.phoneNumber}</td>
	<td>${emp.hireDate}</td>
	<td>${emp.jobId}</td>
	<td>${emp.salary}</td>
	<td>${emp.commissionPct}</td>
	<td>${emp.managerId}</td>
	<td>${emp.deptId}</td>
	<td><a href="<c:url value='/hr/update/${emp.empId}'/>">수정</a></td>
	<td><a href="<c:url value='/hr/delete?empid=${emp.empId}'/>">삭제</a></td>
</tr>
</c:forEach>
</table>

</body>
</html>