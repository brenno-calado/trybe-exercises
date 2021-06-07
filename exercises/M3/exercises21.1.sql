USE hr;

SELECT 
    MAX(SALARY) AS 'max_salary'
FROM
    employees;

SELECT 
    MAX(SALARY) - MIN(SALARY) AS 'max_min'
FROM
    employees;

SELECT 
    ROUND(AVG(SALARY), 2) AS 'avg_salary_by_role'
FROM
    employees
GROUP BY JOB_ID
ORDER BY avg_salary_by_role DESC;

SELECT 
    SUM(SALARY) AS 'total_salary'
FROM
    employees;

SELECT 
    ROUND(MAX(SALARY),2) AS 'max_salary',
    ROUND(MIN(SALARY),2) AS 'min_salary',
    ROUND(SUM(SALARY),2) AS 'sum_salary',
    ROUND(AVG(SALARY),2) AS 'avg_salary'
FROM
    employees;

SELECT 
    JOB_ID, COUNT(*) AS 'total_employed'
FROM
    employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

SELECT 
    JOB_ID, SUM(SALARY) AS 'total_salary'
FROM
    employees
GROUP BY JOB_ID;

SELECT 
    JOB_ID, SUM(SALARY) AS 'total_salary'
FROM
    employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

SELECT 
    JOB_ID, AVG(SALARY) AS 'avg_salary'
FROM
    employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY avg_salary DESC;

SELECT 
    DEPARTMENT_ID,
    AVG(SALARY) AS 'avg_salary',
    COUNT(*) AS 'total_employees'
FROM
    employees
GROUP BY DEPARTMENT_ID
HAVING total_employees > 10;

UPDATE employees 
SET 
    PHONE_NUMBER = CONCAT(REPLACE(LEFT(PHONE_NUMBER,3), '515', '777'), SUBSTRING(PHONE_NUMBER,4))
WHERE
    PHONE_NUMBER LIKE '515%';

SELECT * FROM employees WHERE LENGTH(FIRST_NAME) > 8;

SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) AS 'YEAR' FROM employees;

SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) AS 'DAY' FROM employees;

SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) AS 'MONTH' FROM employees;

SELECT UCASE(CONCAT(FIRST_NAME, ' ',LAST_NAME)) AS 'FULL_NAME' FROM employees;

SELECT 
    LAST_NAME
FROM
    employees
WHERE
    (MONTH(HIRE_DATE) = 7 AND YEAR(HIRE_DATE) = 1987);
SELECT DATE(NOW());
SELECT FIRST_NAME, LAST_NAME, DATE(NOW()) - HIRE_DATE AS 'TIME' FROM employees;
