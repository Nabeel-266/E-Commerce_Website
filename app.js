const overlay = document.querySelector('.overlay');
const sidebar = document.querySelector('#sidebar');

// For Sidebar Open
const menuBtn = document.querySelector('.menuBtn');

menuBtn.addEventListener('click', () => {
    overlay.classList.remove('hide');
    sidebar.style.transform = "translateX(0%)";
})

// For Sidebar Close
const closeBtn = document.querySelector('.closeBtn');

closeBtn.addEventListener('click', () => {
    overlay.classList.add('hide');
    sidebar.style.transform = "translateX(-100%)";
})

// For Sidebar Dropdown Items
const sidebarItemsDropdownBtns = document.querySelectorAll('.sideDropdownBtn');

sidebarItemsDropdownBtns.forEach((dropBtn) => {
    dropBtn.addEventListener('click', () => {
        dropBtn.parentElement.querySelector('.dropdown_sideItem').classList.toggle('hide');
        
        if(dropBtn.firstElementChild.classList.contains("fa-angle-down")){
            dropBtn.firstElementChild.classList.replace("fa-angle-down","fa-angle-up");
            dropBtn.parentElement.firstElementChild.style.color = "#ec342d";
            dropBtn.parentElement.firstElementChild.style.borderLeft = "2px solid #ec342d";
        } 
        else {
            dropBtn.firstElementChild.classList.replace("fa-angle-up","fa-angle-down");
            dropBtn.parentElement.firstElementChild.style.color = "#ffffff";
            dropBtn.parentElement.firstElementChild.style.borderLeft = "none";
        }
    })
})