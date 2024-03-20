import {Link} from "react-router-dom";
import {RxDashboard} from "react-icons/rx";
import {FaShoppingBag} from "react-icons/fa";
import {GoPeople} from "react-icons/go";
import {FaFileImport} from "react-icons/fa";

const AdminSidebar = () => {
	return (
		<aside>
			<h2>logo</h2>
			<div>
				<h5>Dashboard</h5>
				<ul>
					<li>
						<Link to={"/admin/dashboard"}>
							<RxDashboard />
							Dashboard
						</Link>
					</li>
					<li>
						<Link to={"/admin/product"}>
							<FaShoppingBag />
							Products
						</Link>
					</li>
					<li>
						<Link to={"/admin/customer"}>
							<GoPeople />
							Customer
						</Link>
					</li>
					<li>
						<Link to={"/admin/transaction"}>
							<FaFileImport />
							Transaction
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
};
// interface LinkProps {
// 	url: string;
// 	text: string;
// 	location: Location;
// 	icon: IconType;
// }
// const Li = ({url, location, icon, text}: LinkProps) => (
// 	<li>
// 		<Link to={url}>
// 			{icon}
// 			{text}
// 		</Link>
// 	</li>
// );

export default AdminSidebar;
