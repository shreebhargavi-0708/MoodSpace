import React from 'react';

export default function WashiTape({
  variant = 'peach',
  pattern = 'clean',
  position = 'center',
  rotation = -1.5,
  width = 90
}) {
  const positionClass =
    position === 'left' ? 'tape-left' : position === 'right' ? 'tape-right' : '';

  const patternClass =
    pattern === 'striped' ? 'tape-striped' : pattern === 'dots' ? 'tape-dots' : '';

  const variantClass = `tape-${variant}`;

  return (
    <div
      className={`washi-tape ${variantClass} ${positionClass} ${patternClass}`}
      style={{
        width: `${width}px`,
        transform:
          position === 'center'
            ? `translateX(-50%) rotate(${rotation}deg)`
            : `rotate(${rotation}deg)`
      }}
      aria-hidden="true"
    />
  );
}
