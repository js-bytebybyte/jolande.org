import { Badge } from "@/components/ui/badge";
import { redirect } from 'next/navigation';


const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications",
    excerpt: "Explore the latest trends and best practices in modern web development, including React, Next.js, and TypeScript.",
    date: "2 days ago",
    readTime: "5 min read",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: 2,
    title: "The Art of Clean Code",
    excerpt: "Learn how to write maintainable, readable, and efficient code that your future self and team will thank you for.",
    date: "1 week ago",
    readTime: "8 min read",
    tags: ["JavaScript", "Best Practices", "Clean Code"],
  },
  {
    id: 3,
    title: "Database Design Fundamentals",
    excerpt: "Understanding the principles of database design, normalization, and how to create efficient data structures.",
    date: "2 weeks ago",
    readTime: "12 min read",
    tags: ["Database", "SQL", "Design"],
  },
];

export default function Home() {
  redirect ('/about');

  // return (
  //   <div className="space-y-8">
  //     <header className="mb-12">
  //       <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
  //       <p className="text-lg text-muted-foreground">
  //         Thoughts on development, design, and technology
  //       </p>
  //     </header>

  //     <div className="space-y-8">
  //       {blogPosts.map((post) => (
  //         <article key={post.id} className="border-b pb-8 last:border-b-0">
  //           <div className="mb-4">
  //             <h2 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors cursor-pointer">
  //               {post.title}
  //             </h2>
  //             <div className="flex items-center text-sm text-muted-foreground mb-3">
  //               <time>{post.date}</time>
  //               <span className="mx-2">•</span>
  //               <span>{post.readTime}</span>
  //             </div>
  //           </div>

  //           <p className="text-muted-foreground mb-4 leading-relaxed">
  //             {post.excerpt}
  //           </p>

  //           <div className="flex flex-wrap gap-2">
  //             {post.tags.map((tag) => (
  //               <Badge key={tag} variant="secondary" className="text-xs">
  //                 {tag}
  //               </Badge>
  //             ))}
  //           </div>
  //         </article>
  //       ))}
  //     </div>
  //   </div>
  // );
}
