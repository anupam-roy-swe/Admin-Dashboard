import {Link, useLocation} from "react-router-dom";
import {RxDashboard} from "react-icons/rx";
import {FaShoppingBag} from "react-icons/fa";
import {GoPeople} from "react-icons/go";
import {FaFileImport} from "react-icons/fa";
import {IconType} from "react-icons";
import {FaRocketchat} from "react-icons/fa6";

const AdminSidebar = () => {
	const location = useLocation();
	return (
		<aside>
			<h2>logo</h2>
			<DivOne location={location} />
			<DivTwo location={location} />
			<DivThree location={location} />
		</aside>
	);
};

// chat component
const DivOne = ({location}: {location}) => (
	<div>
		<h5>Dashboard</h5>
		<ul>
			<Li
				url='admin/dashboard'
				text='Dashboard'
				icon={RxDashboard}
				location={location}
			/>
			<Li
				url='admin/product'
				text='Products'
				icon={FaShoppingBag}
				location={location}
			/>
			<Li
				url='/admin/customer'
				text='Customer'
				icon={GoPeople}
				location={location}
			/>
			<Li
				url='/admin/transaction'
				text='Transaction'
				icon={FaFileImport}
				location={location}
			/>
		</ul>
	</div>
);
// chat component

const DivTwo = ({location}: {location}) => (
	<div>
		<h5>Chat</h5>
		<ul>
			<Li
				url='admin/chat/bar'
				text='bar'
				icon={FaRocketchat}
				location={location}
			/>
			<Li
				url='admin/chat/pie'
				text='pai'
				icon={FaRocketchat}
				location={location}
			/>
			<Li
				url='/admin/chat/line'
				text='line'
				icon={GoPeople}
				location={location}
			/>
		</ul>
	</div>
);
// product component

const DivThree = ({location}: {location}) => (
	<div>
		<h5>Product</h5>
		<ul>
			<Li
				url='admin/dashboard'
				text='Dashboard'
				icon={RxDashboard}
				location={location}
			/>
			<Li
				url='admin/product'
				text='Products'
				icon={FaShoppingBag}
				location={location}
			/>
			<Li
				url='/admin/customer'
				text='Customer'
				icon={GoPeople}
				location={location}
			/>
			<Li
				url='/admin/transaction'
				text='Transaction'
				icon={FaFileImport}
				location={location}
			/>
		</ul>
	</div>
);

interface LinkProps {
	url: string;
	text: string;
	location: Location;
	icon: IconType;
}
const Li = ({url, location, icon, text}: LinkProps) => (
	<li
		style={{
			backgroundColor: location.pathname.includes(url)
				? "rgba(0,115,255,0.1)"
				: "white",
		}}
	>
		<Link
			to={url}
			style={{
				color: location.pathname.includes(url)
					? "rgb(0,115,255)"
					: "black",
			}}
		>
			{icon}
			{text}
		</Link>
	</li>
);

export default AdminSidebar;
