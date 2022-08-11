-- Create tasks table
CREATE TABLE "tasks" (
	"id" serial primary key,
	"name" varchar(120),
	"complete" varchar(1) default 'N'
);

-- Test entry
INSERT INTO "tasks" ("name", "complete")
VALUES ('make a to-do list', 'N');