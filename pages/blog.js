import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`} >
            <a>{props.id}</a>
        </Link>
    </li>
);

const Blog = (props) => {
    return (
        < Layout >
            <h1>My Blog</h1>
            <ul>
                {props.countries.map(c => {
                    return <PostLink key={c.code} id={c.name} />
                })}
            </ul>
            <style jsx>{`
                h1,
                a {
                font-family: 'Arial';
                }

                ul {
                padding: 0px;
                }

                li {
                list-style: none;
                margin: 5px 0;
                }

                a {
                text-decoration: none;
                color: blue;
                }

                a:hover {
                opacity: 0.6;
                }
            `}</style>
        </Layout >
    );
}

Blog.getInitialProps = async () => {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        countries: data.map(country => { return { name: country.name, code: country.alpha3Code } })
    };
}

export default Blog;