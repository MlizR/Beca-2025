
function addProduct() {
    const nameProduc = document.getElementById('product').value;
    const price =  document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const availability = document.getElementById('availability').value;

    const table = document.getElementById('table');
    const newRow = table.insertRow();
    
    newRow.innerHTML = `
    <td>${nameProduc}</td>
    <td>$ ${price}</td>
    <td>${description}</td>
    <td>${availability} unidades </td>
    `

    document.getElementById('form-add').reset();

console.log(nameProduc, price, description, availability);

}
