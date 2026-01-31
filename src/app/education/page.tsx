import { Education } from '@/utils/types';
import List from '@/components/List/List';
import EducationListItem from '@/components/EducationListItem/EducationListItem';
import { baseUrl, fetchAndParse } from '@/utils/fetchAndParse';

const listBox = 'listBox'

export default async function EducationPage() {

    const educationData: Education[] = await fetchAndParse(baseUrl + '/data/education.json')

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

        </main>

    );

}
