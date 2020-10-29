<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test/memberRegister.jsp</title>
</head>
<body>
    <%
        String ID = request.getParameter("id");
        String P.W = request.getParameter("pw");
        String NAME = request.getParameter("name");
        String AGE = request.getParameter("age");
        
    %>
    <h2>이름: <%=ID%></h2>
    <h2>전공: <%=P.W%></h2>
    <h2>나이: <%=NAME%></h2>
    <h2>비밀번호: <%=AGE%></h2>
    
</body>
</html>