export const handleVideoReview = () => {
    const reviewVideo = document.querySelector('.review__video');
    const rvModal = document.querySelector('.rv__modal');
    const iconClose = document.querySelector('.rv__modal i');
    window.onclick = (e) => {
        if (e.target === rvModal || e.target === iconClose)
            rvModal.style.display = 'none';
    };

    reviewVideo.onclick = () => {
        rvModal.style.display = 'flex';
    };
};
