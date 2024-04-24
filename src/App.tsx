import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MovieDetails, PopularMovies } from '@/pages'
import { Layout } from '@/layout'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
