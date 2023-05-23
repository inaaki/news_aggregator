import React from 'react'
import Navbar from '../components/Navbar'
import News from '../components/News'

const news = [
  {
    title: 'title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in tenetur cum minima quam, earum magnam mollitia tempora vel, fugit, provident aliquid quis amet illo alias. Autem fugiat eaque alias.',
    img_url:
      'https://images.unsplash.com/photo-1682686580003-22d3d65399a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    source_link: 'https://www.google.com',
    date: new Date().toDateString(),
  },
  {
    title: 'title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in tenetur cum minima quam, earum magnam mollitia tempora vel, fugit, provident aliquid quis amet illo alias. Autem fugiat eaque alias.',
    img_url:
      'https://images.unsplash.com/photo-1682686580003-22d3d65399a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    source_link: 'https://www.google.com',
    date: new Date().toDateString(),
  },
  {
    title: 'title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in tenetur cum minima quam, earum magnam mollitia tempora vel, fugit, provident aliquid quis amet illo alias. Autem fugiat eaque alias.',
    img_url:
      'https://images.unsplash.com/photo-1682686580003-22d3d65399a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    source_link: 'https://www.google.com',
    date: new Date().toDateString(),
  },
  {
    title: 'title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in tenetur cum minima quam, earum magnam mollitia tempora vel, fugit, provident aliquid quis amet illo alias. Autem fugiat eaque alias.',
    img_url:
      'https://images.unsplash.com/photo-1682686580003-22d3d65399a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    source_link: 'https://www.google.com',
    date: new Date().toDateString(),
  },
]

export default function Home() {
  return (
    <div className="pt-24 md:pt-20 pb-10  grid place-content-center">
      <News news_list={news} />
    </div>
  )
}
