# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Configuration & Customization

### Centralized Configuration File

This project includes a centralized configuration file located at `src/config/app-config.ts` that allows you to easily manage all content, URLs, and settings throughout the application.

#### What You Can Configure:

1. **General Settings**
   - App name, version, and description
   - Meta tags and SEO settings

2. **URLs & Links**
   - Chrome Web Store URL
   - Social media links
   - Privacy policy, terms of service, support links
   - All navigation and footer links

3. **Hero Section**
   - Badge text
   - Title and gradient text
   - Description
   - Stats (rating, privacy, achievements)
   - CTA button text and URLs

4. **Navigation & Footer**
   - Complete control over all menu items
   - Footer links and descriptions
   - Social media icons and links

5. **Call-to-Action Section**
   - Title, description, and stats
   - Button text and URLs

6. **Privacy Policy Content**
   - All sections and text content
   - Contact information
   - Data collection details
   - Permissions explanations

#### How to Use:

1. Open `src/config/app-config.ts`
2. Edit any value you want to change
3. Save the file - changes will be reflected across the entire app

**Example:**
```typescript
import APP_CONFIG from '@/config/app-config';

// Access configuration values
const storeUrl = APP_CONFIG.urls.chromeWebStore;
const heroTitle = APP_CONFIG.hero.title;
const privacyText = APP_CONFIG.privacyPolicy.introduction.text;
```

#### Benefits:

- ✅ Single source of truth for all content
- ✅ Easy to maintain and update
- ✅ No need to search through multiple files
- ✅ Consistent content across pages
- ✅ Simple to update URLs or text

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
