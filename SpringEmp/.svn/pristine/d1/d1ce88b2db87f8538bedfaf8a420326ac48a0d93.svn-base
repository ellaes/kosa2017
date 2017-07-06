package com.coderby.myapp.hr.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coderby.myapp.hr.dao.IEmpRepository;
import com.coderby.myapp.hr.model.EmpVO;
@Service
public class EmpService implements IEmpService {
	
	@Autowired
	IEmpRepository empRepository;
	
	@Override
	public int getEmpCount() {
		return empRepository.getEmpCount();
	}

	@Override
	public int getEmpCount(int deptid) {
		return empRepository.getEmpCount(deptid);
	}

	@Override
	public void insertEmp(EmpVO emp) {
		empRepository.insertEmp(emp);

	}

	@Override
	public void updateEmp(EmpVO emp) {
		empRepository.updateEmp(emp);

	}

	@Override
	public void deleteEmp(int empid, String email) {
		empRepository.deleteEmp(empid, email);
	}

	@Override
	public EmpVO getEmpInfo(int empid) {
		return empRepository.getEmpInfo(empid);
	}

	@Override
	public List<EmpVO> getEmpList() {
		// TODO Auto-generated method stub
		return empRepository.getEmpList();
	}

	@Override
	public List<Map<Integer, String>> getAllDeptId() {
		// TODO Auto-generated method stub
		return empRepository.getAllDeptId();
	}

	@Override
	public List<Map<String, String>> getAllJobId() {
		// TODO Auto-generated method stub
		return empRepository.getAllJobId();
	}

	@Override
	public List<Map<String, Object>> getAllManagerId() {
		return empRepository.getAllManagerId();
	}

}
