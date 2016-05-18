app
    .factory('Gems', function () {
        return [
            {
                name: 'Dodecahedron',
                price: 2.95,
                description: '. . .',
                canPurchase: true,
                soldOut: false
            },
            {
                name: 'Pentagonal Gem',
                price: 5.95,
                description: '. . .',
                canPurchase: false,
                soldOut: false
            },
            {
                name: 'Famous Gem',
                price: 99.95,
                description: '. . .',
                canPurchase: true,
                soldOut: true
            }
        ] 
    })