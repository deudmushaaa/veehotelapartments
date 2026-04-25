import { Gallery } from "@/components/Gallery";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col items-center text-center">
              <Breadcrumbs items={[{ name: "Gallery" }]} />
              <h1 className="text-5xl md:text-7xl font-serif mb-6">Complete Gallery</h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto uppercase tracking-widest text-xs">
                Vee Serviced Apartments & Hotel — Every angle of comfort
            </p>
        </div>
      </div>
    </div>
      <Gallery /> {/* No limit here means show all 70+ */}
      <Footer />
    </main>
  );
}
