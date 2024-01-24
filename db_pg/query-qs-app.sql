drop table if EXISTS users;
drop table if EXISTS customers;
drop table if EXISTS packages;
drop table if EXISTS status;

CREATE TABLE IF NOT EXISTS users(
	email VARCHAR(45) PRIMARY KEY,
	password VARCHAR(15)
);

CREATE TABLE IF NOT EXISTS customers(
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(45) NOT NULL,
	surname VARCHAR(45) NOT NULL,
	code VARCHAR(45) NOT NULL,
	email VARCHAR(45) NOT NULL, 
	password VARCHAR(200) NOT NULL,
	phone VARCHAR(8) NOT NULL
);

CREATE TABLE IF NOT EXISTS status(
	id SERIAL PRIMARY KEY,
	name VARCHAR(45) NOT NULL,
	description VARCHAR(255),
	quantity_package INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS packages(
	id BIGSERIAL PRIMARY KEY,
	tracking INTEGER NOT NULL,
	weight decimal(8, 2) NOT NULL,
	description VARCHAR(255) NOT NULL,
	state_id INTEGER NOT NULL,
	customer_id INTEGER NOT NULL,
	CONSTRAINT FK_package_state FOREIGN KEY (state_id) REFERENCES status(id), 
	CONSTRAINT FK_package_customer FOREIGN KEY (customer_id) REFERENCES customers(id)
);


INSERT INTO users (email, password) VALUES
('ñamian001@gmail.com', 'password123'),
('facundo@gmail.com', 'securepass'),
('uwebscol@gmail.com', 'fifido');

-- Datos para la tabla 'customers'
INSERT INTO customers (name, surname, code, email, password, phone) VALUES
('Mark', 'Patinson', 'C001', 'mark24@gmail.com', 'geogebra', '23454367'),
('Julian', 'Smith', 'C002', 'Julian09@gmail.com', 'jolon69', '21765435'),
('Bob', 'Johnson', 'C003', 'bob.johnson@example.com', 'charlie23', '09654365');

-- Datos para la tabla 'status'
INSERT INTO status (name, description, quantity_package) VALUES
('In Transit', 'Package is on its way', 5),
('Delivered', 'Package has been delivered', 10),
('Pending', 'Package is waiting for processing', 3);

-- Datos para la tabla 'packages'
INSERT INTO packages (tracking, weight, description, state_id, customer_id) VALUES
(5757, 2.5, 'Small Box', 4, 4),
(5758, 5.8, 'Medium Box', 5, 5),
(5759, 1.3, 'Envelope', 7, 6),
(5760, 1.3, 'Envelope', 7, 10);
INSERT INTO packages (tracking, weight, description, state_id, customer_id) VALUES
(5760, 1.3, 'Envelope', 7, 10);

select * from customers;

select * from status;


SELECT c.name || ' ' || c.surname AS "client", c.code, c.email, c.phone, p.id AS "package", p.tracking, s.name AS "state" FROM packages p 
JOIN status s ON p.state_id = s.id
JOIN customers c ON p.customer_id = c.id; -- WHERE c.id = 3;

SELECT * FROM packages;


SELECT * FROM customers;
