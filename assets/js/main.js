/**
 * Making the category holder height match the Hero section
 */
let cateList = document.querySelector('.cate-wrapper')
let cateScroll = document.querySelector('.all-categories')
let fullHeight = document.querySelector('.hero-section').scrollHeight
cateList.style.height = fullHeight + 'px'
cateScroll.style.height = (fullHeight - 55) + 'px'

/**
 * Category Accordion
 */
const parentLi = document.querySelectorAll('.has-child > a')
parentLi.forEach(e => {
    e.addEventListener('pointerdown', () => {
        e.removeAttribute('href')
        let parentItem = (level) => level.closest('.has-child')
        let childMenu = (level) => level.closest('.has-child').querySelector('.child-menu')
        parentItem(e).classList.toggle("open")
        parentLi.forEach(li => {
            if(parentItem(li) !== parentItem(e)) {
                parentItem(li).classList.remove('open')
                childMenu(li).style.maxHeight = null
            }
        });
        
        if(parentItem(e).classList.contains('open')) {
            childMenu(e).style.maxHeight = childMenu(e).scrollHeight + "px"
        } else {
            childMenu(e).style.maxHeight = null
        }
        
    })
});

/**
 * Nice Select Activation
 */
NiceSelect.bind(document.querySelector(".lang .nice-select"));
NiceSelect.bind(document.querySelector(".currency .nice-select"));