import { supabase } from "../Supabase/supabaseClient";
import { useEffect, useState } from "react";
import "./Sponsors.css";

const Sponsors = () => {
	//getting sponser data from db
	const [data, setData] = useState("");
	const getData = async () => {
		try {
			const { data, error, status } = await supabase
				.from("sponsors")
				.select("*");

			if (error && status !== 406) {
				throw error;
			}

			if (data) {
				setData(data);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="sponsors">
			<p>Our Sponsors</p>
			<div>
				{data?.length > 0 &&
					data?.map((sponsors, id) => {
						return (
							<img key={id} src={sponsors.sponsor_icon_url} alt="sponsers" />
						);
					})}
			</div>
		</div>
	);
};

export default Sponsors;
