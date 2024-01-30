/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    includepaths: [path.join(__dirname, "styles")]
};

module.exports = nextConfig;
