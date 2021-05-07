function buildRow(numOfStars) {
    var row = "";
    for (let i = 0; i < numOfStars; i++) {
        row += "*";
    }
    return row;
}
function buildSquare(dim) {
    var result = '';
    for (var i = 0; i < dim; i++) {
        result += buildRow(dim) + "\n";
    }
    return result;
}



/* prazan red */
function buildHoolwRow(dimension) {
    var row = "";
    for (var i = 0; i < dimension; i++) {
        if (i == 0 || i === dimension - 1) {
            row += "* ";
        } else {
            row += " ";
        }
    }
    return row;
}

function putTog (dimension) {
    for (var i =0; i<dimension; i++){
        shape += buildRow (dimension) + "\n";
        shape += buildHoolwRow
    }
}