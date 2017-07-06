package com.coderby.myapp.hr.controller;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.coderby.myapp.hr.model.EmpVO;
import com.coderby.myapp.hr.service.IEmpService;

@RequestMapping("/hr")
@Controller
public class EmpController {
	
	@Autowired
	IEmpService empService;
	
	private static final Logger logger = LoggerFactory.getLogger(EmpController.class);
	
	//사원 수 조회 (전체 사원수, 부서별 사원 수) 컨트롤러
	@RequestMapping(value="/count",  method=RequestMethod.GET)
	public String getEmpCount(@RequestParam(value="deptid" , required=false, defaultValue="0") int deptid, Model model){
		if(deptid==0){
			model.addAttribute("count", empService.getEmpCount());
		} else{
			model.addAttribute("count", empService.getEmpCount(deptid));
		}
		return "hr/count";
	}//END 
	
	//사원정보 조회 컨트롤러 
	@RequestMapping(value="/{empid}", method=RequestMethod.GET)
	public String getEmpInfo(@PathVariable int empid, Model model){
		model.addAttribute("emp",empService.getEmpInfo(empid));				
		return "hr/view";
	}
	
	//사원목록 조회 컨트롤러
	@RequestMapping(value={"","/list"}, method=RequestMethod.GET)
	public String getEmpList(Model model){
		model.addAttribute("empList", empService.getEmpList());
		return "hr/list";
	}
	
	//새로운 사원정보 추가 입력양식 요청 컨트롤러(GET)
	@RequestMapping(value="/insert", method=RequestMethod.GET)
	public String insertEmp(Model model){
		model.addAttribute("jobList", empService.getAllJobId());
		model.addAttribute("deptList", empService.getAllDeptId());
		model.addAttribute("managerList", empService.getAllManagerId());
		return "hr/insertform";
	}
	//새로운 사원정보 추가 컨트롤러(POST)
	@RequestMapping(value="/insert", method=RequestMethod.POST)
	public String insertEmp(EmpVO emp, Model model){
		try{
			empService.insertEmp(emp);
		} catch(Exception e){
			model.addAttribute("message", e.getMessage());
		}
		return "redirect:/";
	}
	
	//사원정보 수정 입력양식 요청 컨트롤러(GET)
	@RequestMapping(value="/update/{empid}", method=RequestMethod.GET)
	public String updateEmp(Model model, @PathVariable int empid){
		model.addAttribute("emp", empService.getEmpInfo(empid));
		model.addAttribute("jobList", empService.getAllJobId());
		model.addAttribute("deptList", empService.getAllDeptId());
		model.addAttribute("managerList", empService.getAllManagerId());
		return "hr/updateform";
	}	
	//사원정보 수정(POST)
	@RequestMapping(value="/update", method=RequestMethod.POST)
	public String updateEmp(EmpVO emp, Model model){
		try{
			empService.updateEmp(emp);
		} catch(Exception e){
			model.addAttribute("message",e.getMessage());
		}
		return "redirect:/hr/"+emp.getEmpId();
	}
	
	//사원정보 삭제 양식 요청(GET)
	@RequestMapping(value="/delete", method=RequestMethod.GET)
	public String deleteEmp(Model model, int empid){
		model.addAttribute("emp",empService.getEmpInfo(empid));
		return "hr/deleteform";
	}
	//사원정보 삭제(POST)
	@RequestMapping(value="/delete", method=RequestMethod.POST)
	public String deleteEmp(Model model, int empid, String email){
		String realEmail = empService.getEmpInfo(empid).getEmail();
		try{
			if(realEmail.equals(email)){
				empService.deleteEmp(empid, email);
				logger.info("delete");
				return "redirect:/hr/";
			}else{
				model.addAttribute("message", "일치하지 않는 이메일입니다.");
				return "hr/deleteform";
			}
		}catch(Exception e){
			model.addAttribute("message", e.getMessage());
			return "hr/deleteform";
		}
	}
	
	//에러처리하는 컨트롤러
	@ExceptionHandler({SQLException.class, DataAccessException.class})
	public ModelAndView databaseError(HttpServletRequest request, Exception ex){
		logger.error("Request : " + request.getRequestURL() + "raised " + ex);
		
		ModelAndView mav = new ModelAndView();
		mav.addObject("exception", ex);
		mav.addObject("url", request.getRequestURL());
		mav.setViewName("hr/error");
		
		return mav;
	}
}
