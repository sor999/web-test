'use client'

import { cn } from '@/src/utils/cn'
import Image from 'next/image'
import { HexColorPicker } from 'react-colorful'
import { ColorOption } from './types'

interface ColorPickerProps {
  color: string
  colorOptions: ColorOption[]
  isPickerOpen: boolean
  setColor: (color: string) => void
  setPickerOpen: (isPickerOpen: boolean) => void
}

export function ColorPicker({
  color,
  colorOptions,
  isPickerOpen,
  setColor,
  setPickerOpen,
}: ColorPickerProps) {
  return (
    <div className="flex items-center gap-10">
      {colorOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => setColor(option.value)}
          className={cn(
            'h-30 w-30 cursor-pointer rounded-full',
            color === option.value && 'border-blue-dark-hover border-2',
          )}
          style={{ backgroundColor: option.value }}
        />
      ))}

      <button
        onClick={() => setPickerOpen(!isPickerOpen)}
        className="relative flex h-30 w-30 cursor-pointer items-center justify-center rounded-full bg-[#D9D9D9]"
      >
        <Image src="/icons/plus.svg" alt="plus" width={14} height={14} />
        {isPickerOpen && (
          <div className="absolute top-full left-0 z-50 mt-8">
            <HexColorPicker color={color} onChange={setColor} />
          </div>
        )}
      </button>
    </div>
  )
}
