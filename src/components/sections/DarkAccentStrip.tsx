import { CheckCircle } from "lucide-react";

const highlights = [
  "OKNA",
  "DRZWI", 
  "BRAMY GARAŻOWE",
  "FASADY",
  "ROLETY | ŻALUZJE",
];

export function DarkAccentStrip() {
  return (
    <div className="bg-graphite py-8 relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {highlights.map((item, index) => (
            <span key={item} className="flex items-center gap-2">
              <span className="text-background/90 font-heading font-medium text-sm tracking-wider">
                {item}
              </span>
              {index < highlights.length - 1 && (
                <span className="text-primary ml-6 hidden md:inline">•</span>
              )}
            </span>
          ))}
        </div>
        
        {/* Producer line */}
        <p className="text-center text-primary text-xs font-medium tracking-widest mt-4 uppercase">
          Producent ślusarki aluminiowej
        </p>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </div>
  );
}
