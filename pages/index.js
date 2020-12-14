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
    document.getElementById("JavaScript").style.fontWeight = "400";
    document.getElementById("ReactJS").style.fontWeight = "400";
    document.getElementById("NextJS").style.fontWeight = "400";
    document.getElementById("Career").style.fontWeight = "400";
    document.getElementById("All").classList.remove("text-new-red");
    document.getElementById("All").style = "#1d2323 dark:#fafafa";
    document.getElementById("TIL").style = "#1d2323 dark:#fafafa";
    document.getElementById("JavaScript").style = "#1d2323 dark:#fafafa";
    document.getElementById("ReactJS").style = "#1d2323 dark:#fafafa";
    document.getElementById("NextJS").style = "#1d2323 dark:#fafafa";
    document.getElementById("Career").style = "#1d2323 dark:#fafafa";
    setCurrentCategory(id);
    if (id !== "All") {
      setIsFiltered(false);
    } else {
      setIsFiltered(true);
    }
    document.getElementById(id).style.color = "#F1825E";
  };
  return (
    <Layout>
      <SEO title="All Posts" />
      <link rel="shortcut icon" href="./favicon.ico" />
      <Bio className="mt-14" />
      <div className="mt-8 mb-12">
        <span id="All" onClick={onCategory} className="mr-3 text-new-red font-normal text-lg font-display cursor-pointer dark:text-new-white">All</span>
        <span id="TIL" onClick={onCategory} className="mr-3 font-normal text-lg font-display cursor-pointer dark:text-new-white">TIL</span>
        <span id="JavaScript" onClick={onCategory} className="mr-3 font-normal text-lg font-display cursor-pointer dark:text-new-white">JavaScript</span>
        <span id="ReactJS" onClick={onCategory} className="mr-3 font-normal text-lg font-display cursor-pointer dark:text-new-white">ReactJS</span>
        <span id="NextJS" onClick={onCategory} className="mr-3 font-normal text-lg font-display cursor-pointer dark:text-new-white">NextJS</span>
        <span id="Career" onClick={onCategory} className="mr-3 font-normal text-lg font-display cursor-pointer dark:text-new-white">Career</span>
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
