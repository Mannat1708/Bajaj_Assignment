# BFHL Assignment

This is a submission for the **Full Stack API Round** for Chitkara Campus Hiring 2025.

---

## Problem Statement

Build and host a REST API (`POST /bfhl`) that:

- Accepts a JSON object containing an array (`data`)
- Classifies items into:
  - Even numbers
  - Odd numbers
  - Uppercased alphabets
  - Special characters
- Computes:
  - Sum of numbers
  - Concatenated reverse string of all alphabet characters with alternating caps

### API Must Also Return:

- `is_success`: boolean
- `user_id`: in format `john_doe_17091999`
- `email`: `john@xyz.com`
- `roll_number`: `ABCD123`

---

## Tech Stack

- **Node.js**
- **Express.js**
- Hosted on: Render
- Public GitHub repository

---

## Live API URL

> 🌐 [https://your-api-host/bfhl](https://your-api-host/bfhl)  
_(replace with actual deployed link)_

---

## API Endpoint

### POST `/bfhl`

#### Request Body

```json
{
  "data": ["1", "A", "&", "2", "b"]
}
