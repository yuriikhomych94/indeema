const baseForm = document.forms['value'];

const money = document.getElementById('money');
const price = document.getElementById('price');
const resultLabel = document.getElementById('result');
const btnCalc = document.getElementById('btn');

btnCalc.addEventListener('click', () => {
    if (money.value - price.value < 0) {
        resultLabel.innerText = 'Не достатньо коштів';
    } else if (price.value < 0.01) {
        resultLabel.innerHTML = 'Введіть коректно ціну';
    }
    else {
        const res = money.value - price.value;
        const dollars = Math.trunc(res);
        const coins = ((res % 1).toFixed(2) * 100).toFixed();
        resultLabel.innerText = moneyString(dollars, coins);
    }
    reset();
});

const moneyString = (dollars, coins) => {
    if (dollars == 0 && coins == 0) {
        return '0 dollars';
    }
    let resultText = '';
    if (dollars == 1) {
        resultText = dollars + ' dollar';
    } else if (dollars != 0) {
        resultText = dollars + ' dollars';
    }
    let coinsString = ''
    if (coins != 0) {
        if (coins == 1) {
            coinsString = coins + ' cent';
        } else {
            coinsString = coins + ' cents';
        }
    }
    if (dollars == 0) {
        return coinsString;
    } else {
        resultText = resultText + ' ' + coinsString;
    }
    return resultText;
}

const reset = () => {
    money.value = '';
    price.value = '';
};



