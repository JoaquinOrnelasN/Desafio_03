class ProductManager{
    constructor(){
        this.products = []
    }

    getProducts = () => {
        return this.products
    }
   
    getProductById = (productId) => {
        const productFound = this.products.find(element => element.id === productId)
        if (productFound == undefined) {
            return "Not found"
        } else {
            return productFound
        }
    }

    getNextID = () => {
        const count = this.products.length

        if (count == 0) return 1
            const lastProduct = this.products[count-1]
            const lastID = lastProduct.id 
            const nextID = lastID + 1
            return nextID             
    }

    idCode = () => {
        const codigo = Math.floor(Math.random(1) * 100)
        const copiCode = this.products.some(item => item.code === codigo)
        if(copiCode === true){
            return "ERROR"
        }
        return codigo
    }

    addProduct = (title, description, price, thumbnail, stock) => {
        const id = this.getNextID()
        const code = this.idCode()
        const products = {            
            id,
            title,            
            description,
            price,
            thumbnail,
            stock: stock ?? 30,
            code            
        }

        this.products.push(products)
    }
}   

const manager = new ProductManager()
manager.addProduct("Playera", "Color rojo", 450, "img", null, 30)
manager.addProduct("Gorra", "Color azul", 300, "img", null, 30)
manager.addProduct("Camisa", "Líneas grises", 500, "img", null, 30)
manager.addProduct("Zapatos", "Color negro", 950, "img", null, 30)

// Muestra todos los productos
console.log(manager.getProducts());

// Muestra el producto por ID
console.log(manager.getProductById(4));

// Muestra "Not found" cuando el ID no existe
console.log(manager.getProductById(5));