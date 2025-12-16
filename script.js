function factorial() {
    let n = document.getElementById("factNum").value;
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    document.getElementById("factResult").innerText = "Factorial = " + fact;
}
function palindrome() {
    let num = document.getElementById("palNum").value;
    let rev = num.split("").reverse().join("");

    if (num === rev)
        document.getElementById("palResult").innerText = "Palindrome Number";
    else
        document.getElementById("palResult").innerText = "Not a Palindrome";
}
function fibonacci() {
    let n = document.getElementById("fibNum").value;
    let a = 0, b = 1, series = "";

    for (let i = 0; i < n; i++) {
        series += a + " ";
        let c = a + b;
        a = b;
        b = c;
    }
    document.getElementById("fibResult").innerText = series;
}
