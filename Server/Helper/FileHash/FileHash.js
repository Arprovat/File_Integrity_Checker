const crypto = require('crypto');
const fs = require('fs/promises'); // Import fs.promises
const path = require('path');

const CreateFileHash = async (filePath) => {
  try {
    const absolutePath = path.join(__dirname, '../../File_store', filePath); // Construct absolute path
    // Check if file exists
    await fs.access(absolutePath, fs.constants.F_OK);

    const fileBuffer = await fs.readFile(absolutePath);
    const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');
    return hash;
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`File not found: ${filePath}`);
    }
    // Re-throw other errors
    throw error;
  }
};

module.exports = CreateFileHash;