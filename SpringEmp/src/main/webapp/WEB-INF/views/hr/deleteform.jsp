<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>  
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
${message}
<h2>사원정보 삭제 페이지.</h2>
<h4>${emp.empId} 번 사원 ${emp.firstName},${emp.lastName} 의  이메일을 입력하세요.</h4>
<form action="<c:url value='/hr/delete'/>" method="post">
<input type="hidden"  name="empid"  value="${emp.empId }"><br>
이메일 : <input type=text  name="email">
<input type="submit" value="삭제"> <input type="reset" value="취소">
</form>
</body>
</html>