export function CollectionFilters({ filters, setFilters }) {

    return (
        <>
        <fieldset className='filter-group'>
            <legend>Listening Status</legend>
            <label>All Albums
                <input 
                type='radio' 
                name="listenFilter" 
                value="all" 
                checked={filters.listened === 'all'}
                onChange={e => setFilters(prev => ({...prev, listened: e.target.value}))}
                />
            </label>

            <label>Listened
            <input 
                type='radio' 
                name="listenFilter" 
                value="listened" 
                checked={filters.listened === 'listened'}
                onChange={e => setFilters(prev => ({...prev, listened: e.target.value}))}
                />
            </label>

            <label>Not Listened
            <input 
                type='radio' 
                name="listenFilter" 
                value="not-listened" 
                checked={filters.listened === 'not-listened'}
                onChange={e => setFilters(prev => ({...prev, listened: e.target.value}))}
                />
            </label>
        </fieldset>
        
        <fieldset className='filter-group'>
            <legend>Rating</legend>
        <label>Unrated
            <input 
            type='radio' 
            name="ratingFilter" 
            value="unrated" 
            checked={filters.rating === 'unrated'}
            onChange={e => setFilters(prev => ({...prev, rating: e.target.value}))}
            />
        </label>
        <label>1
            <input 
            type='radio' 
            name="ratingFilter" 
            value="1" 
            checked={filters.rating === '1'}
            onChange={e => setFilters(prev => ({...prev, rating: e.target.value}))}
            />
        </label>
        <label>2
            <input 
            type='radio' 
            name="ratingFilter" 
            value="2" 
            checked={filters.rating === '2'}
            onChange={e => setFilters(prev => ({...prev, rating: e.target.value}))}
            />
        </label>
        <label>3
            <input 
            type='radio' 
            name="ratingFilter" 
            value="3" 
            checked={filters.rating === '3'}
            onChange={e => setFilters(prev => ({...prev, rating: e.target.value}))}
            />
        </label>
        <label>4
            <input 
            type='radio' 
            name="ratingFilter" 
            value="4" 
            checked={filters.rating === '4'}
            onChange={e => setFilters(prev => ({...prev, rating: e.target.value}))}
            />
        </label>
        <label>5
            <input 
            type='radio' 
            name="ratingFilter" 
            value="5" 
            checked={filters.rating === '5'}
            onChange={e => setFilters(prev => ({...prev, rating: e.target.value}))}
            />
        </label>
        <label>All
            <input 
            type='radio' 
            name="ratingFilter" 
            value="all" 
            checked={filters.rating === 'all'}
            onChange={e => setFilters(prev => ({...prev, rating: e.target.value}))}
            />
        </label>
        </fieldset>
        </>
    )
}