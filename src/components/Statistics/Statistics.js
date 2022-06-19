import s from '../Profile/Profile.module.css';
import styles from './Statistics.module.css'
import PropTypes from 'prop-types';

export default function Statistics(props) {

    const { title, stats } = props;

  return <section className={s.List}>
    {title && <h2 className="title">{ title }</h2>}
        
  <ul className={s.Stats}>
      {stats.map(stat => (
    <li key={ stat.id} className={styles.Item} style = {{backgroundColor: getRandomHexColor()}}>
                
        <span className="label">{stat.label}</span>
        <span className="percentage">{ stat.percentage}%</span>
                
    </li>))}
  </ul>
</section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
