// let mangaTable = document.querySelector('.manga-table');
// console.log(mangaTable);
// if(mangaTable.length % 2 === 0){
//     mangaTable.classList.add('table-primary')
// }

const deleteBtns = document.querySelectorAll('.del')

Array.from(deleteBtns).forEach((el)=>{
    el.addEventListener('click', deleteManga, false)
})


async function deleteManga(event) {

    const mangaId = event.target.dataset.id
    // const  mangaId = document.querySelector('.manga-table').dataset.id;
   
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



// for(let i=0; i<deleteBtn.length; i++){
//     deleteBtn[i].addEventListener('click', deleteManga)
// }