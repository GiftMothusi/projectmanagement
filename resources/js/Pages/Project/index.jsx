import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'
import { Head } from '@inertiajs/react'

const Index = ({auth,projects}) => {
  return (
   <Authenticated
    user={auth.user}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Project</h2>}
   >

    <Head title="Projects" />

    <div>
        <h1>Projects View</h1>
    </div>

   </Authenticated>
  )
}

export default Index
