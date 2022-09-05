
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ItemCount () {
    return (
        <div className="counterButton">
            <Fab color="primary" aria-label="min"><RemoveIcon /></Fab>
            <div className='counterVisor'>
                <p >5</p>
            </div>
            <Fab color="primary" aria-label="add"><AddIcon /></Fab>
            <Button variant="outlined">Agregar al Carrito</Button>
        </div>
    )
}

export default ItemCount;
