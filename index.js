const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const FULL_NAME = 'john_doe';  
const DOB = '17091999';            
const EMAIL = 'john@xyz.com';
const ROLL_NUMBER = 'ABCD123';   

function isAlphabet(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function isNumber(str) {
  return /^[0-9]+$/.test(str);
}

function isSpecialChar(str) {
  return !isAlphabet(str) && !isNumber(str);
}

function alternateCapsReverseConcat(strArr) {
  const reversed = strArr.join('').split('').reverse();
  return reversed.map((ch, idx) =>
    idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
  ).join('');
}

app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: 'Invalid input. "data" should be an array.'
      });
    }

    let evenNumbers = [];
    let oddNumbers = [];
    let alphabets = [];
    let specialCharacters = [];
    let sum = 0;
    let alphaConcatSource = [];

    data.forEach(item => {
      const value = String(item); 

      if (isNumber(value)) {
        if (parseInt(value) % 2 === 0) {
          evenNumbers.push(value);
        } else {
          oddNumbers.push(value);
        }
        sum += parseInt(value);
      } else if (isAlphabet(value)) {
        alphabets.push(value.toUpperCase());
        alphaConcatSource.push(value);
      } 
      else if (isSpecialChar(value)) 
        {
            specialCharacters.push(value);
        }
    });

    const response = {
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets,
      special_characters: specialCharacters,
      sum: sum.toString(),
      concat_string: alternateCapsReverseConcat(alphaConcatSource)
    };

    return res.status(200).json(response);
  } catch (err) {
    console.error('Error processing /bfhl:', err.message);
    return res.status(500).json({
      is_success: false,
      message: 'Internal Server Error'
    });
  }
});

app.get('/', (req, res) => {
  res.send('BFHL API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
