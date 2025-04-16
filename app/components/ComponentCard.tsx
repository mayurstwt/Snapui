import React from 'react';
import { Code2, Eye } from 'lucide-react';

interface ComponentCardProps {
  title: string;
  description: string;
  image: string;
  previewUrl: string;
  sourceUrl: string;
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  description,
  image,
  previewUrl,
  sourceUrl,
}) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm border border-gray-800/30 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl text-white font-semibold mb-2">{title}</h3>
        <p className="text-neutral-100 mb-4">{description}</p>
        
        <div className="flex flex-col md:flex-row gap-3">
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 p-2 bg-purple-600 text-white text-lg font-medium rounded-lg hover:bg-purple-700 transition-colors shadow-lg"
          >
            <Eye className="w-4 h-4" />
            Live Preview
          </a>

          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 p-2 bg-transparent text-purple-200 border-2 border-purple-400 text-lg font-medium rounded-lg hover:bg-purple-800 hover:bg-opacity-30 transition-colors"
          >
            <Code2 className="w-4 h-4" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ComponentCard;