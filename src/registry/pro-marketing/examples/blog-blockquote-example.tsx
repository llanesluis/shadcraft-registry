import { BlogBlockquote } from "../components/blog-blockquote";

export function BlogBlockquoteExample() {
  return (
    <div className="flex flex-col gap-4">
      <BlogBlockquote
        quote="AI isn’t here to replace how we work, it’s here to remove the friction. The real advantage comes when teams spend less time on busywork and more time on the decisions that matter."
        authorName="Sophie Tan"
        authorImageUrl="https://github.com/shadcn.png"
        date="4 Sept, 2025"
      />

      <BlogBlockquote
        quote="AI isn’t here to replace how we work, it’s here to remove the friction. The real advantage comes when teams spend less time on busywork and more time on the decisions that matter."
        showAuthor={false}
      />

      <BlogBlockquote
        quote="AI isn’t here to replace how we work, it’s here to remove the friction. The real advantage comes when teams spend less time on busywork and more time on the decisions that matter."
        authorName="Sophie Tan"
        date="4 Sept, 2025"
        authorImageUrl="https://github.com/shadcn.png"
        showQuoteIcons={false}
      />
    </div>
  );
}
