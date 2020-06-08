import React from 'react';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import ButtonBase from "@material-ui/core/ButtonBase";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import Comments from "./Comment";
import CommentForm from './CommentForm';
import {Link} from "react-router-dom";


const titleStyles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    image: {
        width: '5vw',
        height: '5vw',
        objectFit: 'cover',
        borderRadius: '50%'
    },
});

const cardStyles = {
    card: {
        display: 'block',
        width: '50vw',
        transitionDuration: '0.3s',
    },
    image: {
        minWidth: 200
    },
    content: {
        padding: 25,
        objectFit: 'cover'
    }
};

const DialogTitle = withStyles(titleStyles)((props) => {
    const { username, timestamp, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <img
                src={"https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg"}
                alt="comment"
                className={classes.image}
            />
            <div>
                <Typography variant="h6" component={Link} to={`/users/${username}`}>
                    {username}
                </Typography>
                &nbsp;
                <Typography variant="caption" color="textSecondary">
                    {timestamp.substr(0, 10)} {timestamp.substr(11, 5)}
                </Typography>
            </div>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

function PostDialog({ postData }) {
    const [open, setOpen] = React.useState(false);
    const [comments, setComments] = React.useState([]);

    const handleOpen = () => {
        axios
            .get("getComments", {
                params: {
                    "post_id": postData.id
                }
            })
            .then((res) => setComments(res.data));
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <ButtonBase onClick={handleOpen}>
                <Card style={cardStyles.card}>
                        <CardContent style={cardStyles.content}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {postData.content}
                            </Typography>
                        </CardContent>
                </Card>
            </ButtonBase>
            <Dialog
                maxWidth="80%"
                fullWidth={true}
                onClose={handleClose}
                scroll="paper"
                open={open}
            >
                <DialogTitle
                    username={postData.owner}
                    timestamp={postData.timestamp}
                    onClose={handleClose}
                />
                <DialogContent dividers>
                    <Typography
                        variant={postData.content.length < 200 ? "h4" : "body1"}
                        color="textPrimary"
                        component="p">
                        {postData.content}
                    </Typography>
                </DialogContent>
                <DialogContent dividers>
                    <Typography variant="subtitle1" color="textSecondary" component="p">
                        Comments:
                    </Typography>
                    <Comments commentData={comments} />
                </DialogContent>
                <DialogContent>
                    <CommentForm postID={postData.id} />
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default PostDialog;