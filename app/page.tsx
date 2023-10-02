import { UserForm } from '@/components/UserForm'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="p-24 h-screen justify-center flex flex-col">
      <section className='py-12 flex flex-col items-center text-center gap-8'>
        <h1 className='text-4xl font-bold'>Testing out shadcn/UI</h1>
        <p className='text-2xl text-muted-foreground'>Test for light & dark mode using next-theme & shadcnUI</p>
        <div className='flex gap-6'>
          <Button>Learn More...</Button>
          <Button>Enroll Now</Button>
        </div>
        <UserForm/>
      </section>
    </main>
  )
}
