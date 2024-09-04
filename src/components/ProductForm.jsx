import React, { useState, useEffect } from 'react';

const initialProductState = {
  productName: '',
  price: '',
  oldPrice: '',
  category: '',
  isActive: false,
  description: '',
};

const ProductForm = ({ addProduct, updateProduct, editingProduct, setEditingProduct }) => {
  const [product, setProduct] = useState(initialProductState);

  useEffect(() => {
    if (editingProduct) {
      setProduct(editingProduct);
    } else {
      setProduct(initialProductState);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct(product);
    } else {
      addProduct(product);
    }
    setProduct(initialProductState);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setProduct(initialProductState);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mb-5">
      <input
        type="text"
        name="productName"
        value={product.productName}
        onChange={handleChange}
        placeholder="Product Name"
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        name="oldPrice"
        value={product.oldPrice}
        onChange={handleChange}
        placeholder="Old Price"
        className="p-2 border border-gray-300 rounded"
      />
      <select
        name="category"
        value={product.category}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
        required
      >
        <option value="">Select Category</option>
        <option value="Vegetables">Vegetables</option>
        <option value="fruits & Nuts">Fruits & Nuts</option>
        <option value="Dairy & Creams">Dairy & Creams</option>
        <option value="Packages Food">Packages Food</option>
        <option value="Staples">Staples</option>
      </select>
      <label className="flex items-center">
        <input
          type="checkbox"
          name="isActive"
          checked={product.isActive}
          onChange={handleChange}
          className="mr-2"
        />
        Active
      </label>
      <textarea
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Description"
        className="p-2 border border-gray-300 rounded"
        rows="3"
      />
      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          {editingProduct ? 'Update' : 'Add'} Product
        </button>
        {editingProduct && (
          <button
            type="button"
            onClick={handleCancelEdit}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;
