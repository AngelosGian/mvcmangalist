// let mangaTable = document.querySelector('.manga-table');
// console.log(mangaTable);
// if(mangaTable.length % 2 === 0){
//     mangaTable.classList.add('table-primary')
// }

const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el)=>{
// deleteBtn.forEach((el)=>{
    el.addEventListener('click', deleteManga, false)
})


async function deleteManga() {
    const parentRow = this.closest('.manga-table');
    const mangaId = parentRow.dataset.id;
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