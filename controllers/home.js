const Manga = require('../models/Manga')
module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    createManga: (req,res)=>{
        Manga.create({
            'title': req.body.mangatitle,
            'volumes': req.body.mangavolumes,
            'completed': req.body.mangacompleted
        
        })
        
        res.redirect('/')
    }
}