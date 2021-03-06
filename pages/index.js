import Link from "next/link";
import { useState } from "react";
import LazyLoad from 'react-lazyload';
import Fade from 'react-reveal/Fade';
import { Layout, Bio, SEO } from "@components/common";
import { getSortedPosts } from "@utils/posts";

export default function Home({ posts }) {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [isFiltered, setIsFiltered] = useState(true);
  const onCategory = (event) => {
    const {
      target: { id },
    } = event;
    document.getElementById("All").style.fontWeight = "400";
    document.getElementById("TIL").style.fontWeight = "400";
    document.getElementById("Algorithms").style.fontWeight = "400";
    document.getElementById("JS").style.fontWeight = "400";
    document.getElementById("React").style.fontWeight = "400";
    document.getElementById("TypeScript").style.fontWeight = "400";
    document.getElementById("All").classList.remove("text-new-red");
    document.getElementById("All").style = "#252525 dark:#f7f7f7";
    document.getElementById("TIL").style = "#252525 dark:#f7f7f7";
    document.getElementById("Algorithms").style = "#252525 dark:#f7f7f7";
    document.getElementById("JS").style = "#252525 dark:#f7f7f7";
    document.getElementById("React").style = "#252525 dark:#f7f7f7";
    document.getElementById("TypeScript").style = "#252525 dark:#f7f7f7";
    setCurrentCategory(id);
    if (id !== "All") {
      setIsFiltered(false);
    } else {
      setIsFiltered(true);
    }
    document.getElementById(id).style.color = "#739CA6";
  };
  return (
    <Layout>
      <SEO title="All Posts" />
      <Bio className="mt-14" />
      <div className="mt-8 mb-12">
        <span id="All" onClick={onCategory} className="mr-3 text-new-red font-normal text-lg font-display cursor-pointer dark:text-new-white">All</span>
        <span id="TIL" onClick={onCategory} className="mr-3 font-normal text-lg font-display cursor-pointer dark:text-new-white">TIL</span>
        <span id="Algorithms" onClick={onCategory} className="mr-3 font-normal text-lg font-display cursor-pointer dark:text-new-white">Algorithms</span>
        <span id="JS" onClick={onCategory} className="mr-3 font-normal text-lg font-display cursor-pointer dark:text-new-white">JS</span>
        <span id="React" onClick={onCategory} className="mr-3 font-normal text-lg font-display cursor-pointer dark:text-new-white">React</span>
        <span id="TypeScript" onClick={onCategory} className="mr-3 font-normal text-lg font-display cursor-pointer dark:text-new-white">TypeScript</span>
      </div>
      {isFiltered &&
        posts
        .map(({ frontmatter: { title, description, date }, slug }) => (
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
      {!isFiltered && 
        posts
        .filter(({ frontmatter: { category } }) => category === currentCategory)
        .map(({ frontmatter: { title, description, date }, slug }) => (
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
      ))
      }
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
