import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function MultiActionAreaCard({ chapter }) {
    const currentChapterId = chapter._id;

    const navigate = useNavigate();
    return (
        <Card style={{height:'10vw', width:'20vw'}}>
            <CardActionArea
                onClick={
                    () => {
                        navigate(`${currentChapterId}`,
                            { state: { parentChapterId: currentChapterId } })
                    }
                }>
                {/* <CardMedia
                    component="img"
                    height="225"
                    image="../../src/handbook1.jpg"
                    alt="green iguana"
                /> */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
                        {chapter.chapterIcon} 
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        {chapter.description}
                    </Typography> */}
                </CardContent>
            </CardActionArea>
            <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
                {chapter.title}
            </Typography>
        </Card>
    );
}