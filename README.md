# Welcome to the PC Builder Bangladesh

Here you can see the live website [Live Site](https://pc-builder-assignment-6-sooty.vercel.app/).

##

This is the documentation for the PC Builder tool component of the PC Builder Bangladesh. This PC Builder tool helps users to select PC components and build their own PC. It is made using Next.js, Next Auth, Next API, Tailwind, Flowbite, Mongodb

## Functional Requirements

### User

- User can log in with Google and Github.

- User can log out.

- Users can visit the home page, category-wise product page, products page, and product details page without login.

- There is a protected route/page called pc builder page, User must log in to visit this page.

- In pc builder page users can build their own pc by selecting pc components.

<!-- HOW TO RUN -->

## Run this repository on your local machine

Please follow the below instructions to run this repository on your local machine:

1. Clone this entire repository

   ```sh
   git clone https://github.com/Khairul38/pc-builder-assignment-6
   ```

2. Go to the cloned project directory

   ```sh
   cd pc-builder-assignment-6

   ```

3. Make environment file with the following system

   ```sh
   # For client make .env.local file accordingly :
   NEXTAUTH_SECRET=""

   NEXTAUTH_URL=https://pc-builder-assignment-6-sooty.vercel.app

   NEXT_PUBLIC_BASE_URL=https://pc-builder-assignment-6-sooty.vercel.app

   GITHUB_ID=""

   GITHUB_SECRET=""

   GOOGLE_ID=""

   GOOGLE_SECRET=""

   MONGO_URL=""
   ```

4. Install dependencies

   ```sh
   npm i
   ```

5. Run client (Default Port is 3000)

   ```sh
   # development mode
   npm run dev

   # build mode
   npm run build

   # production mode
   npm run start
   ```

<br>

## Thanks
