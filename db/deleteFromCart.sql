-- DELETE FROM shoppingcart WHERE customer_id = $2 AND product_id = $1;
DELETE FROM shoppingcart WHERE id = $1;


-- DELETE FROM shoppingcart WHERE (SELECT * from )