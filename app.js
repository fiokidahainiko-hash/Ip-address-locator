/* =================================
   TRANSLATIONS
   ================================= */

const translations = {
    en: {
        'logo-text': 'IP Locator',
        'header-title': 'Check Your IP Address',
        'header-subtitle': 'Discover your location and network information instantly',
        'ip-label': 'Your IP Address',
        'copy-text': 'Copy',
        'info-country': 'Country',
        'info-city': 'City',
        'info-region': 'Region',
        'info-isp': 'ISP',
        'info-timezone': 'Timezone',
        'info-latency': 'Latitude/Longitude',
        'lat-label': 'Latitude',
        'lon-label': 'Longitude',
        'refresh-text': 'Refresh',
        'share-text': 'Share',
        'info-heading': 'What is Your IP Address?',
        'info-text': 'An IP address is a unique identifier assigned to every device connected to the internet. It allows devices to communicate with each other and helps identify your location and internet service provider (ISP).',
        'footer-text': '&copy; 2026 IP Address Locator. All rights reserved.',
        'copy-success': 'IP copied to clipboard!'
    },
    fr: {
        'logo-text': 'Localisateur IP',
        'header-title': 'Vérifiez Votre Adresse IP',
        'header-subtitle': 'Découvrez votre localisation et vos informations réseau instantanément',
        'ip-label': 'Votre Adresse IP',
        'copy-text': 'Copier',
        'info-country': 'Pays',
        'info-city': 'Ville',
        'info-region': 'Région',
        'info-isp': 'FAI',
        'info-timezone': 'Fuseau Horaire',
        'info-latency': 'Latitude/Longitude',
        'lat-label': 'Latitude',
        'lon-label': 'Longitude',
        'refresh-text': 'Actualiser',
        'share-text': 'Partager',
        'info-heading': 'Qu\'est-ce qu\'une Adresse IP?',
        'info-text': 'Une adresse IP est un identifiant unique attribué à chaque appareil connecté à Internet. Elle permet aux appareils de communiquer entre eux et aide à identifier votre localisation et votre fournisseur d\'accès Internet (FAI).',
        'footer-text': '&copy; 2026 Localisateur IP. Tous droits réservés.',
        'copy-success': 'IP copiée dans le presse-papiers!'
    },
    es: {
        'logo-text': 'Localizador IP',
        'header-title': 'Verifique Su Dirección IP',
        'header-subtitle': 'Descubra su ubicación e información de red al instante',
        'ip-label': 'Su Dirección IP',
        'copy-text': 'Copiar',
        'info-country': 'País',
        'info-city': 'Ciudad',
        'info-region': 'Región',
        'info-isp': 'ISP',
        'info-timezone': 'Zona Horaria',
        'info-latency': 'Latitud/Longitud',
        'lat-label': 'Latitud',
        'lon-label': 'Longitud',
        'refresh-text': 'Actualizar',
        'share-text': 'Compartir',
        'info-heading': '¿Qué es una Dirección IP?',
        'info-text': 'Una dirección IP es un identificador único asignado a cada dispositivo conectado a Internet. Permite que los dispositivos se comuniquen entre sí e identifica su ubicación y proveedor de servicios de Internet (ISP).',
        'footer-text': '&copy; 2026 Localizador IP. Todos los derechos reservados.',
        'copy-success': '¡IP copiada al portapapeles!'
    }
};

/* =================================
   STATE & CONFIGURATION
   ================================= */

let currentLanguage = localStorage.getItem('language') || 'en';
let currentIPData = {};

// API endpoints (using free services)
const API_CONFIG = {
    ipApi: 'https://ipapi.co/json/',
    fallbackApi: 'https://api.ipify.org?format=json'
};

/* =================================
   LANGUAGE MANAGEMENT
   ================================= */

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update page text
    updatePageText();
}

function updatePageText() {
    const currentTranslations = translations[currentLanguage];
    
    for (const [key, value] of Object.entries(currentTranslations)) {
        const element = document.getElementById(key);
        if (element) {
            if (key === 'footer-text') {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        }
    }
    
    // Update document language
    document.documentElement.lang = currentLanguage;
}

/* =================================
   FETCH IP DATA
   ================================= */

async function fetchIPData() {
    try {
        showLoading();
        
        // Primary API: ipapi.co (more detailed)
        const response = await fetch(API_CONFIG.ipApi);
        
        if (!response.ok) {
            throw new Error('Failed to fetch IP data');
        }
        
        const data = await response.json();
        currentIPData = data;
        displayIPData(data);
        
    } catch (error) {
        console.error('Error fetching IP data:', error);
        // Try fallback
        try {
            const ipResponse = await fetch(API_CONFIG.fallbackApi);
            const ipData = await ipResponse.json();
            displayBasicIPData(ipData.ip);
        } catch (fallbackError) {
            showError('Unable to fetch IP information. Please try again.');
            console.error('Fallback error:', fallbackError);
        }
    }
}

function displayIPData(data) {
    // IP Address
    const ipElement = document.getElementById('ip-display');
    ipElement.textContent = data.ip || 'N/A';
    ipElement.classList.remove('loading');
    
    // Country
    const countryElement = document.getElementById('country-value');
    countryElement.textContent = data.country || 'N/A';
    
    // City
    const cityElement = document.getElementById('city-value');
    cityElement.textContent = data.city || 'N/A';
    
    // Region
    const regionElement = document.getElementById('region-value');
    regionElement.textContent = data.region || 'N/A';
    
    // ISP (organization)
    const ispElement = document.getElementById('isp-value');
    ispElement.textContent = data.org || data.organization || 'N/A';
    
    // Timezone
    const timezoneElement = document.getElementById('timezone-value');
    timezoneElement.textContent = data.timezone || 'N/A';
    
    // Latitude
    const latitudeElement = document.getElementById('latitude');
    latitudeElement.textContent = data.latitude ? data.latitude.toFixed(4) : 'N/A';
    
    // Longitude
    const longitudeElement = document.getElementById('longitude');
    longitudeElement.textContent = data.longitude ? data.longitude.toFixed(4) : 'N/A';
    
    // Update coordinates display
    const coordsValue = document.getElementById('coords-value');
    if (data.latitude && data.longitude) {
        coordsValue.textContent = `${data.latitude.toFixed(4)}, ${data.longitude.toFixed(4)}`;
    } else {
        coordsValue.textContent = 'N/A';
    }
}

function displayBasicIPData(ip) {
    const ipElement = document.getElementById('ip-display');
    ipElement.textContent = ip || 'N/A';
    ipElement.classList.remove('loading');
    
    // Set other elements to N/A
    document.getElementById('country-value').textContent = 'N/A';
    document.getElementById('city-value').textContent = 'N/A';
    document.getElementById('region-value').textContent = 'N/A';
    document.getElementById('isp-value').textContent = 'N/A';
    document.getElementById('timezone-value').textContent = 'N/A';
    document.getElementById('latitude').textContent = 'N/A';
    document.getElementById('longitude').textContent = 'N/A';
    document.getElementById('coords-value').textContent = 'N/A';
}

/* =================================
   UI INTERACTIONS
   ================================= */

function showLoading() {
    const ipElement = document.getElementById('ip-display');
    ipElement.textContent = 'Loading...';
    ipElement.classList.add('loading');
}

function showError(message) {
    const ipElement = document.getElementById('ip-display');
    ipElement.textContent = message;
    ipElement.classList.remove('loading');
}

function copyToClipboard() {
    const ipText = document.getElementById('ip-display').textContent;
    
    if (ipText === 'Loading...' || ipText.includes('Error') || ipText === 'N/A') {
        return;
    }
    
    navigator.clipboard.writeText(ipText).then(() => {
        showNotification(translations[currentLanguage]['copy-success']);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: #000;
        color: #fff;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 2000;
        animation: slideInRight 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function shareIPData() {
    const ipText = document.getElementById('ip-display').textContent;
    const country = document.getElementById('country-value').textContent;
    const city = document.getElementById('city-value').textContent;
    
    let shareText = `My IP: ${ipText}`;
    if (country !== 'N/A') {
        shareText += ` - Location: ${city}, ${country}`;
    }
    shareText += ' - Checked with IP Address Locator';
    
    if (navigator.share) {
        navigator.share({
            title: 'My IP Information',
            text: shareText
        }).catch(err => {
            console.log('Share cancelled or failed:', err);
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('Share text copied to clipboard!');
        });
    }
}

/* =================================
   EVENT LISTENERS
   ================================= */

document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    setLanguage(currentLanguage);
    updatePageText();
    
    // Fetch IP data on load
    fetchIPData();
    
    // Language selector
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });
    
    // Copy button
    document.getElementById('copy-btn').addEventListener('click', copyToClipboard);
    
    // Refresh button
    document.getElementById('refresh-btn').addEventListener('click', fetchIPData);
    
    // Share button
    document.getElementById('share-btn').addEventListener('click', shareIPData);
    
    // Add keyboard shortcut for refresh (R key)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'r' || event.key === 'R') {
            // Only if not typing in an input
            if (document.activeElement.tagName !== 'INPUT') {
                fetchIPData();
            }
        }
    });
});

/* =================================
   ANIMATIONS
   ================================= */

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);
