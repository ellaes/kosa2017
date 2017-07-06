package com.coderby.myapp.hr;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.coderby.myapp.hr.model.EmpVO;
import com.coderby.myapp.hr.service.IEmpService;

public class EmpMain {
	public static void main(String[] args) {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext("application-config.xml");
		IEmpService empService = context.getBean("empService", IEmpService.class);
		
		System.out.println("--> 사원수 조회");
		System.out.println(empService.getEmpCount()); //109
		System.out.println("--> 50번 부서 사원수 조회");
		System.out.println(empService.getEmpCount(50)); // 45
		
		System.out.println("-->103번 사원 정보 조회");
		System.out.println(empService.getEmpInfo(103));
		
		System.out.println("--> 사원 전체 정보 조회");
		System.out.println(empService.getEmpList());
		
		System.out.println("--> 새로운 사원 정보 입력");
		EmpVO emp = new EmpVO();
		emp.setEmpId(210);
		emp.setFirstName("hs");
		emp.setLastName("shin");
		emp.setEmail("hsshin");
		emp.setPhoneNumber("010");
		emp.setJobId("IT_PROG");
		emp.setSalary(10000);
		emp.setCommissionPct(0.2);
		emp.setManagerId(100);
		emp.setDeptId(10);		
		try{
			empService.insertEmp(emp);
		}catch(Exception e){
			System.out.println(e.getMessage());
		}
		System.out.println("신규사원정보 출력 : "+ empService.getEmpInfo(210));
		
		System.out.println("-->210번 사원 급여 1.1 인상");
		emp.setSalary(emp.getSalary()*1.1);
		empService.updateEmp(emp);
		System.out.println(empService.getEmpInfo(210).getSalary()); //10000에서 11000 으로  인상됨.
		
		System.out.println("-->210번 사원 정보 삭제");
		empService.deleteEmp(210, "hsshin");
		
		System.out.println("-->모든 부서번호, 부서명 출력");
		System.out.println(empService.getAllDeptId());
		
		System.out.println("-->모든 직무아이디,직무명 출력");		
		System.out.println(empService.getAllJobId());
		
		System.out.println("-->모든 매니저사원아이디,매니저이름 출력");
		System.out.println(empService.getAllManagerId());
	}
}
