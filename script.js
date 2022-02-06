function calcular() {
    let altura = document.getElementById('txtaltura')
    let peso = document.getElementById('txtpeso')
    let resultado = document.getElementById('res')
    let imc = parseFloat(peso.value / (altura.value * altura.value)).toFixed(1)
    if (altura.value.length == 0 || peso.value.length == 0 ) {
        alert('[ERRO] Preencha os dados!')
        resultado.innerHTML = `Sem dados! impossivel calcular IMC`
  
    } else {
        if (imc <= 18.5) {
            resultado.innerHTML = `IMC Igual a: ${imc} são consideradas como abaixo do peso ideal.`
        } else {
            if (imc <= 24.9) {
                resultado.innerHTML = `IMC Igual a: ${imc} são consideradas como peso ideal.`   
            } else {
                if (imc <= 29.9) {
                   resultado.innerHTML = `IMC Igual a: ${imc} são consideradas como sobrepeso` 
                } else {
                    if (imc <= 34.9) {
                        resultado.innerHTML = `IMC Igual a: ${imc} são consideradas como obesidade grau I`
                    } else {
                        if (imc <= 39.9) {
                            resultado.innerHTML = `IMC Igual a: ${imc} são consideradas como obesidade grau II`
                        } else {
                            if (imc > 40) {
                                resultado.innerHTML = `IMC Igual a: ${imc} são consideradas como obesidade grau III mórbida`
                            }
                        }
                    }
                }
            }
        }
    }
        
    
               
} 

