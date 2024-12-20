import styles from './List.module.css';

interface ListProperties {

    children: React.ReactNode

}

export default function List({ children }: ListProperties) {
    
    return (

        <ol className={ styles.projectsList }>

            {children}

        </ol>

    );
}
