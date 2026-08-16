# Virendra Shilpkar - Senior Flutter Developer Portfolio

This is a premium, modern, and professional personal portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Themes:** [Next-Themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode support)

## 📁 Project Structure

```text
src/
├── app/              # Next.js App Router (Layouts & Pages)
├── components/       # Reusable UI components
├── data/             # Structured data (Projects, Skills, etc.)
└── ...
public/
├── projects/         # Project screenshots/mockups
└── resume.pdf        # Your professional resume (PLACE YOUR PDF HERE)
```

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd virendra-shilpkar-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📝 Customization

### 1. Update Personal Information
Edit the files in `src/data/` to update your:
- **Experience:** `experience.ts`
- **Projects:** `projects.ts`
- **Skills:** `skills.ts`
- **Social Links:** `social.ts`

### 2. Add Your Resume
Place your actual resume PDF in `public/resume.pdf`. The "Download Resume" buttons throughout the site are configured to link to this path.

### 3. Contact Form
The contact form in `src/components/Contact.tsx` is currently set up with a simulation. To make it functional, you can:
- Use **Formspree**: Replace the submission logic with a fetch call to your Formspree endpoint.
- Use **Resend**: Implement a Next.js Server Action with the Resend API.

### 4. Images
Place your project mockups in `public/projects/`. Use the paths in `src/data/projects.ts`.

## 🌐 Deployment

The project is ready for deployment on **Vercel**:
1. Push your code to GitHub.
2. Connect your repository to Vercel.
3. Vercel will automatically detect Next.js and deploy your site.

---

Built with ❤️ for Virendra Shilpkar.
