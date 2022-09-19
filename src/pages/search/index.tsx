import Header from '../../components/header';
import Logo from '../../components/logo';
import SearchInput from '../../components/search-input';
import './styles.scss';

const Search = () => {
    return (
        <article className="search-page">
            <Header logged={true}/>
            <main className="search-page__main">
                <section className="search-page__main__title">
                    <Logo type='default' width='250px'/>
                    <p>Search for movies, series, animes, docs...</p>
                </section>
                <section className='search-page__main__tools'>
                    {/* tabs */}
                    <SearchInput />
                </section>
                <section className='search-page__main__results'>
                    filmes e series
                </section>
            </main>
        </article>
    );
}

export default Search;

