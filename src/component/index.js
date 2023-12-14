import React, { useState } from 'react';
import * as math from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleKeyPress = (event) => {
    if (
      (event.key >= '0' && event.key <= '9') ||
      ['+', '-', '*', '/'].includes(event.key)
    ) {
      setInput((prevInput) => prevInput + event.key);
    } else if (event.key === 'Enter') {
      solve();
    }
  };
console.log(handleKeyPress);
  const handleButtonClick = (val) => {
    setInput((prevInput) => prevInput + val);
  };

  const solve = () => {
    try {
      const result = math.evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };
  const clearInput = () => {
    setInput('');
  };

  return (
    <div style={{ height: '100vh', width: '100%', backgroundColor: 'rgb(96, 89, 89)' }}>
      <table
        style={{
          border: '1px solid black',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '30%',
          width: 'inherit',
          backgroundColor: 'black',
        }}
      >
        <tbody>
          <tr>
            <td colSpan="4">
              <input
                type="text"
                value={input}
                readOnly
                style={{
                  padding: '20px 30px',
                  fontSize: '24px',
                  fontWeight: 'bold',
                 
                  borderRadius: '5px',
                  border: '2px solid black',
                  width: '100%',
                }}
              />
            </td>
          </tr>
          <tr>
            {[7, 8, 9, '/'].map((val) => (
              <td key={val}>
                <input
                  type="button"
                  value={val}
                  onClick={() => handleButtonClick(val)}
                  style={{
                    width: '100%',
                    padding: '20px 40px',
                    backgroundColor: 'rgb(132, 191, 132)',
                    color: 'rgba(255, 255, 255, 0.901)',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '5px',
                  }}
                />
              </td>
            ))}
          </tr>
          <tr>
            {[4, 5, 6, '*'].map((val) => (
              <td key={val}>
                <input
                  type="button"
                  value={val}
                  onClick={() => handleButtonClick(val)}
                  style={{
                    width: '100%',
                    padding: '20px 40px',
                    backgroundColor: 'rgb(132, 191, 132)',
                    color: 'rgba(255, 255, 255, 0.901)',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '5px',
                  }}
                />
              </td>
            ))}
          </tr>
          <tr>
            {[1, 2, 3, '-'].map((val) => (
              <td key={val}>
                <input
                  type="button"
                  value={val}
                  onClick={() => handleButtonClick(val)}
                  style={{
                    width: '100%',
                    padding: '20px 40px',
                    backgroundColor: 'rgb(132, 191, 132)',
                    color: 'rgba(255, 255, 255, 0.901)',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '5px',
                  }}
                />
              </td>
            ))}
          </tr>
          <tr>
            <td>
              <input
                type="button"
                value="C"
                onClick={clearInput}
                style={{
                  width: '100%',
                  padding: '20px 40px',
                  backgroundColor: 'rgb(132, 191, 132)',
                  color: 'rgba(255, 255, 255, 0.901)',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '5px',
                }}
              />
            </td>
            <td>
              <input
                type="button"
                value="0"
                onClick={() => handleButtonClick('0')}
                style={{
                  width: '100%',
                  padding: '20px 40px',
                  backgroundColor: 'rgb(132, 191, 132)',
                  color: 'rgba(255, 255, 255, 0.901)',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '5px',
                }}
              />
            </td>
            <td>
              <input
                type="button"
                value="."
                onClick={() => handleButtonClick('.')}
                style={{
                  width: '100%',
                  padding: '20px 40px',
                  backgroundColor: 'rgb(132, 191, 132)',
                  color: 'rgba(255, 255, 255, 0.901)',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '5px',
                }}
              />
            </td>
            <td>
              <input
                type="button"
                value="="
                onClick={solve}
                style={{
                  width: '100%',
                  padding: '20px 40px',
                  backgroundColor: 'rgb(132, 191, 132)',
                  color: 'rgba(255, 255, 255, 0.901)',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '5px',
                }}
              />
            </td>
            <td>
              <input
                type="button"
                value="+"
                onClick={() => handleButtonClick('+')}
                style={{
                  width: '100%',
                  padding: '20px 40px',
                  backgroundColor: 'rgb(132, 191, 132)',
                  color: 'rgba(255, 255, 255, 0.901)',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '5px',
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
