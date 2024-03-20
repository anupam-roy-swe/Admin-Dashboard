import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Suspense, lazy} from "react";
import Loader from "./component/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Product = lazy(() => import("./pages/Product"));
const Transaction = lazy(() => import("./pages/Transaction"));
const App = () => {
	return (
		<div>
			<Router>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route
							path='/admin/dashboard'
							element={<Dashboard />}
						/>
						<Route
							path='/admin/customers'
							element={<Customers />}
						/>
						<Route
							path='/admin/products'
							element={<Product />}
						/>
						<Route
							path='/admin/transaction'
							element={<Transaction />}
						/>
					</Routes>
				</Suspense>
			</Router>
		</div>
	);
};

export default App;
