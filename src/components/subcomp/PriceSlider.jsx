import React from 'react'

export default function priceSlider() {
  return (
    <div>
      <label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Min-max range</label>
    <input id="minmax-range" type="range" min="0" max="10" value="5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>
    </div>
  )
}
