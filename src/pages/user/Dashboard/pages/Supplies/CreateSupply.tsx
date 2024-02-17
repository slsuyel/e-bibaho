import React, { ChangeEvent, useState } from "react";

// Define a type for supply post data
interface SupplyPost {
  image: File | null;
  category: string;
  title: string;
  quantity: number;
  description: string;
}

const CreateSupply = () => {
  const [formData, setFormData] = useState<SupplyPost>({
    image: null,
    category: "",
    title: "",
    quantity: 0,
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      image: file || null,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend, etc.
    console.log(formData); // Just logging for demonstration
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group ">
          <label className="d-block">Image:</label>
          <input
            type="file"
            className="bg-white border form-control-file p-1 rounded w-100"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateSupply;
