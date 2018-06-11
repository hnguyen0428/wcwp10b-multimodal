import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import {styles} from './styles';
import ReactPlayer from 'react-player';


const tractorHorseChart = require('../assets/tractor_to_horses.jpg');
const costWeedingChart = require('../assets/cost_of_weeding.png');


class Article extends Component {
    constructor(props) {
        super(props);

        this.state ={
            videoWidth: 800,
            videoHeight: 600
        };
    }

    componentDidMount() {
        let parentWidth = this.refs.articleContainer.clientWidth;
        let parentHeight = parentWidth / 16 * 9;
        this.setState({
            videoWidth: parentWidth,
            videoHeight: parentHeight
        });
    }

    render() {
        return (
            <div>
                <div style={styles.articleBackground}>
                    <div style={styles.articleContainer}>
                        <h2>Author: Hoang Nguyen</h2>
                        <p style={styles.articleText}>
                            Mechanization of agriculture has widely been known as an effective way to increase farm
                            productivity. It has also had negative perceptions from people because of its potential to
                            reduce employment rate. But why does mechanization matter? With the rising issues of
                            overpopulation, which leads to hunger problems, we need to find ways to make food not only
                            more affordable, but also more abundant. However, the lack of support from people makes it
                            very hard for this change to be implemented. According to The Guardian, more than 70% of
                            people in the United States have the vision that in the future, machines will take over the
                            jobs of our people. What people do not realize is that mechanization has the potential to
                            bring in more better-paid jobs.
                        </p>

                        <p style={styles.articleText}>
                            Today, we produce a tremendous amount of products more than what could have produced in the
                            past. A lot of this change is thanks to the invention of the tractor, which has made the
                            jobs of farmers much easier than before.
                        </p>
                    </div>
                </div>

                <div style={styles.tToHorseImageContainer}>
                    <Image src={tractorHorseChart} style={styles.centerImage} responsive/>
                </div>

                <div style={styles.articleBackground}>
                    <div style={styles.articleContainer}>
                        <p style={styles.articleText}>
                            Here, we see that with the invention of farm tractors, horses and mules were heavily
                            replaced and in approximately 50 years, the number of tractors is 9 times more than that of
                            the number of horses and mules. This increase in farm products production rate attributed to
                            a stronger farm industry, attracting many investors into the agriculture business.
                        </p>
                        <p style={styles.articleText}>
                            With the technologies we have today, the amplification in farm products production rate is
                            even more than before. I’m sure most of you have heard of the buzzwords that fly around the
                            media such as neural networks, artificial intelligence, machine learning, etc…. These are
                            the keys to new automation technologies that engineers are creating. Fully automatic robots
                            are now not just in the realm of science fiction movies. We have technologies that can
                            automatically weed lettuce and they can do the task much more efficiently than humans can.
                        </p>
                    </div>
                </div>

                <div style={styles.costWeedingImageContainer}>
                    <Image src={costWeedingChart} style={styles.centerImage} responsive/>
                </div>

                <div style={styles.articleBackground}>
                    <div style={styles.articleContainer} ref="articleContainer">
                        <p style={styles.articleText}>
                            Here we can see that the cost of using human labor is growing more and more over the year
                            while the cost using robotic labor is decreasing. The robot can do the job more efficiently
                            and also cost less to use, making it the obvious choice to use. Not only that, this task
                            helps prevent farmers from being exposed to chemicals that can potentially cause cancer.
                            Again, this is just one of many examples of the benefits of automatic farming technologies.
                        </p>

                        <ReactPlayer url="https://www.youtube.com/watch?v=Rl77FVobxVI"
                                     width={this.state.videoWidth}
                                     height={this.state.videoHeight}
                                     ref="videoPlayer"/>

                        <p style={styles.articleText}>
                            People are right to be concerned that these technologies have the possibility of replacing
                            farmers’ jobs. And they’re right! The whole purpose of implementing these new technologies
                            is to replace farmers with a better and more efficient alternative. However, with the
                            adoption of these technologies comes new jobs. In the past when tractors were invented, jobs
                            such as being tractor operator arise and they are also better-paid than the usual field
                            work. One example of such is that in Nepal, being a tractor operator became more desirable
                            than the regular field jobs because of its higher pay. Evidently, there will be a shift in
                            job types, but this shift is not necessarily a negative effect. In the past, our society had
                            undergone many changes in order to get to where it is today. It goes to show that changes
                            are necessary in order to advance further. Having machines automating our jobs is a positive
                            thing, as now we can shift toward working on other tasks that could advance society further.
                        </p>

                        <p style={styles.articleText}>
                            Why should you, as college students, care about this matter? As mentioned before, increasing
                            farm products production rate not only is beneficial to the farms but also essential to
                            solving real world problems. Fear of losing menial jobs should never be the cause that stops
                            us from advancing technologically and from solving a grander problem such as world hunger.
                            As citizens of our society, we are entitled to a responsibility that is to maintain the
                            world we live in. We cannot ignore the world problems that are currently happening because
                            we will eventually be the ones who pay for them. We, as students, might not have the power
                            to directly implement these changes, but voicing our support for the issue is one way to get
                            the people who are in power to listen. So when you’re in a position to affect these kinds of
                            issue, think twice.
                        </p>

                        <h3>References:</h3>
                        <a href="https://www.cnbc.com/2016/09/16/future-of-farming-driverless-tractors-ag-robots.html">
                            https://www.cnbc.com/2016/09/16/future-of-farming-driverless-tractors-ag-robots.html
                        </a>
                        <br/>
                        <a href="https://www.theguardian.com/technology/2017/oct/04/robots-artificial-intelligence-machines-us-survey">
                            https://www.theguardian.com/technology/2017/oct/04/robots-artificial-intelligence-machines-us-survey
                        </a>
                        <br/>
                        <a href="https://eh.net/encyclopedia/economic-history-of-tractors-in-the-united-states/ ">
                            https://eh.net/encyclopedia/economic-history-of-tractors-in-the-united-states/
                        </a>
                        <br/>
                        <a href="https://qz.com/726667/cheap-robots-are-coming-for-our-farm-jobs-by-taking-the-most-brutal-tasks-first/">
                            https://qz.com/726667/cheap-robots-are-coming-for-our-farm-jobs-by-taking-the-most-brutal-tasks-first/
                        </a>

                    </div>
                </div>

            </div>
        );
    }
}


export default Article;