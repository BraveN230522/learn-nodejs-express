const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/CourseController')

router.get('/recycle-bin', courseController.recycleBin)
router.patch('/:id/restore', courseController.restore)
router.get('/create', courseController.create)
router.get('/:slug', courseController.detail)
router.get('/deleted/:slug', courseController.detailDeleted)
router.get('/:id/edit', courseController.edit)
router.post('/store', courseController.store)
router.put('/:id', courseController.update)
router.delete('/:id', courseController.delete)
router.delete('/:id/force', courseController.forceDelete)

module.exports = router
