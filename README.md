# Unhandled Promise Rejection in Node.js Express.js App

This repository demonstrates a common error in Node.js Express.js applications: the silent crashing of the server due to unhandled promise rejections during asynchronous operations.  The `bug.js` file shows the problematic code. The solution is implemented in `bugSolution.js`

## Problem

The server doesn't handle errors properly when asynchronous operations fail, leading to a crash without any clear indication of the issue.  This makes debugging and user experience very poor.

## Solution

The solution involves implementing a global error handler to catch these exceptions and provide more robust error management.