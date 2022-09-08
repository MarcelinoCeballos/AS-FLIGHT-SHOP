import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

function CartWidget () {
    return (
        <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon color="action" />
        </Badge>
    )
}

export default CartWidget;