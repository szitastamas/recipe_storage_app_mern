import React, { useContext, Fragment } from 'react';
import AlertContext from '../../contexts/alert/AlertContext';

export const Alerts = () => {
    const alertContext = useContext(AlertContext);

    return (
        <Fragment>
            {alertContext.alerts.length > 0 &&
                alertContext.alerts.map(alert => {
                    const alertColor = alert.type === 'success' ? 'green white-text' : 'red darken-2 white-text';

                    return (
                        <div key={alert.id} className={`card-panel custom-alert ${alertColor} center alert-msg`}>
                            <i className='material-icons left'>warning</i>
                            {alert.msg}
                        </div>
                    );
                })}
        </Fragment>
    );
};
