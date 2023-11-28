function scrollPortfolio(direction) {
    const container = document.querySelector('.portfolio-container');
    const scrollAmount = 400; // Ajusta según sea necesario
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
