const product = require('../model/productmodel');

// CREATE PRODUCT
exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, discountPercentage } = req.body;

        const newProduct = new product({
            name,
            description,
            price,
            discountPercentage,
            // Automatically fixes windows backslashes to standard URL forward-slashes
            image: req.file ? req.file.path.replace(/\\/g, '/') : null
        });

        await newProduct.save();
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating product', error: error.message });
    }
};

// GET ALL PRODUCTS
exports.getProducts = async (req, res) => {
    try {
        const products = await product.find();
        res.status(200).json(products);
    }   
    catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
};

// GET SINGLE PRODUCT BY ID
exports.getProductById = async (req, res) => {
    try {
        // Matches /:productId in your router file
        const { productId } = req.params; 
        
        // Fixed: Use findById to look up Mongoose documents directly via ID string
        const productData = await product.findById(productId);
        
        if (!productData) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(productData);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
};

// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const { name, description, price, discountPercentage } = req.body;
        
        // Handle image updates if a new image file is uploaded
        let updatedData = { name, description, price, discountPercentage };
        if (req.file) {
            updatedData.image = req.file.path.replace(/\\/g, '/');
        }

        // Fixed: Find matching documents using standard database primary key '_id'
        const updatedProduct = await product.findByIdAndUpdate(
            productId,
            updatedData,
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating product', error: error.message });
    }
};

// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        
        // Fixed: Targeting Mongoose standard indexing identification tag
        const deletedProduct = await product.findByIdAndDelete(productId);
        
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
};