import SearchBar from '@components/Search';
import StockList from '@components/StockList'

export const StockOverview = () => {
  
    return (
        <div className="overview-container">
          <SearchBar />
          <StockList />
        </div>
    )
}