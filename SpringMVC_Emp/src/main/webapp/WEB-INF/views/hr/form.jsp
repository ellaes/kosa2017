<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style type="text/css">
.error{
	color: red
}
</style>
</head>
<body>
<h1>사원정보 입력</h1>
<c:url value="/hr/insert" var="actionURL" scope="page"/>
<form:form action="${actionURL }" modelAttribute="emp">
<table border="1">
<tr>
	<th>사원번호</th>
	<td>
		<form:input path="employeeId" required="required"/>
		<form:errors path="employeeId" cssClass="error"/>
	</td>
</tr>
<tr>
	<th>이름</th>
	<td>
		<form:input path="firstName" required="required"/>
		<form:errors path="firstName" cssClass="error"/>
	</td>
</tr>
<tr>
	<th>성</th>
	<td>
		<form:input path="lastName" required="required"/>
		<form:errors path="lastName" cssClass="error"/>
	</td>
</tr>
<tr>
	<th>이메일</th>
	<td>
		<form:input path="email" required="required"/>
		<form:errors path="email" cssClass="error"/>	
	</td>
</tr>
<tr>
	<th>전화번호</th>
	<td>
		<form:input path="phoneNumber"/>
		<form:errors path="phoneNumber" cssClass="error"/>
	</td>
</tr>
<tr>
	<th>입사일</th>
	<td>
		<form:input path="hireDate" type="date"  required="required"/>
		<form:errors path="hireDate" cssClass="error"/>
	</td>
</tr>
<tr>
	<th>직무</th>
	<td>
		<select name="jobId">
			<c:forEach var="job" items="${ jobList}">
				<option value="${job.jobId }">${job.title}</option>
			</c:forEach>
		</select>
	</td>
</tr>
<tr>
	<th>급여</th>
	<td>
		<form:input path="salary" type="number"/>
		<form:errors path="salary" cssClass="error"/>
	</td>
</tr>
<tr>
	<th>커미션</th>
	<td>
		<form:input path="commissionPct" type="number" step="0.1" />
		<form:errors path="commissionPct" cssClass="error"/>
	</td>
</tr>
<tr>
	<th>매니저번호</th>
	<td>
		<select name="managerId">
			<c:forEach var="manager" items="${managerList }">
				<option value="${manager.managerId }">${manager.managerId } ${manager.firstName }</option>
			</c:forEach>
		</select>
	</td>
</tr>
<tr>
	<th>부서번호</th>
	<td>
		<form:select path="departmentId">
			<c:forEach var="dept" items="${deptList}">
				<form:options items="${dept}"/>
			</c:forEach>
		</form:select>
	</td>
</tr>
<tr>
	<th>&nbsp;</th>
	<td>
		<input type="submit" value="저장"/>
		<input type="reset" value="취소"/>
	</td>
</tr>
</table>
</form:form>
</body>
</html>