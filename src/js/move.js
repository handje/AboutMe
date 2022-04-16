window.addEventListener("resize",()=>{
    if(window.innerWidth<1280){
        document.querySelector('.content').classList.add('hidden');
        document.querySelector('body h1').classList.remove('hidden');
    }else{
        document.querySelector('.content').classList.remove('hidden');
        document.querySelector('body h1').classList.add('hidden');
    }
})