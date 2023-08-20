import './globals.css'

export const metadata = {
  title: 'Ngitung Weton Jodo - Home',
  description: 'Aplikasi kanggo ngitung weton jodoh.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
