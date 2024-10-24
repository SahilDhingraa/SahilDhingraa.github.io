import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Sahil Dhingra
      </h1>
      <p className="mb-4">
        {`I'm a backend developer specializing in Go and Node.js, utilizing their strengths to build scalable and efficient server-side applications.`}
      </p>
      <div className="my-8">
        {`Location: `} <span className='px-1 underline'>{`Pune, India`}</span>
      </div>
      <div className='my-8 '>
        <div className="flex gap-2">
          {`Email: `} <span className='px-1 underline flex gap-1'>
            <a href="mailto:me@sah1l.com">{`me@sah1l.com`}</a>
          </span>
        </div>
        {/* <div className="my-8">
          <BlogPosts />
        </div> */}
      </div>
    </section>
  )
}
