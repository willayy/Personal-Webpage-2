import styles from './List.module.css';

interface ListProperties {

    children: React.ReactNode

}

export default function List({ children }: Readonly<ListProperties>) {
    
    return (

        <ol className={ styles.projectsList }>

            {children}

        </ol>

    );
}
