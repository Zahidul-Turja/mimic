# Mimic - A multipurpose Web Application

A multi-purpose web application built with **Next.js** to showcase diverse features and functionalities, including e-commerce, media galleries, Harry Potter content, and more. This project demonstrates my skills in modular design, dynamic routing, API integration, and responsive UI development.

## 🚀 Features

- **E-Commerce Section**:

  - Authentication using JWT token
  - Product listing, product details, and navigation.
  - Dynamic routing for individual products.
  - Search product
  - Filter by category
  - Pagination
  - Add to cart functionality

- **Harry Potter World**:

  - Explore books, movies, houses, and spells.
  - Dynamic pages for specific content like individual books or movies.

- **Meal Categories**:

  - Browse recipes by category.
  - View detailed recipe pages.
  - Filter meal/recipe by category

- **Media Gallery**:

  - Photo and video galleries with categories.
  - Search photots and videos with prompt

- **Quotes Section**:
  - Display and explore inspiring quotes.

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API Integration**: Custom services for fetching data from APIs.

  - Dummy JSON ([Documentation](https://dummyjson.com/))
  - Pexels ([Documentation](https://www.pexels.com/api/documentation/))
  - Food ([API](https://www.themealdb.com/api.php))
  - Harry Potter World
    - Characters ([Documentation](https://hp-api.onrender.com/))
    - Harry Potter Movies ([Documentation](https://api.potterdb.com/v1/movies))
    - Houses and Spells ([Documentation](https://github.com/fedeperin/potterapi?tab=readme-ov-file))

<!-- ## 📂 Directory Structure

```markdown
├── Zahidul-Turja-Mimic/
│ ├── README.md
│ ├── jsconfig.json
│ ├── next.config.mjs
│ ├── package.json
│ ├── postcss.config.mjs
│ ├── tailwind.config.js
│ ├── .eslintrc.json
│ ├── .prettierrc
│ ├── app/
│ │ ├── layout.js
│ │ ├── page.js
│ │ ├── \_components/
│ │ │ ├── BoundingBox.js
│ │ │ ├── CategoryItem.js
│ │ │ ├── Header.js
│ │ │ ├── Navigation.js
│ │ │ ├── Row.js
│ │ │ ├── Sidebar.js
│ │ │ ├── Spinner.js
│ │ │ ├── ecomm/
│ │ │ │ ├── AuthButtons.js
│ │ │ │ ├── HeaderSection.js
│ │ │ │ ├── Login.js
│ │ │ │ ├── NavBar.js
│ │ │ │ ├── NavProfileInfo.js
│ │ │ │ ├── ProductHighlightsRow.js
│ │ │ │ ├── ProductImages.js
│ │ │ │ ├── ProductPage.js
│ │ │ │ ├── ProductsList.js
│ │ │ │ ├── Reviews.js
│ │ │ │ └── SearchInput.js
│ │ │ ├── harry-potter/
│ │ │ │ ├── BooksPage.js
│ │ │ │ ├── CharacterPage.js
│ │ │ │ ├── Filters.js
│ │ │ │ ├── HarryPotterLayout.js
│ │ │ │ ├── HousePage.js
│ │ │ │ ├── HousesContainer.js
│ │ │ │ ├── ItemCard.js
│ │ │ │ ├── MoviesPage.js
│ │ │ │ ├── SpellsContainer-v1.js
│ │ │ │ ├── SpellsContainer.js
│ │ │ │ └── SpellsPage.js
│ │ │ ├── meal/
│ │ │ │ └── MealCategoryPage.js
│ │ │ ├── media-gallery/
│ │ │ │ ├── categories.js
│ │ │ │ ├── gallery.js
│ │ │ │ ├── photos.js
│ │ │ │ └── videos.js
│ │ │ └── quotes/
│ │ │ └── QuotesPage.js
│ │ ├── \_lib/
│ │ │ ├── categories.js
│ │ │ ├── dummy-data.js
│ │ │ ├── ecomm-services.js
│ │ │ ├── harry-potter-services.js
│ │ │ ├── meal-services.js
│ │ │ ├── pexels-api.js
│ │ │ └── quotes-services.js
│ │ ├── \_styles/
│ │ │ └── globals.css
│ │ ├── \_utils/
│ │ │ ├── constants.js
│ │ │ └── fonts/
│ │ │ └── fonts.js
│ │ ├── ecomm/
│ │ │ ├── page.js
│ │ │ └── products/
│ │ │ ├── page.js
│ │ │ └── [id]/
│ │ │ └── page.js
│ │ ├── food/
│ │ │ ├── page.js
│ │ │ └── [category]/
│ │ │ ├── page.js
│ │ │ └── [recipeId]/
│ │ │ └── page.js
│ │ ├── harry-potter-world/
│ │ │ ├── page.js
│ │ │ ├── books/
│ │ │ │ ├── page.js
│ │ │ │ └── [slug]/
│ │ │ │ └── page.js
│ │ │ ├── houses/
│ │ │ │ └── page.js
│ │ │ ├── movies/
│ │ │ │ ├── page.js
│ │ │ │ └── [slug]/
│ │ │ │ └── page.js
│ │ │ └── spells/
│ │ │ └── page.js
│ │ ├── media-gallery/
│ │ │ └── page.js
│ │ ├── movies/
│ │ │ └── page.js
│ │ ├── quotes/
│ │ │ └── page.js
│ │ └── social/
│ │ └── page.js
│ └── public/
│ ├── data.js
│ ├── avatar/
│ │ └── vecteezy_user-profile-avatar_11209565.eps
│ ├── ecomm/
│ └── harry-potter-world/
``` -->

## ⚙️ Installation and Setup

1. **Clone the repository**:

```
git clone https://github.com/your-username/Zahidul-Turja-Mimic.git
cd Zahidul-Turja-Mimic
```

2. **Install dependencies**:

```
npm install
```

3. **Run the development server**:

```
npm run dev
```

4. **Open the application in your browser**:

```
http://localhost:3000/
```

## 🌟 Highlights

- **Dynamic Routing**:
  Pages dynamically render based on route parameters (e.g., `/ecomm/products/[id]`).

- **Reusable Components**:
  Modular design ensures scalability and maintainability.

- **Responsive Design**:
  Fully responsive UI built with Tailwind CSS.

- **API Integration**:
  Data fetched dynamically using service files in`_lib/`.

## 📈 Future Enhancements

- Add authentication and user profiles.
- Integrate a backend (e.g., Django) for real-time data and user management.
- Implement unit and integration tests.
- Optimize for SEO and performance.

## 🖥️ Live Demo

**Mimic** in now live. Please checkout [mimic-plum.vercel.app](https://mimic-plum.vercel.app/)
