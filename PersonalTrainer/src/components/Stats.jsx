import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Rectangle } from 'recharts';
import { useEffect, useState } from "react";
import * as React from 'react';

export default function Stats() {

    const URL = 'https://customerrestservice-personaltraining.rahtiapp.fi/gettrainings';

    const [trainings, setTrainings] = useState([]);

    const [rightTrainings, setRightTrainings] = useState([{
        activity: '',
        duration: ''
    }]);

    // hae treenit ekalla renderillä
    useEffect(() => {
        getTrainings();
    }, []);

    // fetchaa treenit
    const getTrainings = () => {
        fetch(URL)
            .then(response => response.json())
            .then(responseData => {
                setTrainings(responseData);
                //console.log(responseData);
                calculateData(responseData);
            })
            .catch(error => console.error(error));
    }

    const testidata = [
        {
            activity: 'Zumba',
            duration: 240,
        },
        {
            activity: 'Gym',
            duration: 139,
        },
    ];

    // käydään kaikki treenit läpi, otetaan activity ja duratition talteen
    
    const calculateData = (trainings) => {
        const dataMap = new Map([]);

        trainings.map(training => {
            const activity = training.activity;
            const duration = training.duration;

            if (dataMap.has(activity)) {
                dataMap.set(activity, dataMap.get(activity) + duration);
            } else {
                dataMap.set(activity, duration);
            }
        });
        //console.log(dataMap)

        var rightList = [];
        dataMap.forEach((duration, activity) => {
            rightList.push({ activity, duration });
            //console.log(rightList);
        });

        // muutetaan ne chartin vaatiman muotoon
        const transformedData = [];

        dataMap.forEach((duration, activity) => {
            transformedData.push({
                activity,
                duration
            });
        });

        //console.log(transformedData);
        return transformedData;
    }

    //
    const rightDataList = calculateData(trainings);

    return (
        <div style={{ width: '100%', height: 1000 }}>
            <ResponsiveContainer style={{ width: '60%', height: 800 }}>
                <BarChart
                    data={rightDataList}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="4 5" />
                    <XAxis dataKey="activity" />
                    <YAxis label={{ value: 'Duration (mins)', position: 'top' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="duration" fill="#f6b26b" activeBar={<Rectangle fill="#3575db" stroke="blue" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );

}
