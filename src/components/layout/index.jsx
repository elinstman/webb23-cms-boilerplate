import Header from "@/components/nestable/Header";
import Footer from "@/components/nestable/Footer";


//Uses config set global components for the layout
export default function Layout({ config, children }) {
    //Create at least a header and footer component
    //Use console.log to determine blok object structure if unsure...
    return (
        <>
            <Header blok={config} />
            <main className="container mx-auto px-4">{children}</main>
            <Footer blok={config} />
    </>
    );
}