import React from 'react'
import { cn } from '@/lib/utils' // обновлённый путь

interface Props {
  className?: string
}

export const SortPopup: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
        className
      )}
    >
      <b>Сортировка:</b>
      <b className="text-primary">популярное</b>
    </div>
  )
}
