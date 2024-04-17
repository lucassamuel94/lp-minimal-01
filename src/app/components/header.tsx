import { Header } from '@/components/header'

export function Hero() {
  return (
    <div className='flex h-svh flex-col justify-between bg-neutral-600'>
      <Header />

      <div className='container pb-20 lg:pb-40'>
        <h2 className='max-w-3xl text-4xl font-light text-neutral-50 lg:text-6xl'>
          Cuidar de quem você ama é nossa{' '}
          <strong className='font-medium'>prioridade</strong>.
        </h2>
      </div>
    </div>
  )
}
