<%@ page contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CoderBy</title>
<jsp:include page="/WEB-INF/views/include/includeCss.jsp"></jsp:include>
</head>
<body class="body-wrapper version2">
	<jsp:include page="/WEB-INF/views/include/header.jsp"></jsp:include>

	<div class="main-wrapper">
	
	<h1>사원정보 삭제</h1>
	${emp.employeeId}사원 ${emp.firstName} ${emp.lastName}의 정보를 삭제합니다.<p>
	삭제후 데이터는 복구될 수 없습니다.<p>
	${emp.employeeId}사원의 이메일을 입력하세요.
	<form action="./delete" method="post">
	이메일 : <input type="text" name="email">
	<input type="hidden" name="empid" value="${emp.employeeId}">
	<input type="submit" value="삭제">
	</form>
	
	
	<!-- MAIN CONTENT SECTION -->
		<section class="mainContent clearfix">
			<div class="container">
				<!-- SERVICES SECTION -->
				<section id="our-services">
					<div class="section-title">
						<h2>Service</h2>
					</div>
					<div class="row">
						<div class="col-md-4 col-sm-6 col-xs-12 site-lists">
							<h3>
								<i class="fa fa-smile-o"></i> first
							</h3>
							<div class=" aboutUsInfo testimonial-content">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Dicta libero autem, magni veritatis, optio dolor Lorem ipsum
									dutem, magni veritatis, optio dolorLorem ipsum dolor sit amet,
									consectetur adipisicing elit. Dicta libero autem, magni
									veritatis, optio dolor.</p>
							</div>
						</div>
						<div class="col-md-4 col-sm-6 site-lists">
							<h3>
								<i class="fa fa-desktop"></i> Second
							</h3>
							<div class=" aboutUsInfo testimonial-content">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicingagni
									veritatis, optio dolor Lorem ip libero autem, magni veritatis,
									optio dolor Lorem ipsuconsectetur adipisicing elit. Dicta
									libero autem, magni veritatis, optio dolor Lorem
									ipsuconsectetur adipisicing elit. Dicta libero autem, magni
									veritatis, optio dolor Lorem ipsua libero autem, magni
									veritatis, optio dolor.</p>
							</div>
						</div>
						<div class="col-md-4 col-sm-6 site-lists">
							<h3>
								<i class="fa fa-filter"></i> Third
							</h3>
							<div class=" aboutUsInfo testimonial-content">
								<p>Lorem ipsum dolor sit amet, consectetur ata libero autem,
									magni verr Lorem ipsuconsectetur adipta libero autem, magni
									verr Lorem ipsuconsectetur adipdconsectetur adipisicing elit.
									Dicta libero autem, magni verr Lorem ipsuconsectetur
									adipisicing elit. Dicta libero autem, magni veritatis, optio
									dolor Lorem ipsuipisicing elit. Dicta libero autem, magni
									veritatis, optio dolor.</p>
							</div>
						</div>
						<div class="col-md-4  col-sm-6 site-lists">
							<h3>
								<i class="fa fa-thumb-tack"></i> Fourth
							</h3>
							<div class=" aboutUsInfo testimonial-content">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Dicta libero autem, magni veritatis, optio dolor. amet,
									consectetur adipisicing elit. Dicta libero autem,</p>
							</div>
						</div>
					</div>
				</section>
				<!-- /SERVICES -->

				<!-- GRAPH SECTION -->
				<div class="aboutSection text-center" id="our-graphs">
					<h2>Graphs</h2>
				</div>
				<div class="row chart-box ">
					<div class=" col-lg-3 col-md-3 col-sm-12 aboutChart">
						<p>차트에관한 설명 적는 공간. onsectetur adipisicing elit. Dicta libero
							autem, magni veritatis, o</p>
						<input type="button" id="btn_genre" value="장르별">
						<input type="button" id="btn_time" value="시대별">
					</div>				
					<div class=" col-lg-8 col-md-9 col-sm-12 ">
						<div id="main" style="height: 400px"></div>
					</div>
				</div>
				<div align="center">
					<span class="section-border"></span>
				</div>
				<div class="row chart-box ">
					<div class=" col-lg-8 col-md-9 col-sm-12 ">
						<div id="main2" style="height: 400px"></div>
					</div>
					<div class=" col-lg-4 col-md-3 col-sm-12 aboutChart">
						<p>차트에관한 설명 적는 공간. onsectetur adipisicing elit. Dicta libero
							autem, magni veritatis, o</p>
					</div>
				</div>
				<!-- /GRAPH SECTION -->
				
				
				

				<!-- TEAM SECTION -->
				<section id="our-team">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<div class="section-title">
									<h2>our TEAM</h2>
								</div>
							</div>
							<div class="center text-center divGroup" align="center">
							<div class="col-md-2 col-sm-4 col-xs-6" align = "center">
								<div class="team-member">									
									<img class="img-responsive" src="img/members/team1.jpg" alt="">									
									<div class="member-info">
										<h4>신혜수</h4>
										<span>Leader</span>
									</div>
								</div>
							</div>
							<div class="col-md-2 col-sm-4 col-xs-6">
								<div class="team-member">
									<div class="member-image">
										<img class="img-responsive" src="img/members/jooyoung.jpg" alt="">
									</div>
									<div class="member-info">
										<h4>김주영</h4>
										<span>Developer</span>
									</div>
								</div>
							</div>
							<div class="col-md-2 col-sm-4 col-xs-6">
								<div class="team-member">
									<div class="member-image">
										<img class="img-responsive" src="img/members/gaeun.png" alt="">
									</div>
									<div class="member-info">
										<h4>최갹갹</h4>
										<span>Designer</span>
									</div>
								</div>
							</div>
							<div class="col-md-2 col-sm-4 col-xs-6">
								<div class="team-member">
									<div class="member-image">
										<img class="img-responsive" src="img/members/gyutae.png" alt="">
									</div>
									<div class="member-info">
										<h4>박규태</h4>
										<span>Developer</span>
									</div>
								</div>
							</div>
							<div class="col-md-2 col-sm-4 col-xs-6">
								<div class="team-member">
									<div class="member-image">
										<img class="img-responsive" src="img/members/eunjeong.png" alt="">
									</div>
									<div class="member-info">
										<h4>유갹갹</h4>
										<span>Developer</span>
									</div>
								</div>
							</div>							
							</div>
							
						</div>
					</div>
				</section>
				<!-- /TEAM SECTION -->
			</div>
			<!-- /container -->
		</section>
	
	
	
	
	
	
	<jsp:include page="/WEB-INF/views/include/footer.jsp"></jsp:include>
	</div>
<jsp:include page="/WEB-INF/views/include/modal.jsp"></jsp:include>
<jsp:include page="/WEB-INF/views/include/includeJS.jsp"></jsp:include>

</body>
</html>