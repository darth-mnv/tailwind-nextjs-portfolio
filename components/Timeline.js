import { useState } from 'react'

const Divider = () => {
  return <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
}

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  )
}

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  )
}

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Timeline
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            View the highlights of my life
          </p>
        </div>
      </div>
      <Year>2021</Year>
      <ul>
        <Step title="Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Imperdiet
          massa tincidunt nunc pulvinar.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Imperdiet
          massa tincidunt nunc pulvinar.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Imperdiet
          massa tincidunt nunc pulvinar.
        </Step>
      </ul>
      <Divider />
      <Year>2018</Year>
      <ul>
        <Step title="Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Imperdiet
          massa tincidunt nunc pulvinar.
        </Step>
      </ul>
      <Divider />
      <Year>2017</Year>
      <ul>
        <Step title="Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Imperdiet
          massa tincidunt nunc pulvinar.
        </Step>
      </ul>
      <Divider />
      <Year>2016</Year>
      <ul>
        <Step title="Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Imperdiet
          massa tincidunt nunc pulvinar.
        </Step>
      </ul>
      <Divider />
      <Year>2015</Year>
      <ul>
        <Step title="Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Imperdiet
          massa tincidunt nunc pulvinar.
        </Step>
      </ul>
      <Divider />
      <Year>2014</Year>
      <ul>
        <Step title="Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Imperdiet
          massa tincidunt nunc pulvinar.
        </Step>
      </ul>
      <Divider />
      <Year>2013</Year>
      <ul>
        <Step title="Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Imperdiet
          massa tincidunt nunc pulvinar.
        </Step>
      </ul>
      <Divider />
      <Year>2012</Year>
      <ul>
        <Step title="Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Imperdiet
          massa tincidunt nunc pulvinar.
        </Step>
      </ul>
      <Divider />
      <Year>2011</Year>
      <ul>
        <Step title="Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Imperdiet
          massa tincidunt nunc pulvinar.
        </Step>
      </ul>
      <Divider />
      <Year>2010</Year>
      <ul>
        <Step title="Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Imperdiet
          massa tincidunt nunc pulvinar.
        </Step>
      </ul>
      <Divider />
      <Year>2009</Year>
      <ul>
        <Step title="Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Imperdiet
          massa tincidunt nunc pulvinar.
        </Step>
      </ul>
      <Divider />
      <Year>2008</Year>
      <ul>
        <Step title="Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Imperdiet
          massa tincidunt nunc pulvinar.
        </Step>
      </ul>
      <Divider />
      <Year>2009</Year>
      <ul>
        <Step title="Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Imperdiet
          massa tincidunt nunc pulvinar.
        </Step>
      </ul>
      <Divider />
      <Year>2008</Year>
      <ul>
        <Step title="Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et. Imperdiet
          massa tincidunt nunc pulvinar.
        </Step>
      </ul>
      <Divider />
      <Year>0001</Year>
      <ul>
        <Step title="The beginning of time">End of the BC and start of the AD</Step>
      </ul>
      <Divider />
    </>
  )
}
