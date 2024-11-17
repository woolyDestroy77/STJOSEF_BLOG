export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Check if required fields are missing
    if (!username || !email || !password) {
      return next({ statusCode: 400, message: 'All fields are required' });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next({ statusCode: 400, message: 'User with this email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save user to MongoDB
    const savedUser = await newUser.save();
    console.log('User saved to MongoDB:', savedUser); // Debug log

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error during signup:', error); // Debug error
    next(error);
  }
};