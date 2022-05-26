import React from 'react'
import { useRouter } from 'next/router'

const Student = () => {

    const router = useRouter()

    const studentId = router.query.id

  return (
    <div>Student</div>
  )
}

export default Student