function displayFactors(no) {
    var count = 1;
    for (count = 1; count <= no / 2; count++) {
        if (no % count == 0) {
            console.log(count);
        }
        console.log("count " + count);
    }
}
displayFactors(28);
