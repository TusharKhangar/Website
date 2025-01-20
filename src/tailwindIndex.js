console.log('Hello from tailwindIndex.js');

const sidebar = document.querySelector('#sidebar');
const element = document.querySelector('#openSidebar');
const closeSideBar = document.querySelector('#closeSidebar');

    if (element) {
        element.addEventListener('click', ()=> {
            console.log('clicked');
            sidebar.classList.remove('translate-x-full')
             sidebar.classList.add('translate-x-0');
             sidebar.classList.toggle('translate-x-0');
        });
    }else {
        console.error('Element not found');
    }
    
    if(closeSideBar){
        closeSideBar.addEventListener('click', ()=> {
            console.log('closeSideBar clicked');
            sidebar.classList.remove('translate-x-0');
            // sidebar.classList.remove('translate-x-full');
            sidebar.classList.add('translate-x-full');
        });
    }
    
    