// A deployment script for Vercel that creates a new project
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Generate a random project name suffix
const randomSuffix = Math.floor(Math.random() * 10000);
const projectName = `oddsox-linktree-${randomSuffix}`;

// Delete any existing .vercel directory in the dist folder if it exists
const distVercelDir = path.join(__dirname, 'dist', '.vercel');
if (fs.existsSync(distVercelDir)) {
  console.log('Removing existing .vercel directory from dist...');
  fs.rmSync(distVercelDir, { recursive: true, force: true });
}

console.log('Changing to dist directory...');
process.chdir(path.join(__dirname, 'dist'));

console.log(`Deploying as a new project: ${projectName}...`);
try {
  // Create a new project with a unique name
  execSync(`vercel --name ${projectName} --confirm --prod`, { stdio: 'inherit' });
  console.log('Deployment successful!');
} catch (error) {
  console.error('Deployment failed:', error.message);
} 