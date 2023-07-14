/** Icons are imported separatly to reduce build time */
import BellIcon from '@heroicons/react/24/outline/BellIcon'
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon'
import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon'
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon'
import ShieldCheckIcon from '@heroicons/react/24/outline/ShieldCheckIcon'
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon'
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import KeyIcon from '@heroicons/react/24/outline/KeyIcon'
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard',
  },
  

  {
    path: '', //no url needed as this has submenu
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'HR Panel', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/sort-resume', // url
        icon: <InboxArrowDownIcon className={iconClasses}/>, // icon component
        name: 'Sort Resumes Based on Job Description', // name that appear in Sidebar
      },
    ]
  },
  {
    path: '', //no url needed as this has submenu
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Jobs', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/get-recommendation', // url
        icon: <InboxArrowDownIcon className={iconClasses}/>, // icon component
        name: 'Get Recommendations', // name that appear in Sidebar
      },
      {
        path: '/app/find-jobs', // url
        icon: <InboxArrowDownIcon className={iconClasses}/>, // icon component
        name: 'Find Jobs', // name that appear in Sidebar
      },
    
      {
        path: '/app/resume-analysis', // url
        icon: <InboxArrowDownIcon className={iconClasses}/>, // icon component
        name: 'Resume Analysis', // name that appear in Sidebar
      },
    ]
  },

  // {
  //   path: '/app/charts', // url
  //   icon: <ChartBarIcon className={iconClasses}/>, // icon component
  //   name: 'Charts', // name that appear in Sidebar
  // }, 
]

export default routes


