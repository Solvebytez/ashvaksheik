/* eslint-disable @typescript-eslint/no-explicit-any */

function Inline({ children }: { children: any[] }) {
  return (
    <>
      {(children || []).map((child: any, childIndex: number) => {
        if (child?.type === "link" && child.url) {
          return (
            <a
              key={childIndex}
              href={child.url}
              className="underline"
              rel="noopener noreferrer"
            >
              <Inline>{child.children || []}</Inline>
            </a>
          );
        }
        return (
          <span
            key={childIndex}
            style={{
              fontWeight: child?.bold ? "bold" : "normal",
              fontStyle: child?.italic ? "italic" : "normal",
            }}
          >
            {child?.text}
          </span>
        );
      })}
    </>
  );
}

const RenderContent = ({ content }: { content: any[] }) => {
  return (
    <div className="space-y-4">
      {(content || []).map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index}>
                <Inline>{block.children || []}</Inline>
              </p>
            );

          case "heading": {
            const level = Math.min(Math.max(Number(block.level) || 2, 2), 4);
            const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
            return (
              <HeadingTag key={index} className="text-lg font-semibold">
                <Inline>{block.children || []}</Inline>
              </HeadingTag>
            );
          }

          case "list": {
            const Tag = block.format === "ordered" ? "ol" : "ul";
            return (
              <Tag
                key={index}
                className={
                  block.format === "ordered"
                    ? "list-decimal space-y-2 pl-6"
                    : "list-disc space-y-2 pl-6"
                }
              >
                {(block.children || []).map((item: any, itemIndex: number) => (
                  <li key={itemIndex}>
                    <Inline>{item.children || []}</Inline>
                  </li>
                ))}
              </Tag>
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
