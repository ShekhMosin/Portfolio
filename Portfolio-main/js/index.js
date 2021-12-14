// console.time('you code took')
// console.log('hello mosin')
// console.log('4+53')
// console.log('true')
// console.log('{mosin:this , marks:70'});
// cosole.log('mosin., this', marks');
// console.warm(this is warm);
// console.timeEnd('your code took')

let submenu = document.querySelector('.submenu');
let show = document.querySelector('.container');

let i = 0;

submenu.addEventListener('click', function () {


    if (!i) {

        show.classList.add('show');
        submenu.classList.add('hamberger');
        i = 1;
    }

    else {

        show.classList.remove('show');
        submenu.classList.remove('hamberger');
        i = 0;
    }
})
