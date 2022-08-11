-- Create tasks table
CREATE TABLE "tasks" (
	"id" serial primary key,
	"task" varchar(120),
	"complete" varchar(1) default 'N'
);

-- Test entry
INSERT INTO "tasks" ("task", "complete")
VALUES ('make a to-do list', 'N');