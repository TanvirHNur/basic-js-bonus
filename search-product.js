const products = [
    {name: 'samsung s4 phone', price: 15000},
    {name: 'asus d4 laptop', price: 25000},
    {name: 'samsung dig watch', price: 1500},
    {name: 'apple smart dox', price: 65000},
    {name: 'lg smart phone', price: 35000},
    {name: 'best seller', price: 5000},
    {name: 'mi 12 phone', price: 45000},
    {name: 'mi 12 laptop', price: 45000},
    {name: 'hp laptop', price: 45000},
]
function searchProducts (products, searchText){
    const matched = [];
    for (const product of products){
        let name = product.name;
        if(name.indexOf(searchText) != -1){
            matched.push(product)
        }
    }
    return matched;
}

const matched = searchProducts(products, 'phone');
console.log(matched)