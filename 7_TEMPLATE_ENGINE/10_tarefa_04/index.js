const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))
const items = [
        {
            id: 1,
            name: 'Soda',
            description: 'Refreshing fizzy drink',
            price: 1.99,
        },
        {
            id: 2,
            name: 'Chips',
            description: 'Crispy and salty snack',
            price: 2.49,
        },
        {
            id: 3,
            name: 'Ice Cream',
            description: 'Creamy and delicious dessert',
            price: 3.99,
        }
    ]

app.get('/', (req, res) => {

    res.render('home', { items })
})

app.get('/product/:id', (req, res) => {
    const product = items[parseInt(req.params.id) - 1]
    
    res.render('product',{ product })
})


app.listen(3000, () => {
    console.log('Server is running on door 3000')
})