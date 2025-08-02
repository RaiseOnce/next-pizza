import { cn } from '@/lib/utils'
import { Container } from './container'
import React from 'react'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { SearchInput } from './search-input'

type Props = {
  className?: string
}

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="text-2xl uppercase font-black">Next Pizza</div>
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline">Войти</Button>
          <div>
            <Button className="group relative">
              <b>520 р</b>
              <span className="h-full w-[1px] bg-white/30 mx-3"></span>
              <div className="flex gap-2">
                <ShoppingCart />
                <b>3</b>
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
