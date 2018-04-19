SELECT *
from shoppingcart JOIN products ON products.id = shoppingcart.product_id
WHERE shoppingcart.customer_id = $1;