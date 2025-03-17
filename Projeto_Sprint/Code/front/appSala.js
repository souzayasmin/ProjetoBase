const pagina_atual = window.location.pathname.split("/").pop();

// Esses if's permitem que este arquivo JS rode apenas o "addEventListener" necessário para a página em que o usuário estiver.
if (pagina_atual === "blocoA.html") {
  document.addEventListener("DOMContentLoaded", getBlocoA);
} else if (pagina_atual === "blocoB.html") {
  document.addEventListener("DOMContentLoaded", getBlocoB);
} else if (pagina_atual === "blocoC.html") {
  document.addEventListener("DOMContentLoaded", getBlocoC);
} else if (pagina_atual === "blocoD.html") {
  document.addEventListener("DOMContentLoaded", getBlocoD);
}

function getBlocoA() {
  fetch("http://10.89.240.86:5000/api/v1/blocoA", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((err) => {
        throw new Error(err.error);
      });
    })
    .then((data) => {
      const salaList = document.getElementById("sala-list-tabela");
      salaList.innerHTML = ""; // Limpa a lista antes de adicionar novos itens

      // Verifica se há salas retornadas e as adiciona à tabela
      data.salas.forEach((sala) => {
        // Cria uma nova linha
        const tr = document.createElement("tr");

        // Cria células para horários disponíveis, classificação e bloco
        const tdhorarios_disponiveis = document.createElement("td");
        tdhorarios_disponiveis.textContent = sala.horarios_disponiveis;
        tr.appendChild(tdhorarios_disponiveis);

        const tdclassificacao = document.createElement("td");
        tdclassificacao.textContent = sala.classificacao;
        tr.appendChild(tdclassificacao);

        const tdbloco = document.createElement("td");
        tdbloco.textContent = sala.bloco;
        tr.appendChild(tdbloco);

        // Adiciona a linha à tabela
        salaList.appendChild(tr);
      });
    })
    .catch((error) => {
      alert("Erro ao obter a lista das salas: " + error.message);
      console.error("Erro: ", error.message);
    });
}

function getBlocoB() {
  fetch("http://10.89.240.86:5000/api/v1/blocoB", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((err) => {
        throw new Error(err.error);
      });
    })
    .then((data) => {
      const salaList = document.getElementById("sala-list-tabela");
      salaList.innerHTML = ""; // Limpa a lista antes de adicionar novos itens

      // Verifica se há salas retornadas e as adiciona à tabela
      data.salas.forEach((sala) => {
        // Cria uma nova linha
        const tr = document.createElement("tr");

        // Cria células para horários disponíveis, classificação e bloco
        const tdhorarios_disponiveis = document.createElement("td");
        tdhorarios_disponiveis.textContent = sala.horarios_disponiveis;
        tr.appendChild(tdhorarios_disponiveis);

        const tdclassificacao = document.createElement("td");
        tdclassificacao.textContent = sala.classificacao;
        tr.appendChild(tdclassificacao);

        const tdbloco = document.createElement("td");
        tdbloco.textContent = sala.bloco;
        tr.appendChild(tdbloco);

        // Adiciona a linha à tabela
        salaList.appendChild(tr);
      });
    })
    .catch((error) => {
      alert("Erro ao obter a lista das salas: " + error.message);
      console.error("Erro: ", error.message);
    });
}

function getBlocoC() {
  fetch("http://10.89.240.86:5000/api/v1/blocoC", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((err) => {
        throw new Error(err.error);
      });
    })
    .then((data) => {
      const salaList = document.getElementById("sala-list-tabela");
      salaList.innerHTML = ""; // Limpa a lista antes de adicionar novos itens

      // Verifica se há salas retornadas e as adiciona à tabela
      data.salas.forEach((sala) => {
        // Cria uma nova linha
        const tr = document.createElement("tr");

        // Cria células para horários disponíveis, classificação e bloco
        const tdhorarios_disponiveis = document.createElement("td");
        tdhorarios_disponiveis.textContent = sala.horarios_disponiveis;
        tr.appendChild(tdhorarios_disponiveis);

        const tdclassificacao = document.createElement("td");
        tdclassificacao.textContent = sala.classificacao;
        tr.appendChild(tdclassificacao);

        const tdbloco = document.createElement("td");
        tdbloco.textContent = sala.bloco;
        tr.appendChild(tdbloco);

        // Adiciona a linha à tabela
        salaList.appendChild(tr);
      });
    })
    .catch((error) => {
      alert("Erro ao obter a lista das salas: " + error.message);
      console.error("Erro: ", error.message);
    });
}

function getBlocoD() {
  fetch("http://10.89.240.86:5000/api/v1/blocoD", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.json().then((err) => {
        throw new Error(err.error);
      });
    })
    .then((data) => {
      const salaList = document.getElementById("sala-list-tabela");
      salaList.innerHTML = ""; // Limpa a lista antes de adicionar novos itens

      // Verifica se há salas retornadas e as adiciona à tabela
      data.salas.forEach((sala) => {
        // Cria uma nova linha
        const tr = document.createElement("tr");

        // Cria células para horários disponíveis, classificação e bloco
        const tdhorarios_disponiveis = document.createElement("td");
        tdhorarios_disponiveis.textContent = sala.horarios_disponiveis;
        tr.appendChild(tdhorarios_disponiveis);

        const tdclassificacao = document.createElement("td");
        tdclassificacao.textContent = sala.classificacao;
        tr.appendChild(tdclassificacao);

        const tdbloco = document.createElement("td");
        tdbloco.textContent = sala.bloco;
        tr.appendChild(tdbloco);

        // Adiciona a linha à tabela
        salaList.appendChild(tr);
      });
    })
    .catch((error) => {
      alert("Erro ao obter a lista das salas: " + error.message);
      console.error("Erro: ", error.message);
    });
}
