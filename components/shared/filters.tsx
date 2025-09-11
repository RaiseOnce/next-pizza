'use client'

import React from 'react'
import { cn } from '@/lib/utils' // обновлённый путь
import { FilterCheckbox } from './filter-checkbox'
import { Title } from './title'
import { Input } from '../ui/input'
import { RangeSlider } from './range-slider'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { useFilterIngredients } from '@/hooks/useFilterIngredients'

interface Props {
  className?: string
}

export const Filters: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients()

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }))
  return (
    <div className={cn('', className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox name="qwe" text="Новинки" value="2" />
        <FilterCheckbox name="asdasd" text="Можно собирать" value="1" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        name="ingredients"
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  )
}
