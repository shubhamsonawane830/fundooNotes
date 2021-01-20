import React, { useState } from "react";
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Note from '../Notes/Note';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { CheckBoxOutlined, ImageOutlined, AddAlertOutlined, ColorLensOutlined, ArchiveOutlined, MoreVertOutlined, UndoOutlined, RedoOutlined, Description, NotListedLocationOutlined } from '@material-ui/icons';
import clsx from 'clsx';
 import styles from './AddNotes.styles';
import NoteService from '../../Services/noteService'

 const service = new NoteService();

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
        display: 'flex',
        flexDirection: 'column',

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


export default function AddNotes(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [clr, setClr] = React.useState("#ffff");
    const [addItem, setAddItem] = useState([]);
    const [note, setNote] = useState({
        title: "",
        description: "",
    });

    const InputEvent  = (event) => {

        const value = event.target.value;
        const name = event.target.name;
        // const {name, value} = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
              
        console.log(note);
    };

    const addEvent = () =>{
        props.passNote(note);
        setNote({ 
            title: "",
            description: "",
        })
    };
const addNote = (note) => {
    setAddItem((prevData)=>{
        return [...prevData, note];

    });

    const save = (e) => {
        e.preventDefault();
        if (note.title.length === 0) {
            setAddItem(false);

        }
        else {
            console.log('note added', note.title, note.description);
        }
    }
	
let userData = new userData();
// if (title == "" && Description == ""){
//     console.log("Please Enter Data");
//     return null;
// }
     userData.set("title", note.title);
     userData.set("description", note.description);

    service.addNote(userData, localStorage.getItem('userToken')).then(data => {
        let arrayData = data.data.data;
        console.log(data);
    }).catch(error => {
        console.log(error);
    })


};
    const handleNoteOpen = () => {
        setOpen(false)
    }

    const handleNoteClose = () => {
        setOpen(true)
    }

    const setColor = (value) => {
        setClr(value)
    }



    return (
          <div>
              
             { open ? 
                 <div className={classes.main} onClick={handleNoteOpen}> 
                 {/* <div className={classes.text} ><InputBase type="text" placeholder="title" /> </div> */}
                 <div className={classes.text} >Take a note</div>

                     <div className={classes.text}  > 
                      <div className="Icon">
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
        </div>
        :

        <div className={classes.main2} style={{backgroundColor: clr}}>
        <InputBase type="text" name="title" value={note.title} onChange={InputEvent} fullWidth placeholder="Title" /> 
        <InputBase type="text" name="description" value={note.description} onChange={InputEvent} fullWidth placeholder="Take a note.." />

        <div>


            <Note handleclr= {setClr}  /> 
            <Button onClick={addEvent} onClick={handleNoteClose}>Close</Button>

        </div>
        
        </div>
}
</div>

    )
}