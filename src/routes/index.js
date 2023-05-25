// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const JobsRecommendation = lazy(() => import('../pages/protected/Jobs'))
const FindJobs = lazy(() => import('../pages/protected/FindJobs'))
const SortResume = lazy(() => import('../pages/protected/SortResume'))
const ResumeAnalysis = lazy(() => import('../pages/protected/ResumeAnalysis'))
const JobDetails = lazy(() => import('../pages/protected/JobDetails'))
const Integration = lazy(() => import('../pages/protected/Integration'))
const Team = lazy(() => import('../pages/protected/Team'))
const Bills = lazy(() => import('../pages/protected/Bills'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const DocComponents = lazy(() => import('../pages/DocComponents'))


const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/get-recommendation',
    component: JobsRecommendation,
  },
  {
    path: '/find-jobs',
    component: FindJobs,
  },
  {
    path: '/sort-resume',
    component: SortResume,
  },
  {
    path: '/resume-analysis',
    component: ResumeAnalysis,
  },
  {
    path: 'find-jobs/get_job_by_id/:job_id',
    component: JobDetails,
  },
  {
    path: 'get-recommendation/get_job_by_id/:job_id',
    component: JobDetails,
  },
  {
    path: '/settings-team',
    component: Team,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/settings-billing',
    component: Bills,
  },
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/features',
    component: DocFeatures,
  },
  {
    path: '/components',
    component: DocComponents,
  },
  {
    path: '/integration',
    component: Integration,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
