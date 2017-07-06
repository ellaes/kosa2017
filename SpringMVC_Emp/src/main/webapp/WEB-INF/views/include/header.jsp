<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!-- HEADER -->
<div class="header clearfix headerV2">
<!-- /HEADER -->

	<!-- TOPBAR -->
	<div class="topBar">
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-xs-12">
					<ul class="list-inline pull-right top-right">
						<li class="searchBox"><a href="#"><i class="fa fa-search"></i></a>
							<ul class="dropdown-menu dropdown-menu-right">
								<li>
								<span class="input-group"> 
								<input type="text" class="form-control" placeholder="Search…" aria-describedby="basic-addon2">
								<button type="submit" class="input-group-addon">Submit</button>
								</span></li>
							</ul></li>
						<li class="account-login">
							<span>
								<a data-toggle="modal" href='.login-modal'>Log in</a><small>or</small>
								<a data-toggle="modal" href='#signup'>Create an account</a>
							</span></li>
					</ul>
				</div>
			</div>
		</div>
	</div> 
	<!-- /TOPBAR -->

	<!-- NAVBAR -->
	<nav class="navbar navbar-main navbar-default nav-V2"
		role="navigation">
		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target=".navbar-ex1-collapse">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="index-v2-hs.html">YOLO PROJECT</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse navbar-ex1-collapse">
				<ul class="nav navbar-nav navbar-right">
					<li><a href="index-v2-hs.html">Home</a></li>
					<li><a class= "page-scroll" href="#our-services">Services</a></li>
					<li><a class= "page-scroll" href="#our-graphs">Graphs</a></li>
					<li><a class= "page-scroll" href="#our-team">Team</a></li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
	</nav>
</div>
<!--/header -->
