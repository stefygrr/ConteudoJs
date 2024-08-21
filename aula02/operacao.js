var n = 3;
n = n - 10; //n -= 10;
n = n + 5; //n += 5;
n = n / 2; // n/= 5;
n = n * 8; // n *= 8;
console.log(n);

var x = 10;
x++
x--

b = 20;
c = 60;

console.log(x);

//retorna false.
console.log(n <= x && b != c );

//retorna true - um dos lados tem que ser verdadeiro.
console.log(n <= x || b != c );

//retorna falso - inverso do resultado.
console.log(!(n <= x || b != c ));