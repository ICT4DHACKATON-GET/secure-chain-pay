
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SecurityFeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const SecurityFeature = ({ icon, title, description, className }: SecurityFeatureProps) => {
  return (
    <div className={cn("flex flex-col items-center md:items-start p-6 transition-all bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md", className)}>
      <div className="p-3 bg-brand-50 rounded-full text-brand-600">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default SecurityFeature;
