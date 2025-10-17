(() => {
    console.log('script is running.');

    const buttons = document.querySelectorAll('.menu-button');
    const panels = document.querySelectorAll('.tab-panel');

    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            // Remove active from all
            buttons.forEach(b => b.classList.remove('is-active'));
            panels.forEach(p => p.classList.remove('is-active'));

            // Add active to clicked
            button.classList.add('is-active');
            panels[i].classList.add('is-active');
        });
    });
})();