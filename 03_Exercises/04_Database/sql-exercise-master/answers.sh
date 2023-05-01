1- select name from students


2- select * from students
WHERE age > 30


3- select * 
FROM students
WHERE Age > 30 AND Gender = "F"


4- select Points
FROM students
WHERE name = "Alex"


5- INSERT INTO students (name, Age) VALUES("Samer", 24)


6- UPDATE students
SET Points = 350
WHERE name = "Basma"



7- UPDATE students
SET Points = 150
WHERE name = "Alex"


Create a graduates table

CREATE TABLE "graduates" (
	"ID"	INTEGER NOT NULL,
	"Name"	TEXT NOT NULL UNIQUE,
	"Age"	INTEGER,
	"Gender"	TEXT,
	"Points"	INTEGER,
	"Graduation"	TEXT,
	PRIMARY KEY("ID" AUTOINCREMENT)
);

10- INSERT INTO graduates(name, Age, Gender, points)
SELECT 
   name,Age,Gender,Points
FROM 
   students
WHERE
   name = 'Layal';



11- UPDATE graduates
SET Graduation = '08/09/2018'
WHERE name = 'Layal'

12- DELETE FROM students
WHERE name = 'Layal'

14- SELECT e.ID, e.Name, e.Company,c.Date
FROM employees e
INNER JOIN companies c ON e.Company=c.Name

15- SELECT e.Name
FROM employees e
INNER JOIN companies c ON e.Company=c.Name
WHERE Date<2000

16- SELECT e.Company
FROM employees e
INNER JOIN companies c ON e.Company=c.Name
WHERE Role='Graphic Designer'

18- Find the person with the highest number of points in **students**

select name
from students
WHERE Points = (SELECT max(Points) FROM students)


19- Find the average of points in students

SELECT AVG(Points)
FROM students;


20- Find the number of students that have 500 points

SELECT count(*)
FROM students
where Points = 500;


21- Find the names of students that contains 's'

SELECT name
FROM students
where name like '%s%'


22- Find all students based on the decreasing order of their points

SELECT *
FROM students
ORDER BY points DESC
