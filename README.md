# 🎨 AI Personalized Coloring Book Generator

Create magical, printable coloring pages where your child becomes part of the story ✨

This project allows parents to upload their child’s image, select a template (cartoon-style scenes), and generate a **custom coloring page** where the child appears alongside characters in a consistent artistic style — ready to download and print.

---

## 🚀 Features

- 🧒 Upload child’s image
- 🎭 Select from pre-built story templates
- 🤖 AI-powered image generation (Gemini API)
- 🖼️ Face integration into cartoon-style scenes
- ✏️ Auto-conversion to **black & white coloring pages**
- 📄 Download high-quality printable PDF
- ☁️ Cloud image storage via Cloudinary

---

## 🧠 Tech Stack

### Frontend

- React.js
- Redux Toolkit
- Tailwind CSS

### Backend

- Node.js
- Express.js

### AI & Media

- Gemini (Nano Banana API) – Image Generation
- Cloudinary – Image Storage & Optimization

---

## 📁 Project Structure

```
client/
  ├── src/
  │   ├── components/
  │   ├── features/ (Redux slices)
  │   ├── pages/
  │   ├── services/
  │   └── utils/

server/
  ├── controllers/
  ├── routes/
  ├── services/ (AI + Cloudinary logic)
  ├── middleware/
  └── config/
```

---

## ⚙️ How It Works

1. User uploads child’s image
2. Image is stored on Cloudinary
3. User selects a template (cartoon scene)
4. Backend sends prompt + image to Gemini API
5. AI generates a stylized image with child included
6. Image is converted into **line-art coloring format**
7. Final image is returned & available for download

---

## 🧪 Environment Variables

Create a `.env` file in the server folder:

```
PORT=5000

MONGO_URI=your_mongodb_connection

GEMINI_API_KEY=your_gemini_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🛠️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/ai-coloring-book.git
cd ai-coloring-book
```

### 2. Install dependencies

**Client**

```
cd client
npm install
```

**Server**

```
cd server
npm install
```

### 3. Run the app

**Start backend**

```
cd server
npm run dev
```

**Start frontend**

```
cd client
npm start
```

---

## 🎯 Future Enhancements

- 📚 Multi-page story generation
- 🎨 More templates & styles
- 🧠 Improved face consistency
- 📱 Mobile-first UI
- 💳 Payment integration (Razorpay/Stripe)
- 📦 Bulk coloring book export

---

## ⚠️ Disclaimer

- Avoid using copyrighted characters directly.
- Use original or inspired templates for commercial use.
- AI-generated results may vary based on input image quality.

---

## 🤝 Contributing

Contributions, ideas, and improvements are welcome!  
Feel free to fork the repo and submit a PR.

---

## 📜 License

This project is licensed under the MIT License.

---

## 💡 Inspiration

Built to combine creativity, AI, and personalization — turning simple photos into fun learning experiences for kids.
