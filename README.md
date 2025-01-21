# Dropdown Select Component

    A reusable, accessible dropdown select component built with React and TailwindCSS.

    ## Features

    - Search functionality
    - Keyboard navigation
    - Customizable styling
    - Controlled open/close state
    - TypeScript support (optional)
    - TailwindCSS integration
    - Responsive design
    - Accessible markup

    ## Installation

    1. Clone the repository
    2. Install dependencies:
       ```bash
       npm install
       ```
    3. Run the development server:
       ```bash
       npm run dev
       ```

    ## Usage

    ```jsx
    import DropdownSelect from './components/DropdownSelect'

    const options = [
      { value: 'red', label: 'Red' },
      { value: 'green', label: 'Green' },
      { value: 'blue', label: 'Blue' }
    ]

    function MyComponent() {
      return (
        <DropdownSelect
          label="Select a color"
          options={options}
          onChange={(value) => console.log(value)}
          isSearchable
        />
      )
    }
    ```

    ## Props

    | Prop        | Type       | Required | Description                          |
    |-------------|------------|----------|--------------------------------------|
    | label       | string     | Yes      | Placeholder text when no option is selected |
    | options     | array      | Yes      | Array of options { value, label }    |
    | onChange    | function   | Yes      | Callback when selection changes      |
    | isSearchable| boolean    | No       | Enables search functionality         |

    ## Development

    - Start development server:
      ```bash
      npm run dev
      ```

    - Build for production:
      ```bash
      npm run build
      ```

    - Run tests:
      ```bash
      npm test
      ```

    ## License

    MIT
