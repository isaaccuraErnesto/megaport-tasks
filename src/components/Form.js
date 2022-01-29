import React, { useState } from 'react';
import TableData from './Table/TableData';

const Form = () => {
  const [orderDetails, setOrderDetails] = useState({});

  const productNames = [
    ...new Set(
      TableData.map((element) => {
        return element.name;
      })
    ),
  ];

  const toppingNames = [
    ...new Set(
      TableData.map((element) => {
        return element.topping;
      })
    ),
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleNameSelection = (e) => {
  //   e.preventDefault();
  //   setOrderDetails({ ...orderDetails, name: e.target.value });
  // };

  // const handleToppingSelection = (e) => {
  //   e.preventDefault();
  //   setOrderDetails({ ...orderDetails, topping: e.target.value });
  // };

  // const handleAmountSelection = (e) => {
  //   e.preventDefault();
  //   setOrderDetails({ ...orderDetails, amount: e.target.value });
  // };

  return (
    <form id='form' className='form'>
      <label htmlFor='form' id='form-title'>
        Place an order
      </label>
      <div className='order-container'>
        <input
          type='text'
          name='user'
          id='user-name'
          className='form-text-input'
          placeholder='Jane Doe'
          onChange={handleChange}
          required
        />
      </div>
      <div className='order-container'>
        <input
          list='sweet-names'
          name='name'
          id='name-list'
          className='dropdown-list'
          placeholder='Cake'
          onChange={handleChange}
          required
        />
        <datalist id='sweet-names'>
          {productNames.map((name, index) => {
            return <option value={name} key={index} />;
          })}
        </datalist>
      </div>
      <div
        className={
          productNames.includes(orderDetails.name)
            ? 'order-container'
            : 'hidden'
        }
      >
        <input
          list='topping-options'
          name='topping'
          id='topping-list'
          className='dropdown-list'
          placeholder='Chocolate Maple'
          onChange={handleChange}
          required
        />
        <datalist id='topping-options'>
          {TableData.filter((product) => {
            return product.name === orderDetails.name;
          }).map((target, key) => {
            return <option value={target.topping} key={key} />;
          })}
        </datalist>
      </div>
      <div
        className={
          productNames.includes(orderDetails.name) &&
          toppingNames.includes(orderDetails.topping)
            ? 'order-container'
            : 'hidden'
        }
      >
        <input
          type='number'
          name='amount'
          id='amount-to-bake'
          placeholder='17'
          onChange={handleChange}
          required
        />
      </div>
      <div
        className={
          productNames.includes(orderDetails.name) &&
          toppingNames.includes(orderDetails.topping) &&
          orderDetails.amount > 0
            ? 'order-container'
            : 'hidden'
        }
      >
        <input
          type='submit'
          name='submit'
          id='submit'
          className='form-button'
          value='CONFIRM'
        />
      </div>
    </form>
  );
};

export default Form;
