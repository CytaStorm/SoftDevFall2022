The Bottlers (Jeff Chen, Yusha Aziz, Fang Chen)
SoftDev
K17 - Shell Game
2022-10-24
time spent: 0.6
#How to SQLITE

1. Create file by doing "sqlite <NAME>".
2. SQLite stores its data in tables.
3. "create table <NAME>(<column name> <data type>, ...)" creates a table with a name and columns, each column will have a name and type.
4. "insert into <NAME> values(<VALUE>, ...)" Adds rows to the table, number of values must match number of columns and type of columns.
5. "select <PARAMETER> from <NAME>" returns either all values (use an \*) or use a column name to return all values in that column.
6. Ctrl+D to quit or CTRL+C to force quit.

7. Additional options: ".header on" shows names of columns.
8. ".tables" shows all tables
9. ".mode column|csv|list|html|insert|line|tabs" shows different organizations of tables on use of "select ..."
