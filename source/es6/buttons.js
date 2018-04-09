//solo and play кнопки чтоб появлялись и исчезали при дропах
export function openButtons(draggedId){
    for (let index = 1; index <=13; index++) {
        if(('box'+index) == draggedId){
            document.getElementById('btnBlock'+index).style.display = 'inline-flex';
        }
    }
}

export function closeButtons(draggedId){
    for (let index = 1; index <=13; index++) {
        if(('box'+index) == draggedId){
            document.getElementById('btnBlock'+index).style.display = 'none';
        }
    }
}