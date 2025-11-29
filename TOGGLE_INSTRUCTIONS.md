# Coming Soon Toggle Instructions

Your TaskOnBoard website now has a flexible toggle system that allows you to easily switch between the **Coming Soon page** and the **Full Website** without changing code.

## 🎛️ How to Toggle

### Method 1: Admin Panel (Recommended)
1. **Open your website** in the browser
2. **Press `Ctrl + Shift + A`** (or `Cmd + Shift + A` on Mac) to open the admin panel
3. **Click the gear icon** ⚙️ in the bottom-right corner if it appears
4. **Check/uncheck "Show Coming Soon Page"** to toggle between modes
5. The page will automatically reload with the new mode

### Method 2: Code Configuration
1. **Open** `src/utils/config.js`
2. **Change** `showComingSoon: false` to `showComingSoon: true` (or vice versa)
3. **Save the file** - the changes will apply immediately in development

### Method 3: Environment Variable (Production)
1. **Set the environment variable** `VITE_SHOW_COMING_SOON=true` or `VITE_SHOW_COMING_SOON=false`
2. **Redeploy** your application

## 📋 Current Modes

### Coming Soon Mode (`showComingSoon: true`)
- ✅ Shows beautiful coming soon page with countdown
- ✅ Email signup form
- ✅ No navigation header
- ✅ Social media links
- ✅ Feature preview cards

### Full Website Mode (`showComingSoon: false`)
- ✅ Shows complete landing page with all sections
- ✅ Navigation header with menu
- ✅ Hero, Features, Stats, CTA, Footer sections
- ✅ All original functionality

## 🚀 Deployment

Both modes work seamlessly with your Vercel deployment:
- **Current URL**: https://taskonboard-jlomdiuoe-dhya07s-projects.vercel.app
- Changes to the toggle will be applied instantly in development
- For production, redeploy after changing the configuration

## 🔧 Customization

### Changing Launch Date
Edit `src/utils/config.js` and modify the `launchDate` calculation:
```javascript
launchDate: (() => {
  const date = new Date()
  date.setDate(date.getDate() + 60) // Change 30 to desired days
  return date
})()
```

### Adding More Feature Flags
You can easily add more toggles in `src/utils/config.js`:
```javascript
export const config = {
  showComingSoon: false,
  enablePayments: true,
  enableAuth: true,
  // Add your new flags here
}
```

## 🎯 Best Practices

1. **Development**: Use the admin panel for quick testing
2. **Staging**: Use code configuration for consistent testing
3. **Production**: Use environment variables for safe deployment
4. **Quick Switch**: The admin panel is perfect for demos and client presentations

## 🔑 Keyboard Shortcuts

- `Ctrl + Shift + A` (Windows/Linux) or `Cmd + Shift + A` (Mac): Toggle admin panel

---

**Your website is now production-ready with flexible mode switching! 🎉** 