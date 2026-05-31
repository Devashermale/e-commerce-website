const Cart = require('../model/cart');

// 1. ADD ITEM TO CART
exports.addToCart = async (req, res) => {
    try {   
        const { userId, productId, quantity } = req.body;
        
        if (!userId || !productId) {
            return res.status(400).json({ message: 'userId and productId are required' });
        }

        let userCart = await Cart.findOne({ userId });

        if (!userCart) {
            // Cart doesn't exist, create a new one
            userCart = new Cart({
                userId,
                products: [{ productId, quantity: quantity || 1 }]
            });
        } else {
            // Cart exists, check if product is already in the array
            const productIndex = userCart.products.findIndex(p => p.productId.toString() === productId);
            if (productIndex > -1) {
                // Product exists, increment quantity
                userCart.products[productIndex].quantity += (quantity || 1);
            } else {
                // Product doesn't exist, push to array
                userCart.products.push({ productId, quantity: quantity || 1 });
            }
        }

        await userCart.save();
        res.status(201).json({ message: 'Item added to cart successfully', cart: userCart });
    } catch (error) {
        res.status(500).json({ message: 'Error adding item to cart', error: error.message });
    }
};

// 2. GET CART ITEMS
exports.getCartItems = async (req, res) => {
    try {
        const { userId } = req.params;
        // .populate handles bringing in the full product details automatically
        const cartItems = await Cart.findOne({ userId }).populate('products.productId');
        
        if (!cartItems) return res.status(404).json({ message: 'Cart not found' });
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cart items', error: error.message });
    }
};

// 3. UPDATE QUANTITY OF AN ITEM IN THE CART
exports.updateCartItem = async (req, res) => {
    try {
        const { userId } = req.params; // Extracted safely from URL
        const { productId, quantity } = req.body; // Extracted safely from Body

        const updatedCart = await Cart.findOneAndUpdate(
            { userId, "products.productId": productId },
            { $set: { "products.$.quantity": quantity } },
            { returnDocument: 'after' } // Fixed deprecation warning
        );

        if (!updatedCart) return res.status(404).json({ message: 'Cart item not found' });
        res.status(200).json({ message: 'Cart item updated successfully', cart: updatedCart });
    } catch (error) {
        res.status(500).json({ message: 'Error updating cart item', error: error.message });
    }
};    
    
// 4. REMOVE AN ITEM FROM THE CART COMPLETELY
exports.removeCartItem = async (req, res) => {
    try {
        const { userId } = req.params; // Extracted safely from URL
        const { productId } = req.body; // Extracted safely from Body

        const updatedCart = await Cart.findOneAndUpdate(
            { userId },
            { $pull: { products: { productId } } },
            { returnDocument: 'after' } // Fixed deprecation warning
        );

        if (!updatedCart) return res.status(404).json({ message: 'Cart not found' });       
        res.status(200).json({ message: 'Cart item removed successfully', cart: updatedCart });
    } catch (error) {
        res.status(500).json({ message: 'Error removing cart item', error: error.message });
    }
};