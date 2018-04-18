INSERT INTO customers (custname, custid) VALUES ($1, $2) RETURNING *;
