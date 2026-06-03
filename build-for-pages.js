#!/usr/bin/env node
import { execSync } from 'child_process';
import { cpSync, rmSync, existsSync } from 'fs';
import { resolve } from 'path';

console.log('Building for Cloudflare Pages...');

// Run vite build
execSync('vite build', { stdio: 'inherit' });

// Copy dist/client to public
const distClient = resolve('./dist/client');
const publicDir = resolve('./public');

if (existsSync(publicDir)) {
  console.log('Removing old public directory...');
  rmSync(publicDir, { recursive: true });
}

console.log(`Copying ${distClient} to ${publicDir}...`);
cpSync(distClient, publicDir, { recursive: true });

console.log('✓ Build complete! Ready for Cloudflare Pages.');
