// src/components/Category.js
import React, { useState, useEffect } from "react";
import { getCategories, deleteCategory, createCategory } from "../api";
import "../styles/Category.css";

const Category = ({ token }) => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories(token);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, [token]);

  const handleAddCategory = async () => {
    try {
      const response = await createCategory(token, { name: newCategory });
      setCategories([...categories, response.data]);
      setNewCategory("");
    } catch (error) {
      console.error("Error adding category", error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await deleteCategory(token, id);
      setCategories(categories.filter((category) => category.id !== id));
    } catch (error) {
      console.error("Error deleting category", error);
    }
  };

  return (
    <div className="category-container">
      <div className="category-header">
        <h2>Categories</h2>
      </div>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id} className="category-item">
            {category.name}{" "}
            <button onClick={() => handleDeleteCategory(category.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="category-input">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New Category"
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>
    </div>
  );
};
export default Category;
