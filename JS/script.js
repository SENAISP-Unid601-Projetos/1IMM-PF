// Quando o usuário rolar a página 20px para baixo, o botão aparecerá
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnTop").style.display = "block";
    } else {
        document.getElementById("btnTop").style.display = "none";
    }
}

// Função para voltar ao topo quando o botão for clicado
function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}
// Selecionando os elementos
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Adicionando o evento de clique para alternar o menu
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show'); // Alterna a classe 'show' para mostrar/ocultar o menu
  menuToggle.classList.toggle('active'); // Adiciona/Remove a classe 'active' para animar o ícone
});