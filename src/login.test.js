const { generateText } = require('./login.util.js');

test('Generar usuario y contraseña', () => {
    const text = generateText('diahna_ayala', 'Hey$_123#');
    expect(text).toBe('diahna_ayala Hey$_123#');
});