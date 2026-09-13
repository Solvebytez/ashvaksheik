/* eslint-disable @typescript-eslint/no-explicit-any */

const RenderContent = ({ content }: { content: any[] }) => {
  return (
    <div>
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index}>
                {block.children.map((child: any, childIndex: number) => (
                  <span
                    key={childIndex}
                    style={{
                      fontWeight: child.bold ? "bold" : "normal",
                      fontStyle: child.italic ? "italic" : "normal",
                    }}
                  >
                    {child.text}
                  </span>
                ))}
              </p>
            );

          case "heading": {
            const level = Math.min(Math.max(Number(block.level) || 2, 2), 4);
            const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
            return (
              <HeadingTag key={index} className="text-md">
                {block.children.map((child: any, childIndex: number) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </HeadingTag>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
};

export default RenderContent;
