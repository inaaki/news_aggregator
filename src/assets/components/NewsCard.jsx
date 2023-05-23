export default function NewsCard(props) {
  const { title, description, img_url, tags, date, source_link } = props

  return (
    <div className="max-w-xl 2xl:max-w-3xl rounded overflow-hidden shadow-lg bg-gray-50 border border-solid border-gray-200">
      <img src={img_url} alt="news" className="h-32 w-full object-cover" />
      <div className="text-right">
        <span className="ml-auto inline-block text-sm">{date}</span>
      </div>
      <div className="px-6 py-0">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
      <div className="px-6 py-4 flex flex-wrap justify-between">
        <div className="flex-1">
          {/* showing multiple tags */}
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700 mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex-none">
          <a
            href={source_link}
            target="_blank"
            className="ml-4 cursor-pointer text-base rounded-md shadow-md px-2 py-1"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  )
}
