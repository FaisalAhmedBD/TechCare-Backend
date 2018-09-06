var { productSchema,mongoose } = require('./schema');
var productModel = mongoose.model('product', productSchema);

module.exports = {
    productModel
}
