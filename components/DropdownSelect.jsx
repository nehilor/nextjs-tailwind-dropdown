import { useState, useRef, useEffect } from 'react'

    export default function DropdownSelect({
      label,
      options,
      onChange,
      isSearchable = false
    }) {
      const [isOpen, setIsOpen] = useState(false)
      const [selected, setSelected] = useState(null)
      const [searchTerm, setSearchTerm] = useState('')
      const dropdownRef = useRef(null)

      const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )

      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false)
        }
      }

      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
      }, [])

      const handleSelect = (option) => {
        setSelected(option)
        onChange(option.value)  // Pass the value to the parent
        setIsOpen(false)
      }

      return (
        <div className="relative w-64" ref={dropdownRef}>
          <div
            className="flex items-center justify-between p-2 border rounded cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{selected ? selected.label : label}</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg">
              {isSearchable && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 border-b"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              )}
              <ul className="max-h-48 overflow-y-auto">
                {filteredOptions.map((option) => (
                  <li
                    key={option.value}
                    className={`p-2 cursor-pointer hover:bg-[#9fc3f870] ${
                      selected?.value === option.value
                        ? 'bg-[#0d6efd] text-white'
                        : ''
                    }`}
                    onClick={() => handleSelect(option)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    }
