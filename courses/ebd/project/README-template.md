# [Project name]

**Course:** Electronic Business Development (BINF 503) · Winter 2026
**Instructor:** Dr. Nourhan Hamdi
**Teaching Assistants:** Mr. Nour Gaser, Mr. Omar Alaa, Ms. Mariam Khalid, Mr. Younes Zied, Mr. Mahmoud Hani

> Submission 1 (the plan): replace everything in [brackets], delete these
> quoted notes, and push this file to `main` by **Thursday 12 November 2026, 23:59**.

## 1. Team

| Name | Student ID | Tutorial group | GitHub username |
|---|---|---|---|
| [Name] | [ID] | [T#] | [@username] |
| [Name] | [ID] | [T#] | [@username] |
| [Name] | [ID] | [T#] | [@username] |
| [Name] | [ID] | [T#] | [@username] |
| [Name] | [ID] | [T#] | [@username] |
| [Name] | [ID] | [T#] | [@username] |

## 2. The idea

[What the application is, who it is for, and what problem it solves. A short paragraph.]

## 3. Features

### 3.1 The full product

> Everything the complete product could do, even beyond this course.

- [Feature]
- [Feature]
- [Feature]

### 3.2 The use cases we will build

> 5 or 6, one per member. Registration and login is mandatory. Every use case
> must change data: create, update or delete something.

| # | Use case | What the user does | What they see | What is stored |
|---|---|---|---|---|
| 1 | Registration and login | [Registers with name, email and password; logs in] | [Their dashboard, with their name] | [A User, with a hashed password] |
| 2 | [Use case] | [...] | [...] | [...] |
| 3 | [Use case] | [...] | [...] | [...] |
| 4 | [Use case] | [...] | [...] | [...] |
| 5 | [Use case] | [...] | [...] | [...] |
| 6 | [Use case, if you are 6] | [...] | [...] | [...] |

## 4. Who owns what

> Each member owns one use case and builds it end to end: the React pages, the
> API routes, the controllers and the models it needs.

| Member | Use case |
|---|---|
| [Name] | Registration and login |
| [Name] | [Use case 2] |
| [Name] | [Use case 3] |
| [Name] | [Use case 4] |
| [Name] | [Use case 5] |
| [Name] | [Use case 6] |

## 5. Data model

> The Mongoose schema of every model you plan to use.

### User

```js
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // stored hashed, never as plain text
});
```

### [Model 2]

```js
// Your schema here
```

### [Model 3]

```js
// Your schema here
```
