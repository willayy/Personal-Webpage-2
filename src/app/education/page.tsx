import List from '@/components/List/List';
import EducationListItem from '@/components/EducationListItem/EducationListItem';
import educationDataRaw from '@/data/education.json';

const listBox = 'listBox'

export default async function EducationPage() {

    const educationData = educationDataRaw;

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
