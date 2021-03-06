import React from 'react';
import CityInputContainer from '../containers/CityInputContainer';

const styles = {
  container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '92vh',
		width: '100%',
		color: 'black'
	}
};

function Home(props){
	return(
		<div
      style={styles.container}
      className="container">
			<div className="row">
				<div>
					<h2> Today's Weather </h2>
					<CityInputContainer />
				</div>
			</div>
		</div>
	)
}

module.exports = Home;
