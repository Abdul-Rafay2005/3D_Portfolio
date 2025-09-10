

# 🌐 3D Portfolio Website

A modern **3D portfolio website** built with **React, Three.js, TailwindCSS, and Framer Motion**.
It showcases my skills, projects, and experience with an interactive 3D design and smooth animations.

🚀 **Live Demo:** [Your Deployed Link Here](https://3-d-portfolio-seven-kappa.vercel.app/)

---



## ✨ Features

* 🎨 **Modern UI/UX** with TailwindCSS
* 🌍 **3D Elements** using Three.js (via React Three Fiber)
* 🎞️ Smooth animations powered by Framer Motion
* 📱 Fully responsive design (desktop, tablet, mobile)
* 📬 **Contact form** integrated with [EmailJS](https://www.emailjs.com/)
* 🖼️ Dynamic sections: About, Skills, Projects, Contact

---

## 🛠️ Tech Stack

* **HTML5** – Markup structure  
* **JavaScript (ES6+)** – Core programming language  
* **Three.js / React Three Fiber** – 3D rendering  
* **Framer Motion** – Animations  
* **TailwindCSS** – Styling  
* **EmailJS** – Contact form email service  

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Abdul-Rafay2005/3D_Portfolio.git
cd 3D_Portfolio
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev   # For Vite projects
# OR
npm start     # For CRA projects
```

Build for production:

```bash
npm run build
```

---

## 📬 Contact Form Setup (EmailJS)

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Add a new **Email Service** (e.g., Gmail).
3. Create a new **Email Template** with variables:

   * `from_name`
   * `from_email`
   * `message`
4. Copy your **Service ID**, **Template ID**, and **Public Key**.
5. Replace them in `Contact.jsx`:

   ```js
   emailjs.send(
     "your_service_id",
     "your_template_id",
     {
       from_name: form.name,
       from_email: form.email,
       message: form.message,
     },
     "your_public_key"
   )
   ```
6. Deploy again and test! 🎉

---

## 🚀 Deployment

Easily deploy on:

* [Vercel](https://vercel.com/)
* [Netlify](https://netlify.com/)
* GitHub Pages

---

## 📌 Roadmap / Future Improvements

* 🌙 Dark mode toggle
* 📝 Blog/Articles section
* 📊 Add analytics (Google Analytics or Vercel Analytics)
* 🎧 Background music / sound toggle

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a pull request.

---

## 👤 Author

**Abdul Rafay**

* GitHub: [@Abdul-Rafay2005](https://github.com/Abdul-Rafay2005)
* Portfolio: [Your Portfolio Link](https://3-d-portfolio-seven-kappa.vercel.app/)
* LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/abdul-rafay-18bab5356/)

---

## ⭐ Support

If you like this project, **please star the repo** ⭐ — it helps others find it!

