'use strict'
{
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    const modal = document.getElementById('modal');

    // function changeModal(showModal) {
    //     if (showModal) {
    //       modal.classList.add('show-modal')
    //     } else {
    //       modal.classList.remove('show-modal')
    //     }
    // }

    // // クリックしたらModalを表示する処理
    // openBtn.addEventListener('click', function () { changeModal(true)})

    // // クリックしたらModalを削除する処理
    // closeBtn.addEventListener('click', function () { changeModal(false)})
    
    let targets = document.getElementsByClassName('modal-btn');
    for(let i = 0; i < targets.length; i++) {
        targets[i].addEventListener('click', function () {modal.classList.toggle('show-modal')})
    }



}
