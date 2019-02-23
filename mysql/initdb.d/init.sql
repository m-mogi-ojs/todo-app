CREATE DATABASE IF NOT EXISTS test;

CREATE TABLE test.user
(
    id INT PRIMARY KEY,
    name varchar(10) NOT NULL,
    pass varchar(100) NOT NULL
);

INSERT INTO test.user VALUES
(
    1, 'testuser', 'ae5deb822e0d71992900471a7199d0d95b8e7c9d05c40a8245a281fd2c1d6684'
);