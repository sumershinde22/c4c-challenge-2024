## Prerequisites

If you don't have them already, you'll need to install Node.js/NPM and Git:
- Node.js + NPM - install [here](https://nodejs.org/en/download/package-manager) (we highly recommend using at least Node 18.0.0 + NPM 8.6.0)
   - You can choose to install via the command line under "Package Manager", or download an installer under "Prebuilt Installer"
   - Node and NPM are installed together
- Git - install [here](https://git-scm.com/downloads)

## Setup Instructions

1. Clone this repo on to your computer. You can do so with the [desktop app](https://desktop.github.com/), or in a terminal with the following:
2. In a terminal, run `npm install` **at the root of this project** to install the required packages
4. Run `npm run dev` **at the root of this project** to start the app locally
5. Visit `http://localhost:3000` to view the website
    
    4a. The backend will be available at `http://localhost:4000`

## High-Level Overview of the Application

#### 1. **Overview**

The application is a partnership management dashboard that allows users to:
- **View** existing partners and their details.
- **Add** new partners with information like name, description, thumbnail URL, and active status.
- **Edit** existing partners to update their information.
- **Delete** partners to remove them from the system.
- **Search** for partners based on title and active status.

The application is built with a React frontend and an Express backend. Supabase is used as the database for storing partnership information.

#### 2. **Frontend Structure**

The frontend is a React application structured with the following key components:
- **`Dashboard`**: The main view, which includes the list of partners and integrates forms for adding and searching partners.
- **`AddPartnerForm`**: A form component for adding new partners.
- **`SearchForm`**: A form for filtering the list of partners based on search criteria.
- **`PartnerTile`**: A component to display individual partner details and provide options to edit or delete the partner.

#### 3. **Backend Structure**

The backend is an Express server that handles:
- **CRUD Operations**: Routes for creating, reading, updating, and deleting partners.
- **Integration with Supabase**: Supabase is used for persistent data storage.

#### 4. **Data Flow**

- **Fetch Partners**: On loading the `Dashboard`, the frontend sends a `GET` request to fetch all partners.
- **Add Partner**: The `AddPartnerForm` sends a `POST` request with new partner data, and the backend inserts it into the Supabase database.
- **Update Partner**: The `PartnerTile` component, when in edit mode, sends a `PUT` request with updated data.
- **Delete Partner**: The `PartnerTile` component sends a `DELETE` request to remove a partner.
- **Search Partners**: The `SearchForm` filters the partners locally on the frontend based on user input.

## Design Decisions

#### 1. **Frontend Framework**

- **React**: Chosen for its component-based architecture, state management capabilities, and strong community support.
- **Component Structure**: Components like `Dashboard`, `AddPartnerForm`, `SearchForm`, and `PartnerTile` provide a modular and maintainable codebase, making it easy to manage and extend.

#### 2. **State Management**

- **Local State**: Managed with React’s `useState` and `useEffect` hooks for simplicity and ease of use in this project.
- **Prop Drilling**: Used for passing data between components. Considered sufficient for the current scope but could be replaced with Context API or Redux for larger applications.

#### 3. **Backend and Database**

- **Express**: Used for its simplicity and ease of integration with RESTful APIs.
- **Supabase**: Chosen for its simplicity, real-time capabilities, and ease of integration with JavaScript applications.

#### 4. **CRUD Operations**

- **RESTful API**: Provides a clear and scalable way to manage data interactions between the frontend and backend.
- **Supabase Integration**: Direct interaction with the Supabase database using Supabase's JavaScript client.

#### 5. **User Interface**

- **Responsive Design**: Flexbox used for layout to ensure components align and resize properly across different devices.
- **Visual Feedback**: Buttons and form inputs styled to provide intuitive interactions and feedback to users.

#### 6. **Search Functionality**

- **Local Filtering**: Implemented a simple local filtering mechanism for search functionality to keep the user experience fast and responsive.
- **Scalability**: Search filters can be extended to query the backend if the dataset becomes too large for efficient client-side filtering.

## Reflection

### Did You Learn Anything from This Project? If So, How Might You Have Done This Differently Knowing What You Know Now?

**Learnings:**
1. **State Management in React:** Managing state and props efficiently, especially for features like searching, adding, updating, and deleting items.
2. **Backend Integration:** Using Supabase and handling RESTful API interactions for CRUD operations.
3. **UI/UX Design:** Creating a user-friendly and responsive interface, including form handling, validation, and dynamic updates.

**Potential Changes:**
- **Use of State Management Libraries:** Consider using a state management library like Redux or Context API for more complex state management.
- **Backend Abstraction:** If the project scales, consider abstracting backend interactions into a service layer to reduce the complexity in components.
- **Testing:** Implement automated testing (unit and integration tests) to ensure code reliability and easier maintenance.

### What Would You Have Done Differently If You Had More Time?

**Possible Enhancements:**
1. **Authentication and Authorization:** Implement a authentication system, possibly using Supabase's built-in auth.
2. **Pagination:** Add pagination for handling large datasets efficiently.
3. **Search Optimization:** Improve search functionality to include more filters and better searching capabilities.
4. **Error Handling:** Create error handling and user feedback mechanisms throughout the application.
5. **UI Improvements:** Add more styling and possibly integrate a design system like Material-UI or Ant Design for better consistency and usability.

### Did You Run Into Issues During This Project? If So, How Did You Solve or Work Around Them?

**Issues and Solutions:**
1. **Integration Challenges:** Difficulty integrating Supabase with the frontend was resolved by properly configuring the Supabase client and ensuring API routes were correct.
2. **State Management:** Handling state and prop drilling for CRUD operations was challenging. This was managed by structuring the state in the `Dashboard` component and ensuring data was properly passed and updated.
3. **Styling and Layout:** Ensuring the layout was somewhat responsive and visually appealing took a little bit of time to test.

### If you implemented any bonus features, what made you choose them?
1. **Implementing Supabase:** I thought think would be a very key step in making the whole project more whole, as most of the time you don't want to have all the data that you entered into the database be erased as soon as you close the session.
2. **Implementing Modifications:** I thought this would be a good way to increase efficiency of managing the partners, as deleting and then adding all of the information for a specific partner would be much more time consuming than just modifying the specific part of the tile.
3. **Implementing Search:** I thought this would be very useful once there are many partners to the organization, being able to search for a specific one and find its information would be useful. Additionally, having the filter to see which partners are active/inactive would be very useful.
