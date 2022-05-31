import React from 'react'
import TaskBar from '../components/TaskBar'

const HowToPage = () => {
    return (
        <>

            <TaskBar />
            <div className="margin">

                <center>
                    <h2> To view the pollution levels </h2>
                </center>



                <center> 1. Select <b> Monitor </b> at the top bar of the website. </center>
                <center> 2. In the middle of the screen select <b> Now </b> to view the current pollution levels. </center>
                <center> 3. select <b> Hour </b> to view historical pollution levels. </center>




                <center>
                    <h2> To log out </h2>
                </center>

                <center> 1. Select the <b> Log out </b> button on the top right. </center>
                <center> 2. You will be taken to the login page where you can <b> log in</b>. </center>

                <center>
                    <h2> To have your registered credentials removed from our service </h2>
                    <center> Email <b> ealvaeus@kth.se </b> stating that you want your information removed. </center>

                </center>
            </div>
        </>
    )
}

export default HowToPage
