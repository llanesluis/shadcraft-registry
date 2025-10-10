import {
  BlogImage,
  BlogImageAttribution,
  BlogImageCaption,
  BlogImageImage,
} from "@/registry/pro-marketing/components/blog-image";

export function BlogImageExample() {
  return (
    <div className="flex flex-col gap-8 px-4 py-8 lg:px-8">
      <BlogImage>
        <BlogImageImage>
          <img src="https://images.unsplash.com/photo-1749371930398-c5e7f03f1375?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </BlogImageImage>
        <BlogImageCaption>
          <BlogImageAttribution
            author="Pawel Czerwinski"
            authorHref="https://unsplash.com/es/@pawel_czerwinski"
            source="Unsplash"
            sourceHref="https://unsplash.com/es/fotos/imagen-abstracta-de-papel-apilado-y-curvo-dlVvDJmqf-Q"
          />
        </BlogImageCaption>
      </BlogImage>

      <div className="grid gap-8 md:grid-cols-2">
        <BlogImage>
          <BlogImageImage>
            <img src="https://images.unsplash.com/photo-1749371930398-c5e7f03f1375?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </BlogImageImage>

          <BlogImageCaption>Custom caption</BlogImageCaption>
        </BlogImage>

        <BlogImage>
          <BlogImageImage>
            <img src="https://images.unsplash.com/photo-1749371930398-c5e7f03f1375?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </BlogImageImage>
        </BlogImage>
      </div>
    </div>
  );
}
