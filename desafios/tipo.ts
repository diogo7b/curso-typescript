let funcionario: {
    nome: string[],
    batePonto: (hora: number) => string
} = {
    nome: ["Carlos", "Diogo", "Laura"],
    batePonto: (horario:number):string => {
        let resultado: string = ""
        if (horario <= 8) {
            resultado = "Está dentro do horário"
        } else if (horario > 8) {
            resultado = "Fora do horário"
        }
        return resultado
    }
}