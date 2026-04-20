# Nayax Mock Server

A lightweight mock server that simulates Nayax POS payment responses for development and testing.  
Supports `success`, `declined`, and `error` scenarios with full mock receipts (`merchantReceipt` and `customerReceipt`).  
Ideal for testing POS integrations, Flutter apps, or web frontends without real Nayax hardware.

---

## Requirements

- Node.js (18+)
- npm

---

## Install & Run

1. Clone the repository:
https://github.com/Yassersaife/nayax_server.git


2.Install dependencies:
npm install

3.Start the server:
node server.js

Server runs at:

http://localhost:4000/spicy

Usage
The Nayax Mock Server exposes a POST endpoint that reads the status from query parameters.

Endpoint
POST http://localhost:4000/spicy?status=<status>
<status> can be one of:
success → simulates a successful transaction
declined → simulates a declined transaction

Examples
Success:
POST http://localhost:4000/spicy?status=success

Declined:
POST http://localhost:4000/spicy?status=declined

Error:
POST http://localhost:4000/spicy?status=error
