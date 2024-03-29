import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">CBO</a>
        <span className="ml-1">&copy; 2021.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://www.linkedin.com/in/dechasa-adeba-256193188/" target="_blank" rel="noopener noreferrer">Dechasa Adeba</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
