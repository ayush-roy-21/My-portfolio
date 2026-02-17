# Certifications & Achievements Section

This section allows you to showcase your professional certifications, academic achievements, and notable accomplishments.

## How to Add Your Certificates

1. **Place PDF files** in the `public/certificates/` directory
2. **Update the certificates array** in `src/app/certifications/page.tsx` with your certificate details:

```typescript
{
  id: "unique-id",
  title: "Your Certificate Title",
  issuer: "Issuing Organization",
  date: "2024",
  pdfUrl: "/certificates/your-certificate.pdf",
  category: "cybersecurity" // or "cloud", "academic", etc.
}
```

## How to Add Your Achievements

1. **Place image files** (JPG, PNG) in the `public/achievements/` directory
2. **Update the achievements array** in `src/app/certifications/page.tsx` with your achievement details:

```typescript
{
  id: "unique-id",
  title: "Your Achievement Title",
  description: "Brief description of the achievement",
  date: "2024",
  imageUrl: "/achievements/your-achievement.jpg",
  category: "competitions" // or "academic", "projects", etc.
}
```

## Available Categories

- **All**: Shows everything
- **Cybersecurity**: Security-related certifications and achievements
- **Cloud Computing**: Cloud platform certifications
- **Competitions**: Hackathons, competitions, and contests
- **Academic**: Academic achievements and recognitions
- **Projects**: Project-related awards and recognitions

## Features

- **Category Filtering**: Filter certificates and achievements by category
- **PDF Viewing**: Click "View Certificate" to open PDFs in a new tab
- **Image Display**: Achievement photos are displayed with fallback icons
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations for better user experience

## File Structure

```
public/
├── certificates/
│   ├── ceh-certificate.pdf
│   ├── comptia-security.pdf
│   └── aws-cloud-practitioner.pdf
└── achievements/
    ├── cybersecurity-competition.jpg
    ├── deans-list.jpg
    └── best-project.jpg
```

## Customization

You can customize the categories, styling, and layout by modifying the `src/app/certifications/page.tsx` file. The page uses Tailwind CSS for styling and Framer Motion for animations.
