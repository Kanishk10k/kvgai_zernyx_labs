import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import RdInfrastructurePage from './pages/RdInfrastructurePage/RdInfrastructurePage'
import EngagementModelsPage from './pages/EngagementModelsPage/EngagementModelsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'rd-infrastructure', element: <RdInfrastructurePage /> },
      { path: 'engagement-models', element: <EngagementModelsPage /> },
    ],
  },
])

export default router
