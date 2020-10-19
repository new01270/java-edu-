<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ch05/get.jsp</title>
</head>
<body>
    <%
        String namee = request.getParameter("name");
        String majorr = request.getParameter("major");
        String agee = request.getParameter("age");
        String passwordd = request.getParameter("password");
        String fileName = request.getParameter("attachfile");
    %>
    <h2>이름: <%=namee%></h2>
    <h2>전공: <%=majorr%></h2>
    <h2>나이: <%=agee%></h2>
    <h2>비밀번호: <%=passwordd%></h2>
    <h2>파일명: <%=fileName%></h2>
</body>
</html>