import { useState } from 'react';
import React from 'react';

interface FileObject {
  id: number;
  name: string;
  children?: FileObject[];
}

export function FileItem({
  item,
  isChild,
}: {
  item: FileObject;
  isChild?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ paddingLeft: isChild ? '10px' : 0 }}>
      <div style={{ cursor: 'pointer' }} onClick={() => setOpen(!open)}>
        {item?.name}
        {item.children && (
          <p
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s',
              transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
              marginLeft: '4px',
            }}
          >
            {'▶️'}
          </p>
        )}
      </div>

      {open &&
        item?.children?.map((item) => {
          return (
            <div style={{ position: 'relative' }}>
              <FileItem isChild item={item} />
              <div className="childern-container"></div>
            </div>
          );
        })}
    </div>
  );
}

export default function FileExplorer({ data }: { data: FileObject[] }) {
  return (
    <div>
      {data.map((item) => (
        <FileItem item={item} />
      ))}
    </div>
  );
}
