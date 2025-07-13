import { Container } from '@/components/shared/container'
import { Filters } from '@/components/shared/filters'
import ProductCard from '@/components/shared/product-card'
import { ProductsGroupList } from '@/components/shared/products-group-list'
import { Title } from '@/components/shared/title'
import { TopBar } from '@/components/shared/top-bar'

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
        <TopBar />

        <Container className="mt-10 pb-14">
          <div className="flex gap-[80px]">
            <div className="w-[250px]">
              <Filters />
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-16">
                <ProductsGroupList
                  title="Пиццы"
                  products={[
                    {
                      id: 1,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
                      price: 550,
                      products: [{ price: 550 }],
                    },
                    {
                      id: 1,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
                      price: 550,
                      products: [{ price: 550 }],
                    },
                    {
                      id: 1,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
                      price: 550,
                      products: [{ price: 550 }],
                    },
                    {
                      id: 1,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
                      price: 550,
                      products: [{ price: 550 }],
                    },
                    {
                      id: 1,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
                      price: 550,
                      products: [{ price: 550 }],
                    },
                    {
                      id: 1,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
                      price: 550,
                      products: [{ price: 550 }],
                    },
                  ]}
                  categoryId={1}
                />
                <ProductsGroupList
                  title="Завтрак"
                  products={[
                    {
                      id: 1,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
                      price: 550,
                      products: [{ price: 550 }],
                    },
                    {
                      id: 1,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
                      price: 550,
                      products: [{ price: 550 }],
                    },
                    {
                      id: 1,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
                      price: 550,
                      products: [{ price: 550 }],
                    },
                    {
                      id: 1,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
                      price: 550,
                      products: [{ price: 550 }],
                    },
                    {
                      id: 1,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
                      price: 550,
                      products: [{ price: 550 }],
                    },
                    {
                      id: 1,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
                      price: 550,
                      products: [{ price: 550 }],
                    },
                  ]}
                  categoryId={1}
                />
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  )
}
