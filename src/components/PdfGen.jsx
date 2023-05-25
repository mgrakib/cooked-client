import React from 'react';
import { Document, Page, Text } from "@react-pdf/renderer";

const MyPDF = () => {
	return (
		<Document>
			<Page>
				<div >
					<Text>
						This is about blog section. Here i answred some question
						and it's really really amazing. Because i am makeing a
						PDF now i feel i am a web designer...
					</Text>
				</div>
			</Page>
		</Document>
	);
};

export default MyPDF;