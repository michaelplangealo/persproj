DELETE FROM shoppingcart WHERE customer_id = $2 AND product_id = $1;
-- DELETE FROM shoppingcart WHERE product_id = $1;


-- DELETE FROM shoppingcart WHERE (SELECT * from )