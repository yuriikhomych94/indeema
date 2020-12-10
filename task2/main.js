const openModalBtn = document.querySelector('#open-modal');

openModalBtn.addEventListener('click', () => {
    //Modal window
    const modal = document.createElement('div');
    modal.classList.add('modal', 'active');

    // Modal Header
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');

    const modalHeaderTitle = document.createElement('div');
    modalHeaderTitle.classList.add('title');
    modalHeaderTitle.innerHTML = 'Modal';

    const modalHeaderButton = document.createElement('button');
    modalHeaderButton.classList.add('btn-close');
    modalHeaderButton.innerHTML = 'X';

    // Modal body
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    modalBody.innerHTML = 'Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolore quos officiis corrupti quisquam';

    // Overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay', 'active');

    openModalBtn.style = 'filter: blur(1px)';

    document.body.appendChild(modal);
    document.body.appendChild(overlay);
    modal.appendChild(modalHeader);
    modal.appendChild(modalBody);
    modalHeader.appendChild(modalHeaderTitle);
    modalHeader.appendChild(modalHeaderButton);



    // Remove overlay 
    overlay.addEventListener('click', () => {
        modal.remove('modal');
        overlay.remove('overlay');
        openModalBtn.style = 'filter: blur(0)';
    })

    // Remove modal
    modalHeaderButton.addEventListener('click', () => {
        modal.remove('modal');
        overlay.remove('overlay');
        openModalBtn.style = 'filter: blur(0)';
    });
});