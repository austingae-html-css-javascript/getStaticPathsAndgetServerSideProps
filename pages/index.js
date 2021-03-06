import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({worldLeaders}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {
          worldLeaders.map((worldLeader) => {
            return (
              <div key={worldLeader.name}>
                <h3>{worldLeader.name}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export async function getStaticProps() {
  let response = await fetch(`https://raw.githubusercontent.com/austingae/json-practice/main/JSON/world-leaders.json`);
  let data = await response.json();
  
  let worldLeaders = data.worldLeaders;

  return {
    props: {
      worldLeaders: worldLeaders,
    },
  }
}

/*
getStaticProps will get the data at only build time. 
Therefore, if I add new data, then the website page will not show the new data.
To show the new data, I will need to do build again.
CORRECT!



getServerSideProps will get the data before the website page loads. 
Therefore, if I add new data, and I reload the page, then the website page will
show the new data. 
CORRECT!
*/