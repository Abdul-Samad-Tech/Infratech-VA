# InfraTech VA Website - Testing Guide

## Quick Start

### Local Testing with XAMPP

1. **Ensure XAMPP is Running**
   - Start Apache server from XAMPP Control Panel
   - Make sure the server is running on port 80

2. **Access the Website**
   - Open your browser
   - Navigate to: `http://localhost/Infaratech%20VA/`
   - Or: `http://localhost/Infaratech%20VA/index.html`

3. **Test All Sections**
   - Scroll through each section to verify layout
   - Test navigation links
   - Check mobile responsiveness (see below)

## Testing Checklist

### Desktop View (1920px, 1440px, 1024px)
- [ ] Header is sticky and shows on scroll
- [ ] Logo displays correctly with circuit lines
- [ ] Navigation menu works (all links)
- [ ] Dropdown menu for Services functions
- [ ] Hero section displays with illustration
- [ ] Search bar appears in hero and footer
- [ ] All sections alternate backgrounds correctly
- [ ] Hand-drawn frames appear around illustrations
- [ ] Typography hierarchy is clear
- [ ] Footer displays all columns properly

### Tablet View (768px - 1024px)
- [ ] Grid layouts adjust to 2 columns
- [ ] Navigation remains accessible
- [ ] Illustrations scale appropriately
- [ ] Text remains readable
- [ ] Spacing is adequate

### Mobile View (< 768px)
- [ ] Hamburger menu appears
- [ ] Mobile menu opens/closes properly
- [ ] All sections stack vertically
- [ ] Illustrations don't overflow
- [ ] Search bar is visible
- [ ] Touch targets are large enough
- [ ] Text is readable without zooming

### Interactive Features
- [ ] Smooth scroll works for all anchor links
- [ ] Active navigation highlighting works
- [ ] Hover effects on buttons and cards
- [ ] Arrow button scrolls to About section
- [ ] Search bar focus effect works
- [ ] Dropdown menu fades in/out smoothly

### Visual Design
- [ ] Color palette matches specifications:
  - Off-White: #FAF9F6
  - Deep Purple: #4B246C
  - Dark Purple: #2D1B44
  - Yellow: #FFD700
- [ ] Hand-drawn borders appear organic
- [ ] Paper texture visible on off-white sections
- [ ] SVG illustrations render correctly
- [ ] Shadows and depth effects work

### Browser Compatibility
Test in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Performance
- [ ] Page loads quickly (< 3 seconds)
- [ ] No console errors
- [ ] Smooth scrolling (no jank)
- [ ] Images/SVGs optimized

## Common Issues & Solutions

### Issue: Styles not loading
**Solution**: Clear browser cache or hard refresh (Ctrl+F5 / Cmd+Shift+R)

### Issue: JavaScript not working
**Solution**: 
- Check browser console for errors
- Ensure jQuery CDN is accessible
- Verify main.js path is correct

### Issue: Fonts not displaying
**Solution**: 
- Check internet connection (Google Fonts CDN)
- Verify font weights are loaded (300, 500, 700)

### Issue: Layout broken on mobile
**Solution**:
- Check viewport meta tag in index.html
- Verify Tailwind responsive classes
- Test in actual device, not just browser dev tools

## Browser DevTools Testing

### Chrome/Firefox DevTools
1. Press F12 or Right-click → Inspect
2. Click device toolbar icon (toggle device emulation)
3. Test different screen sizes:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

### Check Console for Errors
1. Open DevTools (F12)
2. Go to Console tab
3. Look for any red error messages
4. Expected: Branding message in green/purple

## Accessibility Testing

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] All links/buttons are focusable
- [ ] Focus indicators are visible (yellow outline)
- [ ] No keyboard traps

### Screen Reader
- Test with NVDA (Windows) or VoiceOver (Mac)
- Verify headings are announced correctly
- Check alt text for images (SVGs have titles)

### Color Contrast
- Verify text is readable on all backgrounds
- Use WebAIM Contrast Checker tool
- Minimum ratio: 4.5:1 for normal text

## Performance Optimization Tips

If needed:
1. Minify CSS and JS files
2. Optimize SVG code (remove unnecessary attributes)
3. Enable gzip compression on server
4. Add lazy loading for below-fold content
5. Use service worker for caching

## Content Updates

### To Update Text
Edit `index.html` directly:
- Find the section by ID
- Modify text content
- Save and refresh browser

### To Change Colors
Edit `assets/css/styles.css`:
- Update CSS variables in `:root`
- Or modify Tailwind utility classes in HTML

### To Add New Sections
1. Copy existing section structure
2. Update section ID
3. Add navigation link
4. Update content and illustrations

## Next Steps

After testing:
1. Replace placeholder text with actual content from images
2. Add real social media links in footer
3. Set up "Book a Call" functionality (form or Calendly)
4. Add analytics tracking (Google Analytics)
5. Set up contact form if needed
6. Deploy to production server

## Support

For issues or questions:
- Check PROJECT_DOCUMENTATION.txt
- Review code comments in files
- Test in multiple browsers
- Use browser DevTools for debugging
