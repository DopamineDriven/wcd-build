import React, { Component } from "react";
import { NextPageContext } from "next";
import { ObjectId } from "mongodb";
import { Layout, List } from "../components";
import IDataObject from "../interfaces";

type Props = {
	items: IDataObject[];
};

class ListClass extends Component<Props> {
	static async getInitialProps({ pathname }: NextPageContext) {
		const dataArray: IDataObject[] = [
			{
				_id: new ObjectId(),
				id: 1,
				title: "Andrew Ross",
				date: "2020-07-04",
				source: "https://github.com/DopamineDriven",
				image:
					"https://res.cloudinary.com/asross311/image/upload/v1592831978/ASR_Assets/cropped-a_nqaem7.png",
				lead: "CTO",
				content:
					'<p>First and foremost, TypeScript puts the super in superset, especially in a team environment. State management in React can be cumbersome, which is why I consider GraphQL and Apollo to be the dynamic duo. That said, Redux and Recoil each have their use-cases as well.</p><p>As far as primary prebuilts are concerened, the "Next.js" framework is top-notch. It removes the otherwise tedious process of manually configuring Webpack to support a server-side rendering app from the equation. It saves time, simplifies optimization, and delivers blazing fast performance to ultimately enhance end-user experience.</p><p> "The mechanic that would perfect his work must first sharpen his tools." - <em>Confucius</em></p><br />'
			},
			{
				_id: new ObjectId(),
				id: 2,
				title: "Joe Shields",
				date: "2020-07-04",
				source: "https://github.com/JShields30",
				image:
					"https://res.cloudinary.com/asross311/image/upload/v1592801826/ASR_Assets/Joe_vlnzpm.jpg",
				lead: "CEO",
				content:
					"<p>Software Engineer skilled in both back-end and front-end, with particular interest in design and UX-UI experience. My career as a director of market research inspired me to pursue my true passion of creating web applications. I love being creative and unique, but I also appreciate the technical challenges of back-end development. When programming I follow structure and order, since this is essential when creating quality web applications. I enjoy debugging and critiquing small details, as well as optimizing applications. Working in a team setting is ideal, because more knowledge is obtained and retained between developers.</p>"
			},
			{
				_id: new ObjectId(),
				id: 3,
				title: "Genghis Yong",
				date: "2020-07-04",
				source: "https://github.com/yhlee-dho",
				image:
					"https://res.cloudinary.com/asross311/image/upload/v1592800832/ASR_Assets/Yong_ehso3r.png",
				lead: "COO",
				content:
					'<p>Currently working on a new discord bot -- "WAFFLES". Everyone is going to want a piece of that syrupy, flaky, Yonglicious good-good.</p>'
            },
            {
				_id: new ObjectId(),
				id: 4,
				title: pathname,
				date: "2020-07-04",
				source: "https://github.com/yhlee-dho",
				image:
					"https://res.cloudinary.com/asross311/image/upload/v1592800832/ASR_Assets/Yong_ehso3r.png",
				lead: "COO",
				content:
					'<p>Currently working on a new discord bot -- "WAFFLES". Everyone is going to want a piece of that syrupy, flaky, Yonglicious good-good.</p>'
			}
		];
		return { items: dataArray };
	}

	render() {
		return (
			<Layout title="Class Data List">
				<List items={this.props.items} />
			</Layout>
		);
	}
}

export default ListClass;