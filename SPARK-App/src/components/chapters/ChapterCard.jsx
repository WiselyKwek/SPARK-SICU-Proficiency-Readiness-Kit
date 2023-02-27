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
    const currentChapterTitle = chapter.title;
    const currentChapterIcon = chapter.chapterIcon;

    const navigate = useNavigate();
    return (
        <Card style={{ height: '10vw', width: '20vw' }}
        sx={{
            ':hover': {
                bgcolor: '#e0f2f1',
            },
          }}
        onClick={
            () => {
                localStorage.setItem("currentChapterID", currentChapterId)
                navigate(`${currentChapterId}/subchapters`,
                    {
                        state:
                        {
                            parentChapterId: currentChapterId,
                            parentChapterTitle: currentChapterTitle,
                            parentChapterIcon: currentChapterIcon
                        }
                    }
                )
            }
        }>
            <CardActionArea style={{ height: '100%', width: '100%' }}>
                <CardContent>
                    <Typography  variant="h5" component="div" textAlign={"center"}>
                        {chapter.chapterIcon} 
                    </Typography>
                </CardContent>
            <Typography  variant="h5" textAlign={"center"}>
                {chapter.title}
            </Typography>
            </CardActionArea>
        </Card>
    );
}