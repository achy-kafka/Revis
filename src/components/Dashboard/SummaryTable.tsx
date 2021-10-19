import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Summary.module.scss';
import UpdateInterval from '../Globals/UpdateInterval';

export default function SummaryTable(props) {
  const { metricsForTable } = props;

  return (
    <div className={styles.SummaryWrapper}>
      <div>
        {metricsForTable.length === 0 ? (
          <div>
            <h1>
              <FontAwesomeIcon icon={faSpinner} id={styles.loading} />
            </h1>
          </div>
        ) : (
          <div>
          
            <div className={styles.tableWrapper}>{metricsForTable}</div>
          </div>
        )}
      </div>
      {metricsForTable.length !== 0 && <UpdateInterval />}
    </div>
  );
}
