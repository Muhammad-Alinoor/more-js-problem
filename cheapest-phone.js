const phones = [
    {
        'name': 'Samsung S5',
        'color': 'Black',
        'price': 25000,
        'storageGb': 64,
        'Battery(mah)': 3000,
    },
    {
        'name': 'Shaomi 3',
        'color': 'White',
        'price': 20000,
        'storageGb': 64,
        'Battery(mah)': 3000,
    }, 
    {
    'name': 'Walton primo',
    'color': 'golden',
    'price': 15001,
    'storageGb': 32,
    'Battery(mah)': 2500,
    },
    {
    'name': 'Redmi 7',
    'color': 'Black',
    'price': 17000,
    'storageGb': 64,
    'Battery(mah)': 2700,
    },
    {
        'name': 'Htc h',
        'color': 'Yellow',
        'price': 15000,
        'storageGb': 64,
        'Battery(mah)': 3000,
    }
];
let cheapestPhone = phones[0];
for(const phone of phones){
    if(phone.price < cheapestPhone.price){
        cheapestPhone = phone;
    }
}
console.log(cheapestPhone);