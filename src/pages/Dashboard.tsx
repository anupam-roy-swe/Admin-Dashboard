import {BsSearch} from "react-icons/bs";

const dashboard = () => {
	return (
		<div className='admin-container'>
			<AdminSidebar />
			<main className='dashboard'>
				<div className='bar'>
					<BsSearch />
					<input
						type='text'
						placeholder='Search for data, users, docs'
					/>
					<img
						src=''
						alt=''
					/>
				</div>

				<section className='widget-container'>
					<WidgetItem
						percent={40}
						amount={true}
						value={340000}
						heading='Revenue'
						color='rgb(0,115,255)'
					/>
					<WidgetItem
						percent={-14}
						value={400}
						heading='Users'
						color='rgb(0 198 202)'
					/>
					<WidgetItem
						percent={80}
						value={23000}
						heading='Transactions'
						color='rgb(255 196 0)'
					/>
					<WidgetItem
						percent={30}
						value={1000}
						heading='Products'
						color='rgb(76 0 255)'
					/>
				</section>

				<section className='graph-container'>
					<div className='revenue-chart'>
						<h2>Revenue & Transaction</h2>
						{/* Grapph here */}
					</div>

					<div className='dashboard-categories'>
						<h2>Inventory</h2>
					</div>
				</section>

				<section className='transaction-container'>
					<div className='gender-chart'>
						<h2>Gender Ratio</h2>

						<DoughnutChart
							labels={["Female", "Male"]}
							data={[12, 19]}
							backgroundColor={[
								"hsl(340,82%,56%)",
								"rgba(53,162,235,0.8)",
							]}
							cutout={90}
						/>

						<p></p>
					</div>
				</section>
			</main>
		</div>
	);
};

interface WidgetItemProps {
	heading: string;
	value: number;
	percent: number;
	color: string;
	amount?: boolean;
}

const WidgetItem = ({
	heading,
	value,
	percent,
	color,
	amount = false,
}: WidgetItemProps) => (
	<article className='widget'>
		<div className='widget-info'>
			<p>{heading}</p>
			<h4>{amount ? `$${value}` : value}</h4>
			{percent > 0 ? (
				<span className='green'>
					<HiTrendingUp /> +{percent}%{" "}
				</span>
			) : (
				<span className='red'>
					<HiTrendingDown /> {percent}%{" "}
				</span>
			)}
		</div>

		<div
			className='widget-circle'
			style={{
				background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255, 255, 255) 0
      )`,
			}}
		>
			<span
				style={{
					color,
				}}
			>
				{percent}%
			</span>
		</div>
	</article>
);

interface CategoryItemProps {
	color: string;
	value: number;
	heading: string;
}

const CategoryItem = ({color, value, heading}: CategoryItemProps) => (
	<div className='category-item'>
		<h5>{heading}</h5>
		<div>
			<div
				style={{
					backgroundColor: color,
					width: `${value}%`,
				}}
			></div>
		</div>
		<span>{value}%</span>
	</div>
);

export default dashboard;
