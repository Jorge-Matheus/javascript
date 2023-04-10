// Definindo uma classe "Pessoa"
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    // Método da classe "Pessoa"
    saudacao() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  // Instanciando um objeto da classe "Pessoa"
  const pessoa1 = new Pessoa("Matheus", 22);
  
  // Chamando o método "saudacao" do objeto
  pessoa1.saudacao();


class AlturaPeso {
    constructor(altura, peso) {
        this.altura = altura
        this.peso = peso
    }


    altpeso() {
        console.log(`E tenho ${this.altura} de altura, e ${this.peso} de Peso!`)
    }

}


const peso2 = new AlturaPeso(1.75, 80.2)
peso2.altpeso()









