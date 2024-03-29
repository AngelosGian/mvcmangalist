const deleteBtns = document.querySelectorAll('.del')

Array.from(deleteBtns).forEach((el)=>{
    el.addEventListener('click', deleteManga, false)
})


async function deleteManga(event) {

    const mangaId = event.target.dataset.id
   
    try{
        const response = await fetch('mangas/deletemanga',{
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'mangaIdFromJSFile' : mangaId
            })
        })
        const data = await response.json()
        location.reload();
    }
    catch(err){
        console.error(err)
    }
}
