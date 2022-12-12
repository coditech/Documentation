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


