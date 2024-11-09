function verificarResposta() {
    const resposta = document.getElementById("resposta").value;
    const mensagem = document.getElementById("mensagem");

    if (resposta == "13") {  // 8 + 5 = 13
        mensagem.textContent = "Resposta correta! Você foi desbloqueado!";
        mensagem.style.color = "green";
        setTimeout(() => {
            window.location.href = "album.html";  // Redireciona para o álbum
        }, 1500);
    } else {
        mensagem.textContent = "Resposta incorreta, tente novamente!";
        mensagem.style.color = "red";
    }
}
