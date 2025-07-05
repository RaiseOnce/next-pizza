import { Container } from '@/components/shared/container'
import { TopBar } from '@/components/shared/top-bar'

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <header className="text-2xl uppercase font-black">Все пиццы</header>
        <TopBar />
      </Container>
    </>
  )
}
