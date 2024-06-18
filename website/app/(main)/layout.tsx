import Navbar from './components/Navbar'

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
