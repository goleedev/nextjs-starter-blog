import Link from "next/link";
import LazyLoad from 'react-lazyload';
import Fade from 'react-reveal/Fade';
import { Layout, Bio, SEO } from "@components/common";
import { getSortedPosts } from "@utils/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="All Posts" />
      <Bio className="my-14" />
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
      <LazyLoad height={100} key={slug}>
        <Fade bottom>
        <article>
          <header className="mb-2">
            <h3 className="mb-2">
              <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                <a className="text-4xl font-bold text-new-red font-display dark:text-new-light-red">
                  {title}
                </a>
              </Link>
            </h3>
            <span className="text-sm text-new-gray dark:text-new-white">{date}</span>
            </header>
          <section>
            <p className="mb-8 text-lg text-new-gray dark:text-new-white">{description}</p>
          </section>
        </article>
        </Fade>    
      </LazyLoad>
      ))}
      </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
