

```markdown
# Slot Booking System

This is a slot booking system built with Node.js and MySQL. The system allows users to book slots for specific dates and time ranges.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/slot-booking-system.git
   ```

2. Install the dependencies:

   ```
   cd slot-booking-system
   npm install
   ```

3. Set up the database:

   - Create a MySQL database.
   - Update the MySQL connection details in the `config/config.js` file.

4. Run the application:

   ```
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

## Usage

- Use a REST client or tools like Postman to interact with the API.
- The following endpoints are available:

  - `POST /slots`: Create a new slot. Requires the following parameters:
    - `date`: The date of the slot (in YYYY-MM-DD format).
    - `startSlot`: The start time of the slot (in HH:MM format).
    - `endSlot`: The end time of the slot (in HH:MM format).
