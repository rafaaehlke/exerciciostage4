
 let usuario = prompt("Digite o seu nome")
   alert(`
   Olá ${usuario}, hoje faremos a Soma - Subtração - Multiplicação - Divisão
   e o Resto da Divisão de 2 numeros`)

  let numberOne = Number(prompt(`Digite o PRIMEIRO número`))
  let numberTwo = Number(prompt(`Digite o SEGUNDO número`))

  
  const soma = (numberOne + numberTwo)
  const sub = (numberOne - numberTwo)
  const mult = (numberOne * numberTwo)
  const division = (numberOne / numberTwo)
  const restDiv = (numberOne % numberTwo)

  // let parImpar

  // if(soma % 2 == 0) {
  //   parImpar = 'Par'
  // } else {
  //   parImpar = 'Impar'
  // }

  const parImpar = soma % 2 == 0 ? "Par" : "Impar"
  const iguais = numberOne == numberTwo ? "São iguais" : "Não são iguais"

  alert(`
    A soma dos dois números ${soma}
    A subtração dos dois números ${sub}
    A multiplicação dos dois números ${mult}
    A divisão dos dois números ${division}
    O resto da divisão dos dois números ${restDiv}
    A soma do valor é, iMPAR ou Par: ${parImpar}
    Os dois numeros sao iguais? ${iguais}
  `)

