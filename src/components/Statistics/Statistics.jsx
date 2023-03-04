import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({good, neutral, bad, total, positivePercentage}) {
return(
	<ul className={css.list}>
		<li key="good">
			<p>Good: {good}</p>
		</li>
		<li key="neutral">
			<p>Neutral: {neutral}</p>
		</li>
		<li key="bad">
			<p>Bad: {bad}</p>
		</li>
		<li key="total">
			<p>Total: {total}</p>
		</li>
		<li key="positivePercentage">
			<p>Positive Percentage: {positivePercentage}%</p>
		</li>
	</ul>
)
}
Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired,
}