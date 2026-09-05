// Alternar Tema Escuro / Claro
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeToggleBtn.textContent = 'Modo Escuro';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = 'Modo Claro';
    }
});

// Ação de Leitura
function lerArtigo(titulo) {
    alert(`Você selecionou o artigo: "${titulo}". Redirecionando...`);
}
