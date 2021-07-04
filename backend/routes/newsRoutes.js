import express from 'express'
const router = express.Router()
import {getNews,getNewsById,createNews,deleteNews,updateNews} from '../controllers/newsController.js'
import{admin,protect} from '../middleWares/authMiddleware.js'

router.route('/').get(getNews).post(protect,admin,createNews)
router.route('/:id').get(getNewsById).delete(protect,admin,deleteNews).put(protect,admin,updateNews)

export default router