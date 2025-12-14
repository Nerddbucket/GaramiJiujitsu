#!/bin/bash

# Garami Jiu Jitsu - Development Server Starter
# This script helps you start the development server

echo "🚀 Starting Garami Jiu Jitsu Development Server..."
echo ""

# Navigate to project directory
cd "/Volumes/Code bag/GaramiJiujitsu"

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Trying to load nvm..."
    export NVM_DIR="$HOME/.nvm"
    if [ -s "$NVM_DIR/nvm.sh" ]; then
        . "$NVM_DIR/nvm.sh"
        nvm use 16 2>/dev/null || nvm use 18 2>/dev/null || echo "Please install Node.js 16 or 18"
    else
        echo "❌ nvm not found. Please install Node.js from nodejs.org"
        exit 1
    fi
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "🌐 Starting development server..."
echo "📍 Server will be available at: http://localhost:5173"
echo "⚠️  Keep this terminal open while working!"
echo "🛑 Press Ctrl+C to stop the server"
echo ""
echo "----------------------------------------"
echo ""

# Start the dev server
npm run dev

