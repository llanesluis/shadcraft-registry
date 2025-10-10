import {
  BlogBlockquote,
  BlogBlockquoteAuthor,
  BlogBlockquoteText,
} from "@/registry/pro-marketing/components/blog-blockquote";

export function BlogBlockquoteExample() {
  return (
    <div className="flex flex-col gap-4 px-4 py-8 lg:px-8">
      <BlogBlockquote>
        <BlogBlockquoteText>
          AI isn’t here to replace how we work, it’s here to remove the friction. The real advantage
          comes when teams spend less time on busywork and more time on the decisions that matter.
        </BlogBlockquoteText>
        <BlogBlockquoteAuthor
          name="Sophie Tan"
          imageUrl="https://github.com/shadcn.png"
          date="4 Sept, 2025"
        />
      </BlogBlockquote>

      <BlogBlockquote showIcons={false}>
        <BlogBlockquoteText>
          AI isn’t here to replace how we work, it’s here to remove the friction. The real advantage
          comes when teams spend less time on busywork and more time on the decisions that matter.
        </BlogBlockquoteText>
        <BlogBlockquoteAuthor
          name="Sophie Tan"
          imageUrl="https://github.com/shadcn.png"
          date="4 Sept, 2025"
        />
      </BlogBlockquote>

      <BlogBlockquote>
        <BlogBlockquoteText>
          AI isn’t here to replace how we work, it’s here to remove the friction. The real advantage
          comes when teams spend less time on busywork and more time on the decisions that matter.
        </BlogBlockquoteText>
      </BlogBlockquote>
    </div>
  );
}
