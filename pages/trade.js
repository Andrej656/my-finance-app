import MainLayout from '../layouts/MainLayout';
import TradePanel from '../components/TradePanel';
import Chart from '../components/Chart';
import OrderBook from '../components/OrderBook';

export default function Trade() {
  return (
    <MainLayout>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Chart />
          </div>
          <div>
            <TradePanel />
            <OrderBook />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
