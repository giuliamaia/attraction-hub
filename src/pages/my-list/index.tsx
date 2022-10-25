import { Tabs } from '@mantine/core';
import Header from '../../components/header';
import './styles.scss';

const MyList = () => {
    return (
        <article className="my-list-page">
            <Header logged={true} />
            <main className="my-list-page__main">
                <Tabs defaultValue="first" variant='pills'>
                    <Tabs.List grow position="center">
                        <Tabs.Tab value="first">First tab</Tabs.Tab>
                        <Tabs.Tab value="second">Second tab</Tabs.Tab>
                        <Tabs.Tab value="third">Third tab</Tabs.Tab>
                    </Tabs.List>
                </Tabs>
            </main>
        </article>
    );
}

export default MyList;

