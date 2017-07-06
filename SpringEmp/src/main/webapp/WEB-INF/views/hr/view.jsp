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
<a href="<c:url value='/hr/'/>">목록으로..</a>
<h2>사원정보 출력페이지</h2>
사원 아이디 : ${emp.empId}<br>
사원 이름 : ${emp.firstName}, ${ emp.lastName }<br>
이메일 : ${emp.email}<br>
전화번호 : ${emp.phoneNumber}<br>
직무 : ${emp.jobId}<br>
급여 : ${emp.salary}<br>
매니저아이디 : ${emp.managerId}<br>
부서번호 : ${emp.deptId}<br>
</body>
</html>