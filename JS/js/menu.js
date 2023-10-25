const menuItem = document.querySelectorAll(`.item-menu`);

function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove(`ativo`)
    )
    this.classList.add(`ativo`)
}

menuItem.forEach((item)=>
    item.addEventListener(`click`, selectLink)

)


// Expandir Menu

const btnexp = document.querySelectorAll(`#btn-exp`);
const menuSide = document.querySelectorAll(`.meu-lateral`);

btnexp.addEventListener.(`click`, function(){
    menuSide.classList.toggle
})