import { FileText, Globe, BookOpen, FileCheck, Download, ExternalLink } from "lucide-react";
import { useState } from "react";

interface AdmissionAction {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  type: "download" | "link";
  url: string;
  filename?: string;
}

const admissionActions: AdmissionAction[] = [
  {
    id: "online-application",
    label: "Apply Online",
    icon: Globe,
    type: "link",
    url: "https://admissions.ru.ac.ke/",
  },
  {
    id: "admission-process",
    label: "Admission Process",
    icon: FileCheck,
    type: "link",
    url: "/admission/process",
  },
  {
    id: "credit-transfer",
    label: "Credit Transfer Form",
    icon: FileText,
    type: "download",
    url: "/api/downloads/credit-transfer-form.pdf",
    filename: "credit-transfer-form.pdf",
  },
  {
    id: "ru-brochure",
    label: "RU Brochure",
    icon: BookOpen,
    type: "download",
    url: "/api/downloads/ru-brochure.pdf",
    filename: "ru-brochure.pdf",
  },
  {
    id: "application-form",
    label: "Application Form",
    icon: FileText,
    type: "download",
    url: "/api/downloads/application-form.pdf",
    filename: "application-form.pdf",
  },
];

export function AdmissionActions() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleAction = (action: AdmissionAction) => {
    setActiveId(action.id);
    
    if (action.type === "download") {
      // Create a temporary anchor element to trigger download
      const link = document.createElement("a");
      link.href = action.url;
      link.download = action.filename || action.url.split("/").pop() || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Reset active state after a short delay
      setTimeout(() => setActiveId(null), 300);
    } else {
      // For links, open in new tab if external URL, otherwise navigate
      setTimeout(() => {
        if (action.url.startsWith('http://') || action.url.startsWith('https://')) {
          window.open(action.url, '_blank', 'noopener,noreferrer');
        } else {
          window.location.href = action.url;
        }
      }, 200);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-sm border border-[var(--color-border-secondary)] p-4 md:p-5">
        <h3 className="text-xl md:text-2xl font-serif font-semibold text-[var(--color-text-primary)] mb-4">
          Admission Resources
        </h3>
        <div className="space-y-2">
          {admissionActions.map((action) => {
            const Icon = action.icon;
            const isActive = activeId === action.id;
            
            return (
              <button
                key={action.id}
                onClick={() => handleAction(action)}
                className={`
                  w-full group
                  flex items-center gap-4 p-4
                  rounded-lg transition-all duration-200
                  text-left
                  ${
                    isActive
                      ? "bg-[var(--color-stanford-red)] text-white shadow-md"
                      : "bg-transparent hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]"
                  }
                `}
                onMouseEnter={() => !isActive && setActiveId(null)}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <Icon className={`
                    w-5 h-5 transition-colors duration-200
                    ${isActive ? "text-white" : "text-[var(--color-stanford-red)]"}
                  `} />
                </div>
                
                {/* Label */}
                <span className={`
                  flex-1
                  font-medium
                  text-base
                  transition-colors duration-200
                  ${isActive ? "text-white" : "text-[var(--color-text-primary)]"}
                `}>
                  {action.label}
                </span>
                
                {/* Action indicator */}
                <div className="flex-shrink-0">
                  {action.type === "download" ? (
                    <Download className={`
                      w-4 h-4 transition-colors duration-200
                      ${isActive ? "text-white" : "text-[var(--color-stanford-red)]"}
                    `} />
                  ) : (
                    <ExternalLink className={`
                      w-4 h-4 transition-colors duration-200
                      ${isActive ? "text-white" : "text-[var(--color-stanford-red)]"}
                    `} />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

