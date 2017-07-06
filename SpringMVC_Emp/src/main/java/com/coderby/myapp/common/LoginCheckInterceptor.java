package com.coderby.myapp.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

public class LoginCheckInterceptor implements HandlerInterceptor {
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
//		String contextName = request.getContextPath();
//		HttpSession session = request.getSession();
//		String userid = (String)session.getAttribute("userid");
//		if(userid==null||userid.equals("")){ //사용자가 로그인하지 않았을 경우에
//			response.sendRedirect(contextName+"/"); //특정 페이지로 리다이렉트! 리다이렉트는 항상 컨트롤러가  나와야한다.
//			return false; //그 다음순위 핸들러 실행 안함
//		} else{
//			return true; // 그 다음 핸들러로 계속 우선순위에 따라 핸들러 실행함. 
//		}
		return true;
	}
	
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView mav)
			throws Exception {
		String contextName = request.getContextPath();
		HttpSession session = request.getSession();
		String userid = (String)session.getAttribute("userid");
		if(userid==null||userid.equals("")){ //사용자가 로그인하지 않았을 경우에
			response.sendRedirect(contextName+"/"); //특정 페이지로 리다이렉트! 리다이렉트는 항상 컨트롤러가  나와야한다.
			
		} 

	}
	
	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		// TODO Auto-generated method stub

	}





}
