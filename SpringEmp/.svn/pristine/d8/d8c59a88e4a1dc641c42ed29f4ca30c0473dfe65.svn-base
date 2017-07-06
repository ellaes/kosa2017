package com.coderby.myapp.hr.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.coderby.myapp.hr.model.EmpVO;
@Repository
public class EmpRepository implements IEmpRepository {
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	//매퍼 클래스 EmpMaper 생성
	class EmpMaper implements RowMapper<EmpVO>{
		@Override
		public EmpVO mapRow(ResultSet rs,	 int rowCount) throws SQLException {
			EmpVO emp = new EmpVO();
			emp.setEmpId(rs.getInt("employee_id"));
			emp.setFirstName(rs.getString("first_name"));
			emp.setLastName(rs.getString("last_name"));
			emp.setEmail(rs.getString("email"));
			emp.setPhoneNumber(rs.getString("phone_number"));
			emp.setHireDate(rs.getDate("hire_date"));
			emp.setJobId(rs.getString("job_id"));
			emp.setSalary(rs.getDouble("salary"));
			emp.setCommissionPct(rs.getDouble("commission_pct"));
			emp.setManagerId(rs.getInt("manager_id"));
			emp.setDeptId(rs.getInt("department_id"));
			return emp;
		}	
	}
	
	//전체 사원 수 조회
	@Override
	public int getEmpCount() {
		String sql = "select count(*) from emp1";
		return jdbcTemplate.queryForObject(sql, Integer.class);
	}
	
	//부서별 사원수 조회
	@Override
	public int getEmpCount(int deptid) {
		String sql = "select count(*) from emp1 where department_id = ?";
		return jdbcTemplate.queryForObject(sql, Integer.class,deptid);
	}
	
	//새로운 사원정보 입력
	@Override
	public void insertEmp(EmpVO emp) {
		String sql = "insert into emp1(employee_id, first_name, last_name, "
				+ "								email, phone_number, hire_date, job_id, "
				+ "								salary, commission_pct, manager_id,department_id)  "
				+ "		values (?,?,?,?,?,sysdate,?,?,?,?,?)";
		jdbcTemplate.update(sql,emp.getEmpId(), emp.getFirstName(), emp.getLastName(),
										emp.getEmail(), emp.getPhoneNumber() ,emp.getJobId(),
										emp.getSalary(), emp.getCommissionPct(), emp.getManagerId(), emp.getDeptId());
	}
	
	//사원정보 수정
	@Override
	public void updateEmp(EmpVO emp) {
		String sql = "update emp1 set "
				+ "					first_name=?, "
				+ "					last_name=?, "
				+ "					email=?, "
				+ "					phone_number=?,"
				+ "					job_id=?,"
				+ "					salary=?,"
				+ "					commission_pct=?,"
				+ "					manager_id=?,"
				+ "					department_id=?"
				+ "					where employee_id=?";
		jdbcTemplate.update(sql,emp.getFirstName(),
										emp.getLastName(),
										emp.getEmail(),
										emp.getPhoneNumber(),
										emp.getJobId(),
										emp.getSalary(),
										emp.getCommissionPct(),
										emp.getManagerId(),
										emp.getDeptId(),
										emp.getEmpId());
	}
	
	//사원정보 삭제
	@Override
	public void deleteEmp(int empid, String email) {
		String sql = "delete from emp1 where employee_id=? and email=?";
		jdbcTemplate.update(sql, empid,email);

	}
	//사원 정보 하나 가져오기
	@Override
	public EmpVO getEmpInfo(int empid) {
		String sql = "select * from emp1 where employee_id =?";
		return jdbcTemplate.queryForObject(sql, new EmpMaper(), empid);
	}
	//전체 사원정보 가져오기
	@Override
	public List<EmpVO> getEmpList() {
		String sql = "select * from emp1";
		return jdbcTemplate.query(sql, new EmpMaper());
	}
	
	//부서번호, 부서명 가져오기
	@Override
	public List<Map<Integer, String>> getAllDeptId() {
		String sql = "select department_id, department_name from departments";
		return jdbcTemplate.query(sql, new RowMapper<Map<Integer,String>>(){
			@Override
			public Map<Integer, String> mapRow(ResultSet rs, int rowCount) throws SQLException {
				Map<Integer, String> deptMap = new HashMap<Integer, String>();
				deptMap.put(rs.getInt("department_id"), rs.getString("department_name"));
				return deptMap;
			}
		});
	}
	//직무아이디, 직무명 가져오기 
	@Override
	public List<Map<String, String>> getAllJobId() {
		String sql = "select job_id as jobId, job_title as title from jobs";
		return jdbcTemplate.query(sql, new RowMapper<Map<String,String>>(){
			@Override
			public Map<String, String> mapRow(ResultSet rs, int rowCount) throws SQLException {
				Map<String, String> jobMap = new HashMap<String, String>();
				jobMap.put(rs.getString("jobId"), rs.getString("title"));
				return jobMap;
			}
		});
	}
	//매니저 아이디 가져오기
	@Override
	public List<Map<String,Object >> getAllManagerId() {
		String sql = "select d.manager_id as manager_id, e.first_name as name "
				+ "		from departments d "
				+ "		join employees e "
				+ "		on d.manager_id=e.employee_id "
				+ "		order by d.manager_id";
		return jdbcTemplate.queryForList(sql);
	}
}
