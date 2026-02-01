import EmploymentListItem from '@/components/EmploymentListItem/EmploymentListItem';
import List from '@/components/List/List';
import employmentDataRaw from '@/data/employments.json';

const listBox = 'listBox'

export default async function Career() {

    const employmentData: any[] = employmentDataRaw.employments;

    return (

        <main>

            <div className={ listBox + " roboto-regular"}>

                <h1> Career </h1>

                <List> {

                    employmentData?.map((employment) => (

                        <EmploymentListItem
                            position={employment.position}
                            organization={employment.organization}
                            startDate={employment.startDate}
                            endDate={employment.endDate}
                            description={employment.description}
                            key={employment.id}
                        />

                    ))

                } </List>

            </div>

        </main>

    );

}