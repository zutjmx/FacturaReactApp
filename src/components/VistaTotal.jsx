import PropTypes from 'prop-types';

const VistaTotal = ({total}) => {
    return (
        <>
        <div className="text-end">
            <span className="badge bg-info"><strong>Total: </strong>{total}</span>
        </div>
        </>
    );
}

VistaTotal.propTypes = {
    total: PropTypes.number.isRequired
}

export {
    VistaTotal
}
