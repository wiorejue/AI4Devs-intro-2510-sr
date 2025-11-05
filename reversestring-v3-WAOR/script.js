function invertirTexto() {
    const input = document.getElementById('inputText').value;
    const resultado = document.getElementById('resultado');
    
    if (input.trim() === '') {
        resultado.textContent = 'Por favor, ingresa algún texto primero.';
        resultado.className = 'result empty';
        return;
    }
    
    // Método 1: Usando split, reverse y join
    const textoInvertido = input.split('').reverse().join('');
    
    resultado.textContent = textoInvertido;
    resultado.className = 'result';
}

function limpiar() {
    document.getElementById('inputText').value = '';
    const resultado = document.getElementById('resultado');
    resultado.textContent = 'El texto invertido aparecerá aquí...';
    resultado.className = 'result empty';
}

// Invertir texto en tiempo real y mostrar/ocultar botones
document.getElementById('inputText').addEventListener('input', function(e) {
    const buttonGroup = document.querySelector('.button-group');
    const texto = e.target.value;
    const resultado = document.getElementById('resultado');
    
    if (texto.length > 3) {
        buttonGroup.classList.add('visible');
        // Invertir en tiempo real
        const textoInvertido = texto.split('').reverse().join('');
        resultado.textContent = textoInvertido;
        resultado.className = 'result';
    } else {
        buttonGroup.classList.remove('visible');
        resultado.textContent = 'El texto invertido aparecerá aquí... (mínimo 4 caracteres)';
        resultado.className = 'result empty';
    }
});

// Permitir invertir con Enter (Ctrl+Enter en textarea)
document.getElementById('inputText').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.ctrlKey) {
        e.preventDefault();
        invertirTexto();
    }
});
