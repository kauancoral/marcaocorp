function adicionarTarefa() {
    let input = document.getElementById("tarefa");
    let lista = document.getElementById("lista");
    if (input.value === "") {
        alert("Digite uma tarefa!");
        return;
    }
    let li = document.createElement("li");
    li.textContent = input.value;
    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };
    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.style.marginLeft = "10px";
    botaoRemover.style.color = "red";
    botaoRemover.onclick = function (e) {
        e.stopPropagation();
        lista.removeChild(li);
        atualizarContagem();
    };
    li.appendChild(botaoRemover);
    lista.appendChild(li);
    input.value = "";
    atualizarContagem();
}

function atualizarContagem() {
    let lista = document.getElementById("lista");
    let contagem = lista.getElementsByTagName("li").length;
    document.getElementById("contagem").textContent = "Tarefas: " + contagem;
}