import EmploymentListItem from '@/components/EmploymentListItem/EmploymentListItem';
import { Employment, Education } from '@/utils/careerTypes';
import List from '@/components/List/List';
import EducationListItem from '@/components/EducationListItem/EducationListItem';
import { baseUrl, fetchAndParse } from '@/utils/fetchAndParse';

const listBox = 'listBox'

export default async function Projects() {

    const employmentData: [Employment] = await fetchAndParse(baseUrl + '/data/employments.json')

    const educationData: [Education] = await fetchAndParse(baseUrl + '/data/education.json')

    return (

        <main>
            
            <div className={ listBox + " roboto-regular"}>

                <h1> Education </h1>

                <List> {

                    educationData?.map((education) => (

                        <EducationListItem
                            school={education.school}
                            degree={education.degree}
                            graduation={education.graduation}
                            key={education.id}
                        />

                    ))

                } </List>

            </div>

            <div className={ listBox + " roboto-regular"}>

                <h1> Employments </h1>

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