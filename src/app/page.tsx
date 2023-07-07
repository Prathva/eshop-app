type Repository = {
  id: number;
  name: string;
  full_name: string;
  topics: string[];
};

export default async function Home() {

  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const data: Repository = await res.json();
  const topics = data.topics;
  // console.log(topics);

  return (
    <>
      {
        topics.map((topic) => {
          return (
            <>
              <ol type="A">
                <li>{topic}</li>
              </ol>
            </>
          )
        })
      }
    </>
  )
}
