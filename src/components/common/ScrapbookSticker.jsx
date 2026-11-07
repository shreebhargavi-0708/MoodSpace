import React from 'react';

export default function ScrapbookSticker({
  emoji = '✨',
  label = '',
  bgColor = 'var(--paper-white)',
  borderColor = 'var(--border-paper)',
  rotation = 0,
  size = 'md'
}) {
  const sizeMap = {
    sm: { width: 28, height: 28, fontSize: '0.9rem' },
    md: { width: 36, height: 36, fontSize: '1.15rem' },
    lg: { width: 44, height: 44, fontSize: '1.45rem' }
  };

  const { width, height, fontSize } = sizeMap[size] || sizeMap.md;

  return (
    <div
      className="sticker-doodle animate-pop"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgColor,
        border: `1.5px solid ${borderColor}`,
        transform: `rotate(${rotation}deg)`,
        fontSize
      }}
      title={label || 'Scrapbook Sticker'}
    >
      <span>{emoji}</span>
    </div>
  );
}
