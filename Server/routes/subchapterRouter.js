import express from 'express';
import Chapter from '../models/ChapterModel.js';
import querystring from 'querystring';
const subchapterRouter = express.Router();

// @description: Get health status of subchapter chapter route
// @route GET chapter/:chapterId/subchapter/health
// Working!
subchapterRouter.get("/health", async (req, res) => {
    try {
        res.send("Subhapter Route Healthy")
    } catch (error) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
});

// @description: Get get all subchapters for a chapter by chapterId
// @route GET chapter/:chapterId/subchapter/
// Working!
subchapterRouter.get("/", async (req, res) => {
    try {
        const chapterId = req.chapterId;
        const chapter = await Chapter.findById(chapterId);
        const subchapters = chapter.subchapters;
        // console.log(subchapters)
        res.status(200).json(subchapters)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
});

// @description: Get subchapter by subchapter title
// @route GET chapter/:chapterId/subchapter/:subchapterTitle
// Working!
subchapterRouter.get('/:subchapterId', async (req, res) => {
    try {
        const chapterId = req.chapterId;
        const subchapterId = req.params.subchapterId;
        const chapter = await Chapter.findById(chapterId);
        const subchapters = chapter.subchapters;
        
        const subchapterResult = subchapters
        .filter(subchapter => subchapter._id == subchapterId)
        .map((finalResult) => {
            return {
                ...finalResult._doc,
                "chapterIcon": chapter.chapterIcon,
                "chapterTitle": chapter.title,
            }
        })
        
        if (subchapterResult.length > 0) { 
            return res.status(200).json(subchapterResult[0]);
        }
        return res.status(404).json({ msg: 'Subchapter not found' });
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
});

// @description: Add subchapter to chapter by chapter Id
// @route PUT chapter/:chapterId/subchapter/
// Working!
subchapterRouter.put("/", async (req, res) => {
    try {
        const { subchapterTitle, thumbnail, description, content } = req.body;
        const newSubchapter = {
            subchapterTitle,
            thumbnail,
            description,
            content
        }

        const chapterId = req.chapterId;
        const chapter = await Chapter.findByIdAndUpdate(
            { _id: chapterId },
            { $push: { subchapters: newSubchapter } },
        );
        res.status(200).json(chapter)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
});

// @description: Delete subchapter by subchapterId in chapter by chapter Id
// @route DELETE chapter/:chapterId/subchapter/:subchapterId
// Working!
subchapterRouter.delete("/:subchapterId", async (req, res) => {
    try {
        const chapterId = req.chapterId;
        const subchapterId = req.params.subchapterId;
        const chapter = await Chapter.findByIdAndUpdate(
            { _id: chapterId },
            { $pull: { subchapters: { _id: subchapterId } } },
        );
        res.status(200).json(chapter)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
});




export default subchapterRouter;