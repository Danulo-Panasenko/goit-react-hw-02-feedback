import PropTypes from 'prop-types';
import css from './Section.module.css';
const Section = ({ title, children }) => {
  return (
    <div className={css.block}>
      <h4 className={css.title}>{title}</h4>
      {children}
    </div>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
