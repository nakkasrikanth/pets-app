# PROMPTS.md

1. Build a React + TypeScript pet gallery app. Fetch data from GET https://eulerity-hackathon.appspot.com/pets using the native fetch API. The API returns objects with {title, description, url, created} fields. Display images in a responsive grid: 1 column on mobile, 2 on tablet, 4 on desktop using styled-components.

2. Create a custom hook usePets that handles loading, error, and empty states explicitly. It should fetch from the pets API and return { pets, loading, error }.

3. Set up a React Context for global selection state. Selection must persist across route changes — navigating to a /pets/:id detail view and back should not clear the selected items.

4. Add image selection with checkboxes. Show a persistent toolbar displaying count of selected items, estimated total file size, a Download Selected button, Select All, and Clear Selection controls.

5. Add sort options: Name A→Z, Name Z→A, Date Newest First, Date Oldest First. Sort should apply to the filtered result set.

6. Add a search bar that filters the displayed pets by title or description in real time. Filtering should be case-insensitive.

7. Implement pagination for the image gallery. Show a fixed number of items per page with Previous/Next controls and a page indicator.

8. Set up react-router-dom with three routes: / for the gallery, /pets/:id for the detail view using index as id since the API has no id field, and /about for an About Me page. The detail view should show the full image, title, description, and creation date.

9. Improve the visual design using styled-components with better typography, card hover states, a sticky header, and a polished selection toolbar. Ensure full mobile responsiveness.
