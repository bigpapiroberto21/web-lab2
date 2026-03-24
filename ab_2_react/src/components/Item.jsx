import React from 'react';

export default function Item({ icon, children }) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-black">
        {icon && <img src={icon} alt="icon" className="w-full h-full object-cover" />}
      </div>
      <div className="flex-1 text-sm">
        {children}
      </div>
    </div>
  );
}