/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react';

const RenderContent = ({ content }: { content: any[] }) => {

    console.log("content",content)

  return (
    <div>
      {content.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index}>
                {block.children.map((child: any, childIndex: number) => (
                  <span
                    key={childIndex}
                    style={{
                      fontWeight: child.bold ? 'bold' : 'normal',
                      fontStyle: child.italic ? 'italic' : 'normal',
                    }}
                  >
                    {child.text}
                  </span>
                ))}
              </p>
            );

          case 'heading':
            const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
            return (
              <HeadingTag key={index} className='text-md'>
                {block.children.map((child: any, childIndex: number) => (
                  <span
                    key={childIndex}
                    style={{
                      fontWeight: child.bold ? 'normal' : 'normal',
                      fontStyle: child.italic ? 'italic' : 'normal',
                    }}
                  >
                    {child.text}
                  </span>
                ))}
              </HeadingTag>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default RenderContent;
