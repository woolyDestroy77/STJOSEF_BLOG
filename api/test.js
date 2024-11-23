import bcrypt from 'bcryptjs';

const password = '(*You$$ef&2009)';  // The plain password you're testing
const hashedPassword = '$2a$10$D8flgVGrReQJ6XlQOeE6J.eApxo9Wor7c8hP0EHeR16g2b/tvuGYe';  // Replace with the hash you saved in MongoDB

bcrypt.compare(password, hashedPassword, (err, result) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Password match:', result);  // Should print true if passwords match
  }
});
