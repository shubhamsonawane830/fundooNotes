import { colors, IconButton } from "@material-ui/core";
import React from "react";
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ImageIcon from '@material-ui/icons/Image';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#fff',
        border: '1px solid transparent',
        borderColor: '#e0e0e0',
        boxSizing: 'border-box',
        borderRadius: '8px',
        color: '#202124',

    }
})


export default function Note(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(null);
    const [clr, setClr] = React.useState("#ffff");

    const colors = [
        "#ffff",
        "#ef9a9a",
        "#ffcc80",
        "#fff59d",
        "#dcedc8",
        "#b2dfdb",
        "#e0f7fa",
        "#4fc3f7",
        "#b39ddb",
        "#f8bbd0",
        "#a1887f",
        "#cfd8dc",
];

//   const setColor = (value) =>{
//       props.handleclr(value)
//   }
    const colorsHandleClick = () => {
        setOpen(true);
    };

    const colorsHandleClose = () => {
        setOpen(false);
    };

    const passColor = (color) => {
        console.log(color);
    };

  const ColorBlock = () => {
    return (
    <div>
        <Menu open={Boolean(open)} onClose={colorsHandleClose}>
            <div className={classes.colorMenu}>
                {colors.map((color) => (
                    <div className={classes.colorDot}><IconButton className={classes.colorButton} onClick={()=>props.handleclr(color.color)} style={{ backgroundColor: color }} /></div>

                ))}
            </div>
        </Menu>
    </div>


    );
};

   return (
       <div className="optionButton">
           <IconButton>
               <AddAlertIcon />
           </IconButton>
           <IconButton>
               <PersonAddIcon />
           </IconButton>
           <IconButton onMouseOver={colorsHandleClick} >
               <ColorLensIcon />
           </IconButton>
           < ColorBlock />
           <IconButton>
               <ImageIcon />
           </IconButton>
           <IconButton>
               <SystemUpdateAltIcon />
           </IconButton>
           <IconButton>
               <MoreVertIcon />
           </IconButton>
           </div>
   );

   }


