import React from 'react'
import Alert from '../../components/alert/Alert';
import CreateWorkButton from '../../components/create-work-log/CreateWorkLogButton';
import WorkLogs from '../../components/work-logs/WorkLog';
const Index=()=> {
 
    return (
       <>
       <Alert/>
       <CreateWorkButton/>
       <WorkLogs/>
       </>
    )
}

export default Index
