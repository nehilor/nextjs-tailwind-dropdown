import DropdownSelect from '../components/DropdownSelect'
    import { useState } from 'react'

    export default function Home() {
      const colorOptions = [
        { value: 'red', label: 'Red' },
        { value: 'green', label: 'Green' },
        { value: 'blue', label: 'Blue' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'purple', label: 'Purple' },
        { value: 'orange', label: 'Orange' },
        { value: 'pink', label: 'Pink' },
        { value: 'teal', label: 'Teal' },
        { value: 'indigo', label: 'Indigo' },
        { value: 'gray', label: 'Gray' }
      ]

      const [selectedColor, setSelectedColor] = useState(null)

      const handleColorChange = (value) => {
        const selected = colorOptions.find(option => option.value === value)
        setSelectedColor(selected)
      }

      return (
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Dropdown Select Component Demo
            </h1>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Color Selector</h2>
                <DropdownSelect
                  label="Choose a color"
                  options={colorOptions}
                  onChange={handleColorChange}
                  isSearchable
                />
              </div>

              {selectedColor && (
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-4">Selected Color</h2>
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-8 h-8 rounded-full border border-gray-200"
                      style={{ backgroundColor: selectedColor.value }}
                    ></div>
                    <span className="text-gray-700">
                      {selectedColor.label} ({selectedColor.value})
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }
