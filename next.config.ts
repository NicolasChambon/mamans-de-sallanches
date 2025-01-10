import type { NextConfig } from "next";
import path from "path"; // we need to import path from Node.js to access .join method

const nextConfig: NextConfig = {

  // The includePaths option allows us to specify the directories where Sass should look for files to import
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  }
};

export default nextConfig;
