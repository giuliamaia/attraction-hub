import { Input, SegmentedControl } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { ChangeEvent, useState } from 'react';
import Header from '../../components/header';
import Logo from '../../components/logo';
import './styles.scss';

const Search = () => {
    const [value, setValue] = useState('films');
    const [searchValue, setSearchValue] = useState('');
    return (
        <article className="search-page">
            <Header logged={true} />
            <main className="search-page__main">
                <section className="search-page__main__title">
                    <Logo type='default' width='250px' />
                    <p>Search for movies, series, animes, docs...</p>
                </section>
                <SegmentedControl
                    color="indigo"
                    fullWidth
                    value={value}
                    onChange={setValue}
                    data={[
                        { label: 'Films', value: 'films' },
                        { label: 'Series', value: 'series' },
                        { label: 'Animes', value: 'animes' },
                        { label: 'Docs', value: 'docs' },
                    ]}
                />
                <Input
                    mt={'sm'}
                    icon={<IconSearch />}
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => { setSearchValue(e.target.value) }}
                />
                <section className='search-page__main__tools'>

                </section>
            </main>
        </article>
    );
}

export default Search;

