// const collapseIcon = document.querySelector('.collapse-icon');
// const cardBody = document.querySelector('.card-body');
// const contentCard = document.querySelector('.content-card');
//
// contentCard.addEventListener('click', () => {
//     cardBody.style.display = cardBody.style.display === 'none' ? 'block' : 'none';
//     collapseIcon.classList.toggle('rotated');
// });

const contentCards = document.querySelectorAll('.content-card');

contentCards.forEach(contentCard => {
    // const contentCard = document.querySelector('.content-card');
    const body = contentCard.querySelector('.card-body');
    const label = contentCard.querySelector('.label');
    const collapseIcon = contentCard.querySelector('.collapse-icon');
    const header = contentCard.querySelector('.card-header');
    const description = contentCard.querySelector('.description');
    const transactionDetails = contentCard.querySelector('.account-details');

    header.addEventListener('click', () => {
        body.classList.toggle('hidden');
        collapseIcon.classList.toggle('rotate');
        label.classList.toggle('transparent-text');
    });
    if (description){
        description.addEventListener('click', () => {
            body.classList.toggle('hidden');
            collapseIcon.classList.toggle('rotate');
            label.classList.toggle('transparent-text');
        });
    }

    transactionDetails.addEventListener('click', () => {
        body.classList.toggle('hidden');
        collapseIcon.classList.toggle('rotate');
        label.classList.toggle('transparent-text');
    });
});



