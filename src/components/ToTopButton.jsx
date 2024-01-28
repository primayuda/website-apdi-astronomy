
import { ArrowUpCircle } from "lucide-react";
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// <!-- Bottom-Right Corner -->
export default function ToTopButton() {
  return (
    <div 
    className="fixed bottom-10 right-10 z-50"
    >
    <button 
      className="opacity-70"
      onClick={scrollToTop}
    >
    <ArrowUpCircle />
    </button>
    </div>
  )
}
