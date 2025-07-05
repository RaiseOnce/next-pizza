import React from 'react'
import { cn } from '@/lib/utils' // обновлённый путь

interface Props {
  className?: string
}

export const Template: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  return <div className={cn('', className)}>Template</div>
}
