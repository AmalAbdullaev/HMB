//solo and play кнопки чтоб появлялись и исчезали при дропах

export class ButtonsState{
    visible(draggedId){
        for (let index = 1; index <=13; index++) {
            if(('box'+index) == draggedId){
                document.getElementById('btnBlock'+index).style.display = 'inline-flex';
            }
        }
    }
    
    invisible(draggedId){
        for (let index = 1; index <=13; index++) {
            if(('box'+index) == draggedId){
                document.getElementById('btnBlock'+index).style.display = 'none';
            }
        }
    }
}
