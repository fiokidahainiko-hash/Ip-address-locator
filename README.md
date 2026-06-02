# IP Address Locator 🌐

A modern, responsive web application that helps users check their IP address, location, and network information instantly. Built with a clean black and white design featuring cloud animations.

## ✨ Features

- **Real-time IP Detection**: Instantly fetch your current IP address
- **Location Information**: Get your country, city, region, and timezone
- **Detailed Data**: View ISP information and precise coordinates (latitude/longitude)
- **Multilingual Support**: Full support for English, French, and Spanish
- **Language Persistence**: Automatically remembers your language preference
- **Copy Functionality**: One-click copy to clipboard for your IP address
- **Share Feature**: Share your IP and location information with others
- **Responsive Design**: Beautiful, clean interface that works on all devices
- **Cloud Animations**: Floating cloud animations in the background
- **Dark Theme**: Modern black and white aesthetic with smooth transitions
- **Accessibility**: Keyboard shortcuts (Press 'R' to refresh)

## 🎨 Design Highlights

- **Color Scheme**: Professional black and white theme with subtle gray accents
- **Cloud Theme**: Animated SVG clouds in the background
- **Smooth Animations**: Fade-in, slide-up, and hover effects throughout
- **Mobile Optimized**: Fully responsive design for all screen sizes
- **Modern UI**: Clean cards, proper spacing, and intuitive layout

## 🌍 Supported Languages

- 🇬🇧 **English**
- 🇫🇷 **French** (Français)
- 🇪🇸 **Spanish** (Español)

## 📱 Features by Language

Each language includes:
- Interface translations
- Navigation elements
- Information labels
- Explanatory text
- Button labels
- Notifications

## 🚀 How to Use

1. **Open the Website**: Visit the IP Address Locator website
2. **View Your IP**: Your IP address and location load automatically
3. **Change Language**: Click the language buttons (EN, FR, ES) at the top
4. **Copy IP**: Click the "Copy" button to copy your IP address to clipboard
5. **Refresh Data**: Click "Refresh" to fetch updated information
6. **Share**: Click "Share" to share your IP and location information
7. **Keyboard Shortcut**: Press 'R' to quickly refresh the data

## 📊 Information Displayed

- **IP Address**: Your current public IP address
- **Country**: Country of origin
- **City**: City location
- **Region**: State/Province
- **ISP**: Internet Service Provider
- **Timezone**: Your current timezone
- **Latitude & Longitude**: Precise geographic coordinates

## 🛠 Technical Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with animations and gradients
- **JavaScript (Vanilla)**: No frameworks, lightweight and fast
- **API Integration**: Uses free IP geolocation services

## 📡 APIs Used

- **Primary API**: ipapi.co - Comprehensive IP geolocation data
- **Fallback API**: ipify.org - Basic IP detection as backup

## 🔒 Privacy

- No personal data is stored on our servers
- All information is fetched in real-time from your browser
- Language preferences are stored locally in your browser
- No tracking or analytics beyond basic API calls

## 💻 Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Installation

### Option 1: Direct Download
Simply download the files and open `index.html` in your browser.

### Option 2: GitHub Pages
This repository can be deployed directly to GitHub Pages:

1. Go to Repository Settings
2. Enable GitHub Pages
3. Select main branch as source
4. Access your site at `https://yourusername.github.io/Ip-address-locator`

### Option 3: Local Server
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx http-server
```

Then visit `http://localhost:8000`

## 📂 File Structure

```
Ip-address-locator/
├── index.html      # Main HTML file
├── styles.css      # Styling and animations
├── app.js          # JavaScript functionality
└── README.md       # Documentation
```

## 🎯 Key Features Explained

### Multilingual Support
The application stores user language preference in localStorage and dynamically updates all UI text based on selection. Translations are complete for all English, French, and Spanish interfaces.

### Cloud Theme Design
- Animated SVG clouds float gently in the background
- Multiple cloud layers with different animation speeds
- Subtle opacity for non-intrusive background effect
- Responsive cloud animations on all devices

### Responsive Layout
- Desktop: 1000px container with grid layout
- Tablet: Adjusted padding and grid columns
- Mobile: Single column layout, optimized spacing
- Small Mobile: Condensed interface with essential information

### Real-time Updates
- Auto-load on page open
- Manual refresh capability
- Fallback to basic API if primary fails
- Smooth loading states

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements, bug fixes, or new languages!

## 📝 License

This project is open source and available under the MIT License.

## 🙋 Support

For issues, questions, or suggestions, please open an issue on GitHub.

## 🎉 Credits

- Built with HTML5, CSS3, and Vanilla JavaScript
- IP data provided by ipapi.co and ipify.org
- Inspired by modern UI/UX design principles

---

**Version**: 1.0.0  
**Last Updated**: 2026-06-02  
**Status**: Active & Maintained ✨
