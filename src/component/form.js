import React, { useState } from 'react';

const FormTable = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    pincode: '',
    age: '',
    food: [],
    state: '',
    country: '',
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (checked ? [...prevData.food, value] : prevData.food.filter(food => food !== value)) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if at least two food options are selected
    if (formData.food.length < 2) {
      alert('Please select at least two food options.');
      return;
    }

    setTableData((prevTableData) => [
      ...prevTableData,
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        pincode: formData.pincode,
        age: formData.age,
        food: formData.food.join(', '),
        state: formData.state,
        country: formData.country,
      },
    ]);

    setFormData({
      firstName: '',
      lastName: '',
      pincode: '',
      age: '',
      food: [],
      state: '',
      country: '',
    });
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Form</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required /><br /><br />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required /><br /><br />

        <label htmlFor="pincode">Pincode:</label>
        <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} required /><br /><br />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required /><br /><br />

        <label htmlFor="food">Choice of Food (Select 2 out of 5 options):</label><br />
        <input type="checkbox" id="food1" name="food" value="Pizza" checked={formData.food.includes('Pizza')} onChange={handleChange} /> Pizza<br />
        <input type="checkbox" id="food2" name="food" value="Burger" checked={formData.food.includes('Burger')} onChange={handleChange} /> Burger<br />
        <input type="checkbox" id="food3" name="food" value="Sushi" checked={formData.food.includes('Sushi')} onChange={handleChange} /> Sushi<br />
        <input type="checkbox" id="food4" name="food" value="Salad" checked={formData.food.includes('Salad')} onChange={handleChange} /> Salad<br />
        <input type="checkbox" id="food5" name="food" value="Pasta" checked={formData.food.includes('Pasta')} onChange={handleChange} /> Pasta<br /><br />

        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required /><br /><br />

        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required /><br /><br />

        <input type="submit" value="Submit" />
      </form>

      <h2 style={{ textAlign: 'center' }}>Table</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'left', margin: '0 auto' }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Pincode</th>
            <th>Age</th>
            <th>Choice of Food</th>
            <th>State</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.pincode}</td>
              <td>{data.age}</td>
              <td>{data.food}</td>
              <td>{data.state}</td>
              <td>{data.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormTable;
