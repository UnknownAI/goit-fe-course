const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" }
  ];



//функция добавления элементов разметки
function createGallery(items){
    
    let fullView = document.createElement('div'); 
    fullView.classList.add('fullview');

    let fullImage = document.createElement('img'); 
    fullImage.src = items[0].fullview;
    fullImage.classList.add('fullview-img');
    fullView.appendChild(fullImage); 

    let gallery = document.querySelector('.image-gallery');
    let  listPreview  = document.createElement('ul'); 
    listPreview.classList.add('preview'); 
    
    for(let item of items){
        let listElement = document.createElement('li');
        let listImage = document.createElement('img'); 
        listImage.src = item.preview; 
        listImage.dataset.fullview = item.fullview;   
        listImage.alt = item.alt; 
        listElement.appendChild(listImage); 
        listPreview.appendChild(listElement); 
    }

    listPreview.firstChild.classList.add('selected');
   

    gallery.appendChild(fullView); 
    gallery.appendChild(listPreview); 
    
    listPreview.addEventListener('click', onClick);

}

//дополнительные функции добавления/удаления эффекта выделения 
function removeSelected(){
    let currentSelected = document.querySelector('.selected'); 
    currentSelected.classList.remove('selected'); 
}
function addSelected(item){
    item.classList.add('selected');
}

//функция замены маленькой картинки на большую при клике
function onClick(){
    const item = event.target; 
    removeSelected();
    addSelected(item);
    const fullImage = document.querySelector('.fullview-img'); 
    fullImage.setAttribute('src', item.getAttribute('data-fullview'));
}


createGallery(galleryItems);
 



