<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<h2>사원정보 수정 페이지</h2>
<form action="<c:url value='/hr/update'/>" method="post">
사원번호 : <input type="text" name="empId" value="${emp.empId}"><br/>
이름 : <input type="text" name="firstName" value="${emp.firstName}"><br/>
성 : <input type="text" name="lastName" value="${emp.lastName}"><br/>
이메일 : <input type="text" name="email" value="${emp.email }"><br/>
전화번호 : <input type="text" name="phoneNumber" value="${emp.phoneNumber}"><br/>
직무 :
<select name="jobId">
<c:forEach var="jobMap" items="${jobList}">
	<c:forEach var="job" items="${jobMap}">
			<option value="${job.key}" 
					<c:if test="${emp.jobId eq job.value} ">selected</c:if>> ${job.value}
			</option>
	</c:forEach>
</c:forEach>
</select><br/>
급여 : <input type="text" name="salary" value="${emp.salary}"><br/>
보너스율 : <input type="text" name="commissionPct" value="${emp.commissionPct}"><br/>
매니저아이디 :
<select name="managerId">
	<c:forEach var="manager" items="${managerList}">
		<c:if test="${emp.managerId eq manager.manager_id}">
			<option value="${manager.manager_id}" selected>${manager.manager_id} ${manager.name}</option>
		</c:if>
		<c:if test="${emp.managerId ne manager.manager_id}">
			<option value="${manager.manager_id}">${manager.manager_id} ${manager.name}</option>
		</c:if>
	</c:forEach>
</select><br>
부서번호 : 
<select name="deptId">
<c:forEach var="deptMap" items="${deptList}">
	<c:forEach var="dept" items="${deptMap}">
		<c:if test="${emp.deptId eq dept.key}">
			<option value="${dept.key}" selected>${dept.key} ${dept.value}</option>
		</c:if>
		<c:if test="${emp.deptId ne dept.key}">
			<option value="${dept.key}">${dept.key} ${dept.value}</option>
		</c:if>	
	</c:forEach>
</c:forEach>
</select><br>
<input type="submit" value="저장"> 
<input type="reset" value="취소">
</form>
</body>
</html>