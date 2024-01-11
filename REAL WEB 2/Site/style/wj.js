const videos = document.querySelectorAll('video');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
});

videos.forEach(video => {
    observer.observe(video);
});


