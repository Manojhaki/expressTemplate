
const Work = require('../models/Work');

// @desc get all the works
// @route GET /api/v1/works
// @access Public
exports.getWorks = (req, res, next) => {
    res.status(200).json({ success: true, msg: "show all work" });
}

// @desc get single the work
// @route GET /api/v1/works/:id
// @access Public
exports.getWork = (req, res, next) => {
    res.status(200).json({ success: true, msg: `get ${req.params.id} work` });

}

// @desc create new work
// @route POST /api/v1/works
// @access Private
exports.createWork = async (req, res, next) => {
    const work = await Work.create(req.body);
    res.status(201).json({
        success: true,
        data: work
    });

}

// @desc update work
// @route PUT /api/v1/works/:id
// @access Private
exports.updateWork = (req, res, next) => {
    res.status(200).json({ success: true, msg: `update ${req.params.id} work` });

}

// @desc delete work
// @route DELETE /api/v1/works/:id
// @access Private
exports.deleteWork = (req, res, next) => {
    res.status(200).json({ success: true, msg: `delete ${req.params.id} work` });

}