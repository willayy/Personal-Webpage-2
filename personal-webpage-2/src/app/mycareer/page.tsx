import EmploymentListItem from '@/components/EmploymentListItem/EmploymentListItem';
import { Employment } from '@/utils/employment';
import List from '@/components/List/List';
import { useEffect, useState } from 'react';

const listBox = 'listBox'

export default async function Projects() {

    const data: [Employment] = await fetch('resources/employments.json')
    .then((res) => res.json())
    .then((json) => JSON.parse(JSON.stringify(json)))

    return (

        <main>

        <div className={ listBox + " roboto-regular"}>

            <h1> Employments </h1>

            <List>

            {

                data.map((employment) => (

                    <EmploymentListItem
                        position={employment.position}
                        organization={employment.organization}
                        startDate={employment.startDate}
                        endDate={employment.endDate}
                        description={employment.description}
                        key={employment.id}
                    />

                ))

            }

            </List>

        </div>

        </main>

    );

}