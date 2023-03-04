import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
	return(
		<ul className={css.list}>
	    {options.map((item, index) => {
			return (<li key={index}>
			<button type="button" name={item} onClick={() => onLeaveFeedback(item)}>
			   {item}</button>
			     </li>)
		 })}
		</ul>
	)
}

FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
}


