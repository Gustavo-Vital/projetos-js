document.getElementById('calcular').addEventListener('click', calcularIMC);

function calcularIMC() {
    const nome = document.getElementById('nome').value.trim();
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    if (!nome || altura <= 0 || peso <= 0) {
        resultado.textContent = 'Preencha todos os campos corretamente! Altura e peso devem ser maiores que zero.';
        return;
    }

    const valorIMC = (peso / (altura ** 2)).toFixed(1);
    let classificacao = '';

    if (valorIMC < 16) {
        classificacao = 'magreza grave';
    } else if (valorIMC < 17) {
        classificacao = 'magreza moderada'; 
    } else if (valorIMC < 18.5) {
        classificacao = 'magreza leve';
    } else if (valorIMC < 25) {
        classificacao = 'peso ideal';
    } else if (valorIMC < 30) {
        classificacao = 'sobrepeso';
    } else {
        classificacao = 'obesidade';
    }

    resultado.textContent = `Oi, ${nome}! O seu IMC é ${valorIMC}, o que significa que você está na categoria de ${classificacao}. É sempre bom lembrar que o IMC é apenas uma referência. Consulte um profissional de saúde para mais informações!`;

}
