-- Disable foreign key checks to avoid errors
SET FOREIGN_KEY_CHECKS = 0;

-- Get a list of all databases except the default ones
SELECT CONCAT('DROP DATABASE IF EXISTS `', schema_name, '`;') AS drop_statement
FROM information_schema.schemata
WHERE schema_name NOT IN ('mysql', 'information_schema', 'performance_schema');

-- Enable foreign key checks
SET FOREIGN_KEY_CHECKS = 1;