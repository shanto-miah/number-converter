import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ShareIcon from '@material-ui/icons/Share';
import CloseIcon from '@material-ui/icons/Close';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkIcon from '@material-ui/icons/Link';
import Sb from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: 'fixed',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));

const actions = [
  { icon: <FacebookIcon />, name: 'Facebook' },
  { icon: <TwitterIcon />, name: 'Twitter' },
  { icon: <MailOutlineIcon />, name: 'Email' },
  { icon: <LinkIcon />, name: 'Copy Link' },
];

export default function SpeedDials() {

  const classes = useStyles();

  let [open, setOpen] = React.useState(false);
  
  let [copysucc, setCopysucc] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClick = (name) => {
    handleClose();

    switch (name) {
      case 'Facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}`, '_blank');
        break;
    
      case 'Twitter':
        window.open(`http://twitter.com/share?url=${window.location.origin}`, '_blank');
        break;
    
      case 'Email':
        break;
    
      default:
        navigator.clipboard.writeText(window.location.origin);
        setCopysucc(true);
        break;
    }

  }

  return (
      <>
    <SpeedDial
        ariaLabel="SpeedDial example"
        className={classes.speedDial}
        icon={<SpeedDialIcon icon={<ShareIcon/>} openIcon={<CloseIcon/>} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="up"
    >
        {actions.map((action) => (
        <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleClick(action.name)}
        />
        ))}
    </SpeedDial>
    { copysucc && <Snackbar message="Link Copied!" /> }
    </>
  );
}

function Transition(props) {
  return <Slide {...props} direction="up" />;
}

const Snackbar = ({message}) => {

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Sb
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            TransitionComponent={Transition}
            autoHideDuration={6000}
            onClose={handleClose}
            message={message}
            action={
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            }
        />
    );
}