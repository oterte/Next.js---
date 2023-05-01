import Link from 'next/link'

export default function SubLayout({children}) {
  return (
    <div>
      <h1><Link href="/"><p>Home로</p></Link></h1>
      {children}
    </div>
  )
}
