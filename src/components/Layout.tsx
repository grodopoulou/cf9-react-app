import Header from "./Header.tsx";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
    return (
        <>
            <Header/>
            <main className="container mx-auto min-h-[95vh]">{children}</main>
            <Footer/>
        </>
    )
}

export default Layout;