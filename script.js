const rangePower = document.getElementById('power');

rangePower.addEventListener('input', () => {
    const power = rangePower.value;
    document.getElementById('neon').style.setProperty('--power', `${power}px`);
});
