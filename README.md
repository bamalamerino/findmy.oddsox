# OddSox Link Tree

A responsive link-in-bio page with a chat-style interface. When users click on the chat input, it reveals links in a conversation thread style, partially covering the background image.

## Features

- Clean, modern design with a chat interface
- Animation effects for revealing links
- Responsive layout that works on all device sizes
- Background image that takes up approximately 1/4 of the screen
- Expandable link section that partially covers the background image

## Setup Instructions

1. **Background Image**: Replace `background-image.png` with your own image:
   - For best results, use an image with dimensions around 1200x300 pixels
   - The image will take up approximately 1/4 of the screen height
   - You can adjust the height in the CSS file if needed

2. **Logo**: Replace `logo.png` with your own logo or profile image.

3. **Links**: Edit the links in `index.html` to point to your own social media profiles or websites:

```html
<div class="message-bubble">
  <a href="#YOUR_LINK_HERE" class="link-item">
    <i class="fab fa-instagram link-icon"></i>
    <span class="link-text">YOUR_TEXT_HERE</span>
  </a>
</div>
```

4. **Icons**: The page uses Font Awesome icons. You can change the icons by modifying the classes:
   - For social media: `fab fa-[platform-name]` (e.g., `fab fa-twitter`)
   - For general icons: `fas fa-[icon-name]` (e.g., `fas fa-globe`)
   - Find more icons at [Font Awesome](https://fontawesome.com/icons)

5. **Customization**: You can easily customize the colors by modifying the CSS variables in `styles.css`:

```css
:root {
  --primary-color: #3a3a3a;
  --secondary-color: #f5f5f5;
  --accent-color: #4a90e2;
  --text-color: #333333;
  --bubble-color: #ffffff;
  --shadow-color: rgba(0, 0, 0, 0.1);
}
```

## Deployment

Upload all files to your web hosting service. Make sure to include:

- index.html
- styles.css
- script.js
- background-image.png (your custom image)
- logo.png (your custom logo)

## Browser Compatibility

This page is compatible with all modern browsers, including:
- Chrome
- Firefox
- Safari
- Edge

## License

MIT License - Feel free to use and modify for your own purposes. 