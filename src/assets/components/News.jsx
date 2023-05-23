import NewsCard from './NewsCard'

export default function News({ news_list }) {
  return (
    <div className="w-max grid gap-y-10 ">
      {news_list.map((news, idx) => (
        <NewsCard {...news} key={idx + news.title} />
      ))}
    </div>
  )
}
