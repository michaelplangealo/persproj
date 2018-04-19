SELECT *
from shoppingcart JOIN products ON products.id = shoppingcart.product_id
WHERE user_id = $1;