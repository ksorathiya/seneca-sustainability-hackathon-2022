import React from 'react';
import timeline_icon from '../../images/timeline.png'

const Timeline = () => {

    const timeline = [
        {
            title: 'Registrations Open',
            start_date: 'January 10, 2022',
            end_date: ''
        },
        {
            title: 'Ideation for Challenge Set',
            start_date: 'February 7, 2022',
            end_date: ''
        },
         //{
         //    title: 'Qualifiers',
         //    start_date: 'March 2, 2022',
         //    end_date: ''
         //},
        {
            title: 'Hackathon',
            start_date: 'February 28, 2022',
            end_date: 'March 4, 2022'
        },
        {
            title: 'Venture',
            start_date: 'March 9, 2022',
            end_date: ''
        }
    ]

    return (
        <section className="hero is-medium is-white">
            <div className="hero-body hero-body-2">
                <div className='columns flex-wrap'>
                    <div className='column is-10 is-offset-1'>
                        <h1 className="title">Timeline</h1>
                    </div>
                    <div className='timeline columns column is-10 is-offset-1'>
                    {
                        timeline.map((event, index) => (
                            <div key={index} className='timeline-item column has-text-centered'>
                                <div className='number'>{index + 1}</div>
                                <div className='is-flex is-justify-content-center'><div className='timeline-icon'><img src={timeline_icon} alt="timeline"/></div></div>
                                <div className='subtitle'>{event.title}</div>
                                <div className='date'>{event.start_date} {event.end_date ? 'to' : null}</div>
                                {event.end_date ? <div className='date'>{event.end_date}</div> : null}
                                {index === timeline.length - 1 ? null : <hr className='is-hidden-tablet timeline-hr'/>}
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
