import React from "react";
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import Button from '@material-ui/core/Button';
import { IconButton } from "@material-ui/core";
import Note from './Note.jsx';

const useStyles = makeStyles((theme) => ({
    main: {
        width: '600px' ,
        height: '46px',
        backgroundColor: '#fff',
        border: '1px solid transparent',
        borderColor: '#e0e0e0',
        boxSizing: 'border-box',
        borderRadius: '8px',
        color: '#202124',
        direction: 'ltr',
        fontFamily: 'Roboto,arial,sans-serif',
        fontSize: '15px',
        boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)',
        marginTop: theme.spacing(9.2),
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        color: '#808688',
        fontSize: '15px',
        fontWeight: '400',
        [theme.breakpoints.down('sm')]: {
            width: '108%',
            marginTop: theme.spacing(7),
            marginLeft: theme.spacing(-2),
        },

    },
    text: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: '1',
        height: '40px',
        overflow: 'hidden',
    },
    main2: {
        width: '600px',
        height: '136px',
        backgroundColor: '#fff',
        border: '1px solid transparent',
        borderColor: '#e0e0e0',
        boxSizing: 'border-box',
        borderRadius: '8px',
        color: '#202124',
        direction:'ltr',
        fontFamily: 'Roboto, arial, sans-serif',
        fontSize: '15px',
        boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302),0 2px 6px 2px rgba(60, 64,67, 0.149)',
        marginTop: theme.spacing(10),
        display:'flex',
       padding: '12px 16px',
       color: '#808688',
       fontSize: '15px',
       fontWeight: '400',
       [theme.breakpoints.down('sm')]: {
        width: 'auto',
        marginTop: theme.spacing(7),
        marginLeft: theme.spacing(-2),
      },
    }
}))


export default function AddNotes() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleNoteOpen = () => {
        setOpen(false)
    }

    const handleNoteClose = () => {
        setOpen(true)
    }

    return (
          <div>
             { open ? 
                 <div className={classes.main}> 
                     <div className={classes.text} onClick={handleNoteOpen}>Take a note..</div>
                      <div>
                         <IconButton>
                             <CheckBoxOutlinedIcon />
                         </IconButton>
                         <IconButton>
                             <BrushOutlinedIcon />
                         </IconButton>
                         <IconButton>
                             <ImageOutlinedIcon />
                         </IconButton>
                     </div>
        </div>
        :
        <div className={classes.main2}>
        <div className={classes.text} onClick={handleNoteOpen}>Take a note</div>
        <div>
        <Note /> 

            <Button onClick={handleNoteClose}>Close</Button>

        </div>
        
        </div>
            }

            </div>
    )
        }

