'use client';
import React from 'react'

export default function SelectInput({
    name,
    value,
    handleChange
}) {
  return (
    <div>
            <label className="block text-gray-600">Type of Quota</label>
            <select
              name={name}
              value={value}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            >
              <option value="">Please select quota</option>
              <option value="General">General</option>
              <option value="SC/ST">SC/ST</option>
              <option value="OBC">OBC</option>
            </select>
          </div>
  )
}
