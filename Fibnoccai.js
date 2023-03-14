function fibonaccai(no) {
    var a = 0;
    var b = 1;
    var sum = 0;
    var count = 1;
    for (count = 1; sum < no; count++) {
        a = b;
        b = sum;
        sum = a + b;
        console.log(sum);
    }
}
fibonaccai(21);
