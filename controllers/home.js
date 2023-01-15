const Manga = require('../models/Manga')
module.exports = {
    getIndex: async (req,res)=>{
        const mangas = await Manga.find().lean()
        res.render('index.ejs', {mangas: mangas})
    },
    createManga: (req,res)=>{
        Manga.create({
            'title': req.body.mangatitle,
            'volumes': req.body.mangavolumes,
            'completed': req.body.mangacompleted
        
        })
        
        res.redirect('/form')
    },
    getForm: async (req, res) => {
        res.render('form.ejs')
    }
}