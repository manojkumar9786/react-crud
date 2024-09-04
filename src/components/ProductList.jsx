import React from 'react';

const ProductList = ({ products, deleteProduct, setEditingProduct }) => (
  <div>
    {products.length === 0 ? (
      <p className="text-center">No products available.</p>
    ) : (
      <ul className="divide-y divide-gray-200">
        {products.map((product) => (
          <li key={product.id} className="p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">{product.productName}</h3>
              <p>Price: {product.price} (Old Price: {product.oldPrice})</p>
              <p>Category: {product.category}</p>
              <p>{product.isActive ? 'Active' : 'Inactive'}</p>
              <p>{product.description}</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setEditingProduct(product)}
                className="bg-yellow-500 text-white py-1 px-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteProduct(product.id)}
                className="bg-red-500 text-white py-1 px-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ProductList;
