package com.coderby.myapp.hr.service;

import java.util.List;
import java.util.Map;

import com.coderby.myapp.hr.model.EmpVO;

public interface IEmpService {
	int getEmpCount();
	int getEmpCount(int deptid);

	void insertEmp(EmpVO emp);

	void updateEmp(EmpVO emp);

	void deleteEmp(int empid, String email);
	EmpVO getEmpInfo(int empid);
	List<EmpVO> getEmpList();
	List<Map<Integer, String>> getAllDeptId();
	List<Map<String, String>> getAllJobId();
	List<Map<String, Object>> getAllManagerId();
}
