// Import mongoose
const mongoose = require('mongoose');

// MongoDB connection URI (Replace <DB_NAME> with your database name)
const mongoURI = 'mongodb://localhost:27017/testdb';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

// Define a Mongoose schema for a collection
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Define a model based on the schema
const User = mongoose.model('User', userSchema);

// CREATE: Add a new user to the database
async function createUser(name, email, age) {
    const user = new User({ name, email, age });
    await user.save();
    console.log('User created:', user);
}

// READ: Fetch all users from the database
async function getUsers() {
    const users = await User.find();
    console.log('All users:', users);
}

// READ: Fetch a single user by ID
async function getUserById(userId) {
    const user = await User.findById(userId);
    if (user) {
        console.log('User found:', user);
    } else {
        console.log('User not found');
    }
}

// UPDATE: Update a user's information by ID
async function updateUser(userId, updatedData) {
    const user = await User.findByIdAndUpdate(userId, updatedData, { new: true });
    if (user) {
        console.log('User updated:', user);
    } else {
        console.log('User not found');
    }
}

// DELETE: Remove a user by ID
async function deleteUser(userId) {
    const user = await User.findByIdAndDelete(userId);
    if (user) {
        console.log('User deleted:', user);
    } else {
        console.log('User not found');
    }
}

// Example usage of CRUD functions
async function runCrudOperations() {
    // Create a new user
    await createUser('Alice', 'alice@example.com', 25);

    // Get all users
    await getUsers();

    // Fetch a user by ID (replace 'YOUR_USER_ID' with an actual ID after running createUser)
    // await getUserById('YOUR_USER_ID');

    // Update a user (replace 'YOUR_USER_ID' with an actual ID)
    // await updateUser('YOUR_USER_ID', { age: 26 });

    // Delete a user (replace 'YOUR_USER_ID' with an actual ID)
    // await deleteUser('YOUR_USER_ID');
}

// Run the CRUD operations
runCrudOperations().catch(console.error);
