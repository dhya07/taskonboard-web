# TaskonBoard Website

A responsive website for the TaskonBoard mobile app, serving as a marketing platform, directory, and support site for users and providers.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Then fill in your actual environment variables.

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **React Router DOM** - Routing
- **Redux Toolkit** - State Management
- **Axios** - HTTP Client
- **Firebase** - Authentication & Database
- **Stripe** - Payment Processing
- **React Helmet** - SEO Management

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── routes/        # Routing configuration
├── layouts/       # Layout components
├── redux/         # Redux store and slices
├── utils/         # Utility functions and constants
└── assets/        # Static assets
```

## 🔧 Environment Variables

Create a `.env` file with the following variables:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here

# Stripe Configuration
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key_here

# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
```

## 📱 Features

- Responsive design for all devices
- SEO optimized with React Helmet
- State management with Redux Toolkit
- Modern UI with Tailwind CSS
- Firebase integration ready
- Stripe payment integration ready
- Environment-based configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
