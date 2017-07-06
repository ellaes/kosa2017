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
<h2>사원정보 입력 페이지</h2>
<form action="insert" method="post">
사원번호 : <input type="text" name="empId"><br/>
이름 : <input type="text" name="firstName"><br/>
성 : <input type="text" name="lastName"><br/>
이메일 : <input type="text" name="email"><br/>
전화번호 : <input type="text" name="phoneNumber"><br/>
직무 :
<select name="jobId">
<c:forEach var="jobMap" items="${jobList}">
	<c:forEach var="job" items="${jobMap}">
		<option value="${job.key}">${job.value}</option>
	</c:forEach>
</c:forEach>
</select><br/>
급여 : <input type="text" name="salary"><br/>
보너스율 : <input type="text" name="commissionPct"><br/>
매니저아이디 :
<select name="managerId">
<c:forEach var="manager" items="${managerList}">
	<option value="${manager.manager_id}">${manager.manager_id} ${manager.name}</option>
</c:forEach>
</select><br>
부서번호 : 
<select name="deptId">
<c:forEach var="deptMap" items="${deptList}">
	<c:forEach var="dept" items="${deptMap}">
		<option value="${dept.key}">${dept.key} ${dept.value}</option>
	</c:forEach>
</c:forEach>
</select><br>
<input type="submit" value="저장"> 
<input type="reset" value="취소">
</form>
</body>
</html>