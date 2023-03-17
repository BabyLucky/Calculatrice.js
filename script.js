function calcul(number)
{
    var texte;
    switch(number){
        case "0":
            texte = "0";
            break;
        case "1":
            texte = "1";
            break;
        case "2":
            texte = "2";
            break;
        case "3":
            texte = "3";
            break;
        case "4":
            texte = "4";
            break;
        case "5":
            texte = "5";
            break;
        case "6":
            texte = "6";
            break;
        case "7":
            texte = "7";
            break;
        case "8":
            texte = "8";
            break;
        case "9":
            texte = "9";
            break;
        case "ENTER":

            break;
        case "DEL":
            texte = document.getElementById('TOTAL').textContent = "";
            break;
        case "+":
            texte = " + ";
            break;
        case "-":
            texte = " - ";
            break;
        case "x":
            texte = " x ";
            break;
        case "/":
            texte = " / ";
            break;
    }
    if(texte == " + ")
    {
        var calcul = getElementById('TOTAL').textContent;
        console.log(calcul);
    }
    document.getElementById('TOTAL').textContent += texte;
}

const button = document.querySelectorAll('button');
button.forEach(item => {
    item.addEventListener('click',() => {
        let number = item.textContent;
        calcul(number);
    });
});