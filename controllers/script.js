var purchaseDate = parseInt(table.rows[row].cells[2].innerHTML);
var purchaseValue = parseInt(table.rows[row].cells[3].innerHTML);
var disposalDate = parseInt(table.rows[row].cells[4].innerHTML);
var residualValue = parseInt(table.rows[row].cells[5].innerHTML);
var estimatedLife = purchaseDate - disposalDate;

function calculateDepreciation(purchaseDate, purchaseValue, estimatedLife) {

}