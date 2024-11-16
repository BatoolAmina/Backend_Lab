const fs = require('fs');
const filePath = 'example.txt';

// 1. Function to Create or Overwrite a File with Initial Content
function createFile() {
    const content = 'This is the initial content of the file.\n';
    
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error('Error creating file:', err.message);
            return;
        }
        console.log('File created with initial content.');
    });
}

// 2. Function to Read the File Content
function readFile() {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err.message);
            return;
        }
        console.log('File content:\n', data);
    });
}

// 3. Function to Append (Update) Content to the File
function updateFile() {
    const newContent = 'This is additional content appended to the file.\n';
    
    fs.appendFile(filePath, newContent, (err) => {
        if (err) {
            console.error('Error appending to file:', err.message);
            return;
        }
        console.log('Content appended successfully.');
    });
}

// Helper function to manage the sequence of operations
function performFileOperations() {
    createFile();              // Step 1: Create the file
    setTimeout(readFile, 500);  // Step 2: Read the file (wait 0.5 sec to ensure createFile finishes)
    setTimeout(updateFile, 1000); // Step 3: Append new content (wait 1 sec to ensure previous readFile finishes)
    setTimeout(readFile, 1500);   // Step 4: Read the updated content (wait another 0.5 sec)
}

// Run the operations
performFileOperations();
