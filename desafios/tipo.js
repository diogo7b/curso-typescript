"use strict";
let funcionario = {
    nome: ["Carlos", "Diogo", "Laura"],
    batePonto: (horario) => {
        let resultado = "";
        if (horario <= 8) {
            resultado = "Está dentro do horário";
        }
        else if (horario > 8) {
            resultado = "Fora do horário";
        }
        return resultado;
    }
};
