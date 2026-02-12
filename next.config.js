/** @type {import('next').NextConfig} */
const nextConfig = { turbopack: {
    // Set the root to the directory where next.config.js is located,
    // or a parent directory if necessary.
    root: path.join(__dirname, './'), 
    // You might need to adjust './' to '../' or another path depending on your structure
  },
};
module.exports = nextConfig
